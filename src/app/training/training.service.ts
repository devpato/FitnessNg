import { Injectable } from "@angular/core";
import { Exercise } from "../models/excercise.model";
import { Subject } from "rxjs/Subject";
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators/map';
import { Subscription } from 'rxjs'
import { UIService } from "../shared/ui.service";

@Injectable()
export class TrainingService {
    private aExcercises: Exercise[]
    private excercises: Exercise[] = [];
    private runningExcercise: Exercise;
    private fbSubs: Subscription[] = [];
    excerciseChanged$ = new Subject<Exercise>();
    excercisesChanged$ = new Subject<Exercise[]>();
    finishedExercises$ = new Subject<Exercise[]>();

    constructor(private db: AngularFirestore, private uiService: UIService) { }

    buildExercises() {
        this.uiService.loadingStateChanged.next(true);
        this.fbSubs.push(this.db.collection('availableExercises').snapshotChanges()
            .pipe(
                map(docArray => {
                    return docArray.map(doc => {
                        return {
                            id: doc.payload.doc.id,
                            name: doc.payload.doc.data()['name'],
                            duration: doc.payload.doc.data()['duration'],
                            calories: doc.payload.doc.data()['calories']
                        };
                    });
                })
            ).subscribe((exercises: Exercise[]) => {
                this.uiService.loadingStateChanged.next(false);
                this.aExcercises = exercises;
                this.excercisesChanged$.next([...this.aExcercises]);
            }));
    }

    getAvailableExcercise(): Exercise[] {
        return this.aExcercises.slice();
    }

    startExcercise(selectedId: string) {

        //Update method Firestore
        // this.db.doc('availableExercises/' + selectedId).update({
        //     lastSelected: new Date()
        // });

        this.runningExcercise = this.aExcercises.find(e => e.id === selectedId);
        this.excerciseChanged$.next({ ...this.runningExcercise });
    }

    getRunnigExercise(): Exercise {
        return { ...this.runningExcercise };
    }

    completeExercise() {
        this.addDataToDB({ ...this.runningExcercise, date: new Date(), state: 'completed' });
        this.runningExcercise = null;
        this.excerciseChanged$.next(null)
    }

    cancelExercise(progress: number) {
        this.addDataToDB(
            {
                ...this.runningExcercise,
                date: new Date(),
                duration: this.runningExcercise.duration * (progress / 100),
                calories: this.runningExcercise.calories * (progress / 100),
                state: 'cancelled'
            }
        );
        this.runningExcercise = null;
        this.excerciseChanged$.next(null)

    }

    getPastExercises(): Exercise[] {
        return this.excercises.slice();
    }

    fetchCompletedOrCancelledExcercises() {
        this.fbSubs.push(this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
            this.finishedExercises$.next(exercises);
        }));
    }

    addDataToDB(e: Exercise) {
        this.db.collection('finishedExercises').add(e);
    }

    cancelSubscriptions() {
        this.fbSubs.forEach(sub => {
            sub.unsubscribe();
        })
    }
}
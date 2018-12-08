import { Injectable } from "@angular/core";
import { Exercise } from "../models/excercise.model";
import { Subject } from "rxjs/Subject";
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class TrainingService {
    private aExcercises: Exercise[]
    private excercises: Exercise[] = [];
    private runningExcercise: Exercise;
    excerciseChanged$ = new Subject<Exercise>();

    constructor(private db: AngularFirestore) { }

    buildExercises() {
        return this.db.collection('availableExercises').valueChanges();
    }

    getAvailableExcercise(): Exercise[] {
        return this.aExcercises.slice();
    }

    startExcercise(selectedId: string) {
        this.runningExcercise = this.aExcercises.find(e => e.id === selectedId);
        this.excerciseChanged$.next({ ...this.runningExcercise });
    }

    getRunnigExercise(): Exercise {
        return { ...this.runningExcercise };
    }

    completeExercise() {
        this.excercises.push({ ...this.runningExcercise, date: new Date(), state: 'completed' });
        this.runningExcercise = null;
        this.excerciseChanged$.next(null)
    }

    cancelExercise(progress: number) {
        this.excercises.push(
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


}
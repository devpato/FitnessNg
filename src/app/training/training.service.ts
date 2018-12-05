import { Exercise } from "../models/excercise.model";
import { Subject } from "rxjs/Subject";

export class TrainingService {
    private aExcercises: Exercise[]
    private excercises: Exercise[] = [];
    private runningExcercise: Exercise;
    excerciseChanged$ = new Subject<Exercise>();

    buildExercises(): Exercise[] {
        return this.aExcercises = [
            { id: 'crunches', name: 'Crunches', duration: 3000, calories: 8 },
            { id: 'touch-toes', name: 'Touch Toes', duration: 1800, calories: 15 },
            { id: 'side-lunges', name: 'Side Lunges', duration: 3000, calories: 18 },
            { id: 'burpees', name: 'Burpees', duration: 6000, calories: 8 }
        ]
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
                calories: this.runningExcercise.duration * (progress / 100),
                state: 'cancelled'
            }
        );
        this.runningExcercise = null;
        this.excerciseChanged$.next(null)

    }


}
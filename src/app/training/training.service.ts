import { Exercise } from "../models/excercise.model";
import { Subject } from "rxjs/Subject";

export class TrainingService {
    private excercises: Exercise[]
    private runningExcercise: Exercise;
    excerciseChanged = new Subject<Exercise>();

    buildExercises(): Exercise[] {
        return this.excercises = [
            { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
            { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
            { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
            { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
        ]
    }

    getAvailableExcercise() {
        return this.excercises.slice();
    }

    startExcercise(selectedId: string) {
        this.runningExcercise = this.excercises.find(e => e.id === selectedId);
        this.excerciseChanged.next({ ...this.runningExcercise });
    }


}
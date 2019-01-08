import { NgModule } from "@angular/core";
import { TrainingComponent } from "./training/training.component";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { StoptrainingComponent } from "./stoptraining/stoptraining.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        StoptrainingComponent],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AngularFirestoreModule],
    providers: [],
    entryComponents: [StoptrainingComponent]
})
export class TrainingModule { }
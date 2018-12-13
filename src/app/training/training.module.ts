import { NgModule } from "@angular/core";
import { TrainingComponent } from "./training/training.component";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../metrial.module";
import { StoptrainingComponent } from "./stoptraining/stoptraining.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFirestoreModule } from "angularfire2/firestore";


@NgModule({
    declarations: [
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        StoptrainingComponent],
    imports: [CommonModule,
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        AngularFirestoreModule],
    providers: [],
    entryComponents: [StoptrainingComponent]
})
export class TrainingModule { }
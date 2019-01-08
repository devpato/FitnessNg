import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrainingComponent } from "./training.component";

const routes: Routes = [
  //We used to have training in the path, but we remove it because the code below will
  //be added to the app-routing anyways.
  { path: "", component: TrainingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule { }
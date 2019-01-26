import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  exercises: Exercise[];
  private exerciseSubscription: Subscription;
  private isLoadingSubscription: Subscription;
  //isLoading = true;
  isLoading$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.onLoading();
    this.exerciseSubscription = this.trainingService.excercisesChanged$.subscribe(exercises => {
      this.exercises = exercises
    });
    this.fetchExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExcercise(form.value.excercise);
  }

  fetchExercises() {
    this.trainingService.buildExercises();
  }

  onLoading() {
    // this.isLoadingSubscription = this.uiService.loadingStateChanged.subscribe(l => {
    //   this.isLoading = l;
    // });
    this.isLoading$ = this.store.pipe(select(fromRoot.getIsLoading));
  }

  ngOnDestroy() {

    if (this.exerciseSubscription) { //Checks for undifiened
      this.exerciseSubscription.unsubscribe();
    }

    if (this.isLoadingSubscription) {
      this.isLoadingSubscription.unsubscribe();
    }

  }

}

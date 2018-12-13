import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  exercises: Exercise[];
  private exerciseSubscription: Subscription;
  private isLoadingSubscription: Subscription;
  isLoading = true;

  constructor(private trainingService: TrainingService, private uiService: UIService) { }

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
    this.isLoadingSubscription = this.uiService.loadingStateChanged.subscribe(l => {
      this.isLoading = l;
    })
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
  }

}

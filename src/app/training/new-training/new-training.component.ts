import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  exercises: Exercise[];
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.excercisesChanged$.subscribe(exercises => this.exercises = exercises);
    this.trainingService.buildExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExcercise(form.value.excercise);
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }

}

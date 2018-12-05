import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Exercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.buildExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExcercise(form.value.excercise);
  }

}

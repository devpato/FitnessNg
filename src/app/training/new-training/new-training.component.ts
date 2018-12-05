import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output()
  trainingStart = new EventEmitter<void>();

  exercises: Exercise[];

  constructor(private training: TrainingService) { }

  ngOnInit() {
    this.exercises = this.training.buildExercises();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}

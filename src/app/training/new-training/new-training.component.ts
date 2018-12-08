import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Observable<any>;

  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    this.exercises = this.trainingService.buildExercises();
    // this.exercises = this.db.collection('availableExercises').valueChanges().pipe(
    //   map(docArray => {
    //     return docArray.map(doc => {
    //       return {
    //         id: doc['id'],
    //         name: doc['name'],
    //         duration: doc['duration'],
    //         calories: doc['calories']
    //       };
    //     });
    //   }))
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExcercise(form.value.excercise);
  }

}

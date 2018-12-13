import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  onGoingTraining = false;
  excerciseSubscription$: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.excerciseSubscription$ = this.trainingService.excerciseChanged$.subscribe(e => {
      if (e) {
        this.onGoingTraining = true
      } else {
        this.onGoingTraining = false;
      }

    });
  }

  ngOnDestroy() {
    if (this.excerciseSubscription$) {
      this.excerciseSubscription$.unsubscribe();
    }
  }



}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StoptrainingComponent } from '../stoptraining/stoptraining.component';
import { TrainingService } from '../training.service';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: any;
  constructor(public dialog: MatDialog, private trainingService: TrainingService) { }


  ngOnInit() {
    this.startOrResume();
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StoptrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResume();
      }
    })
  }

  startOrResume() {
    const step = this.trainingService.getRunnigExercise().duration / 100;
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      } else {
        this.progress += 1;
      }
    }, step);
  }
}


import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StoptrainingComponent } from '../stoptraining/stoptraining.component';


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
  @Output()
  trainingExit = new EventEmitter();
  progress = 0;
  timer: any;
  constructor(public dialog: MatDialog) { }


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
        this.trainingExit.emit();
      } else {
        this.startOrResume();
      }
    })
  }

  startOrResume() {
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(this.timer);
      } else {
        this.progress += 5;
      }
    }, 1000);
  }
}


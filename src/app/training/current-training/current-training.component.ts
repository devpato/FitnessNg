import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  progress = 0;
  timer: number;
  constructor(public dialog: MatDialog) { }


  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }

    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    this.dialog.open(StoptrainingComponent);
  }
}


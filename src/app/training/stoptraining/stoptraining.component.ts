import { Component, OnInit, Inject } from '@angular/core';
import { Progress } from 'src/app/models/progress.model';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stoptraining',
  templateUrl: './stoptraining.component.html',
  styleUrls: ['./stoptraining.component.css']
})
export class StoptrainingComponent implements OnInit {
  progress: number;
  constructor(@Inject(MAT_DIALOG_DATA) private data: Progress) { }

  ngOnInit() {
    this.progress = this.data.progress;
  }

}

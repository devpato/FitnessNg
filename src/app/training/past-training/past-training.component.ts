import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  constructor(private traniningService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.traniningService.getPastExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

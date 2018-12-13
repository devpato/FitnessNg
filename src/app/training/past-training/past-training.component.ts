import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Exercise } from 'src/app/models/excercise.model';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  private exChangedSubscription: Subscription;
  constructor(private traniningService: TrainingService) { }

  ngOnInit() {
    this.exChangedSubscription = this.traniningService.finishedExercises$.subscribe((excercises: Exercise[]) => {
      this.dataSource.data = excercises;
    });
    this.traniningService.fetchCompletedOrCancelledExcercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    if (this.exChangedSubscription) {
      this.exChangedSubscription.unsubscribe();
    }
  }


  doFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workout } from '../workouts.model';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  public workout: Workout;

  constructor(
    private router: ActivatedRoute,
    private workoutService: WorkoutService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param: any): void => {
      this.workout = this.workoutService
        .getWorkouts()
        .find((workout: Workout) => workout.id === +param.id);
    });
  }
}

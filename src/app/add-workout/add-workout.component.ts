import { Component, OnInit } from '@angular/core';
import { Workout } from '../workouts.model';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss'],
})
export class AddWorkoutComponent implements OnInit {
  public typeOptions: any[];
  public workout: Workout;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workout = new Workout();
    this.initializeTypeOptions();
  }

  public initializeTypeOptions(): void {
    this.typeOptions = ['Bike', 'Lift Weights', 'Play Sport', 'Run'];
  }

  public addWorkout(): void {
    this.workout.id = 4;
    this.workoutService.addWorkout(this.workout);
  }
}

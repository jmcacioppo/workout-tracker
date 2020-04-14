import { Injectable } from '@angular/core';
import { Workout } from './workouts.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  workouts: Workout[];

  constructor() {
    this.initialize();
  }

  initialize(): void {
    this.workouts = [
      {
        id: 1,
        type: 'Run',
        distance: 3,
        time: 25,
        date: '4/11/2020',
      },
      {
        id: 2,
        type: 'Run',
        distance: 6,
        time: 50,
        date: '4/12/2020',
      },
      {
        id: 3,
        type: 'Lift weights',
        time: 45,
        date: '4/13/2020',
      },
    ];
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  addWorkout(workout: Workout): void {
    this.workouts.push(workout);
  }
}

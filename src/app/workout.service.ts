import { Injectable } from '@angular/core';
import { Workout } from './workouts.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor() {}

  getWorkouts(): Workout[] {
    return [
      {
        id: 1,
        type: 'Run',
        distance: 5,
        time: 60,
        date: '4/12/2020',
      },
      {
        id: 2,
        type: 'Weightlifting',
        time: 45,
        date: '4/13/2020',
      },
    ];
  }
}

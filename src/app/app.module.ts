import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [AppComponent, WorkoutsComponent, NavbarComponent, AddWorkoutComponent, LeaderboardComponent, LoginComponent, WorkoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

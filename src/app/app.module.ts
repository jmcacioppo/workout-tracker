import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutService } from './workout.service';

@NgModule({
  declarations: [
    AddWorkoutComponent,
    AppComponent,
    LeaderboardComponent,
    LoginComponent,
    NavbarComponent,
    WorkoutComponent,
    WorkoutsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [WorkoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { CounterModule } from './counter/counter.module';
import { ScoreModule } from './score/score.module';
import { scoreReducer } from './score/score.reducer';
import { UserModule } from './user/user.module';
import { userReducer } from './user/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      score: scoreReducer,
      user: userReducer
    }),
    CounterModule,
    ScoreModule,
    UserModule,
    EffectsModule.forRoot([UserEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

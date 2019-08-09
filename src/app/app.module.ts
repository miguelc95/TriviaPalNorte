import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountdownModule } from 'ngx-countdown';

import { QuestionsComponent } from './questions/questions.component';
import { CoverComponent } from './cover/cover.component';
import { QuestionsRayadosComponent } from './questions-rayados/questions-rayados.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    CoverComponent,
    QuestionsRayadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

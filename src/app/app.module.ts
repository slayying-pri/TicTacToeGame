import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppointemntListComponent } from './appointemnt-list/appointemnt-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TictactoegameComponent } from './tictactoegame/tictactoegame.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointemntListComponent,
    CalculatorComponent,
    TictactoegameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

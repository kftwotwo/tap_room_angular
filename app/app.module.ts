import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewTapComponent } from './new-tap.component';
import { EditTapComonent } from './edit-tap.component';
import { TapListComponent } from './taps.component';
import { CompletenessPipe } from './completeness.pipe';



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EditTapComonent, NewTapComponent , TapListComponent, CompletenessPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

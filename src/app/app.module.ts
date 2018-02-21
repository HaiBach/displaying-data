import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SizerComponent } from './sizer/sizer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

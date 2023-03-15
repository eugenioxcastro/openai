import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { ImagesgeneratorComponent } from './imagesgenerator/imagesgenerator.component';
import { Textdavinci001Component } from './textdavinci001/textdavinci001.component';
import { ModerationsComponent } from './moderations/moderations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Textdavinci003Component,
    ImagesgeneratorComponent,
    Textdavinci001Component,
    ModerationsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

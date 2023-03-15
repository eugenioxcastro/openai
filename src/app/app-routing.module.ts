import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { ImagesgeneratorComponent } from './imagesgenerator/imagesgenerator.component';
import { Textdavinci001Component } from './textdavinci001/textdavinci001.component';
import { ModerationsComponent } from './moderations/moderations.component';

const routes: Routes = [
  { path: 'textdavinci003', component: Textdavinci003Component },
  { path: 'imagesgeneration', component: ImagesgeneratorComponent },
  { path: 'textdavinciedit001', component: Textdavinci001Component },
  { path: 'moderations', component: ModerationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

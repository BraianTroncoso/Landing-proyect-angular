import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideoGridComponent } from 'src/app/core/component/video-grid/video-grid.component';


@NgModule({
  declarations: [
    HomeComponent,
    VideoGridComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { Component } from '@angular/core';
import { video } from 'src/app/core/interfaces/videos';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  videos:video[] = []
  constructor(private VS: VideosService){
this.VS.getAll().then(res => this.videos = res)
  }
}

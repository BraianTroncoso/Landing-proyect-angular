import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { video } from '../../interfaces/videos';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.css']
})
export class VideoGridComponent {
  @ViewChild("modal")
  modal!: ElementRef<HTMLDialogElement>;

  @Input() videos:video[] = [];
  
}

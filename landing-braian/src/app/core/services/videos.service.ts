import { Injectable } from '@angular/core';
import { video } from '../interfaces/videos';
import { videos } from '../contants/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }
  
  
  async getAll():Promise<video[]>{
    return videos;
  }
}

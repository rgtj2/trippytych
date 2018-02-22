import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import { RadialMirrorService, RadialMirrorShowCount } from './services/radial-mirror.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private radialMirror: RadialMirrorService) {
  }

  ngOnInit(): void {
  }

  public get currentCount(): RadialMirrorShowCount {
    return this.radialMirror.showCount;
  }

  public setCount(count: RadialMirrorShowCount): void {
    this.radialMirror.showCount = count;
  }

  public showFullScreen(): void {
    screenfull.request();
  }
}

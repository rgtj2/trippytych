import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
  }

  public showFullScreen(): void {
    screenfull.request();
  }
}

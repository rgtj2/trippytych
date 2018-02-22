import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-test-visualizer',
  templateUrl: './test-visualizer.component.html',
  styleUrls: ['./test-visualizer.component.css']
})
export class TestVisualizerComponent implements OnInit {
  public currentTime: Date;
  constructor() { }

  ngOnInit() {
    interval(100).subscribe(() => this.currentTime = new Date());
  }
}

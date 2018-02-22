import { Component, OnInit } from '@angular/core';
import { RadialMirrorService, RadialMirrorShowCount } from '../../services/radial-mirror.service';

@Component({
  selector: 'app-radial-mirror',
  templateUrl: './radial-mirror.component.html',
  styleUrls: ['./radial-mirror.component.css']
})
export class RadialMirrorComponent implements OnInit {

  constructor(private service: RadialMirrorService) { }

  ngOnInit() {
  }

  private get showCount(): RadialMirrorShowCount {
    return this.service.showCount;
  }

  public get showCenter(): boolean {
    return this.showCount === 'one' || this.showCount === 'three';
  }

  public get showLeft(): boolean {
    return this.showCount === 'two' || this.showCount === 'three';
  }

  public get showRight(): boolean {
    return this.showCount === 'two' || this.showCount === 'three';
  }

}

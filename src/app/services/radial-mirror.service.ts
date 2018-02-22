import { Injectable } from '@angular/core';

export type RadialMirrorShowCount = 'one' | 'two' | 'three';

@Injectable()
export class RadialMirrorService {
  private _showCount: RadialMirrorShowCount;
  public get showCount(): RadialMirrorShowCount {
    return this._showCount;
  }
  public set showCount(count: RadialMirrorShowCount) {
    this._showCount = count;
  }

  constructor() {
    this.showCount = 'three';
  }

}

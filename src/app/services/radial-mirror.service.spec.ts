import { TestBed, inject } from '@angular/core/testing';

import { RadialMirrorService } from './radial-mirror.service';

describe('RadialMirrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RadialMirrorService]
    });
  });

  it('should be created', inject([RadialMirrorService], (service: RadialMirrorService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialMirrorComponent } from './radial-mirror.component';

describe('RadialMirrorComponent', () => {
  let component: RadialMirrorComponent;
  let fixture: ComponentFixture<RadialMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialMirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

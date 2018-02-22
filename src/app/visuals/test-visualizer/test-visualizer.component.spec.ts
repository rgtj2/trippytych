import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVisualizerComponent } from './test-visualizer.component';

describe('TestVisualizerComponent', () => {
  let component: TestVisualizerComponent;
  let fixture: ComponentFixture<TestVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

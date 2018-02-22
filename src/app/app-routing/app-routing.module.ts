import { TestVisualizerComponent } from './../visuals/test-visualizer/test-visualizer.component';
import { RadialMirrorComponent } from './../view-transformations/radial-mirror/radial-mirror.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RadialMirrorComponent,
    children: [
      {
        path: '',
        component: TestVisualizerComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

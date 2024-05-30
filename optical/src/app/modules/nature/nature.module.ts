import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatureRoutingModule } from './nature-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { TopicComponent } from 'src/app/topic/topic.component';
const routes: Routes = [
  { path: 't/nature', component: TopicComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NatureRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class NatureModule { }

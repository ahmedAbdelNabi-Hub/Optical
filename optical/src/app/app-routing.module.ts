import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopicComponent } from './topic/topic.component';
import { OpticalComponent } from './optical/optical.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 't/:collection', component: TopicComponent },
  {path:'optical',component:OpticalComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

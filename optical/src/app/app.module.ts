import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopicComponent } from './topic/topic.component';
import { FormsModule } from '@angular/forms';
import { OpticalComponent } from './optical/optical.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MovingElementComponent } from './moving-element/moving-element.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesComponent,
    NotFoundComponent,
    TopicComponent,
    OpticalComponent,
    MovingElementComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CarouselModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

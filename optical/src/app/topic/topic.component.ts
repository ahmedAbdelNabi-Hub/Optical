import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from '../core/services/services.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnDestroy {
  link!: string;
  bgImage: string = '';
  bgImageAlt:string=''
  infoCollection: any;
  imgaes!: any[];
  private subscription: Subscription | undefined;
  private imageChangeInterval: any;
  description!: string;

  constructor(private route: ActivatedRoute, private _service: ServicesService) { }

  ngOnInit(): void {
    this.subscription = this.route.url.subscribe(data => {
      this.link = data[1].path;
      console.log(this.link);
    });

    // Subscribe to index changes
    this._service.index$.subscribe(index => {
      this.infoCollection = this._service.collection[index];
    });
  }

  handleUrlsChange(urls: any[]): void {
    console.log('Updated URLs:', urls);
    this.imgaes = urls;
    this.bgImage=this.imgaes[2].src.original;
    this.bgImageAlt=this.imgaes[2].alt
    this.description=this.imgaes[10].alt+''+this.imgaes[20].alt+this.imgaes[15].alt+''+this.imgaes[14].alt
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.imageChangeInterval) {
      clearInterval(this.imageChangeInterval);
    }
  }

  // updateBackgroundImages(): void {
  //   let currentIndex = 0;
  //   this.bgImage = this.imgaes[currentIndex].src.original;

  //   this.imageChangeInterval = setInterval(() => {
  //     currentIndex = (currentIndex + 1) % this.imgaes.length;
  //     this.bgImage = this.imgaes[currentIndex].src.original;
  //   }, 9000); 
  // }
}

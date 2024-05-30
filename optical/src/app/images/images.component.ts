import { Component, OnInit, OnDestroy, HostListener, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ErrorResponse } from 'pexels';
import { Observable, Subscription } from 'rxjs';
import { PexelsService } from '../core/services/PexelsService.service';
import { PexelsImageService } from '../core/services/pexelsImage.Service.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Output() urlsChange = new EventEmitter<any[]>(); // Add this line

  Urls: any[] = [];
  private currentPage = 1;
  @Input() query!: string;
  private perPage = 30;
  progress:number=0;
  loadingwithloadingImage: boolean = false
  private subscription: Subscription | undefined;
  private NameRequest: any;
  $loadingImage: any = this.pexelsService.$loadingImageObservable;

  @ViewChild('imageContainer') imageContainer!: ElementRef;

  constructor(private pexelsService: PexelsService,private downloadImageService:PexelsImageService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.resetState();
    this.fetchData();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.imageContainer) {
      this.scrollToBottom();
    }
  }

  private resetState(): void {
    this.Urls = [];
    this.currentPage = 1;
  }

  private setRequest(): void {
    this.NameRequest = this.query === 'no'
      ? this.pexelsService.getCuratedPhotos(this.perPage * this.currentPage)
      : this.pexelsService.getSearchPhotos(this.query, this.perPage * this.currentPage);
  }

  private handleResponse(response: any): void {
    const newPhotos = response.photos.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
    if (newPhotos.length > 0) {
      this.Urls.push(...newPhotos);
      console.log(this.Urls);
      this.currentPage++;
      this.scrollToBottomIfNeeded();
      this.emitUrlsChange(); // Emit the updated URLs
    } else {
      console.log("No more photos available.");
    }
  }

  private handleError(error: ErrorResponse): void {
    console.error('Error fetching photos:', error.error);
  }

  private scrollToBottomIfNeeded(): void {
    if (this.imageContainer) {
      this.scrollToBottom();
    }
  }

  private emitUrlsChange(): void {
    this.urlsChange.emit(this.Urls);
  }

  fetchData(): void {
    this.setRequest();
    this.subscription = this.NameRequest.subscribe(
      (response: any) => this.handleResponse(response),
      (error: ErrorResponse) => this.handleError(error)
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if ((window.innerHeight + window.scrollY + 400) >= document.documentElement.scrollHeight) {
      this.loadingwithloadingImage = true
      this.fetchData();
    }
  }


  downloadImage(imageUrl: string) {
    this.downloadImageService.downloadImage(imageUrl);
     this.downloadImageService.progressImage.subscribe(precent=>{
      this.progress=precent;
     })
  }

  trackByFn(index: number, item: any): number {
    return item.id; // Assuming `id` is a unique identifier for each item
  }

  scrollToBottom(): void {
    if (this.imageContainer) {
      try {
        this.imageContainer.nativeElement.scrollTop = this.imageContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.error('Error scrolling to bottom:', err);
      }
    }
  }
  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

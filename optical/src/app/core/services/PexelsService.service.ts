import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, ErrorResponse, PhotosWithTotalResults } from 'pexels';
import { BehaviorSubject, delay, finalize, map, Observable } from 'rxjs';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  private client = createClient('bV9xQZRaYZIhTMrQJW3g4uHx2tAL91q8KsCJvSDWL0WsHO6ORRpWmfrA');
  private loadingImage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $loadingImageObservable = this.loadingImage.asObservable();

  constructor(private http: HttpClient) { }

  downloadImage(imageUrl: string) {
    this.http.get(imageUrl, { responseType: 'blob' }).subscribe((imageBlob: Blob) => {
      saveAs(imageBlob, 'image.jpg');
    }, error => {
      console.error('Error downloading image:', error);
    });
  }
  getCuratedPhotos(perPage: number): Observable<PhotosWithTotalResults | ErrorResponse> {
    this.loadingImage.next(true);
    return new Observable<PhotosWithTotalResults | ErrorResponse>(observer => {
      this.client.photos.curated({ per_page: perPage }).then((response: any) => {
        observer.next(response);
        observer.complete();
      })
        .catch(error => {
          observer.error({ error: error.message });
        });
    }).pipe(
      map(response => response), // Ensure the observable type remains the same
    
      finalize(() => this.loadingImage.next(false)) // Ensure loading state is updated after the observable completes or errors
    );
  }

  getSearchPhotos(query: string, perPage: number): Observable<PhotosWithTotalResults | ErrorResponse> {
    this.loadingImage.next(true);
    return new Observable<PhotosWithTotalResults | ErrorResponse>(observer => {
      this.client.photos.search({ query: query, per_page: perPage }).then((response: any) => {
        observer.next(response);
        observer.complete();
      })
        .catch(error => {
          observer.error({ error: error.message });
        });
    }).pipe(
      map(response => response), // Ensure the observable type remains the same
     
      finalize(() => this.loadingImage.next(false)) // Ensure loading state is updated after the observable completes or errors
    );
  }
  getcollection(perPage: number): Observable<PhotosWithTotalResults | ErrorResponse> {
    return new Observable(observer => {
      this.client.collections.featured({ per_page: perPage })
        .then((response: any) => {
          observer.next(response);
          observer.complete();
        })
        .catch(error => {
          observer.error({ error: error.message });
        });
    });
  }
}
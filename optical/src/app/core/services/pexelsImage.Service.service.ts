import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PexelsImageService {
    constructor(private http: HttpClient) { }
    public progressImage: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    downloadImage(imageUrl: string) {
        const headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        });

        return this.http.get(imageUrl, {
            responseType: 'blob',
            observe: 'events',
            headers: headers,
            reportProgress: true
        }).subscribe(event => {
            if (event.type === HttpEventType.DownloadProgress) {
                // Check if event.total is defined
                if (event.total !== undefined) {
                    // Calculate progress percentage
                    const percentDone = Math.round(100 * event.loaded / event.total);
                    // Update progress bar or any UI element
                    this.updateProgressBar(percentDone);
                }
            } else if (event.type === HttpEventType.Response) {
                // Check if response body is not null
                if (event.body instanceof Blob) {
                    // Download complete, save the image
                    saveAs(event.body, 'image.jpg');
                    // Reset progress bar or hide it
                    this.resetProgressBar();
                } else {
                    console.error('Empty or invalid response body received.');
                    // Reset progress bar or hide it in case of error
                    this.resetProgressBar();
                }
            }
        }, error => {
            console.error('Error downloading image:', error);
            // Reset progress bar or hide it in case of error
            this.resetProgressBar();
        });
    }

    private updateProgressBar(percent: number) {

        this.progressImage.next(percent);
    }

    private resetProgressBar() {
        this.progressImage.next(0);
        console.log('Download complete or error occurred. Resetting progress bar.');
    }
}

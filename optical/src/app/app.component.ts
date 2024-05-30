import { Component } from '@angular/core';
import { createClient } from 'pexels';
import { routingAnimation } from './shared/animation/animation';

interface PexelsResponse {
  photos: { /* Define the structure of a photo object */ }[];
  /* You may include other properties if needed */
}
interface ErrorResponse {
  error: string;
}
// Use union type to represent both success and error responses
type PexelsApiResponse = PexelsResponse | ErrorResponse;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routingAnimation]
})
export class AppComponent {
  client = createClient('bV9xQZRaYZIhTMrQJW3g4uHx2tAL91q8KsCJvSDWL0WsHO6ORRpWmfrA');
  photos: any[] = [];

  constructor() {

  }
}


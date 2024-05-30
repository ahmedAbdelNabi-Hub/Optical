import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-element',
  templateUrl: './moving-element.component.html',
  styleUrls: ['./moving-element.component.css'],
  
})
export class MovingElementComponent implements OnInit {

  items: any[] = [1, 2, 3, 4, 5]; // Example array of items
 
  constructor() {
    
  }
ngOnInit(): void {
  
}
}

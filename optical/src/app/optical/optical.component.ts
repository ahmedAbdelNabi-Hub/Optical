import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServicesService } from '../core/services/services.service';
@Component({
  selector: 'app-optical',
  templateUrl: './optical.component.html',
  styleUrls: ['./optical.component.css']
})
export class OpticalComponent implements OnInit {
  selectedSubscriptionType: string = 'Yearly';
  salary!: string;
  constructor(private _service:ServicesService) {
    this.GetSalary(); 
  }
  ngOnInit(): void {
    
  }

  GetSalary() {
    if (this.selectedSubscriptionType == 'Yearly') {
      this.salary = '$8'
    }
    else if (this.selectedSubscriptionType == 'Monthly') {
      this.salary = '$10'
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000 // Autoplay delay in milliseconds
  }
}

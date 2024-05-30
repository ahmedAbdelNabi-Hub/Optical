import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PexelsService } from 'src/app/core/services/PexelsService.service';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('link_container') linksContainer!: ElementRef;
  scrollLefts = 0;
  isleft: boolean = false;
  links: string[] = [
    'Editorial',
    'Following',
  ]
  collection: any;
  focuse: boolean = false;
  shows: boolean = false
  search!: string;
  private subscription: Subscription | undefined;

  CompanyMenue: boolean = false;
  ProductMenue: boolean = false;
  CommunityMenue: boolean = false;
  AllMenue: boolean = false;

  constructor(private _PexelsService: PexelsService, private _service: ServicesService, private _router: Router, private route: Router) { }
 
  ngOnInit(): void {
    this.subscription = this._PexelsService.getcollection(20).subscribe(Data => {
      if ('collections' in Data) {
        this.collection = Data.collections
        this._service.collection = Data.collections;
      } else {
        window.alert("sadsadsadsdasa")
      }
    })
  }
  sendIndex(index: number) {
    this._service.index = index;
  }

  GetSearch() {
    this._router.navigateByUrl('/t/' + this.search);
    this.show()
    this.search = '';
  }

  scrollLeft(): void {
    this.linksContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
    this.scrollLefts = this.linksContainer.nativeElement.scrollLeft;
    if (this.scrollLefts <= 300 || this.scrollLefts == 0) {
      this.isleft = false;
    }
  }

  scrollRight(): void {
    this.linksContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
    this.isleft = true;
    this.scrollLefts = this.linksContainer.nativeElement.scrollLeft;
  }
  
  fnFocus() {
    this.focuse = true;
  }

  fnblur() {
    this.focuse = false
  }
  show() {
    if (this.shows == true) {
      this.shows = false
    }
    else if (this.shows == false) {
      this.shows = true
    }
  }
  ShowMenue(_ElementRef: HTMLDivElement) {
    console.log(_ElementRef, _ElementRef.classList);
    _ElementRef.classList.toggle('hidden');
    if (_ElementRef.classList.contains('Company')) {
      this.CompanyMenue = !this.CompanyMenue;
    }
    else if (_ElementRef.classList.contains('Product')) {
      this.ProductMenue = !this.ProductMenue
    }
    else if (_ElementRef.classList.contains('Community')) {
      this.CommunityMenue = !this.CommunityMenue
    }
  }
  getAllMenue() {
    this.AllMenue = !this.AllMenue
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}

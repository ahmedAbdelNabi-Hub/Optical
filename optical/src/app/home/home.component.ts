import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _router: Router){}
search: any;
GetSearch() {
  this._router.navigateByUrl('/t/' + this.search);
  this.search = '';
}
}

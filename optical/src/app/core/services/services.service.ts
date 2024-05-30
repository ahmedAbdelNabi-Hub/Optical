import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  collection: any;
  private _index: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  index$ = this._index.asObservable();
  IsActiveurl:string=''
  constructor() { }
  get index(): number {
    return this._index.getValue();
  }
  set index(value: number) {
    this._index.next(value);
  }
}

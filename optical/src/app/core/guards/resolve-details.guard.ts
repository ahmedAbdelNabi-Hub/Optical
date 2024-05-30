import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ImagesService } from "../services/images.service";


@Injectable({providedIn:'root'})
export class ResolveDetails implements Resolve<any>{
constructor(private _ImageService:ImagesService){}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let link =route.routeConfig?.path?.slice(2);
   if(link !=undefined){
    return this._ImageService.getTopicphoto('1',link);
   }
   return null
}

}
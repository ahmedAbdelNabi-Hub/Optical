import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LinkPipe } from "../pipe/link.pipe";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
@NgModule({
    declarations:[NavbarComponent,LinkPipe, FooterComponent],
    imports:[CarouselModule,CommonModule,RouterModule,FormsModule],
    exports:[NavbarComponent,FooterComponent],

})
export class SharedModule{}
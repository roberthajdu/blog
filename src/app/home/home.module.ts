import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PostShowcaseComponent } from './post-showcase/post-showcase.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    PostShowcaseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
  ]
})
export class HomeModule { }

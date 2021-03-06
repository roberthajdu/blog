import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PostShowcaseComponent } from './post-showcase/post-showcase.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkflowComponent } from './workflow/workflow.component';
import { StepComponent } from './workflow/step/step.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    PostShowcaseComponent,
    ContactComponent,
    WorkflowComponent,
    StepComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    CarouselModule,
    HttpClientModule,
  ]
})
export class HomeModule { }

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { PostComponent } from './post/post.component';
import { PromotionComponent } from './promotion/promotion.component';

@NgModule({
  declarations: [BlogComponent, PostComponent, PromotionComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}

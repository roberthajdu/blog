import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { combineLatest } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { JsonLdService } from 'src/app/shared/services/json-ld.service';

declare var ng: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class PostComponent {

  blogPostMetadata$ = combineLatest([
    this.activatedRoute.params.pipe(pluck('slug')),
    this.scully.available$
  ]).pipe(
    map(([postId, routes]) =>
      routes.find(route => route.route === `/blog/${postId}`)
    ),
    tap(metaData => console.log('metaData')),
    tap(metaData => {
      const schema = {
        "@context" : "http://schema.org",
        "@type" : "Article",
        "name": metaData?.title,
        "author": {
          "@type": "Person",
          "name": "Hajdu Róbert"
        },
        "datePublished": metaData?.published,
        "image": metaData?.thumbnail
      }
      this.jsonLdService.insertSchema(schema)
    })
  );

  constructor(
    private readonly router: Router, 
    private readonly activatedRoute: ActivatedRoute,
    private readonly scully: ScullyRoutesService,
    private readonly jsonLdService: JsonLdService
  ) {
  }

}

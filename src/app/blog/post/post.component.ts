import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { combineLatest } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

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
    tap(e => console.log('w', e)),
    map(([postId, routes]) =>
      routes.find(route => route.route === `/blog/${postId}`)
    ),
    tap(e => console.log(e))
  );

  constructor(
    private readonly router: Router, 
    private readonly activatedRoute: ActivatedRoute,
    private readonly scully: ScullyRoutesService
  ) { }

}

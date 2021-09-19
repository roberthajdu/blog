import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-showcase',
  templateUrl: './post-showcase.component.html',
  styleUrls: ['./post-showcase.component.scss']
})
export class PostShowcaseComponent {

  posts$: Observable<ScullyRoute[]>;

  constructor(
    private readonly scully: ScullyRoutesService
  ) {
    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) => {
          return route.route.startsWith(`/blog/`);
        })
      }),
      tap(e => console.log(e)),
      map(routeList => {
        return routeList.sort((a,b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime())
      }),
      map(routeList => {
        return routeList.slice(0, 2)
      }),
      tap(e => console.log(e))
    )
  }

}

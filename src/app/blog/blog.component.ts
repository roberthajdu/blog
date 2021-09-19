import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {

  posts$: Observable<ScullyRoute[]>;

  constructor(
    private readonly scully: ScullyRoutesService
  ) {
    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        console.log('RL', routeList);
        return routeList.filter((route: ScullyRoute) => {
          return route.route.startsWith(`/blog/`);
        })
      }),
      // map(routeList => [...routeList, ...routeList, ...routeList]),
      tap(e => console.log(e))
    )
  }

}

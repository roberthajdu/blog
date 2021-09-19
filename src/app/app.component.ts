import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAdminPage$!: Observable<boolean>;

  
  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription | null = null;
  private popupCloseSubscription: Subscription | null = null;
  private initializeSubscription: Subscription | null = null;
  private statusChangeSubscription: Subscription | null = null;
  private revokeChoiceSubscription: Subscription | null = null;
  private noCookieLawSubscription: Subscription | null = null;

  constructor(
    private readonly router: Router,
    // private ccService: NgcCookieConsentService 
  ) {}

  ngOnInit() {
    this.isAdminPage$ = this.router.events.pipe(
      filter((evt: any) => {
        return evt instanceof NavigationEnd;
      }),
      map((evt: NavigationEnd) => {
        return evt.url.includes('/admin');
      }),
    );

    // this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
    //   () => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //     console.log('popupOpen');
    //   });

    // this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
    //   () => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //     console.log('popuClose');
    //   });

    // this.initializeSubscription = this.ccService.initialize$.subscribe(
    //   (event: NgcInitializeEvent) => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //     console.log(`initialize: ${JSON.stringify(event)}`);
    //   });

    // this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
    //   (event: NgcStatusChangeEvent) => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //     console.log(`statusChange: ${JSON.stringify(event)}`);
    //   });

    // this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
    //   () => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //     console.log(`revokeChoice`);
    //   });

    // this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
    //   (event: NgcNoCookieLawEvent) => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //     console.log(`noCookieLaw: ${JSON.stringify(event)}`);
    //   });
  }

  
  // ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    // this.popupOpenSubscription?.unsubscribe();
    // this.popupCloseSubscription?.unsubscribe();
    // this.initializeSubscription?.unsubscribe();
    // this.statusChangeSubscription?.unsubscribe();
    // this.revokeChoiceSubscription?.unsubscribe();
    // this.noCookieLawSubscription?.unsubscribe();
  // }


}

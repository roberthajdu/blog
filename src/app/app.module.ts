import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { GdprComponent } from './gdpr/gdpr.component';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
  "cookie": {
    "domain": "hajdurobert.hu"
  },
  "position": "bottom",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#6665dd",
      "text": "#ffffff",
      "link": "#ffffff",
    },
    "button": {
      "background": "#ffffff",
      "text": "#6665dd",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "Ez a weboldal sütiket használ a jobb felhasználói élmény érdekében.",
    "dismiss": "Rendben",
    "deny": "Kösz, nem!",
    "link": "Részletek",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImpressumComponent,
    GdprComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    ScullyLibModule,
    HttpClientModule,
    HomeModule,
    //NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

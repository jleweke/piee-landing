import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', 
  //   redirectTo: '/home', 
  //   pathMatch: 'full' 
  // },
  { path: '',  
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent
}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

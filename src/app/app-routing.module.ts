import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

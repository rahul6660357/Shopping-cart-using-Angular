import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {MyprofileComponent} from './myprofile/myprofile.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
   redirectTo: 'userlogin',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'usercart',
    component: UserCartComponent,
  },
  {
    path: 'details',
    component: ProductDetailsComponent,
  },
  {
    path: 'userlogin',
    component: LoginComponent,
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
  ];

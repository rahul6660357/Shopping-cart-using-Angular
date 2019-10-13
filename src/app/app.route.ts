import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {SignupComponent} from './signup/signup.component';
import {OrderHistoryComponent} from './order-history/order-history.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
   redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'history',
    component: OrderHistoryComponent
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
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
  ];

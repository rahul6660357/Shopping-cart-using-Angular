import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';

export const MAIN_ROUTES: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'user',
    component: UserCartComponent,
  }
]

import { Routes } from '@angular/router';
import { HomeComponent} from './home/home';
import { AboutComponent } from './about/about';
import { ProductsComponent } from './products/products';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: '**', redirectTo: '' } // Redirect unknown paths to home
];
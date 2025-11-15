import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Testimonials } from './components/testimonials/testimonials';
import { Blog } from './components/blog/blog';
import { BlogDetails } from './components/blog-details/blog-details';
import { Services } from './components/services/services';
import { ControlFlow } from './components/control-flow/control-flow';
import { MyButton } from './property-binding/my-button/my-button';


export const routes: Routes = [
  {path: "home", component: Home},
  {path: "about", component: About},
  {path: 'services', component: Services},
  {path: "testimonials", component: Testimonials},
  {path: "blog", component: Blog},
  {path: "contact", component: Contact},
  {path: 'blogdetails', component: BlogDetails},
  {path: 'controlflow', component: ControlFlow},
  {path: 'propertybindings', component: MyButton},
  {path: '', redirectTo:'home',pathMatch: 'full'}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
   {
path:'',component:HomeComponent},
{
    path:'product',component:ProductComponent},
{
path:'contact',component:ContactComponent},
{
path:'product/:id',component:SingleComponent},
];

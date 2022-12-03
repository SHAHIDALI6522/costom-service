import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FunctionComponent } from './function/function.component';
import { HomeComponent } from './home/home.component';
import { Book } from './books/book';
import { VariablesComponent } from './variables/variables.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/Variables', pathMatch: 'full' },
  { path: 'Variables', component: VariablesComponent },
  { path: 'Functions', component: FunctionComponent },
  { path: 'next-functions', component: Book },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Store', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

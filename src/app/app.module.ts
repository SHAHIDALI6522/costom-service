import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { VariablesComponent } from './variables/variables.component';
import { FunctionComponent } from './function/function.component';
import { Book } from './books/book';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';
import { StoreComponent } from './store/store.component';
import { SearchPipe } from './search.pipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    FunctionComponent,
    Book,
    HomeComponent,
    AboutComponent,
    StoreComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    OrderModule,
    BrowserAnimationsModule,

    // Matrial Module
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  iscollapsed = true;
  dropdown = true;
  shaid = 4;
  ali = 'Saleem';
  day = 'user';
  showPrompt: any;
  w: number;
  g: number;
  constructor() {}
}

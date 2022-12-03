import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  tabeldata: any[] = [];
  oddnumbar: any[] = [];
  evennumber: any[] = [];
  usertabel: any[] = [];
  order: any[] = [];
  unorder: any[] = [];
  na = 2;
  a = 1;

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.tabeldata.push(this.na + ' * ' + i + ' = ' + i * this.na);
    }
    for (let i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
        this.oddnumbar.push(i);
      }
    }
    for (let i = 0; i <= 20; i++) {
      if (i % 2 == 1) {
        this.evennumber.push(i);
      }
    }
    for (this.a = 1; this.a < 100; this.a = this.a + 10) {
      this.a;
    }
    for (let i = 10; i >= 1; --i) {
      this.unorder.push(i);
    }
    for (let i = 1; i <= 10; i++) {
      this.order.push(i);
    }
  }
  userdata(user) {
    if (user.value > 0) {
      for (let i = 1; i <= 10; i++) {
        this.usertabel.push(user.value + ' * ' + i + ' = ' + i * user.value);
      }
      user.value = '';
    }
  }

  ngOnInit(): void {}
}

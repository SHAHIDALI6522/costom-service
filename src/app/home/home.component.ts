import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FunctionComponent } from '../function/function.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  show = false;
  counter = 0;
  userName: string = 'Enter your Name';
  userlist = [];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  data: any = ([] = [
    { id: 1, name: 'shahid' },
    { id: 2, name: 'Ali' },
    { id: 3, name: 'Awais' },
    { id: 4, name: 'Saeed' },
    { id: 5, name: 'Jawad' },
  ]);

  searchtext = '';
  opendialog() {
    this.dialog.open(FunctionComponent);
  }
  increase() {
    // in code every line is worgin
    // this.show ? (this.show = false) : (this.show = true);
    // uper line is a working in hiden and show any daya
    // this.show = this.show = false;
    // uper line that just hidden any data
    this.show = !this.show;
    // uper is and data show and hidden data
  }
  addcounter(nu: string, num: string) {
    if (nu == 'add' && this.counter < 5) {
      this.counter += 1;
    } else if (num == 'meinus' && this.counter >= 1) {
      this.counter -= 1;
    }
  }
  onclick(user) {
    if (user.value.length > 0) {
      this.userlist.push(user.value);
      user.value = '';
    }
  }
  onDelete(id) {
    this.userlist.splice(id, 1);
  }
}

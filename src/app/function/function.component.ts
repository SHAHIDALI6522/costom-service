import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css'],
})
export class FunctionComponent implements OnInit {
  s = 10;
  h = 3;
  show = true;
  confirm: any;
  enternumber: any;
  counter = 0;
  vot: any;
  showw = false;

  constructor(public dialogRef: MatDialogRef<FunctionComponent>) {
    this.s -= this.h;
  }
  ngOnInit(): void {}

  change() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  addcounter() {
    this.showw = !this.showw;
  }
  close() {
    this.dialogRef.close();
  }

  selectnumber() {
    // per
    this.confirm = confirm('can you confirm check result');
    if (this.confirm && this.enternumber >= 80 && this.enternumber <= 100) {
      alert('Thanks Choice value');
      this.vot = 'You are in Merit';
    } else if (
      this.confirm &&
      this.enternumber >= 60 &&
      this.enternumber <= 80
    ) {
      alert('Thanks Choice value');
      this.vot = 'you are in Ist Division';
    } else if (
      this.confirm &&
      this.enternumber >= 45 &&
      this.enternumber <= 60
    ) {
      alert('Thanks Choice value');
      this.vot = 'you are in IInd Division';
    } else if (
      this.confirm &&
      this.enternumber >= 33 &&
      this.enternumber <= 45
    ) {
      alert('Thanks Choice value');
      this.vot = 'you are in IIIrd Division';
    } else if (this.enternumber < 33) {
      alert('Thanks Choice value');
      this.vot = 'you are fail';
    } else {
      this.vot = 'Plese Before confirm Value';
    }
  }
  addNumber(nu: string, nut: string) {
    if (nu === 'add' && this.counter < 5) {
      this.counter += 1;
    } else if (nut === 'minus' && this.counter > 0) {
      this.counter -= 1;
    }
  }
}

import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { VariableServiceService } from './variablesservice/variable-service.service';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
})
export class VariablesComponent implements OnInit {
  count = 0;
  stopcount = false;

  userlist: any[] = [];

  constructor(public data: VariableServiceService) {}

  ngOnInit(): void {}

  addNumber(num: string, nut: string) {
    if (num === 'add' && this.count < 5) {
      this.count += 1;
    } else if (nut === 'minus' && this.count >= 1) {
      this.count -= 1;
    }
  }
  onclick(getdata) {
    if (getdata.value.length > 0) {
      this.userlist.push(getdata.value);
      getdata.value = '';
    }
  }
  ondelete(a) {
    this.userlist.splice(a, 1);
  }
}

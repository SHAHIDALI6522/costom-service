import { Component, OnInit } from '@angular/core';
import { product } from './storemodel/products.model';
import { StoreService } from './storeServices/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',

  providers: [StoreService],
})
export class StoreComponent implements OnInit {
  public products: product[] = [];
  arrynumber: any[] = [];
  sumarray: any;
  studentlist: any;
  numberofAarr: Array<number> = [1, 3, 22, 10, 6, 4, 8, 2, 9, 15, 20];

  constructor(public store: StoreService) {
    this.studentlist = this.store.studentlist;
    this.products = this.store.storeService;
    this.arrynumber.push(this.numberofAarr);
    this.numberofAarr.sort(function (a, b) {
      return a - b;
    });
    this.sumarray = 0;
    for (let i of this.numberofAarr) {
      this.sumarray += i;
    }
  }
  // delet(d) {

  delet(de: any) {
    let d = this.studentlist.findIndex(
      (item: { stuFName: string }) => item.stuFName == de
    );
    if (d < 0) return;
    this.studentlist.splice(d, 1);
  }

  ngOnInit(): void {}
}

import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  static forEach: any;
  constructor() {}
  public getbook(): BookModel[] {
    return [
      {
        id: 1,
        title: 'Senior Developer',
        totalpages: 453,
        author: 'Awais Saeed',
        imageUrl: './assets/awais saeed.jpg',
        headimageUrl: './assets/awaissaeed.jpg',
        price: { currency: 'USD', value: 199 },
      },
      {
        id: 2,
        title: 'Learan JaveScript',
        totalpages: 987,
        author: 'Shahid Ali',
        imageUrl: './assets/javascript.jpg',
        headimageUrl: './assets/shahidali.jpg',
        price: { currency: 'Pakistan', value: 193 },
      },
      {
        id: 3,
        title: 'PHP Develper',
        totalpages: 250,
        author: 'Sohail',
        imageUrl: './assets/php.jpg',
        headimageUrl: './assets/sohail.jpg',
        price: { currency: 'USD', value: 879 },
      },
      {
        id: 3,
        title: 'HTML And CSS  ',
        totalpages: 250,
        author: 'Jawad Bashir',
        imageUrl: './assets/html Css.jpg',
        headimageUrl: './assets/jawad (2).jpg',
        price: { currency: 'Pakistan', value: 879 },
      },
    ];
  }
}
let sum = [0, 1, 2, 4, 1, 6, 10].reduce(function (
  preciousValue,
  currentVallue
) {
  return preciousValue + currentVallue;
},
0);
console.log('SUM: ' + sum);

import { Injectable } from '@angular/core';
import { product, studentMlist } from '../storemodel/products.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}
  public storeService: product[] = [
    {
      id: 1,
      ownname: 'shahid Ali',
      quantity: 90,
      shopName: 'Allah Ho',
      description:
        'Purified & Mineral Enhanced Water | DASANI® DASANI water is purified and enhanced with a proprietary blend of minerals to give it the clean, fresh taste you want from water',
      imaUrl: './assets/water.jpg',
    },
  ];
  public studentlist: studentMlist[] = [
    {
      stuRoll: 1,
      stuFName: 'Awais',
      stulName: 'Saeed',
      stuGender: 'Male',
      stuProgram: 'BSCS',
    },
    {
      stuRoll: 2,
      stuFName: 'Shahid',
      stulName: 'Ali',
      stuGender: 'Male',
      stuProgram: 'BSCS',
    },
    {
      stuRoll: 3,
      stuFName: 'Jawad',
      stulName: 'Basher',
      stuGender: 'Male',
      stuProgram: 'BSCS',
    },
    {
      stuRoll: 4,
      stuFName: 'Shohali',
      stulName: 'Ahmad',
      stuGender: 'Male',
      stuProgram: 'BSCS',
    },
  ];
}

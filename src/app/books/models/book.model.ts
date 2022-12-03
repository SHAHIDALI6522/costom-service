import { PricModel } from './price.model';

export interface BookModel {
  id: number;
  title: string;
  totalpages: number;
  author: string;
  imageUrl: string;
  headimageUrl: string;
  price: PricModel;
}

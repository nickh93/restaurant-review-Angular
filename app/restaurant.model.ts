import {Review} from './review.model';

export class Restaurant {
  public review: Review[] = null;
  constructor(public name: string, public cuisine: string, public description: string, public address: string, public price: string, public id: number) { }
}

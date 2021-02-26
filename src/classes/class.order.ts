import { IOrder } from '@/interfaces/interfaces';

export class Order implements IOrder {
  public orderId: symbol;
  public hotelId: number;
  public startDate: number;
  public endDate: number;
  public adults: number;
  public kids: number;
  constructor() {
    this.orderId = Symbol('orderId');
  }

  public isValid(): boolean {

    for (const field in this) {
      if (field === 'orderId') { continue; }
      if (!Number.isInteger(this[field])) {
        throw new Error(`Invalid typeof ${field}: ${typeof this[field]} == ${this[field]}. Expected is number`);
      }
    }

    return true;
  }
}

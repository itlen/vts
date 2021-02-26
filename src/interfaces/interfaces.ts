export interface IService {
  getData(key: string);
  sendOrder(id: number);
  deleteOrder(id: number);
}

export interface IHotel {
  id: number;
  title: string;
  description?: string;
  imgs?: Array<string>;
}

export interface IOrder {
  orderId: symbol;
  hotelId: number;
  startDate: number;
  endDate: number;
  adults: number;
  kids: number;
  isValid(): boolean;
}

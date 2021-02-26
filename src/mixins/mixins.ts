import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class Join extends Vue {

  public bookedHotels: Array<number>;
  public orders: Map<number, object>;
  public hotels: Map<number, object>;

  public joinOrdersAndHotelsInfo() { // to use not only in cart page. DRY
    const join: Array<object> = [];
    for (const hotelId of Array.from(this.bookedHotels.keys())) {
      const order = this.orders.get(hotelId);
      const hotel = this.hotels.get(hotelId);
      const mixObject = { ...order, ...hotel };
      join.push(mixObject);
    }
    return join;
  }
}

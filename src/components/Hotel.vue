<template>
  <div class="hotel row">
    <h1 class="col s12 left-align">{{ hotel.title }}</h1>
    <img class="col s6" :src="'/img/' + hotel.imgs[0]" :alt="hotel.title" />
    <div class="col s6">
      <p class="left-align">{{ hotel.description }}</p>
      <div>
        <form v-show="!this.inCart" @submit.prevent="submitHandler">
          <div class="row">
            <div class="input-field col s6">
              <input
                type="text"
                id="srartDate"
                v-model="startDate"
                ref="startDate"
                class="validate"
                placeholder="Start date"
                required
              />
            </div>
            <div class="input-field col s6">
              <input
                type="text"
                id="endDate"
                v-model="endDate"
                ref="endDate"
                class="validate"
                required
                placeholder="End date"
              />
            </div>
            <div class="input-field col s6">
              <input
                type="number"
                v-model.number="order.adults"
                id="adults"
                min="1"
                class="validate"
                required
                placeholder="Adults"
              />
            </div>
            <div class="input-field col s6">
              <input
                type="number"
                v-model.number="order.kids"
                id="kids"
                min="-1"
                class="validate"
                required
                placeholder="Kids"
              />
            </div>
          </div>
          <div>
            <button class="waves-effect waves-light btn" @click="bookIt">
              Book me
            </button>

            <hr />
          </div>
        </form>
        <button
          class="waves-effect waves-light btn red lighten-2"
          v-if="this.inCart"
          @click="unBookIt"
        >
          unBook me
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
declare const M;
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
import { IHotel } from "@/interfaces/interfaces";
import { Order } from "@/classes/class.order";

@Component({
  computed: mapGetters(["bookedHotels", "hotels"]),
  methods: mapActions(["actionBookHotel", "actionUnBookHotel"]),
})
export default class Hotel extends Vue {
  [x: string]: any; // VSCode autogenerate

  get inCart() {
    return this.bookedHotels.has(this.hid);
  }
  public hotel: IHotel; // to declarate as a type instead interface
  public startDate: Date | any = new Date();
  public endDate: Date | any = new Date();
  // TODO remove this fields from class. Resolve date formatting problem in data piker
  public order = new Order();
  @Prop() private hid!: number;

  // async
  public created() {
    // let hotels = await this.$apiGet("hotels"); // just for example
    // this.hotel = hotels.get(this.hid);
    this.hotel = this.hotels.get(this.hid);
  }

  public mounted() {
    this.startDate = M.Datepicker.init(this.$refs.startDate, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });

    this.endDate = M.Datepicker.init(this.$refs.endDate, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  }

  public bookIt() {
    this.submitHandler();
    if (this.order.isValid()) {
      this.actionBookHotel(this.order);
    } else {
      // console.log('Invalid order', this.order);
    }
  }

  public unBookIt() {
    this.actionUnBookHotel(this.hid);
  }

  private submitHandler() {
    // TODO Add orderId use Symbol es6 or get it from backend
    this.order.hotelId = this.hid;
    this.order.startDate = Date.parse(this.startDate.date.toString()); // TODO upper
    this.order.endDate = Date.parse(this.endDate.date.toString());
  }

  private beforeDestroy() {
    // destroy third party plugin to reject memory leak
    if (this.startDate && this.startDate.destroy) {
      this.startDate.destroy();
    }
    if (this.endDate && this.endDate.destroy) {
      this.endDate.destroy();
    }
  }
}
</script>

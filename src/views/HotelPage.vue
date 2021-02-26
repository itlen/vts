<template>
  <div class="hotel">
    <hotel :hid="hid"></hotel>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Hotel from '@/components/Hotel.vue';

@Component({
  components: {
    Hotel,
  },
})
export default class HotelView extends Vue {
  @Prop() public hid!: number;
}
</script>
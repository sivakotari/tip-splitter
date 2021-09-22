<script>
import UserInput from './components/UserInput.vue';
import SelectTip from './components//SelectTip.vue';
import ShowTips from './components//ShowTips.vue';

export default {
  components: {
    UserInput,
    SelectTip,
    ShowTips
  },
  data() {
    return {
      bill_total: 0,
      tip_splits: 0,
      tip_percent: 0,
    }
  },
  methods: {},
  computed: {
    split_amount: function() {
      if(!this.bill_total || !this.tip_splits) return 0;
      return this.bill_total / this.tip_splits;
    },
    tip_amount: function() {
      if(!this.bill_total || !this.tip_percent) return 0;
      return ( this.bill_total * this.tip_percent ) / 100;
    },
    split_total_amount: function() {
      if(!this.split_amount || !this.tip_amount) return 0;
      return this.split_amount + this.tip_amount;
    },
  }
}
</script>

<template>
  <div class="app__container">
    <UserInput @valueChange = "val => bill_total = val">
      <template v-slot:label>
        <label>Bill</label>
      </template>
      <template v-slot:prefix>
        <i class="icon icon__currency"></i>
      </template>
    </UserInput>
    <SelectTip @tip = "val => tip_percent = val">
      <template v-slot:label>
        <label>Select tip %</label>
      </template>
    </SelectTip>
    <UserInput @valueChange = "val => tip_splits = val">
      <template v-slot:label>
        <label>Number of people</label>
      </template>
    </UserInput>
    <ShowTips :tip_amount="tip_amount" :split_total_amount="split_total_amount" />
  </div>
</template>

<style lang="scss">
  #app {
    // display: flex;
    // flex-direction: column;
    // align-items: flex-end;
    // margin: 0 auto;
  }
  .app__container {
    padding: 0 30px;
    background-color: var(--white);
    border-radius: 20px;
    > div:last-child {
      padding-bottom: 30px;
    }
    > div {
      padding-top: 30px;
    }
  }
  .icon__currency {
    &::before {
      content: '';
      // background-image: url(./images/icon-dollar.svg);
    }
  }
</style>

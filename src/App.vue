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
      triggerReset: false,
      rules: [
        {
          condition: (val) => {
            return val > 0;
          },
          message: "Can't be zero"
        }
      ],
    }
  },
  methods: {
    reset() {
      this.bill_total = 0;
      this.tip_splits = 0;
      this.tip_percent = 0;
      this.triggerReset = !this.triggerReset;
    }
  },
  computed: {
    split_amount: function() {
      if(!this.bill_total || !this.tip_splits) return 0;
      return this.bill_total / this.tip_splits;
    },
    tip_amount: function() {
      if(!this.bill_total || !this.tip_percent || !this.split_amount) return 0;
      return ( this.bill_total * this.tip_percent ) / 100;
    },
    split_total_amount: function() {
      if(!this.tip_amount) return 0;
      return this.split_amount + this.tip_amount;
    },
  }
}
</script>

<template>
  <main class="app__container">
    <div class="left">
      <UserInput
        prefix="icon-dollar"
        label="Bill"
        @valueChange = "val => bill_total = val"
        :triggerReset = triggerReset
      />
      <SelectTip
        label="Select Tip %"
        @tip = "val => tip_percent = val"
        :triggerReset = triggerReset
      />
      <UserInput
        prefix="icon-person"
        label="Number of People"
        @valueChange = "val => tip_splits = val"
        :triggerReset = triggerReset
        :rules = rules
      />
    </div>
    <div class="right">
      <ShowTips
        :tip_amount="tip_amount"
        :split_total_amount="split_total_amount"
        @reset="reset"
      />
    </div>
  </main>
</template>

<style lang="scss">
  #app {
    display: flex;
    align-items: baseline;
    height: 100vh;
    background: url(src/images/logo.svg) no-repeat center 80px;
  }
  .app__container {
    padding: 0 35px;
    background-color: var(--white);
    border-radius: 20px 20px 0 0;
    flex-grow: 1;
    max-width: 850px;
    margin: 200px auto 0 auto;
    * {
      transition: all 0.15s ease-in-out;
    }

    > div {
      padding: 30px 0;
      height: 100%;
    }
  }
  .left, .splitter-view {
    > * + * {
      margin-top: 35px
    }
  }
  @media screen and (min-width: 800px) {
    #app { 
      align-items: flex-start;
    }
    .app__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
      border-radius: 20px ;
    }
  }
</style>

<template>
  <div class="selecttip--wrapper">
    <label class="label">{{label}}</label>
    <div
      class="selecttip"
      @click = "handleClick"
      >
      <button
        class="tip__discount"
        type='button'
        v-for="(val,i) in splitPercentages"
        :value="val"
        :key=i
        :data-value="val">{{val}}%</button>
      <input
        type="number"
        class="tip__discount--custom"
        :placeholder="placeholder"
        @input = "e => $emit('tip', Number(e.target.value))"
        v-model = "usertext"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectTip',
  data() {
    return {
      splitPercentages: [5,10,15,20,25],
      usertext: ''
    }
  },
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    placeholder: {
      type: String,
      default: 'Custom'
    },
    triggerReset: {
      type: Boolean,
      default: false
    },
  },
  emits: ['tip'],
  watch: {
    triggerReset() {
      this.resetClass()
      this.usertext = ''
    }
  },
  methods: {
    handleClick(e) {

      if(e.target.classList.contains('tip__discount')) {
        this.resetClass();
        e.target.classList.add('btn--active');
        this.$emit('tip', e.target.value);
      }
      if(e.target.classList.contains('tip__discount--custom')) {
        this.$emit('tip', Number(e.target.value));
      }
    },
    resetClass() {
        const btns = document.querySelectorAll('.tip__discount');
        btns.forEach(btn => btn.classList.remove('btn--active'));
    }
  }
}
</script>

<style lang="scss">
  .tip__discount {
    font-size: 25px;
    border: none;
    border-radius: 6px;
    background-color: var(--very-dark-cyan);
    color: var(--white);
    font-weight: 700;
    padding: 4px;
    // &::placeholder {
      //   color: var(--very-dark-cyan);
    // }
    &.btn--active {
      color: var(--very-dark-cyan);
      background-color: var(--strong-cyan);
    }
    // &:hover:not(.btn--active) {
    //   color: var(--very-dark-cyan);
    //   background-color: var(--light-grayish-cyan);
    // }
    
  }
  .tip__discount--custom {
    padding: 4px;
    background-color: var(--lightest-grayish-cyan);
  }
  .selecttip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
  @media screen and (min-width: 451px) {
    .selecttip {
      grid-template-columns: repeat(3, 1fr);

    }
  }
</style>
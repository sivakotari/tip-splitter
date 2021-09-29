<template>
  <div class="splitter-view">
    <div class="splitter-view__row">
      <div >
        <span class="header">Tip Amount</span>
        <span class="sub_header">/ person</span>
      </div>
      <span class="count">${{tip_amount.toFixed(2)}}</span>
    </div>
    <div class="splitter-view__row">
      <div>
        <span class="header">Total</span>
        <span class="sub_header">/ person</span>
      </div>
      <span class="count">${{split_total_amount.toFixed(2)}}</span>
    </div>
    <button
      class="reset"
      :class = "{'disabled': !(tip_amount && split_total_amount)}"
      @click = "$emit('reset')"
    >Reset</button>
  </div>
</template>

<script>
export default {
    name: "ShowTips",
    props: ["tip_amount", "split_total_amount"]
}
</script>

<style lang="scss">
  .splitter-view{
    background-color: var(--very-dark-cyan);
    border-radius: 15px;
    padding: 35px;
    height: inherit;
  }
  .splitter-view__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
    > div {
      display: grid;
    }
    &:first-child {
      margin-bottom: 40px;
    }
  }
  .header {
    font-size: 14px;
  }
  .sub_header {
    font-size: 12px;
    color: var(--dark-grayish-cyan);
  }
  .count {
    color: var(--strong-cyan);
    font-size: 45px;
  }
  .reset {
    width: 100%;
    font-size: 20px;
    border: none;
    border-radius: 6px;
    color: var(--very-dark-cyan);
    background-color: var(--strong-cyan);
    font-weight: 700;
    padding: 10px 4px;
    text-transform: uppercase;
  }
  .disabled {
    opacity: .2;
  }
  @media screen and (min-width: 800px) {
    .reset {
      margin-top: 107px !important;

    }
  }
</style>
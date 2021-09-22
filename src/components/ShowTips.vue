<template>
  <div class="splitter-view">
      <h4>Tip amount</h4>
      <span>{{tip_amount}}</span>
      <h4>Total</h4>
      <span>{{split_total_amount}}</span>
  </div>
</template>

<script>
export default {
    name: "ShowTips",
    props: ["tip_amount", "split_total_amount"]
}
</script>

<style>

</style>
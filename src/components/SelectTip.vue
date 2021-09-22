<template>
  <div class="selecttip">
    <slot name="label"></slot>
    <button
      type='button'
      v-for="(val,i) in splitPercentages"
      :key=i
      @click = "$emit('tip', val)"
      :data-value="val">{{val}}%</button>
    <input
      type="number"
      :placeholder="placeholder"
      @input = "e => $emit('tip', Number(e.target.value))"
    >
  </div>
</template>

<script>
export default {
  name: 'SelectTip',
  data() {
    return {
      splitPercentages: [5,10,15,20,25]
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'custom'
    }
  },
  methods: {}
}
</script>

<style>

</style>
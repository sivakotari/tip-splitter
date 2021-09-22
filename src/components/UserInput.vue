<template>
  <div class="input__wrapper">
    <slot name="label"></slot>
    <input
      type="number"
      :placeholder="placeholder"
      @input = "e => $emit('valueChange', Number(e.target.value))"
    >
    <slot name="prefix"></slot>

      <!-- <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template> -->

      <!-- <slot v-bind:user="user"></slot> -->
      <!-- <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template> -->

  </div>
</template>

<script>
export default {
    name: 'BillInput',
    data() {
        return {}
    },
    props: {
      label: {
        type: String,
        default: 'Label'
      },
      placeholder: {
        type: [String, Number],
        default: 0
      },
      suffix: {
        type: String
      }
    }
}
</script>

<style lang="scss">
  .input__wrapper {
    width: 500px;
    position: relative;
  }

</style>
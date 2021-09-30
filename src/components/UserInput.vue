<template>
  <div class="input__wrapper">
    <div class="label">
      <label>{{label}}</label>
      <span v-if="error" class="error">{{error}}</span>
    </div>
    <input
      type="number"
      :placeholder="placeholder"
      @input = "handleInput"
      :style="style()"
      v-model = "usertext"
      :class = "{'field__error' : error}"
    >
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  data() {
    return {
      usertext: '',
      error: ''
    }
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
    prefix: {
      type: String,
      default: 'icon-dollar'
    },
    triggerReset: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: null,
    }
  },
  watch: {
    triggerReset() {
      this.usertext = ''
      this.error = ''
    }
  },
  computed: {
    url: function() {
      return `url('./src/images/${this.prefix}.svg')`;
    }
  },
  methods: {
    handleInput(e) {
      const val = Number(e.target.value);
      if(this.rules)
        this.validateInput(val);
      this.$emit('valueChange', val);
    },
    validateInput(val) {
      const {condition, message} = this.rules[0];
      if(condition(val))
        this.error = '';
      else
        this.error = message;
    },
    style() {
      return {
        'background': `var(--lightest-grayish-cyan) url(src/images/${this.prefix}.svg) no-repeat 20px center`,
      }
    }
  }
}
</script>

<style lang="scss">
  .input__wrapper {
    position: relative;
    input {
      // background: url(`@/images/${this.prefix}.svg`) no-repeat center 80px;
    }
  }
  .icon {
    width: 11px;
    height: 17px;
  }
  .error {
    color: var(--error);
    font-size: 16px;
  }
  .field__error {
    border-color: var(--error);
    &:hover, &:active, &:focus {
      border-color: var(--error);
    }
  }

</style>
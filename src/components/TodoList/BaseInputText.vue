<template>
  <input type="text" class="input" v-on="listeners" v-bind:value="value">
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>
<style scoped>
  /*@import "../variables.scss";*/

  .input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #00c185;
  }
</style>

<template>
  <button :disabled="disabled" class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'BtnBuy',
    props: {
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>

<style>

</style>
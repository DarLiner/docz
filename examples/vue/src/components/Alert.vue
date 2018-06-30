<template>
  <div class="alert" :class="[ typeClass ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: {
      kind: {
        type: String,
        required: false,
        default: 'info'
      }
    },
    computed: {
      typeClass() {
        return `alert--${ this.kind }`;
      },
    }
  }
</script>

<style scoped>
  .alert {
    padding: 15px 20px;
    background: white;
    border-radius: 3px;
    color: white;
  }
  .alert--info {
    background: #5352ED;
  }
  .alert--positive {
    background: #2ED573;
  }
  .alert--negative {
    background: #FF4757;
  }
  .alert--warning {
    background: #FFA502;
  }
</style>

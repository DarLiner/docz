<template>
  <button
    @mouseover="mouseOver"
    @mouseout="mouseOver"
    class="button"
    :class="[ sizeClass ]"
    :style ="[ buttonStyle ]">
    <slot></slot>
  </button>
</template>

<script>
  const TYPE_STYLE_MAP = {
    'primary': '#1FB6FF',
    'secondary': '#5352ED',
    'cancel': '#FF4949',
    'dark': '#273444',
    'gray': '#8492A6'
  }

  export default {
    name: 'Button',
    data() {
      return {
        active: false
      }
    },
    props: {
      kind: {
        type: String,
        required: false,
        default: 'primary'
      },
      scale: {
        type: String,
        required: false,
        default: 'normal'
      },
      outline: Boolean,
    },
    methods: {
      mouseOver() {
        this.active = !this.active;
      }
    },
    computed: {
      sizeClass() {
        return `button--${ this.scale }`;
      },
      buttonStyle() {
        const boxShadowColor = this.outline && !this.active ? TYPE_STYLE_MAP[this.kind] : 'transparent'
        const backgroundColor = this.outline && !this.active ? 'transparent' : TYPE_STYLE_MAP[this.kind]

        return {
          background: `${backgroundColor}`,
          boxShadow: `inset 0 0 0 ${!this.active ? '1px' : '1000px'} ${boxShadowColor}`,
          color: `${this.outline && !this.active ? TYPE_STYLE_MAP[this.kind] : 'white'}`
        }
      }
    }
  }
</script>

<style scoped>
  .button {
    cursor: pointer;
    margin: 3px 5px;
    border: none;
    border-radius: 3px;
    transition: all .3s;
  }
  /* Scale */
  .button--small {
    padding: 5px 10px;
    font-size: 14px;
  }
  .button--normal {
    padding: 10px 20px;
    font-size: 16px;
  }
  .button--big {
    padding: 20px 30px;
    font-size: 18px;
  }
</style>

<template>
  <div>
    <div
      :style="{
        'position': 'relative',
        'width': `${size}px`,
        'padding-bottom': '170%',
        'border-color': color,
        'border-radius': `${size / 2}px`,
        'border-width': `${Math.ceil(size / 20)}px`
      }"
    >
      <span
        :style="{
          'position': 'absolute',
          'width': `${Math.ceil(size / 10)}px`,
          'padding-bottom': '40%',
          'top': '20%',
          'left': '50%',
          'margin-left': `-${Math.ceil(size / 10) / 2}px`,
          'border-radius': `${Math.ceil(size / 10) / 2}px`,
          'background': color
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#ffffff'
    },
    size: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style scoped>
span {
  -webkit-animation-name: icoScrollDown;
  animation-name: icoScrollDown;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
}
@-webkit-keyframes icoScrollDown {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, 10px);
  }
}
@keyframes icoScrollDown {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, 10px);
  }
}
</style>
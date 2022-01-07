<template>
  <div class="item">
    <span>{{objData.name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    objData: {
      type: [Object],
      default: () => {}
    }
  }
}
</script>

<style lang='stylus'>
  @import './list-item.styl';
</style>

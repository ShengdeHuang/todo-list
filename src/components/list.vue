<template>
  <div id="list" class="clearfix">
    <div class="list-group" v-for="(item, index) in listData" :key="index">
      <div class="list-title">{{ item.title }}</div>
      <draggable class="draggable" :list="item.list" group="people">
        <transition-group>
          <div
            class="draggable-item"
            v-for="element in item.list"
            :key="element.id"
          >
            <list-item :objData="element"></list-item>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import ListItem from './list-item'
import Draggable from 'vuedraggable'

export default {
  props: {
    listData: {
      type: [Array],
      default: () => []
    }
  },
  components: {
    ListItem,
    Draggable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
#list {
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;

  .list-group {
    float: left;
    width: 240px;
    height: 100%;
    margin-right: 20px;

    .list-title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .draggable {
      height: 100%;

      .draggable-item {
        margin-bottom: 8px;
      }
    }
  }
}
</style>

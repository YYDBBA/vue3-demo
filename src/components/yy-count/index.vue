<template>
  <div class="yy-count">
    <div class="list">
      <div class="item" :style="{top:top+'px'}" v-for="(item, i) in arr" :key="i">
        {{ item }}
      </div>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    countString: {
      type: String,
      default: "0123456789",
    },
  },
  setup(props, contxt) {
    const arr = "0123456789".split("");
    const top = 10
    return {
      arr,
      top
    };
  },
});
</script>

<style lang="less">
.yy-count {
  width: 100%;
  & .list {
    position: relative;
    width: 30px;
    height: 40px;
    overflow: hidden;
    background-image: url("/@/image/bg.png");
    background-size: 100% 100%;
    & .item {
      position: relative;
      top: 10px;
      transition: all 0.5s;
      width: 100%;
      line-height: 30px;
      text-align: center;
      writing-mode: vertical-lr;
      text-orientation: upright;
      letter-spacing: 10px;
      color: #fff;
    }
    & span {
      position: absolute;
      top: 10px;
      left: 0;
    }
  }
}
</style>
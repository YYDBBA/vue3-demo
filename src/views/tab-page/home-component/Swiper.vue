<template>
  <van-swipe
    @change="onChange"
    autoplay="2000"
    width="100%"
    indicator-color="#fff"
  >
    <van-swipe-item v-for="(item, i) in swiperList" :key="i">
      <img class="banner" :src="item.url" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    swiperList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const onChange = (index: number) => {};
    return {
      onChange,
    };
  },
});
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
}
</style>
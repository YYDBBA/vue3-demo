<template>
  <ul class="live-list" @click="handleClick">
    <li class="item item-pic">
      <van-image class="pic" :src="liveData.pic"> </van-image>
      <span class="status"
        ><van-icon name="bar-chart-o" size="14" />直播中</span
      >
    </li>
    <li class="item item-content">
      <div class="des">{{ liveData.des }}</div>
      <div class="action">
        <van-icon name="fire-o" />
        <span>最近人气 {{ liveData.count }}</span>
        <van-tag class="watch" round type="primary">马上看</van-tag>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    liveData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const handleClick = () => {
      context.emit("onClick");
    };
    return {
      handleClick,
    };
  },
});
</script>
<style lang="less" scoped>
.live-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .item-pic {
    position: relative;
    width: 37%;
    height: 75px;
    border-radius: 5px;
    overflow: hidden;
    .pic {
      width: 100%;
      height: 100%;
    }
    .status {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      line-height: 20px;
      color: #fff;
      background-color: rgba(65, 65, 65, 0.493);
      font-size: 12px;
      border-bottom-right-radius: 5px;
    }
  }
  .item-content {
    width: 60%;
    .des {
      font-size: 14px;
      height: 50%;
    }
    .action {
      color: #ccc;
      font-size: 14px;
      line-height: 37.5px;
      .watch {
        float: right;
        display: inline-block;
        margin-top: 7.8px;
        font-size: 12px;
        width: 50px;
        line-height: 22px;
        text-align: center;
      }
    }
  }
}
</style>

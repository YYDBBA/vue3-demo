<template>
  <div class="h-swiper">
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
    <ul class="h-action">
      <li
        class="item"
        v-for="(item, i) in actionList"
        :key="i"
        @click="goMore(item)"
      >
        <img class="icon" :src="item.url" alt="" />
      </li>
    </ul>
    <van-tabs v-model="active">
      <van-tab v-for="item in tabList" :title="item.title" :key="item"
        >内容 1</van-tab
      >
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
interface actionType {
  url: string;
  path?: string;
}
export default defineComponent({
  setup(props) {
    const router = useRouter();
    const active = ref(0);
    const onChange = (index: number) => {};
    const actionList = [
      {
        url: "/@/image/1music.svg",
      },
      {
        url: "/@/image/notifce.svg",
      },
      {
        url: "/@/image/zs.svg",
      },
      {
        url: "/@/image/shopcar.svg",
      },
      {
        url: "/@/image/record.svg",
      },
      {
        url: "/@/image/set.svg",
      },
      {
        url: "/@/image/video.svg",
        path: "/video",
      },
      {
        url: "/@/image/phone.svg",
      },
      {
        url: "/@/image/movice.svg",
      },
      {
        url: "/@/image/da.svg",
      },
    ];
    const swiperList = [
      {
        url: "/@/image/banner1.jpg",
      },
      {
        url: "/@/image/banner2.jpg",
      },
      {
        url: "/@/image/banner3.jpg",
      },
      {
        url: "/@/image/banner4.png",
      },
    ];
    const tabList = [
      {
        title: "JavaScript",
      },
      {
        title: "CSS3",
      },
      {
        title: "HTML5",
      },
      {
        title: "Node",
      },
      {
        title: "TypeScript",
      },
      {
        title: "Vue",
      },
      {
        title: "React",
      },
    ];
    const goMore = (item: actionType) => {
      if (item.path) {
        router.push(item.path);
      }
    };
    return {
      onChange,
      actionList,
      swiperList,
      goMore,
      active,
      tabList,
    };
  },
});
</script>

<style lang="less" scoped>
.h-swiper {
  width: 100%;
  .banner {
    width: 100%;
  }
}

.h-action {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item {
  width: 17%;
}
.icon {
  width: 100%;
}
</style>

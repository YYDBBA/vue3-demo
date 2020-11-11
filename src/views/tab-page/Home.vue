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
        url: "./../../1music.svg",
      },
      {
        url: "./../../2通知.svg",
      },
      {
        url: "./../../3赠送.svg",
      },
      {
        url: "./../../4购物车.svg",
      },
      {
        url: "./../../5记录.svg",
      },
      {
        url: "./../../6设置.svg",
      },
      {
        url: "./../../7视频.svg",
        path: "/video",
      },
      {
        url: "./../../8电话.svg",
      },
      {
        url: "./../../9电影.svg",
      },
      {
        url: "./../../10档案.svg",
      },
    ];
    const swiperList = [
      {
        url: "./../../banner1.jpg",
      },
      {
        url: "./../../banner2.jpg",
      },
      {
        url: "./../../banner3.jpg",
      },
      {
        url: "./../../banner4.png",
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

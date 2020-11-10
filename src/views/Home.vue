<template>
  <div class="h-swiper">
    <van-swipe
      @change="onChange"
      autoplay="2000"
      width="100%"
      indicator-color="#fff"
    >
      <van-swipe-item>
        <img class="banner" src="./../assets/banner1.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="banner" src="./../assets/banner2.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="banner" src="./../assets/banner3.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="banner" src="./../assets/banner4.png" alt="" />
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
    <van-tabbar v-model="active">
      <van-tabbar-item badge="3">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
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
    const onChange = (index: number) => {
      // console.log(index);
    };
    const active = ref(0);
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
    const icon = reactive({
      active: "https://img.yzcdn.cn/vant/user-active.png",
      inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
    });
    const router = useRouter();
    const goMore = (item: actionType) => {
      if (item.path) {
        router.push(item.path);
      }
    };
    return {
      onChange,
      active,
      icon,
      actionList,
      goMore,
    };
  },
});
</script>
<style scoped>
.h-swiper {
  width: 100%;
}
.banner {
  width: 100%;
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

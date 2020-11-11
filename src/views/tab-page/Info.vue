<template>
  <div class="h-swiper">
  
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

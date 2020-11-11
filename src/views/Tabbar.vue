<template>
  <div class="yy-tabbar">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item
        v-for="(item, i) in tabbarList"
        :key="i"
        :badge="item.badge"
        :icon="item.icon"
        :to="item.path"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
interface actionType {
  url: string;
  path?: string;
}
export default defineComponent({
  setup(props) {
    const active = ref(0);
    const router = useRouter();
    const goMore = (item: actionType) => {
      if (item.path) {
        router.push(item.path);
      }
    };
    const tabbarList = reactive({
      tabbarList: [
        {
          icon: "wap-home-o",
          path: "/tabbar/home",
          title: "首页",
        },
        {
          icon: "chat-o",
          path: "/tabbar/info",
          title: "消息",
          badge: "99+",
        },
        {
          icon: "video-o",
          path: "/tabbar/class",
          title: "课程",
        },
        {
          icon: "user-circle-o",
          path: "/tabbar/mine",
          title: "我的",
        },
      ],
    });
    return {
      active,
      goMore,
      ...toRefs(tabbarList),
    };
  },
});
</script>
<style scoped>
</style>

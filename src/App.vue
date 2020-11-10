<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    provide("globalColor", "red");
    const active = ref(0);
    const icon = reactive({
      active: "https://img.yzcdn.cn/vant/user-active.png",
      inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
    });
    return {
      active,
      icon,
    };
  },
});
</script>

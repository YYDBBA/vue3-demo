<template>
  <div class="h-swiper">
    <van-button @click="goHome">哈哈哈</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(props) {
    const router = useRouter();
    const goHome = () => {
      router.push("/tabbar");
    };
    return {
      goHome
    };
  },
});
</script>
<style scoped>
</style>

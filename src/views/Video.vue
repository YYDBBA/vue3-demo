<template>
  <div class="h-swiper">
    <van-nav-bar
      title="视频专区"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="wap-nav" size="18" />
      </template>
    </van-nav-bar>
    <video
      autoplay
      src="https://www.w3school.com.cn/i/movie.ogg"
      controls
      width="375"
    ></video>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(props) {
    const router = useRouter();
    const goHome = () => {
      router.push("/home");
    };
    const onClickLeft = () => {
      router.back();
    };
    const onClickRight = () => {};
    return {
      goHome,
      onClickLeft,
      onClickRight,
    };
  },
});
</script>
<style scoped>
</style>

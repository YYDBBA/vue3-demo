<template>
  <div class="wrapper" ref="box" id="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import BScroll from "better-scroll";

export default defineComponent({
  setup(props, contxt) {
    const box: any = ref(null);
    onMounted(() => {
      // console.log(box)
      const bs = new BScroll(box.value, {
        pullUpLoad: true,
        scrollY:true,
        click:true
        // wheel: true,
        // scrollbar: true,
      });
      console.log(bs);
    });
    return {
      box,
    };
  },
});
</script>

<style>
</style>
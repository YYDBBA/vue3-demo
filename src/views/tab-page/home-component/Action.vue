<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
interface actionType {
  url: string;
  path?: string;
}
export default defineComponent({
  props: {
    actionList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const router = useRouter();
    const goMore = (item: actionType) => {
      if (item.path) {
        router.push(item.path);
      }
    };
    return {
      goMore,
    };
  },
});
</script>
<style lang="less" scoped>
.h-action {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    width: 17%;
    .icon {
      width: 100%;
    }
  }
}
</style>
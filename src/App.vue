<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, defineComponent } from "vue";
export default defineComponent({
  setup() {
    provide("globalColor", "red");
  },
});
</script>

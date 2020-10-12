<template>
  <h1>{{ msg }}</h1>
  <button @click="changeCount">count is: {{ count }}</button>
  <p>
    {{obj.user}}
  </p>
  <p></p>
</template>

<script>
import { ref, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: ""
    },
  },
  setup(props) {
    const { msg } = props;
    // ref定义响应式数据，count.value才能修改该定义的响应式数据
    let count = ref(0);
    // reactive定义一个响应式对象，直接修改即可
    const obj = reactive({
      user: "123",
    });
    // 事件
    const changeCount = () => {
      count.value++;
      obj.user = '456'
    };

    return {
      count,
      obj,
      changeCount,
    };
  },
});
</script>

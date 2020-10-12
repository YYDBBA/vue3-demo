<template>
  <h1 ref="h3Ref">{{ msg }}</h1>
  <button @click="changeCount">count is: {{ count }}</button>
  <button>count is: {{ gg }}</button>
  <p>
    {{ user }}
  </p>
  <p></p>
</template>

<script>
import {
  ref,
  defineComponent,
  reactive,
  toRefs,
  isRef,
  computed,
  onMounted,
  onUpdated,
  onUnmounted,
  inject,
} from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const themeColor = inject("globalColor");
    // console.log(themeColor)
    const { msg } = props;
    // ref()
    // 定义响应式数据对象,对象唯一属性value,count.value才能修改该定义的响应式数据
    // 通过 ref() 还可以引用页面上的元素或组件,且为原生DOM对象
    const count = ref(0);
    const h3Ref = ref(null)
    // reactive()
    // 定义一个响应式对象,直接修改即可
    const obj = reactive({
      user: "123",
    });
    // isRef()
    // 用来判断某个值是否为ref()创建出来的对象
    // 应用场景：当需要展开某个可能为 ref() 创建出来的值的时候
    const getCount = isRef(count) ? count.value : count;
    // toRefs()
    // 函数可以将 reactive() 创建出来的响应式对象,
    // 转换为普通的对象，只不过，这个对象上的每个属性节点，都是 ref() 类型的响应式数据

    // computed()
    // 在调用 computed() 函数期间，传入一个 function 函数，可以得到一个只读的计算属性
    const gg = computed(() => count.value + 1);
    // console.log(gg);
    
    // watch()

    // 新生命周期 onMounted, onUpdated, onUnmounted
    // 按需导入到组件中，且只能在 setup() 函数中使用
    onMounted(() => {
      console.log("mounted!");
      h3Ref.value.style.color="yellow"
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });

    // 事件
    const changeCount = () => {
      count.value++;
      obj.user = "456";
    };

    return {
      count,
      ...toRefs(obj),
      changeCount,
      gg,
      h3Ref
    };
  },
});
</script>

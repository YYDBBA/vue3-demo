<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <h1 ref="h3Ref">hahahha</h1>
  <van-button type="danger" @click="changeCount"
    >count is: {{ count }}</van-button
  >
  <van-button type="primary">count is: {{ com }}</van-button>
  <p>
    {{ user }}
  </p>
  <p>{{ state }}</p>
  <van-button @click="changeHello">改变vuex</van-button>
  <van-button @click="asyncChange">异步改变vuex</van-button>
  
  <van-tabbar v-model="active">
    <van-tabbar-item badge="3">
      <span>自定义</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
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
import { useStore } from "vuex";
export default defineComponent({
  setup(props) {
    const active = ref(0);
    const icon = reactive({
      active: "https://img.yzcdn.cn/vant/user-active.png",
      inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
    });
    const themeColor = inject("globalColor");
    // console.log(themeColor)
    // const { msg } = props;
    // ref()
    // 定义响应式数据对象,对象唯一属性value,count.value才能修改该定义的响应式数据
    // 通过 ref() 还可以引用页面上的元素或组件,且为原生DOM对象
    const count = ref(0);
    const h3Ref: any = ref(null);
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
    const com = computed(() => count.value + 1);
    // console.log(com);

    // watch()

    // 新生命周期 onMounted, onUpdated, onUnmounted
    // 按需导入到组件中，且只能在 setup() 函数中使用
    onMounted(() => {
      console.log("mounted!");
      h3Ref.value.style.color = themeColor;
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
    const onClickLeft = () => {};
    const onClickRight = () => {};
    const store = useStore();
    const state = computed(() => store.state.hello);
    const changeHello = () => store.commit("changeHello", "我是你爸");
    const asyncChange = () => store.dispatch("asyncChange", "我是你爸");
    return {
      count,
      ...toRefs(obj),
      changeCount,
      onClickLeft,
      onClickRight,
      changeHello,
      asyncChange,
      com,
      h3Ref,
      state,
      active,
      icon,
    };
  },
});
</script>

<template>
  <div class="h-swiper" ref="box">
    <swiper :swiperList="swiperList"></swiper>
    <action :actionList="actionList"></action>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="item in tabList" :title="item.title" :key="item">
        <div class="list-container">
          <live-list @onClick="handleClick" :liveData="item"></live-list>
        </div>
      </van-tab>
    </van-tabs>
    <!-- <count></count> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import BScroll from "better-scroll";
import LiveList from "/@/views/tab-page/home-component/LiveList.vue";
import Swiper from "/@/views/tab-page/home-component/Swiper.vue";
import Action from "/@/views/tab-page/home-component/Action.vue";
import Scroll from "/@/components/yy-scroll/index.vue";
import Count from "/@/components/yy-count/index.vue";
export default defineComponent({
  components: { LiveList, Swiper, Action, Scroll,Count },
  setup(props) {
    const router = useRouter();
    const active = ref(0);
    const box: any = ref(null);
    const handleClick = () => {
      router.push("/video");
    };
    onMounted(() => {
      // console.log(box)
      const bs = new BScroll(box.value, {
        pullUpLoad: true,
        scrollY: true,
        click: true,
        // wheel: true,
        // scrollbar: true,
      });
      // console.log(bs);
    });
    const state = reactive({
      tabList: [
        {
          title: "JavaScript",
          pic: "/@/image/banner1.jpg",
          count: "2万+",
          des: "JavaScript高级开发必备技能，还在等什么呢？",
        },
        {
          title: "CSS3",
          // pic: "/@/image/banner1.jpg",
          count: "2万+",
          des: "JavaScript高级开发必备技能，还在等什么呢？",
        },
        {
          title: "HTML5",
          pic: "/@/image/banner1.jpg",
          count: "2万+",
          des: "JavaScript高级开发必备技能，还在等什么呢？",
        },
        {
          title: "Node",
          pic: "/@/image/banner1.jpg",
          count: "2万+",
          des: "JavaScript高级开发必备技能，还在等什么呢？",
        },
        {
          title: "TypeScript",
          pic: "/@/image/banner1.jpg",
          count: "2万+",
          des: "JavaScript高级开发必备技能，还在等什么呢？",
        },
        {
          title: "Vue",
          pic: "/@/image/banner1.jpg",
          count: "2万+",
          des: "JavaScript高级开发必备技能，还在等什么呢？",
        },
        {
          title: "React",
          pic: "/@/image/banner1.jpg",
          count: "2万+",
          des: "JavaScript高级开发必备技能，还在等什么呢？",
        },
      ],
      swiperList: [
        {
          url: "/@/image/banner1.jpg",
        },
        {
          url: "/@/image/banner2.jpg",
        },
        {
          url: "/@/image/banner3.jpg",
        },
        {
          url: "/@/image/banner4.png",
        },
      ],
      actionList: [
        {
          url: "/@/image/1music.svg",
        },
        {
          url: "/@/image/notifce.svg",
        },
        {
          url: "/@/image/zs.svg",
        },
        {
          url: "/@/image/shopcar.svg",
        },
        {
          url: "/@/image/record.svg",
        },
        {
          url: "/@/image/set.svg",
        },
        {
          url: "/@/image/video.svg",
          path: "/video",
        },
        {
          url: "/@/image/phone.svg",
        },
        {
          url: "/@/image/movice.svg",
        },
        {
          url: "/@/image/da.svg",
        },
      ],
    });
    return {
      active,
      ...toRefs(state),
      handleClick,
      box,
    };
  },
});
</script>

<style lang="less" scoped>
.h-swiper {
  width: 100%;
  .list-container {
    width: 94%;
    margin: 10px 3%;
  }
}
</style>

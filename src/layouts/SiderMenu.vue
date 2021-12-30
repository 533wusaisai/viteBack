<template>
  <AMenu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline">
    <ASubMenu key="sub1">
      <template #icon>
        <cluster-outlined />
      </template>
      <template #title>
        仪表盘
      </template>
      <AMenuItem
        key="/dashboard/workplace"
        @click="titleClick('/dashboard/workplace')">
        工作台
      </AMenuItem>
      <AMenuItem
        key="/dashboard/monitor"
        @click="titleClick('/dashboard/monitor')">
        监控页
      </AMenuItem>
      <AMenuItem
        key="/dashboard/analysis"
        @click="titleClick('/dashboard/analysis')">
        分析页
      </AMenuItem>
    </ASubMenu>
    <ASubMenu key="sub2">
      <template #icon>
        <appstore-outlined />
      </template>
      <template #title>
        列表页
      </template>
      <AMenuItem
        key="5"
        @click="titleClick('/list/search')">
        搜索页
      </AMenuItem>
      <AMenuItem
        key="6"
        @click="titleClick('/list/form')">
        基础表单页
      </AMenuItem>
      <AMenuItem
        key="7"
        @click="titleClick('/list/list')">
        列表页
      </AMenuItem>
    </ASubMenu>
    <AMenuItem
      key="/contrast"
      @click="titleClick('/contrast')">
      <template #icon>
        <setting-outlined />
      </template>
      <span>
        对比页
      </span>
    </AMenuItem>
    <a-sub-menu key="sub4">
      <template #icon>
        <solution-outlined />
      </template>
      <template #title>
        结果页
      </template>
      <AMenuItem
        key="/result/success"
        @click="titleClick('/result/success')">
        <template #icon>
          <solution-outlined />
        </template>
        <span>
          成功页
        </span>
      </AMenuItem>
      <AMenuItem
        key="/result/error"
        @click="titleClick('/result/error')">
        <template #icon>
          <solution-outlined />
        </template>
        <span>
          错误页
        </span>
      </AMenuItem>
    </a-sub-menu>
    <!-- 个人页 -->
    <a-sub-menu key="sub3">
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>
        个人页
      </template>
      <AMenuItem
        key="/account/center" 
        @click="titleClick('/account/center')">
        <template #icon>
          <solution-outlined />
        </template>
        <span>
          个人中心
        </span>
      </AMenuItem>
      <AMenuItem
        key="/account/setting" 
        @click="titleClick('/account/setting')">
        <template #icon>
          <solution-outlined />
        </template>
        <span>
          个人设置
        </span>
      </AMenuItem>
    </a-sub-menu>
    <!-- 可视化图表 -->
    <AMenuItem
      key="/chart" 
      @click="titleClick('/chart')">
      <template #icon>
        <solution-outlined />
      </template>
      <span>
        可视化图表页
      </span>
    </AMenuItem>
  </AMenu>
</template>
<script lang="ts">
import { AppstoreOutlined, ClusterOutlined, SettingOutlined, SolutionOutlined } from '@ant-design/icons-vue';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
interface IdeaData{
  data: [],
}
export default defineComponent({
  components: {
    AppstoreOutlined,
    SettingOutlined,
    SolutionOutlined,
    ClusterOutlined,
  },
  emits:['GET_BREAD'],
  setup(props,{emit}) {
    const router = useRouter()
    const route = useRoute()
    onBeforeRouteUpdate((to:any, from:any, next:Function)=>{
      emit('GET_BREAD',to.matched)
      next()
    })
    const selectedKeys = ref<string[]>([])
    const openKeys = ref<string[]>(['sub1'])
    const titleClick = (path: string) => {
      router.push({
        path: path,
      })
    }
   
    const routeUrl = (routes:any)=>{
      for(let item of routes){
       if(item.children){
         item.children.map((items:any)=>{
           console.log(items);
           if(items.name&&!items.hidenInMenu){
             console.log()
           }
         })
       }
      }
    }
    onMounted(() => {
      const route:any = router.options.routes
      routeUrl(route)
    }),
    watch(
      () => openKeys,
      (val) => {
        console.log('openKeys', val)
      }
    )
    // const sub = onMounted(()=>{
    //   selectedKeys.value.push(route.path)
    // })
    return {
      selectedKeys,
      openKeys,
      titleClick,
      // sub,
      routeUrl
    }
  },
})
</script>

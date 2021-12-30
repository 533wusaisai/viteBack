<!--  -->


<template>
  <ALayout style="min-height: 100vh">
    <ALayoutSider
      v-model:collapsed="formState.collapsed"
      collapsible>
      <!-- 左侧LOGO -->
      <div class="logo">
        <h1
          v-if="!formState.collapsed"
          class="title">
          后台管理系统
        </h1>
      </div>
      <!-- 左侧菜单 -->
      <sider-menu @GET_BREAD="breadcrumb" />
    </ALayoutSider>
    <ALayout>
      <!-- 头部信息 -->
      <layout-header />
      <ALayoutContent style="margin: 0 16px">
        <!-- 面包屑 -->
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item
            v-for="(item,index) in formState.breadcrumb"
            :key="index">
            <router-link :to="item.path">
              {{ item.title }}
            </router-link>
          </a-breadcrumb-item>
        </a-breadcrumb>
        <!--子路由信息 -->
        <router-view />
      </ALayoutContent>
      <layout-footer />
    </ALayout>
  </ALayout>
</template>
<script lang="ts">
import LayoutFooter from '@/components/Footer/index.vue';
import LayoutHeader from '@/components/Header/index.vue';
import SiderMenu from '@/layouts/SiderMenu.vue';
import { defineComponent, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {
    LayoutFooter,
    SiderMenu,
    LayoutHeader,
  },
  setup(){
    const router = useRouter()
    const route = useRoute()
    const formState:any = reactive({
      collapsed:false,
      selectedKeys: ['1'],
      breadcrumb: []
    })
    const  breadcrumb = (payload:any)=>{
      setBreadcrumb(payload)
    }
    // 设置面包屑
    const setBreadcrumb = (arr:any)=>{
      formState.breadcrumb = []
      for(let key in arr){
        let pathTitle:any = {}
        pathTitle.path = arr[key].path
        pathTitle.title = arr[key].meta.title
        formState.breadcrumb.push(pathTitle)
      }
    }
    onMounted(()=>{
      setBreadcrumb(route.matched)
    })
    return {
      formState,
      breadcrumb,
      setBreadcrumb
    }
  }
 
  // data() {
   
  // },
})
</script>
<style lang="less" scoped>
.logo {
  height: 32px;
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  background: url('@/assets/images/svg/logo.svg') no-repeat;
  padding-left: 38px;
  line-height: 32px;
  font-size: 18px;
  letter-spacing: 1.5px;
  .title{
    color:#fff;
  }
}
</style>

<template>
  <ALayout style="min-height: 100vh">
    <ALayoutSider
      v-model:collapsed="formState.collapsed"
      collapsible>
      <div class="logo">
        <h1
          v-if="!formState.collapsed"
          class="title">
          舆论作业系统
        </h1>
      </div>
      <sider-menu />
    </ALayoutSider>
    <ALayout>
      <ALayoutHeader style="background: #fff; padding-left:10px">
        <div class="header">
          <div>舆论作业系统 </div>
          <div>
            <a-avatar style="background-color: #87d068;margin-right:10px">
              <template #icon>
                <user-outlined />
              </template>
            </a-avatar>
            <a-dropdown>
              <a
                class="ant-dropdown-link"
                @click.prevent>
                <!-- {{name}}/ -->
                {{ formState.name }}
                <down-outlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/">
                      账号管理
                    </a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/">
                      修改密码
                    </a>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item
                    key="3"
                    @click="outLogin">
                    退出
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </ALayoutHeader>
      <ALayoutContent style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>任务系统</a-breadcrumb-item>
        </a-breadcrumb>
        <router-view />
      </ALayoutContent>
      <layout-footer />
    </ALayout>
  </ALayout>
</template>
<script lang="ts">
import LayoutFooter from '@/components/Footer/index.vue';
import SiderMenu from '@/layouts/SiderMenu.vue';
import { DownOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  components: {
    UserOutlined,
    DownOutlined,
    LayoutFooter,
    SiderMenu,
  },
  setup(){

    const user:any= localStorage.getItem('user')
    const userName = JSON.parse(user)
    const router = useRouter()
    const route = useRoute()
    const formState = reactive({
      collapsed:false,
      selectedKeys: ['1'],
      name : userName.userName
    })

    const outLogin = ()=>{
      localStorage.removeItem('token')
      router.replace(`/redirect/${route.path}`)
    }
    return {
      formState,
      outLogin
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
.header {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible>
      <div class="logo">
        舆论作业系统
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>仿真环境管理</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>效果评估模型管理</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>策略模型管理</span>
            </span>
          </template>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>效果对比</span>
            </span>
          </template>
          <a-menu-item key="6">
            Team 1
          </a-menu-item>
          <a-menu-item key="8">
            Team 2
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>案例管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <!-- 右侧 -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        首页
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <!-- footer -->
      <layout-footer />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import LayoutFooter from '@/components/Footer/index.vue';
import {
DesktopOutlined,
FileOutlined,
PieChartOutlined,
TeamOutlined,
UserOutlined
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    LayoutFooter
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),
    };
  },
});
</script>
<style lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
  color: #fff;
  background: url('@/assets/images/svg/logo.svg') no-repeat;
  padding-left: 38px;
  line-height: 32px;
  font-size: 18px;
  letter-spacing: 1.5px;
}
</style>

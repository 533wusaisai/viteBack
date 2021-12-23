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
        仿真环境管理
      </template>
      <AMenuItem
        key="/task/task1"
        @click="titleClick('/task/task1')">
        人物管理
      </AMenuItem>
      <AMenuItem
        key="/task/task2"
        @click="titleClick('/task/task2')">
        社交账号管理
      </AMenuItem>
      <AMenuItem
        key="/task/task3"
        @click="titleClick('/task/task3')">
        媒体管理
      </AMenuItem>
    </ASubMenu>
    <ASubMenu key="sub2">
      <template #icon>
        <appstore-outlined />
      </template>
      <template #title>
        效果评估环境模型管理
      </template>
      <AMenuItem
        key="5"
        @click="titleClick('/target/target1')">
        传播率管理
      </AMenuItem>
      <AMenuItem
        key="6"
        @click="titleClick('/target/target2')">
        阅读率管理
      </AMenuItem>
      <AMenuItem
        key="7"
        @click="titleClick('/target/target3')">
        媒体传播率管理
      </AMenuItem>
    </ASubMenu>
    <AMenuItem
      key="/writing/writing2"
      @click="titleClick('/writing/writing2')">
      <template #icon>
        <setting-outlined />
      </template>
      <span>
        策略模型管理
      </span>
    </AMenuItem>
    <AMenuItem
      key="/reviewer/reviewer1"
      @click="titleClick('/reviewer/reviewer1')">
      <template #icon>
        <solution-outlined />
      </template>
      <span>
        效果对比
      </span>
    </AMenuItem>
    <AMenuItem
      key="/reviewer/reviewer2" 
      @click="titleClick('/reviewer/reviewer2')">
      <template #icon>
        <solution-outlined />
      </template>
      <span>
        案例管理
      </span>
    </AMenuItem>
    <AMenuItem
      key="/reviewer/reviewer3" 
      @click="titleClick('/reviewer/reviewer3')">
      <template #icon>
        <solution-outlined />
      </template>
      <span>
        可视化图表
      </span>
    </AMenuItem>
  </AMenu>
</template>
<script lang="ts">
import { AppstoreOutlined, ClusterOutlined, SettingOutlined, SolutionOutlined } from '@ant-design/icons-vue'
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  components: {
    AppstoreOutlined,
    SettingOutlined,
    SolutionOutlined,
    ClusterOutlined,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const selectedKeys = ref<string[]>([])
    const openKeys = ref<string[]>(['sub1'])
    const titleClick = (path: string) => {
      router.push({
        path: path,
      })
    }
    console.log('sider=>',route.path);
    watch(
      () => openKeys,
      (val) => {
        console.log('openKeys', val)
      }
    )
    const sub = onMounted(()=>{
      selectedKeys.value.push(route.path)
    })
    return {
      selectedKeys,
      openKeys,
      titleClick,
      sub
    }
  },
})
</script>

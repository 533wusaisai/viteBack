<template>
  <ALayoutHeader style="background: #fff; padding-left:10px">
    <div class="header">
      <div>后台管理系统 </div>
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
</template>
<script lang="ts">
import { DownOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
    components: {
        UserOutlined,
        DownOutlined,
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const user:any= localStorage.getItem('user')
        const userName = JSON.parse(user)
        const formState:any = reactive({
            name : userName.userName,
        })
        const outLogin = ()=>{
            localStorage.clear()
            // 刷新=> 重置
            router.replace(`/redirect/${route.path}`)
        }
        return {
            formState,
            outLogin
        }
    },

})
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>

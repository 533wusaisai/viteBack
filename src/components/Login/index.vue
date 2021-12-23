<template>
  <div class="login">
    <div class="login_layout">
      <h1 class="title">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="@/assets/images/svg/logo.svg"
            alt="logo" />
        </a>
        <span>后台管理系统</span>
      </h1>
      <div class="login_input">
        <!-- <h2>登录</h2> -->
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules">
          <a-form-item name="user">
            <a-input
              v-model:value="formState.user"
              class="input-lg"
              placeholder="请输入用户名">
              <template #prefix>
                <user-outlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input
              v-model:value="formState.password"
              class="input-lg"
              type="password"
              placeholder="请输入密码">
              <template #prefix>
                <lock-outlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              class="login-btn"
              @click="onSubmit ">
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { user } from '@/api/requestApi';
import userStore from '@/store/index';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import type { UnwrapRef } from 'vue';
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
   components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formRef= ref()
    const router = useRouter()
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const rules = {
      user:[
        {
          required: true, message: '请输入用户名', trigger: 'blur'
        }
      ],
      password:[
        {
          required: true, message: '请输入用户密码', trigger: 'blur'
        }
      ]
    }
    const onSubmit = ()=>{
      formRef.value
      .validate()
      .then(async () => {
       const res =  await user({userName:formState.user,passWord:formState.password})
       localStorage.setItem('user',JSON.stringify(res))
        if(localStorage.getItem('token')){
          router.push({
            path: '/'
          })
        }
        })
        .catch((err:any) => {
          console.log('error', err);
        });
    }
    const store = userStore();
    onMounted(async ()=>{
      store.SET_USER_NAME()
    })
    return {
      formState,
      rules,
      onSubmit,
      formRef
    };
  },
})
</script>

<style lang="less" scoped>
.login{
  width: 100vw;
  height: 100vh;
  background: @login-backgroud;
  position: relative;
  .login_layout{
    width: 50vh;
    height: 50vh;
    // border:1px solid @primary-color;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    .title{
      text-align: center;
      font-size: 30px;
      padding: 10px 0;
      // width: 400px;
      line-height: 40px;
      a{
        display: inline-block;
        width: 40px;
        margin-right: 20px;
      }
      // span{
      //   // display: inline-block;
      //   // width: 2000px;
      //   // background: red;
      // }
      // // display: flex;
      // // justify-content: center;
    }
    .login_input{
      width: 400px;
      margin: auto;
      margin: 30px auto;
      .input-lg{
        height: 40px;
      }
      .login-btn{
        width: 400px;
        height: 40px;
        font-size: 16px;
        // line-height: 40px;
      }
    }
  }
}
</style>
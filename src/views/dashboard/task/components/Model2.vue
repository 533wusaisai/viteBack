<template>
  <a-modal
    v-model:visible="visible"
    title="新增社交账号"
    @ok="handleOk">
    <a-form
      ref="formRef"
      :model="formState">
      <a-form-item
        label="国籍">
        <a-select
          ref="select"
          v-model:value="formState.nationality"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="china">
            中国
          </a-select-option>
          <a-select-option value="USA">
            美国
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="媒体">
        <a-select
          ref="select"
          v-model:value="formState.nationality"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="facebook">
            Facebook
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="人员占比">
        <a-input style="width: 95%;" />%
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button
        key="back"
        @click="handleOk">
        取消
      </a-button>
      <a-button
        key="submit"
        type="primary"
        @click="handleOk">
        确认
      </a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    props:{
        visible:{
            type: Boolean,
            default:()=>{}
        }
    },
    emits:['SET_CLOSE'],
    setup(props,{emit}) {
        const handleOk =()=>{
            emit('SET_CLOSE',false)
        }
        const handleChange= ()=>{}
        const formState =reactive({
            nationality: 'china'
        })
        return {
            handleOk,
            formState,
            handleChange
        }
    },
})
</script>

<template>
  <a-modal
    v-model:visible="visible"
    title="新增人物"
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
          <a-select-option value="usa">
            美国
          </a-select-option>
          <a-select-option value="japan">
            日本
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="姓名">
        <a-input style="width: 100%;" />
      </a-form-item>
      <a-form-item label="性别">
        <a-input style="width: 100%;" />
      </a-form-item>
      <a-form-item
        label="年龄">
        <a-select
          ref="select"
          v-model:value="formState.age"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="facebook">
            10-15
          </a-select-option>
          <a-select-option value="facebook">
            10岁以下
          </a-select-option>
          <a-select-option value="facebook">
            10-20
          </a-select-option>
          <a-select-option value="facebook">
            20-30
          </a-select-option>
          <a-select-option value="facebook">
            30-40
          </a-select-option>
          <a-select-option value="facebook">
            40-50
          </a-select-option>
          <a-select-option value="zi">
            自定义
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="语言">
        <a-select
          ref="select"
          v-model:value="formState.nationality"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="china">
            英语
          </a-select-option>
          <a-select-option value="usa">
            日语
          </a-select-option>
          <a-select-option value="japan">
            韩语
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="粉丝数">
        <a-input style="width: 95%;" />
      </a-form-item>
      <a-form-item label="社交媒体">
        <a-table
          :row-selection="rowSelection"
          :columns="columns"
          :pagination="false"
          :data-source="data" />
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
import { defineComponent, reactive } from 'vue';

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
         const data = [
      {
         media: 'Facebook',
         account: '',
      },
      {
         media: '',
         account: '',
      },
      ];
      const columns = [
         {
            title: '社交媒体',
            dataIndex: 'media',
         },
         {
            title: '媒体账号',
            dataIndex: 'account',
         },
      ];
        const rowSelection = ()=>{}
        const handleChange= ()=>{}
        const formState =reactive({
            nationality: 'china',
            age: 'zi'
        })
        return {
            handleOk,
            formState,
            handleChange,
            rowSelection,
            data,
            columns
        }
    },
})
</script>

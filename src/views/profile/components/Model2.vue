<template>
  <a-modal
    v-model:visible="visible"
    title="新增阅读率"
    width="800px"
    @ok="handleOk">
    <a-form
      ref="formRef"
      :model="formState">
      <a-form-item
        label="A媒体">
        <a-select
          ref="select"
          v-model:value="formState.nationality"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="Facebook" />
          <a-select-option value="" /> 
          <a-select-option value="" />
        </a-select>
      </a-form-item>
      <a-form-item
        label="B媒体">
        <a-select
          ref="select"
          v-model:value="formState.age"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="Youtube" />
        </a-select>
      </a-form-item>
      <!-- <a-form-item label="衰减率">
        <a-input style="width: 95%;" />%
      </a-form-item> -->
      <a-form-item
        label="人员类型">
        <a-radio-group v-model:value="value">
          <a-radio :value="1">
            大V
          </a-radio>
          <a-radio :value="2">
            普通人物
          </a-radio>
        </a-radio-group>
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
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
    props:{
        visible:{
            type: Boolean,
            default:()=>{}
        }
    },
    emits:['SET_CLOSE'],
    setup(props,{emit}) {
        const value = ref<string>('1');

        const focus = ()=>{}
        const handleOk =()=>{
            emit('SET_CLOSE',false)
        }
        const data = [
          {
            section: '10-15',
            male: '35%',
            female:'65%'
          },
        ];
        const columns = [
          {
              title: '年龄段',
              dataIndex: 'section',
          },
          {
              title: '男性转发率',
              dataIndex: 'male',
          },
          {
              title: '女性转发率',
              dataIndex: 'female ',
          },
          {
              title: '男性点赞率',
              dataIndex: 'male',
          },
          {
              title: '女性点赞率',
              dataIndex: 'male',
          },
        ];
        const rowSelection = ()=>{}
        const handleChange= ()=>{}
        const formState =reactive({
            nationality: 'china',
            age: 'zi',
            checked: false
        })
        return {
            handleOk,
            focus,
            formState,
            handleChange,
            rowSelection,
            data,
            columns,
            value
        }
    },
})
</script>

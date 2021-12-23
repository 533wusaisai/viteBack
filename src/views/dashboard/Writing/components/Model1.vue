<template>
  <a-modal
    v-if="isShow==='add'"
    v-model:visible="visible"
    title="新增任务"
    width="800px"
    @ok="handleOk">
    <a-form
      ref="formRef"
      :model="formState">
      <a-form-item
        label="任务名称">
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
        label="任务类型">
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
        label="是否有大V参与">
        <a-radio-group v-model:value="value">
          <a-radio :value="1">
            是
          </a-radio>
          <a-radio :value="2">
            否
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label="大V人数">
        <a-input />
      </a-form-item>
      <a-form-item
        label="是否指定大V">
        <a-radio-group v-model:value="value">
          <a-radio :value="1">
            是
          </a-radio>
          <a-radio :value="2">
            否
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label="是否应用现有参数">
        <a-radio-group v-model:value="value">
          <a-radio :value="1">
            是
          </a-radio>
          <a-radio :value="2">
            否
          </a-radio>
        </a-radio-group>
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
  <a-modal
    v-else
    v-model:visible="visible"
    title="效果展示"
    width="800px"
    @ok="handleOk">
    <a-table
      bordered
      :data-source="data"
      :pagination="false"
      :columns="columns" />
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
    props:{
        visible:{
            type: Boolean,
            default:()=>{}
        },
        isShow: {
            type: String,
            default: ()=>{}
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
            section: '',
            male: '',
            female:''
          },
        ];
        const columns = [
          {
              title: '任务名称',
              dataIndex: 'index',
          },
          {
              title: '目标类型',
              dataIndex: 'name',
          },
          {
              title: '国家',
              dataIndex: 'type ',
          },
          {
              title: '种族',
              dataIndex: 'isV',
          },
          {
              title: '目标人数',
              dataIndex: 'male',
          },
          {
              title: '传播人数',
              dataIndex: 'male',
          },
           {
              title: '阅读人次',
              dataIndex: 'male',
          },
           {
              title: '点赞人数',
              dataIndex: 'male',
          },
           {
              title: '传播时间',
              dataIndex: 'male',
          },
           {
              title: '传播起止时间',
              dataIndex: 'male',
          },
           {
              title: '覆盖人群占比',
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

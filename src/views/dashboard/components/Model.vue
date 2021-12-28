<template>
  <div>
    <a-modal
      v-if="isAdd==='add'"
      v-model:visible="visible"
      :closable="false"
      title="批量增加人物"
      @cancel="handleOk"
      @ok="handleOk">
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
      <a-form
        ref="formRef"
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol">
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
          label="生成人数">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item
          label="年龄">
          <a-table
            :row-selection="rowSelection"
            :columns="columns"
            :pagination="false"
            :data-source="data" />
        </a-form-item>
        <a-form-item
          label="种族">
          <a-table
            :row-selection="rowSelection"
            :columns="columns1"
            :pagination="false"
            :data-source="data" />
        </a-form-item>
        <a-form-item
          label="男：女">
          <a-input
            v-model:value="formState.name"
            style="width:120px" /> ： <a-input
              v-model:value="formState.name"
              style="width:120px" />
        </a-form-item>
        <a-form-item
          label="语言">
          <a-table
            :row-selection="rowSelection"
            :columns="columns2"
            :pagination="false"
            :data-source="data" />
        </a-form-item>
        <a-form-item
          label="粉丝数">
          <a-table
            :row-selection="rowSelection"
            :columns="columns3"
            :pagination="false"
            :data-source="data" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal
      v-else-if="isAdd==='statistics'"
      v-model:visible="visible"
      title="统计值"
      :closable="false"
      @ok="handleOk">
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
      <a-table
        :columns="columns4"
        :pagination="false"
        :data-source="data" />
    </a-modal>
  </div>
</template>
<script lang="ts">
import type { TableColumnType, TableProps } from 'ant-design-vue';
import { defineComponent, reactive, ref, toRaw } from 'vue';
interface DataType {
  language: string;
  race: string;
  age: string;
  proportion: string;
  fanses: number,
  nationality: string
}

export default defineComponent({
   props: {
      visible:{
         type: Boolean,
         default:()=>{}
      },
      isAdd:{
         type: String,
         default:()=>{}
      }
   },
   emits: ['setClose'],
   setup(props, { emit }) {
      const formRef = ref();
      const handleOk =() =>{
         emit('setClose',false)
      }
      const formState = reactive({
      name: undefined,
      nationality: 'china',
    });
    const data: DataType[] = [
      {
         language: '英语',
         race: '欧裔',
         age: '十岁以下',
         proportion: '',
         fanses:110,
         nationality: '中国'
      },
      {
         language: '中文',
         race: '华裔',
         age: '10-15',
         proportion: '',
         fanses:110,
         nationality: '中国'
      },
      {
         language: '俄语',
         race: '华裔',
         age: '15-30',
         proportion: '',
         fanses:110,
         nationality: '中国'
      },
      {
         language: '日语',
         race: '华裔r',
         age: '30-50',
         proportion: '',
         fanses:110,
         nationality: '中国'
      },
      ];
      const columns: TableColumnType<DataType>[] = [
         {
            title: '年龄段',
            dataIndex: 'age',
         },
         {
            title: '比例',
            dataIndex: 'proportion',
         },
      ];
       const columns1: TableColumnType<DataType>[] = [
         {
            title: '种族',
            dataIndex: 'race',
         },
         {
            title: '比例',
            dataIndex: 'proportion',
         },
      ];
      const columns2: TableColumnType<DataType>[] = [
         {
            title: '语言',
            dataIndex: 'language',
         },
         {
            title: '比例',
            dataIndex: 'proportion',
         },
      ];
      const columns3: TableColumnType<DataType>[] = [
         {
            title: '粉丝数',
            dataIndex: 'fanses',
         },
         {
            title: '比例',
            dataIndex: 'proportion',
         },
      ];
      const columns4: TableColumnType<DataType>[] = [
         {
            title: '国籍',
            dataIndex: 'nationality',
         },
         {
            title: '男女比例',
            dataIndex: 'proportion',
         },
         {
            title: '总人数',
            dataIndex: 'proportion',
         },
      ];

   const rowSelection: TableProps['rowSelection'] = {
      // onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
      //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      // },
      // getCheckboxProps: (record: DataType) => ({
      // //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
      //   name: record.name,
      // })
      }
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
      //   .catch(error:any => {
      //     console.log('error', error:any);
      //   });
    }
    const resetForm = () => {
      formRef.value.resetFields();
    }
    const handleChange =()=>{}
    const focus =()=>{}
      return {
         handleOk,
         formRef,
         labelCol: { span: 4 },
         wrapperCol: { span: 14 },
         formState,
         // rules,
         onSubmit,
         resetForm, 
         handleChange,
         focus,
         data,
         columns,
         columns1,
         columns2,
         columns3,
         columns4,
         rowSelection,
      }
   },
})
</script>

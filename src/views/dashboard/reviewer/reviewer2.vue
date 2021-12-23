<template>
  <div>
    <a-card
      title="案例管理">
      <template #extra>
        <a
          href="#"
          class="add"
          @click="handleAdd">新增</a>
      </template>
      <div>
        <p>
          <a-input style="width:300px" />
          <a-button>搜索</a-button>
        </p>
        <a-table
          bordered
          :data-source="dataSource"
          :columns="columns">
          <template #bodyCell="{ column, record}">
            <template v-if="column.dataIndex === 'operation'">
              <a-button
                @click="onDelete(record.index)">
                查看
              </a-button>
            </template>
          </template>
        </a-table>
      </div>
    </a-card>
    <model
      :visible="visible"
      :is-show="show"
      @SET_CLOSE="handelClose" />
  </div>
</template>
<script lang="ts">

import { computed, defineComponent, ref } from 'vue';
import Model from './components/Model.vue';

export default defineComponent({
    components: {
      Model
    },
    setup() {
    const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                width: 100,
            align: 'center'
             },
            {
              title: '名称',
              dataIndex: 'name',
              width: 200,
            align: 'center'
            },
            {
                title: '国籍',
                dataIndex: 'type',
                width: 200,
            align: 'center'
            },
            {
                title: '生成人数',
                dataIndex: 'isV',
                width: 200,
            align: 'center'
            },
            {
                title: '传播人数',
                dataIndex: 'isPrams',
                width: 200,
            align: 'center'
            },
            {
                title: '阅读人次',
                dataIndex: 'isPrams',
                width: 200,
            align: 'center'
            },
      
            {
                title: '操作',
                dataIndex: 'operation',
                width: 200,
            align: 'center'
            }  ,
    ];
    const dataSource:any = ref([
        {
          index: '1001',
          name: '**任务',
          type: '中国',
          isV: '10W',
          noV: '10W',
          isPrams: '10W'
        },
      ]);
      // 模态框弹框
    const visible = ref<boolean>(false);
    const show = ref<string>('');
    const count = computed(() => 
        dataSource.value.length + 1
      );
    const handleAdd = () => {
        visible.value = true;
        show.value = 'add'
    }
    const onDelete = (index: string) => {
      // 查看当前行信
        // dataSource.value = dataSource.value.filter((item:any) => item.index !== index);
    };
    const handleShow =()=>{
        visible.value = true;
        show.value = 'show'
    }
    const handelClose = (paylod:boolean)=>{
      visible.value = paylod;
      if(!paylod){
        const newData = {
          index: `100${count.value}`,
          name: `**任务 ${count.value}`,
          isV: '10W',
          noV: '10W',
          isPrams: '10W',
          type: `中国${count.value}`,
        };
        dataSource.value.push(newData);
      }
    }
    return {
        handleShow,
        onDelete,
        columns,
        handleAdd,
        dataSource,
        count,
        visible,
        handelClose,
        show
        };
    },
})
</script>
<style lang="less" scoped>
.add{
    // width:100px;
    height: 32px;
    border: 1px solid #eee;
    display: inline-block;
    line-height: 1.5715;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    border-color: #d9d9d9;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    padding: 4px 15px;
    &:hover{
    color: #40a9ff;
    background: #fff;
    border-color: #40a9ff;
    }
}
</style>
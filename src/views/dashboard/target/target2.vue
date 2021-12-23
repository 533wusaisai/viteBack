<template>
  <div>
    <a-card
      title="阅读率管理">
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
              <a-popconfirm
                v-if="dataSource.length"
                title="确认要删除吗?"
                @confirm="onDelete(record.index)">
                <a-button>删除</a-button>
              </a-popconfirm>
              <a-popconfirm
                v-if="dataSource.length"
                title="编辑当前数据?"
                @confirm="onDelete(record.index)">
                <a-button>编辑</a-button>
              </a-popconfirm>
              <a-popconfirm
                v-if="dataSource.length"
                title="查看当前数据?"
                @confirm="onDelete(record.index)">
                <a-button>查看</a-button>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </div>
    </a-card>
    <model
      :visible="visible"
      @SET_CLOSE="handelClose" />
  </div>
</template>
<script lang="ts">

import { computed, defineComponent, ref } from 'vue';
import Model from './components/Model1.vue';


interface DataItem {
  index: string;
  nationality: string;
  count: number;
  type: string;
  name: string;
}
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
        title: '媒体名称',
        dataIndex: 'name',
        width: 200,
            align: 'center'
      },
      {
        title: '平均阅读率',
        dataIndex: 'nationality',
        width: 200,
            align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'operation',
        width: 300,
            align: 'center'
      },
    ];
     const dataSource:any = ref([
      {
        index: '1001',
        name: 'Facebook',
        sex: '男',
        nationality: '35%',
      },
      {
        index: '1002',
        name: 'Facebook',
        sex: '女',
        nationality: '35%',
      },
    ]);
    // 模态框弹框
    const visible = ref<boolean>(false);

    const count = computed(() => 
      dataSource.value.length + 1
    );
    const handleAdd = () => {
        visible.value = true;
    }
    const onDelete = (index: string) => {
        dataSource.value = dataSource.value.filter((item:any) => item.index !== index);
    };
    const handelClose = (paylod:boolean)=>{
      visible.value = paylod;
      if(!paylod){
        const newData = {
          index: `100${count.value}`,
          name: `Facebook ${count.value}`,
          nationality: ` ${count.value}%`,
          type: `普通人物${count.value}`,
        };
        dataSource.value.push(newData);
      }
    }
    return {
        onDelete,
        columns,
        handleAdd,
        dataSource,
        count,
        visible,
        handelClose,
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
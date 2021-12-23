<template>
  <div>
    <a-card
      title="人物管理">
      <template #extra>
        <a-button @click="handleStatistics">
          统计值
        </a-button>
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
                title="是否编辑当前数据?"
                @confirm="onDelete(record.index)">
                <a-button>编辑</a-button>
              </a-popconfirm>
              <a-popconfirm
                v-if="dataSource.length"
                title="是否查看当前数据 ?"
                @confirm="onDelete(record.index)">
                <a-button>查看</a-button>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </div>
    </a-card>
    <model
      :is-add="isAdd"
      :visible="visible"
      @setClose="handelClose" />
  </div>
</template>
<script lang="ts">
// import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';
import type { UnwrapRef } from 'vue';
import { computed, defineComponent, reactive, ref } from 'vue';
import Model from './components/Model.vue';


interface DataItem {
  index: string;
  nationality: string;
  count: string;
  type: string;
  name: string;
}
export default defineComponent({
  components: {
    // CheckOutlined,
    // EditOutlined,
    Model
  },
    setup() {
        const columns = [
      {
        title: '序号',
        dataIndex: 'index',
        width: 10,
        align: 'center'
      },
      {
        title: '国籍',
        dataIndex: 'nationality',
        align: 'center',
        width: 200,
      },
      {
        title: '生成人数',
        dataIndex: 'count',
        align: 'center',
        width: 200,
      },
      {
        title: '类型',
        dataIndex: 'type',
        align: 'center',
         width: 200,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        align: 'center',
        width: 200,
      },
    ];
     const dataSource:any = ref([
      {
        index: '1001',
        nationality: '中国',
        count: '32亿',
        type: '普通人物',
      },
      {
        index: '1002',
        nationality: '俄罗斯',
        count: '32亿',
        type: '大V',
      },
    ]);
    // 模态框弹框
    const visible = ref<boolean>(false);
    const isAdd = ref<string>('');
    const count = computed(
      () => 
      dataSource.value.length + 1
    );
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (index: string) => {
      editableData[index] = cloneDeep(
        dataSource.value.filter((item:any)=> index === item.index)[0]
      );
    };
    const save = (index: string) => {
      Object.assign(
        dataSource.value.filter((item:any) => index === item.index)[0], editableData[index]
      );
      delete editableData[index];
    };

    const onDelete = (index: string) => {
      dataSource.value = dataSource.value.filter((item:any) => item.index !== index);
    };
    const handleAdd = () => {
        visible.value = true;
        isAdd.value = 'add'
    }
    const handleStatistics = ()=>{
        visible.value = true;
        isAdd.value = 'statistics'
    }
    const handelClose = (paylod:boolean)=>{
      visible.value = paylod;
      if(!paylod){
        const newData = {
          index: `100${count.value}`,
          nationality: `中国 ${count.value}`,
          count: 32,
          type: `普通人物${count.value}`,
        };
        dataSource.value.push(newData);
      }
    }
      return {
      columns,
      onDelete,
      handleAdd,
      dataSource,
      editableData,
      count,
      edit,
      save,
      isAdd,
      visible,
      handelClose,
      handleStatistics
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
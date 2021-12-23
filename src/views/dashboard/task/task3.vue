<template>
  <div>
    <a-card
      title="媒体管理">
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
                title="是否查看当前数据?"
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
      @SET_CLOSE="handleSetClose" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Model from './components/Model3.vue';

export default defineComponent({
  components:{
    Model
  },
    setup() {
      const routes = useRoute()
      const router = useRouter()
    
      const  dataSource:any=ref([
          {
            key: '1001',
            name: '张三',
            nationality: '中国',
            type: '传统媒体',
          },
          {
            key: '1002',
            name: '李四',
            nationality: '俄罗斯',
            type: '传统媒体',
          },
        ])
      const count = computed(()=>
        dataSource.value.length +1
      )
      const visible = ref<boolean>(false);
      const onDelete =(index:any)=>{
      }
      const handleSetClose = ()=>{
        visible.value = false
        const newData = {
              key: `100${count.value}`,
              name: `王五 ${count.value}`,
              nationality: `中国${count.value}`,
              type: `传统媒体${count.value}`,
        };
          dataSource.value.push(newData);
      }
      const handleAdd = ()=>{
         visible.value = true
      }
      //  console.log('route', routes);
      //  console.log('router',router.getRoutes());   
      return {
        onDelete,
        handleSetClose,
        handleAdd,
        visible,
        dataSource,
        count,
        columns: [
          {
            title: '序号',
            dataIndex: 'key',
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
            title: '类型',
            dataIndex: 'type',
            width: 200,
            align: 'center'
          },
          {
            title: '所属国家',
            dataIndex: 'nationality',
            width: 200,
            align: 'center'
          },
          {
            title: '操作',
            dataIndex: 'operation',
            width: 300,
            align: 'center'},
        ],
      }
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

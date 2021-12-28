<template>
  <div>
    <a-card
      title="数据监控页面">
      <template #extra>
        <a-button @click="JumpPath">
          意见领袖管理
        </a-button>
        <a
          href="#"
          class="add"
          @click="handleAdd">新增</a>
      </template>
      <div>
        <a-input style="width:300px" />
        <a-button>搜索</a-button>
        <a-select
          ref="select"
          v-model:value="value1"
          style="width: 120px"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="jack">
            Facebook
          </a-select-option>
          <a-select-option value="lucy">
            Twitter
          </a-select-option>
        </a-select>
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
import { useRouter } from 'vue-router';
import Model from './components/Model2.vue';

export default defineComponent({
    components: {
      Model
    },
    setup() {
      const dataSource:any =ref([ 
        {
            index: '1001',
            media: 'A媒体',
            nationality: '中国',
            count: '30%',
            type: '普通人物',
            language:"英语",
            race:'亚裔'
          },
          {
            index: '1002',
            media: 'B媒体',
            nationality: '俄罗斯',
            count: '50%',
            type: '普通人物',
            language:"中文",
            race: '欧裔'
          },
        ])
      const columns =[
          {
            title: '序号',
            dataIndex: 'index',
            width: 100,
            align: 'center'

          },
          {
            title: '媒体',
            dataIndex: 'media',
            width: 200,
            align: 'center'

          },
          {
            title: '国籍',
            dataIndex: 'nationality',
            width: 200,
            align: 'center'
          },
          {
            title: '人数占比',
            dataIndex: 'count',
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
            title: '语言',
            dataIndex: 'language',
            width: 200,
            align: 'center'
          },
          {
            title: '种族',
            dataIndex: 'race',
            width: 200,
            align: 'center'
          },
          {
            title: '操作',
            dataIndex: 'operation',
            width: 300,
            align: 'center'
          }
      ]
      const router = useRouter()
      const count = computed(
      () => 
        dataSource.value.length + 1
      );
      const visible = ref<boolean>(false);
      const focus = () => {
        console.log('focus');
      };
      const onDelete = (index:any)=>{
        console.log(index);
        
      }
      const handleAdd = ()=>{
        visible.value = true
      }
      const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      const handleSetClose =(paylod:boolean)=>{
        visible.value=paylod
          if(!paylod){
            const newData = {
              index: `100${count.value}`,
              media: `媒体 ${count.value}`,
              nationality: `中国${count.value}`,
              count: '60%',
              type: `普通人物${count.value}`,
              language:"中文",
              race: '欧裔'
            };
          dataSource.value.push(newData);
        }
      }
      const JumpPath =()=>{
        router.push({
          path: '/writing/writing1'
        })
      }
      return {
        handleAdd,
        onDelete,
        focus,
        handleChange,
        handleSetClose,
        JumpPath,
        visible,
        value1: ref('lucy'),
        dataSource,
        columns
      }
    }
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

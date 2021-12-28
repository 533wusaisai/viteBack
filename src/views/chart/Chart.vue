<template>
  <div>
    可视化图表
    <div id="container" />
  </div>
</template>
<script lang="ts">
import { Chart } from '@antv/g2';
import { defineComponent, onMounted } from 'vue';
export default defineComponent({
    setup() {
        const data = [
            { year: '2001 年', sales: 38 },
            { year: '2002 年', sales: 52 },
            { year: '2003 年', sales: 61 },
            { year: '2004 年', sales: 145 },
            { year: '2005 年', sales: 48 },
            { year: '2020 年', sales: 38 },
            { year: '2021 年', sales: 38 },
            { year: '2022 年', sales: 38 },
        ];
       
        onMounted(()=>{
            // 初始化示例
            const chart = new Chart({
                container: 'container',
                autoFit: true,
                height: 500,
            });
            // 加载数据
            chart.data(data);
            // 到顶显示 标尺
            chart.scale('sales', {
                nice: true,
            });
            chart.tooltip({
                showMarkers: false
            });
            chart.interaction('active-region');
            chart.interval().position('year*sales');
            // 渲染
            chart.render();
        })
        return {
            // chart
        }
    },
})
</script>

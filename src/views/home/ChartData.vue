<template>
  <div>
    <div class="title">
      <span class="line"></span> 本月运单趋势
    </div>
    <div class="item-wrapper">
      <span class="item" :class="{'active':currentIndex == index}" v-for="(item,index) in weekType" :key="index" @click="changeMonth(item.type,index)">{{item.title}}</span>
    </div>
    <ve-line :data="chartData" :settings="chartSettings" :loading="chartLoading" :extend="extend"></ve-line>
  </div>
</template>

<script>
import { getChartWay } from '@/api/controlPanel';
export default {
  data() {
    this.extend = {
      legend: {
        selectedMode: false
      },
      tooltip: {
        confine: true,
        formatter: value => {
          return `${value[0].axisValue} 订单量 (单)
                  <br/>${value[0].marker} ${value[0].seriesName}: ${value[0].value[1]}
                  <br/>${value[1].marker} ${value[1].seriesName}: ${value[1].value[1]}
                  <br/>${value[2].marker} ${value[2].seriesName}: ${value[2].value[1]}
                `;
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: '#f1f1f1'
          }
        },
        minInterval: 1
      },
      xAxis: {
        axisLabel: {
          rotate: '-70'
        }
      }
    };
    this.chartSettings = {
      yAxisName: ['订单量'],
      labelMap: {
        K: '国际快件',
        E: '物流小包',
        F: 'FBA'
      },
      area: true
    };
    return {
      chartData: {
        columns: [],
        rows: [
          //   { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
        ]
      },
      chartLoading: false,
      currentIndex: 0,
      weekType: [{ type: '1', title: '本月' }, { type: '0', title: '上月' }]
    };
  },
  created() {
    this.getChartWay('1');
  },
  methods: {
    changeMonth(type, i) {
      this.currentIndex = i;
      this.getChartWay(type);
    },
    async getChartWay(type) {
      this.chartLoading = true;
      try {
        // let { data } = await getChartWay({ month_type: type });
        let data = {
          start: '2019-07-01',
          end: '2019-07-31',
          columns: ['Date', 'K', 'E', 'F'],
          rows: [
            {
              Date: '07-01',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-02',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-03',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-04',
              E: '0',
              K: '3',
              F: '0',
              packet: '4'
            },
            {
              Date: '07-05',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-06',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-07',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-08',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-09',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-10',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-11',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-12',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-13',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-14',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-15',
              E: '1',
              K: '0',
              F: '12',
              packet: '0'
            },
            {
              Date: '07-16',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-17',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-18',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-19',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-20',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-21',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-22',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-23',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-24',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-25',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-26',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-27',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-28',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-29',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-30',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            },
            {
              Date: '07-31',
              E: '0',
              K: '0',
              F: '0',
              packet: '0'
            }
          ]
        };
        this.chartData.columns = data.columns;
        this.chartData.rows = data.rows;
      } catch (error) {
        this._message(error);
      }
      this.chartLoading = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 400;
  color: #333;
  .line {
    float: left;
    display: inline-block;
    width: 3px;
    background: #13a468;
    height: 14px;
    margin-right: 7px;
  }
}
.item-wrapper {
  text-align: right;
  margin-bottom: 20px;
  .item {
    margin-left: 15px;
    color: #ccc;
    cursor: pointer;
    font-size: 15px;
    &.active {
      color: #13a468;
    }
  }
}
</style>


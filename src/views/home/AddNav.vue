<template>
  <div>
    <el-dialog title="添加菜单 ( 拖拽添加 / 删除菜单 )" :visible.sync="navVisible" width="600px" :before-close="handleClose" v-loading="navLoading">
      <div class="box">
        <div class="item fl">
          <div class="title">已添加菜单</div>
          <draggable style="min-height:200px;" v-model="defaultNav" :options="{group:'people'}">
            <div class="nav" v-for="item in defaultNav" :key="item.menu_alias">
              <i class="iconfont" :class="item.menu_icon"></i>
              {{item.name}}
            </div>
          </draggable>
        </div>
        <div class="item fr">
          <div class="title">待添加菜单</div>
          <draggable style="min-height:200px" v-model="waitNav" :options="{group:'people'}">
            <div class="nav" v-for="item in waitNav" :key="item.menu_alias">
              <i class="iconfont" :class="item.menu_icon"></i>
              {{item.name}}
            </div>
          </draggable>
        </div>
      </div>
      <div class="dialog-footer">
        <el-button size="mini" @click="handleClose">关闭</el-button>
        <el-button size="mini" type="primary" @click="saveNav">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { getShortcut, saveShortcut } from '@/api/controlPanel';
import { mapGetters } from 'vuex';
export default {
  props: {
    navVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultNav: [],
      allNav: [],
      waitNav: [],
      navLoading: false
    };
  },
  created() {
    this.getShortcut();
  },
  computed: {
    ...mapGetters(['menuNav'])
  },
  methods: {
    async saveNav() {
      this.defaultNav.forEach((el, i) => {
        el.shortcut_sort = i + 1;
      });
      this.navLoading = true;
      try {
        alert('请先接通相关接口')
        // let { message } = await saveShortcut({ menu_alias_arr: this.defaultNav });
        this.$emit('getNav', this.defaultNav);
        // this._message(message, 'success');
        this.handleClose();
      } catch (error) {
        this._message(error);
      }
      this.navLoading = false;
    },
    async getShortcut() {
      this.$parent.dataLoading = true;
      try {
        // let { data } = await getShortcut();
        let data = [
          {
            menu_alias: 'route.userList',
            name: '用户列表',
            name_en: 'User List',
            menu_icon: 'icon-yonghuguanli',
            path: '/system/user/list'
          },
          {
            menu_alias: 'route.demandList',
            name: '需求列表',
            name_en: 'Demand List',
            menu_icon: 'icon-fenlei',
            path: '/demand/demand/list'
          },
          {
            menu_alias: 'route.systemConfig',
            name: '系统配置',
            name_en: 'System Config',
            menu_icon: 'icon-peizhi',
            path: '/system/system-manage/config'
          },
          {
            menu_alias: 'route.seaChannel',
            name: '海运渠道',
            name_en: 'seaChannel',
            menu_icon: 'icon-qudao',
            path: '/logistics/sea/sea-channel'
          },
          {
            menu_alias: 'route.weightTemplate',
            name: '重量段模板',
            name_en: 'weightTemplate',
            menu_icon: 'icon-moban',
            path: '/logistics/logistics-channel/weight-template'
          },
          {
            menu_alias: 'route.channgeList',
            name: '海运价格',
            name_en: 'Channel Price',
            menu_icon: 'icon-jiage',
            path: '/logistics/sea/sea-price'
          },
          {
            menu_alias: 'route.logisticsChannelList',
            name: '物流渠道列表',
            name_en: 'logisticsChannelList',
            menu_icon: 'icon-qudao',
            path: '/logistics/logistics-channel/logistics-channel-list'
          },
          {
            menu_alias: 'route.userCenter',
            name: '个人中心',
            name_en: 'User Center',
            menu_icon: 'icon-wode',
            path: '/system/user-center'
          },
          {
            menu_alias: 'route.waybillAwait',
            name: '运单同步',
            name_en: 'waybillAwait',
            menu_icon: 'icon-tongbu',
            path: '/logistics/waybill/waybill-await'
          }
        ];
        this.defaultNav = data;
        this.$emit('getNav', this.defaultNav);
        setTimeout(() => {
          this.formatData(this.defaultNav);
        }, 800);
      } catch (error) {
        this._message(error);
      }
      this.$parent.dataLoading = false;
    },
    formatData(defaultNav) {
      this.menuNav.forEach(el => {
        el.children.forEach(ev => {
          ev.children.forEach(ec => {
            this.allNav.push(ec);
          });
        });
      });

      for (var i = 0; i < this.allNav.length; i++) {
        var obj = this.allNav[i];
        var num = obj.menu_alias;
        var isExist = false;
        for (var j = 0; j < this.defaultNav.length; j++) {
          var aj = this.defaultNav[j];
          var n = aj.menu_alias;
          if (n == num) {
            isExist = true;
            break;
          }
        }
        if (!isExist) {
          this.waitNav.push(obj);
        }
      }
    },

    handleClose() {
      this.$emit('update:navVisible', false);
    }
  },
  components: {
    draggable
  }
};
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
  .item {
    width: 250px;
    padding: 20px 10px;
    .title {
      margin-bottom: 15px;
      font-size: 16px;
      color: #007947;
    }
    .nav {
      height: 30px;
      border: 1px solid #f1f1f1;
      line-height: 30px;
      padding: 0 10px;
      cursor: move;
      margin-bottom: 5px;
      border-radius: 3px;
      overflow: hidden;
      font-size: 15px;
    }
  }
}
</style>

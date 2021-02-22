<template>
  <div id="app">
    <div class="title">
      <h2 class="icon">随 心 游</h2>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo title-tab"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(0,0,0,0)"
        text-color="white"
        active-text-color= "red"
        router
      >
        <el-menu-item :index="'/'"> 首页</el-menu-item>
        <el-menu-item :index="'/about'">
          关于我们
        </el-menu-item>
        <el-menu-item :index="'/news'">
          新闻资讯
        </el-menu-item>
        <el-submenu :index="'/theme'">
          <template slot="title">主题旅游</template>
          <el-menu-item :index="'/theme/domestic'">境内游</el-menu-item>
          <el-menu-item :index="'/theme/overseas'">境外游</el-menu-item>
        </el-submenu>
        <el-submenu :index="'/hot'">
          <template slot="title">热门景点</template>
          <el-menu-item :index="'/hot/yunnan'">
            云南
          </el-menu-item>
          <el-menu-item :index="'/hot/chongqing'"> 重庆</el-menu-item>
          <el-menu-item :index="'/hot/sichuan'">
            四川
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="'/hotel'">
          酒店
        </el-menu-item>
      </el-menu>
    </div>
    <router-view class="content" />
    <footer class="footer">
      <h1>旅游景点</h1>
      <div class="lianjie">友情连接<i>☞☞☞</i></div>
      <div class="gang"></div>
      <img src="/static/img/home/weixin1.png" alt="" />
      <div>关于我们|广告服务|项目合作|法律声明|帮助中心</div>
      <div>本网站由XXXX设计实现 网站服务热线： 0817-9999999 QQ：2506494384</div>
      <div>京ICP：1234567备案</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/"
    };
  },
  computed: {},
  watch : {
    $route:{
      handler(val,oldval){
        this.activeIndex = val.path;
      },
      deep:true
    }
  },
  created() {
    this.initActive();
  },

  methods: {
    handleSelect(key, keyPath) {

    },
    initActive() {
      this.$router.push("/");
    },
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c2828f8;
  .title {
    position: absolute;
    top: 0px;
    width: 100%;
    .icon {
      position: absolute;
      top: 0px;
      left: 100px;
      padding: 7px;
      margin: 15px;
      border-radius: 20px;
      color: rgb(243, 232, 232);
      box-shadow: 3px -2px 4px 2px #15536f;
      border: 2px solid rgb(1, 172, 250);
      z-index: 7;
      font-family: "仿宋";
      font-weight: 900;
    }
    &-tab {
      position: absolute;
      top: 0px;
      z-index: 999;
      left: 500px;
      width: 50%;

      /deep/ .el-menu-item {
        padding: 0;
      }
      li {
        width: 100px;
        text-align: center;
      }
    }
  }
  .content {
    width: 100%;
  }
  .footer {
    position: relative;
    padding: 20px 50px 20px;
    width: calc(100%-100px);
    background-color: rgb(27, 31, 39);
    color: rgb(95, 99, 118);
    line-height: 30px;
    .lianjie {
      position: absolute;
      right: 250px;
      top: 25px;
      > i {
        font-size: 26px;
      }
    }
    > img {
      position: absolute;
      top: 25%;
      right: 5%;
      width: 100px;
      height: 100px;
    }
    .gang {
      width: 85%;
      height: 1px;
      background-color: rgb(95, 99, 118);
      margin-top: 20px;
    }
    > h1 {
      color: white;
    }
  }
}
</style>

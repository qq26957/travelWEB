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

      >
        <el-menu-item index="1">
          <router-link to="/"><div>首页</div></router-link></el-menu-item
        >
        <el-menu-item index="2"
          ><router-link to="/about"><div>关于我们</div></router-link></el-menu-item
        >
        <el-menu-item index="3"
          ><router-link to="/news"><div>新闻资讯</div></router-link></el-menu-item
        >
        <el-submenu index="4">
          <template slot="title">主题旅游</template>
          <el-menu-item index="4-1"
            ><router-link to="/domestic">境内游</router-link></el-menu-item
          >
          <el-menu-item index="4-2"
            ><router-link to="/overseas">境外游</router-link></el-menu-item
          >
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">热门景点</template>
          <el-menu-item index="5-1"
            ><router-link to="/yunnan"><div>云南</div></router-link></el-menu-item
          >
          <el-menu-item index="5-2"
            ><router-link to="/chongqing"><div>重庆</div></router-link></el-menu-item
          >
          <el-menu-item index="5-3"
            ><router-link to="/sichuan"><div>四川</div></router-link></el-menu-item
          >
        </el-submenu>
        <el-menu-item index="6">
          <router-link to="/hotel"><div>酒店</div></router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view class="content" />
     <footer class="footer">
      <h1>旅游景点</h1>
      <div class="lianjie">友情连接<i>☞☞☞</i></div>
      <div class="gang"></div>
      <img src="" alt="">
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
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 
  .title {
    position: absolute;
    top: 0px;
    width: 100%;
    .icon{
    padding: 7px;
    position: absolute;
    margin: 15px;
    top: 0px;
    left: 100px;
    border-radius: 20px;
    box-shadow: 3px -2px 4px 2px #15536f;
    border: 2px solid  rgb(1, 172, 250);
    z-index: 7;
    font-family: "仿宋";
    font-weight: 900;
    }
    &-tab{
    position: absolute;
    top: 0px;
    z-index: 999;
    left: 500px;
    width: 50%;

    /deep/ .el-menu-item{
      padding: 0;
    }
    li{
    >a {
      text-decoration: none;
      text-align: center;
      >div{
        height: 60px;
        width: 80px;
        padding: 0 20px;
      }
    }
     }
  }
   }
  .content {
    width: 100%;
  }
  .footer{
    position: relative;
    padding: 20px 50px 20px;
    width: calc(100%-100px);
    background-color: rgb(27, 31, 39);
    color: rgb(95, 99, 118);
    line-height: 30px;
    .lianjie{
      position: absolute;
      right: 250px;
      top: 25px;
      >i{
        font-size: 26px;
      }
    }
    >img{
      position: absolute;
      top: 50px;
      right: 100px;
      width: 100px;
      height: 100px;
    }
    .gang{
      width: 1350px;
      height: 1px;
      background-color: rgb(95, 99, 118);
      margin-top: 20px;
    }
    >h1{
      color: white;
    }

  }
}
</style>

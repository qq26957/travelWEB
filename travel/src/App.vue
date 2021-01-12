<template>
  <div id="app">
    <div class="title">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(0,0,0,0)"
        text-color = "white"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">关于我们</el-menu-item>
        <el-menu-item index="3">新闻资讯</el-menu-item>
        <el-submenu index="4">
          <template slot="title">主题旅游</template>
          <el-menu-item index="4-1">国内游</el-menu-item>
          <el-menu-item index="4-2">境外游</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">热门景点</template>
          <el-menu-item index="5-1">云南</el-menu-item>
          <el-menu-item index="5-2">四川</el-menu-item>
          <el-menu-item index="5-3">重庆</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">舒适酒店</template>
          <el-menu-item index="6-1">双人间</el-menu-item>
          <el-menu-item index="6-2">单人间</el-menu-item>
          <el-menu-item index="6-3">总统套房</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  .title{
    position:absolute;
    z-index: 999;
    left: 500px;
    width: 40%;
    top: 0px;
  }
  .content{
    position: absolute;
    top: 0px;
    z-index: 1;
    width: 100%;
    height: 3000px;
  }
}
</style>

<template>
  <div id="app">
    <el-container>
      <el-header>
        <span>旅游信息管理</span>
        <span v-show="isLogin" class="user-head">
          <i class="el-icon-s-custom"></i>
          <span>管理员：{{ user }}</span>
        </span>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <el-row class="tac" style="width:250px">
            <el-col :span="12" style="width:250px">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
              >
                <el-submenu index="base" :disabled="!isLogin">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>基本数据</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="dataBase">基础数据</template>
                    <el-menu-item index="/dataUser">用户数据</el-menu-item>
                    <el-menu-item index="/dataScenic">景点数据</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/dataOrder" :disabled="!isLogin">
                  <i class="el-icon-s-order"></i>
                  <span slot="title">订单管理</span>
                </el-menu-item>
                <el-menu-item index="/dataLink" :disabled="!isLogin">
                  <i class="el-icon-s-promotion"></i>
                  <span slot="title">线路管理</span>
                </el-menu-item>
                <el-menu-item index="/dataEvalution" :disabled="!isLogin">
                  <i class="el-icon-s-comment"></i>
                  <span slot="title">评论管理</span>
                </el-menu-item>
                <el-menu-item index="/dataNotice" :disabled="!isLogin">
                  <i class="el-icon-data-board"></i>
                  <span slot="title">公告信息管理</span>
                </el-menu-item>
                <el-menu-item index="/backups" :disabled="!isLogin">
                  <i class="order-menu"></i>
                  <span slot="title">数据备份</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row></el-aside
        >
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLogin: false,
      user: ""
    };
  },
  created() {
    this.checkLogin();
    if (this.isLogin === true) {
        this.$router.push("/dataUser");
      } else {
        this.$router.push("/pageLogin");
      }
  },
  updated() {
    this.checkLogin();
  },
  methods: {
    //验证是否登录
    checkLogin() {
      this.isLogin =
        window.sessionStorage.getItem("isLogin") === "true" ? true : false;
      this.user = window.sessionStorage.getItem("user");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 150px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-menu-item {
  line-height: 90px;
  height: 90px;
}

li {
  line-height: 100px;
  list-style: none;
}
.user-head {
  position: absolute;
  right: 40px;
}
.dialog-footer .el-button{
  margin: 0 50px ;
}
</style>

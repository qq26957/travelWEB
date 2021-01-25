<template>
  <div class="hot">
    <div class="hot-img">
      <img src="/static/img/background/bg6.jpg" alt="" />
    </div>
    <div class="hot-content">
      <div class="background">
        <div class="title">
          <transition appear name="bounce">
            <div class="title-text">
              <h1>热门景点</h1>
              <h3>Hot spots</h3>
              <h1>—</h1>
            </div>
          </transition>
          <div class="navigation">
            <el-breadcrumb separator=">>">
              <el-breadcrumb-item :to="{ path: '/' }" class="home"
                >首页</el-breadcrumb-item
              >
              <el-breadcrumb-item class="current">热门景点</el-breadcrumb-item>
              <el-breadcrumb-item class="current">{{
                spotName
              }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>

        <div class="bottom">
          <div class="bottom-left">
            <div class="choose">
              <ul class="choose-tab">
                <el-radio-group v-model="spot" @change="changelabel">
                  <el-radio :label="'sichuan'" class="choose-tab-item"
                    ><router-link to="sichuan">四川</router-link></el-radio
                  >
                  <el-radio :label="'yunnan'" class="choose-tab-item"
                    ><router-link to="yunnan">云南</router-link></el-radio
                  >
                  <el-radio :label="'chongqing'" class="choose-tab-item"
                    ><router-link to="chongqing">重庆</router-link></el-radio
                  >
                </el-radio-group>
              </ul>
            </div>
            <div class="content">
              <router-view></router-view>
            </div>
          </div>
          <div class="slider">
            <div>Hot Spots</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hot from "./hot";
export default hot;
</script>

<style scoped lang="scss">
@import "./hot.scss";
</style>

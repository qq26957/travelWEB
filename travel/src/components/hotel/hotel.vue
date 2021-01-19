<template>
  <div class="hotel">
    <div class="hotel-img"><img src="/static/img/hotel/b1.jpg" alt="" /></div>
    <div class="hotel-content">
      <div class="background">
        <div class="title">
          <transition appear name="bounce">
            <div class="title-text">
              <h1>酒店</h1>
              <h3>hotel Information</h3>
              <h1>—</h1>
            </div>
          </transition>
          <div class="navigation">
            <el-breadcrumb separator=">>">
              <el-breadcrumb-item :to="{ path: '/' }" class="home"
                >首页</el-breadcrumb-item
              >
              <el-breadcrumb-item class="current">主题旅游</el-breadcrumb-item>
              <el-breadcrumb-item class="current">酒店</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div>
          <ul class="choose">
            <li><router-link to="/hotel/single">单人间</router-link></li>
            <li><router-link to="/hotel/double">双人间</router-link></li>
            <li><router-link to="/hotel/suite">总统套房</router-link></li>
          </ul>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <div>
              <router-view> </router-view>
            </div>
            <div class="content-pagenation">
              <pagenation
                :total="total"
                :page="page"
                :pageSize="pageSize"
                @changePage="changePage"
              ></pagenation>
            </div>
          </div>
          <div class="slider">
            <div>Hotel</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotel from "./hotel";
export default hotel;
</script>

<style scoped lang="scss">
@import "./hotel.scss";
</style>

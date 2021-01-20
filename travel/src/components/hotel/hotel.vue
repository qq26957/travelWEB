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
            <el-radio-group v-model="type" @change="change">
              <el-radio :label="'single'">单人间</el-radio>
              <el-radio :label="'double'">双人间</el-radio>
              <el-radio :label="'suite'">总统套房</el-radio>
            </el-radio-group>
          </ul>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <div v-show="type === 'single'">
              <ul class="single content">
                <li
                  class="single-item item"
                  v-for="(item, index) in dataList"
                  :key="index"
                >
                  <div class="item-img"><img :src="item.imgUrl" alt="" /></div>
                  <div class="item-text">
                    <h3 class="item-text-title">{{ item.title }}</h3>
                    <div class="item-text-gang"></div>
                    <div class="item-text-content">{{ item.content }}</div>
                    <div class="item-text-price">
                      <span class="item-text-price-original"
                        >原价：{{ item.originalPrice }}</span>
                      <span class="item-text-price-present">{{ item.presentPrice }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-show="type === 'double'"></div>
            <div v-show="type === 'suite'"></div>
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

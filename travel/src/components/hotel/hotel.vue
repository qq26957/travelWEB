<template>
  <div class="hotel">
    <div class="hotel-img"><img src="/static/img/background/bg5.jpg" alt="" /></div>
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
              <el-breadcrumb-item class="current">酒店</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        
        <div class="bottom">
          <div class="bottom-left">
            <div class="choose">
          <ul class="choose-tab">
            <el-radio-group v-model="type" @change="change">
              <el-radio :label="'single'" class="choose-tab-item">单人间</el-radio>
              <el-radio :label="'double'" class="choose-tab-item">双人间</el-radio>
              <el-radio :label="'suite'" class="choose-tab-item">总统套房</el-radio>
            </el-radio-group>
          </ul>
            </div>
            <div v-show="type === 'single'" class="single choose-content">
              <ul class="single content">
                <li
                  class="single-item item"
                  v-for="(item, index) in singleList"
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
              <div class="content-pagenation">
              <pagenation
                :total="singlePage.total"
                :page="singlePage.page"
                :pageSize="singlePage.pageSize"
                @changePage="singleChangePage"
              ></pagenation>
            </div>
            </div>
            <div v-show="type === 'double'" class="double choose-content">
                  <ul class="single content">
                <li
                  class="single-item item"
                  v-for="(item, index) in doubleList"
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
            <div class="content-pagenation">
              <pagenation
                :total="doublePage.total"
                :page="doublePage.page"
                :pageSize="doublePage.pageSize"
                @changePage="doubleChangePage"
              ></pagenation>
            </div>
            </div>
            <div v-show="type === 'suite'" class="suite choose-content">
               <ul class="single content">
                <li
                  class="single-item item"
                  v-for="(item, index) in suiteList"
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
            <div class="content-pagenation">
              <pagenation
                :total="suitePage.total"
                :page="suitePage.page"
                :pageSize="suitePage.pageSize"
                @changePage="suiteChangePage"

              ></pagenation>
            </div>
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

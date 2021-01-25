<template>
  <div class="">
    <div class="attractions">
      <div class="attractions-img">
        <img src="/static/img/background/bg6.jpg" alt="" />
      </div>
      <div class="attractions-content">
        <div class="background">
          <div class="title">
            <transition appear name="bounce">
              <div class="title-text">
                <h1>热门景点</h1>
                <h3>attractions spots</h3>
                <h1>—</h1>
              </div>
            </transition>
            <div class="navigation">
              <el-breadcrumb separator=">>">
                <el-breadcrumb-item :to="{ path: '/' }" class="home"
                  >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item class="current"
                  >热门景点</el-breadcrumb-item
                >
                <el-breadcrumb-item class="current">{{
                  spotName
                }}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div class="bottom">
            <div class="bottom-left">
              <div class="img">
                <div class="img-swiper">
                  <el-carousel height="400px">
                    <el-carousel-item v-for="item in datas.imgUrl" :key="item">
                      <img :src="item" alt="" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="img-choose">
                  <ul>
                    <li
                      v-for="(imgItem, index) in datas.imgUrl"
                      :key="index"
                      class="chooseItem"
                    >
                      <img :src="imgItem" alt="" class="imgChoose-img" />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="description">
                <div class="description-title">
                  <h3 class="description-title-header">
                    {{ datas.title }}
                  </h3>
                  <div class="description-title-id">
                    <span class="text">编号：</span>
                    <span class="id-num">{{ datas.id }}</span>
                  </div>
                  <div class="description-title-price">
                    <span class="text">随心价： </span
                    ><span class="description-title-price-num">{{
                      datas.price
                    }}</span>
                  </div>
                  <div class="description-title-score">
                    <span class="text">满意度： </span>
                    <el-rate
                      v-model="datas.score"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                      style="display:inline"
                    >
                    </el-rate>
                  </div>
                </div>
                <div class="description-content">
                  <div class="description-content-features">
                    <span class="text">产品特色： </span>
                    <span class="description-content-features-content"
                      >bus专车</span
                    ><span class="description-content-features-content"
                      >机场接机</span
                    >
                  </div>

                  <div class="description-content-startSpot">
                    <span class="text">出发地：</span>
                    <span class="startSpot">{{ datas.startSpot }}</span>
                  </div>
                  <div class="description-content-notice">
                    <span class="text">出团通知：</span>
                    <span class="notice-text"
                      >周边游提前1天，国内游提前3天，出境游提前3-5天，APP和短信群发出团通知</span
                    >
                  </div>
                </div>
                <div class="description-order">
                  <div class="description-order-numbers">
                    <span class="text">出行人数：</span>
                    <el-radio v-model="numbers" label="1">一人出行</el-radio>
                    <el-radio v-model="numbers" label="2">两人出行</el-radio>
                  </div>
                  <div class="description-order-bt">
                    立即预定
                  </div>
                </div>
              </div>
              <div class="details">
                <el-tabs
                  v-model="activeName"
                  @tab-click="handleClick"
                  type="border-card"
                >
                  <el-tab-pane label="目的地" name="zero">
                    <h3>目的地：</h3>
                    <p>{{datas.destination}}</p>
                    <ul class="">
                      <li v-for="(item,index) in datas.destination.imgUrl" :key="index">
                        <img :src="item" alt="">
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="行程" name="first">
                    <div></div>
                  </el-tab-pane>
                  <el-tab-pane label="费用" name="second">费用</el-tab-pane>
                  <el-tab-pane label="须知" name="third">须知</el-tab-pane>
                  <el-tab-pane label="退定保障" name="fourth"
                    >退定保障</el-tab-pane
                  >
                  <el-tab-pane label="用户评价" name="fifth"
                    >用户评价</el-tab-pane
                  >
                </el-tabs>
              </div>
            </div>
            <div class="slider">
              <div>attractions Spots</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotAttractions from "./hotAttractions";
export default hotAttractions;
</script>

<style scoped lang="scss">
@import "./hotAttractions.scss";
</style>

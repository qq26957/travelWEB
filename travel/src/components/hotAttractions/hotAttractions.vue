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
                  <el-carousel height="400px" @change="changeImg" ref="carousel" :interval = 5000>
                    <el-carousel-item v-for="item in datas.imgUrl" :key="item">
                      <img :src="item" alt="" class="swiper-item"/>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="img-choose">
                  <ul >
                    <li
                      v-for="(imgItem, index) in datas.imgUrl"
                      :key="index"
                      @click="changeImg(index,index-1)"
                      :class="currentImg == index ?'chooseItem currentImg':'chooseItem notCurrent'"
                    >  
                      <img :src="imgItem" alt="" class="imgChoose-img" />
                      <div class="mengban"></div>
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
                  <div class="description-order-bt" @click="toOrders">
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
                  <el-tab-pane label="目的地" name="zero" >
                    <div class="destination">
                    <h3 >景点介绍：<span>{{ datas.destination }}</span> </h3>
                    <ul class="">
                      <li
                        v-for="(item, index) in datas.destinationList"
                        :key="index"
                      >
                        <img :src="item" alt="" />
                      </li>
                    </ul>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="行程" name="first">
                    <div style="height: 800px; width: 1315px">
                      <el-steps direction="vertical" :active="1">
                        <el-step
                          v-for="(item, index) in datas.trip"
                          :key="index"
                          :title="item.time"
                          :description="item.things"
                          status="process"
                        ></el-step>
                      </el-steps>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="费用" name="second">
                    <ul class="cost">
                      <li v-for="(item, index) in datas.cost" :key="index">
                        <img :src="item.imgUrl" alt="" />
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="须知" name="third">
                    <ul class="perchaseInformations">
                      <li
                        v-for="(item, index) in purchaseInformation.imgUrl"
                        :key="index"
                      >
                        <img :src="item" alt="" />
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="退定保障" name="fourth">
                    <ul class="refundProtection">
                      <li
                        v-for="(item, index) in refundProtection.imgUrl"
                        :key="index"
                      >
                        <img :src="item" alt="" style="width:1315px" />
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="用户评价" name="fifth">
                    <div class="evaluation" style="width:1315px">
                      <div class="evaluation-total">
                        <div class="evaluation-total-left">
                          <p class="label">满意度</p>
                          <p class="text">
                            {{ totalSatisfaction.goodRate }}%
                          </p>
                          <p style="color:rgb (153, 153, 153); font-size:12px">来自{{totalSatisfaction.total}}名游客的点评</p>
                        </div>
                        <div class="evaluation-total-center">
                          <div class="item">
                          <p>
                            满意：<span
                              >({{ datas.evaluation.total.satisfied }})</span
                            >
                          </p>
                          <el-progress
                            :text-inside="true"
                            :stroke-width="24"
                            :percentage="totalSatisfaction.satisfied"
                            status="success"
                          ></el-progress>
                          </div>
                          <div class="item">
                          <p>
                            一般：<span
                              >({{ datas.evaluation.total.commonly }})</span
                            >
                          </p>
                          <el-progress
                            :text-inside="true"
                            :stroke-width="22"
                            :percentage="totalSatisfaction.commonly"
                            status="warning"
                          ></el-progress>
                          </div>
                          <div class="item">
                          <p>
                            差评：<span>({{ datas.evaluation.total.bad }})</span>
                          </p>
                          <el-progress
                            :text-inside="true"
                            :stroke-width="20"
                            :percentage="totalSatisfaction.bad"
                            status="exception"
                          ></el-progress>
                          </div>
                        </div>
                        <div class="evaluation-total-right">
                          <p>
                            旅行交通：<span>{{
                              datas.evaluation.total.traffic
                            }}</span
                            >/5
                          </p>
                          <p>
                            餐饮住食：<span>{{
                              datas.evaluation.total.hotel
                            }}</span
                            >/5
                          </p>
                          <p>
                            游玩乐趣：<span>{{
                              datas.evaluation.total.play
                            }}</span
                            >/5
                          </p>
                        </div>
                      </div>
                      <div class="evaluation-single">
                        <ul>
                          <li
                            v-for="(item, index) in datas.evaluation.single"
                            :key="index"
                          >
                            <div class="evaluation-single-header">
                              <img src="" alt="头像" />
                              <p>{{ item.user.name }}</p>
                              <p><span>{{ item.user.time }}</span>  出发</p>
                            </div>
                            <div class="evaluation-single-content">
                              <div class="evaluation-single-content-title">
                                <p><span>旅行交通 : </span><el-rate
                                    v-model="item.score.traffic"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="{value}"
                                    style="display:inline-block"
                                  >
                                  </el-rate></p>
                                <p><span>餐饮住食 : </span> <el-rate
                                    v-model="item.score.hotel"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="{value}"
                                    style="display:inline-block"
                                  >
                                  </el-rate></p>
                                
                                <p><span>游玩乐趣 : </span>  <el-rate
                                    v-model="item.score.play"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="{value}"
                                    style="display:inline-block"
                                  >
                                  </el-rate></p>
                              </div>
                              <p class="evaluation-single-content-body">
                                {{ item.content }}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div></el-tab-pane
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

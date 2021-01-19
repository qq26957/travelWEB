<template>
  <div class="overseas">
    <div class="overseas-img"><img src="/static/img/overseas/b1.jpg" alt="" /></div>
    <div class="overseas-content">
      <div class="background">
        <div class="title">
          <transition appear name="bounce">
            <div class="title-text">
              <h1>境外游</h1>
              <h3>overseas Information</h3>
              <h1>—</h1>
            </div>
          </transition>
          <div class="navigation">
            <el-breadcrumb separator=">>">
              <el-breadcrumb-item :to="{ path: '/' }" class="home"
                >首页</el-breadcrumb-item
              >
                 <el-breadcrumb-item class="current">主题旅游</el-breadcrumb-item>
              <el-breadcrumb-item class="current">境外游</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <ul class="content">
              <li class="content-item" v-for="item in dataList" :key="item.id">
                <div class="left">
                  <img :src="item.imgUrl" alt="" class="left-img" />
                  <div class="left-mengban">
                    <div class="left-mengban-content">
                      <h4>立即预定</h4>
                      <h3>——</h3>
                      <div class="jiantou2">
                        <img src="/static/img/home/jiantou.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <h2 class="right-title">{{ item.title }}</h2>
                  <h4>
                    特色：{{
                      item.characteristic
                    }}
                    &nbsp;&nbsp;&nbsp;&nbsp;线路:{{ item.linkId }}
                  </h4>
                  <h4>
                    销量：{{ item.sales }} &nbsp;&nbsp;&nbsp;&nbsp;满意度：{{
                      item.satisfaction
                    }}
                  </h4>
                  <h4>行程: {{ item.trip }}</h4>
                  <h4>
                    推荐指数：<el-rate
                      v-model="item.score"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    >
                    </el-rate>
                  </h4>

                  <div class="price">
                    <span class="price-original">原价：{{ item.originalPrice }}</span>
                    <span class="price-present">{{ item.presentPrice }}</span>
                  </div>
                </div>
              </li>
            </ul>
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
            <div>Themes-overseas</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import overseas from "./overseas";
export default overseas;
</script>

<style scoped lang="scss">
@import "./overseas.scss";
</style>

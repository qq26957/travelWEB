<template>
  <div class="home">
    <div class="home-slider">
      <div class="login">
        登录
      </div>
      <div class="top">
          TOP⇧
      </div>
      <div class="weixin">
        <img src="" alt="">
      </div>
    </div>
    <div class="home-swiper">
      <el-carousel height="700px" @change="swiperChange">
        <el-carousel-item v-for="item in imgList" :key="item.url">
          <img
            :src="item.url"
            alt=""
            class="home-swiper-img"
            style="height:800px; width:100%"
          />
        </el-carousel-item>
      </el-carousel>
      <div class="home-swiper-num">
        <span
          ><span>{{ currentNum }}</span> / 3</span
        >
      </div>
    </div>
    <div class="home-hot">
      <ul class="home-hot-ul">
        <li>
          <div class="hot-text">
            <span>
              热门目的地
            </span>
            <br />
            <span>DESTINATIONS</span>
            <br />
            <div class="tiao"></div>
          </div>
        </li>
        <li v-for="item in hotList" :key="item.name" class="home-hot-li-img" @click="toDestinations(item.index)">
          <a><img :src="item.url" alt="" class="hot-img"/></a>
          <div class="home-hot-li-img-mengban">
            <div>
              <span class="chinese">{{ item.name }}</span>
              <span class="english">{{ item.english }}</span>
              <div class="gang"></div>
            </div>
          </div>
        </li>
        <li class="hot-more" @mouseenter="hover" @mouseleave="leave">
          <a
            ><div class="hot-more-white">
              <span>View more</span><br /><img :src="jiantou" alt="" /></div
          ></a>
        </li>
      </ul>
    </div>
    <div class="home-about">
      <div class="home-about-center">
        <header class="home-about-center-header">
          <h3>关于我们</h3>
          <br />
          <h1>About us</h1>
          <h1>—</h1>
        </header>
        <div class="content">
          <span
            >途牛旅游网于2006年10月创立于南京，以“让旅游更简单”为使命，为消费者提供由北京、天津、上海、广州、深圳、南京等64个城市出发的旅游产品预订服务，产品全面，价格透明，全年365天24小时400电话预订，并提供丰富的后续服务和保障。
            途牛旅游网提供8万余种旅游产品供消费者选择，涵盖跟团、自助、自驾、邮轮、酒店、签证、景区门票以及公司旅游等，已成功服务累计超过400万人次出游。
            2014年12月15日，途牛旅游网宣布与弘毅投资、京东商城、携程旗下子公司“携程投资”以及途牛首席执行官与首席运营官签订股权认购协议。根据协议途牛将向上述投资者出售1.48亿美元的新发行股份。
            [1]
            2015年11月24日，途牛旅游网与海航旅游集团共同宣布战略结盟。海航旅游战略投资途牛5亿美元，双方将利用各自优质资源，在线上旅游、航空、酒店服务等领域开展深度合作。
            [2]</span
          >
        </div>
        <div class="jiantou2"><img src="/static/img/home/jiantou.png" alt="" /></div>
        <div class="showImg">
          <img src="/static/img/home/cdgaoxinqu.jpg" alt="" />
          <div class="mengban2"></div>
        </div>
      </div>
    </div>
    <div class="home-theme">
      <header class="title">
        <div class="center">
          <h3 class="text">主题旅游</h3>
          <h1 class="chinese">Theme tourism</h1>
          <h1>—</h1>
        </div>
      </header>
      <ul class="home-theme-content">
        <template v-for="(item, index) in recommendedList">
          <li
            @mouseenter="changeFlagE(index)"
            @mouseleave="changeFlagL(index)"
            :key="index"
          >
            <a href="#">
              <div v-show="item.flag" class="current" :key="'current'">
                <img :src="item.imgUrl" alt="" class="background" />
                <div class="center">
                  <h3>{{ item.text }}</h3>
                  <h1>{{ item.english }}</h1>
                  <button class="btn">查看更多</button>
                </div>
              </div>
              <div v-show="!item.flag" class="mengban" :key="'mengban'">
                <img :src="item.imgUrl" alt="" class="background" />
                <div class="background-color">
                  <div class="center">
                    <img src="/static/img/home/home/ic1.png" alt="" />
                    <h1 class="english">{{ item.english }}</h1>
                    <h3 class="text">{{ item.text }}</h3>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </template>
      </ul>
    </div>
    <div class="home-news">
      <div class="title">
        <div class="center">
          <h3>新闻资讯</h3>
          <h1>News information</h1>
          <h1>—</h1>
        </div>
      </div>
      <div class="swiper">
        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item
            v-for="item in newsList"
            :key="item.name"
            class="swiper-item"
          >
            <div class="swiper-item-content">
              <img :src="item.url" alt="" class="news-img" />
              <div class="description">
                <h4 class="description-title">{{ item.title }}</h4>
                <div class="description-text">{{ item.text }}</div>
                <div class="description-time">{{ item.time }}</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
   
  </div>
</template>

<script>
import home from "./home";
export default home;
</script>

<style scoped lang="scss">
@import "./home.scss";
</style>

<template>
  <div class="news">
    <div class="news-img"><img src="/static/img/news/b1.jpg" alt="" /></div>
    <div class="news-content">
      <div class="background">
        <div class="title">
          <transition appear name="bounce">
            <div class="title-text" >
              <h1>新闻资讯</h1>
              <h3>News Information</h3>
              <h1>—</h1>
            </div>
            </transition>
          <div class="navigation">
            <el-breadcrumb separator=">>">
              <el-breadcrumb-item :to="{ path: '/' }" class="home"
                >首页</el-breadcrumb-item
              >
              <el-breadcrumb-item class="current">新闻资讯</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <ul class="content">
              <li class="content-item" v-for="(item,index) in dataList" :key="index" @click="toNewsDetails(index)">
                <h4 class="content-item-title">{{ item.title }}</h4>
                <div class="content-item-content">{{ item.content }}</div>
                <h5 class="content-item-time">{{ item.time }}</h5>
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
            <div>News Information</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news from "./news";
export default news;
</script>

<style scoped lang="scss">
@import "./news.scss";
</style>

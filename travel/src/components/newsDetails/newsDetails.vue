<template>
  <div class="newsDetails">
    <div class="newsDetails-img">
      <img src="/static/img/news/b1.jpg" alt="" />
    </div>
    <div class="newsDetails-content">
      <div class="background">
        <div class="title">
          <transition appear name="bounce">
            <div class="title-text">
              <h1>新闻资讯</h1>
              <h3>news Information</h3>
              <h1>—</h1>
            </div>
          </transition>
          <div class="navigation">
            <el-breadcrumb separator=">>">
              <el-breadcrumb-item :to="{ path: '/' }" class="home"
                >首页</el-breadcrumb-item
              >
              <el-breadcrumb-item class="current" :to="{ path: '/news' }">新闻资讯</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
              <div class="bottom-left-title">  <h1 >{{ data.title }}</h1></div>
              <div class="bottom-left-title1">
            <h3>
              <span class="bottom-left-time">时间：</span>{{ data.time }}
              <span class="bottom-left-source">来源：</span>{{ data.source }}
              <span class="bottom-left-author">作者：</span>{{data.author}}
              <span class="bottom-left-editor">编辑：</span>{{data.editor}}
            </h3> 
            </div>
            <div class="bottom-left-content">
               <pre> {{data.content }}</pre>
            </div>
          </div>
          <div class="slider">
            <div>news Information</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsDetails from "./newsDetails";
export default newsDetails;
</script>

<style scoped lang="scss">
@import "./newsDetails.scss";
</style>

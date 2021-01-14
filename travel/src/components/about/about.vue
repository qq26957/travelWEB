<template>
  <div class="about">
    <div class="about-img"><img src="/static/img/about/b.jpg" alt="" /></div>
    <div class="about-content">
      <div class="background">
          <div class="title">
            <div class="title-text">
          <h1>关于我们</h1>
          <h3>About Us</h3>
          <h1>—</h1>
        </div>
        <div class="navigation">
          <el-breadcrumb separator=">>">
            <el-breadcrumb-item :to="{ path: '/' }" class="home">首页</el-breadcrumb-item>
            <el-breadcrumb-item class="current">关于我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
          </div>
          <div class="bottom">
         <div class="content">
            <span class="content-text"> 途牛旅游网创立于2006年10月，以“让旅游更简单”为使命，为消费者提供由北京、xx、广州、深圳等180个城市出发的旅游产品预订服务，产品全面，价格透明，全年365天24小时400电话预订，并提供丰富的后续服务和保障。
目前，途牛旅游网提供100万余种旅游产品供消费者选择，涵盖跟团、自助、自驾、邮轮、酒店、签证、景区门票以及公司旅游等，已成功服务累计超过1500万人次出游。<br/>
同时基于途牛旅游网全球中文景点目录以及中文旅游社区，可以更好地帮助游客了解目的地信息，妥善制定好出游计划，并方便地预订旅程中的服务项目。<br/>
              途牛旅游网创立于2006年10月，以“让旅游更简单”为使命，为消费者提供由北京、xx、广州、深圳等180个城市出发的旅游产品预订服务，产品全面，价格透明，全年365天24小时400电话预订，并提供丰富的后续服务和保障。
目前，途牛旅游网提供100万余种旅游产品供消费者选择，涵盖跟团、自助、自驾、邮轮、酒店、签证、景区门票以及公司旅游等，已成功服务累计超过1500万人次出游。
        </span>
         </div>
         <div class="slider">
             <div>About Us</div>
         </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./about.scss";
</style>

<template>
  <div class="scenery">
    <ul class="scenery-content">
      <li
        v-for="(item, index) in dataList"
        :key="index"
        class="scenery-content-item"
      >
        <div class="img"><img :src="item.imgUrl" alt="" /></div>
        <div class="price">{{ item.price }}</div>
        <div><span class="label">地点：</span>{{ item.position }}</div>
        <div><span class="label">景点：</span>{{ item.name }}</div>
        <div class="score">
          <span class="label">推荐指数：</span>
          <el-rate
            v-model="item.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
        </div>
        <div class="time">
          <span class="label">开放时间：</span>{{ item.time }}
        </div>
        <div class="mengban">
          <div class="mengban-center">
            <div>立即预定</div>
            <div class="gang">——</div>
            <img src="/static/img/scenery/jiantouh.png" alt="" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import sceneryItem from "./sceneryItem";
export default sceneryItem;
</script>

<style scoped lang="scss">
@import "./sceneryItem.scss";
</style>

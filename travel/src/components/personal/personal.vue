<template>
  <div class="personal">
    <div class="personal-background">
      <img src="/static/img/background/bg10.jpg" alt="" />
    </div>
    <el-container class="personal-content">
      <el-tabs :tab-position="'left'" stretch value="1">
        <el-tab-pane class="tab-item" name="1"
          ><div slot="label">
            <img src="/static/img/personal/book.png" alt="" /><span
              >未出行订单</span
            >
          </div>
          <div class="tab-item-content">
            <ul class="order">
              <li
                class="order-li"
                v-for="(item, index) in notTrip"
                :key="index"
              >
                <div class="order-li-header">
                  <el-checkbox v-model="selectNotTrip[index]"
                    ><span>订单号 ： </span
                    ><span class="order-id">{{
                      item.orderId
                    }}</span></el-checkbox
                  >
                </div>
                <div class="order-li-content">
                  <p class="order-li-content-title">{{ item.title }}</p>
                  <div class="order-li-content-time">
                    <span>出发日期 ：</span><span>{{ item.startTime }}</span>
                  </div>
                  <div class="order-li-content-price">
                    <span class="order-li-content-price-num"
                      >￥{{ item.price }}</span
                    >|<span class="order-li-content-price-text">未出行</span>
                  </div>
                  <div class="order-li-content-details">产品详情</div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane class="tab-item" name="2"
          ><div slot="label">
            <img src="/static/img/personal/book2.png" alt="" /><span
              >未支付订单</span
            >
          </div>
          <div class="tab-item-content">
            <ul class="order">
              <li class="order-li" v-for="(item, index) in unpaid" :key="index">
                <div class="order-li-header">
                  <el-checkbox v-model="selectNotTrip[index]"
                    ><span>订单号 ： </span
                    ><span class="order-id">{{
                      item.orderId
                    }}</span></el-checkbox
                  >
                </div>
                <div class="order-li-content">
                  <p class="order-li-content-title">{{ item.title }}</p>
                  <div class="order-li-content-time">
                    <span>出发日期 ：</span><span>{{ item.startTime }}</span>
                  </div>
                  <div class="order-li-content-price">
                    <span class="order-li-content-price-num"
                      >￥{{ item.price }}</span
                    >|<span class="order-li-content-price-text">未出行</span>
                  </div>
                  <div class="order-li-content-pay">去支付</div>
                  <div class="order-li-content-details">产品详情</div>
                </div>
              </li>
            </ul>
          </div></el-tab-pane
        >
        <el-tab-pane class="tab-item" name="3"
          ><div slot="label">
            <img src="/static/img/personal/book3.png" alt="" /><span
              >未评价订单</span
            >
          </div>
          <div class="tab-item-content">
            <ul class="order">
              <li
                class="order-li"
                v-for="(item, index) in notEvaluated"
                :key="index"
              >
                <div class="order-li-header">
                  <el-checkbox v-model="selectNotTrip[index]"
                    ><span>订单号 ： </span
                    ><span class="order-id">{{
                      item.orderId
                    }}</span></el-checkbox
                  >
                </div>
                <div class="order-li-content">
                  <p class="order-li-content-title">{{ item.title }}</p>
                  <div class="order-li-content-time">
                    <span>出发日期 ：</span><span>{{ item.startTime }}</span>
                  </div>
                  <div class="order-li-content-price">
                    <span class="order-li-content-price-num"
                      >￥{{ item.price }}</span
                    >|<span class="order-li-content-price-text">未出行</span>
                  </div>
                  <div class="order-li-content-evaluated">去评价</div>
                  <div class="order-li-content-details">产品详情</div>
                </div>
              </li>
            </ul>
          </div></el-tab-pane
        >
        <el-tab-pane class="tab-item" name="4"
          ><div slot="label">
            <img src="/static/img/personal/book4.png" alt="" /><span
              >已完成订单</span
            >
          </div>
          <div class="tab-item-content">
            <ul class="order">
              <li
                class="order-li"
                v-for="(item, index) in Completed"
                :key="index"
              >
                <div class="order-li-header">
                  <el-checkbox v-model="selectNotTrip[index]"
                    ><span>订单号 ： </span
                    ><span class="order-id">{{
                      item.orderId
                    }}</span></el-checkbox
                  >
                </div>
                <div class="order-li-content">
                  <p class="order-li-content-title">{{ item.title }}</p>
                  <div class="order-li-content-time">
                    <span>出发日期 ：</span><span>{{ item.startTime }}</span>
                  </div>
                  <div class="order-li-content-price">
                    <span class="order-li-content-price-num"
                      >￥{{ item.price }}</span
                    >|<span class="order-li-content-price-text">未出行</span>
                  </div>
                  <div class="order-li-content-delate">删除订单</div>
                  <div class="order-li-content-details">产品详情</div>
                </div>
              </li>
            </ul>
          </div></el-tab-pane
        >
        <el-tab-pane class="tab-item" name="5"
          ><div slot="label" class="tab-item-header">
            <img src="/static/img/personal/ziliao.png" alt="" />个人信息
          </div>
          <div class="tab-item-content2">
            <div class="tab-item-content2-message">
              <div class="tab-item-content2-message-title">
                个人信息设置
              </div>
              <div v-if="isEdit">
                <ul class="tab-item-content2-message-content">
                  <li>
                    <span class="label">手机 : </span
                    ><span class="phone">{{ personalMessage.phone }}</span>
                  </li>
                  <li>
                    <span class="label">邮箱 : </span
                    ><span class="email">{{ personalMessage.email }}</span>
                  </li>
                  <li>
                    <span class="label">昵称 : </span
                    ><span class="nickname">{{
                      personalMessage.nickname
                    }}</span>
                  </li>
                  <li>
                    <span class="label">姓名 : </span
                    ><span class="name">{{ personalMessage.name }}</span>
                  </li>
                  <li>
                    <span class="label">性别 : </span
                    ><span class="gender">{{ personalMessage.gender }}</span>
                  </li>
                  <li>
                    <span class="label">生日 : </span
                    ><span class="birth">{{ personalMessage.birth }}</span>
                  </li>
                  <li><div class="bt" @click="changeEidt">编辑</div></li>
                </ul>
              </div>
              <div></div>
            </div>
            <div class="tab-item-content2-header">
              <div class="tab-item-content2-header-title">
                头像设置
              </div>
              <div class="tab-item-content2-header-warning">
                <span class="warning">注意</span
                ><span>头像 仅支持jpg,png格式图片，且文件小于2M</span> 头像
              </div>
              <div class="tab-item-content2-header-upload">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="headerImg" :src="headerImg" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div class="tab-item-content2-header-bt">
                <div class="bt">保存</div>
                <img src="/static/img/personal/notice.png" alt="" />
                <span>新头像将在审核后生效</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane class="tab-item" name="6"
          ><div slot="label" class="tab-item-header">
            <img src="/static/img/personal/logout.png" alt="" />退出登录
          </div>
          <div class="tab-item-content"></div
        ></el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
import personal from "./personal";
export default personal;
</script>

<style scoped lang="scss">
@import "./personal.scss";
</style>

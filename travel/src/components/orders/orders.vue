<template>
  <div class="orders">
    <div class="orders-img">
      <img src="/static/img/news/b1.jpg" alt="" />
    </div>
    <div class="orders-content">
      <div class="background">
        <div class="title">
          <transition appear name="bounce">
            <div class="title-text">
              <h1>预定信息</h1>
              <h3>Orders Information</h3>
              <h1>—</h1>
            </div>
          </transition>
          <div class="navigation">
            <div><i class="el-icon-back"></i>返回</div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <div class="bottom-left-header">
              <h4 class="bottom-left-header-title">{{ title }}</h4>
              <div class="bottom-left-header-id">
                <span class="label">产品编号：</span>{{ id }}
              </div>
              <div class="bottom-left-header-startSpot">
                <span class="label">出发地点： </span
                ><span>{{ startSpot }}</span>
              </div>
            </div>
            <h1 class="jx"></h1>
            <div class="bottom-left-message1">
              <div class="bottom-left-message1-title">
                <h3>出发信息</h3>
              </div>
              <div class="bottom-left-message1-time">
                <span class="label">出发时间：</span>
                <el-date-picker
                  v-model="time"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                >
                </el-date-picker>
              </div>
              <div class="bottom-left-message1-people">
                <div>
                  <span class="label">出行人数：</span>
                  <span class="label1">成人:</span
                  ><el-input-number
                    v-model="num1"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                    label="成人"
                  ></el-input-number>
                </div>
                <div>
                  <span class="label1">儿童:</span
                  ><el-input-number
                    v-model="num2"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                    label="儿童"
                  ></el-input-number>
                </div>
              </div>
            </div>
            <h1 class="jx"></h1>
            <div class="bottom-left-message2">
              <div class="bottom-left-message2-title">
                <h3>联系人信息</h3>
              </div>
              <div class="info">
                邮箱将用于接收电子合同和出团通知书，建议填写
              </div>
              <div class="form">
                <el-form
                  :model="ruleForm2"
                  :rules="rules2"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item label="姓  名" prop="name">
                    <el-input
                      placeholder="请输入真实姓名"
                      v-model="ruleForm2.name"
                      style="width: 70%"
                    >
                      <i
                        slot="prefix"
                        class="el-input__icon el-icon-s-custom"
                      ></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="手机号" prop="phone">
                    <el-input
                      placeholder="请输入手机号"
                      v-model.number="ruleForm2.phone"
                      style="width: 70%"
                    >
                      <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="邮  箱" prop="email">
                    <el-input
                      placeholder="请输入邮箱"
                      v-model="ruleForm2.email"
                      style="width: 70%"
                    >
                      <i
                        slot="prefix"
                        class="el-input__icon el-icon-message"
                      ></i>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <h1 class="jx"></h1>
            <div class="bottom-left-message3">
              <div class="bottom-left-message2-title">
                <h3>游客信息</h3>
              </div>
              <div class="info"></div>
              <div>
                <el-form
                  :model="ruleForm3"
                  :rules="rules3"
                  ref="ruleForm3"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item label="姓  名" prop="name">
                    <el-input
                      placeholder="请输入真实姓名"
                      v-model="ruleForm3.name"
                    >
                      <i
                        slot="prefix"
                        class="el-input__icon el-icon-s-custom"
                      ></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="手机号" prop="phone">
                    <el-input
                      placeholder="请输入手机号"
                      v-model.number="ruleForm3.phone"
                      name="phone"
                    >
                      <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="身份证" prop="IDcard">
                    <el-input
                      placeholder="请输入身份证"
                      v-model="ruleForm3.IDcard"
                    >
                      <i
                        slot="prefix"
                        class="el-input__icon el-icon-bank-card"
                      ></i>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <div class="bottom-right">
            <div class="bottom-right-content">
              <div class="bottom-right-content-title">结算信息</div>
              <div class="bottom-right-content-price">
                <span>出游团费：</span>
                <span class="price"></span>
                <div>
                  <span class="label">成人</span><span class="price1"></span>
                </div>
                <div>
                  <span class="label">儿童</span><span class="price1"></span>
                </div>
              </div>
              <div class="bottom-right-content-total">
                <span class="total">总价</span>
                <span class="totalPrice"></span>
              </div>
              <div class="btn">提交订单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orders from "./orders";
export default orders;
</script>

<style scoped lang="scss">
@import "./orders.scss";
</style>

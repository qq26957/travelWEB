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
            <div @click="back"><i class="el-icon-back"></i>返回</div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <div class="bottom-left-header">
              <h4 class="bottom-left-header-title">
                <img src="/static/img/orders/旅游.png" alt="" /> {{ title }}
              </h4>
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
                <h3>
                  <img src="/static/img/orders/信息.png" alt="" /> 出发信息
                </h3>
              </div>
              <div class="bottom-left-message1-time">
                <span class="label">出发时间：</span>
                <el-form
                  ref="ruleForm1"
                  :model="ruleForm1"
                  label-width="80px"
                  size="mini"
                  style="display:inline-block"
                >
                  <el-form-item ref="time">
                    <el-date-picker
                      v-model="ruleForm1.time"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </el-form-item>
                </el-form>
              </div>
              <div class="bottom-left-message1-people">
                <div>
                  <span class="label">出行人数：</span>
                  <span class="label1">成人:</span
                  ><el-input-number
                    v-model="num1"
                    @change="changeAdult"
                    :min="1"
                    :max="10"
                    label="成人"
                    size="mini"
                  ></el-input-number>
                </div>
                <div>
                  <span class="label1">儿童:</span
                  ><el-input-number
                    v-model="num2"
                    @change="changeChildren"
                    :min="0"
                    :max="10"
                    label="儿童"
                    size="mini"
                  ></el-input-number>
                </div>
              </div>
            </div>
            <h1 class="jx"></h1>
            <div class="bottom-left-message2">
              <div class="bottom-left-message2-title">
                <h3>
                  <img src="/static/img/orders/联系人.png" alt="" />联系人信息
                </h3>
              </div>
              <div class="info">
                邮箱将用于接收电子合同和出团通知书，建议填写
              </div>
              <div class="form">
                <el-form
                  :model="ruleForm2"
                  :rules="rules2"
                  ref="ruleForm2"
                  label-width="200px"
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
              <div class="bottom-left-message3-title">
                <h3>
                  <img src="/static/img/orders/联系人2.png" alt="" />游客信息
                </h3>
              </div>
              <div class="info">
                ·
                请确认所填写信息与所持证件信息一致，因信息不完整，填写不正确造成的额外损失、保险拒赔等问题，我司不承担相应责任，需由客人自行承担。<br />
                ·
                大于2周岁不满12周岁的儿童不可使用出生证明，请使用身份证、户口簿等，乘机请携带填写的相应证件。
              </div>
              <div>
                <ul id="tourList">
                  <li
                    v-for="(item, index) in touristList.adultList"
                    :key="index"
                  >
                    <div class="tourItem">
                      <div class="flag">
                        <div class="flag-index">第{{ index + 1 }}位</div>
                        <div class="flag-text">成人</div>
                      </div>
                      <el-form
                        :model="item"
                        :rules="rule"
                        ref="ruleForm3"
                        label-width="100px"
                        class="demo-ruleForm"
                      >
                        <el-form-item label="姓  名" prop="name">
                          <el-input
                            placeholder="请输入真实姓名"
                            v-model="item.name"
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
                            v-model.number="item.phone"
                            name="phone"
                          >
                            <i
                              slot="prefix"
                              class="el-input__icon el-icon-phone"
                            ></i>
                          </el-input>
                        </el-form-item>
                        <el-form-item label="身份证" prop="IDcard">
                          <el-input
                            placeholder="请输入身份证"
                            v-model="item.IDcard"
                          >
                            <i
                              slot="prefix"
                              class="el-input__icon el-icon-bank-card"
                            ></i>
                          </el-input>
                        </el-form-item>
                      </el-form>
                    </div>
                  </li>
                  <li
                    v-for="(item, index) in touristList.childrenList"
                    :key="'child' + index"
                  >
                    <div class="tourItem">
                      <div class="flag">
                        <div class="flag-index">第{{ index + 1 }}位</div>
                        <div class="flag-text2">儿童</div>
                      </div>
                      <el-form
                        :model="item"
                        :rules="rule"
                        ref="ruleForm3"
                        label-width="100px"
                        class="demo-ruleForm"
                      >
                        <el-form-item label="姓  名" prop="name">
                          <el-input
                            placeholder="请输入真实姓名"
                            v-model="item.name"
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
                            v-model.number="item.phone"
                            name="phone"
                          >
                            <i
                              slot="prefix"
                              class="el-input__icon el-icon-phone"
                            ></i>
                          </el-input>
                        </el-form-item>
                        <el-form-item label="身份证" prop="IDcard">
                          <el-input
                            placeholder="请输入身份证"
                            v-model="item.IDcard"
                          >
                            <i
                              slot="prefix"
                              class="el-input__icon el-icon-bank-card"
                            ></i>
                          </el-input>
                        </el-form-item>
                      </el-form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom-right">
            <div class="bottom-right-content">
              <h3 class="bottom-right-content-title">结算信息</h3>
              <div class="bottom-right-content-price">
                <span class="price-label">出游团费：</span>
                <span class="price-text">￥{{ totalPrice }}</span>
                <div class="price-item item1">
                  <span class="label">成人</span
                  ><span class="price1">￥{{ price }} </span
                  ><span class="num"> X {{ num1 }}</span>
                </div>
                <div class="price-item item2" v-show="Boolean(num2)">
                  <span class="label">儿童</span
                  ><span class="price1">￥{{ childPrice }} </span
                  ><span class="num"> X {{ num2 }}</span>
                </div>
              </div>
              <h3 class="bottom-right-content-total">
                <span class="total-label">总价</span>
                <span class="total-text">￥{{ totalPrice }}</span>
              </h3>
              <div class="btn" @click="submit">提交订单</div>
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

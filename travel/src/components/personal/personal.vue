<template>
  <div class="personal">
    <div class="personal-background">
      <img src="/static/img/background/bg10.jpg" alt="" />
    </div>
    <el-container class="personal-content">
      <el-tabs
        :tab-position="'left'"
        stretch
        value="1"
        :before-leave="changeTab"
      >
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
                  <div
                    class="order-li-content-details"
                    @click="watchOrder(item.productNumber)"
                  >
                    产品详情
                  </div>
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
                <div class="order-li-header not-pay">
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
                    >|<span class="order-li-content-price-text">未支付</span>
                  </div>
                  <div
                    class="order-li-content-pay"
                    @click="payOrder(item.orderId)"
                  >
                    去支付
                  </div>
                  <div
                    class="order-li-content-details"
                    @click="watchOrder(item.productNumber)"
                  >
                    产品详情
                  </div>
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
                <div class="order-li-header not-evaluated">
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
                    >|<span class="order-li-content-price-text">未评价</span>
                  </div>
                  <div
                    class="order-li-content-evaluated"
                    @click="evaluateOrder(item.orderId)"
                  >
                    去评价
                  </div>
                  <el-dialog title="评价" :visible.sync="dialogFormVisible">
                    <div id="evalute">
                      <p style="color: rgb(22 14 159); foot-size: 20px">
                        请对该次旅行进行评级打分，我们会将你的优秀评价展示给其他人（<span
                          style="color: #dd8021;"
                          >可以点击星星进行打分</span
                        >）
                      </p>
                      <el-form :model="evaluteForm" style="width: 500px">
                        <el-form-item label="旅行交通：" :label-width="'100px'">
                          <el-rate
                            v-model="evaluteForm.traffic"
                            :colors="colors"
                            style="margin:12px"
                            show-text
                          >
                          </el-rate>
                        </el-form-item>
                        <el-form-item label="餐饮住食：" :label-width="'100px'">
                          <el-rate
                            v-model="evaluteForm.hotel"
                            :colors="colors"
                            style="margin:12px"
                            show-text
                          >
                          </el-rate>
                        </el-form-item>
                        <el-form-item label="游玩乐趣：" :label-width="'100px'">
                          <el-rate
                            v-model="evaluteForm.play"
                            :colors="colors"
                            style="margin:12px"
                            show-text
                          >
                          </el-rate>
                        </el-form-item>
                        <el-form-item label="文字描述：" :label-width="'100px'">
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入您的评价"
                            v-model="evaluteForm.text"
                          >
                          </el-input>
                        </el-form-item>
                      </el-form>
                    </div>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false"
                        >取 消</el-button
                      >
                      <el-button type="primary" @click="postEvalute"
                        >提交评论</el-button
                      >
                    </div>
                  </el-dialog>
                  <div
                    class="order-li-content-details"
                    @click="watchOrder(item.productNumber)"
                  >
                    产品详情
                  </div>
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
                <div class="order-li-header complated">
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
                    >|<span class="order-li-content-price-text">已完成</span>
                  </div>
                  <div
                    class="order-li-content-delate"
                    @click="removeOrder(item.orderId)"
                  >
                    删除订单
                  </div>
                  <div
                    class="order-li-content-details"
                    @click="watchOrder(item.productNumber)"
                  >
                    产品详情
                  </div>
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
              <div v-else class="tab-item-content2-message-edit">
                <el-form
                  ref="ruleForm"
                  :model="ruleForm"
                  label-width="80px"
                  class="form"
                  :rules="rules"
                >
                  <el-form-item label="手机">
                    <el-input v-model="ruleForm.phone" disabled> </el-input>
                    <span class="notice">抱歉！绑定信息暂不支持更改</span>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                  </el-form-item>
                  <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="ruleForm.nickname"></el-input>
                  </el-form-item>
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="ruleForm.gender">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="生日" prop="birth">
                    <el-date-picker
                      v-model="ruleForm.birth"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <el-button
                    type="primary"
                    @click="submitForm('ruleForm')"
                    class="bt-save"
                    >保存</el-button
                  >
                </el-form>
              </div>
            </div>
            <div class="tab-item-content2-header">
              <div class="tab-item-content2-header-title">
                头像设置
              </div>
              <div class="tab-item-content2-header-warning">
                <span class="warning">注意</span
                ><span>头像 仅支持jpg,png格式图片，且文件小于2M</span> 头像
              </div>
              <div class="tab-item-content2-header-pre">
                <img src="/api/hello/getpic" class="avatar" alt="图片" />
                <h4>当前图像</h4>
              </div>
              <div class="tab-item-content2-header-upload">
                <el-upload
                  class="avatar-uploader"
                  ref="upload"
                  drag
                  action="/api/post"
                  :show-file-list="false"
                  :on-change="handlePreview"
                  :on-success="handleAvatarSuccess"
                  :on-error="handleAvatarError"
                  :before-upload="beforeAvatarUpload"
                  :auto-upload="false"
                >
                  <img
                    v-if="headerImg"
                    :src="headerImg"
                    class="avatar"
                    alt="图片"
                  />

                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div class="tab-item-content2-header-bt">
                <div class="bt" @click="submitUpload">保存</div>
                <span>新头像将在审核后生效</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane class="tab-item" name="6"
          ><div slot="label" class="tab-item-header">
            <img src="/static/img/personal/pass.png" alt="" />密码更改
          </div>
          <div class="tab-item-content2">
            <div class="tab-item-content2-message">
              <div class="tab-item-content2-message-title">
                密码更改
              </div>
              <div class="tab-item-content2-message-center">
                <el-form
                  :model="passwordForm"
                  status-icon
                  :rules="passRules"
                  ref="passwordForm"
                  label-width="100px"
                  class="passForm"
                >
                  <el-form-item label="原始密码" prop="prePass">
                    <el-input
                      type="password"
                      v-model="passwordForm.prePass"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="新密码" prop="pass">
                    <el-input
                      type="password"
                      v-model="passwordForm.pass"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input
                      type="password"
                      v-model="passwordForm.checkPass"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      type="primary"
                      @click="passwordChange('passwordForm')"
                      >提交</el-button
                    >
                    <el-button @click="resetForm('passwordForm')"
                      >重置</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane class="tab-item " name="7"
          > 
          <div slot="label" class="tab-item-header">
            <img src="/static/img/personal/logout.png" alt="" />退出登录
          </div>
          <div class="tab-item-content3 logout" >
            <h2 class="text">亲爱的用户，你即将注销登录，你确认退出？</h2>
            <div class="bt-confirm" @click="logout">确定退出</div>
          </div>
          </el-tab-pane
        >
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

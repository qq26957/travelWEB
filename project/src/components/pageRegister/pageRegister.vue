<template>
  <div class="register">
    <div class="register-background">
      <img src="/static/img/background/bg10.jpg" alt="" />
    </div>
    <div class="register-center">
      <div class="register-center-content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <h3 class="title">注册</h3>
          <el-form-item label="账 号" prop="account">
            <el-input
              placeholder="请输入手机号"
              v-model.number="ruleForm.account"
              name="account"
            >
              <i slot="prefix" class="el-input__icon el-icon-phone"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="密  码" prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="ruleForm.password"
              type="password"
            >
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordCheck">
            <el-input
              placeholder="请再次输入密码"
              v-model="ruleForm.passwordCheck"
              type="password"
            >
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
         
          <el-form-item label="验证码" prop="checkCode" class="checkCode">
              <el-input
              placeholder="请输入验证码"
              v-model="ruleForm.checkCode"
              style="width:120px"
              class="checkCode-ipt"
            >
            </el-input>
            <div
              class="checkCode-draw"
              style="width:120px;height:40px; display:inline-block"
            >
             <canvas-code ref="canvasCode"></canvas-code>
            </div>
          
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm(ruleForm)"
              class="bt-register btn"
              >注册</el-button
            >
            <el-button @click="toLogin" class="bt-register btn">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import pageRegister from "./pageRegister.js";
export default pageRegister;
</script>

<style scoped lang="scss">
@import "./pageRegister.scss";
</style>

<template>
  <div class="login">
    <div class="login-background">
      <img src="/static/img/background/bg10.jpg" alt="" />
    </div>
    <div class="login-center">
      <div class="login-center-content">
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" status-icon>
             <h3 class="title">登录</h3>
             <el-form-item label="账号" prop="account">
            <el-input placeholder="请输入账号" v-model.number="ruleForm.account">
              <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
            </el-input>
             </el-form-item>
         <el-form-item label="密码" prop="password">
         <el-input placeholder="请输入密码" v-model="ruleForm.password" type="password">
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
         </el-form-item>
        <el-form-item>
        <div class="forget">忘记密码?</div>  
    <el-button type="primary" @click="submitForm(ruleForm)" class="bt-login btn">登录</el-button>
    <el-button @click="toRegister" class="bt-register btn">注册</el-button>
  </el-form-item>
</el-form> 
      </div>
    </div>
  </div>
</template>

<script>
import pageLogin from "./pageLogin.js"
export default pageLogin;
</script>

<style scoped lang="scss">
    @import "./pageLogin.scss"
</style>

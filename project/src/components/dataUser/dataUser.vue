<template>
  <div class="dataUser">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="账号" width="140">
        <template slot-scope="scope">
          <i class="el-icon-user"></i>
          <span>{{ scope.row.userId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="密码" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.password }}</span>
        </template>
      </el-table-column>
        <el-table-column label="身份证" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.IDcard }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="130">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="昵称" width="130">
        <template slot-scope="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column label="生日" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.birth }}</span>
        </template>
      </el-table-column>
      <el-table-column label="头像" width="180" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.headImg }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" @click="handleInsert()">添加</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>


    <el-dialog title="新增用户信息" :visible.sync="dialogFormVisible" center>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="width:400px; margin-left:100px"
      >
        <el-form-item label="账 号" prop="userId">
          <el-input
            placeholder="请输入手机号"
            v-model.number="ruleForm.userId"
            name="userId"
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
        <el-form-item label="邮  箱" prop="email">
          <el-input placeholder="请输入邮箱" v-model="ruleForm.email">
            <i slot="prefix" class="el-input__icon el-icon-message"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="姓  名" prop="name">
          <el-input placeholder="请输入真实姓名" v-model="ruleForm.name">
            <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
          </el-input>
        </el-form-item>
            
           <el-form-item label="身份证" prop="IDcard">
          <el-input placeholder="请输入身份证" v-model="ruleForm.IDcard">
            <i slot="prefix" class="el-input__icon el-icon-bank-card"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="昵  称" prop="nickName">
          <el-input placeholder="请输入昵称" v-model="ruleForm.nickName">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="生  日" prop="birth">
          <el-input placeholder="请输入生日" v-model="ruleForm.birth">
            <i slot="prefix" class="el-input__icon el-icon-present"></i>
          </el-input>
         </el-form-item>
        <el-form-item label="性  别" prop="gender">
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
        </el-form-item>
        
        <el-form-item label="上传头像" prop="headerImg">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
     
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitMessage"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import dataUser from "./dataUser";
export default dataUser;
</script>

<style scoped lang="scss">
@import "./dataUser.scss";
</style>

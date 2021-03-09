<template>
  <div class="dataScenic">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="产品编号" width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.productId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="景点名" width="130">
        <template slot-scope="scope">
          <span>{{ scope.row.scenicName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品名" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="满意度" width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.satisfaction }}</span>
        </template>
      </el-table-column>
      <el-table-column label="现在价格" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.nowPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="以往价格" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.oldPrice }}</span>
        </template>
      </el-table-column>
         <el-table-column label="儿童价格" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.childPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出发地" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.startSpot }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品特色" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.features }}</span>
        </template>
      </el-table-column>
       <el-table-column label="描述图片地址" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.imgList }}</span>
        </template>
      </el-table-column>
      <el-table-column label="景点介绍" width="180" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.destination }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240" fixed="right" >
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

    <el-dialog title="旅游信息" :visible.sync="dialogFormVisible" center>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="width:400px; margin-left:100px"
      >
        <el-form-item label="产品编号" prop="productId">
          <el-input
            placeholder="产品编号"
            v-model.number="ruleForm.productId"
            name="productId"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="景点名" prop="password">
          <el-input
            placeholder="请输入景点名"
            v-model="ruleForm.password"
            type="password"
          >
          </el-input>
        </el-form-item>
           <el-form-item label="产品名" prop="title">
          <el-input
            placeholder="请输入产品名"
            v-model.number="ruleForm.title"
            name="title"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="满意度" prop="name">
          <el-input placeholder="请输入满意度" v-model="ruleForm.name">
          </el-input>
        </el-form-item>
           <el-form-item label="现在价格" prop="newPrice">
          <el-input placeholder="请输入目前所售价格" v-model="ruleForm.newPrice">
          </el-input>
        </el-form-item>
        <el-form-item label="以往价格" prop="oldPrice">
          <el-input placeholder="以前的售价" v-model="ruleForm.oldPrice">
          </el-input>
        </el-form-item>
        <el-form-item label="以往价格" prop="childPrice">
          <el-input placeholder="以前的售价" v-model="ruleForm.childPrice">
          </el-input>
        </el-form-item>
        <el-form-item label="出发地" prop="startSpot">
          <el-input placeholder="出发地" v-model="ruleForm.startSpot">
          </el-input>
        </el-form-item>
            <el-form-item label="特色" prop="features">
          <el-input placeholder="输入产品特色" v-model="ruleForm.features">
          </el-input>
        </el-form-item>
          <el-form-item label="" prop="destination">
          <el-input placeholder="输入产品的具体描述" v-model="ruleForm.destination">
          </el-input>
        <el-form-item label="景点图片" prop="headerImg">
          <el-upload
            class="avatar-uploader"
            action=""
            list-type="picture-card"          
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
import dataScenic from "./dataScenic";
export default dataScenic;
</script>

<style scoped lang="scss">
@import "./dataScenic.scss";
</style>

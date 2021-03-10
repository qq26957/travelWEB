<template>
  <div class="dataEvalution">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="评论编号" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.evalutionId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单编号" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.orderId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品编号" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.productId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="景点名" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.scenicName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品名" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户id" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.userId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户昵称" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="旅行交通评分" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.traffic }}</span>
        </template>
      </el-table-column>
      <el-table-column label="餐饮住食评分" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.hotel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="游玩乐趣评分" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.play }}</span>
        </template>
      </el-table-column>
      <el-table-column label="文字描述" width="180" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.text }}</span>
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

    <el-dialog title="评价信息" :visible.sync="dialogFormVisible" center>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        style="width:400px; margin-left:100px"
        status-icon
        >
        <el-form-item label="评论编号" prop="evalutionId">
          <el-input
            placeholder="评论编号"
            v-model.number="ruleForm.evalutionId"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="订单编号" prop="orderId">
          <el-input placeholder="订单编号" v-model.number="ruleForm.orderId">
          </el-input>
        </el-form-item>
        <el-form-item label="产品编号" prop="productId">
          <el-input placeholder="产品编号" v-model.number="ruleForm.productId">
          </el-input>
        </el-form-item>
        <el-form-item label="景点名" prop="scenicName">
          <el-input placeholder="请输入景点名" v-model="ruleForm.scenicName">
          </el-input>
        </el-form-item>
        <el-form-item label="产品名" prop="title">
          <el-input placeholder="请输入产品名" v-model.number="ruleForm.title">
          </el-input>
        </el-form-item>
        <el-form-item label="用户id" prop="userId">
          <el-input placeholder="请输入用户id" v-model="ruleForm.userId">
          </el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickName">
          <el-input placeholder="请输入用户昵称" v-model="ruleForm.nickName">
          </el-input>
        </el-form-item>
        <el-form-item label="出发的时间" prop="startTime">
          <el-date-picker
            v-model="ruleForm.startTime"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="旅行交通评分" prop="traffic">
          <el-rate v-model="ruleForm.traffic" show-text> </el-rate>
        </el-form-item>
        <el-form-item label="餐饮住食评分" prop="hotel">
          <el-rate v-model="ruleForm.hotel" show-text> </el-rate>
        </el-form-item>
        <el-form-item label="游玩乐趣评分" prop="play">
          <el-rate v-model="ruleForm.play" show-text> </el-rate>
        </el-form-item>
        <el-form-item label="评价文字描述" prop="text">
          <el-input placeholder="请输入评价的文字描述" v-model="ruleForm.text">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import dataEvalution from "./dataEvalution";
export default dataEvalution;
</script>

<style lang="scss">
@import "./dataEvalution.scss";
</style>

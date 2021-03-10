<template>
  <div class="dataOrder">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="订单编号" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.orderId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品编号" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.productId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="景点名" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.scenicName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="景点描述" width="140" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出发地" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startSpot }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出发日期" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="成人数量" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.adultNum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="儿童数量" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.childNum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单总价（元）" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.totalPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="140">
        <template slot-scope="scope">
          <span v-show="scope.row.state == '0'">未支付</span>
          <span v-show="scope.row.state == '1'">未完成</span>
          <span v-show="scope.row.state == '2'">未评价</span>
          <span v-show="scope.row.state == '3'">已完成</span>
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

    <el-dialog title="订单信息" :visible.sync="dialogFormVisible" center>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        style="width:400px; margin-left:100px"
      >
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
          <el-input
            placeholder="请输入产品名"
            v-model.number="ruleForm.title"
            name="title"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="成人数量" prop="adultNum">
          <el-input placeholder="请输入订单总价格" v-model="ruleForm.adultNum">
          </el-input>
        </el-form-item>
        <el-form-item label="儿童数量" prop="childNum">
          <el-input placeholder="请输入订单总价格" v-model="ruleForm.childNum">
          </el-input>
        </el-form-item>
        <el-form-item label="订单总价（元）" prop="totalPrice">
          <el-input
            placeholder="请输入订单总价格"
            v-model="ruleForm.totalPrice"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="出发地" prop="startSpot">
          <el-input placeholder="请输入出发地" v-model="ruleForm.startSpot">
          </el-input>
        </el-form-item>
        <el-form-item label="出发时间" prop="startTime">
          <el-date-picker
            v-model="ruleForm.startTime"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-radio-group v-model="ruleForm.state">
            <el-radio :label="0">未支付</el-radio>
            <el-radio :label="1">未完成</el-radio>
            <br />
            <el-radio :label="2">未评价</el-radio>
            <el-radio :label="3">已完成</el-radio>
          </el-radio-group>
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
import dataOrder from "./dataOrder";
export default dataOrder;
</script>

<style scoped lang="scss">
@import "./dataOrder.scss";
</style>

<template>
  <div class="dataLink">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="线路编号" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.linkId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品编号" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.productId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="景点名" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.scenicName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="景点描述" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出发地" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.startSpot }}</span>
        </template>
      </el-table-column>
      <el-table-column label="路线" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.linkList }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.timeList }}</span>
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

    <el-dialog title="线路信息" :visible.sync="dialogFormVisible" center>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="width:400px; margin-left:100px"
      >
        <el-form-item label="线路编号" prop="orderId">
          <el-input placeholder="线路编号" v-model.number="ruleForm.linkId">
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
        <el-form-item label="出发地" prop="startSpot">
          <el-input placeholder="请输入出发地" v-model="ruleForm.startSpot">
          </el-input>
        </el-form-item>
        <el-form-item label="线路" prop="linkList">
          <el-input placeholder="请输入出发线路" v-model="ruleForm.linkList">
          </el-input>
        </el-form-item>
        <el-form-item label="时间" prop="timeList">
          <el-input placeholder="请输入时间列表" v-model="ruleForm.timeList">
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
import dataLink from "./dataLink";
export default dataLink;
</script>

<style scoped lang="scss">
@import "./dataLink.scss";
</style>

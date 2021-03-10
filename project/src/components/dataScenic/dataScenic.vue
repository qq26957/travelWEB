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
      <el-table-column label="线路编号" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.linkId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="满意度" width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.satisfaction }}</span>
        </template>
      </el-table-column>
      <el-table-column label="现在价格(元)" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.newPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="以往价格(元)" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.oldPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="儿童价格(元)" width="100">
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
        <el-form-item label="景点名" prop="scenicName">
          <el-input placeholder="请输入景点名" v-model="ruleForm.scenicName">
          </el-input>
        </el-form-item>
        <el-form-item label="产品名" prop="title">
          <el-input placeholder="请输入产品名" v-model.number="ruleForm.title">
          </el-input>
        </el-form-item>
        <el-form-item label="线路ID" prop="linkId">
          <el-input placeholder="请输入线路ID" v-model.number="ruleForm.linkId">
          </el-input>
        </el-form-item>
        <el-form-item label="满意度" prop="satisfaction">
          <el-input placeholder="请输入满意度" v-model="ruleForm.satisfaction">
          </el-input>
        </el-form-item>
        <el-form-item label="现在价格" prop="newPrice">
          <el-input
            placeholder="请输入目前所售价格"
            v-model="ruleForm.newPrice"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="以往价格" prop="oldPrice">
          <el-input placeholder="请输入以前的售价" v-model="ruleForm.oldPrice">
          </el-input>
        </el-form-item>
        <el-form-item label="儿童价格" prop="childPrice">
          <el-input placeholder="请输入儿童价格" v-model="ruleForm.childPrice">
          </el-input>
        </el-form-item>
        <el-form-item label="出发地" prop="startSpot">
          <el-input placeholder="请输入出发地" v-model="ruleForm.startSpot">
          </el-input>
        </el-form-item>
        <el-form-item label="特色" prop="features">
          <el-input placeholder="输入产品特色" v-model="ruleForm.features">
          </el-input>
        </el-form-item>
        <el-form-item label="产品描述" prop="destination">
          <el-input
            placeholder="输入产品的具体描述"
            v-model="ruleForm.destination"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="景点图片" prop="imgList">
          <el-upload
            class="upload-demo"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="ruleForm.fileList"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
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

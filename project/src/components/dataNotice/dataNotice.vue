<template>
  <div class="dataNotice">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="新闻资讯编号" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.newsId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="130">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="来源" width="130">
        <template slot-scope="scope">
          <span>{{ scope.row.source }}</span>
        </template>
      </el-table-column>
      <el-table-column label="作者" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="编辑" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.editor }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="内容"
        width="200"
        show-overflow-tooltip
        class-name="content"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="简写资讯" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.simplifyContent }}</span>
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

    <el-dialog title="公告资讯信息" :visible.sync="dialogFormVisible" center>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="130px"
        class="demo-ruleForm"
        style="width:400px; margin-left:100px"
      >
        <el-form-item label="公告资讯编号" prop="newsId">
          <el-input
            placeholder="请输入公告资讯编号"
            v-model.number="ruleForm.newsId"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input placeholder="请输入标题" v-model.number="ruleForm.title">
          </el-input>
        </el-form-item>
        <el-form-item label="发布时间" prop="time">
          <el-date-picker
            v-model="ruleForm.startTime"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="来源" prop="source">
          <el-input placeholder="请输入来源" v-model.number="ruleForm.source">
          </el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input placeholder="请输入作者" v-model="ruleForm.author">
          </el-input>
        </el-form-item>
        <el-form-item label="编辑" prop="editor">
          <el-input placeholder="请输入出发编辑" v-model="ruleForm.editor">
          </el-input>
        </el-form-item>
        <el-form-item label="正文内容" prop="content">
          <el-input placeholder="请输入正文内容" v-model="ruleForm.content">
          </el-input>
        </el-form-item>
        <el-form-item label="简写公告资讯" prop="simplifyContent">
          <el-input
            placeholder="请输入简写公告资讯"
            v-model="ruleForm.simplifyContent"
          >
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
import dataNotice from "./dataNotice";
export default dataNotice;
</script>

<style scoped lang="scss">
@import "./dataNotice.scss";
</style>

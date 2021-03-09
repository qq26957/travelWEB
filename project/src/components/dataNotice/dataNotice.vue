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
  </div>
</template>

<script>
import dataNotice from "./dataNotice";
export default dataNotice;
</script>

<style scoped lang="scss">
@import "./dataNotice.scss";
</style>

<template>
  <div class="dataEvalution">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
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
      <el-table-column label="出发时间" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime }}</span>
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
  </div>
</template>

<script>
import dataEvalution from "./dataEvalution";
export default dataEvalution;
</script>

<style lang="scss">
@import "./dataEvalution.scss";
</style>

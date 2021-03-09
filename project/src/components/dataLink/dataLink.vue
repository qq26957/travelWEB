<template>
  <div class="dataLink">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
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
  </div>
</template>

<script>
import dataLink from "./dataLink";
export default dataLink;
</script>

<style scoped lang="scss">
@import "./dataLink.scss";
</style>

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
      <el-table-column label="景点描述" width="160">
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
      <el-table-column label="景点介绍" width="180" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.destination }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" >
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
import dataScenic from "./dataScenic";
export default dataScenic;
</script>

<style scoped lang="scss">
@import "./dataScenic.scss";
</style>

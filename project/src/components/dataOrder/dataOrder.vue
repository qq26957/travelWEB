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
      <el-table-column label="订单总价" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.totalPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.state }}</span>
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
import dataOrder from "./dataOrder";
export default dataOrder;
</script>

<style scoped lang="scss">
@import "./dataOrder.scss";
</style>

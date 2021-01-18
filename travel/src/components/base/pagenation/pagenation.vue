<template>
  <div class="pagenation">
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="6"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import pagenation from "./pagenation";
export default pagenation
</script>

<style scoped lang="scss"></style>

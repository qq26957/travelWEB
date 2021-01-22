<template>
  <div class="sichuan">
    <scenery :dataList ="dataList"></scenery>
    <div class="content-pagenation">
      <pagenation
        :total="total"
        :page="page"
        :pageSize="pageSize"
        @changePage="changePage"
      ></pagenation>
    </div>
  </div>
</template>

<script>
import sichuan from './sichuan'
export default sichuan
</script>

<style scoped lang="scss">
@import"./sichuan.scss";
</style>

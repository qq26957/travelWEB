<template>
  <div class="chongqing">
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
import chongqing from './chongqing'
export default chongqing
</script>

<style scoped lang="scss">
@import"./chongqing.scss";
</style>

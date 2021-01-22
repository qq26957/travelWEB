<template>
  <div class="yunnan">
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
import yunnan from './yunnan'
export default yunnan
</script>

<style scoped lang="scss">
@import"./yunnan.scss";
</style>

export default{
    name:'hotel',
    data() {
        return {
            type:'single',
            total: 10,
            page: 1,
            pageSize: 6,
        }
    },
    created() {
        this.fetchData();
        this.cutDataList();
    },
    methods: {
        //切分数据
        cutDataList() {
          const length = Math.ceil(this.newsList.length / this.pageSize);
          for (var i = 0; i < length; i++) {
            this.pageList.push(this.newsList.splice(0, this.pageSize));
          }
          this.dataList = this.pageList[0];
          console.log(this.pageList, this.dataList);
        },
        //获取数据
        fetchData() {
          this.total = this.newsList.length;
        },
        //切换数据
        changePage(val) {
          console.log("1111111");
          this.dataList = this.pageList[val - 1];
          console.log(val);
        }
      }
}

export default{
    name:'hotel',
    components:{
      single,
      double,
      suite
    },
    data() {
        return {
            type:'single',
            total: 10,
            page: 1,
            pageSize: 6,
            hotelList:[],
            pageList:[]

        }
    },
    created() {
        this.fetchData();
        this.cutDataList();
    },
    methods: {
        //变换单选
        change(label){
          console.log(label);
        },
        //切分数据
        cutDataList() {
          const length = Math.ceil(this.hotelList.length / this.pageSize);
          for (var i = 0; i < length; i++) {
            this.pageList.push(this.hotelList.splice(0, this.pageSize));
          }
          this.dataList = this.pageList[0];
          console.log(this.pageList, this.dataList);
        },
        //获取数据
        fetchData() {
          this.total = this.hotelList.length;
        },
        //切换数据
        changePage(val) {
          this.dataList = this.pageList[val - 1];
          console.log(val);
        }
      }
}
let imgBaseUrl = "../static/img/themes/domestic/";
export default{
    name:'hotel',
    components:{
     
    },
    data() {
        return {
            type:'single',
            total: 10,
            page: 1,
            pageSize: 6,
            hotelList:[
              {
                id:'1',
                imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
                title:'双人间',
                content:'客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可',
                originalPrice: '180￥',
                presentPrice: '150￥'
              },
              {
                id:'1',
                imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
                title:'双人间',
                content:'客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可',
                price: '180￥'
              },
              {
                id:'1',
                imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
                title:'双人间',
                content:'客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可',
                price: '180￥'
              },
              {
                id:'1',
                imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
                title:'双人间',
                content:'客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可',
                price: '180￥'
              },
              {
                id:'1',
                imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
                title:'双人间',
                content:'客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可',
                price: '180￥'
              },
              {
                id:'1',
                imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
                title:'双人间',
                content:'客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可',
                price: '180￥'
              },
            ],
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
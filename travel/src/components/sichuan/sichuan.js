let imgBaseUrl = "../static/img/themes/domestic/";
import pagenation from "../base/pagenation/pagenation.vue";
import scenery from "../base/sceneryItem/sceneryItem.vue";
export default {
  name: "sichuan",
  components: {
    pagenation,
    scenery
  },
  data() {
    return {
      dataList: [
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "14000￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        },
        {
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          price: "1400￥",
          position: "四川",
          name: "四姑娘山",
          score: 4.5,
          time: "上午8:00 ~~ 下午18:00"
        }
      ],
      total: 10,
      page: 1,
      pageSize: 6,
      pageList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //切割数据
    cutDataList() {
      const length = Math.ceil(this.dataList.length / this.pageSize);
      for (var i = 0; i < length; i++) {
        this.pageList.push(this.dataList.splice(0, this.pageSize));
      }
      this.dataList = this.pageList[0];
    },
    //获取数据
    fetchData() {
      this.total = this.dataList.length;
      this.cutDataList();
    },
    //切换数据
    changePage(val) {
      this.dataList = this.pageList[val - 1];
    }
  }
};

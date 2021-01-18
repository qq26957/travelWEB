let imgBaseUrl = "../static/img/themes/domestic/";
import pagenation from "../base/pagenation/pagenation.vue";
export default {
  name: "domestic",
  components: {
    pagenation
  },
  data() {
    return {
      total: 10,
      page: 1,
      domesticList: [
        {
          id: '1',
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "四姑娘山2日半自助游",
          characteristic: "看雪山",
          linkId: "hk001",
          sales: "9999",
          satisfaction: "97%",
          score: "4.7",
          trip: "两日半自助游",
          originalPrice: "￥2096",
          presentPrice: "￥1099"
        },
        {
          id: '2',
          imgUrl: "xianggelila.jpg",
          title: "香格里拉",
          characteristic: "晚间篝火",
          linkId: "hk001",
          sales: "9999",
          Satisfaction: "97%",
          score: "4.7",
          trip: "两日半自助游",
          originalPrice: "￥2096",
          presentPrice: "￥1099"
        },
        {
          id: "3",
          imgUrl: "",
          title: "香港3日半自助游",
          characteristic: "港式早餐",
          linkId: "hk001",
          sales: "9999",
          Satisfaction: "97%",
          score: "4.7",
          trip: "两日半自助游",
          originalPrice: "￥2096",
          presentPrice: "￥1099"
        },
        {
            id: "4",
          imgUrl: "",
          title: "香港3日半自助游",
          characteristic: "港式早餐",
          linkId: "hk001",
          sales: "9999",
          Satisfaction: "97%",
          score: "4.7",
          trip: "两日半自助游",
          originalPrice: "￥2096",
          presentPrice: "￥1099"
        },
        {
            id: "5",
          imgUrl: "",
          title: "香港3日半自助游",
          characteristic: "港式早餐",
          linkId: "hk001",
          sales: "9999",
          Satisfaction: "97%",
          score: "4.7",
          trip: "两日半自助游",
          originalPrice: "￥2096",
          presentPrice: "￥1099"
        },
        {
            id: "6",
          imgUrl: "",
          title: "香港3日半自助游",
          characteristic: "港式早餐",
          linkId: "hk001",
          sales: "9999",
          Satisfaction: "97%",
          score: "4.7",
          trip: "两日半自助游",
          originalPrice: "￥2096",
          presentPrice: "￥1099"
        }
      ],
      pageList: [],
      dataList: [],
      flag: true
    };
  },
  created() {
    this.fetchData();
    this.cutDataList();
  },
  methods: {
    //切分数据
    cutDataList() {
      const length = Math.ceil(this.domesticList.length / 6);
      for (var i = 0; i < length; i++) {
        this.pageList.push(this.domesticList.splice(0, 6));
      }
      this.dataList = this.pageList[0];
      console.log(this.pageList, this.dataList);
    },
    //获取数据
    fetchData() {
      this.total = this.domesticList.length;
    },
    //切换数据
    changePage(val) {
      this.dataList = this.pageList[val - 1];
    }
  }
};

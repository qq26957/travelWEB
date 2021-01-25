let imgBaseUrl = "../static/img/themes/domestic/";
export default {
  name: "hotAttractions",
  components: {

  },
  
  data() {
    return {
      spotName:"四川",
      datas: {
            title:'【徒步雨崩】游侠客高海拔徒步TOP1，朝圣梅里雪山，徒步雨崩村-冰湖-神瀑，5/7日轻装徒步之旅（免费借用登山杖、颁发纪念奖牌、全程标间独卫）请携带冰爪和核酸报告',
            imgUrl : [
              `${imgBaseUrl}1.jpg`, `${imgBaseUrl}1.jpg`, `${imgBaseUrl}1.jpg`
            ],
            id:"s5431",
            price: "￥3600",
            score: 4.8,
            startSpot: "成都"
          } 
    };
  },
  created() {
   console.log('进入详情页面');
  },
  watch: {
    $route: {
      handler(val, oldval) {
        this.spot = val.path.slice(5);
      },
      // 深度观察监听
      deep: true
    },
    spot () {
      switch (this.spot) {
        case "sichuan":
          this.spotName = "四川";
          break;
        case "chongqing":
          this.spotName = "重庆";
          break;
        case "yunnan":
          this.spotName = "云南";
          break;
      }
    }
  },
  mounted() {
   
  },
  methods: {
    //变换单选
    changelabel(label) {
      this.$router.push(`/attractions/${label}`);
    },
    //获取数据
    fetchData() {},

    // 初始化路由
    initRouter() {
      this.spot = this.$route.path.slice(5);
    }
  }
};

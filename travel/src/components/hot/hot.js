let imgBaseUrl = "../static/img/themes/domestic/";
import sichuan from "../sichuan/sichuan.vue";
import yunnan from "../yunnan/yunnan.vue";
import chongqing from "../chongqing/chongqing.vue";
import pagenation from "../base/pagenation/pagenation.vue";
export default {
  name: "hot",
  components: {
    pagenation,
    chongqing,
    sichuan,
    yunnan
  },
  data() {
    return {
      spot: "sichuan",
      spotName: "四川"
    };
  },
  created() {
    this.fetchData();
    this.initRouter();
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
    this.initRouter();
  },
  methods: {
    //变换单选
    changelabel(label) {
      this.$router.push(`/hot/${label}`);
    },
    //获取数据
    fetchData() {},

    // 初始化路由
    initRouter() {
      this.spot = this.$route.path.slice(5);
    }
  }
};

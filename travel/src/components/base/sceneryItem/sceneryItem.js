export default {
  name: "sceneryItem",
  props: {
    dataList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    toSpot(val) {
      this.$router.push("/hotAttractions");
    },
    //进入景点具体页面
    toDestinations(val) {
      this.$router.push("/hotAttractions");
    }
  }
};

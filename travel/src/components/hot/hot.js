let imgBaseUrl = "../static/img/themes/domestic/";
import sichuan from "../sichuan/sichuan.vue"
import yunnan from "../yunnan/yunnan.vue"
import chongqing from "../chongqing/chongqing.vue"
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
    };
  },
  created() {
    this.fetchData();
  },
  watch:{
    $route:{
        handler(val,oldval){
            switch(val){
                case "/hot/sichuan": this.spot = "sichuan"; break;
                case "/hot/chongqing":this.spot = "chongqing"; break;
                case "/hot/yunnan": this.spot = "yunnan";break;
            }
            console.log(val ,this.spot);
            
        },
        // 深度观察监听
        deep: true
      }
  },
  methods: {
    //变换单选
    changelabel(label) {
        switch (label){
            case 'sichuan': this.$router.push("/hot/sichuan") ; break; 
            case 'chongqing': this.$router.push("/hot/chongqing"); break;
            case 'yunnan': this.$router.push("/hot/yunnan");break;
        }
    },
    //获取数据
    fetchData() {
    
    },
    //切换路由
    // change(val){
    //     switch(val){
    //         case 1 :this.spot = "sichuan"; break;
    //         case 2 :this.spot = "yunnan"; break;
    //         case 3 :this.spot = "chongqing";break;
    //     }
    //     console.log(val ,this.spot) ;
    // }
    
  }
  
};

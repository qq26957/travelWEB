let imgBaseUrl = "../static/img/home/";
export default {
  name: "home",
  data() {
    return {
      imgList: [
        { imgUrl: `${imgBaseUrl}1.jpg`, name: "home1", id: 1 },
        { imgUrl: `${imgBaseUrl}2.jpg`, name: "home2", id: 2 },
        { imgUrl: `${imgBaseUrl}3.jpg`, name: "home3", id: 3 }
      ],
      hotList:[
        {imgUrl:`${imgBaseUrl}leshandafo.jpg`,name:"乐山大佛",english:"Buddha",id:1},
        {imgUrl:`${imgBaseUrl}jiuzhaigou.jpg`,name:"九寨沟",english:"Jiuzhaigou",id:2},
        {imgUrl:`${imgBaseUrl}hailuogou.jpg`,name:"海螺沟",english:"Conch'sditch",id:3},
        {imgUrl:`${imgBaseUrl}yulongxueshan.jpg`,name:"玉龙雪山",english:"Snow Moutain",id:4},
        {imgUrl:`${imgBaseUrl}daligucheng.jpg`,name:"大理古城",english:"Dali",lid:5},
        {imgUrl:`${imgBaseUrl}erhai.jpg`,name:"洱海",english:"Erhai Laki",id:6}     
      ],
      recommendedList:[
        {imgUrl: `${imgBaseUrl}siguniangshan.jpg`,name:"四姑娘山",english:"Four girl mountain",flag:false,id:1},
        {imgUrl: `${imgBaseUrl}hongyadong.jpg`,name:"洪崖洞",english:"HongYa hole",flag:false,id:2},
        {imgUrl: `${imgBaseUrl}xianggelila.jpg`,name:"香格里拉",english:"Shangri-la",flag:false,id:3},
        {imgUrl: `${imgBaseUrl}fushishan.jpg`,name:"富士山",english:"Mount Fuji",flag:false,id:4},
      ], 
      newsList:[
        {imgUrl: `${imgBaseUrl}3.jpg`, name: "home1", id: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {imgUrl: `${imgBaseUrl}3.jpg`, name: "home2", id: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {imgUrl: `${imgBaseUrl}3.jpg`, name: "home3", id: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {imgUrl: `${imgBaseUrl}3.jpg`, name: "home4", id: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {imgUrl: `${imgBaseUrl}3.jpg`, name: "home5", id: 3 ,title:"题目",text:"text",time:"2021-1-13"}
      ],
      jiantou:`${imgBaseUrl}jiantouh.png`,
      currentNum: 1,
      themeTitleFlag:false,
      themeFlag: true,
      wxFlag: false,
      hotFlag:false,
      aboutFlag: false,
      newsFlag: false,
      //登录标注
      loginFlag:false,
    };
  },
  computed:{
    
  },
  created() {
    this.checkLogin();
  },
  mounted() {
      window.addEventListener('scroll',this.watchScroll);
  },
  methods: {
    //监听屏幕滚动
    watchScroll(){
      if(window.pageYOffset > 200){
        this.hotFlag = true;
      }
      if(window.pageYOffset > 850){
        this.aboutFlag = true;
      }
      if(window.pageYOffset >1900){
        this.themeTitleFlag = true;
      }
      if(window.pageYOffset > 5400){
        this.newsFlag = true;
      }
    },
    swiperChange(pre){
      this.currentNum = pre+1;
    },
    hover(){
      this.jiantou = `${imgBaseUrl}jiantou.png`;
    },
    leave(){
      this.jiantou = `${imgBaseUrl}jiantouh.png`;
      console.log("leave");
    },
    changeFlagE(index){
      this.recommendedList[index].flag = true;
    },
    changeFlagL(index){
      this.recommendedList[index].flag = false;
    },
    //切换到热门景点
    toDestinations(val){
        this.$router.push("/hotAttractions");
    },
    //显示微信图标
    weichartShow(){
      this.wxFlag = !this.wxFlag;
    },
    //置顶
    toTop(){
      this.$nextTick(() => {
        window.scrollTo(0,0);
        })
    },
    //查看新闻具体信息
    toNewsDetails(val){
      this.$router.push(`/newsDetails?index=${val}`);
    },
    //进入登录界面
    toLogin(){
      this.$router.push('/login');
    },
    //验证是否登录
    checkLogin(){
      let flag =  Boolean(window.sessionStorage.getItem("loginFlag"));
        this.loginFlag = flag;
     console.log(typeof(flag));
     },
     //跳转到个人中心
     toPersonal(){
      this.$router.push("/personal");
     }
  },
};

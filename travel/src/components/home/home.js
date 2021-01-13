let imgBaseUrl = "../static/img/";
export default {
  name: "home",
  data() {
    return {
      imgList: [
        { url: `${imgBaseUrl}1.jpg`, name: "home1", index: 1 },
        { url: `${imgBaseUrl}2.jpg`, name: "home2", index: 2 },
        { url: `${imgBaseUrl}3.jpg`, name: "home3", index: 3 }
      ],
      hotList:[
        {url:`${imgBaseUrl}leshandafo.jpg`,name:"乐山大佛",english:"Buddha",index:1},
        {url:`${imgBaseUrl}jiuzhaigou.jpg`,name:"九寨沟",english:"Jiuzhaigou",index:2},
        {url:`${imgBaseUrl}hailuogou.jpg`,name:"海螺沟",english:"Conch'sditch",index:3},
        {url:`${imgBaseUrl}yulongxueshan.jpg`,name:"玉龙雪山",english:"Snow Moutain",index:4},
        {url:`${imgBaseUrl}daligucheng.jpg`,name:"大理古城",english:"Dali",dalindex:5},
        {url:`${imgBaseUrl}erhai.jpg`,name:"洱海",english:"Erhai Laki",index:6}     
      ],
      recommendedList:[
        {imgUrl: `${imgBaseUrl}siguniangshan.jpg`,text:"四姑娘山",english:"Four girl mountain",flag:false,index:1},
        {imgUrl: `${imgBaseUrl}hongyadong.jpg`,text:"洪崖洞",english:"HongYa hole",flag:false,index:2},
        {imgUrl: `${imgBaseUrl}xinaggelila.jpg`,text:"香格里拉",english:"Shangri-la",flag:false,index:3},
        {imgUrl: `${imgBaseUrl}fushishan.jpg`,text:"富士山",english:"Mount Fuji",flag:false,index:4},
      ],
      newsList:[
        {url: `${imgBaseUrl}3.jpg`, name: "home1", index: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {url: `${imgBaseUrl}3.jpg`, name: "home2", index: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {url: `${imgBaseUrl}3.jpg`, name: "home3", index: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {url: `${imgBaseUrl}3.jpg`, name: "home4", index: 3 ,title:"题目",text:"text",time:"2021-1-13"},
        {url: `${imgBaseUrl}3.jpg`, name: "home5", index: 3 ,title:"题目",text:"text",time:"2021-1-13"}
      ],
      jiantou:`${imgBaseUrl}jiantouh.png`,
      currentNum: 1,
      themeFlag: true,
    };
  },
  computed:{
 
  },
  methods: {
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
    }
  },
};

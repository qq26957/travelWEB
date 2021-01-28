let imgBaseUrl = "../static/img/themes/domestic/";
import pagenation from "../base/pagenation/pagenation.vue";
export default {
  name: "hotel",
  components: {
    pagenation
  },
  data() {
    return {
      type: "single",
      singlePage: {
        total: 10,
        page: 1,
        pageSize: 6
      },
      doublePage: {
        total: 10,
        page: 1,
        pageSize: 6
      },
      suitePage: {
        total: 10,
        page: 1,
        pageSize: 6
      },
      singleList: [
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可花费巨大和判断回复拉萨大家回复楼上的回复sa发士大夫ddd",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        }
      ],
      singlePageList: [],
      doubleList: [
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可花费巨大和判断回复拉萨大家回复楼上的回复sa发士大夫ddd",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        },
        {
          id: "1",
          imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
          title: "双人间",
          content:
            "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
          originalPrice: "180￥",
          presentPrice: "150￥"
        }
      ],
      doublePageList: [],
      suiteList: [    {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
        originalPrice: "180￥",
        presentPrice: "150￥"
      },
      {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可花费巨大和判断回复拉萨大家回复楼上的回复sa发士大夫ddd",
        originalPrice: "180￥",
        presentPrice: "150￥"
      },
      {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
        originalPrice: "180￥",
        presentPrice: "150￥"
      },
      {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
        originalPrice: "180￥",
        presentPrice: "150￥"
      },
      {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
        originalPrice: "180￥",
        presentPrice: "150￥"
      },
      {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
        originalPrice: "180￥",
        presentPrice: "150￥"
      },
      {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
        originalPrice: "180￥",
        presentPrice: "150￥"
      },
      {
        id: "1",
        imgUrl: `${imgBaseUrl}siguniangshan.jpg`,
        title: "双人间",
        content:
          "客房设有带浴缸和吹风机的连接浴室、沏茶/咖啡设施、保险箱和熨烫设施。 酒店的客人可享受免费停车优待。旅游咨询台可",
        originalPrice: "180￥",
        presentPrice: "150￥"
      }],
      suitePageList: [],
      titleFlag: false,
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.addEventListener('scroll',this.animationIn)
  },
  methods: {
    //标题动画进入
    animationIn(){
      if(window.pageYOffset > 250){
        this.titleFlag = true;
      }
    },
    //变换单选
    change(label) {
      console.log(label);
    },
    cutAllList() {
      this.cutDataList(this.singleList, this.singlePageList, this.singlePage);
      this.cutDataList(this.doubleList, this.doublePageList, this.doublePage);
      this.cutDataList(this.suiteList, this.suitePageList, this.suitePage);

    },

    //切分数据
    cutDataList(list, pageList, type) {
      
      const length = Math.ceil(list.length / type.pageSize);
      for (var i = 0; i < length; i++) {
        pageList.push(list.splice(0, type.pageSize));
      }  
    },
    //获取数据
    fetchData() {
      this.singlePage.total = this.singleList.length;
      this.doublePage.total = this.doubleList.length;
      this.suitePage.total = this.suiteList.length;
      this.cutAllList();
      console.log(this.singlePageList,this.singleList);
      this.singleList = this.singlePageList[0];
      this.doubleList = this.doublePageList[0];
      this.suiteList = this.suitePageList[0];
      console.log(this.singlePageList,this.singleList);

    },

    //双人房切换数据
    doubleChangePage(val) {
      this.doubleList = this.doublePageList[val - 1];
      console.log(val);
    },
    //单人房切换数据
    singleChangePage(val) {
      this.singleList = this.singlePageList[val - 1];
      console.log(val);
    },
    //套房切换数据
    suiteChangePage(val) {
      this.suiteList = this.suitePageList[val - 1];
      console.log(val);
    }
  }
};

let imgBaseUrl = "../static/img/hotAttractions/";
export default {
  name: "hotAttractions",
  components: {},

  data() {
    return {
      numbers: 1,
      spotName: "四川",
      activeName: "zero",
      datas: {
        title: `四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点`,
        imgUrl: [
          `${imgBaseUrl}siguniangshan/show/s1.jpg`,
          `${imgBaseUrl}siguniangshan/show/s2.jpg`,
          `${imgBaseUrl}siguniangshan/show/s3.jpg`
        ],
        id: "s5431",
        price: "￥3600",
        score: 4.8,
        startSpot: "成都",
        destination: `四姑娘山位于阿坝州小金县日隆镇境内，由四座连绵不断的山峰组成。四座山峰长年冰雪覆盖，犹如头披白纱姿容俊俏的四位少女，依次屹立在长坪沟和海子沟两道银河之上，四姑娘山由此得名。在距离日隆镇约20分钟车程的猫鼻梁，路边可看到四姑娘山四峰相连的壮丽景色，是拍照取景的好地方。
        四姑娘山景区由四座雪峰和双桥沟、长坪沟和海子沟三条沟组成，每沟单独售票。如果想全盘体验，至少需要3天时间（每条沟一天）。当然，如果时间有限，建议选择长坪沟和海子沟，因为双桥沟里是看不到四姑娘山的。纯粹的户外爱好者会选择徒步穿越并在沟内宿营，也是一个不错的选择，不过需严格遵守景区关于户外活动的规定。`,
        destinationList: [
          `${imgBaseUrl}1.jpg`,
          `${imgBaseUrl}1.jpg`,
          `${imgBaseUrl}1.jpg`
        ],
        trip: [
          {
            time: "第一天早上06:30",
            things:
              "早上07:00统一集合出发,导游将提前一天以短信和电话的方式通知出团时间、车牌号、集合地点！请保持手机通讯畅通，以免延误行程。行驶：约20千米/约20分钟活动时间：约10分钟"
          },
          {
            time: "第一天07:00",
            things:
              "上午经都江堰，沿都汶高速经映秀、卧龙自然保护区，穿过刚刚通车的巴朗山隧道抵达四姑娘山镇.12：00左右到达四姑娘山镇，行驶：约240千米/约3小时20分钟"
          },
          {
            time: "第一天中午12：00",
            things:
              "午餐成人：含餐 儿童：含餐 ,四姑娘山用午餐,行驶：约20千米/约20分钟,用餐时间：约40分钟"
          },
          {
            time: "第一天下午13:00",
            things:
              "景点前往：长坪沟4.6/5,长坪沟全长约29公里，峡谷幽长，四姑娘山高峰－么妹峰，就坐落于此。沟内主要景点有樟木寨、喇嘛寺、甘海子和红石滩等。"
          },
          {
            time: "第一天下午",
            things:
              "自由活动 ，  温馨提示：备注：长坪沟全长29公里，一般游玩前面10公里，游玩时间一般为4-5小时左右。里面可以步行，也可以选择租骑当地马匹（骑马费为：100—300，客人自行选择）（请注意安全，一定要到马匹公司租用含保的马匹，不得在外面私自租用没有保的马匹）；户外游览时间较长，日照充足，紫外线较强，请备好太阳镜，太阳伞、防晒霜等物品；请遵守景区管理制度，禁止抽烟、乱丢垃圾，违者罚款500元起，四姑娘山景区海拔2500-3800米，游览时请选择从海拔高的景点往下步行，不要做剧烈运动，以免高原反应；景区内自行游览，需与导游落实好出景区统一集合时间或出景区后自行打车回酒店。"
          },
          {
            time: "第二天07:00",
            things: `前往：双桥沟4.5/5， 双桥沟得名缘于沟内的两座木桥。沟内主要以雪峰、牧场、草地、森林等为主，是四姑娘山较美丽的一条沟。漫步沟内，可体验到真正的牧区风光。主要景点有阴阳谷、猎人峰、日月宝镜和五色山等。自费活动：景区小交通观光车
            参考价格：CNY70
            之后后游览【双桥沟】（双沟沟观光车 70 自理），（双桥沟全程 34 公里；乘观光 车游玩，在景点有车站，需到站上下车，每辆观光车上均有讲解导游,因每位游客在每个景点停留 的时间不一样，很容易走散，故在景区内导游不可能陪到每一位游客，请各位游客理解！）双桥沟 沟内主要以雪峰、牧场、草地、森林等为主。漫步沟内，可体验到真 正的牧区风光。主要景点有阴阳谷、猎人峰、日月宝镜和五色山沙棘林道、牛棚子、牛心山等景点 等。游览时间约 3-4 小时，12:00沟口统一集合`
          },
          {
            time: "第二天12:00",
            things: `成人：含餐 儿童：含餐
            团餐
            行驶：约20千米/约30分钟
            用餐时间：约1小时`
          },
          {
            time: "第二天下午13：00",
            things: `前往：猫鼻梁4.4/5
            猫鼻梁位于阿坝藏族羌族自治州小金县303省道附近，是巴郎山至日隆的必经之地，观四姑娘山全貌和日出、日落的好位置。在猫鼻梁远眺，前面是海子沟，后面是四姑娘山，风景十分震撼。
          前往【猫鼻梁】观四姑娘山四大主峰全景，这里是观赏拍摄四姑娘山全景的很不错的位置，利用柔和的光线，尽情留影20分钟左右
            活动时间：约20分钟`
          },
          {
            time: "下午",
            things: `景点
            前往：卧龙自然与地震博物馆4.0/5
            前往卧龙自然与地震博物馆游览约40分钟后经映秀返回成都。
            活动时间：约40分钟`
          }
        ],
        cost: [{ imgUrl: `${imgBaseUrl}siguniangshan/cost/cost.png` }],
        evaluation: {
          total: {
            satisfied: 1000,
            commonly: 30,
            bad: 5,

            traffic: 4.8,
            hotel: 4.8,
            play: 4.7
          },
          single: [
            {
              user: {
                name: "张三",
                headerImg: `${imgBaseUrl}1.jpg`,
                time: "2020-12-29"
              },
              score: {
                traffic: 4.5,
                hotel: 5,
                play: 5
              },
              content:
                "主峰海拔6000多米，距离成都只要200公里，可以说是分分钟可以穿越到“小瑞士”“东方阿尔卑斯”了。趁周末自驾自驾前往，吸吸氧，吃吃纯正的牦牛肉，撸撸高山羊肉串，户外徒步或者山下小溪边露个营，简直不能太治愈。 🏔景点：四姑娘山主要分【长坪沟】【双桥沟】和【海子沟】。其中推荐双桥沟 📍地点：小金县和四姑娘山镇都是不错的落脚点，可直接导航前往。 🕐时间：建议周末两天一夜，轻松不累 价格： ☝ 旺季（每年4月1日至11月30日止） 双桥沟80元/人 长坪沟70元/人 海子沟60元/人 ✌淡季（每年12月1日至次年3月30日止） 双桥沟50元/人长坪沟50元/人 海子沟40元/人 （观光车票：双桥沟80元/人 长坪沟30元/人） 🌟🌟怎么玩： 👍【双桥沟】统一大巴，全程5个景点，到一个景点下车观光，然后上车前往下一个。沿途就已经很美了，每个景点都是拍照发呆的好地方。 👍【长坪沟】有一大段步行栈道，更加适合徒步爱好者，也可以骑马。 ⚠️注意事项⚠️ 1⃣天气不好不建议前往，川西随便一个泥石流塌方之类的就可以把你困一个星期‼️ 2⃣一定要带厚衣服‼️ 3⃣自驾前往一定要注意路况！小心落石‼️ 4⃣高反严重的朋友慎重‼️（其实也不是很高3000多米的样子） ———————— About me： 【重庆】出生， 【澳洲】长大， 【上海】户口， 【佛山】定居， 【成都】工作 的建筑设计🐶。 欢迎关注交流哈！"
            },
            {
              user: {
                name: "张三",
                headerImg: `${imgBaseUrl}1.jpg`,
                time: "2020-12-29"
              },
              score: {
                traffic: 4.5,
                hotel: 5,
                play: 5
              },
              content:
                "主峰海拔6000多米，距离成都只要200公里，可以说是分分钟可以穿越到“小瑞士”“东方阿尔卑斯”了。趁周末自驾自驾前往，吸吸氧，吃吃纯正的牦牛肉，撸撸高山羊肉串，户外徒步或者山下小溪边露个营，简直不能太治愈。 🏔景点：四姑娘山主要分【长坪沟】【双桥沟】和【海子沟】。其中推荐双桥沟 📍地点：小金县和四姑娘山镇都是不错的落脚点，可直接导航前往。 🕐时间：建议周末两天一夜，轻松不累 价格： ☝ 旺季（每年4月1日至11月30日止） 双桥沟80元/人 长坪沟70元/人 海子沟60元/人 ✌淡季（每年12月1日至次年3月30日止） 双桥沟50元/人长坪沟50元/人 海子沟40元/人 （观光车票：双桥沟80元/人 长坪沟30元/人） 🌟🌟怎么玩： 👍【双桥沟】统一大巴，全程5个景点，到一个景点下车观光，然后上车前往下一个。沿途就已经很美了，每个景点都是拍照发呆的好地方。 👍【长坪沟】有一大段步行栈道，更加适合徒步爱好者，也可以骑马。 ⚠️注意事项⚠️ 1⃣天气不好不建议前往，川西随便一个泥石流塌方之类的就可以把你困一个星期‼️ 2⃣一定要带厚衣服‼️ 3⃣自驾前往一定要注意路况！小心落石‼️ 4⃣高反严重的朋友慎重‼️（其实也不是很高3000多米的样子） ———————— About me： 【重庆】出生， 【澳洲】长大， 【上海】户口， 【佛山】定居， 【成都】工作 的建筑设计🐶。 欢迎关注交流哈！"
            }
          ]
        }
      },
      purchaseInformation: {
        imgUrl: [
          `${imgBaseUrl}perchaseInformations/p3.png`,
          `${imgBaseUrl}perchaseInformations/p4.png`,
          `${imgBaseUrl}perchaseInformations/p5.png`,
          `${imgBaseUrl}perchaseInformations/p6.png`,
          `${imgBaseUrl}perchaseInformations/p7.png`
        ]
      },
      refundProtection: {
        imgUrl: [`${imgBaseUrl}refundProtection/p1.png`]
      },
      totalSatisfaction: {
        satisfied: 0,
        commonly: 0,
        bad: 0,
        total: 0,
        goodRate: 0
      },
      currentImg: 1
    };
  },
  created() {
    this.changeEvaluation();
    console.log("进入详情页面");
  },
  watch: {
    $route: {
      handler(val, oldval) {
        this.spot = val.path.slice(5);
      },
      // 深度观察监听
      deep: true
    },
    spot() {
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
  mounted() {},
  methods: {
    //总评价数据切换
    changeEvaluation() {
      const totalNum =
        this.datas.evaluation.total.satisfied +
        this.datas.evaluation.total.commonly +
        this.datas.evaluation.total.bad;
      this.totalSatisfaction.satisfied =
        ((this.datas.evaluation.total.satisfied / totalNum) * 100).toFixed(2) *
        1;
      this.totalSatisfaction.commonly =
        ((this.datas.evaluation.total.commonly / totalNum) * 100).toFixed(2) *
        1;
      this.totalSatisfaction.bad =
        ((this.datas.evaluation.total.bad / totalNum) * 100).toFixed(2) * 1;
      this.totalSatisfaction.total = totalNum;
      this.totalSatisfaction.goodRate = (
        (this.datas.evaluation.total.satisfied / totalNum) *
        100
      ).toFixed(1);
    },
    //变换单选
    changelabel(label) {
      this.$router.push(`/attractions/${label}`);
    },
    //获取数据
    fetchData() {},
    //跳转到订单信息列表
    toOrders() {
      this.$router.push({
        path: `/orders`,
        query: {
          id: this.datas.id,
          title: this.datas.title,
          startSpot: this.datas.startSpot
        }
      });
    },

    // 初始化路由
    initRouter() {
      this.spot = this.$route.path.slice(5);
    },
    handleClick() {},
    changeImg(val, pre) {
      this.currentImg = val;
      this.$refs.carousel.setActiveItem(val);
    }
  }
};

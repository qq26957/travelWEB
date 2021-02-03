export default {
  name: "personal",
  data() {
    return {
      notTrip: [
        {
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      selectNotTrip: [],
      unpaid: [
        {
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      notEvaluated: [
        {
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      Completed: [
        {
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      headerImg: "",
      personalMessage: {
        phone: "13778129834",
        email: "24587924@qq.com",
        nickname: "小区吧主",
        name: "张三",
        gender: "男",
        birth: "1997-11-11"
      },
      isEdit: false,
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/png" || file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG/SVG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    changeEidt(){
        this.isEdit = !this.isEdit;
    }
  }
};

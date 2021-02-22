export default {
  name: "personal",
  data() {
    return {
      notTrip: [
        {
          productNumber: "sj123123",
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          productNumber: "sd123123",
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          productNumber: "sd12331",
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          productNumber: "sd546456",
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      selectNotTrip: [],
      unpaid: [
        {
          productNumber: "sd546456",
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          productNumber: "sd536456",
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      notEvaluated: [
        {
          productNumber: "sd546456",
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          productNumber: "sd546456",
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      Completed: [
        {
          productNumber: "sd546456",
          orderId: 300300300,
          title:
            "四姑娘山2日1晚跟团游:【指定住三钻酒店—云天度假酒店·拒绝入住脏乱差的农家乐】【长坪沟+双桥沟+猫鼻梁观景台 一次游玩 不留遗憾】【100%真纯玩，坚决不进任何寨子以及隐形店】三环内接至集合地点",
          startTime: "2021-2-09",
          price: "3400"
        },
        {
          productNumber: "sd546456",
          orderId: 300300300,
          title: "四姑娘山旅游",
          startTime: "2021-2-09",
          price: "3400"
        }
      ],
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      headerImg: "",
      ruleForm: {},
      personalMessage: {
        phone: "13778129834",
        email: "24587924@qq.com",
        nickname: "小区吧主",
        name: "张三",
        gender: "",
        birth: ""
      },
      isEdit: true,
      rules: {
        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          {
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: "请输入正确的邮箱",
            trigger: "blur"
          }
        ],
        nickname: [
          {
            required: true,
            message: "昵称不能为空",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            message: "姓名不能为空",
            trigger: "blur"
          }
        ],
        gender: [
          {
            required: true,
            message: "性别不能为空",
            trigger: "blur"
          }
        ],
        birth: [
          {
            required: true,
            message: "生日不能为空",
            trigger: "blur"
          }
        ]
      },
      dialogFormVisible:false,
      evaluteForm:{
        traffic: 4.5,
        hotel: 4.6,
        play: 5,
        text: ""
      }
    };
  },
  created() {
    this.ruleForm = this.personalMessage;
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.headerImg = URL.createObjectURL(file.raw);
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
    //转到个人信息编辑
    changeEidt() {
      this.isEdit = false;
    },
    //个人信息提交表单
    submitForm() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.isEdit = true;
        this.$message({
          type: "success",
          message: "成功提交信息变更!"
        })
      }, 1000);
    }
    ,
    //tab切换
    changeTab(activeName, oldActiveName) {
      if (oldActiveName == "5") {
        this.isEdit = true;
      }
    },
    //删除订单
    removeOrder(val) {
      this.$confirm("此操作将永久删除该订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //查看订单
    watchOrder(val) {},
    //评价订单
    evaluateOrder(val) {
      this.dialogFormVisible = true;
    },
    //支付订单
    payOrder(val) {
      this.$alert(
        `<strong>请使用支付宝或者微信扫描下面二维码完成支付</strong>
        <div><img src="/static/img/personal/pay.png" style="width:200px;height:230px; margin: 30px 100px;" alt="支付二维码"></div>
        `,
        "支付",
        {
          dangerouslyUseHTMLString: true,
          showCancelButton: true
        }
      ).then(() => {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.$message({
            type: 'success',
            message: '支付成功'
          });
          
        }, 1500);


      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消支付'
        });
      });;
    },
    //提交订单评价
    postEvalute(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.$message({
          type: 'success',
          message: '您已成功提交评价'
        });
        this.dialogFormVisible = false;
      }, 1500);
    },
    //退出登录
    logout(){
      this.$confirm('您即将退出账号登录', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '注销成功!'
        });
        this.$router.go("/");
        window.sessionStorage.setItem('loginFlag', false);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        });          
      });
    }
  }
};

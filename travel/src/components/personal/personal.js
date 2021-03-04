export default {
  name: "personal",
  data() {
    var passCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passwordForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
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
      passwordForm: {
        prePass: "",
        pass: "",
        checkPass: ""
      },
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      headerImg: "",
      ruleForm: {},
      passRules: {
        prePass: [
          {
            required: true,
            message: "原密码不能为空",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z]\w{5,12}$/,
            message: "请输入正确格式的原密码，6-12位字符且以字母开头",
            trigger: "blur"
          }
        ],
        pass: [
          {
            required: true,
            message: "新设置密码不能为空",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z]\w{5,12}$/,
            message: "请输入正确格式的密码，6-12位字符且以字母开头",
            trigger: "blur"
          }
        ],
        checkPass: [{ validator: passCheck, trigger: "blur" }]
      },
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
      dialogFormVisible: false,
      evaluteForm: {
        traffic: 4.5,
        hotel: 4.6,
        play: 5,
        text: ""
      }
    };
  },
  created() {
    this.ruleForm = this.personalMessage;
    // this.getHeaderImg();
  },
  methods: {
    // //获取当前得头像信息
    // getHeaderImg() {
    //   this.axios
    //     .post("/api/hello/getpic", {}, { responseType: "blob" })
    //     .then(res => {
    //       const data = res.data;
    //       const blob = new Blob([data], { type: "application/zip" });
    //       let url = window.URL || window.webkitURL || window.moxURL;
    //       this.headerImg = url.createObjectURL(blob);
    //     });
    // },
    //上传成功
    handleAvatarSuccess(res, file) {
      this.headerImg = URL.createObjectURL(file.raw);
      this.$message({
        message: "图片已经成功上传，验证通过后即可使用",
        type: "success"
      });
    },
    //上传失败
    handleAvatarError() {
      this.$message({
        message: "图片上传失败，请稍后重试",
        type: "error"
      });
    },
    //上传验证
    beforeAvatarUpload(file) {
      console.log(file);
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
    //添加文件
    handlePreview(file) {
      console.log(file);
      const isJPG =
        file.raw.type === "image/png" || file.raw.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG/SVG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (isJPG && isLt2M) {
        console.log(true);
        this.headerImg = URL.createObjectURL(file.raw);
      }
    },
    //上传文件
    submitUpload() {
      this.$refs.upload.submit();
    },
    //转到个人信息编辑
    changeEidt() {
      this.isEdit = false;
    },
    //个人信息提交表单
    submitForm() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.isEdit = true;
        this.$message({
          type: "success",
          message: "成功提交信息变更!"
        });
      }, 1000);
    },
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
    watchOrder(val) {
      console.log("进入了"+val);
    },
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
      )
        .then(() => {
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          setTimeout(() => {
            loading.close();
            this.$message({
              type: "success",
              message: "支付成功"
            });
          }, 1500);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消支付"
          });
        });
    },
    //提交订单评价
    postEvalute() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.$message({
          type: "success",
          message: "您已成功提交评价"
        });
        this.dialogFormVisible = false;
      }, 1500);
    },

    //更改密码提交
    passwordChange() {
      console.log("密码提交");
      this.axios.post("", { pass: this.passwordForm.pass }).then(data => {
        console.log(data);
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          loading.close();
          this.$message({
            type: "success",
            message: "您已成功更改了密码"
          });
          this.dialogFormVisible = false;
        }, 1500);
      }).catch((err)=>{
        this.$message={
          message:"抱歉系统错误，密码更改未成功，请稍后尝试",
          type:"warning"
        }
      });
    },

    //清空密码框

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //退出登录
    logout() {
      this.$confirm("您即将退出账号登录", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "注销成功!"
          });
          this.$router.go("/");
          window.sessionStorage.setItem("loginFlag", false);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};

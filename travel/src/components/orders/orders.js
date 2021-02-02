let imgBaseUrl = "../static/img/orders/";
export default {
  name: "orders",
  data() {
    return {
      ordersContent: "",
      flag: true,
      num1: 1,
      num2: 0,
      time: "",
      title: "",
      id: "",
      startSpot: "",
      ruleForm2: {
        name: "",
        phone: "",
        email: ""
      },
      ruleForm1: {
        time: ""
      },
      ruleForm3: {
        name: "",
        phone: "",
        IDcard: ""
      },
      rules2: {
        name: [
          {
            required: true,
            message: "姓名不能为空",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "电话不能为空"
          },
          {
            type: "number",
            message: "请输入11位手机号"
          },
          {
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
            message: "请输入11位手机号码",
            trigger: "blur"
          }
        ],
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
        ]
      },
      rule: {
        name: [
          {
            required: true,
            message: "姓名不能为空",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "电话不能为空"
          },
          {
            type: "number",
            message: "请输入11位手机号"
          },
          {
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
            message: "请输入11位手机号码",
            trigger: "blur"
          }
        ],
        IDcard: [
          {
            required: true,
            message: "身份证不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            message: "请输入正确的身份证号",
            trigger: "blur"
          }
        ]
      },
      touristList: {
        adultList: [
          {
            name: "",
            phone: "",
            IDcard: ""
          }
        ],
        childrenList: []
      },
      price: 2,
      childPrice: 4,
      totalPrice: 0
    };
  },
  created() {
    this.fetchData();
    this.countPrice();
  },
  methods: {
    //计算总价
    countPrice() {
      this.totalPrice = this.num1 * this.price + this.num2 * this.childPrice;
    },
    //获取数据
    fetchData() {
      this.title = this.$route.query.title;
      this.id = this.$route.query.id;
      this.startSpot = this.$route.query.startSpot;
      this.price = this.$route.query.price;
      this.childPrice = this.$route.query.childPrice;
      console.log(this.$route.query);
    },
    //返回上一页
    back() {
      this.$router.back();
    },
    //成人数量变换
    changeAdult(currentValue, oldValue) {
      let adult = {
        name: "",
        phone: "",
        IDcard: ""
      };
      if (currentValue > oldValue) {
        for (let i = oldValue; i < currentValue; i++) {
          this.touristList.adultList.push(adult);
        }
      } else {
        for (let i = currentValue; i < oldValue; i++) {
          this.touristList.adultList.pop();
        }
      }
      this.countPrice();
    },
    //儿童数量变换
    changeChildren(currentValue, oldValue) {
      let child = {
        name: "",
        phone: "",
        IDcard: ""
      };
      if (currentValue > oldValue) {
        for (let i = oldValue; i < currentValue; i++) {
          this.touristList.childrenList.push(child);
        }
      } else {
        for (let i = currentValue; i < oldValue; i++) {
          this.touristList.childrenList.pop();
        }
      }
      this.countPrice();
    },
    pickerOptions() {},
    submit() {
      const arr = [];
      for (let item of this.$refs.ruleForm3) {
        arr.push(item.validate());
      }

      try {
        Promise.all([
          this.$refs.ruleForm1.validate(),
          this.$refs.ruleForm2.validate(),
          ...arr,
        ]).then(res => {
          this.$alert('恭喜您已经完成订单预约', '信息提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'success',
                message: '恭喜您已经完成订单预约'
              });
            }
          });
        })
        .catch(err=>{
          this.$message({
            message: "请将所有信息填写完整",
            type: "warning"
          });
        });
      } catch (err) {
        this.$message({
          message: "请将所有信息填写完整",
          type: "warning"
        });
      }
    }
  },
  mounted() {
   
  }
};

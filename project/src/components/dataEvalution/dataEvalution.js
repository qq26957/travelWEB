export default {
  name: "dataEvalution",
  data() {
    return {
      tableData: [
        {
          evalutionId: "Esc1231231231231",
          orderId: "Osc123123123123",
          productId: "ss123123",
          scenicName: "四姑娘山",
          title: "四姑娘山旅游",
          userId: "14712332123",
          nickName: "小区大爷",
          startTime: "2021-04-12",
          traffic: "5.0",
          hotel: "4.7",
          play: "4.8",
          text: `这次得旅行让我很高兴，一路上得风光詪dsfdsfdsg fsgfh gdjh dgh好，山上的雪很漂亮
        这次得旅行让我很高兴，一路上得风光詪dsfdsfdsg fsgfh gdjh dgh好，山上的雪很漂`
        },
        {
          evalutionId: "Esc1231231231231",
          orderId: "Osc123123123123",
          productId: "ss123123",
          scenicName: "四姑娘山",
          title: "四姑娘山旅游",
          userId: "14712332123",
          nickName: "小区大爷",
          startTime: "2021-04-12",
          traffic: "5.0",
          hotel: "4.0",
          play: "5.0",
          text: "这次得旅行让我很高兴，一路上得风光詪好，山上的雪很漂亮"
        }
      ],
      dialogFormVisible: false,
      ruleForm: {
        evalutionId: "",
        orderId: "",
        productId: "",
        scenicName: "",
        title: "",
        userId: "",
        nickName: "",
        startTime: "",
        traffic: null,
        hotel: null,
        play: null,
        text: ""
      },
      rules: {
        evalutionId: [
          {
            required: true,
            message: "评价信息编号不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^O[a-z]{2}[0-9]{13}$)/,
            message:
              "请输入正确的订单编号(列入：Esc1231231231231，Eyn1231231231231)",
            trigger: "blur"
          }
        ],
        orderId: [
          {
            required: true,
            message: "订单编号不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^O[a-z]{2}[0-9]{12}$)/,
            message: "请输入正确的订单编号(列入：Osc123123，Oyn123123)",
            trigger: "blur"
          }
        ],
        productId: [
          {
            required: true,
            message: "产品ID不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[a-z][a-z][0-9]{6}$)/,
            message: "请输入正确的产品id(格式为2位英文字符和6位数字)",
            trigger: "blur"
          }
        ],
        scenicName: [
          {
            required: true,
            message: "景点名不能为空",
            trigger: "blur"
          }
        ],
        title: [
          {
            required: true,
            message: "产品名不能为空",
            trigger: "blur"
          }
        ],
        userId: [
          {
            required: true,
            message: "用户信息不能为空",
            trigger: "blur"
          },
          {
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
            message: "请输入11位手机号码",
            trigger: "blur"
          }
        ],
        nickName: [
          {
            required: true,
            message: "用户昵称不能为空"
          }
        ],
        startTime: [
          {
            required: true,
            message: "出发时间不能为空",
            trigger: "blur"
          }
        ],
        traffic: [
          {
            required: true,
            message: "请对旅行交通进行评分",
            trigger: "change"
          }
        ],
        hotel: [
          {
            required: true,
            message: "请对饮食住行进行评分",
            trigger: "change"
          }
        ],
        play: [
          {
            required: true,
            message: "请对游玩乐趣进行评分"
          }
        ],
        text: [
          {
            required: true,
            message: "请对本次旅行进行文字评价",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      this.ruleForm = row;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleInsert() {
      this.dialogFormVisible = true;
      this.initForm();
    },
    //提交信息
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("提交成功");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //表单初始化
    initForm() {
      this.ruleForm = {
        orderId: "",
        productId: "",
        scenicName: "",
        title: "",
        startSpot: "",
        startTime: "",
        adultNum: "",
        childNum: "",
        totalPrice: "",
        state: ""
      };
    }
  }
};

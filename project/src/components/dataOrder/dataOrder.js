export default {
  name: "dataOrder",
  data() {
    return {
      tableData: [
        {
          orderId: "sc123123123123",
          productId: "fdf123123",
          scenicName: "四姑娘山",
          title: "四姑娘山低价出行，你值得拥有",
          startSpot: "成都",
          startTime: "2021-4-5",
          adultNum: "2",
          childNum: "1",
          totalPrice: "780",
          state: "3"
        }
      ],
      dialogFormVisible: false,
      ruleForm: {
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
      },
      rules: {
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
        childNum: [
          {
            required: true,
            message: "儿童数量不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[0-9]$)/,
            message: "请输入0-9的数字",
            trigger: "blur"
          }
        ],
        adultNum: [
          {
            required: true,
            message: "成人数量不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[0-9]$)/,
            message: "请输入0-9的数字",
            trigger: "blur"
          }
        ],
        totalPrice: [
          {
            required: true,
            message: "订单总价格不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[0-9]{1,5}$)/,
            message: "请输入正确的数字售价",
            trigger: "blur"
          }
        ],
        startSpot: [
          {
            required: true,
            message: "出发地址不能为空",
            trigger: "blur"
          }
        ],
        startTime: [
          {
            required: true,
            message: "出发时间不能为空",
            trigger: "blur"
          }
        ],
        state: [
          {
            required: true,
            message: "请选择当前订单的状态",
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("提交成功");
        } else {
          console.log('error submit!!');
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

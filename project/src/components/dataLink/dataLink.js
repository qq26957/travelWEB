export default {
  name: "dataLink",
  data() {
    return {
      tableData: [
        {
          linkId: "Lsc123123",
          productId: "sc123123",
          scenicName: "四姑娘山",
          title: "这是一座巍峨高大且美丽得群山，",
          startSpot: "成都",
          linkList: "成都——>>海螺沟——>>青峰峡——>>四姑娘山",
          timeList: "第一天10:00——>>第一天18:00——>>第二天10:00——>>第二天14:00"
        },
        {
          linkId: "Lsc123456",
          productId: "sc123456",
          scenicName: "四姑娘山",
          title: "这是一座巍峨高大且美丽得群山，",
          startSpot: "成都",
          linkList: "成都——>>海螺沟——>>青峰峡——>>四姑娘山",
          timeList: "第一天10:00——>>第一天18:00——>>第二天10:00——>>第二天14:00"
        }
      ],
      dialogFormVisible: false,
      ruleForm: {
        linkId: "",
        productId: "",
        scenicName: "",
        title: "",
        startSpot: "",
        linkList: "",
        timeList: ""
      },
      rules: {
        orderId: [
          {
            required: true,
            message: "线路编号不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^L[a-z]{2}[0-9]{6}$)/,
            message: "请输入正确的订单编号(列入：Lsc123123，Lyn123123)",
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
        startSpot: [
          {
            required: true,
            message: "出发地址不能为空",
            trigger: "blur"
          }
        ],
        linkList: [
          {
            required: true,
            message: "出发线路不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[\u4e00-\u9fa5——>>]*[\u4e00-\u9fa5]$)/,
            message: "请输入标准线路(例如：成都——>>南充——>>阆中)",
            trigger: "blur"
          }
        ],
        timeList: [
          {
            required: true,
            message: "请输入时间线",
            trigger: "blur"
          },
          {
            pattern: /(^([\u4e00-\u9fa5]*([0-1][0-9]|2[0-4]):([0-6][0-9])——>>)*[\u4e00-\u9fa5]*([0-1][0-9]|2[0-4]):([0-6][0-9])$)/,
            message:
              "请输入标准时间线(例如：第一天18:00——>>第二天12:00——>>第三天14:00)",
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

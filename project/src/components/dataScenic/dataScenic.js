export default {
  name: "dataScenic",
  data() {
    return {
      tableData: [
        {
          productId: "sc123123",
          scenicName: "四姑娘山",
          title: "这是一座巍峨高大且美丽得群山，",
          linkId: "Lsc123123",
          satisfaction: "98%",
          oldPrice: "499",
          newPrice: "288",
          childPrice: "190",
          startSpot: "成都",
          features: "飞机出行",
          imgList: "",
          destination: `文旅产品齐亮相，景区有了新名片。嘉绒藏族歌舞剧《斯古拉》、“熊猫邮局”、阿来书屋、3360咖啡屋、镜屋、科普教育基地等文旅融合产品对外开放，吸引众多游客，成为四姑娘山新的打卡点和景区新名片。基础设施大提升，游客有了舒适感。景区内独具嘉绒藏族建筑风格的景观标识、休息亭、观景平台、游步道、环保厕所等基础设施全面完工投入使用，使景区接待能力得到了质的提升，吸引了不少游客的眼球。`
        }
      ],
      dialogFormVisible: false,
      ruleForm: {
        productId: "",
        scenicName: "",
        title: "",
        linkId: "",
        satisfaction: "",
        oldPrice: "",
        newPrice: "",
        childPrice: "",
        startSpot: "",
        features: "",
        imgList: "",
        destination: ""
      },
      rules: {
        productId: [
          {
            required: true,
            message: "产品ID不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[a-z]{2}[0-9]{6}$)/,
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
        linkId: [
          {
            required: true,
            message: "请输入正确的线路Id",
            trigger: "blur"
          },
          {
            pattern: /(^L[a-z]{2}[0-9]{6}$)/,
            message: "请输入正确的线路Id(例如Lsc123123，Lyn123123)",
            trigger: "blur"
          }
        ],
        satisfaction: [
          {
            pattern: /(^[[0-9]{1,2}%|[[0-9]{1,2}.[0-9]{1}%$)/,
            message: "请输入正确的满意率(例如99%,99.9%)",
            trigger: "blur"
          }
        ],
        oldPrice: [
          {
            required: true,
            message: "以往售价不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[0-9]{1,5}$)/,
            message: "请输入正确的数字售价",
            trigger: "blur"
          }
        ],
        newPrice: [
          {
            required: true,
            message: "目前售价不能为空",
            trigger: "blur"
          },
          {
            pattern: /(^[0-9]{1,5}$)/,
            message: "请输入正确的数字售价",
            trigger: "blur"
          }
        ],
        childPrice: [
          {
            required: true,
            message: "儿童票价不能为空",
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
        features: [
          {
            required: true,
            message: "产品特色不能为空",
            trigger: "blur"
          }
        ],
        imgList: [
          {
            required: true,
            message: "请上传描述产品的照片",
            trigger: "blur"
          }
        ],
        destination: [
          {
            required: true,
            message: "请填写有关产品的描述",
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
    submitMessage() {
      console.log("提交信息");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    //表单初始化
    initForm() {
      this.ruleForm = {
        productId: "",
        scenicName: "",
        title: "",
        satisfaction: "",
        oldPrice: "",
        newPrice: "",
        childPrice: "",
        startSpot: "",
        features: "",
        imgList: "",
        destination: ""
      };
    },
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
  }
};

export default {
  name: "dataUser",
  data() {
    return {
      imageUrl: "",
      tableData: [
        {
          userId: "14718451231",
          email: "25950923@qq.com",
          password: "ee11qqqee",
          name: "王小虎",
          nickName: "廊坊一霸",
          gender: "1",
          birth: "1997-11-01",
          headImg: "1231sdasdas",
          IDcard: "511989199612093379"
        },
        {
          userId: "",
          email: "25950923@qq.com",
          password: "ee11qqqee",
          name: "王小虎",
          nickName: "廊坊一霸",
          gender: "1",
          birth: "1997-11-01",
          headImg: "1231sdasdas",
          IDcard: "511989199612093379"
        }
      ],
      dialogFormVisible: false,
      ruleForm: {
        userId: "",
        password: "",
        email: "",
        name: "",
        IDcard: "",
        gender: 1,
        nickName: "",
        birth: "",
        headerImg: ""
      },

      radio: 1,
      rules: {
        userId: [
          {
            required: true,
            message: "账号不能为空"
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
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z]\w{5,12}$/,
            message: "长度在 6 到 12 个字符,并以字母开头",
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
        ],
        name: [
          {
            required: true,
            message: "姓名不能为空",
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
      }
    };
  },
  methods: {
    //数据加工

    //编辑
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
    //上传头像
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
    initForm(){
      this.ruleForm = {
        userId: "",
        password: "",
        email: "",
        name: "",
        IDcard: "",
        gender: 1,
        nickName: "",
        birth: "",
        headerImg: ""
      }
    }
  }
};

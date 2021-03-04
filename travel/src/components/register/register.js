export default {
  name: "register",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: "",
        password: "",
        passwordCheck: "",
        email: "",
        name: "",
        IDcard: "",
        checkCode:""
      },

      rules: {
        account: [
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
        passwordCheck: [{ validator: validatePass2, trigger: "blur" }],
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
  created() {
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    submitForm(val) {
    },
    //验证码生成
    drawCheckCode(){
      
    }
  }
};

export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        account: "",
        password: ""
      },
      account: "",
      password: "",
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
            message:'请输入11位手机号码',
            trigger:"blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
           pattern: /^[a-zA-Z]\w{5,17}$/,
            message: "长度在 6 到 12 个字符", 
            trigger: "blur" 
          }
        ]
      }
    };
  },
  methods: {
    toRegister() {
        this.$router.push("/register");
     
    },
    submitForm(val) {
      window.sessionStorage.setItem("loginFlag",true);
      this.$router.push("/");

    }
  }
};

let imgBaseUrl = "../static/img/orders/";

export default {
  name: "orders",
  data() {
    return {
      ordersContent: "",
      flag: true,
      num1: 0,
      num2: 0,
      time:"",
      title:"",
      id:"",
      startSpot:"",
      ruleForm2: {
        name: "",
        phone: "",
        email: ""
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
      rules3: {
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
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //获取数据
    fetchData() {
        this.title = this.$route.query.title;
        this.id = this.$route.query.id;
        this.startSpot = this.$route.query.startSpot;
    },
    //改变人数
    change(){

    },
    handleChange(){

    },
    pickerOptions(){

    }
  }
};

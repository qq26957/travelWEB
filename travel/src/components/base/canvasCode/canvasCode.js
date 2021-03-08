export default {
  name: "canvasCode",
  data() {
    return {
      strArray: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ],
      strCode: ""
    };
  },
  created() {},
  mounted() {
    this.drawCanvas();
  },
  methods: {
    //绘制验证码
    drawCanvas() {
      let codeCanvas = document.getElementsByClassName("codeCanvas")[0];
      console.log(codeCanvas);
      let context = codeCanvas.getContext("2d");
      context.fillStyle = "cornflowerblue";
      context.fillRect(0, 0, codeCanvas.width, codeCanvas.height);
      context.fillStyle = "white";
      context.font = "100px Arial";
      for (let i = 0; i < 4; i++) {
        let item = this.strArray[
          Math.floor(Math.random() * this.strArray.length)
        ];
        this.strCode += item;
        console.log(this.strCode);
        let itemx = i * 60 + 50;
        let itemy = Math.floor(Math.random() * 20) + 100;
        context.fillText(item, itemx, itemy);
      }
      //绘制随机线
      for (let i = 0; i < 3; i++) {
        this.drawLine(codeCanvas, context);
      }
      for (let i = 0; i < 30; i++) {
        this.drawPoint(codeCanvas, context);
      }
      this.convertCanvasToImage(codeCanvas);
    },
    //画直线
    drawLine(canvas, context) {
      console.log(canvas.width, canvas.height);
      let x1 = Math.floor(Math.random() * canvas.width);
      let y1 = Math.floor(Math.random() * canvas.height);
      let x2 = Math.floor(Math.random() * canvas.width);
      let y2 = Math.floor(Math.random() * canvas.height);
      console.log(x1, x2, y1, y2);
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineWidth = 5; //随机线宽
      context.strokeStyle = "rgba(50,50,50,0.7)"; //随机线描边属性
      context.stroke(); //描边，即起点描到终点
    },
    //画30个随机点
    drawPoint(canvas, context) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      context.moveTo(x, y);
      context.lineTo(x + 1, y + 1);
      context.lineWidth = 10;
      context.strokeStyle = "rgba(150,250,100,0.5)";
      context.stroke();
    },
    //绘制图片
    convertCanvasToImage(canvas) {
      var image = this.$refs.codeImg;
      image.src = canvas.toDataURL("image/png");
      return image;
    },
    //点击图片重新加载
    refreshCode() {
      document.getElementsByClassName("codeCanvas")[0].remove();
      let canvas = document.createElement("canvas");
      canvas.setAttribute("ref", "codeCanvas");
      canvas.setAttribute("class", "codeCanvas");
      canvas.setAttribute("style", "display:none");
      this.$refs.verificationCode.insertBefore(canvas, this.$refs.codeImg);
      this.strCode = "";
      this.drawCanvas();
    }
  }
};

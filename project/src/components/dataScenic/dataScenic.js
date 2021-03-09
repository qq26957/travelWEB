export default {
    name:"dataScenic",
    data() {
        return {
          tableData: [
            {
                productId:"ss123",
                scenicName:"四姑娘山",
                title:"这是一座巍峨高大且美丽得群山，",
                satisfaction:"98%",
                oldPrice:"499元",
                nowPrice:"288元",
                childPrice: "190元",
                startSpot:"成都",
                features:"飞机出行",
                imgList:"",
                destination:`文旅产品齐亮相，景区有了新名片。嘉绒藏族歌舞剧《斯古拉》、“熊猫邮局”、阿来书屋、3360咖啡屋、镜屋、科普教育基地等文旅融合产品对外开放，吸引众多游客，成为四姑娘山新的打卡点和景区新名片。基础设施大提升，游客有了舒适感。景区内独具嘉绒藏族建筑风格的景观标识、休息亭、观景平台、游步道、环保厕所等基础设施全面完工投入使用，使景区接待能力得到了质的提升，吸引了不少游客的眼球。`

            }  
          ]
        };
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleInsert() {
          console.log("新增");
        }
      }
}
export default {
  name: "dataEvalution",
  data() {
    return {
      tableData: [
        {
          productId: "ss123",
          scenicName: "四姑娘山",
          userId: "14712332123",
          nickName: "小区大爷",
          startTime: "2021-04-12",
          traffic: "5.0",
          hotel: "4.7",
          play: "4.8",
          text:
            `这次得旅行让我很高兴，一路上得风光詪dsfdsfdsg fsgfh gdjh dgh好，山上的雪很漂亮
        这次得旅行让我很高兴，一路上得风光詪dsfdsfdsg fsgfh gdjh dgh好，山上的雪很漂`
        },
        {
          productId: "ss123",
          scenicName: "四姑娘山",
          userId: "14712332123",
          nickName: "小区大爷",
          startTime: "2021-04-12",
          traffic: "5.0",
          hotel: "4.7",
          play: "4.8",
          text: "这次得旅行让我很高兴，一路上得风光詪好，山上的雪很漂亮"
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
};

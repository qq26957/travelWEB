export default {
  name: "dataLink",
  data() {
    return {
      tableData: [
        {
          productId: "ss123",
          scenicName: "四姑娘山",
          title: "这是一座巍峨高大且美丽得群山，",
          startSpot: "成都",
          linkList: "成都——海螺沟——青峰峡——四姑娘山",
          timeList: "第一天10:00——第一天18:00——第二天10：00——第二天14:00"
        },
        {
            productId: "ss123",
            scenicName: "四姑娘山",
            title: "这是一座巍峨高大且美丽得群山，",
            startSpot: "成都",
            linkList: "成都——海螺沟——青峰峡——四姑娘山",
            timeList: "第一天10:00——第一天18:00——第二天10:00——第二天14:00"
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

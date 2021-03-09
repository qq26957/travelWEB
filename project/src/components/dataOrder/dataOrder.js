export default {
    name:"dataOrder",
    data() {
        return {
          tableData: [
            {
                orderId:"ss123",
                productId:"fdf123123",
                scenicName:"四姑娘山",
                title:"四姑娘山低价出行，你值得拥有",
                startSpot:"成都",
                startTime:"2021-4-5",
                totalPrice:"780元",
                state:"已完成",
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
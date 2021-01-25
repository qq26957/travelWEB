export default{
    name:'sceneryItem',
    props:{
        dataList:{
            type: Array,
            default:[]
        }
    },
    data() {
        return {
            
        }
    },
    created() {
        console.log(this.$props.dataList);
    },
    methods: {
        toSpot(val){
            this.$router.push("/hotAttractions");

        }
    },
}
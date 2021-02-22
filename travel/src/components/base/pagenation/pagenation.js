export default{
    name:'pagenation',
    props:{
        page: {
            type: Number,
            default: 1,
        },
        total: {
            required: true,
            type: Number,
        },
        pageSize: {
            type:Number,
            default:6
        }
 
    },
    data() {
        return {
            
        }
    },
    computed:{
        currentPage:{
            get(){
                return this.page;
            },
            set(){
              
            }
        }
    },
    methods: {
        handleCurrentChange(val){
            this.$emit('changePage',val);
        }
    },

}
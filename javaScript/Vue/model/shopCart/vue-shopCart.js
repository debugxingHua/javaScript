let app = new Vue({
    el:'#app',
    data:{
        //购物车的数据
        list:[
            {
                id:1,
                name:'挨炮6',
                price:6666,
                count:1
            },
            {
                id:2,
                name:'挨炮7',
                price:7777,
                count:1
            },
            {
                id:3,
                name:'挨炮8',
                price:8888,
                count:1
            }
        ]
    },
    computed:{
        //总价动态变化。
        totalPrice:function () {
            let total = 0;
            for(let i = 0;i<this.list.length;i++){
                let item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
        }
    },
    methods:{
        handleReduce:function (index) {
            if(this.list[index].count === 1){
                return false;
            }else{
                this.list[index].count--;
            }
        },
        handleAdd:function (index) {
            this.list[index].count++;
        },
        handleRemove:function (index) {
            this.list.splice(index,1);
        }
    }
});
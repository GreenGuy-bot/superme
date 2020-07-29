import BackTop from "../components/common/backtop/backTop";
//混入对象，复用backTop属性和方法
export const backTopMix ={
     components:{
       BackTop,
     },
  data(){
       return{
         ifShow: false,
       }
  },
  methods:{
    topClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 700)
      //Scroll是拿到组件实例，scroll是拿到组件内部的scroll数据，然后调用scrollTo函数,滑动到0,0坐标,700ms内滚到
      //可在Scroll里封装成函数，可以少写一个scroll
    },
    listenShowBackTop(position){
      this.ifShow = (-position.y) > 1375
    }
  }
}
<template>
  <div class="page-layout">
    <div class="content-box">标准盒模型</div>
    <div class="border-box">IE盒模型</div>
    <div class="flexbox">
      <!--父元素是一个弹性盒，子元素会自动水平排列-->
      弹性盒模型
      <div class="text">1</div>
      <div class="text">2</div>
      <div class="text">3</div>
    </div>
    <div class="box">
      <div class="inherit">box-sizing的inherit属性值</div>
    </div>
    <div class="parent">
      父元素
      <div class="children">子元素</div>
    </div>
    <div class="bfc-example-0">
      <div class="bfc-example-0-img">img float-left</div>
      <p
        class="bfc-example-0-info"
      >.info .info .info .info .info .info .info .info .info .info .info .info .info .info .info .info .info .info .info .info .info .info</p>
    </div>
    <div class="parent-one">
      1父元素
      <div class="children-one">1子元素</div>
      <div class="children-two"></div>
    </div>
    <div class="parent-two" id="demo">
      1父元素
      <div class="children-one">1子元素</div>
      <div class="children-two"></div>
    </div>
    <div class="inner-dom" id="inner">事件冒泡和捕获</div>
    <div id="parent1">
      <div id="child1" style="height:200px;background:#0cc">冒泡</div>
    </div>
    <div id="parent2">
      <div id="child2" style="height:200px;background:#0cc">捕获</div>
    </div>
  </div>
</template>

<script defer=true>
import Api from '../../../common/api/index'
import requestThor from '../../../common/utils/request'
export default {
  props: ['text'],
  components: {},
  mounted() {
    this.setArrList();
    this.eventStream();//created时，未挂载到DOM，不能访问到$el属性，$ref属性内容为空数组
  },
  created(){
    /* this.scope();
    this.newPerson();
    this.fun();
    console.log("111",this.a)//3.最外层打印出变量a，直接从变量a的作用域即全局作用域内寻找，结果为1
    this.f1();
    var result=this.f1();
    console.log("result()",result());//999 */
    //this.varText();
    //this.letText();
    //this.promiseTest();
    //this.promiseData();
    //this.asymcTest();
    this.asymcTestOne();
    

  
  },
  data() {
    return {
      arrList: [],
      name:"",
      a:1,
    }
  },
  methods: {
    async setArrList() {
      try {
        const res = await requestThor({
          url: Api.mockApi,
          method: 'get',
          data: {}
        })
        this.arrList = res && res.result && res.result.list
      } catch (error) {}
    },
//声明一个函数Person()
    Person(name){
      this.name = name;
     
    },
    //原型链
    newPerson(){
       console.log("Person",this.Person)
      let newPerson=new this.Person('陌上寒');//用函数new产生对象时，这个函数才是new出来对象的构造函数。
      console.log(newPerson);
     
    },
    //作用域
    scope(){
      let  _that=this;
      console.log("a", _that.a);//函数外面定义的变量拥有全局作用域
    },
    //作用域链
    fun(){
      var a=10;
      function fun1(){
        var a=20;
        console.log("a1",a)//20
      }
      function fun2(){
        console.log("a2",a)//10
      }
        //return fun1();//1.执行时，输出20
        return fun2();//1.执行时，输出10
        //执行fn2时，作用域链的链表的结构是fn2->fn->window
    },
    //闭包,在函数 f1 的内部，再定义一个函数 f2 ,只要把此函数 f2 作为返回值,可以在 f1 外部读取它的内部变量
    f1(){
　　　　var n=999;
　　　　function f2(){//f2函数，就是闭包
　　　　　　console.log(n);
　　　　}
　　　　return f2;
　　},
    //let var const的区别
    //使用var的弊端
    varText(){
      for(var i=0;i<10;i++){
                var a = 'a';
      }
          console.log("a",a);//跳出 for 循环了，却还可以访问到 for 循环内定义的变量 a ，甚至连 i 都可以被放访问到
      for (var j = 0; j < 3; j++) {
        setTimeout(function () {
          console.log("j",j)//3 3 3
          //j在全局范围内都有效，在setTimeout函数中没有找到j的定义，所以在全局里才能找到变量i，在for循环执行完之后，event loop中的，setTimeout中的匿名函数开始执行，这个时候的全局j其实已经是3了，所以全部打印出了3
        }, 1000);
      }
    },
    //使用let 解决var的弊端
    letText(){
     /*  for(let i=0;i<10;i++){
                let a = 'a';
      }
          //console.log("a1",a);//此时访问不到a
      for (let j = 0; j < 3; j++) {
        setTimeout(function () {
          console.log("j1",j)//0 1 2
          //let声明有一个特殊的行为，这个行为指出变量在循环过程中不止被声明一次,每次迭代都会被声明。随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。这使得我们的j，每次执行其实都是块级作用域中的不同的一个变量，自然就不是最终的3了
        }, 1000);
      } */
      //暂时性死区:如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的
      const show=true;
      if (show==true) {
        // TDZ开始
        tmp = 'abc'; // ReferenceError
        console.log("tmp1",tmp); // ReferenceError

        let tmp; // TDZ结束
        console.log("tmp2",tmp); // undefined

        tmp = 123;
        console.log("tmp3",tmp); // 123
      }

    },
    //使用const定义常量
    //事件流监听,监听在这个ID下的click事件，点击了，立刻更换文字
    eventStream(){
      var div1=document.getElementById('inner');
      console.log("div1",div1)
      if(div1.addEventListener){
        div1.addEventListener('click',function(){
        this.innerHTML="button"
        }) 
      }else{//兼容不支持addEventListener的版本
        div1.attachEvent('click',function(){
          this.innerHTML="button"
          }) 
          //移除事件：detachEvent(event, function)
      }
      //捕获和冒泡的区别
      var parent1 = document.getElementById("parent1");
      var child2 = document.getElementById("child1");
      var parent2 = document.getElementById("parent2");
      var child2 = document.getElementById("child2");
      parent1.addEventListener('click', function(){
        alert("this is parent element");
      });
      child1.addEventListener('click', function(){
        alert("this is child element");
      });
      parent2.addEventListener('click', function(){
        alert("this is parent element");
      }, true);
      child2.addEventListener('click', function(){
        alert("this is child element");
      }, true);
    },
  //promise实例
    promiseTest(){
      var p= new Promise(function(resolve, reject){//先new一个primise实例对象
      //异步操作
      setTimeout(function(){
        console.log("完成")
         resolve('随便什么数据');
      },1000)
          
      })
      return p; //执行了一个异步操作setTimeout，2秒后，输出“执行完成”，并且调用resolve方法
               //得到了一个Promise对象
    },
     promiseData(){
       //1.then和catch方法
      this.promiseTest().then(
        function(data){
          console.log('resolved');//1.then接受两个参数，第一个对应resolve的回调
          console.log("data",data);
          //后面可以用传过来的数据做些其他操作
          //......
        },
        function(reason, data){//2.第二个对应reject的回调
          console.log('rejected');
          console.log(reason);
        }
      )
      .catch (function(reason){//即可以指定reject的回调，又可以接收在执行resolve（即then中的第一个参数）的回调时，抛出的错误，这样不会报错卡死js。
        console.log('rejected');
        console.log("reason",reason);
      });
      function promiseTest1(){
        var p = new Promise(function(resolve, reject){
        //做一些异步操作
          setTimeout(function(){
              console.log('异步任务1执行完成');
              resolve('随便什么数据1');
            }, 1000);
          });
          return p;  
      };
      //与上面相同
      function promiseTest2(){};
      function promiseTest3(){};
     //2.all方法,并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调
     //效果实际上是「谁跑的慢，以谁为准执行回调」
      var allData=Promise
            .all([promiseTest1(), promiseTest2(), promiseTest3()])
            .then(function(results){
              console.log("results",results);//异步任务1执行完成
                                              //异步任务2执行完成
                                              //异步任务3执行完成
                                              //["随便什么数据1", "随便什么数据2", "随便什么数据3"]

            });
      return allData;  
     //3.race「谁跑的快，以谁为准执行回调」

      var raceData= Promise
            .race([promiseTest1(), promiseTest2(), promiseTest3()])
            .then(function(results){
                console.log(results);
            });
                                              //异步任务1执行完成
                                              //随便什么数据1
                                              //异步任务2执行完成
                                              //异步任务3执行完成
      return raceData;
     },
    // ansyc、await和Promise的对比
    asymcTest(){
      function takeLongTime(n) {
        return new Promise(resolve => {
          setTimeout(() => resolve(n + 200), n);
        });
      }

      function step1(n) {
          console.log(`step1 with ${n}`);
          return takeLongTime(n);
      }

      function step2(n) {
          console.log(`step2 with ${n}`);
          return takeLongTime(n);
      }

      function step3(n) {
          console.log(`step3 with ${n}`);
          return takeLongTime(n);
      }
      
      //1.使用promise处理，多个 Promise 组成的 then 链的时候
      //一个业务，分多个步骤完成，每个步骤都是异步的，而且依赖于上一个步骤的结果
      function doIt(){
        console.time("doIt");
        const time1=300;
        step1(time1)
              .then(time2=>step2(time2))
              .then(time3=>step2(time3))
              .then(result=>{
                console.log(`result is ${result}`);
                console.timeEnd("doIt");
              })
      }
      doIt();
      //运行结果
      // step1 with 300
      // step2 with 500
      // step3 with 700
      // result is 900
      // doIt: 1507.251ms

      //2.使用async、awiat
      //Promise 通过 then 链来解决多层回调的问题，现在又用 async/await 来进一步优化它）。
     //await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中
         
     async function doIt1(){
        console.time("doIt");
        const time1=300;
        try{
          const time2=await step1(time1);
          const time3=await step2(time2);
          const result=await step3(time3);
          console.log(`result is ${result}`);
          console.timeEnd("doIt");
        }catch(err){
          console.log(err)
        }       
      }
      doIt1();//和 Promise 实现是一样的，但是代码清晰得多，几乎跟同步代码一样
      //运行结果
      // step1 with 300
      // step2 with 500
      // step3 with 700
      // result is 900
      // doIt: 1507.251ms
    } ,
    //复杂一点的业务,使用async、awiat简洁，方便
    asymcTestOne(){
      function takeLongTime(n) {
        return new Promise(resolve => {
          setTimeout(() => resolve(n + 200), n);
        });
      }
      function step1(n) {
        console.log(`step1 with ${n}`);
        return takeLongTime(n);
      }

      function step2(m, n) {
        console.log(`step2 with ${m} and ${n}`);
        return takeLongTime(m + n);
      }

      function step3(k, m, n) {
        console.log(`step3 with ${k}, ${m} and ${n}`);
        return takeLongTime(k + m + n);
      }
      async function doIt(){
        const time1=300;
        const time2=await step1(time1);
        const time3=await step2(time1,time2);
        const result=await step3(time1,time2,time3);
        console.log(`result is ${result}`);
        console.timeEnd("doIt");
      }
      doIt()
    }   
  }
}
</script>

<style lang="less" scoped>
@import './one.less';
</style>

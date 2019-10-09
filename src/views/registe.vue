<template>
    <div id="box">
        <!-- field的坑，事件的触发需要加上nativ.capture -->
<mt-field label="用户名：" placeholder="用户名" v-model="username" @blur.native.capture="checkName()"></mt-field><span class="tips">{{msgName}}</span>
<mt-field label="密码：" placeholder="Input password" type="password" v-model="password" @blur.native.capture='checkPassword()'></mt-field><span class="tips">{{msgpassword}}</span>
<mt-field label="手机号：" placeholder="请输入手机号" type="tel" v-model="phone" @blur.native.capture='checkPhone()'></mt-field><span class="tips">{{msgPhone}}</span>
<mt-field label="破壳日：" placeholder="生日" type="date" v-model="birthday"></mt-field>
<mt-field label="自我介绍：" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
 <input type="submit" value="注册" @click="register($event)">

    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            msgName:'',
            password:'',
            msgpassword:'',
            phone:'',
            msgPhone:'',
            birthday:'',
            introduction:''        }
    },
    methods: {
        checkName(){
          
             if(this.username.length==0){
                    this.msgName="用户名不能为空";
                }else if(this.username.length<2)
                {
                    this.msgName="用户名至少2个字符";
                }else{
                    this.msgName="";
                }
        },
         checkPassword(){
                var word=this.password.trim();
                if(word==''){
                     this.msgpassword="密码不能为空";
                }
                var count=0;
                if(/[0-9]/.test(word)){
                    count++;
                }
                if(/[A-Za-z]/.test(word))
                {
                    count++;
                }
                if(/[^0-9A-Za-z]/.test(word)){
                    count++;
                }
                if(count==3&& word.length>=6)
                {
                    this.msgpassword="高强度";
                }else if(count==2&& word.length>=6){
                    this.msgpassword="中强度";
                }else{
                    this.msgpassword="低强度";
                }
                return word >=0;
            },
            checkPhone(){
                var word=this.phone.trim();
                if(word==''){
                    this.msgPhone='不输入手机号是不行的哦'
                }
               else if(/^1[3|4|5|7|8][0-9]\d{8}$/.test(word)){
                    this.msgPhone=''
                }else{
                    this.msgPhone='请输入正的手机号'
                }
            },
             register:function (event) {
                if(this.checkName()&this.checkPassword()){
                 //如果成功了进行路由的跳转，跳到登陆界面
                }else{
                    // 如果姓名或者验证不通过，执行这里
                    console.log(1);
                    event.preventDefault();
                }
            },


    },
   

}
</script>
<style lang="less">
    #box{
        height: 100%;
       .tips{
           background-color: red;
       }
    }
</style>
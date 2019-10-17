<template>
    <div id="box">
    
    
    
    
    
    
    
        <mt-header title="注册账号">
    
    
    
            <router-link to="/login" slot="left">
    
    
    
                <mt-button icon="back">返回</mt-button>
    
    
    
            </router-link>
    
    
    
            <mt-button icon="more" slot="right"></mt-button>
    
    
    
        </mt-header>
    
    
    
        <div id="bodyBox">
    
            <!-- field的坑，事件的触发需要加上nativ.capture -->
    
            <mt-field label="用户名：" v-model="username" @blur.native.capture="checkName()"><span class="tips">{{msgName}}</span></mt-field>
    
    
    
            <mt-field label="昵称：" v-model="name"></mt-field>
    
    
    
            <mt-field label="密码：" type="password" v-model="password" @blur.native.capture='checkPassword()'>
    
                <span class="tips">{{msgpassword}}</span>
    
            </mt-field>
    
            <mt-field label="手机号：" type="tel" v-model="phone" @blur.native.capture='checkPhone()'>
    
                <el-button :disabled="isClick" id="sendCode" plain @click="sendCode()">{{idCode}}</el-button>
    
                <span class="tips">{{msgPhone}}</span>
    
            </mt-field>
    
            <mt-field label="验证码：" type="text" v-model="codes"></mt-field>
            
       <el-button  type="info" round @click="register($event)">注册</el-button>
    
    
        </div>
     
    
    
    
    
    
    
    
    </div>
</template>
<script>
import { getSendCodes, registe } from '@/services/mine.js'
export default {
    data() {
        return {
            name: '',
            username: '',
            msgName: '',
            password: '',
            msgpassword: '',
            phone: '',
            msgPhone: '',
            codes: '',
            introduction: '',
            idCode: '发送验证码',
            isClick:false,
        }
    },
    methods: {
        checkName() {

            if (this.username.length == 0) {
                this.msgName = "用户名不能为空";
            } else if (this.username.length < 2) {
                this.msgName = "用户名至少2个字符";
            } else {
                this.msgName = "";
            }
        },
        checkPassword() {
            var word = this.password.trim();
            if (word == '') {
                this.msgpassword = "密码不能为空";
            } else {
                var count = 0;
                if (/[0-9]/.test(word)) {
                    count++;
                }
                if (/[A-Za-z]/.test(word)) {
                    count++;
                }
                if (/[^0-9A-Za-z]/.test(word)) {
                    count++;
                }
                if (count == 3 && word.length >= 6) {
                    this.msgpassword = "高强度";
                } else if (count == 2 && word.length >= 6) {
                    this.msgpassword = "中强度";
                } else {
                    this.msgpassword = "低强度";
                }
                return word >= 0;
            }

        },
        checkPhone() {
            var word = this.phone.trim();
            if (word == '') {
                this.msgPhone = '输入手机号'
            } else if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(word)) {
                this.msgPhone = ''
                this.idCode = '发送验证码'
            } else {
                this.msgPhone = '请输入正确的手机号'
                this.idCode = ''
            }
        },
        register() {
            registe(this.username, this.password, this.name, this.phone, this.codes).then(res => {
                console.log(res)
                console.log('注册')
                if (res.code == 0) {
                    console.log('跳转成功')
                    this.$router.push({ path: '/login' })
                }
            })


        },
        sendCode() {
              this.isClick=true
            if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.phone)) {
                getSendCodes(this.phone)
                var time = 60
                const timer = setInterval(() => {
                    time--
                    if (time == 0) {
                         this.isClick=false
                        this.idCode = '再试一次'
                        clearInterval(timer)
                    } else {
                        this.idCode = '倒计时' + time
                    }


                }, 1000);

            }

        },



    },


}
</script>
<style lang="less">
#box {
    height: 100%;
    text-align: center;
    #bodyBox {
        margin-top: 50px;
        margin-bottom: 50px;
        border-top: 1px solid #ccc;
      
        .tips {
            color: tomato;
            font-size: 12px;
        }
        #sendCode {
            padding: 2px;
        }
    }
}
</style>
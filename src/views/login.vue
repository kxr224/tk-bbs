<template>
    <div class="container">
        <div class="title">
            <h2>bbTalk</h2>
        </div>
        <van-cell-group>
            <van-field placeholder="请输入用户名" v-model="username" @blur="checkName" :error-message="usernameErrorMsg" />
        </van-cell-group>

        <van-cell-group>
            <van-field placeholder="请输入密码"
                       type="password"
                       v-model="password"
                       @blur="checkPassword"
                       :error-message="errorMsgPassword"
            />
        </van-cell-group>

        <div class="action">
            <van-button type="info" size="large" @click="log" :loading="loading"
                        color="linear-gradient(to right, #4bb0ff, #6149f6)">登陆
            </van-button>
        </div>

        <p class="noNum">
            <router-link to="/registe">注册</router-link>
            <router-link to="/forgetPassword">忘记密码</router-link>
        </p>

    </div>
</template>

<script>
    import {login} from "@/services/mine";
    import {Dialog} from 'vant';
    import {Notify} from 'vant';

    export default {
        data() {
            return {
                username: "",
                usernameErrorMsg: "",
                password: "",
                errorMsgPassword: "",
                loading: false
            };
        },
        computed: {},
        methods: {
            checkName() {
                if (this.username.length === 0) {
                    this.usernameErrorMsg = '请填写用户名';
                    return true;
                } else {
                    this.usernameErrorMsg = '';
                    return false;
                }
            },
            checkPassword() {
                let word = this.password.trim();
                if (word === "") {
                    this.errorMsgPassword = "密码不能为空!";
                }
            },

            //登陆成功跳转到我的页面
            log() {
                if (this.username === '' || this.password === '') {
                    Notify({type: 'warning', message: '请填写完整的信息'});
                    return;
                }
                this.loading = true;
                login(this.username, this.password).then(res => {
                    if (res.code === 0) {
                        this.$store.commit({
                            type: "loginsucess",
                            user: res.data
                        });
                        this.$router.push({path: "/mine"});
                    } else {
                        Dialog({message: '您输入的密码有误'});
                    }
                    this.loading = false;
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .title {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 34px;
            font-weight: 500;
        }
    }

    .action {
        margin-top: 30px;
        padding: 0 11px;

        .van-button--large {
            height: 45px;
            line-height: 43px;
        }
    }

    .noNum {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        a {
            text-decoration: none;
            font-size: 13px;
            color: rgba(125, 126, 128, 0.6);
        }
    }

    .tip {
        color: red;
        font-size: 13px;
    }

    .alert {
        color: red
    }
</style>

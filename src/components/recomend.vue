<template>
    <div id="mainList">
        <ul class="showLists" v-for="item in rows" :key="item.id" @click="getInvitation(item)">
            <!-- /////////////////开始 -->
            <div class="listLeft">
                <div class="avatar-box"><img :src="item.avatar" class="pictureTitles" /></div>
                <div class="name-box"><span class="writers">{{item.userName}}</span></div>
            </div>
            <div class="listMid">
                <li class="titles">{{item.title}}</li>
                <div class="contains">{{item.intro}}</div>
            </div>
            <div class="listRight">
                <img :src="item.coverImgUrl" alt class="pictures" />
            </div>
            <!-- /////////////////结束 -->
            <!-- <li>{{item.title}}</li>

            <img :src="item.coverImgUrl" alt class="picture" />

            <div class="contain">{{item.intro}}</div>
            <img :src="item.avatar" class="pictureTitle" />
            <span class="writer">{{item.userName}}</span>-->
        </ul>
    </div>
</template>

<script>
    import {getRecomList} from "@/services/index";

    export default {
        data() {
            return {
                rows: []
            };
        },
        created() {
            getRecomList().then(res => {
                this.rows = res.rows;
            });
        },
        methods: {
            getInvitation(item) {
                this.$router.push({
                    path: "/msgDetail",
                    query: {
                        postsId: item.postsId
                    }
                });
            }
        }
    };
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    #mainList {
        height: calc(100vh - 150px);
        overflow: scroll;
        padding: 8px 0 20px;
        margin-top: 5px;
        box-sizing: border-box;
        background: #f5f7fa;

        .showLists {

            margin-left: 3%;
            width: 90%;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-around;
            border-radius: 10px;
            padding: 10px;
            box-shadow: 3px 3px rgba(242, 246, 252, 0.31);
            background: white;

            //////////////////重构页面样式开始
            .listLeft {
                text-align: left;
                width: 25%;
                display: flex;
                // 头像盒子
                .avatar-box {
                    position: relative;
                    padding-top: 32%;
                    width: 32%;
                    height: 0;

                    .pictureTitles {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }

                .name-box {
                    position: relative;
                    padding-top: 32%;
                    height: 0;
                    flex: 1;

                    .writers {
                        font-size: 12px;
                        position: absolute;
                        top: 50%;
                        left: 8px;
                        transform: translateY(-50%);
                    }
                }
            }

            .listMid {
                text-align: left;
                width: 50%;

                .titles {
                    text-align: left;
                    list-style: none;
                    font-size: 16px;
                    font-weight: bolder;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .contains {
                    color: #888888;
                    padding: 2px;
                    font-size: 12px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                    -webkit-box-orient: vertical;
                    margin-top: 5px;
                }
            }

            .listRight {
                padding: 2px;
                width: 25%;

                .pictures {
                    width: 100%;
                    border-radius: 20px;
                }
            }

            ///////////////////////////重构结束
            // li {
            //   margin-top: 10px;
            //   // box-shadow: 11px 6px -2px #7bc1f6;
            //   border-top: 1px solid #7bc1f6;
            //   font-size: 18px;
            //   font-weight: bold;
            // }
            // .picture {
            //   width: 50px;
            //   height: 50px;
            //   //   background: #7bc1f6;
            // position: absolute;
            //   top: 14px;
            //   left: 268px;
            // }
            // .contain {
            //   width: 159px;
            //   height: 50px;
            //   position: absolute;
            //   top: 24px;
            //   left: 90px;
            //   font-size: 11px;
            //   text-overflow: -o-ellipsis-lastline;
            //   overflow: hidden;
            //   text-overflow: ellipsis;
            //   display: -webkit-box;
            //   -webkit-line-clamp: 3;
            //   line-clamp: 3;
            //   -webkit-box-orient: vertical;
            // }
            // .pictureTitle {
            //   width: 30px;
            //   height: 30px;
            //   border-radius: 50%;
            //   margin-top: 10px;
            // }
            // .writer {
            //   font-size: 14px;
            // }
        }
    }
</style>

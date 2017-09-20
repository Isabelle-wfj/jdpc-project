<template>
    <yd-layout>
        <div class="jd-common borderB" style="padding-top:0.22rem">
            <yd-flexbox>
                <!--<div class="jd-arrow"><i class="yd-back-icon"></i></div>-->
                <yd-flexbox-item>
                    <h2 class="jd-index-title">
                     <router-link to="/fixedPosition" slot="center">
                            <label class="jd-strong">
                                <yd-icon name="location" size="0.35rem" style="font-weight:600"></yd-icon>烧仙草（中赢店）<i class="jd-arrow yd-next-icon"></i>
                            </label>
                        </router-link>
                    </h2>
                    
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
        <div class="jd-choiceProduct">
             <yd-infinitescroll :callback="loadList" ref="lsdemo">
                <yd-list  theme="4" slot="list" class="jd-nearbyStore">
                    <yd-list-item v-for="item in list" type="link" :href="'/productDetails/'+item.theme" class="jd-padCommon borderB">
                        <img slot="img" :src="item.img">
                        <span slot="title">{{item.title}}</span>
                        <yd-list-other slot="other">
                            <label  class="choiceProduct-info">¥{{item.price}}/人</label>
                        </yd-list-other>
                        <yd-list-other slot="other" class="nearby-info">
                            <div>
                                <p class="nearby-intro">{{item.info}}</p>
                                <p  class="choiceProduct-info"> <yd-icon name="location" size="0.3rem" style="font-weight:600"></yd-icon>200m</p>
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
                <!-- 数据全部加载完毕显示 -->
                <span slot="doneTip">已经到底了~~</span>
            </yd-infinitescroll>
            <yd-backtop></yd-backtop>
        </div>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return { 
                page: 1,
                pageSize: 10,
                list: [
                    {theme:'1',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:'星光大道 奶茶甜品',price:'2'},
                    {theme:'1',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:'星光大道 奶茶甜品',price:'2'},
                    {theme:'1',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:'星光大道 奶茶甜品',price:'2'},
                    {theme:'1',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:'星光大道 奶茶甜品',price:'2'},
                    {theme:'1',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:'星光大道 奶茶甜品',price:'2'},
                    {theme:'1',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:'星光大道 奶茶甜品',price:'2'}
                 
                ]
            }
        },
        methods: {
            loadList() {
                this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
                    params: {
                        page: this.page,
                        pagesize: this.pageSize
                    }
                }).then(function (response) {
                    setTimeout(() => { // 请求太快了，延迟一下方便看效果！
                        const _list = response.body;

                        this.list = [...this.list, ..._list];

                        if (_list.length < this.pageSize || this.page >= 4) {
                            // 所有数据加载完毕
                            this.$refs.lsdemo.$emit('ydui.infinitescroll.loadedDone');
                            return;
                        }

                        // 单次请求数据完毕
                        this.$refs.lsdemo.$emit('ydui.infinitescroll.finishLoad');

                        this.page++;
                    }, 1000);
                });
            }
        }
    }
</script>

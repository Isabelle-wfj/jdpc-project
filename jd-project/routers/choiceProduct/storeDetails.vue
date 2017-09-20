<template>
    <yd-layout>
        <div class="jd-common borderB" style="padding-top:0.22rem">
            <yd-flexbox>
                <div class="jd-arrow"><i class="yd-back-icon"></i></div>
                <yd-flexbox-item>
                    <h2 class="jd-index-title">
                        <label class="jd-strong">烧仙草（中赢店）</label>
                    </h2>
                </yd-flexbox-item>
                <div>
                    <router-link to="/searchItem" slot="left">
                        <yd-icon name="search" size=".4rem"  color="#020202" style="font-weight: 600; " type="link"></yd-icon>
                    </router-link>
                </div>
            </yd-flexbox>
        </div>
        <div class="storeNotice">
            <p class="storeNotice-title borderB">店铺公告</p>
            <p>新产品错过了就要再等一年哦！</p>
        </div>

        <div class="jd-choiceProduct">
             <yd-infinitescroll :callback="loadList" ref="lsdemo">
                <yd-list  theme="1" slot="list">
                    <yd-list-item v-for="item in list" type="link" :href="'/productDetails/'+item.theme">
                        <img slot="img" :src="item.img">
                        <span slot="title">{{item.title}}</span>
                        <yd-list-other slot="other">
                            <div class="choiceProduct-info">源自台湾，只做纯天然</div>
                        </yd-list-other>
                        <div v-if="item.normal" slot="other">
                            <yd-list-other  >
                                <div class="choiceProduct-normal"><span>普通价：¥{{item.w_price}}</span></div>
                            </yd-list-other>
                            <yd-list-other  >
                                <div><span class="list-price">会员价：¥{{item.w_price}}</span></div>
                            </yd-list-other>
                        </div>
                        <yd-list-other slot="other"  v-else>
                            <div class="choiceProduct-vip">
                                <span class="list-price"><em>¥</em>{{item.price}}</span>
                                <span class="list-del-price">¥{{item.w_price}}</span>
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
                <!-- 数据全部加载完毕显示 -->
                <span slot="doneTip">已经到底了~~</span>
            </yd-infinitescroll>
            <yd-backtop></yd-backtop>
        </div>
        <!--jd-menu-->
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页"  link="/">
                <yd-icon slot="icon"  size=".5rem"  name="home-outline"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="精选"  link="/productList"  active>
                <yd-icon slot="icon" name="type"  size=".5rem" ></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车"  link="/shopCart" >
                <yd-icon slot="icon" name="shopcart-outline"  size=".5rem" ></yd-icon>
                <!-- <yd-badge slot="badge" type="danger">2</yd-badge>-->
            </yd-tabbar-item>
            <yd-tabbar-item title="我的" link="/personalInfo">
                <i slot="icon" class="demo-icons-me"></i>
            </yd-tabbar-item>
        </yd-tabbar>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return { 
                page: 1,
                pageSize: 10,
                list: [
                    {theme:'1',normal:'',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌",info:"源自台湾，只做纯天然", price: 56.23, w_price: 89.36},
                    {theme:'2',normal:'true',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌",info:"源自台湾，只做纯天然", price: 56.23, w_price: 89.36},
                    {theme:'3',normal:'',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:"源自台湾，只做纯天然",price: 56.23, w_price: 89.36},
                    {theme:'4',normal:'true',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌", info:"源自台湾，只做纯天然",price: 56.23, w_price: 89.36},
                    {theme:'5',normal:'',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌",info:"源自台湾，只做纯天然", price: 56.23, w_price: 89.36},
                    {theme:'6',normal:'',img: "images/list.jpg", title: "【黄七姑】 5元加料 冰淇凌",info:"源自台湾，只做纯天然", price: 56.23, w_price: 89.36}
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

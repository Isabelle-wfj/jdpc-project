<template>
    <yd-layout>
        <!--<yd-navbar slot="navbar" title="我的订单">
            <router-link to="/personalInfo" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>-->

        <div class="jd-myOrderList">
            <div class="jd-tadMenu borderB">
                <ul >
                    <li :class="tabIndex==0?'active':''"  @click.stop="tabClick" data-index="0" ><label>全部</label></li>
                    <li :class="tabIndex==1?'active':''"  @click.stop="tabClick" data-index="1" ><label>待付款</label></li>
                    <li :class="tabIndex==2?'active':''"  @click.stop="tabClick" data-index="2" ><label>待发货</label></li>
                    <li :class="tabIndex==3?'active':''"  @click.stop="tabClick" data-index="3" ><label>待收货</label></li>
                </ul>
            </div>
            <div class="jd-choiceProduct">
                <yd-infinitescroll :callback="loadList" ref="lsdemo">
                    <yd-list  theme="4" slot="list">
                        <div class="orderList-info jd-padCommon"  v-for="item in list"  >
                            <yd-flexbox class="orderList-head">
                                <yd-flexbox-item>
                                    <h2>{{item.productName}}</h2>
                                </yd-flexbox-item>
                                <yd-flexbox-item>
                                    <h2 class="textRight colorOrange" v-if="item.status==0">等待买家付款</h2>
                                    <h2 class="textRight colorOrange" v-else-if="item.status==1">买家已付款</h2>
                                    <h2 class="textRight colorOrange" v-else-if="item.status==2">商家已发货</h2>
                                    <h2 class="textRight colorOrange" v-else="item.status==3">交易完成</h2>
                                </yd-flexbox-item>
                            </yd-flexbox>
                            <yd-list-item>
                                <img slot="img" :src="item.img">
                                <span slot="title">{{item.title}}</span>
                                <yd-list-other slot="other">
                                    <div class="choiceProduct-info">{{item.info}}</div>
                                    <span>x{{item.count}}</span>
                                </yd-list-other>
                                
                                <yd-list-other slot="other" >
                                    <div class="choiceProduct-vip">
                                        <span class="list-price"><em>¥</em>{{item.price}}</span>
                                    </div>
                                </yd-list-other>
                            </yd-list-item>
                             <yd-flexbox class="orderList-head">
                                <div>合计：19.9</div>
                                <yd-flexbox-item class="textRight">
                                    <div  v-if="item.status==0">
                                         <span class="jd-btn mr16" @click.stop="cancelOrder">取消订单</span>
                                         <span class="jd-btn  jd-btn-warn">付款</span>
                                    </div>
                                    <div  v-if="item.status==1">
                                         <span class="jd-btn mr16" @click.stop="cancelOrder">联系商家</span>
                                         <router-link to="/refund">
                                            <span class="jd-btn  jd-btn-warn" >退款</span>
                                         </router-link>
                                    </div>
                                    <div  v-if="item.status==2">
                                         <span class="jd-btn mr16" @click.stop="cancelOrder">联系商家</span>
                                         <span class="jd-btn  jd-btn-warn">确认收货</span>
                                    </div>
                                </yd-flexbox-item>
                            </yd-flexbox>
                        </div>
                    </yd-list>
                    <!-- 数据全部加载完毕显示 -->
                    <span slot="doneTip">已经到底了~~</span>
                </yd-infinitescroll>
                <yd-backtop></yd-backtop>
            </div>
        </div>
    </yd-layout>
</template>

<script type="text/babel">
// 0等待付款 1买家已付款 2商家已发货 3交易完成
    export default {
       data() {
            return { 
                page: 1,
                tabIndex:'0',
                pageSize: 10,
                list: [
                    {theme:'1',img: "images/list.jpg",productName:'烧仙草',status:'0', title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23},
                    {theme:'2',img: "images/list.jpg", productName:'烧草',status:'1',title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装",count:'1', price: 56.23},
                    {theme:'3',img: "images/list.jpg", productName:'仙草',status:'2',title: "【黄七姑】 5元加料 冰淇凌", info:"红色 5斤装",count:'1',price: 56.23},
                    {theme:'4',img: "images/list.jpg", productName:'烧仙草烧仙草',status:'3',title: "【黄七姑】 5元加料 冰淇凌", info:"红色 5斤装",count:'1',price: 56.23},
                    {theme:'5',img: "images/list.jpg", productName:'烧仙草',status:'0',title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装",count:'1', price: 56.23},
                    {theme:'6',img: "images/list.jpg",productName:'烧仙草',status:'1', title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                ]
            }
        },
        mounted(){
            this.$nextTick(function () {
               this.init();
            })

        },
        computed: {
            theme() {
                return  this.$route.params.id;
            }
         },
        methods: {
            init(){
                this.tabIndex=this.theme;
            },
            tabClick(e){
                  var tabIndex = e.currentTarget.getAttribute('data-index');
                  this.tabIndex=tabIndex;
            },
            cancelOrder() {
                this.$dialog.confirm({
                    title: '亲',
                    mes: '你确定删除这款产品么？',
                    opts: [
                        {
                            txt: '取消',
                            color: false
                        },
                        {
                            txt: '确定',
                            color: true,
                            callback: () => {
                                // 这里应该有一个又请求
                                this.$dialog.toast({mes: '删除成功', timeout: 1000});
                            }
                        }
                    ]
                });
            },

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

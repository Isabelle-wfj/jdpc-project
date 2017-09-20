<template>
    <yd-layout  :theme="theme">
        <div class="jd-productDetails" >
            <!--轮播-->
            <div class="productDetails-carousel">
                <div class="jd-carousel" style="padding-top:0">
                    <div class="demo-small-pitch  jd-pictureShow" >
                        <yd-slider autoplay="3000">
                            <yd-slider-item v-for="item in list" >
                                <a :href="item.listUrl">
                                    <img :src="item.imgSrc">
                                </a>
                            </yd-slider-item>
                        </yd-slider>
                    </div>
                </div>
                <div class="productDetails-info jd-padCommon">
                    <h2 class="jd-detail-title"><label class="jd-strong">超级咖啡</label><p>喝一口十天不睡觉的咖啡</p></h2>
                    <span class="list-price"><em>¥</em>88</span>
                    <span class="list-del-price">¥128</span>
                </div>
            </div>
            <!--商品选择-->
            <div class="productDetails-choice">
                <yd-cell-group>
                    <yd-cell-item arrow @click.native="showModalHand" >
                        <span slot="left"  v-if="shopStandard&&sellWay">已选：<em>{{shopStandard}},{{sellWay}}</em></span>
                        <em v-else slot="left">请选择商品规格</em>
                        <span slot="right"></span>
                    </yd-cell-item>
                    <yd-cell-item arrow type="link" href="/storeDetails" >
                        <span slot="left">点击查看【捎货精选】全部商品</span>
                    </yd-cell-item>
                </yd-cell-group>
            </div>
            <div class="productDetails-introduce">
                <yd-tab class="demo-small-pitch" >
                    <yd-tab-panel label="图文介绍">
                        <img src="images/banner1.jpg"  />
                    </yd-tab-panel>
                </yd-tab>
            </div>
        </div>

        <!--jd-menu-->
        <yd-flexbox class="jd-cartMenu">
            <!--<div class="jd-arrow"><i class="yd-back-icon"></i></div>-->
            <yd-flexbox-item>
            <div>
                <yd-tabbar slot="tabbar" style="padding:0">
                    <yd-tabbar-item title="客服" link="/customService"  v-if="myProduct">
                        <i slot="icon" class="demo-icons-me"></i>
                    </yd-tabbar-item>
                    <yd-tabbar-item title="首页"  link="/" >
                        <yd-icon slot="icon"  size=".5rem"  name="home-outline"></yd-icon>
                    </yd-tabbar-item>
                    <yd-tabbar-item title="购物车"  link="/shopCart" >
                        <yd-icon slot="icon" name="shopcart-outline"  size=".5rem" ></yd-icon>
                        <!-- <yd-badge slot="badge" type="danger">2</yd-badge>-->
                    </yd-tabbar-item>
                </yd-tabbar>
                </div>
            </yd-flexbox-item>
            <div  class="jd-addCart" @click.stop="showModalHand">加入购物车</div>
            <div class="jd-cartBuy">立即购买</div>
        </yd-flexbox>

        <!--商品规格-->
        <div  v-if="showModal">
            <div class="yd-actionsheet-mask"  @click.stop="cancelHand"></div>
            <div class="jd-standard" :class="showModal?'yd-actionsheet-active':''">
                <yd-list :theme="4" class="standard-intro jd-padCommon">
                    <yd-list-item>
                        <img slot="img" src="images/list.jpg" >
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price"><em>¥</em>188</span>
                                <span class="list-del-price">¥128</span>
                            </div>
                            <div class="list-price">会员价：￥10</div>
                            <div class="jd-cancelModal"  @click.stop="cancelHand"><yd-icon name="error-outline" size="0.5rem" color="#000000"></yd-icon></div>
                        </yd-list-other>
                        <yd-list-other slot="other" class="stardard-result">
                            <div >
                                <span slot="title" class="standard-info">请选择：规格，销售方式</span>
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
                <div class="standard-details">
                    <div class="details-list">
                        <p class="borderTB details-title">规格</p>
                        <div class="switchCity-fixed">
                            <ul class="fixed-list">
                                <li @click.stop="detailsClick($event,0)" :class="ggIndex==0?'active':''" data-index="0" name="一代装">一代装</li>
                                <li @click.stop="detailsClick($event,0)" :class="ggIndex==1?'active':''" data-index="1" name="六代装">六袋装</li>
                            </ul>
                        </div>
                    </div>
                    <div class="details-list">
                        <p class="borderTB details-title">销售方式</p>
                        <div class="switchCity-fixed">
                            <ul class="fixed-list">
                                <li @click.stop="detailsClick($event,1)" :class="wayIndex==0?'active':''" data-index="0" name="现货">现货/一个工作日内发货</li>
                            </ul>
                        </div>
                    </div>
                    <div class="details-list borderTB" style="margin-bottom:0.2rem;padding:0.2rem 0">
                        <yd-flexbox>
                            <div class="details-title">购买数量</div>
                            <yd-flexbox-item style="text-align:right;margin-right:0.4rem">
                               <div class="demo-spinner">
                                    <yd-spinner max="15"  v-model="spinner1"></yd-spinner>
                                    <span class="demo-spinner-tip"></span>
                                </div>
                            </yd-flexbox-item>
                        </yd-flexbox>
                    </div>
                    <yd-flexbox class="jd-cartMenu">
                        <!--<div class="jd-arrow"><i class="yd-back-icon"></i></div>-->
                        <yd-flexbox-item  class="jd-addCart" @click.native="addCartClick">加入购物车</yd-flexbox-item>
                        <yd-flexbox-item  class="jd-cartBuy">立即购买</yd-flexbox-item>
                    </yd-flexbox>
                   
                </div>
            </div>
        </div>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                spinner1:0,
                showModal: false,
                ggIndex:10,//规格
                wayIndex:10,//销售方式
                shopStandard:'',
                sellWay:'',
                myProduct:true
            }
        },
        methods:{
            // 规格选择
            showModalHand(){
                this.showModal=!this.showModal;
            },
            // 关闭弹窗
            cancelHand(){
                 this.showModal=false;
            },
            // 选择
            detailsClick(e,way){
                var tabIndex = e.currentTarget.getAttribute('data-index');
                if(way==1){
                    this.wayIndex=tabIndex;
                    this.sellWay=e.currentTarget.getAttribute('name');
                }else if(way==0){
                    this.ggIndex=tabIndex;
                    this.shopStandard=e.currentTarget.getAttribute('name');
                }
              
               
            },
            // 加入购物车
            addCartClick(){
                if(this.shopStandard.length<2){
                    this.$dialog.toast({mes: '请选择商品属性~~', timeout: 1000});
                }else{
                    this.cancelHand();
                    // 加入成功后
                    this.$dialog.toast({mes: '添加成功，在购物车等亲~~', timeout: 1000});
                }
               
            }
        },
        computed: {
            theme() {
                return this.$route.params.id;
            },
            list() {
                const arr = [
                   	{listUrl:'#',imgSrc:'images/banner1.jpg'}
                	,{listUrl:'#',imgSrc:'images/banner1.jpg'}
                	,{listUrl:'#',imgSrc:'images/banner1.jpg'}
                ];
                return arr;
            }
        }
    }
</script>

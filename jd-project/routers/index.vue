<template>
    <yd-layout>
        <!---->
        <div class="jd-common borderB" style="padding-top:0.22rem">
            <yd-flexbox>
                <!--<div class="jd-arrow"><i class="yd-back-icon"></i></div>-->
                <yd-flexbox-item>
                    <h2 class="jd-index-title">
                        <label class="jd-strong">捎货云商</label>
                        <router-link to="/fixedPosition" slot="left"><small>杭州</small> </router-link>
                    </h2>
                </yd-flexbox-item>
                <div>
                    <router-link to="/searchItem" slot="left">
                        <yd-icon name="search" size=".4rem"  color="#020202" style="font-weight: 600; " type="link" href="/icons"></yd-icon>
                    </router-link>
                </div>
            </yd-flexbox>
        </div>
        <!--轮播-->
        <div class="jd-carousel">
            <div class="demo-small-pitch  jd-pictureShow" >
                <div class="carousel-title"> 
                    <h2 class="jd-detail-title"><label class="jd-strong">捎货云商</label><p>为您甄选全世界最棒的商品</p></h2>
                </div>
                <yd-slider autoplay="3000" :showActiveIndex="true" :showPagination="false">
                    <yd-slider-item v-for="item in bannerList" >
                        <a href="javascript:">
                            <img :src="item.goods_main_image">
                        </a>
                    </yd-slider-item>
                </yd-slider>
            </div>
        </div>
      
        
        <!--super coffee-->
        <!--<div class="jd-special-info jd-padCommon">
            <h2 class="special-title">超级咖啡</h2>
            <h1 class="special-introduce">十年，曾经是杭州文艺青年的打卡圣地</h1>
            <p class="special-info">喝一口十天不睡觉的咖啡</p>
        </div>-->

        <!--rollNotice-->
         <div class="demo-small-pitch jd-padCommon" style="margin-top:0.3rem">
            <div class="demo-rollnotice borderTB">
                <img src="images/icon/audio.png">：
                <yd-rollnotice autoplay="2000">
                    <yd-rollnotice-item v-for="item in noticeList">{{item}}</yd-rollnotice-item>
                </yd-rollnotice>
            </div>
        </div>

        <!--star store-->
        <div class="jd-padCommon">
            <div class="js-starStore borderB">
                <h2 class="jd-detail-title"><label class="jd-strong">明星店铺</label><p>吃了还想吃</p></h2>
                <router-link to="/starStore" slot="left">
                    <div class="starStore-img">
                        <img :src="starStore.shop_main_image" />
                    </div>
                    <div class="jd-special-info">
                        <h2 class="special-title">{{starStore.shop_name}}</h2>
                        <h1 class="special-introduce">{{starStore.shop_description}}</h1>
                        <p class="special-info">{{starStore.shop_content}}</p>
                    </div>
                </router-link>
            </div>
        </div>
        <!--about smallStore-->
        <!--<div class="jd-padCommon">
            <div class="jd-smallStore borderB">
                <router-link to="/nearbyStore" slot="left">
                    <yd-flexbox>
                        <yd-flexbox-item>
                            <h2 class="jd-detail-title"><label class="jd-strong">附近的小店</label><p>不贿赂小编是上不来的哦！！！</p></h2>
                        </yd-flexbox-item>
                        <div class="jd-arrow"><i class="yd-next-icon"></i></div>
                    </yd-flexbox>
                </router-link>
                <div class="smallStore-details">
                    <yd-flexbox>
                        <div><img src="images/banner1.jpg" /></div>
                        <yd-flexbox-item>
                            <h2 class="smallStore-title">黄七姑烧仙草（香溢大厦店）</h2>
                            <p class="smallStore-info">怕长肉，吃黄七姑</p>
                        </yd-flexbox-item>
                    </yd-flexbox>
                </div>
            </div>
        </div>-->
        <div class="jd-padCommon">
            <div class="jd-smallStore ">
                <router-link to="/nearbyStore" slot="left">
                    <yd-flexbox>
                        <yd-flexbox-item>
                            <h2 class="jd-detail-title"><label class="jd-strong">附近的小店</label><p>{{nearbyShop.top_description}}</p></h2>
                        </yd-flexbox-item>
                        <div class="jd-arrow"><i class="yd-next-icon"></i></div>
                    </yd-flexbox>
                </router-link>
                <div class="smallStore-details borderB"  v-for="item in nearbyShop">
                    <router-link to="/starStore" slot="left">
                        <yd-flexbox>
                            <div><img :src="item.shop_main_image" /></div>
                            <yd-flexbox-item>
                                <h2 class="smallStore-title">{{item.shop_name}}（{{item.shop_location}}）</h2>
                                <p class="smallStore-info">{{item.shop_description}}</p>
                            </yd-flexbox-item>
                        </yd-flexbox>
                    </router-link>
                </div>
            </div>
        </div>
        <!--recommond product-->
        <div class="jd-recomProduct jd-padCommon">
            <router-link to="/recommendList" slot="left">
                <yd-flexbox>
                    <yd-flexbox-item>
                        <h2 class="jd-detail-title"><label class="jd-strong">推荐商品</label></h2>
                    </yd-flexbox-item>
                    <div class="jd-arrow"><i class="yd-next-icon"></i></div>
                </yd-flexbox>
            </router-link>
             <div class="recomProduct-details">
                <yd-flexbox>
                    <yd-flexbox-item  v-for="item in recommendList">
                        <a :href="'#/productDetails/'+item.theme">
                            <div class="recomProduct-img"> 
                                <img :src="item.goods_main_image" />
                                <p class="recomProduct-title">{{item.goods_name}}</p>
                                <p class="recomProduct-price">￥{{item.goods_price}}</p>
                            </div>
                        </a>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>
        </div>

        <!--jd-footer-->
        <div class="jd-footer">
            <p class="footer-line">
                <label>捎货云商</label>
            </p>
        </div>

        <!--jd-menu-->
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页"  link="/" active>
                <yd-icon slot="icon"  size=".5rem"  name="home-outline"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="精选"  link="/productList">
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
                bannerList: [],
                noticeList:[],
                recommendList:[],
                starStore:{},
                nearbyShop:[]
            }
        },
        mounted(){
            this.$nextTick(function () {
               this.init();
            })

        },
        methods:{
            init(){
                 this.$http.get('http://192.168.1.43/api/public/').then(function (res) {
                     var _result=res.body;
                     this.bannerList=_result.best_goods_list;
                     this.noticeList=_result.enter_shop_information;
                     this.recommendList=_result.recommended_product;
                     this.starStore=_result.star_store;
                     this.nearbyShop=_result.nearby_shop;

                });
            }
        }
    }
</script>

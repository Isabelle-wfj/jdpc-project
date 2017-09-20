<template>
    <yd-layout>
       <div class="jd-myBg">
            <div class="myBg">
                <img :src="myBg" />
            </div>
            <router-link to="/myInfo" slot="left">
                <div class="myPhoto">
                    <img :src="myPhoto">
                    <label>{{myName}}</label>
                </div>
            </router-link>
       </div>
      
        <div class="jd-receiveAddr" >
            <router-link to="/myOrderList/0" slot="left">
                <yd-flexbox>
                    <yd-flexbox-item>
                        <h2 class="receiveAddr-title">
                            <label class="jd-strong">我的订单</label>
                        </h2>
                    </yd-flexbox-item>
                    <div class="jd-arrow"><i class="yd-next-icon"></i></div>
                </yd-flexbox>
            </router-link>
        </div>
    
        <div class="jd-myMenu borderTB">
             <yd-flexbox>
                <yd-flexbox-item>
                    <a  type="link" href="#/myOrderList/1">
                        <img src="images/icon/dfk.png" class="jd-icon dfk" />
                        <p>待付款</p>
                    </a>
                </yd-flexbox-item>
                <yd-flexbox-item   >
                    <a  type="link" href="#/myOrderList/2">
                        <img src="images/icon/dfh.png" class="jd-icon" />
                        <p>待发货</p>
                    </a>
                </yd-flexbox-item>
                <yd-flexbox-item  >
                    <a  type="link" href="#/myOrderList/3">
                        <img src="images/icon/dsh.png" class="jd-icon" />
                        <p>待收货</p>
                    </a>
                </yd-flexbox-item>
                <yd-flexbox-item  >
                    <a  type="link" href="#/myOrderList/3">
                        <img src="images/icon/tk.png" class="jd-icon" />
                        <p>待退款/售后</p>
                    </a>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
            <div class="jd-receiveAddr borderB" >
            <router-link to="/myAddress" slot="left">
                <yd-flexbox>
                    <yd-flexbox-item>
                        <h2 class="receiveAddr-title">
                            <label class="jd-strong">收货地址</label>
                        </h2>
                    </yd-flexbox-item>
                    <div class="jd-arrow"><i class="yd-next-icon"></i></div>
                </yd-flexbox>
            </router-link>
        </div>
         <!--jd-menu-->
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页"  link="/" >
                <yd-icon slot="icon"  size=".5rem"  name="home-outline"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="精选"  link="/productList">
                <yd-icon slot="icon" name="type"  size=".5rem" ></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车"  link="/shopCart" >
                <yd-icon slot="icon" name="shopcart-outline"  size=".5rem" ></yd-icon>
                <!-- <yd-badge slot="badge" type="danger">2</yd-badge>-->
            </yd-tabbar-item>
            <yd-tabbar-item title="我的" link="/personalInfo" active>
                <i slot="icon" class="demo-icons-me"></i>
            </yd-tabbar-item>
        </yd-tabbar>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
               myBg:'images/list.jpg',
               myPhoto:'images/banner1.jpg',
               myName:'某某某'
            }
        }
    }
</script>

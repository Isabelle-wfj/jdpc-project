<template>
    <yd-layout class="jd-confirmOrder">
       <!-- <yd-flexbox class="borderB jd-padCommon">
           <div class="jd-arrow">
                <router-link to="/shopCart" slot="left"><i class="yd-back-icon"></i></router-link>
            </div>
            <yd-flexbox-item>
                <h2 class="jd-index-title">
                    <label class="jd-strong">确认订单</label>
                </h2>
            </yd-flexbox-item>
        </yd-flexbox>-->

        <div class="jd-common borderB jd-light">
            <yd-flexbox >
                <yd-flexbox-item>赵世阶</yd-flexbox-item>
                <div class="textRight">12345687974</div>
            </yd-flexbox>
            <router-link to="/myAddress" slot="left">
                <yd-flexbox >
                    <yd-flexbox-item class="confirmOrder-addr">上海市闵行区七宝镇 闵行区仲春路2001号D栋310</yd-flexbox-item>
                    <div class="jd-arrow"><i class="yd-next-icon"></i></div>
                </yd-flexbox>
            </router-link>
        </div>
         <div class="borderB jd-padCommon confirmOrderList jd-light" >
            <p class="confirmOrder">烧仙草</p>
            <yd-flexbox>
                <img src="images/list.jpg" class="demo-checklist-img">
                <yd-flexbox-item align="top">
                    <p class="confirmOrder-title">黄七古烧仙草</p>
                    <div>
                        <yd-flexbox >
                            <yd-flexbox-item align="top">
                                <p class="confirmOrder-title">大杯 冰</p>
                            </yd-flexbox-item>
                            <div class="shopCart-count">x1</div>
                        </yd-flexbox>
                    </div>
                </yd-flexbox-item>
            </yd-flexbox>
        </div> 
        <yd-flexbox class="jd-padCommon borderB">
            <yd-flexbox-item class="yd-cell-left">商品数量</yd-flexbox-item>
            <div>1</div>
        </yd-flexbox>
        <yd-flexbox class="jd-padCommon borderB">
            <yd-flexbox-item class="yd-cell-left">配送方式</yd-flexbox-item>
            <yd-flexbox-item class="textRight" style="font-size:0.3rem">快递免邮</yd-flexbox-item>
        </yd-flexbox>
         <yd-flexbox class="jd-padCommon borderB" >
            <div class="yd-cell-left">给卖家留言：</div>
            <yd-flexbox-item class="textRight" style="font-size:0.3rem">
                <input   placeholder="黄七古烧仙草"  class="confirmOrder-word"/>
            </yd-flexbox-item>
        </yd-flexbox>
        <p class="switchCity-title">配送方式</p>
        <yd-flexbox class="jd-padCommon">
            <div class="yd-flexbox-item yd-cell-left">商品费用</div>
            <div class="textRight list-price">￥19.9</div>
        </yd-flexbox>
        <yd-flexbox class="jd-padCommon borderB">
            <div class="yd-flexbox-item yd-cell-left">运费</div>
            <div class="textRight list-price">￥19.9</div>
        </yd-flexbox>
        <yd-flexbox class="jd-padCommon borderB">
            <div class="yd-flexbox-item yd-cell-left">应付总金额</div>
            <div class="textRight">￥19.9</div>
        </yd-flexbox>
        <p class="switchCity-title">选择支付方式</p>
        <yd-flexbox class="jd-padCommon borderB" @click.native="payWayClick" payWay="0">
            <div class="yd-flexbox-item jd-payWay">
                <img src="images/icon/weixin.png">
                <label>微信</label>
            </div>
            <div v-if="payWay==0"><yd-icon name="checkoff" size="0.4rem" color="#f25b5a" ></yd-icon></div>
        </yd-flexbox>
         <yd-flexbox class="jd-padCommon borderB"  @click.native="payWayClick"  payWay="1">
            <div class="yd-flexbox-item jd-payWay">
                <img src="images/icon/zfb.png">
                <label>支付宝</label>
            </div>
            <div v-if="payWay==1"><yd-icon name="checkoff" size="0.4rem" color="#f25b5a" ></yd-icon></div>
        </yd-flexbox>
        <div class="shopCart-footer" style="background:#e8e8e8">
            <yd-flexbox>
                <yd-flexbox-item style="padding-left:12px;"> 
                     <p>合计：</p>
                </yd-flexbox-item>
                <yd-flexbox-item style="padding-right:12px;" class="textRight"> 
                     <p class="list-price">￥19.9</p>
                </yd-flexbox-item>
                <div class="shopCart-account">提交订单</div>
            </yd-flexbox>
        </div>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                payWay:0
            }
        },
        methods: {
          payWayClick(e){
              var payWay=e.currentTarget.getAttribute('payWay');
              this.payWay=payWay;
          }
        }
    }
</script>

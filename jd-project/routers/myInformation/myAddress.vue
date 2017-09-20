<template>
    <yd-layout>
        <div class="jd-common borderB" style="padding-top:0.38rem">
            <yd-flexbox>
                <!--<div class="jd-arrow">
                    <router-link to="/personalInfo" slot="left">
                        <i class="yd-back-icon"></i>
                    </router-link>
                </div>-->
                <yd-flexbox-item>
                    <h2 class="jd-index-title">
                        <label class="jd-strong">选择收货地址</label>
                    </h2>
                </yd-flexbox-item>
                <div>
                    <router-link to="/newAddLoc" slot="left"><label class="jd-edit">新增地址</label></router-link>
                </div>
            </yd-flexbox>
        </div>
        <!--定位-->
        <div class="takeSearch-addr">
            <yd-icon name="location" size="0.35rem" style="font-weight:600"></yd-icon>
            点击定位当前位置
        </div>
        <!--我的收货地址-->
        <div class="myTakeAddr">
            <p class="myTakeAddr-title">我的收货地址</p>
            <div class="jd-common borderB" v-for="item in addressList">
                <yd-flexbox >
                    <yd-flexbox-item>
                       <p class="takeAddr-name">{{item.address}}</p>
                       <p>{{item.name}}<label class="jd-space">{{item.sex}}</label>{{item.telphone}}</p>
                    </yd-flexbox-item>
                    
                    <div class="textRight" >
                        <router-link to="/newAddLoc" slot="left">
                            <span class="jd-edit" >编辑</span>
                        </router-link>
                    </div>
                </yd-flexbox>
                <label class="yd-checkbox yd-radio jd-padCommon" style="padding: 0.2rem 0px;">
                    <input type="radio" name="default"/> 
                    <span class="yd-checkbox-icon" style="width: 15px; height: 15px;">
                        <i style="width: 5px; height: 9px;"></i>
                    </span> 
                    <span class="yd-checkbox-text">
                        <span style="font-size: 0.28rem; color: rgb(0, 0, 0);">设为默认地址</span>
                    </span>
                </label>
            
            </div>
        
        </div>



    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
              addressList:[
                  {address:'香溢大厦',name:'赵世阶',sex:'女士',telphone:'12345678940'}
                  ,{address:'星耀城',name:'张飞',sex:'男士',telphone:'789586423669'}
                  ,{address:'香溢大厦',name:'赵世阶',sex:'女士',telphone:'12345678940'}
              ]
            }
        }
    }
</script>

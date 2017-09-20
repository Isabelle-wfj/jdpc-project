<template>
    <yd-layout class="jd-newAddLoc">
        <div class="jd-common borderB" style="padding-top:0.38rem">
            <yd-flexbox>
                <div class="jd-arrow">
                    <router-link to="/myAddress" slot="left">
                        <i class="yd-back-icon"></i>
                    </router-link>
                </div>
                <yd-flexbox-item>
                    <h2 class="jd-index-title">
                        <label class="jd-strong">添加收货地址</label>
                    </h2>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
        <yd-cell-group class="newAddLoc-list">
            <yd-cell-item>
                <span slot="left">收货人</span>
                <yd-input slot="right" required  placeholder="请输入收货人姓名"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机号码</span>
                <yd-input slot="right"regex="^\d{11}$"  placeholder="请输入手机号或电话号码"></yd-input>
            </yd-cell-item>
            <yd-cell-item arrow>
                <span slot="left">所在城市</span>
                <input slot="right" required type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择收货地址">
            </yd-cell-item>
            <yd-cityselect v-model="show1" :callback="resultCity" :items="district"></yd-cityselect>
            <yd-cell-item>
                <span slot="left">详细地址</span>
                <yd-input slot="right" required  placeholder="请输入小区地标等关键词"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">门牌号码</span>
                <yd-input slot="right"  placeholder="请补充楼号,户号,门牌号码"></yd-input>
            </yd-cell-item>
        </yd-cell-group>
        <yd-checkbox val="设为默认地址" class="jd-padCommon" size="15"></yd-checkbox>
        <yd-button size="large" type="danger" class="newAddLoc-btn">确定</yd-button>
    </yd-layout>
</template>

<script type="text/babel">
    import District from 'ydui-district/dist/jd_province_city_area_id';
    export default {
        data() {
            return {
                show1:false,
                show2: false,
                model1: '',
                district: District,
                addressList:[
                    {address:'香溢大厦',name:'赵世阶',sex:'女士',telphone:'12345678940'}
                    ,{address:'星耀城',name:'张飞',sex:'男士',telphone:'789586423669'}
                    ,{address:'香溢大厦',name:'赵世阶',sex:'女士',telphone:'12345678940'}
                ]
            }
        },
        methods:{
             resultCity(ret) {
                this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            },
        }
    }
</script>

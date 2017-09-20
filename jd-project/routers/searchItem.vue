<template>
    <yd-layout>
        <!--search input-->
        <div class="jd-searchItem jd-padCommon">
            <router-link to="/" slot="left">
                 <div class="jd-arrow"><i class="yd-back-icon"></i></div>
            </router-link>
            <yd-cell-group>
                <yd-cell-item>
                    <span slot="left"><yd-icon name="search" size=".28rem"  color="#020202" style="font-weight: 600;"></yd-icon></span>
                    <yd-input slot="right"   placeholder="输入您想要的水果"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
        </div>
         <!--hotSearch-->
        <div class="jd-hotSearch">
            <p class="hotSearch" style="border-bottom:none">热门搜索</p>
            <ul class="hotSearch-list">
                <li  type="link" href="/searchItem.theme/1">金太阳蜜瓜</li>
                <li  type="link" href="/searchItem.theme/2">火龙果</li>
                <li  type="link" href="/searchItem.theme/3">桔</li>
                <li  type="link" href="/searchItem.theme/4">麒麟瓜</li>
                <li  type="link" href="/searchItem.theme/5">葡萄</li>
                <li  type="link" href="/searchItem.theme/6">芒果</li>
                <li  type="link" href="/searchItem.theme/7">奇异果</li>
                <li  type="link" href="/searchItem.theme/8">菠萝</li>
            </ul>
        </div>
        <!--historySearch-->
        <div class="jd-historySearch jd-padCommon">
            <p class="hotSearch">历史搜索</p>
            <ul class="historySearch-list">
                <li v-for="item in historyList"><a  :href="'/searchItem.theme/'+item.theme">{{item.historyItem}}</a></li>
            </ul>
        </div>

        <div class="cleanHistory">
            <p @click="cleanHistory">清除历史搜索</p>
        </div>
       
     
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data(){
            return{
                historyList:[
                    {theme:'1',historyItem:'菠萝'}
                    ,{theme:'2',historyItem:'西瓜'}
                    ,{theme:'3',historyItem:'苹果'}
                ]
            }
        },
        methods:{
            cleanHistory(){
                this.historyList.splice(0,this.historyList.length)
            }
        }
    }
</script>

<template>
    <yd-layout title="切换城市">
        <div class="jd-takeSearch ">
            <div class="takeSearch jd-padCommon">
                <span class="takeSearch-title">搜索</span>
                <input placeholder="请输入收货地址" class="takeSearch-input">
            </div>
        </div>
        <div class="jd-switchCity">
             <!--currentCity-->
             <p class="switchCity-current borderB">当前：杭州</p>
            <!--fixedCity-->
             <div class="switchCity-fixed">
                <p class="switchCity-current">定位城市</p>
                <ul class="fixed-list">
                    <li  type="link" href="/">杭州</li>
                    <li  type="link" href="/">上海</li>
                </ul>
             </div>
            <!--historyCity-->
            <div class="switchCity-history">
                <p class="switchCity-title">最近访问</p>
                 <ul class="fixed-list">
                    <li  type="link" href="/">杭州</li>
                    <li  type="link" href="/">上海</li>
                </ul>
            </div>
            <!--pre City-->
             <div class="switchCity-preCity">
                <div class="preCity">
                    <p class="switchCity-title">A</p>
                    <ul class="preCity-list jd-padCommon">
                        <li  type="link" href="/">鞍山</li>
                        <li  type="link" href="/">鞍山</li>
                    </ul>
                </div>
                <div class="preCity">
                    <p class="switchCity-title">B</p>
                    <ul class="preCity-list jd-padCommon">
                        <li  type="link" href="/">北京</li>
                    </ul>
                </div>
                
            </div>
             
        
        </div>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                historyList: [
                	{theme:'1',historyItem:'苹果'}
                	,{theme:'2',historyItem:'火龙果'}
                	,{theme:'3',historyItem:'芒果'}
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

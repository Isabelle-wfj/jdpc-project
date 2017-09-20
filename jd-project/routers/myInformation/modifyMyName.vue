<template>
    <yd-layout class="jd-newAddLoc">
        <div class="jd-common borderB" style="padding-top:0.38rem">
            <yd-flexbox>
                <div class="jd-arrow">
                    <router-link to="/myInfo" slot="left">
                        <i class="yd-back-icon"></i>
                    </router-link>
                </div>
                <yd-flexbox-item>
                    <h2 class="jd-index-title">
                        <label class="jd-strong">用户名</label>
                    </h2>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
        <div class="modifyName jd-padCommon">
            <yd-cell-item>
                <yd-input slot="right"   placeholder="输入用户名" class="borderB" ></yd-input>
            </yd-cell-item>
            <yd-button type="danger" size="large" class="">确定修改</yd-button>
        </div>
       
           
     

    </yd-layout>
</template>

<script type="text/babel">
    export default {
      
    }
</script>

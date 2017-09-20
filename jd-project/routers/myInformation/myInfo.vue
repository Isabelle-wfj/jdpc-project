<template>
    <yd-layout>
        <yd-navbar slot="navbar" title="个人信息">
            <router-link to="/personalInfo" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>


         <div class="jd-myInfo" >
            <yd-flexbox class="myInfo-photos jd-padCommon">
                <yd-flexbox-item>
                    <h2 class="receiveAddr-title">
                        <label class="jd-strong">头像</label>
                    </h2>
                </yd-flexbox-item>
                <div class="myInfo-photo">
                    <img :src="myPhoto" />
                </div>
                <div class="jd-arrow"><i class="yd-next-icon"></i></div>
            </yd-flexbox>
            <router-link to="/modifyMyName" slot="left">
                <yd-flexbox class="myInfo-name jd-padCommon">
                    <yd-flexbox-item >
                        <h2 class="receiveAddr-title">
                            <label class="jd-strong">用户名</label>
                        </h2>
                    </yd-flexbox-item>
                    <div class="jd-strong">{{myName}}</div>
                    <div class="jd-arrow"><i class="yd-next-icon"></i></div>
                </yd-flexbox>
             </router-link>
        </div>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
               myPhoto:'images/banner1.jpg',
               myName:'某某某'
            }
        }
    }
</script>

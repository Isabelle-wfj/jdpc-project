import Vue from 'vue';
import VueRouter from 'vue-router';
import Resource from 'vue-resource';

import YDUI from '../src/ydui.js';

// 
import Index from './routers/index.vue';
import SearchItem from './routers/searchItem.vue';
import FixedPosition from './routers/fixedPosition.vue';
import CustomService from './routers/customService.vue'
// product
import ProductList from './routers/choiceProduct/productList.vue';
import ProductDetails from './routers/choiceProduct/productDetails.vue';
import StoreDetails from './routers/choiceProduct/storeDetails.vue';
import StarStore from './routers/choiceProduct/starStore.vue';
import NearbyStore from './routers/choiceProduct/nearbyStore.vue';
import RecommendList from './routers/choiceProduct/recommendList.vue';
// myInfo
import PersonalInfo from './routers/myInformation/personalInfo.vue';
import MyInfo from './routers/myInformation/MyInfo.vue';
import MyOrderList from './routers/myInformation/myOrderList.vue';
import MyAddress from './routers/myInformation/myAddress.vue';
import NewAddLoc from './routers/myInformation/newAddLoc.vue';
import ModifyMyName from './routers/myInformation/modifyMyName.vue';
// shopcart
import ShopCart from './routers/shoppingCart/shopCart.vue';
import ConfirmOrder from './routers/shoppingCart/confirmOrder.vue';
// money
import Refund from './routers/shoppingMoney/refund.vue';
import ApplyRefund from './routers/shoppingMoney/applyRefund.vue';
import RefundAfterSale from './routers/shoppingMoney/refundAfterSale.vue';

import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Resource);
Vue.use(YDUI);
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;

document.addEventListener('DOMContentLoaded', function () {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false);

const router = new VueRouter({
    routes: [
        {path: '/', name: '首页', component: Index},
        {path: '/searchItem', name: '商品搜索', component: SearchItem},
        {path: '/fixedPosition', name: '切换城市', component: FixedPosition},
        {path: '/customService', name: '客服', component: CustomService},

        {path: '/productList', name: '商品列表', component: ProductList},
        {path: '/productDetails/:id', name: '商品详情', component: ProductDetails},
        {path: '/storeDetails', name: '店铺详情', component: StoreDetails},
        {path: '/starStore', name: '明星店铺', component: StarStore},
        {path: '/nearbyStore', name: '附近小店', component: NearbyStore},
        {path: '/recommendList', name: '推荐商品', component: RecommendList},
        
        {path: '/personalInfo', name: '我的', component: PersonalInfo},
        {path: '/myInfo', name: '个人信息', component: MyInfo},
        {path: '/myOrderList/:id', name: '我的订单', component: MyOrderList},
        {path: '/myAddress', name: '收货地址', component: MyAddress},
        {path: '/newAddLoc', name: '地址编辑', component: NewAddLoc},
        {path: '/modifyMyName', name: '用户名', component: ModifyMyName},

        {path: '/shopCart', name: '购物车', component: ShopCart},
        {path: '/confirmOrder', name: '确认订单', component: ConfirmOrder},

        {path: '/refund', name: '退款', component: Refund},
        {path: '/applyRefund', name: '申请退款', component: ApplyRefund},
        {path: '/refundAfterSale', name: '退款/售后', component: RefundAfterSale}


    ]
});

const app = new Vue({
    router: router,
    render: v => v(App)
}).$mount('#app');

let scrollTop = 0;

router.beforeEach((route, redirect, next) => {
    if (redirect.path === '/') {
        scrollTop = document.getElementById('scrollView').scrollTop;
    }
    document.title = '捎货云商 - ' + route.name;
    next();
});

router.afterEach(route => {
    if (route.path === '/') {
        Vue.nextTick(() => {
            document.getElementById('scrollView').scrollTop = scrollTop;
        });
    } else {
        document.getElementById('scrollView').scrollTop = 0;
    }
});

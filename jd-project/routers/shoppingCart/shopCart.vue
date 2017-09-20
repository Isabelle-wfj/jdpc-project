<template>
    <yd-layout  class="shopCart-box">
        <div class="jd-shopCart"  id="checklist">
            <div class="shopCart-valid  borderB" v-for="item in list" :id="item.theme">
                <yd-flexbox class="orderList-head">
                    <yd-flexbox-item>
                          <label class="yd-checkbox yd-checkbox-circle"  >
                            <input type="checkbox" @click.stop="shopClick(item)" v-model="item.checked"> 
                            <span class="yd-checkbox-icon" style="width: 20px; height: 20px;">
                                <i style="width: 6px; height: 12px;"></i>
                            </span> 
                            <span class="yd-checkbox-text">{{item.seller}}</span>
                        </label>
                    </yd-flexbox-item>
                    <yd-flexbox-item>
                        <h2 class="textRight" @click.stop="handleClick" :dataIndex="item.theme">{{cleanBtn==item.theme?'完成':'编辑'}}</h2>
                    </yd-flexbox-item>
                </yd-flexbox>
                <div  v-for="order in item.orderlist"  v-if="order.status==1" style="position:relative" >
                    <yd-flexbox  style="padding:12px">
                        <div> 
                            <label class="yd-checkbox yd-checkbox-circle" >
                                <input type="checkbox" @click.stop="orderlistClick(item,order)" class="jd-countPrice" v-model="order.checked"> 
                                <span class="yd-checkbox-icon" style="width: 20px; height: 20px;">
                                    <i style="width: 6px; height: 12px;"></i>
                                </span> 
                            </label>
                        </div>
                        <img :src="order.img" class="demo-checklist-img">

                        <yd-flexbox-item align="top" v-if="cleanBtn==item.theme">
                            <div class="demo-spinner">
                                <span class="yd-spinner" style="width: 2rem; height: 0.6rem;">
                                    <a href="javascript:;" @click.stop="countClick(order,0)"></a> 
                                    <input class="yd-spinner-input" type="number"  pattern="[0-9]*" v-model="order.count">
                                    <a href="javascript:;" @click.stop="countClick(order,1)"></a>
                                </span>
                            </div>
                            <div>
                                <yd-flexbox class="shopCart-editPrice">
                                    <yd-flexbox-item align="top">
                                        <p class="list-price">￥{{order.price}}</p>
                                    </yd-flexbox-item>
                                </yd-flexbox>
                            </div>
                        </yd-flexbox-item>

                        <yd-flexbox-item align="top" v-else>
                            <p class="shopCart-title">{{order.title}}</p>
                            <p class="shopCart-info">{{order.info}}</p>
                            <div>
                                <yd-flexbox >
                                    <yd-flexbox-item align="top">
                                        <p class="list-price">￥{{order.price}}</p>
                                    </yd-flexbox-item>
                                    <div class="shopCart-count">x{{order.count}}</div>
                                </yd-flexbox>
                            </div>
                        </yd-flexbox-item>

                    </yd-flexbox>
                    <div class="shopList-clean" :class="(cleanBtn==item.theme)?'active':''"  @click.stop="editClick">修改</div>
                </div>
            </div>
        </div>
        <div class="shopCart-invalid">
            <div class="invalid-list" v-for="invalid in listInvalid" >
                <yd-flexbox>
                    <div><span class="jd-invalid">失效</span></div>
                    <img :src="invalid.img" class="demo-checklist-img">
                    <yd-flexbox-item align="top">
                        <p class="shopCart-title">{{invalid.title}}</p>
                        <p class="shopCart-info">{{invalid.info}}</p>
                        <div>
                            <yd-flexbox >
                                <yd-flexbox-item align="top">
                                    <p class="list-price">￥{{invalid.price}}</p>
                                </yd-flexbox-item>
                                <div class="shopCart-count">x{{invalid.count}}</div>
                            </yd-flexbox>
                        </div>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>
            <div class="shopCart-clean" @click.stop="cleanCart" v-if="listInvalid.length>0">清空失效商品</div>
        </div>
        <div class="shopCart-footer" >
            <yd-flexbox>
                <yd-flexbox-item style="padding-left:12px;"> 
                    <yd-checkbox shape="circle" v-model="isCheckAll"  @click.native="checkAll">全选</yd-checkbox>
                </yd-flexbox-item>
                <div  class="textRight"  v-if="settleBtn">
                    <p >合计:￥{{totalPrice}}</p>
                    <p class="shopCart-info" style="margin:0;">不包含运费</p>
                </div>
                <div class="shopCart-account">
                    <div v-if="settleBtn"  @click.stop="settlementClick">
                         <router-link to="/confirmOrder" slot="left"   v-if="settle">结算</router-link>
                        <span v-else>结算</span>
                    </div>
                    <div v-else @click.stop="deleteList">
                        <span>删除</span>
                    </div>
                </div>
            </yd-flexbox>
              <!--jd-menu-->
            <yd-tabbar slot="tabbar">
                <yd-tabbar-item title="首页"  link="/" >
                    <yd-icon slot="icon"  size=".5rem"  name="home-outline"></yd-icon>
                </yd-tabbar-item>
                <yd-tabbar-item title="精选"  link="/productList">
                    <yd-icon slot="icon" name="type"  size=".5rem" ></yd-icon>
                </yd-tabbar-item>
                <yd-tabbar-item title="购物车"  link="/shopCart" active>
                    <yd-icon slot="icon" name="shopcart-outline"  size=".5rem" ></yd-icon>
                    <!-- <yd-badge slot="badge" type="danger">2</yd-badge>-->
                </yd-tabbar-item>
                <yd-tabbar-item title="我的" link="/personalInfo">
                    <i slot="icon" class="demo-icons-me"></i>
                </yd-tabbar-item>
            </yd-tabbar>
        </div>
         <!--商品规格-->
        <div  v-if="showModal">
            <div class="yd-actionsheet-mask"  @click.stop="cancelHand"></div>
            <div class="jd-standard" :class="showModal?'yd-actionsheet-active':''">
                <yd-list :theme="4" class="standard-intro jd-padCommon">
                    <yd-list-item>
                        <img slot="img" src="images/list.jpg" >
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price"><em>¥</em>188</span>
                                <span class="list-del-price">¥128</span>
                            </div>
                            <div class="list-price">会员价：￥10</div>
                            <div class="jd-cancelModal"  @click.stop="cancelHand"><yd-icon name="error-outline" size="0.5rem" color="#000000"></yd-icon></div>
                        </yd-list-other>
                        <yd-list-other slot="other" class="stardard-result">
                            <div >
                                <span slot="title" class="standard-info">请选择：规格，销售方式</span>
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
                <div class="standard-details">
                    <div class="details-list">
                        <p class="borderTB details-title">规格</p>
                        <div class="switchCity-fixed">
                            <ul class="fixed-list">
                                <li @click.stop="detailsClick($event,0)" :class="ggIndex==0?'active':''" data-index="0" name="一代装">一代装</li>
                                <li @click.stop="detailsClick($event,0)" :class="ggIndex==1?'active':''" data-index="1" name="六代装">六袋装</li>
                            </ul>
                        </div>
                    </div>
                    <div class="details-list">
                        <p class="borderTB details-title">销售方式</p>
                        <div class="switchCity-fixed">
                            <ul class="fixed-list">
                                <li @click.stop="detailsClick($event,1)" :class="wayIndex==0?'active':''" data-index="0" name="现货">现货/一个工作日内发货</li>
                            </ul>
                        </div>
                    </div>
                    <!--<div class="details-list borderTB" style="margin-bottom:0.2rem;padding:0.2rem 0">
                        <yd-flexbox>
                            <div class="details-title">购买数量</div>
                            <yd-flexbox-item style="text-align:right;margin-right:0.4rem">
                               <div class="demo-spinner">
                                    <yd-spinner max="15"  v-model="spinner1"></yd-spinner>
                                    <span class="demo-spinner-tip"></span>
                                </div>
                            </yd-flexbox-item>
                        </yd-flexbox>
                    </div>-->
                    <yd-flexbox class="jd-cartMenu">
                        <!--<div class="jd-arrow"><i class="yd-back-icon"></i></div>-->
                        <yd-flexbox-item  class="jd-addCart"  @click.native="cancelHand">取消</yd-flexbox-item>
                        <yd-flexbox-item  class="jd-cartBuy">确定</yd-flexbox-item>
                    </yd-flexbox>
                </div>
            </div>
        </div>
    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                cleanBtn:false,//编辑修改
                isCheckAll:false,//全选状态
                totalPrice:'0.00',
                settle:false,
                settleBtn:true,//结算或删除
                showModal: false,
                ggIndex:10,//规格
                wayIndex:10,//销售方式
                shopStandard:'',
                sellWay:'',
                myProduct:true,
                deleteArry:[],//商家删除
                listInvalid:[
                     {status:'0',img: "images/list.jpg",title: "【黄七姑】 5元加料5元加料5元加料5元加料5元加料5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                     ,{status:'0',img: "images/banner1.jpg",title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                ],
                list: [
                        {
                            theme:'1',
                            seller:'商家名',
                            orderlist:[
                                {status:'1',img: "images/list.jpg",title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                                ,{status:'1',img: "images/list.jpg",title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                                // ,{status:'0',img: "images/list.jpg",title: "【黄七姑】 5元加料5元加料5元加料5元加料5元加料5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                            ]
                        },
                        {
                            theme:'2',
                            seller:'三只松鼠',
                            orderlist:[
                                {status:'1',img: "images/banner1.jpg",title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                                // ,{status:'0',img: "images/banner1.jpg",title: "【黄七姑】 5元加料 冰淇凌",info:"红色 5斤装", count:'1',price: 56.23}
                            ]
                        },
                ]
            }
        },
        methods: {
            // 编辑
            handleClick(e){
                var index=e.currentTarget.getAttribute('dataIndex'),innerHtml= e.currentTarget.innerHTML;
                this.cleanBtn= innerHtml=='完成'?'false':index;
                this.settleBtn=!this.settleBtn;
            },
            //数量增加或减少
            countClick(order,type){
                if(type==0){
                   if(order.count<=1){
                       order.count=1
                   }else{
                       order.count--;
                        this.countPrice();
                   }
                }else{
                    order.count++;
                     this.countPrice();
                }
            },
            // 清空失效商品
            cleanCart(){
                this.listInvalid.splice(0,this.listInvalid.length)
            },
            // 全选
            checkAll(){
                this.isCheckAll = !this.isCheckAll;
                var _this=this;
                this.list.forEach(function(item,index){
                    if(typeof item.checked=='undefined'){
                        _this.$set(item,'checked',true);
                        item.orderlist.forEach(function(order,index){
                            _this.$set(order,'checked',true)
                        })
                    }else{
                        item.checked=_this.isCheckAll;
                        item.orderlist.forEach(function(order,index){
                           order.checked= item.checked;
                        })
                    }
                });
                this.countPrice();
            },
            // 商家单击
            shopClick(item){
                var _this=this;
                if(typeof item.checked=='undefined'){
                    this.$set(item,'checked',true);
                    item.orderlist.forEach(function(order,index){
                        _this.$set(order,'checked',true)
                    })
                }else{
                    item.checked=!item.checked;                    
                    item.orderlist.forEach(function(order,index){
                        order.checked= item.checked;
                    })
                }
                this.storeListCount(item);
                this.countPrice();
            },
            // 商家个列表单击
            orderlistClick(item,order){
                if(typeof order.checked=='undefined'){
                    this.$set(order,'checked',true)
                }else{
                    order.checked=!order.checked
                }
                this.orderListCount(item);
                this.storeListCount(item);
                this.countPrice();
            },
            // 单个商品单击商家选中与否
            orderListCount(item){
                var checkedCount=0,
                _this=this,
                orderLength=item.orderlist.length;
                item.orderlist.forEach(function(order,index){
                    if(!order.checked){
                        item.checked=false;
                        _this.isCheckAll=false;

                    }else{
                        checkedCount++;
                    }
                })
                console.log(orderLength+'N/'+checkedCount)
                if(orderLength==checkedCount){
                    if(typeof item.checked=='undefined'){
                        this.$set(item,'checked',true);
                    }else{
                        item.checked=true;
                    }
                }
            },
            // 商家选中
            storeListCount(item){
                 var _this=this,checkedCount=0,listLength=this.list.length;
                 this.list.forEach(function(item,index){
                    if(!item.checked){
                       _this.isCheckAll=false;
                    }else{
                        checkedCount++
                    }
                })
                if(checkedCount==listLength){
                    this.isCheckAll=true;
                }
            },
            
            // 商品总价计算
            countPrice(){
                var _this=this;
                this.totalPrice=0;
                this.list.forEach(function(item,index){
                     item.orderlist.forEach(function(order,index){

                        if(order.status!=0&&order.checked){
                            _this.totalPrice+=order.price*order.count
                        }
                    })
                })
            },
            // 结算
            settlementClick(){
                if(parseFloat(this.totalPrice)>0){
                    this.settle=true
                }else{
                    this.$dialog.toast({mes: '请先选择需要购买的商品~~', timeout: 1500});
                }
            },
            //删除
            deleteList(){
                var _this=this;
                if(this.isCheckAll){
                    this.list.splice(0,this.list.length);
                    return;
                }
                this.list.forEach(function(item,index){
                    if(item.checked||item.orderlist.length==0){
                        _this.list.splice(index,1);
                    }else{
                        item.orderlist.forEach(function(order,index){
                            if(order.checked){
                                item.orderlist.splice(index,1);
                            }
                            //console.log()
                            if(item.orderlist.length<=1){                                
                                _this.list.splice(_this.list.indexOf(item),1);
                                _this.settleBtn=true;
                                _this.totalPrice=0;
                            }
                        })
                    }

                })


                // 某个商家选中删除商家
                // 某个产品选中删除指定

            },
             // 规格选择
            showModalHand(){
                this.showModal=!this.showModal;
            },
            // 关闭弹窗
            cancelHand(){
                this.showModal=false;
            },
            // 选择
            detailsClick(e,way){
                var tabIndex = e.currentTarget.getAttribute('data-index');
                if(way==1){
                    this.wayIndex=tabIndex;
                    this.sellWay=e.currentTarget.getAttribute('name');
                }else if(way==0){
                    this.ggIndex=tabIndex;
                    this.shopStandard=e.currentTarget.getAttribute('name');
                }
            },
            // 修改
            editClick(){
                this.showModal=true;
            }
        },
        
    }
</script>

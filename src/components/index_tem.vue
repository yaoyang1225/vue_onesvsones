<template>
    <div>
        <!--<div v-for="(item, index) in msg" :key="index">
            {{item.goodsDesc}}
        </div>-->
        
        <div id="home1">
            <div class="home_bannerBox">
                <div class="home_banner_img">

                </div>
                <div class="home_banner_img" v-for="(item, index) in msg" :key="index">
                    <img :src="item.imgTitle" alt="">
                    <div class="home_click_look">
                        <p>{{item.name}}</p>
                        <a><div class="home_click">点击查看</div></a>
                        <span>活动日期{{item.activityDate}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="home2">
            <div class="home_bannerBox">
                <div class="home_banner_img">

                </div>
               <div class="home_banner_img" v-for="(item, index) in msg" :key="index">
                    <img :src="item.imgTitle" alt="">
                    <div class="home_click_look">
                        <p>{{item.name}}</p>
                        <a><div class="home_click">点击查看</div></a>
                        <span>活动日期{{item.activityDate}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="home3">
            <div class="home_bannerBox">
                <div class="home_banner_img">

                </div>
               <div class="home_banner_img" v-for="(item, index) in msg" :key="index">
                    <img :src="item.imgTitle" alt="">
                    <div class="home_click_look">
                        <p>{{item.name}}</p>
                        <a><div class="home_click">点击查看</div></a>
                        <span>活动日期{{item.activityDate}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="search_box">
             <div class="home_search2">
                <input class="bgImg" type="search" placeholder="探索你的精致生活">
            </div>
            <ul class="clearfix">
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
                <li>关键词</li>
            </ul>
        </div>
        <div id="search_html1" >
            <div class="search_header_box">
                <div  class="search_header">
                    <img src="../assets/search.png?v2.0" class="search_header_img">
                    <div>
                        <form action="" class="input-kw-form">
                            <input type="search" id="search1" placeholder="探索您的精致生活">
                        </form>
                    </div>
                    <img src="../assets/close3.png" class="search_header_close">
                </div>
                <p>确定</p>
            </div>
            <ul class="scarch_html_nav clearfix">
                <li class="color">热门商品</li>
                <li>最新</li>
                <li><p>价格</p><div class="search_top"></div><div class="search_bottom"></div></li>
            </ul>
            <div class="search_html_list">
                <ul>
                    <li class="clearfix">
                        <img src="../assets/logo_4.png" alt="">
                        <div class="search_html_list_info">
                            <p class="search_html_list_info_name">VERSACE/范思哲SHADOV系列圆形石英腕表</p>
                            <p class="search_html_list_info_money">¥:999,99.00元</p>
                            <p class="search_html_list_info_time start_time2">距离秒杀开始还有:16小时35分06秒</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="public_back2">
                <img src="../assets/back.png?v1.5" alt="">
            </div>
        </div>
        <div id="search_html2" >
            <div class="search_header_box">
                <div  class="search_header">
                    <img src="../assets/search.png?v2.0" class="search_header_img">
                    <div>
                        <form action="" class="input-kw-form">
                            <input type="search" id="search2" placeholder="探索您的精致生活">
                        </form>
                    </div>
                    <img src="../assets/close3.png" class="search_header_close">
                </div>
                <p>确定</p>
            </div>
            <p class="search_html_title">热门搜索</p>
            <ul class="clearfix search_html_key">
                <li v-for="(item, index) in hot_search" :key="index">{{item}}</li>
            </ul>
            <p class="search_html_title">历史搜索</p>
            <ul class="search_html_history">
                <li> <p>钻扣穆勒鞋</p><img src="../assets/close3.png"></li>
                <li> <p>范思哲SHADOV系列圆形石英腕表</p> <img src="../assets/close3.png"></li>
                <li> <p>水晶凉水壶/花瓶</p><img src="../assets/close3.png"></li>
                <li> <p>牛皮迷你斜挎包</p><img src="../assets/close3.png"></li>
                <li> <p>宇治茶</p><img src="../assets/close3.png"></li>
            </ul>
        </div>
        <div id="search_html3" >
            <div class="search_header_box">
                <div  class="search_header">
                    <img src="../assets/search.png?v2.0" class="search_header_img">
                    <div>
                        <form action="" class="input-kw-form">
                            <input type="search" id="search3" placeholder="探索您的精致生活">
                        </form>
                    </div>
                    <img src="../assets/close3.png" class="search_header_close">
                </div>
                <p>确定</p>
            </div>
            <ul class="scarch_html_nav clearfix">
                <li class="color">热门商品</li>
                <li>最新</li>
                <li><p>价格</p><div class="search_top"></div><div class="search_bottom"></div></li>
            </ul>
            <div class="scarch_html_not">
                <p>没有搜索到您想要的商品</p>
                <p style="border: 0;padding-bottom: 0">您可能感兴趣的</p>
            </div>
            <div class="search_html_list">
                <ul>
                    <li class="clearfix">
                        <img src="../assets/logo_4.png" alt="">
                        <div class="search_html_list_info">
                            <p class="search_html_list_info_name">VERSACE/范思哲SHADOV系列圆形石英腕表</p>
                            <p class="search_html_list_info_money">¥:999,99.00元</p>
                            <p class="search_html_list_info_time start_time2">距离秒杀开始还有:16小时35分06秒</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="public_back2">
                <img src="../assets/back.png?v1.5" alt="">
            </div>
        </div>
        <div class="public_heigut"></div>
    </div>
    
</template>

 

<style lang="less">
    .test{
        color:red;
        font-size:35px;
    }
</style>
<script>
    export default {
        name: "index_tem",
        props: {
            msg: Array
        },
        data(){
            return {
                hot_search:[
                    '穆勒鞋',
                    '花瓶',
                    '石英腕表',
                    '范思哲',
                    'Secarts',
                    'VERSACE',
                    '牛皮迷你斜挎包',
                    'VEBM00818型号',
                    '宇治茶'
                ]
            };
        },methods: {
            
        },mounted() {
        //onload
            for(var i=0;i<this.msg.length;i++){
               this.msg[i].imgTitle=require('../assets/'+this.msg[i].imgTitle);
            }
         }
    }
    
</script>
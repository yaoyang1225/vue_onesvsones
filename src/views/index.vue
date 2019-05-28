<template>
    <div>
        <div id="container">
        <div class="homeFixed navFixed">
            <div class="home_search">
                <input class="bgImg" type="search" placeholder="探索你的精致生活">
                <div class="search_btn"></div>
            </div>
             <div class="home_nav home_nav1">
                <ul class="clearfix">
                    <li class="home_nav_selected">已结束</li>
                    <li class="home_nav_two home_nav_sc"><p>9999人正在抢购</p><span class="start_time">距离秒杀开始还有:<br>1小时15分29秒</span></li>
                    <li>未开始</li>
                </ul>
            </div>
            <div class="home_nav home_nav2">
                <ul class="clearfix">
                    <li>已结束</li>
                    <li class="home_nav_two home_nav_sc home_nav_red home_nav_selected"><p>9999人正在抢购</p><span class="end_time">本轮秒杀结束还有:<br>1小时15分29秒</span></li>
                    <li>未开始</li>
                </ul>
            </div>
            <div class="home_nav home_nav3">
                <ul class="clearfix">
                    <li>已结束</li>
                    <li class="home_nav_sc" style="color: #fff;">正在抢购</li>
                    <li class="home_nav_two home_nav_selected"><p>未开始</p><span class="start_time">距离秒杀开始还有:<br>1小时15分29秒</span></li>
                </ul>
            </div>
        </div>
        <div class="public_banner" id="home_banner">
            <template>
                <swiper :options="swiperOption"  ref="mySwiper" @someSwiperEvent="callback">
                    <!-- slides -->
                    <swiper-slide><img src="../assets/homeBanner1.png?v1.5"></swiper-slide>
                    <swiper-slide><img src="../assets/good_0.png?v1.5"></swiper-slide>
                    <swiper-slide><img src="../assets/good_1.png?v1.5"></swiper-slide>
                    <swiper-slide><img src="../assets/good_2.png?v1.5"></swiper-slide>
                    <swiper-slide><img src="../assets/good_3.png?v1.5"></swiper-slide>
                </swiper>
            </template>
            <template>
                <swiper :options="swiperOption" style="bottom: 20px;">
                    <swiper-slide v-for="slide in swiperSlides">&nbsp;</swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </template>
        </div>
        <index_tem  :msg='good_data'></index_tem>
        <div class="public_foot">
            <ul>
                <li>
                    <img src="../assets/home1.png?v1.5" alt="">
                    <p class="public_foot_selected">首页</p>
                </li>
                <a href="myOrder.php" activeClass="">
                    <li>
                        <img src="../assets/order2.png?v1.5" alt="">
                        <p>订单</p>
                    </li>
                </a>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import index_tem from "@/components/index_tem.vue";
import datas from '../data/datas.js';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "index",data() {
    return {
        good_data:datas,
        sss:1,
        swiperOption:{
            loop:true,
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay:true
            
        },
        swiperSlides: [1, 2, 3, 4, 5]
    }
  },methods: {
        callback(){

        }
    },components: {
        swiper,
        swiperSlide,
        index_tem
    },mounted() {
        //onload
        setInterval(() => {
            console.log('simulate async data')
            if (this.swiperSlides.length < 10) {
                this.swiperSlides.push(this.swiperSlides.length + 1)
            }
        }, 3000)
    },created() {
        //ready
        console.log(111)
    },
    updated() {
        console.log(333)
    },
};
</script>

<style lang="less">
</style>
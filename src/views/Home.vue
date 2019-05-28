<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <index_tem/>
    <HelloWorld msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import index_tem from "@/components/index_tem.vue";
import datas from '../data/datas.js';
export default {
  name: "home",
  components: {
    HelloWorld,
    index_tem
  },data() {
    return {}
  },
  mounted() {
    //onload
    console.log(222)

  },
  methods: {
    
  },
  computed: {
    
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

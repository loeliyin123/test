<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div id="inputBox">
      <el-input v-model="message" placeholder="请输入内容"></el-input>
      <el-input v-model="message" placeholder="请输入内容"></el-input>
    </div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods: {

  },
  computed: {
  message: {
    get () {
      return this.$store.state.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
},
  components: {
    HelloWorld
  }
}
</script>

<style>
#inputBox {
  display:flex;
  justify-content:center;
  align-items:center
}



</style>


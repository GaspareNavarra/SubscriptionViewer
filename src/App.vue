<template>
  <div>
    <NavBar></NavBar>

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue';

export default {
  components: { NavBar },
  provide() {
    return {
      goToLogin: this.goToLogin,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goToLogin() {
      
    }
  }
}
</script>
<style>
body {
  margin: 0;
  background-color: #232931;
}
</style>
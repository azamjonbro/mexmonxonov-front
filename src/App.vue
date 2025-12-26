<template>
  <Navbar />
  <main class="main">
    <router-view />
  </main>
</template>

<script >
  import { defineAsyncComponent } from 'vue';
  export default {
    components:{
      Navbar:  defineAsyncComponent(() => import('./components/Navbar.vue'))
    }
  }
</script>

<style >

</style>

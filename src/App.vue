<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index";
export default {
  name: 'App',
  mounted(){
    storage.setItem('a',1);
    // storage.setItem('user',{a:1});
  }

}
</script>

<style>

</style>

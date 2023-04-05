<template>
  <div>
    <header-component/>
    <div>
      <router-view></router-view>
     </div>
     <div>
      <footer-component/>
     </div>

     </div>
     
     
</template>
<script>
export default {
  name:"App",
  components:{
    HeaderComponent,
    FooterComponent
  }
}
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style>

</style>

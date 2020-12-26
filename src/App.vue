<template>
  <div>
    <app-header />
    <app-ninjas />
    <app-footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Ninjas from './components/Ninjas.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    'app-header': Header,
    'app-ninjas': Ninjas,
    'app-footer': Footer
  },
  data() {
    return {


    }
  }
}
</script>

<style>

</style>

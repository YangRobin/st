<template>
  <div>
     <Navbar></Navbar>
     <div>
       <LoginForm></LoginForm>
     </div>
     <FooterBar></FooterBar>
  </div>
</template>

<script>

import Navbar from './../Navbar.vue'
import FooterBar from './../FooterBar.vue'
import LoginForm from './LoginForm.vue'

export default {
  name: 'LoginApp',
  components: {
    Navbar,
    LoginForm,
    FooterBar
  }
}
</script>

<style lang="scss">
    body,div,ul{
     margin:0 auto;
   }

   .container{
     width:1200px;
   }
   li{
     list-style: none;
   }
</style>

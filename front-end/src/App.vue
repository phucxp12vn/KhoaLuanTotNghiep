<template>
  <v-app>
    <div>
    <Navbar />
    </div>
     <div>
    </div>
    <div>
      <Carousels />
    </div>
    <MainContent />
  <Footer></Footer>
  </v-app>
</template>


<script>
import Navbar from '@/components/Navbar'
import Carousels from '@/components/Carousels'
import Footer from '@/components/Footer'
import MainContent from '@/components/MainContent'

export default {
  name: 'App',
  components : {Navbar , Carousels, Footer, MainContent},
  data () {
    return {
      
    }
  }
}
</script>




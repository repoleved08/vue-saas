<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <header>
    <div>
      <nav>
        <Header />
      </nav>
    </div>
  </header>
 
  <RouterView />
  <Footer />
</template>

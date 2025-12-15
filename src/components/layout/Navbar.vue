<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
       :class="scrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold gradient-text">
          Gasparin
        </a>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" 
             :key="link.id"
             :href="link.href"
             class="text-text-muted hover:text-text transition-colors duration-300 font-medium">
            {{ link.name }}
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" 
                class="md:hidden text-text p-2">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" 
           class="md:hidden mt-4 pb-4 border-t border-border">
        <div class="flex flex-col gap-4 pt-4">
          <a v-for="link in navLinks" 
             :key="link.id"
             :href="link.href"
             @click="mobileMenuOpen = false"
             class="text-text-muted hover:text-text transition-colors duration-300 font-medium">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { id: 1, name: 'Inicio', href: '#hero' },
  { id: 2, name: 'Sobre Mí', href: '#about' },
  { id: 3, name: 'Redes', href: '#socials' },
  { id: 4, name: 'Proyectos', href: '#projects' },
  { id: 5, name: 'Skills', href: '#skills' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

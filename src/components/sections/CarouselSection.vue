<template>
  <section id="carousel" class="py-20 bg-background-light overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12 reveal">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="gradient-text">Galería</span>
        </h2>
        <p class="text-text-muted text-lg max-w-2xl mx-auto">
          Algunas imágenes sobre mí y mis proyectos
        </p>
      </div>
    </div>
    
    <!-- Infinite Carousel -->
    <div class="reveal">
      <InfiniteCarousel :images="carouselImages" :duration="35" />
    </div>
    
    <!-- Instructions for adding images -->
    <div class="max-w-6xl mx-auto px-6 mt-8">
      <p class="text-center text-text-muted text-sm">
        💡 Agregá tus imágenes en <code class="text-primary">src/assets/images/</code> y actualizá el array en este componente
      </p>
    </div>
  </section>
</template>

<script setup>
import InfiniteCarousel from '@/components/ui/InfiniteCarousel.vue'

// Array of image paths - Add your images here
// Example: import img1 from '@/assets/images/carousel-1.png'
const carouselImages = [
  null, // Placeholder 1 - replace with: '/src/assets/images/your-image-1.png'
  null, // Placeholder 2
  null, // Placeholder 3
  null, // Placeholder 4
  null, // Placeholder 5
  null, // Placeholder 6
]
</script>

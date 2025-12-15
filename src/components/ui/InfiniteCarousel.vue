<template>
  <div class="carousel-container overflow-hidden py-8">
    <div class="carousel-track flex" :style="{ animationDuration: duration + 's' }">
      <!-- First set of images -->
      <div v-for="(image, index) in images" 
           :key="'a-' + index" 
           class="carousel-item flex-shrink-0 mx-4">
        <div class="w-64 h-80 rounded-2xl overflow-hidden glass-card">
          <img v-if="image" 
               :src="image" 
               :alt="'Imagen ' + (index + 1)"
               class="w-full h-full object-cover" />
          <div v-else 
               class="w-full h-full bg-card flex items-center justify-center">
            <span class="text-text-muted text-sm">Imagen {{ index + 1 }}</span>
          </div>
        </div>
      </div>
      
      <!-- Duplicate set for seamless loop -->
      <div v-for="(image, index) in images" 
           :key="'b-' + index" 
           class="carousel-item flex-shrink-0 mx-4">
        <div class="w-64 h-80 rounded-2xl overflow-hidden glass-card">
          <img v-if="image" 
               :src="image" 
               :alt="'Imagen ' + (index + 1)"
               class="w-full h-full object-cover" />
          <div v-else 
               class="w-full h-full bg-card flex items-center justify-center">
            <span class="text-text-muted text-sm">Imagen {{ index + 1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    default: () => [null, null, null, null, null, null] // 6 placeholder slots
  },
  duration: {
    type: Number,
    default: 30 // seconds for one complete scroll
  }
})
</script>

<style scoped>
.carousel-track {
  animation: scroll var(--duration, 30s) linear infinite;
  width: max-content;
}

.carousel-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

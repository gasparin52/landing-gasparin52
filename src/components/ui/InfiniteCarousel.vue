<template>
  <div class="carousel-container overflow-hidden py-8">
    <div class="carousel-track flex" :style="{ animationDuration: duration + 's' }">
      <!-- First set of videos -->
      <a v-for="(video, index) in videos" 
         :key="'a-' + index"
         :href="video.url"
         target="_blank"
         rel="noopener noreferrer" 
         class="carousel-item flex-shrink-0 mx-4 group">
        <div class="w-72 h-44 rounded-2xl overflow-hidden glass-card relative">
          <img :src="video.thumbnail" 
               :alt="video.title"
               class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
              <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <!-- Platform Badge -->
          <div class="absolute top-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs flex items-center gap-1">
            <span v-if="video.platform === 'youtube'" class="text-red-500">▶</span>
            <span v-else class="text-purple-500">▶</span>
            {{ video.platform === 'youtube' ? 'YouTube' : 'Twitch' }}
          </div>
        </div>
      </a>
      
      <!-- Duplicate set for seamless loop -->
      <a v-for="(video, index) in videos" 
         :key="'b-' + index"
         :href="video.url"
         target="_blank"
         rel="noopener noreferrer" 
         class="carousel-item flex-shrink-0 mx-4 group">
        <div class="w-72 h-44 rounded-2xl overflow-hidden glass-card relative">
          <img :src="video.thumbnail" 
               :alt="video.title"
               class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
              <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <!-- Platform Badge -->
          <div class="absolute top-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs flex items-center gap-1">
            <span v-if="video.platform === 'youtube'" class="text-red-500">▶</span>
            <span v-else class="text-purple-500">▶</span>
            {{ video.platform === 'youtube' ? 'YouTube' : 'Twitch' }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videos: {
    type: Array,
    default: () => []
  },
  duration: {
    type: Number,
    default: 30
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

<template>
  <section id="carousel" class="py-20 bg-background-light overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12 reveal">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Mis <span class="gradient-text">Videos</span>
        </h2>
        <p class="text-text-muted text-lg max-w-2xl mx-auto">
          Algunos de mis videos de YouTube y Twitch
        </p>
      </div>
    </div>
    
    <!-- Infinite Carousel -->
    <div class="reveal">
      <InfiniteCarousel :videos="videoList" :duration="35" />
    </div>
    
    <!-- YouTube Channel Link -->
    <div class="max-w-6xl mx-auto px-6 mt-8 text-center">
      <a href="https://www.youtube.com/@gasparin52" 
         target="_blank"
         rel="noopener noreferrer"
         class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        Ver mi canal de YouTube
      </a>
    </div>
  </section>
</template>

<script setup>
import InfiniteCarousel from '@/components/ui/InfiniteCarousel.vue'

// Video list with thumbnails
const videoList = [
  {
    id: 'JmxLFQRtsPg',
    title: 'Video 1',
    url: 'https://www.youtube.com/watch?v=JmxLFQRtsPg',
    thumbnail: 'https://img.youtube.com/vi/JmxLFQRtsPg/maxresdefault.jpg',
    platform: 'youtube'
  },
  {
    id: 'IUuNvydcfV0',
    title: 'Video 2',
    url: 'https://www.youtube.com/watch?v=IUuNvydcfV0',
    thumbnail: 'https://img.youtube.com/vi/IUuNvydcfV0/maxresdefault.jpg',
    platform: 'youtube'
  },
  {
    id: 'zCMwBPZoIWw',
    title: 'Video 3',
    url: 'https://www.youtube.com/watch?v=zCMwBPZoIWw',
    thumbnail: 'https://img.youtube.com/vi/zCMwBPZoIWw/maxresdefault.jpg',
    platform: 'youtube'
  },
  {
    id: '32NpdrXSHwo',
    title: 'Short',
    url: 'https://www.youtube.com/shorts/32NpdrXSHwo',
    thumbnail: 'https://img.youtube.com/vi/32NpdrXSHwo/maxresdefault.jpg',
    platform: 'youtube'
  },
  {
    id: 'P5hvKP8tTU4',
    title: 'Video 4',
    url: 'https://www.youtube.com/watch?v=P5hvKP8tTU4',
    thumbnail: 'https://img.youtube.com/vi/P5hvKP8tTU4/maxresdefault.jpg',
    platform: 'youtube'
  },
  {
    id: 'WRrwcxfVII0',
    title: 'Short 2',
    url: 'https://www.youtube.com/shorts/WRrwcxfVII0',
    thumbnail: 'https://img.youtube.com/vi/WRrwcxfVII0/maxresdefault.jpg',
    platform: 'youtube'
  }
]
</script>

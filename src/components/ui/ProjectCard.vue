<template>
  <div class="project-card glass-card overflow-hidden group cursor-pointer
              hover:border-primary/50 transition-all duration-500
              hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
    <!-- Image/Video Preview -->
    <div class="relative h-48 bg-card overflow-hidden">
      <!-- YouTube Embed -->
      <iframe v-if="project.youtubeId && showVideo"
              :src="`https://www.youtube.com/embed/${project.youtubeId}`"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
      </iframe>
      
      <!-- Project Image -->
      <img v-else-if="project.image"
           :src="project.image"
           :alt="project.title"
           class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      
      <!-- Placeholder -->
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
        <svg class="w-16 h-16 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      </div>
      
      <!-- YouTube Play Button Overlay -->
      <button v-if="project.youtubeId && !showVideo"
              @click="showVideo = true"
              class="absolute inset-0 flex items-center justify-center bg-black/40 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
          <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </button>
      
      <!-- Featured Badge -->
      <div v-if="project.featured" 
           class="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
        Destacado
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-text-muted text-sm mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in project.tags" 
              :key="tag"
              class="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary-light">
          {{ tag }}
        </span>
      </div>
      
      <!-- Links -->
      <div class="flex gap-4">
        <a v-if="project.liveUrl && project.liveUrl !== '#'"
           :href="project.liveUrl"
           target="_blank"
           class="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Ver Demo
        </a>
        <a v-if="project.githubUrl && project.githubUrl !== '#'"
           :href="project.githubUrl"
           target="_blank"
           class="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Código
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const showVideo = ref(false)
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

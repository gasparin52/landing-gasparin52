<template>
  <section id="projects" class="section bg-background-light">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Mis <span class="gradient-text">Proyectos</span>
        </h2>
        <p class="text-text-muted text-lg max-w-2xl mx-auto">
          Una selección de proyectos en los que he trabajado
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
        <div v-for="project in projects" :key="project.id" class="reveal">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects.js'
</script>

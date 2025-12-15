<template>
  <section id="skills" class="section">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Skills & <span class="gradient-text">Tecnologías</span>
        </h2>
        <p class="text-text-muted text-lg max-w-2xl mx-auto">
          Herramientas y tecnologías con las que trabajo
        </p>
      </div>
      
      <!-- Skills Categories -->
      <div class="grid md:grid-cols-3 gap-8 mb-16 stagger">
        <div v-for="category in skillCategories" 
             :key="category.id"
             class="reveal glass-card p-6">
          <h3 class="text-xl font-bold text-text mb-6 flex items-center gap-2">
            <!-- Category Icons -->
            <span v-if="category.title === 'Frontend'" class="text-2xl">🎨</span>
            <span v-else-if="category.title === 'Backend'" class="text-2xl">⚙️</span>
            <span v-else class="text-2xl">🛠️</span>
            {{ category.title }}
          </h3>
          
          <div class="space-y-4">
            <div v-for="skill in category.skills" 
                 :key="skill.name"
                 class="group">
              <div class="flex justify-between items-center mb-1">
                <span class="text-text-muted text-sm group-hover:text-text transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-xs text-primary">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-card rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                     :style="{ width: skill.level + '%' }">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Certifications -->
      <div class="reveal">
        <h3 class="text-2xl font-bold text-center mb-8">
          📜 Certificaciones & Cursos
        </h3>
        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="cert in certifications" 
               :key="cert.id"
               class="glass-card px-6 py-4 flex items-center gap-4 hover:border-primary/50 transition-all">
            <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-text">{{ cert.title }}</h4>
              <p class="text-text-muted text-sm">{{ cert.issuer }} · {{ cert.year }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tech Tags Cloud -->
      <div class="mt-16 reveal">
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in allTechs" 
                :key="tech"
                class="px-4 py-2 rounded-full bg-card border border-border text-text-muted text-sm
                       hover:border-primary hover:text-primary hover:bg-primary/10 transition-all cursor-default">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillCategories, certifications } from '@/data/skills.js'

// Extract all tech names for the tag cloud
const allTechs = skillCategories.flatMap(cat => cat.skills.map(s => s.name))
</script>

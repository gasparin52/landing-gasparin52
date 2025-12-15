<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1a24_1px,transparent_1px),linear-gradient(to_bottom,#1a1a24_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 reveal">
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-text-muted text-sm">Disponible para proyectos</span>
      </div>
      
      <!-- Main Title -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6 reveal">
        Hola, soy
        <span class="gradient-text"> Gasparin</span>
      </h1>
      
      <!-- Subtitle with typing effect styling -->
      <p class="text-xl md:text-2xl text-text-muted mb-8 reveal">
        Desarrollador Web & Creador Digital
      </p>
      
      <!-- Description -->
      <p class="text-lg text-text-muted max-w-2xl mx-auto mb-10 reveal">
        Creo experiencias digitales únicas combinando código limpio y diseño moderno.
        Especializado en Vue.js, Node.js y tecnologías web.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
        <a href="#projects" class="glow-btn text-lg">
          Ver Proyectos
        </a>
        <a href="#about" 
           class="px-8 py-3 rounded-lg border border-border text-text 
                  hover:border-primary hover:text-primary transition-all duration-300">
          Conocerme más
        </a>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}
</style>

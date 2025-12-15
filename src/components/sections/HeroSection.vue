<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/portada.png');"></div>
    <!-- Dark Overlay -->
    <div class="absolute inset-0 z-[1] bg-background/80"></div>
    
    <!-- Animated Background -->
    <div class="absolute inset-0 z-[2] overflow-hidden">
      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1a24_1px,transparent_1px),linear-gradient(to_bottom,#1a1a24_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
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

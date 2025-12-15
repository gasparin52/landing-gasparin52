<template>
  <section id="about" class="section bg-background-light">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Sobre <span class="gradient-text">Mí</span>
        </h2>
        <p class="text-text-muted text-lg max-w-2xl mx-auto">
          Conoce un poco más sobre quién soy y qué hago
        </p>
      </div>
      
      <!-- Content Grid -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image/Avatar Side -->
        <div class="reveal-left">
          <div class="relative">
            <!-- Main Image Container -->
            <div class="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-2">
              <div class="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <!-- Placeholder Avatar -->
                <svg class="w-32 h-32 text-text-muted" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <!-- Text Side -->
        <div class="reveal-right space-y-6">
          <h3 class="text-2xl font-bold text-text">
            👋 ¡Hola! Soy Gasparin
          </h3>
          
          <p class="text-text-muted leading-relaxed">
            Soy un desarrollador web apasionado por crear experiencias digitales únicas. 
            Me especializo en el desarrollo frontend con Vue.js y backend con Node.js, 
            siempre buscando aprender nuevas tecnologías.
          </p>
          
          <p class="text-text-muted leading-relaxed">
            Además del desarrollo, me gusta crear contenido y compartir lo que aprendo 
            en diferentes plataformas. Creo que la mejor forma de aprender es enseñando.
          </p>
          
          <!-- Quick Info Cards -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="glass-card p-4 text-center">
              <div class="text-3xl font-bold gradient-text">2+</div>
              <div class="text-text-muted text-sm">Años de experiencia</div>
            </div>
            <div class="glass-card p-4 text-center">
              <div class="text-3xl font-bold gradient-text">10+</div>
              <div class="text-text-muted text-sm">Proyectos completados</div>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="pt-4">
            <a href="#socials" 
               class="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors">
              Conecta conmigo
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

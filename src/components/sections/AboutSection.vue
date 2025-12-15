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
              <img 
                src="/franco.jpg" 
                alt="Franco - Gasparin" 
                class="w-full h-full rounded-xl object-cover"
              />
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
            Soy creador de contenido, desarrollador de videojuegos indie y técnico en informática. 
            Me apasiona combinar la tecnología con el arte para crear experiencias únicas 
            y proyectos que cuenten historias.
          </p>
          
          <p class="text-text-muted leading-relaxed">
            También soy músico y artista, pero con un lado curioso por la ciencia. 
            Creo que el arte y la ciencia se complementan, y me encanta explorar 
            esa intersección en todo lo que hago.
          </p>
          
          <!-- What I Do Tags -->
          <div class="flex flex-wrap gap-3 pt-4">
            <span class="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm">🎮 Videojuegos Indie</span>
            <span class="px-4 py-2 rounded-full bg-accent/20 text-accent text-sm">🎬 Creador de Contenido</span>
            <span class="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">💻 Técnico IT</span>
            <span class="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">🎵 Músico</span>
            <span class="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 text-sm">🎨 Artista</span>
            <span class="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">🔬 Ciencia</span>
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

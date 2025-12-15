<template>
  <div class="app">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SocialSection />
      <ProjectsSection />
      <SkillsSection />
      <CarouselSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'

// Layout components
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

// Section components
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SocialSection from '@/components/sections/SocialSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import CarouselSection from '@/components/sections/CarouselSection.vue'

// Initialize scroll reveal animations
useScrollReveal()
</script>

<style>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for fixed navbar */
}
</style>

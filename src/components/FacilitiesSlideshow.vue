<template>
  <section class="container-gutter pt-4 pb-8">
    <div class="relative w-full aspect-[16/9] rounded-hero overflow-hidden bg-gt-navy">
      <!-- Slides -->
      <transition-group name="fade" tag="div">
        <div
          v-for="(slide, i) in slides"
          :key="i + '-' + currentSlide"
          v-show="i === currentSlide"
          class="absolute inset-0"
        >
          <!-- Background Image -->
          <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${slide.image})` }">
            <!-- Dark overlay for text legibility -->
            <div class="absolute inset-0 bg-black/40" />
          </div>

          <!-- Content -->
          <div class="relative h-full flex flex-col">
            <!-- Top Labels -->
            <div class="flex justify-between items-start p-8 text-white">
              <div class="text-sm tracking-wider opacity-80">Our Facilities</div>
              <div class="text-sm tracking-wider opacity-80">AVAILABLE<br>FACILITY</div>
            </div>

            <!-- Main Content Area -->
            <div class="flex-1 flex items-center px-8 pb-24">
              <div class="flex-1">
                <!-- Slide Counter -->
                <div class="text-white text-4xl font-light mb-6">
                  {{ String(i + 1).padStart(2, '0') }}<span class="text-white/40">/{{ String(slides.length).padStart(2, '0') }}</span>
                </div>

                <!-- Main Heading -->
                <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl">
                  {{ slide.title }}
                </h2>
              </div>

              <!-- Info Card -->
              <div class="hidden lg:block w-80 ml-8">
                <div class="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                  <h3 class="text-white text-xl font-semibold mb-3">{{ slide.facilityName }}</h3>
                  <p class="text-white/90 text-sm leading-relaxed">{{ slide.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- Animated Progress Bars -->
      <div class="absolute bottom-0 left-0 right-0 flex gap-0 h-1">
        <div
          v-for="(slide, i) in slides"
          :key="'bar-' + i"
          class="flex-1 bg-white/20 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-white origin-left transition-transform"
            :class="{ 'animate-progress': i === currentSlide, 'scale-x-0': i > currentSlide, 'scale-x-100': i < currentSlide }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    title: 'State-of-the-Art Computing Facilities Driving Innovation',
    watermark: 'Computing',
    facilityName: 'College of Computing',
    description: 'Leading computing infrastructure supporting cutting-edge research and innovation in computer science, data science, and computational media.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Advanced Engineering Laboratories for Discovery',
    watermark: 'Engineering',
    facilityName: 'College of Engineering',
    description: 'World-class labs equipped for groundbreaking engineering research and education across multiple disciplines.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Modern Learning Spaces Fostering Collaboration',
    watermark: 'Campus',
    facilityName: 'Campus Facilities',
    description: 'Collaborative environments designed to foster innovation and interdisciplinary learning across seven colleges.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Research Centers of Excellence',
    watermark: 'Research',
    facilityName: 'Research Facilities',
    description: 'Multiple specialized centers driving discoveries that improve the human condition with $1.47B in research funding.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Business and Innovation Hubs',
    watermark: 'Business',
    facilityName: 'Scheller College',
    description: 'Facilities supporting entrepreneurship, business education, and industry partnerships that transform tomorrow.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop'
  }
]

const currentSlide = ref(0)
let timer

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  // Auto-advance every 5 seconds
  timer = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
/* Fade transition for slides */
.fade-enter-active, .fade-leave-active {
  transition: opacity 600ms ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Watermark text styling */
.watermark-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
  overflow: hidden;
}

.watermark-text span {
  color: rgba(255, 255, 255, 0.15);
  font-weight: 800;
  font-size: min(20vw, 16rem);
  line-height: 1;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

/* Progress bar animation - fills over 5 seconds */
@keyframes progress-fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.animate-progress {
  animation: progress-fill 5s linear forwards;
}
</style>

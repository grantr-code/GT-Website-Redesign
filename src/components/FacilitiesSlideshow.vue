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

            <!-- Large Watermark Text -->
            <div class="watermark-text">
              <span>{{ slide.watermark }}</span>
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
    title: 'Exceptional Facilities Designed to Support Learning, Research, and Discovery',
    watermark: 'Library',
    facilityName: 'Bodleian Libraries',
    description: 'One of the largest and oldest research libraries in Europe, offering access to millions of resources.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'State-of-the-Art Research Laboratories for Innovation',
    watermark: 'Research',
    facilityName: 'Advanced Research Labs',
    description: 'Cutting-edge laboratory spaces equipped with the latest technology for groundbreaking research.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Modern Learning Spaces Fostering Collaboration',
    watermark: 'Campus',
    facilityName: 'Student Commons',
    description: 'Collaborative spaces designed to enhance the student experience and promote interactive learning.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Advanced Computing Centers Powering Discovery',
    watermark: 'Technology',
    facilityName: 'Computing Center',
    description: 'High-performance computing facilities supporting complex simulations and data analysis.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Athletic and Wellness Facilities for Peak Performance',
    watermark: 'Athletics',
    facilityName: 'Recreation Center',
    description: 'World-class athletic facilities promoting physical health and competitive excellence.',
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

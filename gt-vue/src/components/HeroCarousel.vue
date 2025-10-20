<template>
  <section class="container-gutter pt-4">
    <div class="relative w-full aspect-[16/9] rounded-hero overflow-hidden bg-gt-gray/10">
      <!-- Watermark text -->
      <div class="hero-watermark">
        <span>Georgia&nbsp;Tech</span>
      </div>

      <!-- Slides -->
      <transition-group name="fade" tag="div">
        <div v-for="(src, i) in sources" :key="i + '-' + current" v-show="i === current" class="absolute inset-0">
          <video
            :src="src"
            class="w-full h-full object-cover"
            autoplay
            muted
            playsinline
            loop
          />
          <!-- gradient bottom overlay for text legibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>
      </transition-group>

      <!-- Bottom content -->
      <div class="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
        <div class="text-sm tracking-wide">2025</div>
        <div class="flex-1 px-6">
          <p class="max-w-3xl text-base sm:text-lg leading-snug">
            Fully Funded Graduate Studentship For 2025-2026. Check our selection of studentship accepting
            applications now
          </p>
        </div>
        <div class="flex gap-2">
          <button @click="prev" class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white text-gt-navy hover:bg-gt-gold hover:text-gt-navy transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M12.28 4.22a.75.75 0 010 1.06L8.56 9l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button @click="next" class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white text-gt-navy hover:bg-gt-gold hover:text-gt-navy transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M7.72 4.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06L10.94 10 7.72 6.78a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sources = [
  '/videos/Video1.mp4',
  '/videos/Video2.mp4',
  '/videos/Video3.mp4',
  '/videos/Video4.mp4',
  '/videos/Video5.mp4',
  '/videos/Video6.mp4',
]

const current = ref(0)
let timer

function next() {
  current.value = (current.value + 1) % sources.length
}
function prev() {
  current.value = (current.value - 1 + sources.length) % sources.length
}

onMounted(() => {
  timer = setInterval(next, 8000)
})
onBeforeUnmount(() => clearInterval(timer))

</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 400ms; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

<template>
  <section class="container-gutter pt-4">
    <div class="relative w-full aspect-[16/10] rounded-hero overflow-hidden bg-gt-gray/10">
      <!-- Watermark text -->
      <div class="hero-watermark">
        <span>Georgia&nbsp;Tech</span>
      </div>

      <!-- Slides -->
      <div v-for="(src, i) in sources" :key="i" v-show="i === current" class="absolute inset-0">
        <video
          :ref="el => setVideoRef(el, i)"
          :src="src"
          class="w-full h-full object-cover"
          muted
          playsinline
          preload="auto"
          @loadeddata="() => handleVideoLoad(i)"
          @ended="next"
          @error="() => handleVideoError(src)"
        />
        <!-- gradient bottom overlay for text legibility -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <!-- Bottom content -->
      <div class="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
        <div class="text-sm tracking-wide">2025</div>
        <div class="flex-1 px-6">
          <p class="max-w-3xl text-base sm:text-lg leading-snug">
            {{ slideTexts[current] }}
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
import { ref, watch, onMounted } from 'vue'

const sources = [
  '/videos/Video1.mp4',
  '/videos/Video2.mp4',
  '/videos/Video3.mp4',
  '/videos/Video4.mp4',
  '/videos/Video5.mp4',
  '/videos/Video6.mp4',
]

const slideTexts = [
  'Fully Funded Graduate Studentship For 2025-2026. Check our selection of studentship accepting applications now',
  'Cutting-Edge Research Opportunities. Join world-renowned faculty in groundbreaking research across all disciplines',
  'State-of-the-Art Campus Facilities. Explore our modern labs, innovation spaces, and collaborative learning environments',
  'Vibrant Student Life. Experience a diverse community with 400+ student organizations and endless opportunities to connect',
  'Leading Innovation Programs. Be part of our entrepreneurship ecosystem and turn your ideas into reality',
  'Global Alumni Network. Join 145,000+ Yellow Jackets making an impact in every corner of the world'
]

const current = ref(0)
const videoRefs = ref([])

function setVideoRef(el, index) {
  if (el) {
    videoRefs.value[index] = el
  }
}

function next() {
  current.value = (current.value + 1) % sources.length
}

function prev() {
  current.value = (current.value - 1 + sources.length) % sources.length
}

function playCurrentVideo() {
  // Pause all videos
  videoRefs.value.forEach((video, index) => {
    if (video) {
      video.pause()
      // Reset non-current videos to start
      if (index !== current.value) {
        video.currentTime = 0
      }
    }
  })

  // Play the current video
  const currentVideo = videoRefs.value[current.value]
  if (currentVideo) {
    currentVideo.currentTime = 0
    currentVideo.play().catch(error => {
      console.error('Error playing video:', error)
    })
  }
}

function handleVideoLoad(index) {
  console.log(`Video ${index + 1} loaded successfully`)
  // Play the first video once it's loaded
  if (index === 0 && current.value === 0) {
    playCurrentVideo()
  }
}

function handleVideoError(src) {
  console.error(`Error loading video: ${src}`)
  console.log('Please ensure videos are in the public/videos/ folder')
}

// Watch for changes to current slide and play the video
watch(current, () => {
  playCurrentVideo()
})
</script>

<style scoped>
</style>

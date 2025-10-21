<template>
  <section class="container-gutter pt-4">
    <div
      class="relative w-full aspect-[16/10] rounded-hero overflow-hidden bg-gt-gray/10"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <!-- Video Slides -->
      <div
        v-for="(video, index) in [currentIndex, nextIndex]"
        :key="`video-${video}`"
        v-show="video === currentIndex"
        class="absolute inset-0"
      >
        <video
          :ref="el => setVideoRef(el, video)"
          :src="sources[video]"
          class="w-full h-full object-cover"
          muted
          playsinline
          preload="auto"
          @loadeddata="handleVideoLoaded(video)"
          @ended="handleVideoEnded"
          @error="handleVideoError(video)"
        />
        <!-- Gradient overlay for text legibility -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <!-- Loading state -->
        <div
          v-if="!loadedVideos.has(video)"
          class="absolute inset-0 flex items-center justify-center bg-gt-navy/20 backdrop-blur-sm"
        >
          <div class="flex flex-col items-center gap-3">
            <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <p class="text-white text-sm">Loading video...</p>
          </div>
        </div>
      </div>

      <!-- Content overlay -->
      <div class="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white pointer-events-none">
        <div class="text-sm tracking-wide">2025</div>
        <div class="flex-1 px-6">
          <p class="max-w-3xl text-base sm:text-lg leading-snug">
            {{ slideTexts[currentIndex] }}
          </p>
        </div>
        <!-- Navigation buttons -->
        <div class="flex gap-2 pointer-events-auto">
          <button
            @click="goToPrev"
            class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white text-gt-navy hover:bg-gt-gold hover:text-gt-navy transition-colors"
            aria-label="Previous video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M12.28 4.22a.75.75 0 010 1.06L8.56 9l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button
            @click="goToNext"
            class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white text-gt-navy hover:bg-gt-gold hover:text-gt-navy transition-colors"
            aria-label="Next video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M7.72 4.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06L10.94 10 7.72 6.78a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Progress bars -->
      <div class="absolute bottom-0 left-0 right-0 flex h-1">
        <div
          v-for="(_, index) in sources"
          :key="`progress-${index}`"
          class="flex-1 bg-white/20 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-white origin-left transition-transform duration-300"
            :style="{
              transform: index < currentIndex ? 'scaleX(1)' : index === currentIndex ? `scaleX(${progress})` : 'scaleX(0)'
            }"
          />
        </div>
      </div>

      <!-- Pause indicator -->
      <transition name="fade">
        <div
          v-if="isPaused"
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div class="bg-black/50 backdrop-blur-sm rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-12 h-12">
              <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const sources = [
  '/videos/Video1.mp4',
  '/videos/Video2.mp4',
  '/videos/Video3.mp4',
  '/videos/Video4.mp4',
  '/videos/Video5.mp4',
  '/videos/Video6.mp4',
]

const slideTexts = [
  'Developing exceptional leaders who advance technology and improve the human condition',
  '#1 Fastest-Growing University Over the Past Decade - Join our community of innovators',
  '$1.47 Billion in Sponsored Research Awards - Be part of groundbreaking discoveries',
  '#9 Public University in the Nation - Excellence in education and research',
  'Seven Colleges, Endless Possibilities - Computing, Engineering, Sciences, Business, Design, Liberal Arts, and Lifetime Learning',
  'Transforming Tomorrow: The Campaign for Georgia Tech - Shape the future with us'
]

// State
const currentIndex = ref(0)
const isPaused = ref(false)
const progress = ref(0)
const loadedVideos = ref(new Set())
const videoRefs = ref(new Map())
const progressInterval = ref(null)

// Computed
const nextIndex = computed(() => (currentIndex.value + 1) % sources.length)

// Video ref management
function setVideoRef(el, index) {
  if (el) {
    videoRefs.value.set(index, el)
  } else {
    videoRefs.value.delete(index)
  }
}

// Get current video element
function getCurrentVideo() {
  return videoRefs.value.get(currentIndex.value)
}

// Start progress tracking
function startProgressTracking() {
  stopProgressTracking()
  progress.value = 0

  const video = getCurrentVideo()
  if (!video || !video.duration || isNaN(video.duration)) return

  progressInterval.value = setInterval(() => {
    const video = getCurrentVideo()
    if (video && video.duration && !isPaused.value) {
      progress.value = Math.min(video.currentTime / video.duration, 1)
    }
  }, 50) // Update every 50ms for smooth progress
}

// Stop progress tracking
function stopProgressTracking() {
  if (progressInterval.value) {
    clearInterval(progressInterval.value)
    progressInterval.value = null
  }
}

// Play video
async function playVideo(index) {
  const video = videoRefs.value.get(index)
  if (!video) return

  try {
    video.currentTime = 0
    await video.play()
    if (index === currentIndex.value) {
      startProgressTracking()
    }
  } catch (err) {
    console.error(`Error playing video ${index + 1}:`, err)
    // If video fails to play, try to skip to next
    if (index === currentIndex.value) {
      setTimeout(() => goToNext(), 1000)
    }
  }
}

// Pause video
function pauseVideo(index) {
  const video = videoRefs.value.get(index)
  if (video) {
    video.pause()
  }
}

// Navigation
function goToNext() {
  currentIndex.value = (currentIndex.value + 1) % sources.length
}

function goToPrev() {
  currentIndex.value = (currentIndex.value - 1 + sources.length) % sources.length
}

// Event handlers
function handleVideoLoaded(index) {
  loadedVideos.value.add(index)
  console.log(`Video ${index + 1} loaded`)

  // If this is the current video and it just loaded, play it
  if (index === currentIndex.value) {
    playVideo(index)
  }
}

function handleVideoEnded() {
  if (!isPaused.value) {
    goToNext()
  }
}

function handleVideoError(index) {
  console.error(`Error loading video ${index + 1}: ${sources[index]}`)
  // Skip this video after a short delay if it's the current one
  if (index === currentIndex.value) {
    setTimeout(() => {
      if (currentIndex.value === index) { // Still on the same video
        goToNext()
      }
    }, 2000)
  }
}

// Watch for index changes
watch(currentIndex, (newIndex, oldIndex) => {
  // Pause old video
  if (oldIndex !== undefined) {
    pauseVideo(oldIndex)
  }

  // Reset progress
  progress.value = 0
  stopProgressTracking()

  // Play new video if loaded
  const video = videoRefs.value.get(newIndex)
  if (video && loadedVideos.value.has(newIndex)) {
    playVideo(newIndex)
  }
})

// Watch pause state
watch(isPaused, (paused) => {
  const video = getCurrentVideo()
  if (!video) return

  if (paused) {
    video.pause()
    stopProgressTracking()
  } else {
    video.play().catch(err => console.error('Error resuming video:', err))
    startProgressTracking()
  }
})

// Lifecycle
onMounted(() => {
  // Start with first video when component mounts
  setTimeout(() => {
    const video = getCurrentVideo()
    if (video && loadedVideos.value.has(0)) {
      playVideo(0)
    }
  }, 100)
})

onUnmounted(() => {
  stopProgressTracking()
  // Pause all videos
  videoRefs.value.forEach((video) => {
    if (video) video.pause()
  })
})
</script>

<style scoped>
/* Fade transition for pause indicator */
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Loading spinner animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>

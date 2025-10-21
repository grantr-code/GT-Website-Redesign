<template>
  <section class="container-gutter py-24">
    <!-- Header Section -->
    <div class="grid grid-cols-12 gap-x-6 mb-20">
      <div class="col-span-3 hidden md:block">
        <div class="text-gt-gray/70 uppercase tracking-widest text-xs md:text-sm">2025's Recap</div>
      </div>
      <div class="col-span-12 md:col-span-9">
        <div class="text-gt-gray mb-3 text-base md:text-lg">About us</div>
        <h2 class="text-[28px] sm:text-[36px] md:text-[56px] leading-[1.15] font-semibold tracking-tight">
          Our numbers reflect a tradition of excellence and
          <span class="text-gt-navy">forward‑thinking</span> impact in education, research, and
          innovation
        </h2>
      </div>
    </div>

    <!-- At a Glance Section -->
    <div class="grid grid-cols-12 gap-x-6 gap-y-8 items-stretch">
      <!-- Left: Georgia Tech at a Glance -->
      <div class="col-span-12 md:col-span-3 flex flex-col justify-between bg-gray-50 rounded-2xl p-8">
        <div>
          <h3 class="text-[32px] md:text-[40px] font-bold leading-tight mb-6">
            Georgia Tech at a Glance
          </h3>
        </div>
        <div>
          <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gt-navy text-white hover:bg-gt-gold hover:text-gt-navy transition-all duration-300 font-medium">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Right: Statistics Carousel -->
      <div class="col-span-12 md:col-span-9 relative">
        <div class="overflow-hidden">
          <transition-group name="slide-fade" tag="div" class="relative">
            <div v-for="(statPair, index) in statPairs" :key="index" v-show="index === currentStat" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- First Stat -->
              <div class="bg-white border border-gray-100 rounded-2xl p-8">
                <div class="text-gt-gold text-sm md:text-base uppercase tracking-widest mb-4 font-medium">
                  {{ statPair[0].label }}
                </div>
                <div class="text-[48px] md:text-[72px] font-bold leading-none mb-4">
                  {{ statPair[0].number }}
                </div>
                <div class="text-gt-gray text-sm md:text-base">
                  {{ statPair[0].description }}
                </div>
              </div>

              <!-- Second Stat -->
              <div class="bg-white border border-gray-100 rounded-2xl p-8">
                <div class="text-gt-gold text-sm md:text-base uppercase tracking-widest mb-4 font-medium">
                  {{ statPair[1].label }}
                </div>
                <div class="text-[48px] md:text-[72px] font-bold leading-none mb-4">
                  {{ statPair[1].number }}
                </div>
                <div class="text-gt-gray text-sm md:text-base">
                  {{ statPair[1].description }}
                </div>
              </div>
            </div>
          </transition-group>
        </div>

        <!-- Navigation Controls -->
        <div class="flex justify-end gap-2 mt-6">
          <button @click="prevStat" class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gt-navy text-white hover:bg-gt-gold hover:text-gt-navy transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M12.28 4.22a.75.75 0 010 1.06L8.56 9l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button @click="nextStat" class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gt-navy text-white hover:bg-gt-gold hover:text-gt-navy transition-all duration-300">
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
import { ref } from 'vue'

// Statistics data - grouped in pairs for display
const statPairs = [
  [
    {
      label: 'Students',
      number: '45,000+',
      description: 'Across undergraduate, graduate, and professional levels'
    },
    {
      label: 'Research Centers',
      number: '100+',
      description: 'World-leading Innovation Hubs'
    }
  ],
  [
    {
      label: 'Public Universities',
      number: 'Top 10',
      description: 'Among U.S. Public Universities'
    },
    {
      label: 'Research Expenditures',
      number: '$2.5B+',
      description: 'Annual Research Volume'
    }
  ],
  [
    {
      label: 'Countries Represented',
      number: '100+',
      description: 'Global student and faculty community'
    },
    {
      label: 'Alumni Network',
      number: '200K+',
      description: 'Georgia Tech graduates worldwide'
    }
  ]
]

const currentStat = ref(0)

function nextStat() {
  currentStat.value = (currentStat.value + 1) % statPairs.length
}

function prevStat() {
  currentStat.value = (currentStat.value - 1 + statPairs.length) % statPairs.length
}
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>

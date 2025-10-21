<template>
  <section class="container-gutter py-24">
    <!-- Header Section -->
    <div class="grid grid-cols-12 gap-x-6 mb-20">
      <div class="col-span-3 hidden md:block">
        <div class="text-gt-gray/70 uppercase tracking-widest text-xs md:text-sm">Our Programs</div>
      </div>
      <div class="col-span-12 md:col-span-9">
        <div class="text-gt-gray mb-3 text-base md:text-lg">About us</div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <h2 class="col-span-1 lg:col-span-7 text-[28px] sm:text-[36px] md:text-[56px] leading-[1.15] font-semibold tracking-tight">
            A World-Class Range of
            <span class="text-gt-gold">Academic Programs</span> for Every
            Ambition and Passion
          </h2>
          <div class="col-span-1 lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2000&auto=format&fit=crop"
              alt="Academic architecture"
              class="w-full h-48 lg:h-56 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Programs List Section -->
    <div class="grid grid-cols-12 gap-x-6">
      <div class="col-span-3 hidden md:block"></div>
      <div class="col-span-12 md:col-span-9 space-y-0">
        <!-- Program Item 1 -->
        <div
          v-for="program in programs"
          :key="program.number"
          class="group grid grid-cols-12 gap-x-4 md:gap-x-6 items-center py-8 border-b border-gray-200 cursor-pointer hover:bg-gray-50/50 transition-all duration-300"
        >
          <div class="col-span-2 md:col-span-1">
            <div class="text-gt-gold text-lg md:text-xl font-light">{{ program.number }}</div>
          </div>
          <div class="col-span-7 md:col-span-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">{{ program.title }}</h3>
          </div>
          <div class="col-span-12 md:col-span-6 mt-2 md:mt-0">
            <p class="text-gt-gray/60 text-sm md:text-base leading-relaxed">{{ program.description }}</p>
          </div>
          <div class="col-span-1 flex justify-end">
            <div class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-gt-navy group-hover:border-gt-navy transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gt-gray group-hover:text-white transition-colors duration-300">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const programs = ref([
  {
    number: '01',
    title: 'Undergraduate',
    description: "World-class bachelor's degrees with personalized tutorials and a rich academic environment across arts, sciences, and humanities."
  },
  {
    number: '02',
    title: 'Graduate',
    description: "Advanced master's and doctoral studies guided by leading researchers, designed to shape future leaders and experts."
  },
  {
    number: '03',
    title: 'Continuing Education',
    description: 'Flexible learning for professionals and adults, offering online and in-person programs to support lifelong development.'
  },
  {
    number: '04',
    title: 'Short Courses',
    description: 'Quick, focused learning across diverse topics—ideal for upskilling, exploring new interests, or experiencing Oxford in brief.'
  }
])
</script>

<style scoped>
</style>

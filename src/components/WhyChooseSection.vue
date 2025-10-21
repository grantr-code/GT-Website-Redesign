<template>
  <section class="container-gutter pt-4 pb-8">
    <div class="relative w-full rounded-hero overflow-hidden bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <!-- Header Section -->
      <div class="mb-16">
        <div class="text-white/60 uppercase tracking-widest text-xs md:text-sm mb-6">Why Choose us</div>
        <h2 class="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.15] font-semibold tracking-tight mb-12">
          A Legacy of Excellence, a Future of Possibility
        </h2>
      </div>

      <!-- Dynamic Background Text -->
      <div class="mb-20 max-w-3xl">
        <transition name="fade-text" mode="out-in">
          <p :key="selectedBox" class="text-white/60 text-base md:text-lg leading-relaxed">
            {{ boxes[selectedBox].backgroundText }}
          </p>
        </transition>
      </div>

      <!-- Interactive Boxes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(box, index) in boxes"
          :key="index"
          @click="selectBox(index)"
          class="box-card cursor-pointer transition-all duration-300 p-8 rounded-2xl border relative"
          :class="{
            'box-selected': selectedBox === index,
            'box-default': selectedBox !== index
          }"
        >
          <!-- Number Badge -->
          <div class="text-white/40 text-lg font-light mb-8">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Icon -->
          <div class="mb-6 text-white">
            <component :is="box.icon" class="w-12 h-12" />
          </div>

          <!-- Title -->
          <h3 class="text-xl md:text-2xl font-semibold mb-4">
            {{ box.title }}
          </h3>

          <!-- Description -->
          <p class="text-white/70 text-sm leading-relaxed">
            {{ box.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'

// Icon Components as render functions
const GraduationCapIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    d: 'M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z'
  }),
  h('path', {
    d: 'M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z'
  }),
  h('path', {
    d: 'M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z'
  })
])

const BuildingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    fillRule: 'evenodd',
    d: 'M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z',
    clipRule: 'evenodd'
  })
])

const DocumentIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    fillRule: 'evenodd',
    d: 'M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z',
    clipRule: 'evenodd'
  }),
  h('path', {
    d: 'M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z'
  })
])

const GlobeIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor'
}, [
  h('path', {
    d: 'M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z'
  })
])

const selectedBox = ref(2) // Default to box 03 (index 2) to match the image

const boxes = [
  {
    title: 'Top-Ranked Education',
    description: 'Georgia Tech consistently ranks among the world\'s top universities, recognized for its academic excellence across engineering, computing, sciences, and business.',
    backgroundText: 'From world-renowned academics to a one-of-a-kind collegiate experience, discover what sets Georgia Tech apart—and why it\'s the first choice for scholars, researchers, and leaders from around the globe.',
    icon: GraduationCapIcon
  },
  {
    title: 'World-Class Faculty',
    description: 'Students learn from world-renowned scholars and researchers at the forefront of their fields, including Nobel Laureates, policy advisors, and innovators shaping the future.',
    backgroundText: 'Learn from the best minds in technology, engineering, and innovation. Our faculty members are pioneers in their fields, bringing cutting-edge research and real-world expertise into every classroom.',
    icon: BuildingIcon
  },
  {
    title: 'Unique Collegiate System',
    description: 'At Georgia Tech, you\'re not just part of a university—you belong to a vibrant community that provides personal academic support, close-knit communities, and lifelong connections.',
    backgroundText: 'Experience a supportive community where collaboration thrives. Georgia Tech\'s unique approach combines academic rigor with personalized mentorship and a strong sense of belonging.',
    icon: DocumentIcon
  },
  {
    title: 'Global Network & Impact',
    description: 'Georgia Tech is home to students from over 100 countries and a vast international alumni network. Our influence reaches across continents and industries worldwide.',
    backgroundText: 'Join a global community of innovators and leaders. With alumni in every corner of the world, Georgia Tech\'s network opens doors and creates opportunities that span the globe.',
    icon: GlobeIcon
  }
]

function selectBox(index) {
  selectedBox.value = index
}
</script>

<style scoped>
.box-card {
  @apply bg-white/5 border-white/10;
}

.box-default {
  @apply hover:bg-white/10 hover:border-white/20;
}

.box-selected {
  @apply bg-white/10 border-white/30 -translate-y-3;
  box-shadow: 0 20px 40px -15px rgba(255, 255, 255, 0.1);
}

/* Text fade transition */
.fade-text-enter-active,
.fade-text-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-text-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-text-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

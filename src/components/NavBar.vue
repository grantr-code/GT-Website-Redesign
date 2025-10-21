<template>
  <header class="gt-header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container-gutter">
      <div class="gt-bar">
        <!-- Georgia Tech Logo -->
        <a href="#" class="gt-brand" aria-label="Georgia Institute of Technology home">
          <img src="../assets/GTOneLine_RGB.svg" alt="Georgia Tech" class="gt-logo" />
        </a>

        <div class="gt-center" ref="centerContainer">
          <!-- Combined Navigation Pill -->
          <nav class="nav-pill" aria-label="Primary" ref="navPill">
            <!-- Primary Links -->
            <button
              v-for="item in visiblePrimaryLinks"
              :key="item"
              type="button"
              class="nav-pill-item"
            >
              {{ item }}
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Secondary Links -->
            <button
              v-for="item in visibleSecondaryLinks"
              :key="item"
              type="button"
              class="nav-pill-item nav-pill-item--secondary"
            >
              {{ item }}
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </nav>

          <!-- Search Bar -->
          <div class="gt-search" :class="{ 'search-expanded': hasHiddenItems }" role="search">
            <input type="search" placeholder="Search ..." aria-label="Search" />
            <button type="button" aria-label="Submit search" class="search-button">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 0 1 5.323 10.961l4.483 4.482a.75.75 0 1 1-1.06 1.061l-4.482-4.483A6.75 6.75 0 1 1 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <!-- "More" Overflow Button -->
          <div
            v-if="hasHiddenItems"
            class="more-dropdown-container"
            ref="moreDropdownRef"
          >
            <button
              type="button"
              class="more-button"
              @click="moreMenuOpen = !moreMenuOpen"
              aria-label="More menu items"
              :aria-expanded="moreMenuOpen"
            >
              More
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="more-icon">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- More Dropdown Menu -->
            <transition name="dropdown">
              <div v-if="moreMenuOpen" class="more-dropdown">
                <button
                  v-for="item in hiddenItems"
                  :key="item"
                  type="button"
                  class="more-dropdown-item"
                  @click="moreMenuOpen = false"
                >
                  {{ item }}
                </button>
              </div>
            </transition>
          </div>
        </div>

        <button type="button" class="gt-login hide-below-768">Login</button>

        <!-- Hamburger Menu Button (mobile only) -->
        <button
          type="button"
          class="hamburger-button hide-above-768"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="container-gutter">
          <nav class="mobile-nav">
            <div class="mobile-nav-section">
              <div class="mobile-nav-label">Main</div>
              <button
                v-for="item in primaryLinks"
                :key="item"
                type="button"
                class="mobile-nav-item"
                @click="mobileMenuOpen = false"
              >
                {{ item }}
              </button>
            </div>

            <div class="mobile-nav-section">
              <div class="mobile-nav-label">More</div>
              <button
                v-for="item in secondaryLinks"
                :key="item"
                type="button"
                class="mobile-nav-item"
                @click="mobileMenuOpen = false"
              >
                {{ item }}
              </button>
            </div>

            <div class="mobile-search">
              <input type="search" placeholder="Search ..." aria-label="Search" />
              <button type="button" aria-label="Submit search" class="search-button">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 0 1 5.323 10.961l4.483 4.482a.75.75 0 1 1-1.06 1.061l-4.482-4.483A6.75 6.75 0 1 1 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <button type="button" class="mobile-login-button" @click="mobileMenuOpen = false">
              Login
            </button>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const primaryLinks = ['About', 'Research', 'Admissions', 'News']
const secondaryLinks = ['Community', 'Colleges', 'Department']

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const moreMenuOpen = ref(false)

const moreDropdownRef = ref(null)
const centerContainer = ref(null)
const navPill = ref(null)

// Track how many items should be hidden based on available space
const hiddenSecondaryCount = ref(0)
const hiddenPrimaryCount = ref(0)

// Computed properties for visible items
const visibleSecondaryLinks = computed(() => {
  return secondaryLinks.slice(0, secondaryLinks.length - hiddenSecondaryCount.value)
})

const visiblePrimaryLinks = computed(() => {
  return primaryLinks.slice(0, primaryLinks.length - hiddenPrimaryCount.value)
})

// Computed property for hidden items (shown in More dropdown)
const hiddenItems = computed(() => {
  const hidden = []

  // Add hidden secondary links first (reversed order: Department, Colleges, Community)
  if (hiddenSecondaryCount.value > 0) {
    hidden.push(...secondaryLinks.slice(-hiddenSecondaryCount.value).reverse())
  }

  // Add hidden primary links (reversed order: News, Admissions, Research, About)
  if (hiddenPrimaryCount.value > 0) {
    hidden.push(...primaryLinks.slice(-hiddenPrimaryCount.value).reverse())
  }

  return hidden
})

const hasHiddenItems = computed(() => {
  return hiddenSecondaryCount.value > 0 || hiddenPrimaryCount.value > 0
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function handleClickOutside(event) {
  if (moreDropdownRef.value && !moreDropdownRef.value.contains(event.target)) {
    moreMenuOpen.value = false
  }
}

function calculateOverflow() {
  // Only calculate on desktop (768px and above)
  if (window.innerWidth < 768) {
    hiddenSecondaryCount.value = 0
    hiddenPrimaryCount.value = 0
    return
  }

  if (!centerContainer.value) return

  const container = centerContainer.value
  const availableWidth = container.offsetWidth

  // Approximate widths (in pixels) - these are estimates
  const primaryItemWidth = 105 // approximate width per primary nav item
  const secondaryItemWidth = 110 // approximate width per secondary nav item
  const searchMinWidth = 180 // minimum width for search bar
  const searchMaxWidth = 280 // maximum width for search bar
  const moreButtonWidth = 90 // width of More button
  const gapWidth = 16 // gap between elements

  // Start by showing all items
  let tempHiddenSecondary = 0
  let tempHiddenPrimary = 0

  // Calculate required width for all visible items
  function calculateRequiredWidth(hiddenSec, hiddenPrim) {
    const visiblePrimaryCount = primaryLinks.length - hiddenPrim
    const visibleSecondaryCount = secondaryLinks.length - hiddenSec

    const navPillWidth =
      (visiblePrimaryCount * primaryItemWidth) +
      (visibleSecondaryCount * secondaryItemWidth) +
      20 // padding for pill

    const searchWidth = searchMinWidth
    const moreWidth = (hiddenSec > 0 || hiddenPrim > 0) ? moreButtonWidth : 0

    return navPillWidth + searchWidth + moreWidth + (gapWidth * 2)
  }

  // Progressive hiding: secondary items first
  while (tempHiddenSecondary < secondaryLinks.length && calculateRequiredWidth(tempHiddenSecondary, tempHiddenPrimary) > availableWidth) {
    tempHiddenSecondary++
  }

  // Then hide primary items if still needed
  while (tempHiddenPrimary < primaryLinks.length && calculateRequiredWidth(tempHiddenSecondary, tempHiddenPrimary) > availableWidth) {
    tempHiddenPrimary++
  }

  hiddenSecondaryCount.value = tempHiddenSecondary
  hiddenPrimaryCount.value = tempHiddenPrimary
}

// Debounce resize events
let resizeTimeout = null
function handleResize() {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
  resizeTimeout = setTimeout(() => {
    calculateOverflow()
  }, 150)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)

  // Initial calculation
  setTimeout(() => {
    calculateOverflow()
  }, 100)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
})

// Watch for visibility changes
watch([visiblePrimaryLinks, visibleSecondaryLinks], () => {
  // Recalculate after DOM updates
  setTimeout(() => {
    calculateOverflow()
  }, 50)
})
</script>

<style scoped>
/* ======================
   HEADER BASE
   ====================== */
.gt-header {
  @apply sticky top-0 z-30 bg-transparent backdrop-blur-none border-b border-transparent;
  box-shadow: none;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.gt-header.header-scrolled {
  @apply border-gt-navy/[0.06];
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(18px);
  box-shadow: 0 12px 32px -24px rgba(0, 48, 87, 0.45);
}

.gt-bar {
  @apply flex items-center gap-4 py-3 w-full;
}

/* ======================
   LOGO
   ====================== */
.gt-brand {
  @apply flex items-center no-underline;
}

.gt-logo {
  @apply h-14 w-auto flex-shrink-0;
  min-height: 3.5rem;
  max-height: 3.5rem;
}

/* ======================
   CENTER NAVIGATION
   ====================== */
.gt-center {
  @apply flex flex-1 items-center justify-start gap-3 overflow-visible min-w-0;
}

/* ======================
   NAVIGATION PILLS
   ====================== */
.nav-pill {
  @apply flex items-center bg-white border border-gt-navy/[0.12] rounded-full px-1.5 py-1.5 gap-1 flex-shrink-0 min-w-0;
  box-shadow: 0 18px 30px -28px rgba(0, 48, 87, 0.5);
}

.nav-pill--secondary {
  @apply gap-1;
}

.nav-pill-item {
  @apply inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-gt-navy tracking-tight border-0 bg-transparent cursor-pointer transition-all duration-200 flex-shrink-0 whitespace-nowrap;
}

.nav-pill-item svg {
  @apply w-3.5 h-3.5 text-gt-navy/55;
}

.nav-pill-item:hover {
  @apply bg-gt-navy/[0.08];
  box-shadow: inset 0 0 0 1px rgba(0, 48, 87, 0.04);
}

/* ======================
   SEARCH
   ====================== */
.gt-search {
  @apply inline-flex items-center rounded-full border border-gt-navy/[0.14] bg-gray-50 px-3 flex-shrink min-w-0;
  height: 42px; /* Match nav-pill height */
  box-shadow: 0 18px 30px -28px rgba(0, 48, 87, 0.5);
  transition: flex-grow 0.3s ease;
}

.gt-search input {
  @apply bg-transparent border-0 outline-none text-sm font-medium text-gt-navy min-w-0;
  width: 120px;
  transition: width 0.3s ease;
}

.gt-search.search-expanded {
  @apply flex-grow;
}

.gt-search.search-expanded input {
  width: 100%;
  max-width: 400px;
}

.gt-search input::placeholder {
  @apply text-gt-navy/[0.48] tracking-wide;
}

.search-button {
  @apply inline-flex items-center justify-center w-9 h-9 rounded-full bg-gt-navy text-white border-0 cursor-pointer transition-colors duration-200 flex-shrink-0;
}

.search-button:hover {
  @apply bg-gt-gold text-gt-navy;
}

.search-button svg {
  @apply w-4 h-4;
}

/* ======================
   LOGIN BUTTON
   ====================== */
.gt-login {
  @apply border-0 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wider uppercase bg-gt-navy text-white cursor-pointer flex-shrink-0 transition-all duration-200;
  margin-left: auto;
  box-shadow: 0 20px 36px -28px rgba(0, 48, 87, 0.8);
}

.gt-login:hover {
  @apply bg-gt-gold text-gt-navy transform -translate-y-px;
}

/* ======================
   MORE DROPDOWN
   ====================== */
.more-dropdown-container {
  @apply relative flex-shrink-0;
}

.more-button {
  @apply inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-gt-navy bg-white border border-gt-navy/[0.12] cursor-pointer transition-all duration-300;
  box-shadow: 0 18px 30px -28px rgba(0, 48, 87, 0.5);
}

.more-button:hover {
  @apply bg-gt-navy/[0.08];
  box-shadow: inset 0 0 0 1px rgba(0, 48, 87, 0.04);
}

.more-icon {
  @apply w-3.5 h-3.5 text-gt-navy/55;
}

.more-dropdown {
  @apply absolute top-[calc(100%+0.5rem)] right-0 min-w-[200px] bg-white border border-gt-navy/[0.12] rounded-2xl p-2 z-[100];
  box-shadow: 0 20px 40px -20px rgba(0, 48, 87, 0.4);
}

.more-dropdown-item {
  @apply flex items-center w-full px-4 py-2.5 text-sm font-semibold text-gt-navy bg-transparent border-0 rounded-lg cursor-pointer text-left transition-colors duration-200;
}

.more-dropdown-item:hover {
  @apply bg-gt-navy/[0.08];
}

/* ======================
   MOBILE HAMBURGER
   ====================== */
.hamburger-button {
  @apply flex items-center justify-center w-11 h-11 border-0 bg-transparent text-gt-navy cursor-pointer rounded-lg transition-colors duration-200 ml-auto;
}

.hamburger-button:hover {
  @apply bg-gt-navy/[0.08];
}

/* ======================
   MOBILE MENU
   ====================== */
.mobile-menu {
  @apply border-b border-gt-navy/[0.06];
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(18px);
  box-shadow: 0 12px 32px -24px rgba(0, 48, 87, 0.45);
}

.mobile-nav {
  @apply flex flex-col gap-6 py-6;
}

.mobile-nav-section {
  @apply flex flex-col gap-2;
}

.mobile-nav-label {
  @apply text-xs font-semibold uppercase tracking-[0.1em] text-gt-navy/60 px-4 py-2;
}

.mobile-nav-item {
  @apply flex items-center px-4 py-3 text-base font-semibold text-gt-navy bg-transparent border-0 rounded-lg cursor-pointer text-left transition-colors duration-200;
}

.mobile-nav-item:hover {
  @apply bg-gt-navy/[0.08];
}

.mobile-search {
  @apply flex items-center rounded-full border border-gt-navy/[0.14] bg-gray-50 px-4 py-2 my-2;
}

.mobile-search input {
  @apply flex-1 bg-transparent border-0 outline-none text-sm font-medium text-gt-navy;
}

.mobile-search input::placeholder {
  @apply text-gt-navy/[0.48];
}

.mobile-search .search-button {
  @apply flex items-center justify-center w-9 h-9 rounded-full bg-gt-navy text-white border-0 cursor-pointer flex-shrink-0;
}

.mobile-search .search-button svg {
  @apply w-4 h-4;
}

.mobile-login-button {
  @apply w-full border-0 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wider uppercase bg-gt-navy text-white cursor-pointer mt-2 transition-colors duration-200;
}

.mobile-login-button:hover {
  @apply bg-gt-gold text-gt-navy;
}

/* ======================
   TRANSITIONS
   ====================== */
.dropdown-enter-active,
.dropdown-leave-active {
  @apply transition-all duration-300;
}

.dropdown-enter-from {
  @apply opacity-0 -translate-y-2;
}

.dropdown-leave-to {
  @apply opacity-0 -translate-y-1;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  @apply transition-all duration-300;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  @apply opacity-0 -translate-y-2;
}

/* ======================
   RESPONSIVE UTILITIES
   ====================== */
.hide-below-768 {
  display: none !important;
}

.hide-above-768 {
  display: flex !important;
}

/* Tablet and above (768px+) */
@media (min-width: 768px) {
  .nav-pill {
    display: flex !important;
  }

  .gt-search {
    display: flex !important;
  }

  .hide-below-768 {
    display: inline-flex !important;
  }

  .hide-above-768 {
    display: none !important;
  }

  .gt-center {
    @apply gap-3;
  }
}

/* Desktop Small and above (1024px+) */
@media (min-width: 1024px) {
  .gt-center {
    @apply gap-4;
  }
}

/* Desktop Medium and above (1280px+) */
@media (min-width: 1280px) {
  .gt-center {
    @apply gap-5;
  }
}

/* ======================
   MOBILE SPECIFIC
   ====================== */
@media (max-width: 767px) {
  .nav-pill {
    display: none !important;
  }

  .gt-bar {
    @apply gap-4;
  }

  .gt-center {
    display: none;
  }

  .gt-logo {
    @apply h-10;
    min-height: 2.5rem;
    max-height: 2.5rem;
  }
}

/* Tablet adjustments (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .gt-bar {
    @apply gap-3;
  }

  .gt-center {
    @apply gap-2;
  }

  .nav-pill-item {
    @apply px-3 py-1.5 text-xs;
  }

  .gt-logo {
    @apply h-10;
    min-height: 2.5rem;
    max-height: 2.5rem;
  }
}

/* Desktop Small adjustments (1024px - 1279px) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .gt-center {
    @apply gap-3;
  }

  .nav-pill-item {
    @apply px-3 py-1.5 text-sm;
  }

  .gt-search input {
    @apply w-20;
  }
}
</style>

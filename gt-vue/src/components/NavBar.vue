<template>
  <header class="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-black/5">
    <div class="container-gutter">
      <div class="flex items-center gap-5 py-3 md:py-4">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 shrink-0">
          <img src="/src/assets/GeorgiaTech_RGB.svg" alt="Georgia Tech" class="h-9 md:h-10 w-auto" />
        </a>

        <!-- Main nav group -->
        <nav class="hidden md:flex items-center gap-2 ml-1">
          <button class="rounded-full border border-black/10 bg-white text-gt-navy/90 text-sm font-medium px-4 py-2 hover:bg-gt-diploma transition">About 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 -mr-1 h-4 w-4 opacity-60">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="rounded-full border border-black/10 bg-white text-gt-navy/90 text-sm font-medium px-4 py-2 hover:bg-gt-diploma transition">Research 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 -mr-1 h-4 w-4 opacity-60">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="rounded-full border border-black/10 bg-white text-gt-navy/90 text-sm font-medium px-4 py-2 hover:bg-gt-diploma transition">Admissions 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 -mr-1 h-4 w-4 opacity-60">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="rounded-full border border-black/10 bg-white text-gt-navy/90 text-sm font-medium px-4 py-2 hover:bg-gt-diploma transition">News 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 -mr-1 h-4 w-4 opacity-60">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </nav>

        <!-- Right grow zone -->
        <div class="ml-auto flex items-center gap-2">
          <nav class="hidden lg:flex items-center gap-2">
            <button class="rounded-full border border-black/10 bg-white text-gt-navy/90 text-sm font-medium px-4 py-2 hover:bg-gt-diploma transition">Community 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 -mr-1 h-4 w-4 opacity-60">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="rounded-full border border-black/10 bg-white text-gt-navy/90 text-sm font-medium px-4 py-2 hover:bg-gt-diploma transition">Colleges 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 -mr-1 h-4 w-4 opacity-60">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="rounded-full border border-black/10 bg-white text-gt-navy/90 text-sm font-medium px-4 py-2 hover:bg-gt-diploma transition">Department 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 -mr-1 h-4 w-4 opacity-60">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </nav>

          <!-- Search -->
          <div class="hidden sm:flex items-center rounded-full border border-black/10 bg-white overflow-hidden">
            <input
              class="px-4 py-2 w-40 md:w-56 text-sm placeholder-gt-gray focus:outline-none"
              type="search"
              placeholder="Search …"
            />
            <button class="inline-flex items-center justify-center rounded-full bg-gt-navy text-white w-10 h-10 hover:bg-gt-gold transition" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.243 11.957l4.775 4.775a.75.75 0 101.06-1.06l-4.775-4.776A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Login -->
          <button class="rounded-full bg-gt-navy text-white px-5 py-2 text-sm font-medium hover:bg-gt-gold hover:text-gt-navy transition">
            Login
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
</style>

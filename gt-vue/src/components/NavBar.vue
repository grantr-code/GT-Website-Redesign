<template>
  <header class="oxford-header">
    <div class="container-gutter">
      <div class="oxford-bar">
        <a href="#" class="oxford-brand" aria-label="University of Oxford home">
          <span class="oxford-crest" aria-hidden="true">
            <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <rect width="56" height="56" rx="14" fill="#091C56" />
              <circle cx="28" cy="28" r="18" fill="none" stroke="#F3EBC7" stroke-width="2.5" />
              <path
                d="M18.5 28c4.5-4 14.8-4 19.3 0"
                fill="none"
                stroke="#F3EBC7"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <circle cx="21.8" cy="23.5" r="2.3" fill="#F3EBC7" />
              <circle cx="34.2" cy="23.5" r="2.3" fill="#F3EBC7" />
              <path
                d="M26.5 35.5h3"
                stroke="#F3EBC7"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span class="oxford-brand-text">
            <span class="oxford-brand-subtitle">UNIVERSITY OF</span>
            <span class="oxford-brand-title">OXFORD</span>
          </span>
        </a>

        <div class="oxford-center">
          <nav class="oxford-pill" aria-label="Primary">
            <button
              v-for="item in primaryLinks"
              :key="item"
              type="button"
              class="oxford-pill-item"
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

          <nav class="oxford-pill oxford-pill--secondary" aria-label="Secondary">
            <button
              v-for="item in secondaryLinks"
              :key="item"
              type="button"
              class="oxford-pill-item"
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
            <div class="oxford-search" role="search">
              <input type="search" placeholder="Search" aria-label="Search" />
              <button type="button" aria-label="Submit search">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 0 1 5.323 10.961l4.483 4.482a.75.75 0 1 1-1.06 1.061l-4.482-4.483A6.75 6.75 0 1 1 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        <button type="button" class="oxford-login">Login</button>
      </div>
    </div>
  </header>
</template>

<script setup>
const primaryLinks = ['About', 'Research', 'Admissions', 'News']
const secondaryLinks = ['Community', 'Colleges', 'Department']
</script>

<style scoped>
.oxford-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(12, 26, 65, 0.06);
  box-shadow: 0 12px 32px -24px rgba(9, 28, 86, 0.45);
}

.oxford-bar {
  display: flex;
  align-items: center;
  gap: 2.75rem;
  padding: 1.15rem 0;
}

.oxford-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #091c56;
}

.oxford-crest svg {
  width: 3.1rem;
  height: 3.1rem;
  flex-shrink: 0;
  border-radius: 16px;
  box-shadow: 0 10px 24px -18px rgba(9, 28, 86, 0.5);
}

.oxford-brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.oxford-brand-subtitle {
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.32em;
}

.oxford-brand-title {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.oxford-center {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
}

.oxford-pill {
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(9, 28, 86, 0.12);
  border-radius: 999px;
  padding: 0.35rem 0.35rem;
  box-shadow: 0 18px 30px -28px rgba(9, 28, 86, 0.5);
  gap: 0.15rem;
}

.oxford-pill-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1.15rem;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 600;
  color: #091c56;
  letter-spacing: 0.02em;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.oxford-pill-item svg {
  width: 0.85rem;
  height: 0.85rem;
  color: rgba(9, 28, 86, 0.55);
}

.oxford-pill-item:hover {
  background: rgba(9, 28, 86, 0.08);
  box-shadow: inset 0 0 0 1px rgba(9, 28, 86, 0.04);
}

.oxford-pill--secondary {
  gap: 0.35rem;
}

.oxford-search {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid rgba(9, 28, 86, 0.14);
  background: #f9fafc;
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  margin-left: 0.35rem;
}

.oxford-search input {
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.88rem;
  font-weight: 500;
  color: #091c56;
  width: 7.5rem;
}

.oxford-search input::placeholder {
  color: rgba(9, 28, 86, 0.48);
  letter-spacing: 0.04em;
}

.oxford-search button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  background: #091c56;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.oxford-search button:hover {
  background: #0c2365;
}

.oxford-search svg {
  width: 1.1rem;
  height: 1.1rem;
}

.oxford-login {
  border: none;
  border-radius: 999px;
  padding: 0.7rem 1.9rem;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #091c56;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 20px 36px -28px rgba(9, 28, 86, 0.8);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.oxford-login:hover {
  background: #0c2365;
  transform: translateY(-1px);
}

@media (max-width: 1280px) {
  .oxford-center {
    gap: 1.5rem;
  }

  .oxford-pill-item {
    padding: 0.4rem 0.85rem;
  }

  .oxford-search input {
    width: 6rem;
  }
}

@media (max-width: 1100px) {
  .oxford-center {
    display: none;
  }

  .oxford-login {
    margin-left: auto;
  }
}

@media (max-width: 768px) {
  .oxford-bar {
    gap: 1.5rem;
  }

  .oxford-brand-title {
    font-size: 1.05rem;
  }

  .oxford-login {
    padding: 0.6rem 1.4rem;
    font-size: 0.88rem;
  }
}

@media (max-width: 640px) {
  .oxford-brand-title {
    letter-spacing: 0.16em;
  }

  .oxford-crest svg {
    width: 2.75rem;
    height: 2.75rem;
  }
}
</style>

<template>
  <header class="oxford-header">
    <div class="container-gutter">
      <div class="oxford-bar">
        <a href="#" class="oxford-brand" aria-label="Georgia Tech home">
          <img :src="gtLogo" alt="Georgia Tech" class="oxford-logo" />
          <span class="oxford-brand-text">
            <span class="oxford-brand-title">Georgia Tech</span>
            <span class="oxford-brand-subtitle">Georgia Institute of Technology</span>
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
import gtLogo from '../assets/GeorgiaTech_RGB.svg'

const primaryLinks = ['About', 'Research', 'Admissions', 'News']
const secondaryLinks = ['Community', 'Colleges', 'Department']
</script>

<style scoped>
.oxford-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: transparent;
  border-bottom: none;
  box-shadow: none;
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
  color: #003057;
}

.oxford-logo {
  height: 3rem;
  width: auto;
  flex-shrink: 0;
}

.oxford-brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  letter-spacing: 0.04em;
  text-transform: none;
  color: #00254d;
}

.oxford-brand-subtitle {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(0, 37, 77, 0.72);
}

.oxford-brand-title {
  font-size: 1.32rem;
  font-weight: 700;
  letter-spacing: 0.06em;
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
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 48, 87, 0.14);
  border-radius: 20px;
  padding: 0.35rem 0.45rem;
  gap: 0.25rem;
}

.oxford-pill-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1.1rem;
  border-radius: 14px;
  font-size: 0.92rem;
  font-weight: 600;
  color: #003057;
  letter-spacing: 0.02em;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.oxford-pill-item svg {
  width: 0.85rem;
  height: 0.85rem;
  color: rgba(0, 48, 87, 0.5);
}

.oxford-pill-item:hover {
  background: rgba(0, 48, 87, 0.08);
  box-shadow: inset 0 0 0 1px rgba(0, 48, 87, 0.08);
}

.oxford-pill--secondary {
  gap: 0.35rem;
}

.oxford-search {
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid rgba(0, 48, 87, 0.14);
  background: rgba(249, 250, 252, 0.9);
  padding: 0.25rem 0.25rem 0.25rem 0.7rem;
  margin-left: 0.35rem;
}

.oxford-search input {
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.88rem;
  font-weight: 500;
  color: #003057;
  width: 7.5rem;
}

.oxford-search input::placeholder {
  color: rgba(0, 48, 87, 0.48);
  letter-spacing: 0.04em;
}

.oxford-search button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 12px;
  background: #b3a369;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.oxford-search button:hover {
  background: #a6934d;
}

.oxford-search svg {
  width: 1.1rem;
  height: 1.1rem;
}

.oxford-login {
  border: none;
  border-radius: 16px;
  padding: 0.68rem 1.8rem;
  font-size: 0.96rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #003057;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.oxford-login:hover {
  background: #0a4a7c;
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
    letter-spacing: 0.04em;
  }

  .oxford-logo {
    height: 2.6rem;
  }
}
</style>

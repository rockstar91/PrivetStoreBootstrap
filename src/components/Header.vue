<script setup>
import HeaderTop from './HeaderTop.vue'
import HeaderMobile from './HeaderMobile.vue'
import HeaderDesktop from './HeaderDesktop.vue'
</script>

<style>

/* Header Catalog Button */
header .catalog-btn {
  height: 3.13rem;
  line-height: 1.94rem;
}

/* Header Search */
.header-search.input-group {
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.75);
  align-items: inherit;
  justify-content: flex-start;
  height: 3.13rem;
  max-width: 31.25rem;
}
.header-search input {
  flex: 1;
  border: none;
  color: var(--bs-white);
  height: auto;
  padding: 0;
  background: transparent !important;
}
.header-search input:focus-visible, .header-search input:focus, .header-search input:active {
  border: none;
  outline: none;
}
.header-search button {
  padding: 0;
}
.header-search:focus-within {
  border: 1px solid var(--bs-white);
}
.header-search input::placeholder {
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
}

.header-search button {
  border: none;
  background: none;
  color: var(--color-gray-100);
}

.header-search button:hover {
  color: var(--color-gray-200);
}



</style>

<template>
    <HeaderTop />
    <header class="-sticky-md-top">
      <!-- HEADER MOBILE -->
      <HeaderMobile />
  
      <!-- HEADER DESKTOP -->
      <HeaderDesktop />
    </header>
</template>

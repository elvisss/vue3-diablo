<template>
  <ul class="d-flex list-unstyled justify-content-start small">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
    </li>
    <li class="nav-item">
      <a
        href="https://github.com/elvisss/vue3-diablo"
        target="_blank"
        class="nav-link"
        >Github</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FootLinks',
}
</script>

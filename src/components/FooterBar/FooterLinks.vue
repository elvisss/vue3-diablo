<template>
  <ul class="list-inline text-start">
    <li class="list-inline-item">
      <router-link class="btn btn-link mx-2" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="btn btn-link mx-2" :to="{ name: 'About' }">About</router-link>
      <a
        href="https://github.com/baumannzone/diablo3-vue-platzi"
        target="_blank"
        class="btn btn-link mx-2"
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

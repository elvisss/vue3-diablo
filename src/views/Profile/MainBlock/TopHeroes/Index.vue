<template>
  <div class="top-heroes">
    <h1>Top Heroes</h1>
    <div class="row">
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <div class="col col-sm-4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <TopHero :hero="hero" />
      </div>
    </div>
  </div>
</template>

<script>
import TopHero from './TopHero'

export default {
  name: 'TopHeroes',
  props: {
    heroes: {
      required: true,
      type: Array,
    },
  },
  components: {
    TopHero
  }
}
</script>

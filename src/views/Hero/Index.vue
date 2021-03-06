<template>
  <div>
    <div class="hero-view">
      <BaseLoading v-if="isLoadingHero" />
      <HeroDetailHeader v-if="hero" :detail="detailHeader" />
    </div>

    <div class="row">
      <!-- 12 columnas de 'xs' -> 'md', 8 columnas desde 'lg' hacia arriba  -->
      <!-- En 'lg' orden 2 -->
      <div class="col-md-12 col-lg-8 order-lg-2">
        <BaseLoading v-if="isLoadingItems" />
        <HeroItems v-if="items" :items="items" />
      </div>

      <!-- 12 columnas de 'xs' -> 'md', 4 columnas desde 'lg' hacia arriba -->
      <!-- En 'lg' orden 1 -->
      <div class="col-md-12 col-lg-4 order-lg-1">
        <BaseLoading v-if="isLoadingHero" />
        <template v-if="hero">
          <HeroAttributes :attributes="detailStats" />
          <HeroSkills :skills="hero.skills" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import HeroDetailHeader from './HeroDetailHeader'
import HeroAttributes from './HeroAttributes/Index'
import HeroSkills from './HeroSkills/Index'
import HeroItems from './HeroItems/Index'
import { getApiHero, getApiDetailedHeroItems } from '@/api/search'

export default {
  name: 'HeroView',
  mixins: [setError],
  components: {
    BaseLoading,
    HeroDetailHeader,
    HeroAttributes,
    HeroSkills,
    HeroItems,
  },
  data() {
    return {
      isLoadingHero: false,
      isLoadingItems: false,
      hero: null,
      items: null,
    }
  },
  computed: {
    detailHeader() {
      const {
        name,
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated,
      } = this.hero

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated,
      }
    },
    detailStats() {
      // Devuelve el contenido de stats y agrega classSlug
      return { ...this.hero.stats, classSlug: this.hero.class }
    },
  },
  async created() {
    this.isLoadingHero = true
    this.isLoadingItems = true
    const { region, battleTag: account, heroId } = this.$route.params

    getApiHero({ region, account, heroId })
      .then(({ data }) => {
        this.hero = data
      })
      .catch((err) => {
        this.hero = null
        const errObj = {
          routeParams: this.$route.params,
          message: err.message,
        }
        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        this.setApiErr(errObj)
        this.$router.push({ name: 'Error' })
      })
      .finally(() => {
        this.isLoadingHero = false
      })

    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        this.items = data
      })
      .catch((err) => {
        this.items = null
        console.log(err)
      })
      .finally(() => {
        this.isLoadingItems = false
      })
  },
}
</script>

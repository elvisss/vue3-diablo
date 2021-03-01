<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
    </template>
  </div>
</template>

<script>
import MainBlock from './MainBlock/Index'
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

export default {
  name: 'ProfileView',
  data() {
    return {
      isLoading: false,
      profileData: null,
    }
  },
  components: { BaseLoading, MainBlock },
  mixins: [setError],
  created() {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    async fetchData(region, account) {
      // Llamada a la API con los datos necesarios
      try {
        const { data } = await getApiAccount({ region, account })
        this.profileData = data
      } catch (err) {
        this.profileData = null
        // Creamos el objeto error
        const errObj = {
          routeParams: this.$route.params,
          message: err.message,
        }
        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        // Hacemos uso del Mixin
        // Guardamos el objeto en el Store
        this.setApiErr(errObj)
        // Navegamos a la ruta de nombre 'Error'
        this.$router.push({ name: 'Error' })
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

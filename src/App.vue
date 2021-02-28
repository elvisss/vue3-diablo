<template>
  <LoadLayout v-if="isLoading">
    <BaseLoading/>
  </LoadLayout>

  <MainLayout v-else/>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import LoadLayout from '@/layouts/LoadLayout'
import MainLayout from '@/layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    LoadLayout,
    MainLayout,
    BaseLoading
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    }),
  },
  async created() {
    /* await this.$store.dispatch('oauth/getToken', null, { root: true })
    console.log('done2') */
    /* this.openFullScreen2() */
    await this.getToken()
  },
  methods: {
    /* ...mapActions({
      getToken: 'oauth/getToken'
    }) */
    ...mapActions('oauth', ['getToken']),
    /* ...mapActions('oauth', { getToken2: 'getToken' }) */
    openFullScreen2() {
      const loading = this.$loading()
      setTimeout(() => {
        loading.close()
      }, 2000)
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  padding: 60px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #15202b;
  text-align: center;
}
</style>

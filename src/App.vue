<template>
  <div class="container">
    <MainLayout v-if="!isLoading" />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',
  data() {
    return {
      loader: null
    }
  },
  components: {
    MainLayout,
  },
  computed: {
    ...mapState('loading', ['isLoading']),
    ...mapState('oauth', ['accessToken']),
  },
  async created() {
    this.initialiseStore()
    if (!this.accessToken) {
      await this.getToken()
    }
  },
  watch: {
    isLoading: function(value) {
      if (value) {
        this.openFullScreen()
      } else {
        this.loader.close()
      }
    },
  },
  methods: {
    ...mapActions('oauth', ['getToken']),
    ...mapMutations('oauth', {
      initialiseStore: 'INITIALISE_STORE',
    }),
    openFullScreen() {
      this.loader = this.$loading({
        lock: true,
        text: 'Loading...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.75)',
      })
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
  color: #ffffff;
  background-color: #15202b;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

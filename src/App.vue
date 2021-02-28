<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

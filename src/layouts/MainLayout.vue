<template>
  <div id="main-section">
    <HeaderBar />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'

export default {
  components: {
    HeaderBar,
    FooterBar,
  },
  name: 'MainLayout',
}
</script>

<style lang="scss">
#main-section {
  padding: 60px 0;
  min-height: 100vh;
}

.fade-enter-active {
  transition: transform 1s, opacity 2s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}
</style>

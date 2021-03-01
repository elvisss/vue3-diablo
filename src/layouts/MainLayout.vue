<template>
  <HeaderBar />

  <router-view />

  <FooterBar />
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

<template>
  <footer class="footer-bar mt-5">
    <FooterPoweredBy :icons="icons" />

    <hr class="my-5" />

    <div class="row">
      <div class="col-sm-6 mb-sm-0 mb-5">
        <FootLinks />
      </div>
      <div class="col-sm-6">
        <FooterMadeBy />
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMadeBy from './FooterMadeBy'
import FooterPoweredBy from './FooterPoweredBy'
import FootLinks from './FooterLinks'

export default {
  name: 'FooterBar',
  components: { FootLinks, FooterPoweredBy, FooterMadeBy },
  data() {
    return {
      icons: [
        {
          classes: ['fab', 'vuejs'],
          color: '#4fc08d',
          href: 'https://vue.js.org/',
        },
        {
          classes: ['fab', 'uikit'],
          color: '#7952b3',
          href: 'https://element-plus.org/',
        },
        {
          classes: ['fab', 'battle-net'],
          href:
            'https://develop.battle.net/documentation/diablo-3/community-apis',
        },
        {
          classes: ['fab', 'github'],
          color: '#e4e4e4',
          href: 'https://github.com/elvisss',
        },
        {
          classes: ['fab', 'font-awesome'],
          color: '#0e95ff',
          href: 'https://fontawesome.com/',
        },
      ],
    }
  },
}
</script>

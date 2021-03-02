<template>
  <div class="progress-time-played">
    <div class="d-flex justify-content-between">
      <h5 class="mb-0 font-weight-lighter">{{ heroTime.hero }}</h5>
      <el-tag type="info" effect="dark" size="small">{{ percentage }}</el-tag>
    </div>
    <el-progress
      :class="classHeroBg"
      :stroke-width="15"
      :show-text="false"
      class="mb-3"
      :percentage="percentage"
    ></el-progress>
  </div>
</template>

<script>
import { HeroData } from '@/utils/typeValidation'

export default {
  name: 'TimePlayedHero',
  props: {
    heroTime: {
      type: HeroData,
      required: true,
    },
  },
  computed: {
    percentage() {
      return Number((this.heroTime.time * 100).toFixed(2))
    },
    classHeroBg() {
      return `hero-bg-color-${this.heroTime.classSlug}`
    },
  },
}
</script>

<style lang="scss">
$heroesBg: (
  barbarian: #4e1c16,
  crusader: #795548,
  demon-hunter: #f44336,
  monk: #ff9800,
  necromancer: #00bcd4,
  witch-doctor: #8bc34a,
  wizard: #3f51b5,
);

.progress-time-played {
  h5.title {
    color: #000;
  }

  .w-50p {
    bottom: -5px;
  }

  .el-progress-bar__inner, .el-progress-bar__outer {
    border-radius: 0;
  }

  @each $hero, $bgColor in $heroesBg {
    .hero-bg-color-#{$hero} {
      .el-progress-bar__inner {
        background-color: $bgColor;
      }
    }
  }
}
</style>

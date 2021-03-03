<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diabloo">
      Skills
    </h2>
    <hr class="bg-white" />

    <el-radio-group size="mini" el-tab-pane class="mb-4" v-model="currentTab">
      <el-radio-button label="Active">Active</el-radio-button>
      <el-radio-button label="Passive">Passive</el-radio-button>
    </el-radio-group>

    <keep-alive>
      <component :is="currentTabComponent" :skills="componentProps" />
    </keep-alive>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'HeroSkills',
  data() {
    return {
      currentTab: 'Passive',
    }
  },
  computed: {
    componentProps() {
      return this.currentTab === 'Active'
        ? this.skills.active
        : this.skills.passive
    },
    currentTabComponent() {
      return this.currentTab + 'Skills'
    },
  },
  components: {
    ActiveSkills: defineAsyncComponent(() =>
      import(/* webpackChunkName: "ActiveSkills" */ './ActiveSkills'),
    ),
    PassiveSkills: defineAsyncComponent(() =>
      import(/* webpackChunkName: "PassiveSkills" */ './PassiveSkills'),
    ),
  },
  props: {
    skills: {
      required: true,
      type: Object,
    },
  },
}
</script>

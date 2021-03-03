<template>
  <div class="active-skills">
    <h4 class="my-5">Active</h4>

    <div class="skills">
      <div class="row">
        <div class="col-6 col-lg-12" v-for="(skill, idx) in skills" :key="idx">
          <ActiveSkill
            :skill="skill.skill"
            :rune="skill.rune"
            :slot-num="idx + 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveSkill from './ActiveSkill'

export default {
  name: 'ActiveSkills',
  components: { ActiveSkill },
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
}
</script>

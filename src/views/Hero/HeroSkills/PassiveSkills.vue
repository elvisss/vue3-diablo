<template>
  <div class="passive-skills">
    <h4 class="my-5 ">Passive</h4>
    <div class="skills">
      <div class="row">
        <div class="col-6 col-lg-12" v-for="(skill, idx) in skills" :key="idx">
          <PassiveSkill :skill="skill.skill" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PassiveSkill from './PassiveSkill'

export default {
  name: 'PassiveSkills',
  components: { PassiveSkill },
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
}
</script>

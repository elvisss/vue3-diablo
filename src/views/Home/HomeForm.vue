<template>
  <div class="search-form my-5">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <el-form
          ref="homeForm"
          size="large"
          :model="form"
          :rules="rules"
          label-position="top"
          @submit.prevent="onSubmit"
        >
          <el-form-item v-focus label="BattleTag:" prop="battleTag">
            <el-input
              placeholder="Format: YourProfile#1234"
              v-model="form.battleTag"
            />
          </el-form-item>

          <el-form-item label="Region:" prop="region">
            <el-select
              v-model="form.region"
              placeholder="please select your zone"
            >
              <el-option
                v-for="region in regions"
                :key="region.value"
                :label="region.text"
                :value="region.value"
              />
            </el-select>
          </el-form-item>

          <div class="d-flex justify-content-end mt-5">
            <el-form-item>
              <el-button native-type="submit" type="primary">Submit</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { regions } from '@/utils/regions'

export default {
  name: 'HomeForm',
  data() {
    return {
      form: {
        battleTag: '',
        region: 'eu',
      },
      rules: {
        battleTag: [
          {
            required: true,
            message: 'Please enter your BattleTag',
            trigger: 'blur',
          },
        ],
        region: [
          {
            required: true,
            message: 'Please select a Region',
            trigger: 'change',
          },
        ],
      },
    }
  },
  computed: {
    regions() {
      return regions.map((region) => ({
        value: region,
        text: region.toUpperCase(),
      }))
    },
  },
  methods: {
    onSubmit() {
      this.$refs.homeForm.validate((valid) => {
        if (valid) {
          console.log(this.form)
          const { region, battleTag } = this.form
          this.$router.push({
            name: 'Profile',
            params: { region, battleTag: battleTag.replace('#', '-') },
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss">
.search-form {
  .el-form-item__label {
    color: #fff;
  }
  .el-select {
    display: block;
  }
}
</style>

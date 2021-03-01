<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <el-table
      :data="heroes"
      header-row-class-name="bg-dark"
      cell-class-name="bg-dark"
      :border="false"
      size="small"
      style="width: 100%"
    >
      <el-table-column label="Name" sortable>
        <template #default="scope">
          <HeroIco :hero="scope.row" />
        </template>
      </el-table-column>
      <el-table-column prop="class" label="Class" sortable>
        <template #default="scope">
          <HeroClassLevel
            :hero="{ class: scope.row.classSlug, level: scope.row.level }"
          />
        </template>
      </el-table-column>
      <el-table-column label="Kills" sortable>
        <template #default="scope">
          {{ $filters.formatNumber(scope.row.kills.elites) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'

export default {
  name: 'HeroesList',
  props: {
    heroes: {
      required: true,
      type: Array,
    },
  },
  components: {
    HeroIco,
    HeroClassLevel,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.el-table {
  .bg-dark {
    th {
      background-color: #212529;
    }
  }
}
</style>

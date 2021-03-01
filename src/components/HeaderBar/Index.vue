<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#343a40"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
    @select="handleSelect"
  >
    <el-menu-item index="/">
      <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30" />
      <span class="font-diablo ml-2">D3PF</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'HeaderBar',
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

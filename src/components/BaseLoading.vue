<template>
  <div class="text-center py-5">
    <el-skeleton :rows="5" animated />
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  // Propiedades que soporta nuestro componente
  props: {
    variant: {
      required: false,
      type: String,
      // Valor por defecto, en caso de que no le pasemos esta prop
      default: 'info',
      validator: (value) => {
        // Función validadora:
        // El valor de la prop debe coincidir con una de estas palabras
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark',
        ].includes(value)
      },
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.spinner-wrapper {
  .spinner {
    width: 4rem;
    height: 4rem;
  }
}
</style>

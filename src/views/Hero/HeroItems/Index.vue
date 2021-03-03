<template>
  <section class="hero-items mb-5">
    <h2 class="font-diablo">Items</h2>

    <hr class="bg-white" />

    <!-- Grid de 3 columnas. Mostramos solo una centrada -->
    <div class="row">
      <div class="col-4 offset-4">
        <ItemDetail :item="itemsData.head" />
      </div>
    </div>

    <hr />

    <!-- Grid de 3 columnas -->
    <div class="row">
      <div class="col">
        <ItemDetail :item="itemsData.shoulders" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.torso" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.neck" />
      </div>
    </div>

    <hr />

    <!-- Grid de 3 columnas -->
    <div class="row">
      <div class="col">
        <ItemDetail :item="itemsData.hands" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.waist" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.bracers" />
      </div>
    </div>

    <hr />

    <!-- Grid de 3 columnas -->
    <div class="row">
      <div class="col">
        <ItemDetail :item="itemsData.leftFinger" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.legs" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.rightFinger" />
      </div>
    </div>

    <hr />

    <!-- Grid de 3 columnas -->
    <div class="row">
      <div class="col">
        <ItemDetail :item="itemsData.mainHand" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.feet" />
      </div>
      <div class="col">
        <ItemDetail :item="itemsData.offHand" />
      </div>
    </div>
  </section>
</template>

<script>
import ItemDetail from './ItemDetail'

// Objeto con las keys de los 'items' del personaje
const defaultItems = {
  head: {
    slots: 'head',
  },
  shoulders: {
    slots: 'Shoulders',
  },
  torso: {
    slots: 'Torso',
  },
  neck: {
    slots: 'Neck',
  },
  hands: {
    slots: 'Hands',
  },
  waist: {
    slots: 'Waist',
  },
  bracers: {
    slots: 'Bracers',
  },
  leftFinger: {
    slots: 'Left Finger',
  },
  legs: {
    slots: 'Legs',
  },
  rightFinger: {
    slots: 'Right Finger',
  },
  mainHand: {
    slots: 'Main Hand',
  },
  feet: {
    slots: 'Feet',
  },
  offHand: {
    slots: 'Off Hand',
  },
}

export default {
  name: 'HeroItems',
  components: { ItemDetail },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  computed: {
    itemsData() {
      // Fusionar objetos:
      // Esto lo hacemos para mostrar el hueco vacío en caso de que ese objeto no esté equipado
      // Si NO hay item equipado, manda el valor de 'defaultItems' correspondiente
      // Si hay item equipado, manda la info del item
      return {
        ...defaultItems,
        ...this.items,
      }
    },
  },
}
</script>

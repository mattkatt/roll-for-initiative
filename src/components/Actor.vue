<template>
  <v-card :class="actor.class">
    <v-card-title>{{ actor.name }}</v-card-title>
    <v-card-subtitle>Initiative: +{{ actor.bonus }}</v-card-subtitle>
  </v-card>
</template>

<script>
  export default {
    name: 'Actor',
    props: [
      "actor"
    ]
  }
</script>

<style scoped>
  .character {
    background-color: rgba(0,255,0,0.15) !important;
  }
  .monster {
    background-color: rgba(255,0,0,0.15) !important;
  }
</style>
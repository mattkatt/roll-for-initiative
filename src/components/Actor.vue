<template>
  <v-card class="actor" :class="actor.class">
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
  .actor {
    border-left: 5px solid #fff;
  }
  .character {
    border-left-color: green !important;
  }
  .monster {
    border-left-color: red !important;
  }
</style>
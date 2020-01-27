<template>
  <v-navigation-drawer
    app right
    v-model="drawer"
  >
    <v-list rounded>
      <v-subheader>Actors</v-subheader>

      <v-list-item
          link
          v-for="actor in actors"
          :key="actor.id"
          @click="moveToTracker(actor)"
      >
        <v-list-item-content>
          <v-list-item-title v-text="actor.name"/>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click.stop="destroyActor(actor.id)">
            <v-icon color="secondary">mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    name: 'SideDrawer',
    props: {
      actors: Array
    },
    data: () => ({
      drawer: false,
      initiativeActive: false,
    }),
    created() {
      let vm = this;
      eventBus.$on('open-drawer', value => {
        vm.initiativeActive = value;
        vm.drawer = true;
      });
    },
    mounted() {
      if(this.$vuetify.breakpoint.lgAndUp) {
        this.drawer = true;
      }
    },
    methods: {
      destroyActor(id) {
        this.$emit('destroy-actor', id);
      },
      moveToTracker(actor) {
        this.$emit('move-to-tracker', actor);
        if (this.initiativeActive) {
          this.drawer = false;
        }
      },
    }
  }
</script>

<style>

</style>
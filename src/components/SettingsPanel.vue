<template>
  <v-dialog
    v-model="showSettingsOverlay"
    max-width="500"
  >
    <v-card class="pa-2">
      <v-card-title class="px-4 py-2">Settings</v-card-title>
      <v-list>
        <v-list-item
          v-for="(value, key) in settings"
          :key="key"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ key | stringToReadable }}
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-action v-if="typeof value === 'boolean'">
            <v-switch
              v-model="settings[`${key}`]"
              @change="updateSetting(key, !value)"
            />
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-btn icon href="https://github.com/mattkatt/roll-for-initiative" target="_blank">
          <v-icon>{{ icons.github }}</v-icon>
        </v-btn>
        <v-btn
          color="primary"
          class="ml-auto"
          @click.stop="showSettingsOverlay = false"
        >Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import {eventBus} from "../main";
  import {mdiGithubCircle} from '@mdi/js';

  export default {
    name: "SettingsPanel",
    data: () => ({
      showSettingsOverlay: false,
      settings: null,
      icons: {
          github: mdiGithubCircle
      }
    }),
    created() {
      let vm = this;

      this.settings = this.$store.state.settings;

      eventBus.$on('open-settings', () => {
        vm.showSettingsOverlay = true;
      });
    },
    methods: {
      updateSetting(key, value) {
        this.$store.commit('updateSetting', {
            setting: key,
            value: value
        });

        if(key ==='darkMode') {
          eventBus.$emit('updateDarkMode');
        }
      }
    }
  }
</script>

<style scoped>

</style>
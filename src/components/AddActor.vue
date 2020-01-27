<template>
  <v-dialog v-model="showOverlay">
    <v-card>
      <v-card-title>Add Actor</v-card-title>
      <v-card-text>
        <v-form
          v-model="valid"
          ref="form"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          />
          <v-text-field
            v-model="bonus"
            type="number"
            label="Initiative Bonus"
          />
          <v-switch
            v-model="character"
            label="Character"
          />
          <v-btn rounded color="primary" @click="validate">Add</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import {eventBus} from '../main';
  import uuid from 'uuid';

  export default {
    name: 'AddActor',
    created() {
      let vm = this;
      eventBus.$on('open-add-actor', value => {
        vm.showOverlay = value
      });
    },
    data: () => ({
      showOverlay: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      bonus: 0,
      character: false,
      valid: false
    }),
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.addActor();
        }
      },
      addActor() {
        this.$emit('add-actor', {
          id: uuid.v4(),
          name: this.name,
          currentInitiative: false,
          bonus: this.bonus,
          class: this.character ? 'character' : 'monster'
        });

        eventBus.$emit('open-drawer', true);
        this.showOverlay = false;
      }
    }
  }
</script>

<style scoped>

</style>
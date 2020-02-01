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
            label="Player Character"
          />
          <v-btn rounded color="primary" @click="validate">Add</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import uuid from 'uuid';

  export default {
    name: 'AddActor',
    data: () => ({
      showOverlay: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      bonus: 0,
      character: false,
      valid: false
    }),
    watch: {
      showOverlay(value) {
        if (!value) {
          this.$emit('add-actor', false);
        }
      }
    },
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
      }
    }
  }
</script>

<style scoped>

</style>
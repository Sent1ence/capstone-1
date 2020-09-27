<template>
  <div class="text-left">
    <v-dialog v-model="dialog" width="500">
      <template v-if="type === 'View Details'" v-slot:activator="{ on }">
        <v-btn small text v-on="on">
          <span class="text-capitalize text-left">{{ type }}</span>
        </v-btn>
      </template>

      <template v-else-if="type === 'Add Equipment'" v-slot:activator="{ on }">
        <v-btn text v-on="on" class="mr-4">
          <span class="text-capitalize text-left">
            <v-icon class="grey--text">mdi-plus</v-icon>
            {{ type }}
          </span>
        </v-btn>
      </template>

      <v-card v-if="type === 'View Details'">
        <v-card-title class="headline grey lighten-2" primary-title>{{ item.equipment_status }}</v-card-title>
      </v-card>
      <v-card v-else-if="type === 'Add Equipment'">
        <v-card-title class="headline grey lighten-2" primary-title>New Item</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Name" v-model="equipment_name" prepend-icon="mdi-folder"></v-text-field>
            <v-text-field label="Status" v-model="equipment_status" prepend-icon="mdi-comment-text"></v-text-field>
             <v-select
              :items="category"
              label="Category"
              prepend-icon="mdi-shape"
               v-model="equipment_category"
              dense></v-select>
            <v-btn depressed class="success mx-0 mt-3" @click="saveEquipment" >Add to inventory</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import equipment from "../views/Equipment";
import { mapActions } from "vuex";
export default {
  name: "Popup",
  components: {
    equipment,
  },
  props: ["item", "type"],
  data() {
    return {
      dialog: false,
      equipment_name: "",
      equipment_status: "",
      equipment_category: "",
      category: ['Vehicle', 'Machine']
    };
  },
  methods: {
    ...mapActions(["postEquipment"]),
    saveEquipment() {
      const { equipment_name, equipment_status, equipment_category } = this;
      const newEquipment = {
        equipment_name,
        equipment_status,
        equipment_category,
      };
      this.postEquipment(newEquipment);
    },
  },
};
</script>
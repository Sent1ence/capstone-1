<template>
  <v-row no-gutters class="upsert-equipment-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <div class="page-header">
        <h1>Add Equipment</h1>
        <v-btn depressed class="primary mx-0 mt-3" @click="saveEquipment">Save</v-btn>
      </div>
      <v-form class="upsert-form" enctype="multipart/form-data">
        <v-row>
          <v-col cols="3">
            <v-subheader>Name</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field v-model="equipment_name" :rules="nameRules" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Category*</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-select
              :items="category"
              label="Category"
              prepend-icon="mdi-shape"
              v-model="equipment_category"
              dense
              bottom
              :rules="nameRules"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Image</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-file-input
              :rules="sizeRules"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-camera"
              placeholder="upload equipment image"
              @change="selectFile"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
    <v-snackbar v-model="snackbar" :right="true" :top="true" :timeout="5000">
      {{ snackbarText }}
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddEquipment",
  data() {
    return {
      sizeRules: [
        (v) =>
          !v || v.size < 2000000 || "Avatar size should be less than 2 MB!",
      ],
      nameRules: [(v) => !!v || "Name is required"],
      equipment_image: undefined,
      equipment_name: "",
      equipment_category: "",
      category: ["Vehicle", "Machine"],
      snackbarText: "",
      snackbar: false,
    };
  },
  methods: {
    ...mapActions(["postEquipment"]),
    ...mapActions(["postEquipmentImage"]),
    saveEquipment() {
      // Without image
      if (!this.equipment_image) {
        const { equipment_name, equipment_category } = this;
        const newEquipment = {
          equipment_name,
          equipment_category,
        };
        this.postEquipment(newEquipment);
      }
      // With image
      else {
        const { equipment_name, equipment_category, equipment_image } = this;
        const newEquipment = {
          equipment_name,
          equipment_category,
          equipment_image,
        };
        this.postEquipmentImage(newEquipment);
      }
    },
    selectFile(file) {
      this.equipment_image = file;
    },
  },
};
</script>
<template>
  <div class="home mx-4 mb-4">
    <h1 class="subtitle-1 grey--text">Inventory</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template class="small" v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="sort('equipment_name')" v-on="on">
              <v-icon left small>mdi-robot-industrial</v-icon>
              <span class="caption text-capitalize">Arrange Alphabetically</span>
            </v-btn>
          </template>
          <span class="caption">Arrange items alphabetically</span>
        </v-tooltip>

        <v-tooltip top>
          <template class="small" v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="filter('All')" v-on="on">
              <v-icon left small>mdi-calendar-check</v-icon>
              <span class="caption text-capitalize">All</span>
            </v-btn>
          </template>
          <span class="caption">Available items first</span>
        </v-tooltip>

        <v-tooltip top>
          <template class="small" v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="filter('Available')" v-on="on">
              <v-icon left small>mdi-calendar-check</v-icon>
              <span class="caption text-capitalize">Available only</span>
            </v-btn>
          </template>
          <span class="caption">Available items first</span>
        </v-tooltip>

        <v-tooltip top>
          <template class="small" v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="filter('In-use')" v-on="on">
              <v-icon left small>mdi-calendar-check</v-icon>
              <span class="caption text-capitalize">In-use only</span>
            </v-btn>
          </template>
          <span class="caption">Filter In-use equipment only</span>
        </v-tooltip>

        <v-spacer></v-spacer>
        <!-- Add New Equipment -->
        <v-btn @click="$router.push('/Equipment/Create')" class="ml-10 orange--text" text>
          <v-icon left small>mdi-plus</v-icon>Create New
        </v-btn>
      </v-row>
      <v-card flat tile v-for="item in computedObj" :key="item.equipment_no">
        <v-row :class="`pl-3 item ${item.equipment_status}`">
          <v-col cols="4" md="6" sm="8">
            <div class="caption grey--text">Equipment Name</div>
            <div>{{item.equipment_name}}</div>
          </v-col>
          <v-col cols="4" md="2" sm="2">
            <div class="caption grey--text">Category</div>
            <div>{{item.equipment_category}}</div>
          </v-col>
          <v-col cols="4" md="2" sm="2">
            <div class="caption grey--text">Action</div>
            <div>
              <v-actions>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit Item</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon small>mdi-table-arrow-right</v-icon>
                    </v-btn>
                  </template>
                  <span>Change Status</span>
                </v-tooltip>
              </v-actions>
            </div>
          </v-col>
          <v-col cols="4" md="2" sm="12">
            <!-- <div class="caption grey--text">Status
            <di>{{item.Status}}</di v>!-->
            <!-- <div class="caption grey--text">Status</div> -->
            <v-chip
              small
              :color="`${item.equipment_status}`"
              :class="`v-chip--active white--text caption my-2`"
            >{{item.equipment_status}}</v-chip>
          </v-col>
        </v-row>

        <v-divider></v-divider>
      </v-card>
      <v-pagination
        class="mt-2"
        v-model="page"
        :length="Math.ceil(allEquipment.length / limit)"
        :total-visible="5"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Popup from "../components/Popup";
export default {
  name: "Equipment",
  components: { Popup },
  data() {
    return {
      page: 1,
      limit: 6,
      visibleEquipment: [],
      allEquipment: [],
    };
  },
  computed: {
    ...mapState(["equipments"]),
    updateEquipment: {
      get() {
        return (this.allEquipment = this.equipments);
      },
      set(newVal) {
        this.allEquipment = newVal;
        /* this.visibleEquipment = this.allEquipment.slice(
          currentePage * this.limit,
          currentePage * this.limit + this.limit
        ); */
      },
    },
    computedObj() {
      let currentePage = this.page - 1;

      if (this.limit) {
        return (this.visibleEquipment = this.allEquipment.slice(
          currentePage * this.limit,
          currentePage * this.limit + this.limit
        ));
      } else {
        return (this.visibleEquipment = this.allEquipment);
      }

      /*  return this.limit
        ? this.equipments.slice(
            currentePage * this.limit,
            currentePage * this.limit + this.limit
          )
        : this.equipments; 
        */
    },
  },
  methods: {
    ...mapActions(["getEquipment"]),

    sort(prop) {
      this.updateEquipment.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    filter(prop) {
      if (prop !== "All") {
        this.allEquipment = this.equipments.filter((equipment) => {
          return equipment.equipment_status === prop;
        });
      } else {
        this.allEquipment = this.equipments;
      }
    },
  },
  mounted() {
    this.getEquipment();
    this.updateEquipment = this.equipments;
    this.computedObj;
    /* this.visibleEquipment = this.allEquipment.slice(0, this.limit); */
  },
};
</script>
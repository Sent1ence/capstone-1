<template>
  <div class="home mx-4 mb-4">
    <h1 class="subtitle-1 grey--text">Equipment</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template class="small" v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="sortBy('ItemName')" v-on="on">
              <v-icon left small>mdi-robot-industrial</v-icon>
              <span class="caption text-lowercase">By Equipment</span>
            </v-btn>
          </template>
          <span class="caption">Sort items alphabetically</span>
        </v-tooltip>

        <v-tooltip top>
          <template class="small" v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="sortBy('Status')" v-on="on">
              <v-icon left small>mdi-calendar-check</v-icon>
              <span class="caption text-lowercase">By availability</span>
            </v-btn>
          </template>
          <span class="caption">Sort items by availability</span>
        </v-tooltip>
      </v-row>
      <v-card flat tile v-for="item in items" :key="item.itemID">
        <v-row row wrap :class="`pl-3 item ${item.Status}`">
          <v-col cols="4" md="4">
            <div class="caption grey--text">Equipment</div>
            <div>{{item.ItemName}}</div>
          </v-col>
          <v-col cols="4" md="4">
            <div class="caption grey--text">Person</div>
            <div>{{item.Person}}</div>
          </v-col>
          <v-col md="4" cols="4">
            <div class="caption grey--text">Date Borrowed</div>
            <div>{{item.DateBorrowed}}</div>
          </v-col>
          <v-col cols="8" md="8">
            <div class="caption grey--text">Address</div>
            <div>{{item.Address}}</div>
          </v-col>
          <v-col xs="2">
            <!-- <div class="caption grey--text">Status
            <div>{{item.Status}}</div>!-->
            <!-- <div class="caption grey--text">Status</div> -->

            <v-chip
              small
              :color="`${item.Status}`"
              :class="`v-chip--active white--text caption my-2`"
            >{{item.Status}}</v-chip>
          </v-col>
        </v-row>

        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          itemID: "Ba-1",
          ItemName: "Backhoe",
          Person: "Jane Doe",
          DateBorrowed: "July 1, 2020",
          Address: "P-3 Dologon Maramag, Bukidnon",
          Status: "In-use"
        },
        {
          itemID: "Mi-1",
          ItemName: "Miller",
          Person: "John Doe",
          DateBorrowed: "July 12, 2020",
          Address: "P-2 Dologon Maramag, Bukidnon",
          Status: "Available"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.items.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
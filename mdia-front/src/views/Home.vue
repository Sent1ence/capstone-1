<template>
  <div class="home mx-4 mb-4">
    <h1 class="subtitle-1 grey--text">Homepage</h1>
    <v-container class="my-4" fluid>
      <v-row no-gutters>
        <v-col cols="12">
          <!-- Wideget card -->
          <v-card flat tile outlined class="home-card">
            <v-card flat tile outlined class="card-heading">
              <v-card-title>Latest Update</v-card-title>
            </v-card>
            <v-row class="px-3">
              <v-col md="3" sm="6" xs="12">
                <Widget
                  icon="mdi-cash"
                  title="Php 850 / hectares"
                  :subTitle="'Current Irrigation Rate'"
                  :supTitle="'Status: Paid'"
                  color="#00b297"
                />
              </v-col>
              <v-col md="3" sm="6" xs="12">
                <Widget
                  icon="mdi-calendar"
                  title="Latest Event"
                  :subTitle="'Bayanihan'"
                  :supTitle="'September 25, 2020'"
                  color="#dc3545"
                />
              </v-col>
              <v-col md="3" sm="6" xs="12">
                <Widget
                  icon="mdi-water-percent"
                  title="6 ft"
                  :subTitle="'Water level'"
                  :supTitle="'Up 2 ft from last update'"
                  color="#0866C6"
                />
              </v-col>
              <v-col md="3" sm="6" xs="12">
                <Widget
                  icon="mdi-clock"
                  title="Area"
                  :subTitle="'Next Water Schedule'"
                  :supTitle="'1 PM'"
                  color="#1D2939"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <!-- End of Widget -->
        <!-- Charts -->
        <v-col offset-md="7" cols="5" class="mt-2">
          <v-card flat tile outlined class="home-card">
            <v-card flat tile outlined class="card-heading">
              <v-card-title>Charts</v-card-title>
            </v-card>
            <div class="ma-2">
              <HarvestChart :receivedData="harvestChartData" />
            </div>

            <div class="ma-2">
              <WaterChart :receivedData="waterChartData" />
            </div>
          </v-card>
        </v-col>
        <!-- End of Chart -->
      </v-row>

      <!-- <area-chart
        :data="chartData"
        width="650px"
        height="400px"
        xtitle="Date"
        ytitle="Supply of water for the last week"
        :messages="{empty: 'No data'}"
        :download="true"
        min="0"
        :max="15"
      ></area-chart>-->
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import WaterChart from "../components/charts/WaterChart";
import HarvestChart from "../components/charts/HarvestChart";
import Widget from "../components/Widget";
export default {
  name: "Home",
  components: { Widget, WaterChart, HarvestChart },
  data() {
    return {
      waterChartData: [],
      harvestChartData: [
        ["2017-01-01", 7],
        ["2017-01-02", 4],
        ["2017-01-03", 6],
        ["2017-01-04", 8],
        ["2017-01-05", 7],
      ],
    };
  },
  computed: {
    ...mapState(["waterData"]),
  },
  methods: {
    ...mapActions(["getData"]),
  },
  mounted() {
    this.getData();
    for (let i = 0; i < this.waterData.length; i++) {
      if (this.waterData.length - (i + 1) >= 7) {
        continue;
      } else {
        let date = this.waterData[i].waterData_date;
        let data = this.waterData[i].waterData_data;

        this.waterChartData.push([date]);
        this.waterChartData[this.waterChartData.length - 1].push(data);
      }
    }
  },
};
</script>
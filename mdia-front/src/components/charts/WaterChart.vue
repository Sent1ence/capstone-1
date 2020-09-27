<template>
  <v-card class="card">
    <v-card-text class="pa-3">
      <area-chart
        :data="receivedData"
        xtitle="Date"
        ytitle="Supply of water for the last week"
        :messages="{empty: 'No data'}"
        :download="true"
        :dataset="{borderWidth: 3}"
      ></area-chart>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "WaterChart",
  props: {
    receivedData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      err: null,
      chartData: [],
    };
  },
  /* computed: {
    updateData: {
      get() {
        try {
          for (let i = 0; i < this.receivedData.length; i++) {
            if (this.receivedData.length - (i + 1) >= 7) {
              continue;
            } else {
              let date = this.receivedData[i].waterData_date;
              let data = this.receivedData[i].waterData_data;

              this.chartData.push([date]);
              this.chartData[this.chartData.length - 1].push(data);
            }
          }
        } catch (error) {
          return (this.err = error);
        }
      },
    },
  }, */
  mounted() {
    for (let i = 0; i < this.receivedData.length; i++) {
      if (this.receivedData.length - (i + 1) >= 7) {
        continue;
      } else {
        let date = this.receivedData[i].waterData_date;
        let data = this.receivedData[i].waterData_data;

        this.chartData.push([date]);
        this.chartData[this.chartData.length - 1].push(data);
      }
    }
  },
};
</script>
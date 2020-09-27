<template>
  <v-card class="card">
    <v-card-text class="pa-3">
      <line-chart
        :data="receivedData"
        xtitle="Date of Harvest"
        ytitle="Yields"
        :messages="{empty: 'No data'}"
        :download="true"
        :colors="['#47d8a5']"
        :dataset="{borderWidth: 3}"
      ></line-chart>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    name: "HarvestChart",
    props: {
        receivedData: {
            type: Array,
            required: true,
        }
    }
}
</script>

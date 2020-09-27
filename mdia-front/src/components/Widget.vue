<template>
  <v-card class="widget-card">
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <!--    <div class="layout row ma-0" ">
          <div class="sm4 xs4 flex">
            <div class="layout column ma-0 justify-center align-center">
              <v-icon size="76px" color="white" style="opacity: 0.8;">{{icon}}</v-icon>
            </div>
          </div>
          <div class="layout column ma-0 justify-center" style="color: white;">
            <span class="caption">{{ subTitle }}</span>
            <div class="headline">{{ title }}</div>
            <span class="caption">{{ supTitle }}</span>
          </div>
        </div>-->
        <v-row class="ma-0" :style="{ backgroundColor: color }">
          <v-col sm="4" xs="4" class="ma-0" justify="center" align="center">
            <v-icon size="80px" color="white" style="opacity: 0.8;">{{icon}}</v-icon>
          </v-col>
          <v-col justify="center" class="ma-0" style="color: white;">
            <span class="caption">{{ subTitle }}</span>
            <div class="headline">{{ title }}</div>
            <span class="caption">{{ supTitle }}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    supTitle: {
      type: String,
      required: false,
    },
    subTitle: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>
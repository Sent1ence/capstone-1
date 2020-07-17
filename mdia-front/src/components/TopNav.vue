<template>
  <v-container>
    <v-app-bar dense flat app transition="slide-y-transition" class="info">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title clss="text-uppercase light-blue--text text--darken-3">MDIA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="black">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>My Account</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in userlinks" :key="link.title" :to="link.path">
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Sign Out Icon -->
      <v-btn text color="black">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="secondary text-uppercase" app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/69.jpg" />
          </v-list-item-avatar>

          <v-list-item-content class="grey--text">
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle class="grey--text">MDIA-Member</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in links" :key="item.text" router :to="item.path">
          <v-list-item-icon>
            <v-icon class="grey--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="grey--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template> 

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Home", icon: "mdi-view-dashboard", path: "/" },
        {
          title: "Board Members",
          icon: "mdi-account-group-outline",
          path: "/Board-members"
        },
        {
          title: "Equipment",
          icon: "mdi-robot-industrial",
          path: "/Equipment"
        }
      ],
      userlinks: [
        { title: "Profile", icon: "mdi-account", path: "/Profile-page" },
        { title: "Sign Out", icon: "mdi-export", path: "/" }
      ]
    };
  }
};
</script>
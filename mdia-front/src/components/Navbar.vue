<template>
    <nav>
        <v-navigation-drawer v-model="drawer" dark app class="success darken-3 py-0">
            <v-container>
            <v-row>
                <v-col md="9">
                    <v-progress-circular
                    :rotate="300"
                    :size="50"
                    :width="7"
                    :value="value"
                    color="secondary accent-3"
                    class="mt-n1">
                        {{value}}
                    </v-progress-circular>
                </v-col>
                <v-col md="3">
                    <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                </v-col>
            </v-row>
            </v-container>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    data: () => ({
        drawer:true,
        interval: {},
        value: 0,
    }),
    beforeDestroy (){
        clearInterval(this.interval)
    },
    mounted () {
        this.interval = setInterval(() => {
            if(this.value === 100) {
                return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    }
}
</script>
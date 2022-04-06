<template>
    <div>
        <!--BARRA HORIZONTAL-->
        <v-card>
            <v-app-bar color="primary accent-4" dark>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <v-btn depressed color="primary" @click="CerrarSesion();"><v-icon large>mdi-logout</v-icon>Logout</v-btn>
            </v-app-bar>
        </v-card>
        <!--MENU VERTICAL-->
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            drawer: !(null),
            items:[]
        }
    },
    mounted(){
        this.items.push({title:'Main', icon: 'mdi-home',path: '/main'},
                        {title:'AboutMe', icon: 'mdi-home',path: '/aboutme'})
    }
}
</script>

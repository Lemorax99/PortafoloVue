<template>
    <div>
        <!--BARRA HORIZONTAL-->
        <v-app-bar color="primary accent-4" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn depressed color="primary" @click="console.log('salir')"><v-icon large>mdi-logout</v-icon>Logout</v-btn>
        </v-app-bar>
        <!--MENU VERTICAL-->
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="@/assets/Perfil.jpeg"></v-img>
                </v-list-item-avatar>
                <v-row>
                    <v-col>
                        <label>Raúl Villarreal Mora <br>Jr Developer</label>
                    </v-col>
                </v-row>
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
            drawer: false,
            items:[]
        }
    },
    mounted(){
        this.items.push({title:'Main', icon: 'mdi-home',path: '/main'},
                        {title:'Experience', icon: 'mdi-home', path: '/experience'},
                        {title:'Education', icon: 'mdi-home', path: '/education'},
                        {title:'Blog',icon: 'mdi-home', path: '/blog'},
                        {title:'Contact', icon: 'mdi-home', path: '/contact'})
    }
}
</script>

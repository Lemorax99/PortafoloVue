<template>
    <v-container id="contenedor" >
        <p class="text-h4 texto">Hey! My name is Raúl. I'm computer systems engineer</p>
        <v-spacer></v-spacer>
        
        <v-row class="rows">
            <v-col cols="12" sm="1" md="1">

            </v-col>

            <v-col cols="12" sm="4" md="4">
                <v-img
                    src="@/assets/Perfil.jpeg"
                    max-height="720"
                    max-width="320"
                    alt="Developer"
                    class="imagen"
                ></v-img>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <p class="text-h5 texto">I have been working as a web and software developer.</p>
                <p class="texto" > Poner cosas sobre mi vida profesional</p>
            </v-col>
        </v-row>

        <v-row class="rows" >
            <v-col cols="12" sm="1" md="1">

            </v-col>

            <v-col cols="12" sm="6" md="6">
                <p class="text-h5 texto">I have been working as a web and software developer.</p>
                <p class="texto" > Poner cosas sobre mi vida profesional</p>
            </v-col>

            <v-col cols="12" sm="4" md="4">
                <v-img
                    src="@/assets/Gaming.png"
                    max-height="720"
                    max-width="320"
                    alt="Gaming"
                    class="imagen"
                ></v-img>
            </v-col>

        </v-row>

        <v-row class="rows">
            <v-col cols="12" sm="1" md="1">

            </v-col>

            <v-col cols="12" sm="4" md="4">
                <v-img
                    src="@/assets/Music.jpg"
                    max-height="320"
                    max-width="700"
                    alt="Developer"
                    class="imagen"
                ></v-img>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <p class="text-h5 texto">I have been working as a web and software developer.</p>
                <p class="texto" > Poner cosas sobre mi vida profesional</p>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
export default {
    name: 'Main',
    data(){
        return{

        }
    }
}
</script>

<style scoped>

#contenedor{
    margin: auto;
}

.texto{
    text-align: center;
}

.imagen{
    margin: auto;
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
}

.rows{
    margin-top: 30px;
}

</style>

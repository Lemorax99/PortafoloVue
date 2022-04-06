<template>
    <v-container>
        <v-form ref="refLogin">

            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field
                    label="Usuario "
                    v-model="usuario"
                    >
                    </v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field
                    label="Contraseña "
                    v-model="password"
                    :append-icon="btnPass1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="btnPass1 = !btnPass1"
                    :type="btnPass1 ? 'text' : 'password'"
                    >   
                    </v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <v-btn @click="MandaFormulario()" >Ingresar</v-btn>
                </v-col>
            </v-row>

        </v-form>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            usuario:"",
            password:"",
            btnPass1:false
        }
    },
    methods: {
        MandaFormulario(){
            if(this.usuario == "lemorax99" && this.password == "admin12345"){
                console.log("Logeado")
                this.$router.push({path:'/main'});
            }else{
                console.log("Usuario o contraseña incorrectos")
            }
        }
    }
}
</script>



<style scoped>

</style>

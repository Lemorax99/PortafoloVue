<template>
    <v-container>
        <v-card>
            <v-card-title>
                <span class="text-h6">Mandame un mensaje para ponernos en contacto</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formContact">
                    <v-text-field
                    label="Nombre *"
                    dense outlined
                    v-model="message.name"
                    :rules="[()=> !!message.name || 'Nombre obligatorio.' ]"
                    >
                    </v-text-field>
                    <v-text-field
                    label="Correo *"
                    dense outlined
                    v-model="message.mail"
                    :rules="[()=> !!message.mail || 'Correo obligatorio.']"
                    >
                    </v-text-field>
                    <v-textarea
                    label="Escribe aqui tu mensaje * "
                    dense outlined
                    v-model="message.message"
                    :rules="[()=> !!message.message || 'Mensaje obligatorio.']"
                    >
                    </v-textarea>
                    <v-btn
                        color="primary"
                        @click="SendMessage()"     
                    >Enviar</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
        
    </v-container>
</template>

<script>
export default {
    name: "Contact",
    data(){
        return({
            message:{
                name:"",
                mail:"",
                message:""
            }
        })
    },
    methods:{
        SendMessage(){
            if(this.$refs.formContact.validate()){
                console.log(this.message)
            }else{
                console.log("Mensaje de error");
            }
        }
    }
}
</script>
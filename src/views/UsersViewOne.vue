

<template>
    <h2 v-if="isLoading">Espere porfavor...</h2>
    <h2 v-else>Usuarios</h2>

    <h5 v-if="error">{{ error }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="user in users" :key="user.id">
                <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                <h6>{{ user.email }}</h6>
            </li>
        </ul>
    </div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>

    <span>Pagina: {{ currentPage }}</span>
</template>

<script>

import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {

        const isLoading = ref(true);
        const currentPage = ref(1);
        const users = ref([]);
        const error = ref();


        const getUsers = async ( page = 1 ) => {

            if ( page <= 0 ) page = 1;

            isLoading.value = true;

            const resp = await axios.get(`https://reqres.in/api/users` , {
                params: {
                    page
                }
            })

            if ( resp.status != 200 ) return;

            
            if ( resp.data.data.length > 0 ) {
                users.value = resp.data.data
                currentPage.value = page;
                error.value = null;
            } else if ( currentPage.value > 0 ) {
                error.value = 'No hay más registros.'
            }

            isLoading.value = false;
        
        }


        getUsers();


        return {
            isLoading,
            currentPage,
            users,
            error,

            nextPage: () => getUsers( currentPage.value + 1 ),
            prevPage: () => getUsers( currentPage.value - 1 ),
        }

    }
}
</script>

<style lang="css" scoped>
    h2 {
        text-align: center;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 250px;
    }
</style>

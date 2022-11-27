

<template>
    <h2 v-if="isLoading">Espere porfavor...</h2>
    <h2 v-else>Usuarios</h2>

    <h5 v-if="error">{{ error }}</h5>

    <div v-if="users.length > 0">
        <user-list 
            :users="users"
            v-slot="{ user }">
            <h3>{{ user.first_name }}</h3>
            <p>{{ user.email }}</p>
        </user-list>
    </div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>

    <span>Pagina: {{ currentPage }}</span>
</template>

<script>

import useUsers from '@/composables/useUsers';
import { onMounted } from 'vue';
import UserList from '../components/UserList.vue';

export default {
    components: {
        UserList
    },  
    setup() {

        onMounted(() => {
            console.log('onMounted')
        })

        const {
            isLoading,
            currentPage,
            users,
            error,
            nextPage,
            prevPage
        } = useUsers();

        return {
            isLoading,
            currentPage,
            users,
            error,

            nextPage,
            prevPage
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

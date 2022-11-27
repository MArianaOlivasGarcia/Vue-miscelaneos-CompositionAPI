


<template>
    <h1>Lista de tareas</h1>

    <h4>Tareas: {{ all }}</h4>

    <h4>Pendientes: {{ pending }}</h4>
    <h4>Completadas: {{ completed }}</h4>

    <hr>

    <button :class="{ 'active': currentTab == 'all' }" @click=" currentTab = 'all' ">Todos</button>
    <button :class="{ 'active': currentTab == 'pending' }" @click=" currentTab = 'pending' ">Pendientes</button>
    <button :class="{ 'active': currentTab == 'completed' }" @click=" currentTab = 'completed' ">Completados</button>

    <div>
        <ul>
            <li 
                v-for="todo in getTodosByType" 
                :key="todo.id"
                :class="{ 'completed': todo.completed }"
                @click="toggleTodo( todo.id )" >{{ todo.text }}</li>
        </ul>
    </div>


    <modal v-if="showModal" @on:close="showModal = false">
        <template v-slot:header>
            <h2>Nueva tarea</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo(newTodoText); showModal = false">
                <input 
                    type="text" 
                    placeholder="Escribe aquí..."
                    v-model="newTodoText">
                <br><br>
                    
                <button type="submit">Crear</button>
            </form>
        </template>
    </modal>

    <button @click="showModal = true">Añadir tareas</button>

</template>

<script>
import useTodos from '../composables/useTodos';
import Modal from '../components/ModalComponent.vue'
import { ref } from 'vue';

export default {
    components: {
        Modal
    },
    setup(){

        // const {
        //     all,
        //     pending,
        //     completed,
        //     currentTab,
        //     getTodosByType,
        //     toggleTodo
        // } = useTodos();


        // return {
        //     all,
        //     pending,
        //     completed,
        //     currentTab,
        //     getTodosByType,
        //     toggleTodo
        // }

        return {
            ...useTodos(),

            showModal: ref(false),
            newTodoText: ref('')
        }
    }

}
</script>

<style scoped>

    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 300px;
        text-align: left;
    }

    li {
        cursor: pointer;
    }

    .active {
        background-color: #2c3e50;
        color: white;
    }

    .completed {
        text-decoration: line-through;
    }

</style>



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

</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {

    setup(){

        const store = useStore();
        const currentTab = ref('all');

        const toggleTodo = ( id ) => {
            store.commit('toggleTodo', id )
        }

        return {
            currentTab,

            all: computed( () => store.getters['allTodos'] ),
            pending: computed( () => store.getters['pendingTodos'] ),
            completed: computed( () => store.getters['completedTodos'] ),

            // getTodosByType es una función.
            getTodosByType: computed( () => store.getters['getTodosByType']( currentTab.value ) ),

            // methods
            toggleTodo
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
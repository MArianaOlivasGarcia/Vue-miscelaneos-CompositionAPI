
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {

    const store = useStore();
    const currentTab = ref('all');

    const toggleTodo = ( id ) => {
        store.commit('toggleTodo', id )
    }

    const createTodo = ( text = '' ) => {
        store.commit('createTodo', text)
    }

    return {
        currentTab,

        all: computed( () => store.getters['allTodos'] ),
        pending: computed( () => store.getters['pendingTodos'] ),
        completed: computed( () => store.getters['completedTodos'] ),

        // getTodosByType es una función.
        getTodosByType: computed( () => store.getters['getTodosByType']( currentTab.value ) ),

        // methods
        toggleTodo,
        createTodo
    }

}


export default useTodos;
import { createStore } from 'vuex'
import { v4 as uuid } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Terminar curso de Vue', completed: false },
      { id: 2, text: 'Terminar curso de React', completed: false },
      { id: 3, text: 'Crear Portafolio web', completed: true },
      { id: 4, text: 'Hacer commit a git', completed: true },
    ]
  },
  getters: {
    allTodos( state, getters, rootState ) {
      return state.todos
    },
    pendingTodos: ( state ) => {
      return state.todos.filter( todo => !todo.completed )
    },
    completedTodos: ( state ) => {
      return state.todos.filter( todo => todo.completed )
    },
    // Una función que retorna una función
    getTodosByType: ( _, getters ) => ( type ) => {
      switch ( type ) {
        case 'all': return getters.allTodos;
        case 'pending': return getters.pendingTodos;
        case 'completed': return getters.completedTodos;
      }
    }
  },
  mutations: {
    toggleTodo: ( state, id ) => {
      const todoIdx = state.todos.findIndex( todo => todo.id === id )
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },

    createTodo: ( state, text = '' ) => {

      if ( text.trim().length <= 1 ) return;
      
      state.todos.push({
        id: uuid(),
        completed: false,
        text
      })

    }
  },
  actions: {
  },
  modules: {
  }
})

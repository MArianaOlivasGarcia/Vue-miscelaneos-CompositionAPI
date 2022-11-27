<template>
  <h1>Reactive vs Ref</h1>

  <h3>{{ personOne }}</h3>
  <h3>{{ personTwo }}</h3>

  <button @click="changePersonOne">Change personOne</button>
  <button @click="changePersonTwo">Change personTwo</button>

</template>

<script>
import { ref, reactive } from '@vue/reactivity'

export default {
  name: 'HomeView',
  
  setup() {

    const personOne = ref({ name: 'Mariana', age: 26 })
    const personTwo = reactive({ name: 'Octavio', age: 54 })

    return {
      personOne,
      personTwo,

      changePersonOne: () => {
        personOne.value.name = 'Mariana Olivas';
        personOne.value.age = 27;
      },
      changePersonTwo: () => {
        personTwo.name = 'Octavio Rámirez';
        personTwo.age = 55;
      }

    }

  }

}
</script>

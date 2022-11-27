

<template>

  <h1>Search Pokemon: {{ pokemonId }}</h1>

  <form
    @submit.prevent="onSubmit">
    <input 
      type="number" 
      placeholder="No. pokemon"
      v-model="pokemonId" 
      ref="txtPokemonId" >
      <!-- autofocus -->
    </form>

  <br>

  <span>Presione enter para buscar</span>

</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {

      const router = useRouter();

      const pokemonId = ref(1);

      const txtPokemonId = ref();

      onActivated( () => {
        // console.log(txtPokemonId.value)
        txtPokemonId.value.select();
      })


      return {
        pokemonId,
        txtPokemonId,

        onSubmit: () => {
          // console.log(pokemonId.value)
          router.push({ name: 'pokemonId', params: {
            id: pokemonId.value
          } })
        }
      }
        
    }
}
</script>

<style>

</style>
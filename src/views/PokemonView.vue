

<template>

    <h1 v-if="isLoading && !error">Buscando pokemon</h1>
    <h1 v-else-if="error">{{ error }}</h1>

    <template v-else>

        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">

        <br>
        <router-link :to="{ name: 'search-pokemon' }">Regresar</router-link>

    </template>



</template>

<script>
import { watch } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composables/usePokemon';

export default {

    setup() {

        // const route = useRoute();
        const route = useRoute();

        const { isLoading, pokemon, error, getPokemon } = usePokemon( route.params.id );


        // como estamos usando router keep-alive, necesitamos usar watch
        watch(
            () => route.params.id,
            (currentId, prevId) => {
                // console.log({currentId, prevId})
                getPokemon(route.params.id)
            }
        )


        // Antes de que se abandone la ruta
        onBeforeRouteLeave( () => {
            console.log('onBeforeRouteLeave')
            const answer = window.confirm('¿Está seguro que desea salir?')

            if ( !answer ) return false;
        })

        return {
            isLoading,
            pokemon,
            error
        }

    }

}
</script>

<style>

</style>
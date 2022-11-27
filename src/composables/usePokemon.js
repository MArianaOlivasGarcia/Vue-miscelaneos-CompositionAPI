import axios from "axios";
import { ref } from "vue";




const usePokemon = ( pokemonId = 1 ) => {

    const pokemon = ref();
    const isLoading = ref(true);
    const error = ref();


    const getPokemon = async ( id ) => {

        if ( !id ) return;

        isLoading.value = true;
        pokemon.value = null;

        try {
            
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

            pokemon.value = resp.data;
            error.value = null;

            // console.log(pokemon.value)

        } catch (error) {
            error.value = 'Oops! Ocurrio un error, no se pudo obtener el pokémon'
        }

        isLoading.value = false;


    }

    getPokemon( pokemonId );


    return {
        pokemon,
        isLoading,
        error,

        getPokemon
    }

}



export default usePokemon;
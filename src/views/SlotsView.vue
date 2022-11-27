<template>

    <h1>Slots</h1>
    <button  @click="showModal = true">Abrir modal</button>

    <Modal 
        title="Hola mundo" 
        v-if="showModal"
        @on:close="closeModal">

        <template v-slot:header>
            <h2>Titulo</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit.</p>
        </template>
        <template v-slot:footer>
            <button >Salir</button>
        </template>

        <template v-slot:exposed="slotProps">
            {{ slotProps }}
        </template>
        <!-- <h2>Titulo del modal</h2>
        <p>Lorem ipsum dolor sit.</p>
        <button>Salir</button> -->
    </Modal>

</template>

<script>
import Modal from '@/components/ModalComponent.vue';
import { ref } from 'vue';

export default {
    components: {
        Modal
    },
    setup(){

        const showModal = ref(false);

        return {
            showModal,

            // Methods
            openModal: () => showModal.value = true,
            closeModal: () => showModal.value = false,
        }

    }
}
</script>

<style scoped>

</style>
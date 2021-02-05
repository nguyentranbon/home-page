<template>
    <modal name="modal-signup" :width="620">
        <login v-if="activeElem === 'login'"/>
    </modal>
</template>

<script>
import { mapState } from 'vuex'

import Login from '@/components/o/Auth/Login.vue'
import Modal from '@/components/a/block/Modal.vue'

export default {
    name: 'SignUp',
    computed: {
        ...mapState({
            activeElem: state => state.authElem,
        })
    },
    

    components:{
        Login,
        Modal,
   
        
    }
}
</script>

<style>

</style>
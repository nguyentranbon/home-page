<template>
    <div class="sign-up work">
        <modal name="modal-seller-signup">
        <div class="sign-up work"></div>
            <login-seller v-if="activeSeller === 'login-seller'" />
        </modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/a/block/Modal.vue'
import LoginSeller from '@/components/o/Auth/LoginSeller'

export default {
  name: 'SellerSignUp',
  computed: {
    ...mapState({
      activeSeller: state => state.authSeller
    })
  },
    components: {
        Modal,
        LoginSeller,

    }
}
</script>

<style>

</style>
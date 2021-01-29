import EventBus from '@/plugins/event-bus.js'

export default {
    methods: {
        goToSellerAccount () {
            this.$store.commit('setAuthSeller', 'login-seller')
            EventBus.$emit('modal-show', 'modal-seller-signup')
        },
    }
}
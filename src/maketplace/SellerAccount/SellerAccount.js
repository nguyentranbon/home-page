import EventBus from '@/plugins/event-bus.js'

export default {
    name: 'SellerAccountButton',
    computed: {

      user () {
        return this.$store.state.current
      },
      currentUser () {
        return this.user
      }
    },
    methods: {
      goToSellerAccount () {
          this.$store.commit('setAuthSeller', 'login-seller')
          EventBus.$emit('modal-show', 'modal-seller-signup')
      },
 
    }
  }
  
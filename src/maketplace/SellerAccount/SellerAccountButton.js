import EventBus from '@/plugins/event-bus.js'

export default {
  name: 'SellerAccountButton',
  computed: {
    isLoggedIn () {
      return this.$store.getters['user/isLoggedIn']
    },
    user () {
      return this.$store.state.user.current
    },
    currentUser () {
      // renamed to 'user'
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

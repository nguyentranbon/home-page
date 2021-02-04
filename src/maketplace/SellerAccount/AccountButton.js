import EventBus from '@/plugins/event-bus.js'

export const AccountButton = {
  name: 'AccountButton',
  computed: {

  },
  methods: {
    goToAccount () {
        this.$store.commit('setAuthElem', 'login')
        EventBus.$emit('modal-show', 'modal-signup')
    },
  }
}
  
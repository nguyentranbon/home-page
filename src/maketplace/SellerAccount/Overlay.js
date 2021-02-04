// theme-specific component
export default {
    name: 'Overlay',
    computed: {
      isVisible () {
        return this.$store.state.overlay
      }
    },
    methods: {
      close () {
        this.$store.commit('setOverlay', false)
      }
    }
  }
  
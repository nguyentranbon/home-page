<template>
  <transition :name="transitionName">
    <div
      class="modal"
      v-if="isVisible"
      ref="modal"
    >
      <!--      <div class="modal-wrapper">-->
      <!--        <div class="modal-center">-->
    
    <div class="modal-backdrop" @click="close" />
    <div class="login-main" :style="style">
        <div class="form-inner">
            <div class="banner">
              <header-login />
                <slot name="header" />
            </div>
            <div class="modal-content">
                <slot name="content" />
            </div>
        </div>
    </div>
    
    </div>
    
    <!--      </div>-->
    <!--    </div>-->
  </transition>
</template>


<script>
import HeaderLogin from '@/components/a/block/Login/HeaderLogin'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'


export default {
    name: 'Modal',
    data () {
        return {
            isVisible: false
        }
    },
    watch: {
        isVisible (state) {
            if (state) {
                this.$nextTick(() => {
                disableBodyScroll(this.$refs['modal']);
                })
            } else {
                clearAllBodyScrollLocks();
            }
        }
    },
    components:{
      HeaderLogin

    },
    methods: {
        onHide (name) {
          return name === this.name ? this.toggle(false) : false
        },
        onShow (name) {
            console.log('aaa',name)
            console.log('bbb',this.name)
            return name === this.name ? this.toggle(true) : false
        },
        onToggle (name, state) {
            if (name === this.name) {
                state = typeof state === 'undefined' ? !this.isVisible : state
                this.toggle(state)
            }
        },

        toggle (state) {
          this.isVisible = state
        },
        close () {
          this.toggle(false)
        }
    },
    beforeMount () {
      this.$bus.$on('modal-toggle', this.onToggle)
      this.$bus.$on('modal-show', this.onShow)
      this.$bus.$on('modal-hide', this.onHide)
    },
    beforeDestroy () {
      this.$bus.$off('modal-toggle', this.onToggle)
      this.$bus.$off('modal-show', this.onShow)
      this.$bus.$off('modal-hide', this.onHide)
    },
    props: {
      delay: {
        required: false,
        type: Number,
        default: 300
      },
      name: {
          required: true,
          type: String
      },
      transitionName: {
          type: String,
          default: 'fade-in-down'
      },
      width:{
        type: Number,
        default: 0,
      }
  },
  computed:{
    style(){
        return this.width ? `width: ${this.width}px` : false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  .modal-backdrop{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .login-main {
    position: absolute;
    width: 650px;
    background: gray;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    z-index: 11;
}
}
</style>
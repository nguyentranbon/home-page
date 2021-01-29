<template>
  <transition :name="transitionName">
        <div 
            class="modal"
            v-if="isVisible"
            ref="modal"
        >
        <div class="modal-backdrop" @click="close" />
            <div class="modal-container">
                <div>123</div>
            </div>
        
        </div>
  </transition>
</template>

<script>
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
    methods:{

        onShow(name){
            return name === this.name ? this.toggle(true) : false
        },
        close () {
            this.toggle(false)
        },
        toggle (state) {
            this.isVisible = state
        },

    },
    props:{

        transitionName: {
            type: String,
            default: 'fade-in-down'
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;


  .modal-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 945px;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;


    @media (max-width: 600px) {
      min-height: 100%;
      min-width: 100%;
      margin: 0;
    }
  }
}
</style>
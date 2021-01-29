<template>
    <section class="slider-banner">
        <div
            ref="draggableContainer"
            class="vue-swipe-container">
                <slider-slides >
                    <div style="overflow: hidden; position: relative" :style="{ width:total +'px' }">
                    <slider-slide
                        v-for="(slide, index) in slides"
                        :key="index"
                        class="image-slide__slide"
                        style="float: left;
                                position: relative;
                                transition-property: transform;
                                transition-duration: 0ms;
                                "
                        :style="{width:windowWidth +'px'}"
                        > 

                        <a href="#">
                            <img
                                :src="slide.image"
                                :alt="slide.headline"
                                class="img-banner"
                            >
                        </a>
                    
                    </slider-slide>
                    </div>
                </slider-slides>


                <ol class="image-slider__dots w-100">
                    <li
                        v-for="n in slides.length"
                        :key="n"
                        class="dot"
                        @click="goToIndex(n - 1)"
                        :class="{'is-active':n-1 == activeIndex}"
                    >
                    {{n}}
                    </li>
                </ol>
                
            </div>
          <div>aaaaa: {{this.touch.startX}} bbbb  {{this.touch.endX}}</div>
    </section>
    
</template>

<script>
import SliderSlide from '../a/SliderSlide.vue'
import SliderSlides from '../m/SliderSlides.vue'
export default {
    name: 'BannerSlider',
    data(){
        return{
            activeIndex: 0,
            touch: {
                startX: 0,
                endX: 0,
            },
            windowWidth: 0,
            total: 0,
            s : document.getElementsByClassName('slider-slide'),
        }
    },
    components: {
        SliderSlide,
        SliderSlides,
    },
    props:{
        slides: {
            required: true,
            type: Array,
        },
    },
    methods:{
        goToIndex(index) {
            // Find out the direction we're moving
            // const direction = index > this.activeIndex ? `left` : `right`;
            // Call methoad hide() method on the curently active `SliderSlider` component
            // this.slide[this.activeIndex].hide(direction);
            // Call the `show()` method on the `SliderSlide`
            // component with the correspondign index.
            // this.slide[index].show(direction);
            this.activeIndex = index;
            this.windowWidth = window.innerWidth,
            this.total = this.windowWidth * this.slidesCount;
            
            
        },
        next() {
            this.goToIndex(this.nextIndex);
        },
        prev() {
            this.goToIndex(this.prevIndex);
        },

        TouchMove () {
            this.$refs.draggableContainer.addEventListener('touchmove', event => this.touchstart(event))
            this.$refs.draggableContainer.addEventListener('touchstart', event => this.touchmove(event))
            this.$refs.draggableContainer.addEventListener('touchend', () => this.touchend())
        },
        touchstart(event) {
            this.touch.startX = event.touches[0].clientX;
            this.touch.endX = this.windowWidth - this.touch.startX;
            // document.document.querySelector('.slider-slide').style.transform = "rotate(20deg)";
            document.querySelector('.slider-slide').style.transform = 'translate(' + this.touch.startX + 'px,0px)';
            document.querySelector('.slider-slide').style.left =  '-'+ this.touch.endX+'px';
            
        },
        touchmove(event) {
            this.touch.endX = event.touches[0].clientX;
            console.log("12",this.touch.endX);

        },
        touchend() {
            // if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20)
            // return;
            // if(this.touch.endX < this.touch.startX)
            // this.next();
            // else
            // this.prev();

        },
        elementDrag: function (event) {
            event.preventDefault();
           
        }


      
      
    },
    mounted() {
        this.TouchMove();
        this.goToIndex(this.activeIndex);
        window.onresize = () => {
            this.windowWidth = window.innerWidth,
            this.total = this.windowWidth * this.slidesCount;
        }
    },
    computed:{

        slide(){
            return this.$children.find(x => x.$options.name === `slider-list`).$children;
        },
        slidesCount() {
            return this.slides.length;
        },
        nextIndex() {
            const nextIndex = this.activeIndex + 1;
            return nextIndex <= this.slidesCount - 1 ? nextIndex : 0;
        },
        prevIndex() {
            const prevIndex = this.activeIndex - 1;
            return prevIndex >= 0 ? prevIndex : this.slidesCount - 1;
        },

    },

    render() {
        return this.$scopedSlots.default({
            // Data
            activeIndex: this.activeIndex,
            // Methods
            goToIndex: this.goToIndex,
            next: this.next,
            prev: this.prev,
        });
    },



}
</script>

<style lang="scss">
.vue-swipe-container {
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding: 0px 0px 52.8%;
    .slider-list{
        position: absolute;
    }
    .img-banner{
        display: inline-block;
        vertical-align: middle;
        min-width: 100%;
    }

    .image-slider__dots {
        text-align: center;
        display: flex;
        justify-content: center;
        padding: 0;
        margin:0;
        position: absolute;
        bottom: 0;
    }
    
    .image-slider__dots li.dot{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 20px;
        margin: 2.5px;
        display: inline-block;
        background-color: #C4C4C4;
        text-indent: -9990px;
        transition: .4s;
        width: .4s;
        transition-delay: .2s,.2s ,0s;
        cursor: pointer;
        &:hover {
            background-color: #FDDB3A;
            transition: .4s;
        }
        &.is-active{
            background-color: #FDDB3A;
            width: 20px;
            transition-delay: 0s;
        }
    } 

}
    
</style>
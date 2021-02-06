<template>
  <section class="head-image">
      <div class="banenr-img w-100 h-100" v-lazy:background-image="imgUrl">
      </div>
  </section>
</template>

<script>
export default {
    name: 'HeadImage',
    data(){
        return{
            imgUrl:require('@/assets/images/apple.png') // String
        }
    }
}
</script>

<style lang="scss" scoped>
.banenr-img{
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
}

@media(min-width: 1200px){
  .head-image {
    height: 500px;
  }
}
@media (max-width: 1024px) {
  .head-image {
    height: 359px;
  }
}
@media(max-width: 576px){
  .head-image {
    height: 175px;
  }
}

</style>
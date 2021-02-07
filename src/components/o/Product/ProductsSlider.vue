<template>
  <section class="collection">
      <div class="container">
          <div class="row">
              <header class="col-12">
                <div class="title-product">
                    {{title}}
                </div>
              </header>
          </div>
      </div>
  </section>
</template>

<script>
import { component } from 'vue/types/umd'
export default {
    name: 'ProductsSlider',
    component:{

    },
    props:{
        title:{
            type: String,
            default: ''
        }
    }

}
</script>

<style>

</style>
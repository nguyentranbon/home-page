<template>
  <div class="input-search">
      <icon-search />
      <input type="search" class="search" placeholder="What are you loking for today?">
  </div>
</template>

<script>
import IconSearch from '@/components/a/icon/IconSearch'
export default {
    data(){
        return{

        }
    },
    components:{
        IconSearch
    }

}
</script>

<style>
    .input-search{
        display: flex;
        position: absolute;
        top: 57px;
        align-items: center;
        background-color: #FFFFFF;
        padding: 0px 15px;
        line-height: 39px;
        left: 2px;
        right: 2px;
        border-radius: 20px;
    }
    .input-search input{
        border: 0;
        height: 39px;
        line-height: 39px;
        margin: 0 0 0 10px;
        width: 100%;
        outline: 0;
    }
</style>
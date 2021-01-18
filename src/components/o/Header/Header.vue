<template>
  <header id="header">
    <div class="container">
        <nav class="position-relative">
            <logo />
            <bell />
            <search />
        </nav>
        
    </div>
  </header>
</template>

<script>
import Bell from '../../a/Bell.vue'
import Logo from '../../a/Logo.vue'
import Search from '../../m/Search.vue'
export default {
    components: {
       Search,
        Logo ,
        Bell ,
    },
        

}
</script>
<style lang="scss" scoped>
    header{
        height: 140px;
        background: #FDDB3A;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
        .logo{
            position: absolute;
            top: 17px;
        }
        .bell{
            position: absolute;
            right: 10px;
            top: 12px;
        }

    }
</style>
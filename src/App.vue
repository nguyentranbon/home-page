<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Default from '@/layouts/Default';
export default {
  data(){
    return{
      
    }
  },
  computed:{
    layout(){
      return `${(this.$route.meta.layout || 'default')}`
    }
  },
  components: {
    Default
  }
}
</script>
<style lang="scss" src="@/css/main.scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

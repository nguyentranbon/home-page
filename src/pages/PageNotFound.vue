<template>
  <div id="page_not_found" class="container text-center">
      <div class="error-page error-404">
        <div class="image">
          <div class="alien"></div>
          <div class="ufo"></div>
          <div class="estela"></div>
          <div class="satellite-container">
            <div class="satellite">
            </div>
          </div>
        </div>

        <h1>This page is outside of the Universe</h1>
        <h3>The page you are trying to access does not exist or has been moved.<br> Try going back to our homepage.</h3>
        <router-link to="/" class="btn yellow-btn">
          Home Page
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotDefault',
  title () {
      return `404`
  },

}
</script>

<style lang="scss" >
.yellow-btn{
  font-weight: bold;
  border-radius: 2em;
  padding: .75em 1.5em;
  background: rgba(253,219,58,1);
  color: white;
  &:hover{
    background: rgba(253,219,58,0.8);
    color: white;
  }
}
.error-page{
  padding: 100px 0;
  .image{
    width: 625px;
    height: 314px;
    background: url('../assets/images/page-404.png');
    background-size: cover;
    position: relative;
    margin: auto;

    .alien{
        background: url('../assets/images/alien.png') no-repeat 50%;
        position: absolute;
        width: 13px;
        height: 21px;
        background-size: cover;
        bottom: 97px;
        right: -2px;
        animation: alien .3s linear infinite;
    }
    
    .ufo{
      width: 70px;
      height: 59px;
      background: url('../assets/images/ufo.png') no-repeat 50%;
      background-size: cover;
      position: absolute;
      top: 70px;
      right: 47px;
      animation: ufo 1.5s ease-in-out infinite;
    }
    .estela{
      width: 40px;
      height: 3px;
      background: url('../assets/images/estela.png') no-repeat 50%;
      background-size: cover;
      position: absolute;
      bottom: 76px;
      left: 144px;
      animation: estela 1.5s ease-in-out infinite;
    }
    .satellite-container{
      width: 0;
      height: 100px;
      position: absolute;
      animation: rotate 2s linear infinite;
      top: 108px;
      left: 20px;
    }
    .satellite{
      width: 65px;
      height: 65px;
      background: url('../assets/images/satellite.png') no-repeat 50%;
      background-size: cover;
      position: relative;
      transform-origin: bottom left;
      animation: rotateInverse 2s linear infinite;
      
    }
  
  }
  h1{
      font-size: 30px;
      margin: 30px 0 40px;
      font-weight: bold;
    }
  h3{
    font-size: 18px;
    line-height: 1.8;
  }
}
// animation
@keyframes alien{
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(10deg);
  }
  to{
    transform: rotate(0deg);
  }
}
@keyframes ufo {
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(40px);
  }
  to{
    transform: translateY(0);
  }
}
@keyframes estela {
    0% {
      background-position: -40px 0
    }
    to {
      background-position: 0px 0
    }
}
@-webkit-keyframes rotate {
    0% {
      transform: rotate(0deg)
    }
    
    to {
      transform: rotate(1turn)
    }
}
@keyframes rotateInverse {
    0% {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(-1turn)
    }
}
// media
@media screen and (max-width: 768px) {
  .error-page {
    padding: 20px 0px;
    .image{
      width: 320px;
      height: 161px;
    }
    .ufo, .alien, .estela, .satellite-container, .satellite{
      display: none;
    }
  }
}
@media screen and (max-width: 576px) {
    .error-page {
      
    .image{
      width: 265px;
      height: 130px;
    }

  }
}
</style>
<template>
  <div class="wrapperone">
    <headerComp />
    <homePage />
    <skillsComp />
    <aboutMe />
    <portfolioComp />
    <footerComp />
  </div>
</template>

<script>
import headerComp from './components/headerComp.vue';
import homePage from './components/homePage.vue';
import skillsComp from './components/skillsComp.vue';
import aboutMe from './components/aboutMe.vue';
import portfolioComp from './components/portfolioComp.vue';
import footerComp from './components/footerComp.vue';
import { useI18n } from 'vue-i18n'


export default {
  name: 'App',
  components: {
    headerComp,
    homePage,
    skillsComp,
    aboutMe,
    portfolioComp,
    footerComp
  },
}

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&display=swap');
#app {

body {
  background: #2A2A2A;
}
img {
	display: block;
	max-width: 100%;
}

h1,
h2,
h3,
h4,
p {
  
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-family: "Caveat", cursive;
}
.wrapperone {
  background: #2A2A2A
}

.center {
  max-width: 1200px; /* Устанавливаем максимальную ширину контейнера */
  width: 100%; /* Ширина контейнера занимает всю доступную ширину */
  margin: 0 auto; /* Автоматически центрируем контейнер по горизонтали */
}

}
</style>

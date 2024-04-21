<template>
    <section :id="sectionId">
        <div class="slider center">
            <h2 class="slider__title">{{$t('sliderTitle')}}</h2>
            <div  class="slider__project">
              <button @click="backProject" class="slider__project_btn"><img src="../assets/img/arrow-left.png" alt=""></button>
              <a :href="project[currentIndex].website" target="_blank">
                <img class="slider__project_foto" :src="project[currentIndex].img" alt="img">
              </a>
                <button @click="nextProject" class="slider__project_btn"><img src="../assets/img/arrow-right.png" alt=""></button>
            </div>
        </div>
    </section>
</template>

<script>
import { computed } from 'vue';

    export default {
        data() {
  return {
    project: [
      {
        img: require("../assets/img/acrobatica.png"),
        text: 'Фрилансовый проект',
        website: "https://nataliamichitenco.github.io/Acrobatics/",
      },
      {
        img: require("../assets/img/shop.png"),
        text: 'учебный проект',
        website: "https://nataliamichitenco.github.io/MyShop/",
      },
      {
        img: require("/src/assets/img/burger.png"),
        text: 'импровизация',
        website: 'https://nataliamichitenco.github.io/burgers/',
      },
    ],
    currentIndex: 0,
    sectionId: 'portfolioComp'
  };
},
  methods: {
  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.project.length;
  },
  backProject() {
    this.currentIndex = (this.currentIndex - 1 + this.project.length) % this.project.length;
  }
},
  };
</script>

<style lang="scss" scoped>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	text-decoration: none;

}
section {
    background: #414141;
    color: #E4E4E4;
    font-family: "Caveat", cursive;
}
.slider {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    align-content: center;
    flex-wrap: wrap;
    font-family: "Caveat", cursive;

    &__title {
      display: flex;
      justify-content: center;
      padding-bottom: 15px;
      font-size: 34px;
    }
    &__project {
        background: #2A2A2A;
        border: 1px solid #2A2A2A;
        border-radius: 29px;
        display: flex;
        max-width: 970px;
        height: 500px;
        padding: 20px;
        gap: 30px;
        align-items: center;

        &_foto {
          max-width: 493px;
          max-height: 500px;
        }

        &_description {
          max-width: 296px;
          max-height: 436px;
        }

        &_btn {
          width: 40px;
          border-radius: 50%;
          background: #E2A300;
          display: flex;
          border: 1px solid #E2A300;
          justify-content: center;
          cursor: pointer;
        }
        &_btn:hover {
          width: 45px;

        }
    }

}


</style>
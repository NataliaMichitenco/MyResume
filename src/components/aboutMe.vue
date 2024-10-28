<template>
    <section :id="sectionId">
        <img class="img-bgr" src="../assets/img/circles.png" alt="fon">
        <div class="center">
            <div class="aboutMe">
                <h2 class="aboutMe__title">{{$t('about.h2')}}</h2>
                <p class="aboutMe__text">{{$t('about.text')}}</p>
                <button v-show="showButton" @click="scrollToTop" class="scroll-btn"><img src="../assets/img/arrow (2).png" alt="arrow"></button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      sectionId: 'aboutMe', // Уникальный идентификатор раздела
      showButton: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 700) { // Показывать кнопку после прокрутки на 100px
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
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
    background: #2A2A2A;
    color: #E4E4E4;
    font-family: "Caveat", cursive;
    position: relative;
}


.img-bgr {
    max-height: 100%;
    opacity: 0.4;
}

.aboutMe {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85%;
    align-items: center;
    flex-direction: column;

    &__title {
        font-size: 34px;
    }

    &__text {
    font-weight: 300;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    max-width: 650px;
    padding-top: 40px;
    }
}
.scroll-btn {
    position: fixed;
    z-index: 101;
    bottom: 682px;
    right: 25px;
    background: #2A2A2A;
    width: 40px;
    border: none;
    cursor: pointer;
}

@media (max-width: 480px){
  .aboutMe {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85%;
    align-items: center;
    flex-direction: column;

    &__text {
    font-size: 20px;
    padding: 20px 10px 5px;
    }
}
.scroll-btn {
    position: fixed;
    z-index: 101;
    bottom: 682px;
    right: 25px;
    background: #2A2A2A;
    width: 40px;
    border: none;
    cursor: pointer;
}
}
</style>
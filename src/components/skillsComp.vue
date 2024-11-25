<template>
    <section>
        <div class="center">
            <div class="section">
              <h2 class="section__title">{{$t('skill')}}</h2>
                <ul class="skills">
                    <li v-for="item in skills" class="skills__wrapper">
                        <img class="skills__wrapper_img" :src="item.img" alt="photo">
                        <p class="skills__wrapper_text">{{ item.text }}</p>
                        <p class="skills__wrapper_about">{{ item.about }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
  return {
    skills: [
      {
        // img: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
        text: ' Основы разработки',
        about: 'HTML, CSS, JavaScript',
      },
      {
        // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
        text: 'Стилизация',
        about: 'CSS, SCSS, BEM, animation, Tailwind',
      },
      {
        // img: require("../assets/img/vue3.png"),
        text: 'Фреймворки и библиотеки',
        about: 'Vue (Options APi, Composition Api) Vuex, Router, i18n CLI , Vite, RESTfulAPI',
      },
      {
        // img: require("../assets/img/git.png"),
        text: 'Cистемы контроля версий',
        about: 'GIT, GitHub'
      },
    ],
  };
},
    }
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
  font-family: "Dancing Script", cursive;
}

.section {
padding-top: 80px;

&__title {
  padding-bottom: 50px;
  font-size: 34px;
  display: flex;
  justify-content: center;
}
}
.skills {
  max-width: 1200px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    justify-items: center;

    &__wrapper{
        max-width: 205px;
        height: 200px;
        border-radius: 29px;
        background: #414141;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        background-image: url(../assets/img/klipartz.com\ \(2\).png);
        padding: 10px;

        &_img {
          width: 80px;
          height: 80px;
        }

        &_text {
          font-size: 28px;
          text-align: center;
        }

        &_about {
          width: 170px;
          display: flex;
          justify-content: center;
          text-align: center;
          font-size: 18px;
          font-weight: 500;
        }
    }
}


@media (max-width: 480px) {
  .skills {
    grid-template-columns: repeat(2, 2fr);
    gap: 18px;
    padding: 15px;
}
}
@media (max-width: 415px){
.section {
  padding-top: 25px;
}
.skills {
    grid-template-columns: repeat(1, 2fr);
    gap: 18px;
    padding: 15px;
}
}
</style>
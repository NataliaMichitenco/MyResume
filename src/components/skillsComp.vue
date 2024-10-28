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
        img: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
        text: 'HTML',
        about: 'Semantic, cross-browser, adaptive layout',
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
        text: 'CSS',
        about: 'SCSS, BEM, animation, Tailwind',
      },
      {
        img: require("../assets/img/js.png"),
        text: 'JavaScript',
        about: ' Fundamentals, algorithms and data structures, JS API browser',
      },
      {
        img: require("../assets/img/vue3.png"),
        text: 'Vue',
        about: 'Vue.js, Vue CLI, Vuex, Router, i18n',
      },
      {
        img: require("../assets/img/git.png"),
        text: 'GIT',
        about: 'GitHub'
      },
      {
        img: require("../assets/img/scss.png"),
        text: 'VScode',
        about: 'Figma, WordPress'
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
  padding-bottom: 20px;
  font-size: 34px;
  display: flex;
  justify-content: center;
}
}
.skills {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 40px;
    justify-items: center;

    &__wrapper{
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
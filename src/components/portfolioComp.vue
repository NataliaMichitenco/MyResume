<!-- <template>
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
</template> -->
<template>
  <section :id="sectionId" class="portfolio">
    <div class="portfolio-wripper">
    <div class="swiper">
      <h2 class="slider__title">{{$t('sliderTitle')}}</h2>
      <div class="swiper-wrapper">
        <div v-for="(item, index) in project" :key="index" class="swiper-slide">
          <a :href="item.website" target="_blank">
            <img class="slider__project_foto" :src="item.img" alt="img">
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import Swiper from 'swiper/bundle'; // Импортируем Swiper
import 'swiper/swiper-bundle.css';   // Импортируем стили для Swiper

export default {
  data() {
    return {
      project: [
        {
          img: require("../assets/img/shop.png"),
          text: 'Фрилансовый проект',
          website: "https://nataliamichitenco.github.io/MyShop/",
        },
        {
          img: require("/src/assets/img/lesocombinat.png"),
          text: 'Рабочий проект на 1440px',
          website: 'https://nataliamichitenco.github.io/PestovskiiLesocombinat/',
        },
        {
          img: require("../assets/img/foodmag.png"),
          text: 'Рабочий десктопный проект',
          website: "https://nataliamichitenco.github.io/foodMag/",
        },
        {
          img: require("/src/assets/img/softrud.png"),
          text: 'Рабочий проект на 1440px',
          website: 'https://nataliamichitenco.github.io/SovmestniiTrud/',
        }
      ],
      
      sectionId: 'portfolioComp'
    };
  },
  
  mounted() {
    // Инициализация Swiper
    this.initializeSwiper();
  },

  methods: {
    initializeSwiper() {
      const swiper = new Swiper('.swiper', {
        initialSlide: 1,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "3",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true
        },
        keyboard: {
          enabled: true
        },
        mousewheel: {
          thresholdDelta: 70
        },
        spaceBetween: 60,
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
      const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
paginationBullets.forEach(bullet => {
    bullet.style.backgroundColor = 'gray'; // Цвет для неактивных точек
});
paginationBullets[0].style.backgroundColor = '#E2A300'; // Цвет для активной точки (первая по умолчанию)

swiper.on('slideChange', () => {
    paginationBullets.forEach((bullet, index) => {
        bullet.style.backgroundColor = index === swiper.activeIndex ? '#E2A300' : 'gray';
    });
});
    }
  }
};
</script>

<style scoped>

* {
	padding: 0;
 	margin: 0;
 	box-sizing: border-box;
 	text-decoration: none;
}

.portfolio {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #414141;;
  overflow: hidden;

}
.portfolio-wripper {
  max-width: 1200px;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  width: 300px;
  height: 400px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: self-start;
  background-color: #2a2a2a; /* Цвет фона для слайдов */
  align-items: center;
  justify-content: center;
}

.swiper-slide img {
  max-width: 100%;
  max-height: 300px; /* Ограничиваем высоту изображения */
}
.slider__title{
  display: flex;
    justify-content: center;
    padding-bottom: 15px;
      font-size: 34px;
      color: #E4E4E4;
      padding-bottom: 50px;
}
</style>




//   methods: {
//   nextProject() {
//     this.currentIndex = (this.currentIndex + 1) % this.project.length;
//   },
//   backProject() {
//     this.currentIndex = (this.currentIndex - 1 + this.project.length) % this.project.length;
//   }
// },
//   ;
// 

// 
// * {
// 	padding: 0;
// 	margin: 0;
// 	box-sizing: border-box;
// 	text-decoration: none;

// }
// section {
//     background: #414141;
//     color: #E4E4E4;
//     font-family: "Caveat", cursive;
// }
// .slider {
//     display: flex;
//     flex-direction: column;
//     padding-top: 20px;
//     padding-bottom: 20px;
//     align-content: center;
//     flex-wrap: wrap;
//     font-family: "Caveat", cursive;

//     &__title {
//       display: flex;
//       justify-content: center;
//       padding-bottom: 15px;
//       font-size: 34px;
//     }
//     &__project {
//         background: #2A2A2A;
//         border: 1px solid #2A2A2A;
//         border-radius: 29px;
//         display: flex;
//         max-width: 970px;
//         padding: 35px 20px;
//         gap: 30px;
//         align-items: center;

//         &_foto {
//           max-width: 493px;
//           max-height: 500px;
//         }

//         &_description {
//           max-width: 296px;
//           max-height: 436px;
//         }

//         &_btn {
//           width: 40px;
//           border-radius: 50%;
//           background: #E2A300;
//           display: flex;
//           border: 1px solid #E2A300;
//           justify-content: center;
//           cursor: pointer;
//         }
//         &_btn:hover {
//           width: 45px;

//         }
//     }

// }

// @media (max-width: 480px) {
//   .slider {
//     padding-top: 10px;
//     padding-bottom: 10px;

//     &__project {

//         max-width: 480px;
//         padding: 15px 5px;
//         gap: 5px;
//         margin: 5px;

//         &_foto {
//           max-width: 493px;
//           max-height: 500px;
//         }

//         &_description {
//           max-width: 296px;
//           max-height: 436px;
//         }
//     }
// }
// }
// 
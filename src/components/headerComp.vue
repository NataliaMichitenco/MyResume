<template>
  <header>
    <div class="header center">
      <nav class="header__nav-left">
        <svg
          width="59"
          height="42"
          viewBox="0 0 59 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.41669 22L14.0233 40L29.5 27L2.41669 22Z"
            stroke="#e25300"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.5833 22L44.9768 40L29.5 27L56.5833 22Z"
            stroke="#d3e200"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.6042 40H44.3959L29.5 27L14.6042 40Z"
            stroke="#de00e2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.25 24L29.5 2L45.75 24"
            stroke="#26e200"
            stroke-width="4"
            stroke-linejoin="round"
          />
        </svg>
        <h3 class="header__nav-left_h3">NM</h3>
      </nav>
      <nav class="header__nav-right">
        <button
          @click="scrollToSection('aboutMe')"
          class="header__nav-right_btn"
        >
          {{ $t("buttons.AboutMe") }}
        </button>
        <button
          @click="scrollToSection('portfolioComp')"
          class="header__nav-right_btn"
        >
          {{ $t("buttons.Portfolio") }}
        </button>
        <button
          @click="scrollToSection('footerComp')"
          class="header__nav-right_btn"
        >
          {{ $t("buttons.Contact") }}
        </button>
        <button class="header__nav-right_btn" @click="handleButtonClick">
          Ru
        </button>
        <div @click="handleButtonClick" class="header__toggle-switch" :class="{ active: isSwitchActive }">
          <div class="header__toggle-switch--circle"></div>
        </div>
        <button class="header__nav-right_btn" @click="handleButtonClick">
          Eng
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });

    const switchLand = () => {
      locale.value === "en" ? (locale.value = "ru") : (locale.value = "en");
    };

    const scrollToSection = (section) => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      t,
      switchLand,
      scrollToSection,
      isSwitchActive: false,
    };
  },
  methods: {
    handleButtonClick() {
      this.switchLand();
      this.isSwitchActive = !this.isSwitchActive;
    },
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

header {
  background: #2A2A2A;
  font-family: "Caveat", cursive;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  &__nav-left {
    display: flex;
    align-items: center;
    gap: 15px;

    &_h3 {
      color: #ffffff;
      font-weight: 400;
      font-size: 20px;
    }
  }
  &__nav-right {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    align-items: center;
    padding-right: 0;

    &_btn {
      height: 21px;
      background: #2A2A2A;
      color: #e4e4e4;
      cursor: pointer;
      border: none;
      font-family: "Caveat", cursive;
      font-size: 22px;
      position: relative;
    }

    &_btn::after {
      content: ''; /* Псевдоэлемент будет пустым */
      position: absolute; /* Абсолютное позиционирование */
      left: 0; /* Начинаем с левого края кнопки */
      bottom: -4px; /* Размещаем подчеркивание внизу */
      width: 100%; /* Ширина равна ширине кнопки */
      height: 3px; /* Высота подчеркивания */
      background-color:  #e2a300; /* Цвет подчеркивания */
      transform: scaleX(0); /* Начальная масштабируемая ширина (ноль) */
      transition: transform 0.3s ease; /* Плавный переход */
      border-radius: 20px;
    }
    &_btn:hover::after {
      transform: scaleX(1); /* Увеличиваем до полной ширины при наведении */
    }
// }:hover {
//       background: #e2a300;
//       color: #414141;
//       border: 1px solid #e2a300;
//       border-radius: 6px;
//       display: flex;
//       align-items: center;
//       padding: 15px;
//     }
  }
  .header__toggle-switch {
    height: 12px;
    width: 23px;
    display: block;
    border: 1px solid #e2a300;
    z-index: 10;
    border-radius: 25%/50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .header__toggle-switch--circle {
    position: absolute;
    right: 1px;
    top: 1px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e2a300;
    transition: 0.3s;
  }
  .header__toggle-switch.active .header__toggle-switch--circle {
    right: 100%;
    transform: translateX(calc(100% + 1px));
    transition: 0.3s;
  }
}
@media (max-width: 480px) {
  svg {
    width: 38px;
    height: 34px;
  }
  .header {
    padding: 5px;

    &__nav-left {
      gap: 5px;

      &_h3 {
        display: none;
      }
    }
    &__nav-right {
      gap: 10px;

      &_btn {
        font-size: 18px;
        line-height: 10px;
      }

      &_btn:hover {
        font-size: 18px;
        padding: 10px;
      }
    }
    .header__toggle-switch {
      height: 14px;
      width: 28px;
    }
  }
}
</style>

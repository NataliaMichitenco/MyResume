<template>
    <footer >
    <div :id="sectionId">
        <div class="center">
        <div class="footerContact">
            <div class="footer">
                <svg width="59" height="42" viewBox="0 0 59 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.41669 22L14.0233 40L29.5 27L2.41669 22Z" stroke="#e25300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M56.5833 22L44.9768 40L29.5 27L56.5833 22Z" stroke="#d3e200" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.6042 40H44.3959L29.5 27L14.6042 40Z" stroke="#de00e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.25 24L29.5 2L45.75 24" stroke="#26e200" stroke-width="4" stroke-linejoin="round"/>
                </svg>
                <h3 class="footer__title">{{$t('footerTitle')}}</h3>
                <p class="footer__mobail">{{$t('number')}} +37368081188</p>
            </div>
            <div class="networks">
                <a href="mailto:tuseamiki@gmail.com" target="_blank"><img class="networks__connection" src="../assets/img/number.png" alt="gmail"></a>
                <a href="https://www.facebook.com/profile.php?id=100004908824721&locale=ru_RU" target="_blank"><img class="networks__connection" src="../assets/img/facebook.png" alt="facebook"></a>
                <a href="https://www.linkedin.com/in/%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-%D0%BC%D0%B8%D0%BA%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE-389727255/" target="_blank"><img class="networks__connection" src="../assets/img/linkedin.png" alt="linkedin"></a>
            </div>
        </div>
        </div>
    </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      sectionId: 'footerComp' // Уникальный идентификатор раздела
    };
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

footer {
    background: #2A2A2A;
    color: #E4E4E4;
    font-family: "Dancing Script", cursive;
}

.footerContact {
display: flex;
justify-content: space-between;
padding: 15px;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    &__title {
        font-size: 24px;
    }
}

.networks {
    display: flex;
    justify-content: end;
    gap: 15px;
    cursor: pointer;
    &__connection {
        width: 35px;
        height: 35px;
    }
}
</style>
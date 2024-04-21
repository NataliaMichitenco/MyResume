<template>
    <main>
        <div class="center">
            <div class="main">
                <div class="main__left-content">
                    <h3 class="main__left-content_h3">{{$t('title.h3')}}</h3>
                    <h2 class="main__left-content_h2">{{$t('title.h2')}}</h2>
                    <p class="main__left-content_text">{{$t('title.text')}}</p>
                    <a href="https://t.me/TuseaMiki" target="_blank" class="main__left-content_btn">{{$t('title.btnContent')}}</a>
                </div>
                <div class="main__right-content">
                    <img class="main__right-content_myFoto" src="@/assets/img/me.jpg" alt="me">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  * {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	text-decoration: none;

}

main {
    background: #414141;
    font-family: "Caveat", cursive;
}

.main {

    display: flex;
    justify-content: space-between;

    &__left-content{
        display: flex;
        flex-direction: column;
        max-width: 500px;
        height: 377px;
        color: #E4E4E4;
        gap: 25px;
        padding: 20px;
        font-family: "Caveat", cursive;

        &_h3 {
            font-weight: 600;
            font-size: 48px;
            line-height: 54.4px;

        }

        &_h2 {
            font-weight: 700;
            font-size: 72px;
            line-height: 81.6px;
        }

        &_text {
            font-weight: 500;
            font-size: 24px;
        }

        &_btn {
            max-width: 200px;
            padding: 10px;
            border-radius: 6px;
            background: #E2A300;
            color: #000000;
            font-size: 22px;
            border: 1px solid #E2A300 ;
            margin-top: 10px;
            cursor: pointer;
            font-weight: 600;
            transform: rotate(-5deg);
            text-align: center;
        }
    }

    &__right-content {
        
        &_myFoto {
            max-height: 637px;
        }
    }

}

</style>
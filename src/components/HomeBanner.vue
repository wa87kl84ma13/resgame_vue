<template>
    <router-link to="/reviews/gotham-knights-review">
        <div class="home-banner">
            <div class="container">
                <div class="home-banner-content">
                    <h1>Gotham Knights Review</h1>
                    <p>Batman is gone, but Gotham City is still alive...</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'HomeBanner'
}
</script>

<style scoped>
.home-banner {
    background-image: url('../assets/images/gotham-knights.jpg');
    position: relative;
    height: 75vh;
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.home-banner:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(0,0,0,0.45);
}
.home-banner-content {
    position: absolute;
    bottom: 50px;
}
h1,
p {
    color: #fff;
}
h1 {
    font-size: 54px;
}
p {
    font-size: 24px;
    font-weight: 400;
}
@media (max-width: 700px) {
.home-banner {
    height: 45vh;
}
h1 {
    font-size: 34px;
    line-height: 32px;
    padding-bottom: 7px;
}
p {
    font-size: 16px;
}
.home-banner-content {
    bottom: 24px;
    width: 90%;
    left: 5%;
}
}
</style>
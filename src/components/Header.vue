<template>
  <header class="site-header">
    <slot></slot>
    <div class="container">
        <div class="header-container">
            <div class="logo">
                <router-link to="/">
                    <span class="logo-text">Resident<span class="logo-red">Games</span></span>
                </router-link>
            </div>

            <nav class="site-nav">
                <ul class="nav-links">
                    <li>
                        <router-link to="/games">Games</router-link>
                    </li>
                    <li>
                        <router-link to="/reviews">Reviews</router-link>
                    </li>
                    <li>
                        <router-link to="/news">News</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.logo {
    font-size: 18px;
}
.logo a {
    text-decoration: none;
    color: #fff !important;
}
.site-nav li,
.site-nav li a {
    color: #fff;
}
.site-nav li a {
    font-weight: 500;
}
.logo-text {
    font-weight: 500;
}
.logo-red {
    font-weight: 700;
    color: #b51b1b;
}
.site-header {
    padding: 10px;
    background: #000;
    position: relative;
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-links li {
    display: inline-block;
    padding: 0 15px;
}
.site-nav {
    padding: 0;
}
</style>
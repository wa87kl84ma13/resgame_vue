<template>
<nav class="mobile-site-nav">
    <ul class="mobile-nav-links">
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
</template>

<script>
export default {
    name: 'MobileNavigation'
}
</script>

<style>
</style>
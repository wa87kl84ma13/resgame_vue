<template>
    <Header>
      <div class="mobile-hamburger-menu" @click="showNav = !showNav">
          <div class="menu-line top-line" :class="{ 'rotate-top': showNav }"></div>
          <div class="menu-line middle-line" :class="{ 'rotate-middle': showNav }"></div>
          <div class="menu-line bottom-line" :class="{ 'hide-bottom': showNav }"></div>
      </div>
      <MobileNavigation v-if="mobileView" :class="{ 'show': showNav}" />
    </Header>
    <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: { Header, MobileNavigation, Footer },
  data() {
    return {
      mobileView: false,
      showNav: false
    }
  },
  watch: {
    '$route'() {
      this.showNav = false
    }
  },
  methods: {
    deviceView() {
      this.mobileView = window.innerWidth <= 700
    }
  },
  created() {
    this.deviceView()
  }
}
</script>

<style>
</style>
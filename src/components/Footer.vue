<template>
  <footer class="site-footer">
    <div class="container">
        <p>&copy; Copyright 2022 ResidentGames</p>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.site-footer {
    text-align: center;
    color: #fff;
    background: #4a4a48;
    padding: 25px;
}
@media (max-width: 700px) {
p {
  font-size: 14px;
}
}
</style>
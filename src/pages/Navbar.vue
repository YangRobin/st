
<template>
  <nav>
    <ul class="container">
      <li>Login</li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
nav {
  overflow: hidden;
  color: #7721d9;
  ul {
    li {
      float: left;
      margin-right: 20px;
      height: 30px;
      line-height: 30px;
      &:hover {
        color: blue;
      }
    }
  }
}
</style>

<template>
  <nav class="footer">
    <ul class="container">
      <li>@All right reseved to st coporation</li>
      <li>www.st.com</li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>

<style lang="scss" scoped>
nav.footer {
  overflow: hidden;
  color: #545454;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  ul {
    display:flex;
    justify-content: center;
    li {

      margin-right: 20px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>

<template>
  <div class="about">
    <Paths v-bind:paths="paths"></Paths>
    <router-view/>
  </div>
</template>
<script>
import Paths from "../../components/Paths.vue"
import Menu from "../../menu.js"
export default {
  name: "user",
  data() {
    return {
      paths: [],
    };
  },
  beforeMount:function(){
    let current = Menu.find(i =>{
      return i.path === '/user'
    })
    this.paths=current.children;
  },
  components: {
    Paths
  }
};
</script>

<style lang="scss" scoped>
.about {
  .paths {
    background-color: #fff;
    .zgz-title-field {
      margin: 10px 0 20px;
      border-style: solid;
      border-width: 1px 0 0;
      legend {
        margin-left: 20px;
        padding: 0 10px;
        font-size: 20px;
        font-weight: 300;
      }
    }
    ul {
      overflow: hidden;
      border-top: #fff;
      li {
        float: left;
        padding: 10px;
        transition: all 0.3s;
        &:hover {
          background: #fff;
          border-color: #c028c0;
          color: #c028c0;
          border-top: 1px solid;
        }
        a {
          display: block;
          padding: 0 10px;
          text-decoration: none;
          i {
            margin-right: 5px;
          }
        }
      }
      .active {
        background: #fff;
        border-color: #c028c0;
        color: #c028c0;
        border-top: 1px solid;
      }
    }
  }
  margin-top: 5px;
}
</style>

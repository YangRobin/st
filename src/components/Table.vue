
<template>
  <table>
      
      <tr v-for="i in list ">
        {{i.name}}
      </tr>
  </table>
</template>
<script>
export default {
  name:'Table',
  data(){
    return {

    }
  },
  props:{
    list:{
      type:Array,
      default:[]
    },
    column:{
      type:Array,
      default:[]
    }
  }
}
</script>
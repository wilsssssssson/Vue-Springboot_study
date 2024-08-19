<template>
    <div class="person">
      <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
      <button @click="add">点我sum+1</button>
      <hr>
    </div>
  </template>
  
  <script lang="ts" setup name="Person">
    import useSum from '@/stores/useSum'
  
    const {sum,add,bigSum} = useSum()
  </script>
  
  <style scoped>
    .person {
      background-color: skyblue;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
    }
    button {
      margin: 0 5px;
    }
    li {
      font-size: 20px;
    }
    img {
      height: 100px;
      margin-right: 10px;
    }
  </style>
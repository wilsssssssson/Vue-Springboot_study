<template>
    <div class="about">
      <h1>This is an about page</h1>
      <button @click="add_tempt">水温{{temp}}</button>
      <button @click="add_height">水位{{height}}</button>

    </div>
</template>


<script setup>

    import { ref,watch, watchEffect } from 'vue';

    let temp=ref(0);
    let height=ref(0);


    function add_height(){
        height.value+=1;
    }
    function add_tempt(){
        temp.value+=1;
    }

    watch([temp,height],(val)=>{
        let [tempval,heightval]=val;
        if(tempval>10){
            console.log("this is watch for temp");
        }
        if(heightval>10){
            console.log("this is watch for height");
        }
    },{once:true})


    watchEffect(()=>{
        if(temp.value>10){
            console.log("this is watcheffect for temp");
        }
        if(height.value>10){
            console.log("this is watcheffect for height");
        }
    })

</script>
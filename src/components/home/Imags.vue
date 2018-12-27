<template>
    <div>
       <img v-for="item in imags"  :key="item.img" :src="item.img" width="100%">
    </div> 
       
</template>

<script>
export default {
      data(){
        return {
            imags:[
                {img:"../../src/lib/img/1.jpg"},
                {img:"../../src/lib/img/2.jpg"},
                {img:"../../src/lib/img/3.jpg"}
            ]

        }

    }
}
</script>
<style lang="sass" scoped>

</style>

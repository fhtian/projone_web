<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imags" :key="item.img">
                <img :src="item.img" width="100%">
            </mt-swipe-item>
        </mt-swipe>
        <h3>Home</h3>
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
<style lang="scss" scoped>

.mint-swipe{
    height: 200px;
    background: blue;
}

</style>

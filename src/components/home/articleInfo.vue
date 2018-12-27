<template>
<div>
    <h3>{{articleInfo.title}} </h3>{{articleInfo.content}}
</div>

</template>
<script>
export default {
      data(){
        return {
            articleSort:this.$route.params.articleSort,
            id:this.$route.params.id,
            articleInfo:{}
        }

    },
    created(){
        this.getarticles();
    },
    methods:{
        getarticles(){
            this.$http.get('pagination/articleInfo/'+this.articleSort+'/'+this.id).then(result =>{
                this.articleInfo = result.body;
                console.log(this.articleInfo);
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

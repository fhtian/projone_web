<template>
    <div>
       <ul class="mui-table-view" >
				<li class="mui-table-view-cell mui-media" v-for="article in articles" :key="article.id"  >
					<router-link :to="'/article/' + article.articleSort +'/'+ article.id">
						<img class="mui-media-object mui-pull-left" src="https://tvax2.sinaimg.cn/crop.0.15.750.750.180/8128de94ly8ff8j63qrkfj20ku0lpmxv.jpg">
						<div class="mui-media-body">
							<h1>{{article.title}}</h1>
							<p class='mui-ellipsis'>
								<span>{{article.content}}</span>
                            </p>
						</div>
					</router-link> 
				</li>

		</ul>
    </div> 
       
</template>

<script>
export default {
      data(){
        return {
            articles:[]
        }

    },
    created(){
        this.getarticles();
    },
    methods:{
        getarticles(){
            this.$http.get('pagination/shijing/1/10').then(result =>{
                this.articles = result.body;
                // console.log(this.articles);
            })
        }
    }
}
</script>
<style lang="scss" scoped>

.mui-table-view{
	li{
		h1{
			font-size: 14px;
		}
		.mui-ellipsis{
			font-size: 	12px;
			color: #226aff;
		}
	}
}
</style>

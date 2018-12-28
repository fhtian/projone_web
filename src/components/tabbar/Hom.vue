<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imags" :key="item.img">
                <img :src="item.img" width="100%">
            </mt-swipe-item>
        </mt-swipe>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/article">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">美文赏析</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/pictures">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">美图赏析</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/search">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索</div>
						</router-link>
					</li>
		        </ul> 
				<br>
				<div class="title">
				博主推荐
				</div>
				<br>
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
            imags:[
                {img:"http://localhost/lib/imags/1.jpg"},
                {img:"http://localhost/lib/imags/2.jpg"},
                {img:"http://localhost/lib/imags/3.jpg"}
			],
			 articles:[]

        }

	},
	 created(){
        this.getarticles();
    },
	methods:{
		fanstoplist(){
			
		},
		 getarticles(){
            this.$http.get('pagination/lunyu/1/10').then(result =>{
                this.articles = result.body;
                console.log(this.articles);
            })
        }
	}
    
}

</script>
<style lang="scss" scoped>

.mint-swipe{
    height: 200px;
    background: blue;
}
.mui-grid-view.mui-grid-9{
	background: white
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border:0
}
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

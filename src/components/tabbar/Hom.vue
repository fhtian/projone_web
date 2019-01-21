<template>
    <div>
		<el-input
			placeholder="淘宝商品名称"
			prefix-icon="el-icon-search"
			class="search">
  		</el-input>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/article">
		                    <img src="../../img/halfPrice.png">
		                    <div class="mui-media-body">促销</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/pictures">
		                    <img src="../../img/99.png">
		                    <div class="mui-media-body">超实惠</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/search">
		                    <img src="../../img/money.png">
		                    <div class="mui-media-body">爆款</div>
						</router-link>
					</li>
					 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
							<router-link to="/home/search">
		                    <img src="../../img/inventory.png">
		                    <div class="mui-media-body">好货清单</div>
							</router-link>
					</li>
		        </ul> 
				<br>
				<div class="title">
				爆款推荐
				</div>
				<br>

			<div  v-for="item in optimus_material_" :key="item.pict_url" class="flex-container">
					<a><img :src="item.pict_url" class="img"></a>
			</div>




<!-- 
<div style="">
				<el-row v-for="item in optimus_material_" :key="item.pict_url" >
					<el-col :span="12">
						<div class="grid-content bg-purple">
							<a><img :src="item.pict_url" class="img"></a>
						</div>
					</el-col>
				</el-row>
</div> -->
















			 <!-- <ul class="mui-table-view" >
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

			</ul> -->
    </div>
</template>
<script>

export default {
     data(){
        return {
            imags:[
                {img:this.global_.prefix_url+"lib/imags/1.jpg"},
                {img:this.global_.prefix_url+"lib/imags/2.jpg"},
                {img:this.global_.prefix_url+"lib/imags/3.jpg"}
			],
			 articles:[],
			 optimus_material_:[]

        }

	},
	 created(){
		 		this.getarticles();
        this.optimus_material();
    },
	methods:{
		fanstoplist(){
			
		},
		 getarticles(){
            this.$http.get('pagination/lunyu/1/10').then(result =>{
                this.articles = result.body;
            })
		},
		optimus_material(){
			var data = {
				"material_id": 0,
				"page_no": 0,
				"page_size": 10
				};
			var url = 'tbk/taobao_tbk_dg_optimus_material';
			this.$http.post(url,JSON.stringify(data)).then(result =>{
								this.optimus_material_ = result.body;
                console.log(this.optimus_material_);
						});

		}
	}
    
}

</script>

<style lang="scss" >
.flex-container{
	overflow: hidden;
	position: relative;
	display: inline-block;
	padding:0 6px 0 6px;
}

.img{
    width: 174px
}
.search .el-input__inner{
	margin-bottom:0px; 
}


.mui-grid-view.mui-grid-9{
	background: white;
	border-top:0;
	img{
		width: 40px;
		height: 40px;
	}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    width: 25%;
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
.mint-header {
	background-color: red;
}










    .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

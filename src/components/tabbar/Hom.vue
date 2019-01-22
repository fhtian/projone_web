<template>
    <div>
		<el-input
			placeholder="淘宝商品名称"
			prefix-icon="el-icon-search"
			class="search">
  		</el-input>
		<span class="el-icon-search" ></span>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/halfPrice">
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
		<div class="title">爆款推荐</div>

		<el-dialog  class="goodsHeader"
  			title="好货疯抢"
  			:visible.sync="dialogVisible"
  			width="85%">
			<span>长按框内>全部>复制>打开手机淘宝即可</span>
  			<el-input  type="textarea" v-model="copyContent">{{copyContent}}</el-input>
    		<span class="copyBtn"><el-button  type="success"  round @click="copyContent" >一键复制</el-button> </span>
		</el-dialog>




 		<ul class="mui-table-view mui-grid-view mui-grid-10">
  			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-6">
				<router-link to="/home/article">
		            <img src="../../img/halfPrice.png">
		            <div class="mui-media-body">促销</div>
				</router-link>
			</li>
	 	</ul>

		<div  class="flex-container">
			<div v-for="item in optimus_material_" :key="item.pict_url" class="content" 
			@click="openDialog(item)">
				<a><img :src="item.pict_url" class="img"></a>	
				<el-tooltip :content="item.title" placement="top">
					<span class="goodsTitle">{{item.title}}</span>
				</el-tooltip>
				<span class="price">¥{{item.zk_final_price}}</span>
			</div>
		</div>



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
			 optimus_material_:[],
			 input:'',
			 copyContent:'',
			dialogVisible: false,
			

        }

	},
	 created(){
		this.getarticles();
        this.optimus_material();
    },
	methods:{
		openDialog(item){
			this.dialogVisible = true;
			this.copyContent = '一键复制>打开淘宝，即可领取优惠券啦。。'+item.tbk_tpwd_create_response.data.model;
		},
		copyContent(){
			this.optimus_material_
		},
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
<style lang="scss">

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

.goodsHeader .el-dialog__header{
	padding: 10px 20px 10px ;
	border:1px solid #ccc;
}
.goodsHeader .el-dialog__body{
	padding: 20px;
}
.goodsHeader .el-textarea {
	margin: 20px 0;
}
.copyBtn {
	padding-left: 100px;
}
.copyBtn .el-button.is-round{
	padding: 0;
	min-width: 86px;
	min-height:28px;
}
</style>


<style lang="scss" scoped>
.title{
	font-size: 18px;
	margin: 20px 0;
}  
.flex-container{
	overflow: hidden;
	position: relative;
	display: inline-block;

}
.content{
	overflow: hidden;
	position: relative;
	display: inline-block;
	width: 166px;
    padding: 10px;
	height: 210px;
	cursor: pointer;
}
.img{
	width: 170px;
	padding-bottom: 10px;
}
.price{
	position: absolute;
	color: #f10215;
	padding-left:50px;
	top: 210px;
}
.el-icon-search{
  	position: absolute;
	top: 60px;
	right: 20px;
	color: #ccc;
}
.goodsTitle{
	position: absolute;
	width: 170px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}


</style>

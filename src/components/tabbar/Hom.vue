<template>
    <div v-loading.fullscreen.lock='loading'  element-loading-text="拼命加载中">
		<router-link to="/home/search">
			<el-input
				placeholder="输入淘宝商品名称领取优惠券"			
				class="search">
			</el-input>
			<span class="el-icon-search" ></span>
		</router-link>
			
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/girlsSkirt">
		                    <img src="../../img/girlsSkirt.png">
		                    <div class="mui-media-body">精品女装</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/computer">
		                    <img src="../../img/computer.png">
		                    <div class="mui-media-body">数码</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/makeup">
		                    <img src="../../img/makeup.png">
		                    <div class="mui-media-body">美妆个护</div>
						</router-link>
					</li>
					 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
							<router-link to="/home/underwear">
		                    <img src="../../img/underwear.png">
		                    <div class="mui-media-body">精品内衣</div>
							</router-link>
					</li>
		        </ul> 
		<el-button type="warning" icon="el-icon-star-off" circle>爆款推荐</el-button>
		
		<!-- @click="openDialog(item)"> -->
		<!-- @click="global_.openDialog_(openDialog(item),self)"> -->
		<div  class="flex-container">
			<div v-for="item in optimus_material_" :key="item.pict_url" class="content" 
			@click="global_.openDialog_('一键复制>打开淘宝，即可领取优惠券啦。。'+item.tbk_tpwd_create_response.data.model,self)">
				<a><img :src="item.pict_url" class="img"></a>	
				<el-tooltip :content="item.title" placement="top">
					<span class="goodsTitle">{{item.title}}</span>
				</el-tooltip>
				<span class="price">券后价格￥{{item.zk_final_price}}元</span>
					<span class="buy">领券购买</span>
				
			</div>
		</div>



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
			loading:true,	
			self:this
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
			this.loading=true
			var data = {
				"material_id": 9660,
				"page_no": 0,
				"page_size": 50
				};
			var url = 'tbk/taobao_tbk_dg_optimus_material';
			this.$http.post(url,JSON.stringify(data)).then(result =>{
								this.optimus_material_ = result.body;
								this.loading = false
                // console.log(this.optimus_material_);
						
						});

		}
	}
    
}

</script>
<style lang="scss">

// 爆款文字格式
.el-button.is-circle {
    border-radius: 0%;
    padding: 7px;
}
.el-button--warning {
    color: #fff;
    background-color: red;
    border-color: red;
}
// 分类格式
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
	border-right: 1px solid white; 
    border-bottom: 1px solid white; 
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
	height: 230px;
	cursor: pointer;
}
.img{
	width: 170px;
	padding-bottom: 10px;
}
.price{
	position: absolute;
	color: #f10215;
	top: 210px;
}
.buy{
	position: absolute;
	color: #f10215;
	top: 210px;
	right: 0px;
}
.goodsTitle{
	position: absolute;
	width: 170px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}


</style>

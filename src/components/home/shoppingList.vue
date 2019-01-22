<template>
    <div>
       <ul class="mui-table-view" >
				<li class="mui-table-view-cell mui-media" v-for="item in shoppinglist" :key="item.item_id"  >
					<router-link to={{item.click_url}}>
						<img class="mui-media-object mui-pull-left" src={{item.pict_url}}>
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>{{item.item_description}}</span>
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
            shoppinglist:[]
        }

    },
    created(){
        this.datalist();
    },
    methods:{
        datalist(){
             console.log('123456789');
			var data = {
				"material_id": 0,
				"page_no": 0,
				"page_size": 10
				};
			var url = 'tbk/taobao_tbk_dg_optimus_material';
			this.$http.post(url,JSON.stringify(data)).then(result =>{
								this.shoppinglist = result.body;
                console.log(this.shoppinglist);
						});

		}
    }
}
</script>
<style lang="scss" scoped>

.mui-table-view{
    width: 80px;
    height: 100px;
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


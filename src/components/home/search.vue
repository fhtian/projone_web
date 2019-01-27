<template>
    <div   v-loading.fullscreen.lock='loading'  element-loading-text="拼命加载中">
       <el-input
			placeholder="输入领取惠券的商品名称" 
            v-model="searchStr"		
			class="search">
  		</el-input>
		<span class="el-icon-search" @click="search"></span>
        <div >
           <template>
                 <el-table
                    :data="list"
                    style="width: 100%">
                        <el-table-column
                        width="80">
                            <template slot-scope="scope">
                                <span style="margin-left: 10px">
                                <img :src="scope.row.pict_url">
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        width="180">
                            <template slot-scope="scope">
                                <el-popover trigger="hover" placement="top">
                                <div slot="reference" class="name-wrapper">
                                   <p>{{scope.row.title}}</p>
                                   <p>券后价￥{{scope.row.zk_final_price}}</p>
                                   <p>{{scope.row.coupon_info}} 剩余:{{scope.row.coupon_remain_count}}张</p>
                                </div>
                                </el-popover>
                            </template>
                        </el-table-column>
                        <el-table-column >
                            <template slot-scope="scope">
                                <el-button
                                size="mini"
                                type="danger"
                                @click="global_.openDialog_('淘宝吱口令:'+scope.row.tbk_tpwd_create_response.data.model,self)"
                                >领券购买</el-button>
                            </template>
                        </el-table-column>
                </el-table>
            </template>

            
            </div> 
               
    </div>
</template>
<script>
export default {
     data(){
        return {	
            searchStr: '',
            list:[],
            loading:false,
            self:this	
        }
    },
    methods:{
        search(){
            this.loading = true
			var data = {
				"page_no": 1,
				"page_size": 5,
				"q": this.searchStr
				};
			var url = 'tbk/taobao_tbk_dg_item_coupon_get';
			this.$http.post(url,JSON.stringify(data)).then(result =>{
								this.list = result.body;
                console.log(this.optimus_material_);
                this.loading = false
						});
        },
        
    }
}
</script>
<style lang="scss" >

img {
    width: 100%;
}
.el-table td, .el-table th {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
}
p{
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    font-size: 12px;
    color: #333;
}
</style>

<template>
    <div>

        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
        </mt-search>
        <mt-search v-model="value">
            <mt-cell
                v-for="item in result" :key="item.title"
                :title="item.title"
                :value="item.value">
            </mt-cell>
        </mt-search>
    </div>
</template>
<script>
export default {
     data(){
        return {
			 value:'',
            result:[
                { title:'a',value:'2'},
                { title:'b',value:'2'},
                { title:'c',value:'2'}
            ]
        }

	}
}
</script>
<style lang="scss" scoped>
.mint-searchbar{
    top: 100px
}
</style>

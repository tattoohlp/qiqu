<template>
	<div class="container">
		<swiper :indexbanner="indexbanner"></swiper>
		<div class="item-box">
			<!-- 置顶信息 -->
			<index-top :item="indexData.index_top[0]"></index-top>
			<!-- 内容 -->
			<info-box v-for="item in indexData.jingxuan" :key="item.id" :item="item"></info-box>	
		</div>
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
  			<info-box v-for="item in infobox" :key="item.id" :item="item"></info-box>
		</div>
	</div>
</template>


<script>
	import Swiper from "./Swiper.vue";
	import indexTop from "./indexTop.vue";
	import infoBox from "./infoBox.vue";
	import * as actiontypes from "../../store/actiontypes.js";
	import infiniteScroll from 'vue-infinite-scroll'
	export default{
		data(){
			return {
				indexData:indexdata.indexData,
				infobox:[],
				busy: false
			}
		},
		created(){
			this.$store.dispatch(actiontypes.INDEXBANNER);
		},
		computed:{
			indexbanner(){
				return this.$store.state.index.indexbanner;
			}
		},
		components : {
			Swiper,
			indexTop,
			infoBox
		},
		directives: {infiniteScroll},
		methods:{
			loadMore(){
				if(this.infobox.length == 0){
					this.ajaxmore(this.indexData.jingxuan[0]._pos)
				}else{
					this.ajaxmore(this.infobox[this.infobox.length-1]._pos)
				}
			},
			ajaxmore(pos){
				var self = this;
				$.ajax({
						url:"/infobox",
						beforeSend:()=>{
							this.busy = true;
						},
						data:{
							"pos":pos
						},
						success:function(data){
							self.infobox = self.infobox.concat(data.results);
							setTimeout(() => {
					        	self.busy = false;
					      	}, 1000);
							//self.busy = false;
						},
						error:()=>{
							this.busy = false;
						}
					})
			}
		}
	}
</script>
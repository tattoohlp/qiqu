<template>
	<div class="gifCont" ref="gifbox">
		<img v-bind:src="datas.wifi_img_url" alt="" class="lI-img">
	</div>
</template>
<script>
	export default{
		props:["datas"],
		mounted(){
			var that = this;
			var heights = this.datas.origin_img_url.resolution.split("x");
			$(this.$refs.gifbox).css("height",heights[1]+"px")
			$(this.$refs.gifbox).on("touchstart",function(){
				$(that.$refs.gifbox).find(".lI-img").attr("src",that.datas.origin_img_url.origin_pic_url)
			})
		}
	}
</script>
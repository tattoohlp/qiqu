<template>
	<div class="info-box">
	<div class="lI-head">
		<img v-bind:src="item.avatar" alt="" class="lI-avatar">
		<div class="lI-userName">{{item.user_name}}</div>
	</div>
		<p v-if="item.title" class="lI-content">
			{{item.title}}
		</p>
		<div v-for="itemin in item.media_data">
			<jpg-loader v-if="itemin.format=='JPEG' || itemin.format=='JPG'" :datas="itemin"></jpg-loader>
			<gif-loader v-if="itemin.format=='GIF'" :datas="itemin"></gif-loader>
		</div>
		<div class="lI-meta">
			<div class="lI-metaItem">{{item._incrs.like}}</div>
			<div class="lI-metaItem">{{item._incrs.dislike}}</div>
		</div>
	</div>
</template>

<script>
	import JpgLoader from "./JpgLoader.vue";
	import GifLoader from "./GifLoader.vue";
	export default{
		props:["item"],
		components:{
			JpgLoader,
			GifLoader
		}
	}
</script>
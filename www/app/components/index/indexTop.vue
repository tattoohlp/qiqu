<template>
	<div class="item-inner">
		<div class="changewen-wrap">
			<img v-bind:src="item.imgUrl" alt="" class="changwen-cover">
			<div class="changwen-rightCont">
				<p class="changewen-title">{{item.title}}</p>
				<p class="changwen-desc">{{item.desc}}</p>
			</div>
		</div>
		<div class="lI-meta">
			<div class="lI-metaItem">{{item._incrs.ai + item._incrs.keng + item._incrs.diao + item._incrs.jian}}</div>
			<div class="lI-metaItem">{{item.comment_total}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:["item"]
	}
</script>
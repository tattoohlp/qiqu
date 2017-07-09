<template>
	<div>
		<header>
			<div class="header-banner">
				<nav>
					<div class="inner">
						<ul>
							<li v-for="(item,index) in liitem" v-tap:router.name="item.name" v-bind:class="{'cur' : $router.history.current.name == item.name}">
								{{item.title}}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				liitem : [
					{"name":"index",title:"精选"},
					{"name":"video",title:"视频"},
					{"name":"duanzi",title:"段子"},
					{"name":"find",title:"发现"},
					{"name":"qiqu",title:"奇趣"},
				]
			}
		}
	}
</script>



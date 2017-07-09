import VueRouter from "vue-router";

import App from "../components/App.vue";
import Index from "../components/index/Index.vue";
import Video from "../components/video/Video.vue";
import Duanzi from "../components/duanzi/Duanzi.vue";
import Find from "../components/find/Find.vue";
import Qiqu from "../components/qiqu/Qiqu.vue";


const routes = [
	{
		path:"/index",
		redirect:"index/index"
	},
	{
		path:"/index",
		component : App,
		children :[
			{
				name:"index",
				path:"/index/index",
				component:Index
			},
			{
				name:"video",
				path:"/index/video",
				component:Video
			},
			{
				name:"duanzi",
				path:"/index/duanzi",
				component:Duanzi
			},
			{
				name:"find",
				path:"/index/find",
				component:Find
			},
			{
				name:"qiqu",
				path:"/index/qiqu",
				component:Qiqu
			}
		]
	},
	{
		path:"/*",
		redirect:"index/index"
	}
];

const router = new VueRouter({
	routes
});

export default router;
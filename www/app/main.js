import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router"
import store from "./store/index.js";			//全局store
import App from "./components/App.vue";			//组件
import router from "./router/router.js"			//路由

Vue.use(VueRouter);								//使用路由

Vue.directive("tap",function(el,props){
	$(el).bind("touchstart",function(){
		router.push({"name":props.value})
	})

})
new Vue({
	el:"#app",
	store,
	router,
	components:{
		App
	}
});
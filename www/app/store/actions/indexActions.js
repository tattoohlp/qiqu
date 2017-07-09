import * as actiontypes from "../actiontypes.js";
export default{
	[actiontypes.INDEXBANNER]({commit}){
		$.get("/data/indexbanner.json",function(data){
			//console.log(data);
			commit(actiontypes.INDEXBANNER,{"data":data})
		})
	}
}
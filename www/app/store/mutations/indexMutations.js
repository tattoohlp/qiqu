import * as actiontypes from "../actiontypes.js";
export default{
	[actiontypes.INDEXBANNER](state,payload){
		//console.log(state);
		//console.log(payload)
		state.index.indexbanner = payload.data.data;
		//console.log(state.index)
	}
}
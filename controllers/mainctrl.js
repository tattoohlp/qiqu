var fs = require("fs");
var url = require("url");
exports.indexData = (req,res) => {

	fs.readFile("./data/data.json",function(err,data){
		res.render("index",{
			indexdata : data
		})
	})

}

exports.infobox = (req,res) => {
	var nowpos = url.parse(req.url,true).query.pos;
	fs.readFile("./data/infoboxdata.json",function(err,data){
		var arr = JSON.parse(data.toString()).data;
		arr.forEach((item,index)=>{
			if(item._pos == nowpos){
				res.json({
					"results":arr.slice(index+1,index+6)
				});
			}
		})
	})
}
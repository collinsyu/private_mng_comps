var fs = require("fs");
var path = require("path");


var rootPath = path.join(__dirname);
var _rootPath = rootPath+"/src"

readDirSync(_rootPath)

function readDirSync(path){
	var pa = fs.readdirSync(path);
	var _arr = []
	pa.forEach(function(ele,index){
		var info = fs.statSync(path+"/"+ele)
		if(info.isDirectory()){
			// console.log(">>>>>>>>>>>>>>>>>>>>>>>> dir: "+ele)

			readDirSync(path+"/"+ele);
		}else{
      if(ele.indexOf(".less")!==-1){
        // console.log("所在位置：",path);
        // console.log("mac file: "+ele);
        // console.log("替换纸： ",rootPath+"/src");
        var newPath = path.replace(rootPath+"/src",rootPath+"/lib");
        // console.log("新地址是：",newPath);
        // 复制
        fs.copyFileSync(path+"/"+ele, newPath+"/"+ele);
      }

		}
	});
	// console.log("read end");

}

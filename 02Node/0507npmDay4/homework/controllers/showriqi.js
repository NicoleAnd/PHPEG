var solarlunar = require("solarlunar");

module.exports = function(res,pathname){
	res.setHeader("Content-Type","text/html;charset=UTF8");
	// 拿到/riqi后面的部分 /riqi/2017/10/11
	
	if (!/\/riqi\/\d+\/\d+\/\d+$/.test(pathname)) {
		res.end("日期格式不合法");
		return;
	}else{
		var arr = pathname.match(/\/riqi\/(\d+)\/(\d+)\/(\d+)$/);
		var year = arr[1];
		var month = arr[2];
		var day = arr[3];
		if (year<1900 || year>2100) {
			res.end("年份必须在1900~2100;");
		}else if(month>12 || month<1 || day>31 || day<1){
			res.end("日期不合法");
		}else{
			var result = solarlunar.solar2lunar(year,month,day);
			res.end(result.gzYear+result.gzMonth+result.gzDay);
		}

	}
}
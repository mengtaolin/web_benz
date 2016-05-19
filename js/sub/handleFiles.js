/**
 * Created by Administrator on 2016/5/19.
 */
var detailList = {};
function loadDetail(){
    $.get("config/cars_detail.txt").success(function(detail){
        var array = detail.split("|");
        for(var key in array){
            parse(array[key]);
        }
        console.log(detailList);
    })

    function parse(content){
        var array = content.split(":");
        var tmpKey = array[0];
        var list = array[1].split(";");
        detailList[tmpKey] = [];
        for(var key in list){
            var tmp = list[key];
            var tmpList = tmp.split(",");
            var len = tmpList.length;
            var year = tmpList[0];
            var yearList = [];
            for(var i=1;i < len;i ++)
            {
                var subList = tmpList[i].split(".");
                var detail = {name:subList[0],state:subList[1]};
                yearList.push(detail);
            }
            //year为年份  data为同种级别的不同配置排量的车 Array格式
            detailList[tmpKey].push({year:year,data:yearList});
        }
    }
}
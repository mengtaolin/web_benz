/**
 * Created by Administrator on 2016/5/14.
 */
$(function init(){
    $.get('config/cars.txt').success(function(content){
        initDatas(content);
    });
    putDatas();
})

function initDatas(content){
    var names = content.split("|");
    var namesList = new Array(names.length);
    var index = 0;
    for(var key in names){
        var tmp = names[key];
        if(tmp.length > 0)
        {
            var array = synName(names[key].split(";"));
            namesList[index] = array;
            index ++;
        }
        console.log(namesList[0][1])
    }
}

function synName(sourceList){
    var namesList = {};
    for(var key in sourceList){
        var name = sourceList[key];
        var subList = name.split(",");
        var subKey = subList[0];
        var subName = subList[1];
        namesList[subKey]=subName;
    }
    return namesList;
}

function putDatas(){
    var htmlData = "<p>doIt</p>"
    $("#tabs-1").find("p").html(htmlData);
}
/**
 * Created by Administrator on 2016/5/14.
 */
$(function dataInit(){
    var name = "1,北京奔驰;2,福建奔驰;3,奔驰(进口);4,梅赛德斯-AMG;5,梅赛德斯-迈巴赫".split(";");
    var name1 = "1_C,奔驰C级;1_E,奔驰E级;1_GLA,奔驰GLA;1_GLC,奔驰GLC;1_GLK,奔驰GLK级".split(";");
    var name2 = "2_V,奔驰V级;2_WT,威霆;2_WYN,唯雅诺;2_LT,凌特".split(";");
    var name3 = "3_A,奔驰A级;3_B,奔驰B级;3_CLA,奔驰CLA级;3_C,奔驰C级(进口);3_E,奔驰E级(进口);3_CLS,奔驰CLS级;3_S,奔驰S级;3_GLE,奔驰GLE;3_G,奔驰G级;3_GLS,奔驰GLS;3_GL,奔驰GL级;3_R,奔驰R级;3_SLK,奔驰SLK级;3_SL,奔驰SL级;3_GLA,奔驰GLA(进口);3_M,奔驰M级;3_Concept IAA,Concept IAA;3_F800,奔驰F800;3_F 015,奔驰F 015;3_Ener-G-Force,Ener-G-Force;3_GLC,奔驰GLC(进口);3_Coupe SUV,Coupe SUV;3_Sprinter,Sprinter;3_V,奔驰V级(进口);3_WT,威霆(进口);3_CSC,奔驰CSC级;3_F125,奔驰F125;3_SLC,奔驰SLC;3_GLK,奔驰GLK级(进口);3_WYN,唯雅诺(进口);3_CLK,奔驰CLK级;3_CL,奔驰CL级;3_SLR,奔驰SLR级".split(";");
    var name4 = "4_A,奔驰A级AMG;4_CLA,奔驰CLA级AMG;4_C,奔驰C级AMG;4_CLS,奔驰CLS级AMG;4_S,奔驰S级AMG;4_GLA,奔驰GLA AMG;4_M,奔驰M级AMG;4_GLE,奔驰GLE AMG;4_G,奔驰G级AMG;4_GLS,奔驰GLS AMG;4_GL,奔驰GL级AMG;4_SL,奔驰SL级AMG;4_GT,AMG GT;4_SLS,奔驰SLS级AMG;4_E,奔驰E级AMG;4_GLC,奔驰GLC AMG;4_SLK,奔驰SLK级AMG;4_Vision,Vision;4_SLC,奔驰SLC AMG;4_CL,奔驰CL级AMG".split(";");
    var name5 = "5_S,迈巴赫S级".split(";");
    var nameList = [];
    var nameList1 = [];
    var nameList2 = [];
    var nameList3 = [];
    var nameList4 = [];
    var nameList5 = [];
    synName(nameList,name);
    synName(nameList1,name1);
    synName(nameList2,name2);
    synName(nameList3,name3);
    synName(nameList4,name4);
    synName(nameList5,name5);
    console.log(nameList,nameList1,nameList2,nameList3,nameList4,nameList5);
})

function synName(nameList, sourceList){
    for(var key in sourceList){
        var name = sourceList[key];
        var subList = name.split(",");
        var subKey = subList[0];
        var subName = subList[1];
        nameList[subKey]=subName;
    }
}
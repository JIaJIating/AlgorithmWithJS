/**
 * Created by Administrator on 2017/10/1 0001.
 */
function f(str){
    var charObj={};
    var maxValue=1;
    var maxChar='';
    for(var i=0;i<str.length;i++){
        //���str���i���ַ���charObj�������������д���
        if(!charObj[str.charAt(i)]){
            charObj[str.charAt(i)]=1;
        }else{
            charObj[str.charAt(i)]+=1;
        }
    }
    for(var k in charObj){
        if(charObj[k]>=maxValue){
            maxValue=charObj[k];
            maxChar=k;
        }
    }
    return maxChar+': '+maxValue;
}
var selectChar='qbbewbebbee';
console.log(f(selectChar));
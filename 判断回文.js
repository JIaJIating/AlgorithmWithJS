/**
 * Created by Administrator on 2017/10/1 0001.
 */
function fn(str){
    var str1=str.split('').reverse().join('');
    if(str1 === str) {
        return true;
    }else{
        return false;
    }
}
var str='aabdd';
console.log(fn(str));

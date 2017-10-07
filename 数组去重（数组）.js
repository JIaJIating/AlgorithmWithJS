/**
 * Created by Administrator on 2017/10/1 0001.
 */
//该方法复杂度较高
function f(arr){
    //声明一个新数组
    var data=[];
    for (var i=0;i<arr.length;i++){
        //如果arr[i]在新数组里找不到，就放进新数组
        if(data.indexOf(arr[i])==-1){
            data.push(arr[i]);
        }
    }
    return data;
}
var nums=[1,2,3,5,4,3,1,3];
console.log(f(nums));
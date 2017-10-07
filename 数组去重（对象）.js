/**
 * Created by Administrator on 2017/10/1 0001.
 */
function f(arr){
    //定义一个新对象
    var table={};
    //定义一个新数组
    var data=[];
    for(var i=0;i<arr.length;i++){
        //table.arr[i]==table[arr[i]]
        if(!table[arr[i]]){
            //给键赋值
            table[arr[i]]=true;
            data.push(arr[i]);
        }
    }
    return data;
}
var nums=[1,2,3,4,3,2,4,5];
console.log(f(nums));
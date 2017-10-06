/**
 * Created by Administrator on 2017/10/1 0001.
 */
function bubbleSort(arr){
   var len = arr.length;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
var nums=[2,3,5,6,34,1,45];
console.log(bubbleSort(nums));
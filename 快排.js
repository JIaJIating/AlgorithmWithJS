/**
 * Created by Administrator on 2017/10/1 0001.
 */
// 快排的思想：
//（1）在数据集之中，选择一个元素作为"基准"（pivot）。
//（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
//（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
function qSort(arr){
    if(arr.length == 0){ return []; }
    var left=[];
    var right=[];
    var p=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<p){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(p,qSort(right));
}
var nums=[2,3,5,6,34,1,45];
console.log(qSort(nums));
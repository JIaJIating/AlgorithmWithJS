/**
 * Created by Administrator on 2017/10/2 0002.
 */
//选择排序就是通过n-i次关键字间的比较，从n-i-1个记录中选出关键字最小的记录，并和第i个记录进行交换。
//选择排序是一种简单直观的排序算法。思路：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
//然后从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
function selectSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        var min = arr[i];
        for(var j = i + 1; j < arr.length - 1; j++){
            if(min > arr[j]){
                var temp = min;
                min = arr[j];
                arr[j] = temp;
            }
        }
        arr[i] = min;
    }
    return arr;
}
var nums=[9,4,6,7,2,5,1];
console.log(selectSort(nums));
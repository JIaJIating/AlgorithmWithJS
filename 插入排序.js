/**
 * Created by Administrator on 2017/10/2 0002.
 */
//插入排序：将一个记录插入到已经排好序的有序表中，从而得到一个新的、记录数增1的有序表
//排序过程大概如下：
//从第一个元素开始，该元素可以认为已经被排序；
//取出下一个元素，在已经排序的元素序列中从后向前扫描；
//如果该元素（已排序）大于新元素，将该元素移到下一位置；
//重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
//将新元素插入到该位置后；
//重复步骤2-5。
function insertSort(arr){
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
var nums=[4,2,1,3,6];
console.log(insertSort(nums));
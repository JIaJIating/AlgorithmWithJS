/**
 * Created by Administrator on 2017/10/1 0001.
 */
// ���ŵ�˼�룺
//��1�������ݼ�֮�У�ѡ��һ��Ԫ����Ϊ"��׼"��pivot����
//��2������С��"��׼"��Ԫ�أ����Ƶ�"��׼"����ߣ����д���"��׼"��Ԫ�أ����Ƶ�"��׼"���ұߡ�
//��3����"��׼"��ߺ��ұߵ������Ӽ��������ظ���һ���͵ڶ�����ֱ�������Ӽ�ֻʣ��һ��Ԫ��Ϊֹ��
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
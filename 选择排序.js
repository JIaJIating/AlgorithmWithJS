/**
 * Created by Administrator on 2017/10/2 0002.
 */
//ѡ���������ͨ��n-i�ιؼ��ּ�ıȽϣ���n-i-1����¼��ѡ���ؼ�����С�ļ�¼�����͵�i����¼���н�����
//ѡ��������һ�ּ�ֱ�۵������㷨��˼·��������δ�����������ҵ���С����Ԫ�أ���ŵ��������е���ʼλ�ã�
//Ȼ���ʣ��δ����Ԫ���м���Ѱ����С����Ԫ�أ�Ȼ��ŵ����������е�ĩβ���Դ����ƣ�ֱ������Ԫ�ؾ�������ϡ�
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
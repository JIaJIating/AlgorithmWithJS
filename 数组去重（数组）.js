/**
 * Created by Administrator on 2017/10/1 0001.
 */
//�÷������ӶȽϸ�
function f(arr){
    //����һ��������
    var data=[];
    for (var i=0;i<arr.length;i++){
        //���arr[i]�����������Ҳ������ͷŽ�������
        if(data.indexOf(arr[i])==-1){
            data.push(arr[i]);
        }
    }
    return data;
}
var nums=[1,2,3,5,4,3,1,3];
console.log(f(nums));
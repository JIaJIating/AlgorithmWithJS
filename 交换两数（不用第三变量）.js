/**
 * Created by Administrator on 2017/10/1 0001.
 */
//��һ�ַ������Ӽ���a=a+(b-a) b=(a+b)-a
function change(a,b){
    b=b-a;
    a=a+b;
    b=a-b;
    return [a,b];
}
console.log(change(1,2));
//�����������
function change2(a,b){
    a = a^b;
    b = a^b;
    a = a^b;
    return [a,b];
}
console.log(change2(3,4));

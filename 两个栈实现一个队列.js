/**
 * Created by Administrator on 2017/10/2 0002.
 */
//˼·
//��ӣ���Ԫ�ؽ�ջ1;
//���ӣ��ж�ջ2�Ƿ�Ϊ�գ����Ϊ�գ���ջ1������Ԫ��pop����push��ջ2��ջ2��ջ�� �����Ϊ�գ�ջ��ֱ�ӳ�ջ��
var stack1=[];
var stack2=[];
function queue(value){
    return stack1.push(value);
}
function unqueue(value){
    if(stack2.length==0){
        while(!stack1.length==0){
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}

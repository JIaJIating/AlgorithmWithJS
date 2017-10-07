/**
 * Created by Administrator on 2017/10/2 0002.
 */
//思路
//入队：将元素进栈1;
//出队：判断栈2是否为空，如果为空，则将栈1中所有元素pop，并push进栈2，栈2出栈； 如果不为空，栈２直接出栈。
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

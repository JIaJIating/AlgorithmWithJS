/**
 * Created by Administrator on 2017/10/1 0001.
 */
//非递归实现（迭代/for循环）
function fei(n){
    //n3初始化为0
    var n1= 0,n2= 1,n3=0;
    if(n == 0){ return 0; }
    else if(n == 1){ return 1; }
    else{
        for(var i=2;i<=n;i++){
            n3=n1+n2;
            n2=n3;
            n1=n2;
        }
    }
    return n3;
}
console.log(fei(5));
//递归实现
function feibo(n){
    if(n == 0){ return 0; }
    else if(n == 1){ return 1; }
    else{
        return feibo(n-1)+feibo(n-2);
    }
}
console.log(feibo(6));
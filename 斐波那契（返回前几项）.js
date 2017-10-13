/**
 * Created by Administrator on 2017/10/1 0001.
 */
//·ÇµÝ¹é
function naqi(n){
    var n1= 0, n2= 1, n3= 0, arr=[];
    if(n==0){ return arr=[0]; }
    else if(n==1){ return arr=[0,1]; }
    else{
        arr=[0,1];
        for(var i=2;i<=n;i++){
            n3=n2+n1;
            n2=n3;
            n2=n1;
        }
        arr.push(n3);
    }
    return arr;
}
console.log(naqi(3));
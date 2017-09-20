// ------------------对数组的整体性操作------------------------//

// 1.将一个数组赋给另一个数组：
// 浅copy：新数组依然指向原来的数组 
var nums=[];
for(var i=0;i<10;i++){
nums[i]=i+1
}
var tnums=nums;   //只是为被赋值的数组增加了一个新的引用
nums[1]=11;       //通过原引用修改数组值
alert(tnums[1]);  //另一个引用也会感知到
// 深copy：将原数组中的每一个元素都复制一份到新数组中
function copy(arr1,arr2){
	for(var i=0; i<arr1.length; i++){
		arr2[i]=arr1[i];
	}
}
var nums=[];
for(var i=0; i<=10; i++){
	nums[i]=i+1;
}
var tnums=[];
copy(nums,tnums);
nums[0]=11;
alert(tnums[0]);  //1
// 
// 2.print()函数也是将数组视为整体操作
var nums=[1,2,3];
print(nums); 

// -------------------------------存取函数-------------------------//

// 1.查找元素：
// indexOf():查找传进来的参数在目标数组中是否存在并返回索引；如果没找到相同元素，返回-1
var names=['jkt','hrr','syf','cjg'];
putstr("Enter a name to search for: ");
var name=readline();
var position=names.indexOf(name);
if(position>=0){
	print("Found "+name+" at position "+position);
}else{
	print(name+" not found in array.");
}
// 执行该程序，输入hrr,输出： Found hrr at position 1
// 如果输入lkl,输出： lkl not found in array.
// 如果数组中包含多个相同元素，indexOf()总返回第一个与参数相同的元素的索引
// lastIndexOf():返回相同元素中的最后一个；如果没找到相同元素，返回-1
// 
// 2.数组的字符串表示：
var names=['jkt','hrr','syf','cjg'];
var namestr=names.join();
alert(namestr);       // jkt,hrr,syf,cjg
namestr=names.toString();
alert(namestr);             // jkt,hrr,syf,cjg
print()函数:系统会自动调用toString()方法
print(names);  //结果与上面一致
// 
// 3.由已有数组创建新数组
concat():    arr.concat(barr)
splice():  narr.splice(1,3)从下标1开始截取3个

// ----------------------可变函数----------------------------//

// 1.为数组添加元素
arr.push():在数组末尾添加一个元素
也可以用length属性添加
arr[arr.length]=newValue;
arr.unshift(): 在数组开头添加元素
// 
// 2.为数组删除元素
arr.pop():删除数组末尾的元素
也可以用length属性删除数组第一个元素(将后续元素向前移动一个)，但会多出一个逗号
for循环遍历数组：arr[i]=arr[i+1]
arr.shift(): 删除数组第一个元素
// 
// 3.从数组中间位置添加或删除元素
var nums=[1,2,3,7,8,9];
var newElement=[4,5,6];
nums.splice(3,0,newElement); // 0表示添加 
print(nums);
// 插入数组的元素不必组织成一个数组，可以是任意元素序列
nums.splice(3,0,4,5,6);
var nums=[1,2,3,4,5];
nums.splice(3,2);  //从下标为3的开始截取2个
print(nums);

//4.为数组排序
// reverse():翻转
var nums=[1,3,4,5,7];
var num=nums.reverse();
print(num);
// sort():按照字典顺序对元素排序的， 
// 元素是字符串类型
var names=["David","Mike","Cyth","Call","Bike"];
var sort=names.sort();
alert(sort);
// 元素是数字类型
var nums=[3,2,1,100,200];
nums.sort();
print(nums);     // 1,100,2,200,3  明显有错误

// 所以，一般排序
function compare(num1,num2){
	return num1-num2;
}
var nums=[3,1,2,100,300,4];
nums.sort(compare);
alert(nums);

//---------------------------迭代器方法---------------------------------//
// 1.不生成新数组的迭代器方法
// forEach()：接受一个函数作为参数，对数组中的每个元素使用该函数
function square(num){
	print(num,num*num);
}
var nums=[1,2,3,4,5];
nums.forEach(square);
// every():接受一个返回值为布尔类型的函数，如果对于所有的元素，
// 该函数均返回true,则该方法返回true;
function isEven(num){
	return num % 2 ==0;
}
var nums=[2,4,6,8,10];
var even=nums.every(isEven);
if(even){
	print("all numbers are even");
}else{
	print("not all numbers are even");
}
// every():接受一个返回值为布尔类型的函数，只要有一个元素使得该函数均返回true
//则该方法返回true;
function isEven(num){
	return num % 2 ==0;
}
// var nums=[2,7,6,8,10];
var nums=[1,7,3,5];  
var even=nums.some(isEven);
if(even){
	alert("all numbers are even");
}else{
	alert("not all numbers are even");
}
// reduce():接受一个函数，返回一个值。该方法会从一个累加值开始，
// 不断对累加值和数组中的后序元素调用该函数，直到数组中的最后一个元素
// 最后返回累加值
function add(lei,hou){
	return lei + hou;
}
var nums=[1,2,3,4,5,6,7];
var sum=nums.reduce(add);
print(sum);        //28
// reduce()方法也可以用来将数组中的元素连接成长字符串
function concat(strlei,str){
return strlei + str;
}
var words=["i ","love ","you "];
var sentence=words.reduce(concat);
print(sentence);
// reduceRight()方法:是从右到左执行，可以将数组中的元素进行翻转
function concat(strlei,str){
return strlei + str;
}
var words=["i ","love ","you "];
var sentence=words.reduceRight(concat);
alert(sentence);
// 2. 生成新数组的迭代器方法

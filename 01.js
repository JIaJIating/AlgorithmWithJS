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



//
//4.为数组排序

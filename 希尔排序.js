/**
 * Created by Administrator on 2017/10/2 0002.
 */
//ϣ�������ʵ���Ƿ���������򣬸÷����ֳ���С�������򡣻���˼���ǣ��Ƚ���������Ԫ�����зָ�Ϊ���ɸ�������
//�������ĳ������������Ԫ����ɵģ��ֱ����ֱ�Ӳ�������Ȼ���������������ٽ�������
//����������е�Ԫ�ػ������������㹻С��ʱ���ٶ�ȫ��Ԫ�ؽ���һ��ֱ�Ӳ�������
//��Ϊֱ�Ӳ���������Ԫ�ػ������������£��ӽ���������Ч���Ǻܸߵģ����ϣ��������ʱ��Ч�����нϴ����ߡ�
function shallSort(array) {
    var increment = array.length;
    var i
    var temp; //�ݴ�
    var count = 0;
    do {
        //��������
        increment = Math.floor(increment / 3) + 1;
        for (i = increment ; i < array.length; i++) {
            console.log(increment);
            if (array[i] < array[i - increment]) {
                temp = array[i];
                for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
                    array[j + increment] = array[j];
                }
                array[j + increment] = temp;
            }
        }
    }
    while (increment > 1)
    return array;
}
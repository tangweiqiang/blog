# acwing题解

## 1. 基本排序
![avatar](../img/sort.png)

### 1.1 快速排序
~~~ java
    public static void quickSort(int[] arr, int start, int end) {
        int cur = arr[start];
        int i = start;
        int j = end;
        while (i < j) {
            while (arr[j] > cur && i < j) {
                j--;
            }
            while (arr[i] < cur && i < j) {
                i++;
            }
            if (arr[i] == arr[j] && i < j) {
                i++;
            } else {
                int a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
        if (i - 1 > start) {
            quickSort(arr, start,i -1);
        }
        if (j + 1 < end) {
            quickSort(arr, j + 1, end);
        }
    }
~~~

## 2. Top K

## 3. 判断一个链表是否有环
龟兔赛跑，如果有环，会相遇，如果无环，会结束


```c
// 请计算一下Func1基本操作执行了多少次？
void Func1(int N) { 
    int count = 0;//两层循环嵌套外循环执行n次，内循环执行n次，整体计算就是N*N的执行次数
    for (int i = 0; i < N ; ++ i) { 	 
        for (int j = 0; j < N ; ++ j)	 { 		 
            ++count;	 
        }
    }//2 * N的执行次数
    for (int k = 0; k < 2 * N ; ++ k){ 	 
        ++count;
    }//常数项10
    int M = 10;
    while (M--) {  	
        ++count;  
    } 
    printf("%d\n", count);
}
```

```c
// 计算BinarySearch的时间复杂度？
int BinarySearch(int*a, int n, int x) {
        assert (a);
        int begin = 0;
        int end = n - 1; .while (begin < end) {
            int mid = begin + ((end - begin) >> 1);
            if (a[mid] < x) begin = mid + 1;
            else if (a[mid] > x) end = mid;
            else return mid;
        }
        return -1;
    }
```
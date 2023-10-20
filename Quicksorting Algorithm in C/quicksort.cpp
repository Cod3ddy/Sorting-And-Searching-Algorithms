#include "iostream"
#include "string"


using namespace std;

//  function for swapping elements int the array
void swap(int arr[], int i, int j);
//function for performing the sorting 
void quickSort(int arr [], int low, int high);
// function for partition the array
int partition(int arr[], int low , int high);
//function for printing  the array
void printArray(int arr[], int size);


int main(){
    int size = 5;
    int arr [5] = {10, 80, 30, 90, 40};
    quickSort(arr, 0, size -1);

//print the sorted array

    printf("SORTED ARRAY\n");
    printArray(arr, size);
    return 0;
}

void swap(int arr[], int i, int j){
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

void quickSort(int arr[], int low, int high){
    //terminate the sort if the low > high.
    if(low > high) return;

    int pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot +1 , high);
}


int partition(int arr[], int low, int high){
    int pivot = arr[high];
    int i = (low -1);
    int j = 0;
    for (j = low; j <= high - 1; j++){
        if(arr[j] < pivot){
            i+=1;
            swap(arr, i , j);
        }
    }
    //set the pivot point to [i + 1]
    swap (arr, i +1 , high);

//return the pivot point 
    return (i + 1);
}


void printArray(int arr[], int size){
    int i =0;
 
    for (i =0; i < size; i++){
        printf("%d  ", arr[i]);
    }
}



unsortedArray = [20, 3, 23, 12, 33, 22]

unsortedArray.__len__()


def sort(array):
    for i in range(array.__len__() - 1):
        for j in range(array.__len__() - i - 1):
            if array[j] > array[j + 1]:
                swap = array[j]
                array[j] = array[j + 1]
                array[j + 1] = swap

    print("SORTED ARRAY")
    print("Largest Element in array : " + str(array[array.__len__()-1]))
    print("Smallest Element in array : " + str(array[0]))
    # for i in range(array.__len__()):
    #     print(array[i], end=" ")


sort(unsortedArray)

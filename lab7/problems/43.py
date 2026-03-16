def find_min(array):
    current_min = array[0]
    
    for element in array:
        if element < current_min:
            current_min = element
            
    print(current_min)

arr = list(map(int, input().split()))

find_min(arr)
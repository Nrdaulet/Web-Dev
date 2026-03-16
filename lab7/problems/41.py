n=int(input())
count=0
arr=list(map(int, input().split()))

for i in range(0,n-2):
    if arr[i]<arr[i+1] and arr[i+1]>arr[i+2]:
        count+=1
print(count)
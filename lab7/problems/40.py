n=int(input())

arr=list(map(int, input().split()))

found=False

for i in range(0,n-1):
    if(arr[i]>0 and arr[i+1]>0) or (arr[i]<0 and arr[i+1]<0):
        found=True
        break

if found:
    print("YES")
else:
    print("NO")
    

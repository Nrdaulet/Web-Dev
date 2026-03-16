a = int(input())
b = int(input())
count=0

if a==0 and b==0:
    count=1

else:
    while a>0:
        if a%10 ==b:
            count+=1
        x//=10
print(count)
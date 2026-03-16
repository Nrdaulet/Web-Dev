def Xor(x,y):
    if x==True and y==False:
        return True
    elif x==False and y==True:
        return True
    else:
        return False

part=input().split()
a=int(part[0])
b=int(part[1])

print(int(Xor(a,b)))
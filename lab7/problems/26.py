a=input()
dc=0
power=0

for i in reversed(a):
    if i =='1':
        dc+=2**power
    power+=1
print(dc)

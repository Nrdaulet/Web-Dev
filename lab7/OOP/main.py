from models import Transport,Car,Truck
    
truck=Transport("Merc",2012,3.5)
truck.set_Name("Volvo")
res=truck.getData()


print(res) 
print(truck)


car1=Car("Kia",2015,3.6,"Universal","Black")
res1=car1.getData()
print(res1)


    
truck1=Truck("DAF",2004,5.0,False,10)
print(truck1.getData())

print("----Polymorphism----")
fleet=[truck1,truck,car1]
for i in fleet:
    print(i.getData())


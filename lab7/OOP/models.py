class Transport:

    def __init__(self,name,year,engine):
        self.name=name
        self.year=year
        self.engine=engine
    
    def getData(self):
        return f"{self.name}, Year: {self.year}, Engine: {self.engine}"
    def set_Name(self,name):
        self.name=name

    def __str__(self):
        return f"Name the transport is {self.name}"

class Car(Transport):
    def __init__(self, name, year, engine,type,color):
        super().__init__(name,year,engine)
        self.type=type
        self.color=color
    def getData(self):
        return f"{super().getData()},Type: {self.type}, Color: {self.color}"
    def set_type_color(self,type,color):
        self.type=type
        self.color=color

class Truck(Transport):
    def __init__(self, name, year, engine,isLoaded,capacity):
        super().__init__(name, year, engine)
        self.isLoaded=isLoaded
        self.capacity=capacity
    def set_load(self,isLoaded):
        self.isLoaded=isLoaded
    def getData(self):
        return f"{super().getData()}, Loaded: {self.isLoaded}, Capacity: {self.capacity} tonn"
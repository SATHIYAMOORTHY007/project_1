class Item:
    pay_rate =0.9
    all=[]
    def __init__(self,phone:str,quantity:str,value:str):
       self.quantity = quantity
       self.value = value
       self.Name = phone
       Item.all.append(self)
    def calculate(self):
        return self.quantity* self.value
    def __repr__(self):
        return f"Item('{self.Name}')"
Item1 = Item("phone",5,600)
Item2 = Item("laptop",5,600)
Item3 = Item("phone",5,600)
Item4 = Item("phone",5,600)
Item5 = Item("phone",5,600)

print(Item.all)

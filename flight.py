import random

show=0
noshow=0

print("How many passengers?")
x = input()
for i in range(int(x)):
    if random.randrange(0,100)>7:
        show+=1
    else:
        noshow+=1
print("There are "+str(noshow)+" no-shows")
print(show/noshow)
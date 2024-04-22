import math
numbers=[]
notDone=True
i=1
for i in 1001:
    numbers.append(i)
print("Choose a number between 1-1000")
while(notDone):
    print("Is it higher(h), lower(l), or equal(e) to "+numbers[math.floor(numbers.length/2)])
    answer=input()
    if answer=="h":
        numbers=numbers[math.floor(numbers.length/2):numbers.length-1]
import math
numbers=[]
i=1
for i in range(1,1001):
    numbers.append(i)
print("Choose an integer between 1-1000")
while True:
    try:
        print("Is it higher(h), lower(l), or equal(e) to "+str(numbers[math.floor(len(numbers)/2)]))
    except:
        print("Your number doesn't exist :/")
        quit()
    answer=input()
    if answer=="e":
        print("I got it!")
        quit()
    elif answer=="h":
        numbers=numbers[math.floor(len(numbers)/2)+1:len(numbers)]
    elif answer=="l":
        numbers=numbers[0:math.floor(len(numbers)/2)]
    else:
        print("invalid response")
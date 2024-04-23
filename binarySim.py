import math
import time
import random

results=[]
iterations=0
tn=0
notDone=True
nums=[]
index=0
depth=1000

print("Welcome to the BINARY SORT SIM!!")
time.sleep(1)
print("How many iterations would you like to do?")
try:
    iterations=iterations+abs(int(input()))
except:
    print("Invalid Input")
    quit()
print("Running "+str(iterations)+" times!")
try:
    depth=abs(int(input("Range: 1-")))
except:
    print("Invalid Input")
    quit()

for x in range(iterations):
    tn=random.randrange(1,depth+1)
    notDone=True
    index=0
    nums=[]
    for i in range(1,depth+1):
        nums.append(i)
    while notDone:
        if tn==nums[math.floor(len(nums)/2)]:
            notDone=False
        elif tn>nums[math.floor(len(nums)/2)]:
            nums=nums[math.floor(len(nums)/2)+1:len(nums)]
        else:
            nums=nums[0:math.floor(len(nums)/2)]
        index+=1
    results.append(index)
print("Average number of guesses per iteration: "+str(sum(results)/len(results)))
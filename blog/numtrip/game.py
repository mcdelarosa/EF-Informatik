borderSymbols =["+","---","|"]
columns = 5

numbers=[[2 for x in range(columns + 1)] for y in range(columns)]
for columns in range(columns + 1):
    print(borderSymbols[0], borderSymbols[1])
print(numbers)
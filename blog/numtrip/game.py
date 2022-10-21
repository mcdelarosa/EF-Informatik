#borderSymbols =["+","---","|"]
#columns = 5

#numbers=[[2 for x in range(columns + 1)] for y in range(columns)]
#for columns in range(columns + 1):
#    print(borderSymbols[0], borderSymbols[1])
#print(numbers)
board = [
    [2, 4, 1, 8, 8],
    [4, 2, 8, 2, 1],
    [4, 4, 8, 4, 2],
    [2, 8, 1, 4, 1],
    [2, 4, 4, 4, 4]
]

for zeile in board:
    for zelle in zeile:
        print(' -', end='')
    print(' ')
    for zelle in zeile:
        print(f'|{zelle}', end='')
    print('|')

for zelle in board[0]:
    print(' -', end='')
print(' ')
board = [
    [2, 4, 1, 8, 8],
    [4, 2, 8, 2, 1],
    [4, 4, 8, 4, 2],
    [2, 8, 1, 4, 1],
    [2, 4, 4, 4, 4]
]
x = ["A", "B", "C", "D", "E"]
number = 0

for zeile in board:
    for zelle in zeile:
        print(' -', end='')
    print(' ')
    for zelle in zeile:
        print(f'|{zelle}', end='')
    print('|')

for zelle in board[0]:
    print(x[number], " ", end="")
    number = number + 1

for zelle in board[0]:
    print(' -', end='')
print(' ')
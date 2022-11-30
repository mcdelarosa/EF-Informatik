
GREEN = '\033[1;32m'
WHITE = '\033[1;37m'
RED = '\033[1;31m'

class Numtrip:
    space = " "
    axis_x = ["A", "B", "C", "D", "E"]
    axis_y = ["0", "1", "2", "3", "4"]
    number = 0
    x = -1
    y = -1

    def __init__(self):

        self.board = [
            [2, 4, 1, 8, 8],
            [4, 2, 8, 2, 1],
            [4, 4, 8, 4, 2],
            [2, 8, 1, 4, 1],
            [2, 4, 4, 4, 4]
        ]

    def ask_input(self):

        try:
            x, y = input("input your coordinate with spaces (<Letter> <Number>): ").upper().split()
            self.x = self.axis_x.index(x)
            self.y = self.axis_y.index(y)
            self.board[self.x][self.y - 1] = -1
            return True
        except:
            self.x = -1
            self.y = -1
            return False


    def printTable(self):

        for idx, header in enumerate([GREEN + ' '] + self.axis_x):
            print(' ' + header, end='')

        print()

        for idx, _axis_y in enumerate(self.board):
            print(GREEN + ' ' + self.axis_y[idx], end='') # first column, reference board
            for idx2,_axis_x in enumerate(_axis_y):
                if _axis_x == -1:
                    print(RED + ' ·', end='')
                else:
                    print(WHITE + ' ' + str(_axis_x), end='')
            print('')


x = Numtrip()
while True:
    while not x.ask_input():
        print(" wrong coordinates ...")
    x.printTable()

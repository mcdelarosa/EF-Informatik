import random
class MyColors:
    GREEN = '\033[1;32m'
    WHITE = '\033[1;37m'
    RED = '\033[1;31m'
    BLUE = '\033[1;34m'

class Numtrip:
    space = " "
    axis_x = ["A", "B", "C", "D", "E"]
    axis_y = ["0", "1", "2", "3", "4"]
    number = 0
    colors = [MyColors.WHITE, MyColors.RED]

    def __init__(self):

        self.board = [
            [2, 4, 1, 8, 8],
            [4, 2, 8, 2, 1],
            [4, 4, 4, 4, 2],
            [2, 8, 1, 4, 1],
            [2, 4, 4, 4, 4]
        ]

    def ask_input(self):

        try:
            x, y = input("input your coordinate with spaces (<Letter> <Number>): ").upper().split()
            self.x = Numtrip.axis_x.index(x)
            self.y = Numtrip.axis_y.index(y)
            self.number = self.board[self.y][self.x]
            self.fill4(self.number, self.x, self.y, True)
            self.gravitation()
            return True
        except:
            self.x = -1
            self.y = -1

            return False

    def printTable(self):

        for idx, header in enumerate([MyColors.GREEN + ' '] + Numtrip.axis_x):
            print(' ' + header, end='')

        print()

        for idx, _axis_y in enumerate(self.board):
            print(MyColors.GREEN + ' ' + Numtrip.axis_y[idx], end='') # first column, reference board
            for idx2,_axis_x in enumerate(_axis_y):
                if _axis_x == -1:
                    print(MyColors.RED + ' ·', end='')
                else:
                    print(MyColors.WHITE + ' ' + str(_axis_x), end='')
            print('')

    def fill4(self, locationValue, x, y, choosenNumber):

        if len(self.board) <= y:
            return
        if len(self.board[y]) <= x:
            return

        position_value = self.board[y][x]
        if locationValue == position_value:
            if choosenNumber:
                self.board[y][x] = self.board[y][x]*2
                print(f' y:{y} x:{x}')
            else:
                self.board[y][x] = -1

            self.fill4(locationValue, x, y + 1, False)  # unten
            self.fill4(locationValue, x, y - 1, False)  # oben
            self.fill4(locationValue, x + 1, y, False)  # rechts
            self.fill4(locationValue, x - 1, y, False)  # links

    def gravitation(self):
        bottom = len(self.board)
        for x in range(len(self.board[0])):
            for y in reversed(range(bottom)):
                # print(f" ... {x} . {y}")
                if self.board[y][x] == -1 and y > 0:
                    nextUpValue = self.getFirstUpNumber(y, x)
                    if nextUpValue != None:
                        self.board[y][x] = nextUpValue["value"]
                        self.board[nextUpValue["y"]][x] = -1
            for y in reversed(range(bottom)):
                if self.board[y][x] == -1 and y >= 0:
                    self.board[y][x] = random.randint(1, 8)

    def getFirstUpNumber(self, pos_y, pos_x):
        # print(f" ... ... y = {pos_y} , x= {pos_x}")
        for y in reversed(range(pos_y)):
            value = self.board[y][pos_x]
            # print(f" ... ... ... {value}")
            if value != -1:
                return {"y": y, "value": value }
        return None


game = Numtrip()

while True:
    game.printTable()
    while not game.ask_input():
        print(" wrong coordinates ...")


import math
import random
import os

os.system("")
class MyColors:
    RED = "\033[0;31m"
    GREEN = "\033[0;32m"
    BROWN = "\033[0;33m"
    BLUE = "\033[0;34m"
    PURPLE = "\033[0;35m"
    CYAN = "\033[0;36m"
    LIGHT_GRAY = "\033[0;37m"
    DARK_GRAY = "\033[1;30m"
    YELLOW = "\033[1;33m"
    WHITE = "\033[1;37m"

class Numtrip:
    space = " "
    axis_x = ["A", "B", "C", "D", "E"]
    axis_y = ["0", "1", "2", "3", "4"]
    number = 0
    colors = [MyColors.WHITE, MyColors.GREEN, MyColors.BLUE, MyColors.GREEN, MyColors.CYAN, MyColors.LIGHT_GRAY, MyColors.PURPLE, MyColors.BROWN, MyColors.YELLOW]

    def __init__(self):

        self.DEBUG = False
        self.patern_board = [
            [2, 4, 1, 8, 8],
            [4, 2, 8, 2, 1],
            [4, 4, 4, 4, 2],
            [2, 8, 1, 4, 1],
            [2, 4, 4, 4, 4]
        ]

        self.actual_board = self.builder()
        self.selected_value = -9999
        self.play = True
        self.turns = 0
        self.limit = 256

    def ask_input(self):
        print(MyColors.WHITE)
        try:
            x, y = input("input your coordinate with spaces (<Letter> <Number>), type '0 0' to finish: ").upper().split()

            if x == '0' and y == '0':
                game.play = False
                return True

            self.x = Numtrip.axis_x.index(x)
            self.y = Numtrip.axis_y.index(y)
            self.selected_value = self.getValue(self.y, self.x)
            if self.selected_value is None:
                print("..out of range")
            else:
                self.turns = self.turns + 1
                self.fill4(self.y, self.x, True)
                self.gravitation()
            return True
        except:
            self.x = -1
            self.y = -1
            return False

    def getValue(self, y, x):
        if len(self.actual_board) <= y:
            return None
        if len(self.actual_board[y]) <= x:
            return None
        return self.actual_board[y][x]

    def printTable(self):

        for idx, header in enumerate([MyColors.DARK_GRAY + ' '] + Numtrip.axis_x):
            print(' ' + header, end='')

        print()

        for idx, _axis_y in enumerate(self.actual_board):
            print(MyColors.RED + ' ' + Numtrip.axis_y[idx], end='') # first column, reference board
            for idx2,_axis_x in enumerate(_axis_y):

                if _axis_x == -1:
                    print(MyColors.RED + ' ·', end='')
                elif _axis_x > 0:
                    base2 = int(math.log(_axis_x, 2))
                    print(self.colors[base2] + ' ' + str(_axis_x), end='')

            print('')

    def fill4(self, y, x,  choosenNumber):

        if self.getValue(y, x) == self.selected_value:
            if choosenNumber:
                if self.selected_value < self.limit  and self.check(y, x, self.selected_value):
                    self.logger(f' y:{y} x:{x}')
                    self.actual_board[y][x] = self.actual_board[y][x]*2
                elif self.selected_value >= self.limit:
                    self.play = False
                    score = 5002 - self.turns*2
                    print(f'You won! Your tries: {self.turns} and your score : {score}')
                else:
                    print('The number could not be duplicated')
                    self.play = False
                    print('You loose')

            else:
                self.actual_board[y][x] = -1

            self.fill4(y + 1, x, False)  # unten
            self.fill4(y - 1, x, False)  # oben
            self.fill4(y, x + 1, False)  # rechts
            self.fill4(y, x - 1, False)  # links
    def check(self, y, x, searched_value):
        # print('searched ' + str(searched_value))
        v_pos_n = self.getValue(y - 1, x)
        v_pos_s = self.getValue(y + 1, x)
        v_pos_e = self.getValue(y, x + 1)
        v_pos_o = self.getValue(y, x - 1)

        if (searched_value == v_pos_o
            or searched_value == v_pos_e
            or searched_value == v_pos_n
            or searched_value == v_pos_s):
                return True
        else:
            return False

    def gravitation(self):
        bottom = len(self.actual_board)
        for x in range(len(self.actual_board[0])):
            for y in reversed(range(bottom)):
                self.logger(f" ... {x} . {y}")
                if self.actual_board[y][x] == -1 and y > 0:
                    nextUpValue = self.getFirstUpNumber(y, x)
                    if nextUpValue != None:
                        self.actual_board[y][x] = nextUpValue["value"]
                        self.actual_board[nextUpValue["y"]][x] = -1
            for y in reversed(range(bottom)):
                if self.actual_board[y][x] == -1 and y >= 0:
                    self.actual_board[y][x] = 2**random.randint(0, 3)

    def getFirstUpNumber(self, pos_y, pos_x):
        for y in reversed(range(pos_y)):
            value = self.actual_board[y][pos_x]
            self.logger(f" ... ... ... {value}")
            if value != -1:
                return {"y": y, "value": value }
        return None
    def builder(self):
        newBoard = self.patern_board
        for y in range(len(self.axis_y)):
            for x in range(len(self.axis_x)):
                newBoard[x][y]= 2**random.randint(0, 3)
        return newBoard
    def logger(self, message):
        if self.DEBUG:
            print(message)


game = Numtrip()
game.DEBUG = False


while game.play:
    game.printTable()
    if not game.ask_input():
        print(MyColors.RED + " wrong coordinates ...")

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
            [4, 4, 6, 4, 2],
            [2, 7, 1, 4, 1],
            [2, 4, 4, 4, 4]
        ]

    def ask_input(self):

        try:
            x, y = input("input your coordinate with spaces (<Letter> <Number>): ").upper().split()
            self.x = Numtrip.axis_x.index(x)
            self.y = Numtrip.axis_y.index(y)
            self.number = self.board[self.y][self.x]
            #self.board[self.x][self.y - 1] = -1
            print(f"{self.x} . {self.y} -- {self.number}")
            self.fill4(self.number, self.x, self.y, -1)

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
                #fill4(Numtrip.x, Numtrip.y, GREEN, WHITEB )
                if _axis_x == -1:
                    print(MyColors.RED + ' ·', end='')
                else:
                    print(MyColors.WHITE + ' ' + str(_axis_x), end='')
            print('')

    def fill4(self, locationValue, x, y, newNumber):

        if len(self.board) <= y:
            return
        if len(self.board[y]) <= x:
            return

        position_value = self.board[y][x]
        print(" >> " + str(position_value))
        if locationValue == position_value:
            print(" ...entro")
            self.board[y][x] = newNumber
            self.fill4(locationValue, x, y + 1, newNumber)  # unten
            self.fill4(locationValue, x, y - 1, newNumber)  # oben
            self.fill4(locationValue, x + 1, y, newNumber)  # rechts
            self.fill4(locationValue, x - 1, y, newNumber)  # links

game = Numtrip()

while True:
    while not game.ask_input():
        print(" wrong coordinates ...")
    game.printTable()

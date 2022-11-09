class Numtrip:
    space = " "
    x = [space, "A", "B", "C", "D", "E"]
    y = ["0", "1", "2", "3", "4"]
    number = 0
    coordinateY = 0
    def __init__(self):
        self.board = [
            [2, 4, 1, 8, 8],
            [4, 2, 8, 2, 1],
            [4, 4, 8, 4, 2],
            [2, 8, 1, 4, 1],
            [2, 4, 4, 4, 4]
        ]
    def table (self):
        for zeile in self.board:
            for zelle in zeile:
                print(' -', end='')
            print(Numtrip.space)
            Numtrip.columns()
            print(Numtrip.space, end='')
            for zelle in zeile:
                print(f'|{zelle}', end='')
            print('|')

    def rows (self):
        while Numtrip.number <= len(self.board):
            print(Numtrip.x[Numtrip.number], " ", end="")
            Numtrip.number = Numtrip.number + 1
        print(' ')
    def columns():
        print(Numtrip.y[Numtrip.coordinateY], end="")
        Numtrip.coordinateY = Numtrip.coordinateY +1



x = Numtrip()
x.rows()
x.table()



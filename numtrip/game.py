class Numtrip:
    space = " "
    x = [space, "A", "B", "C", "D", "E"]
    y = ["0", "1", "2", "3", "4"]
    number = 0
    coordinateY = 0
    wanted = input("input your coordinate")

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
        Numtrip.coordinateY = Numtrip.coordinateY + 1
    def analyse(self):
        coordinate = Numtrip.wanted.strip()
        """
        if Numtrip.x in coordinate[1].upper() and Numtrip.y in coordinate[1]:
            print("coordinates1")
        elif Numtrip.x in coordinate[0].upper() and Numtrip.y in coordinate[0]:
            print("coordinates2")
        else:
            print("no")"""

        if coordinate[1].upper() in Numtrip.x and coordinate[0] in Numtrip.y:
            print("coordinates1")
        elif coordinate[0].upper() in Numtrip.x and coordinate[0] in Numtrip.y:
            print("coordinates2")
        else:
            print("no")

x = Numtrip()
x.rows()
x.table()
x.analyse()



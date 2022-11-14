import zufallsworte as zufall

HANGMANS_RAW = ''' 18 Zeichen ergeben ein Bild...
                                         __________        __________        __________        __________        __________        __________        __________        __________        __________     
                       |                 |                 |/                |/        |       |/        |       |/        |       |/        |       |/        |       |/        |       |/        |    
                       |                 |                 |                 |                 |         O       |         O       |         O       |         O       |         O       |         O    
                       |                 |                 |                 |                 |                 |         |       |        -|       |        -|       |        -|-      |        -|-   
                       |                 |                 |                 |                 |                 |                 |                 |          \      |          \      |        / \   
                       |                 |                 |                 |                 |                 |                 |                 |                 |                 |  GAME OVER   
    _________         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______     
___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ 
'''.split('\n')[1:-1] # ohne erste und letzte Zeile

# enthält 11 ASCII-Bilder, für jeden Spiel-Zustand einen
HANGMANS = ['\n'.join([line[i : i + 18] for line in HANGMANS_RAW]) for i in range(0, 11 * 18, 18)]

def get_hangman(nr):
    '''
    nr: int values from 0 to 10
    '''
    return HANGMANS[nr]
class Game:
    def __init__(self, searched, life):
        self.searched = searched
        self.correct_letters = set(searched.lower())    #
        self.life = life
        self.gefunden = []
        self.falsch_geraten = []
        self.letter = None

    def play(self):
        while self.is_not_game_over() and not self.is_won():
            inp = self.eingabe()
            self.analise(inp)
            self.show()

    def ShowLifes(self):
        return print("Lebenspunkten: " + str(self.life))
    def eingabe(self):
        self.letter = '*'
        while not self.is_valid(self.letter):
            self.letter = input('Buchstabe? ')
        return self.letter.lower()

    def is_valid(self, inp):
        if inp in self.falsch_geraten:
            return False
        elif inp not in self.gefunden and inp.isalpha():
            return True

    def analise(self, valid_inp):
        if valid_inp in self.searched:
            self.gefunden.append(valid_inp)
        else:
            self.falsch_geraten.append(valid_inp)
            self.life = self.life - 1

    def show(self):
        print(get_hangman(10- self.life))
        print('Falsche Buchstaben:', self.falsch_geraten)

        for self.letter in self.searched:
            if self.letter in self.gefunden:
                print(self.letter, end=' ')
            else:
                print('_', end=' ')
        print('')
        self.ShowLifes()
    def is_won(self):
        if len(self.correct_letters) == len(self.gefunden):
            print("Das war richtig!")
            return True
        else:
            return False


    def is_not_game_over(self):
        if self.life <= 0:
            print("Game Over")
            print("Das gesuchte Wort war " + self.searched)
            return False
        else:
            return True

toPlay = 's'
while toPlay.lower() != 'n':
    woerter = zufall.zufallswoerter(1)[0]
    the_game = Game(woerter, 10)
    the_game.play()
    toPlay = input("Willst du spielen? [y/n]")
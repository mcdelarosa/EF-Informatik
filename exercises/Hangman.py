# Variablen
#import zufallsworte as zufall

#wort = zufall.zufallswoerter(1)[0]  # gibt ein Zufallswort zurück
searched = 'test'
life = 8
letter = None

game = [searched, life, letter]

gefunden = []
falsch_geraten = []

def play():
    while not game_over():
        inp = eingabe()
        print("a")
        analise(inp)
        print(inp)
        game_over()
    # if won():
    #     ShowLifes()
    # else:
    #     game_over()


def ShowLifes():
    return print("Lebenspunkten: " + str(game[1]))
def eingabe():
    game[2] = input('Buchstabe? ')
    while not is_valid(game[2]):
        ShowLifes()
        game[2] = input('Buchstabe? ')
    return game[2].lower()

def is_valid(inp):
    analise(inp)
def analise(valid_inp):
    if valid_inp in game[0]:
        gefunden.append(valid_inp)
        won()
    else:
        falsch_geraten.append(valid_inp)
        game[1]= game[1] - 1





def show():
    print('Falsche Buchstaben:', falsch_geraten)
    for game[2] in searched:
        if game[2] in gefunden:
            print(game[2], end=' ')
        else:
            print('_', end=' ')
    print('')

def won():
    print("Das war richtig!")
    #return True


def game_over():
    print("se puede")
    if game[1] > 0:
        print("ok")
        show()
    else:
        print("Game Over")
        return True

play()
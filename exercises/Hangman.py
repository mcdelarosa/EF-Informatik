# Variablen
gesucht = 'test'

gefunden = []
falsch_geraten = []
def show():
    print('Falsche Buchstaben:', falsch_geraten)
    for buchstabe in gesucht:
        if buchstabe in gefunden:
            print(buchstabe, end=' ')
        else:
            print('_', end=' ')
    print('')


def is_valid(inp):
    return True

def eingabe():
    buchstabe = input('Buchstabe? ')
    while not is_valid(buchstabe):
        buchstabe = input('Buchstabe? ')
    return buchstabe.lower()
    gewonnen()



def auswerten(valid_inp):
    if valid_inp in gesucht:
        gefunden.append(valid_inp)
    else:
        falsch_geraten.append(valid_inp)

def gewonnen():
    show()
    for buchstabe in gesucht:
        if buchstabe not in gefunden:
            game_over()
            return False
    return True

def game_over():
    return False


def play():
    while not game_over():
        buchstabe = eingabe()
        auswerten(buchstabe)
        print(buchstabe)
        show()
    if gewonnen():
        print("")
    else:
        pass

play()
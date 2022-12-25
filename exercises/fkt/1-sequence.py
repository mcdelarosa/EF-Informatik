import time # für Funktion sleep()

'''
Hauptprogramm.
Enthält die Anweisungen für einen countdown. Die Benutzer:in kann angeben, wie lange
der countdown läuft.
'''

eingabe = input("Gib eine Zahl ein: ")
zahl = int(eingabe)
'''                      !  Dort wird -1 eingegeben um die Zahl -1 zu rechnen solange die Zahl nicht 0 ist'''
for i in range(zahl, 0, -1):
    print(i)
    '''! dies tut eine Sekunde abwarten'''
    time.sleep(1)
print("BOOOMMMMM")

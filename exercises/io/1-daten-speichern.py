import json
name = input('Schriebe deinen Namen ')
def speichern(teilnehmer, dateiname):

    datensammlung = {}
    datensammlung['teilnehmer:innen'] = teilnehmer

    with open(dateiname, 'w') as f:
        json.dump(datensammlung, f)


teilnehmer = ['Anna', 'Bob', 'Valentin', 'Karim', 'Robert', name]

speichern(teilnehmer, 'daten.json')
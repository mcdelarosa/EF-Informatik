Was ist ein API?
---
Application Programming Interface
Beziehungsweise, das hilft dem Klient alles schneller und einfacher zu verstehen.   
Dadurch, dass dies Visuell dargestellt werden.

- Protokolle:
    Diese sind Regeln die ein Programm (Computer) streng beachtet.
- Methode: 
    Das sind Handlungen, die der Klient dem Server befehlt (GET, POST, PUT, DELETE)   
- Headers: Suchen nach deinem Gerät nach (welches PC du hast) und formatieren die Website so, dass du problemlos sie benutzen kannst
- Body: der Klient verfügt über das ganze Kontrol und kann alles nachfragen.
- Status Codes: Gibt dem Klient viel Information, falls irgendwo ein Fehler aufgetretten ist.


JSON
`
{
"crust": "original",
"toppings": ["cheese", "pepperoni", "garlic"],
"status": "cooking"
}`
`"crust"`,`"toppings"`, `"status"` heissen 'keys'.   
`"original"`,`["cheese", "pepperoni", "garlic"]`, `"cooking"` heissen 'values'.

Content-Type header:
Wenn der Klient sendet eine Anfrage im Content-Type header, berichtet dem Server, das die Daten eine bestimmte Formatierung haben.  
Das Server wird danach die gesendete Daten prüfen, um sicherzustellen, dass es diese versteht (der Klient sendet mit den Daten, die Art wie das Server diese lesen kann).  
Wenn der Klient die angewandte Formatierung nicht versteht, so kommt bei ihm eine Fehlermeldung.  
Zuerst fragt das zweite HTTP header dem klient, welche Formatierungen er verwenden will/kann.  
Falls das Server die gesandte Formatierungart des Klients nicht hat, so erhält der Klient eine Fehlermeldung vom Server.  


Authentifizierung:
- Zwei gegebene Informationen die zur Authentifizierung nutzen heissen 'credentials'
- Zwei Authentifizierungschemen:
  - 'Basic Authentication':
    - Braucht nur ein Benutzername und ein Passwort
    - Wird im 'header', 'Authorization' genannt, durchgeführt
      - Da wird geprüft, ob diese mit den Daten aus der Liste des Servers übereinstimmen.
  - API Schlüsselauthentifizierung:
      - ist ein 'Schlüssel', welcher aus vielen Zeichen besteht
      - Ermöglicht die Klientendaten zu lesen
      - Ist begrenzt und lässt Administratives nicht zu, zB.: Passwortänderung oder Accountlöschung

'Integrations':
- 'poilling': Wiederholung von Befragung nach Änderungen des Servers
- 'long pilling': Wiederholung von Befragung nach Änderungen des Servers aber mit Wartezeit
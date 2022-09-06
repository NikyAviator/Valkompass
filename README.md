# Valkompass
#Kravspecifikation

Skapa en valkompass.
Du får en specifikation på vilka frågor som ska ingå och vad partierna tycker i de olika frågorna här.

Flera personer ska kunna göra kompassen/frågeformuläret en eller flera gånger var och alla resultat ska sparas med namn, samt datum och tidpunkt då kompassen genomfördes.

En person ska kunna göra valkompassen flera gånger och varje resultat ska sparas med vilken tid.
Data ska INTE läsa eller spara i en databas utan från/till filer i ett serialiserbart format, t.ex. JSON eller Javas inbyggda serialisationsformat serialisations-format. Minst två filer, en för läsning och en för skrivning.

Resultatet ska i procent visa hur nära de olika riksdagspartierna personen som genomfört kompassen ligger. Det ska sorteras med partiet vars åsikter är mest lika hur personen svarat överst och minst lika underst.

För varje fråga ska en person som genomför kompassen ha svarsalternativen “Instämmer helt”, “Instämmer delvis”, “Delvis emot” och “Helt emot”.
Uppdelning i klasser
Dela upp ditt program i ett antal klasser. Du väljer själv hur. Rita ett UML-diagram.
Exempel på några tänkbara klasser är Question, Person, Result. Men du väljer själv!

Du kan om du vill ha klasser som är mer “biblioteksliknande” och bara har statiska metoder (i stil med hur t.ex. Math-klassen fungerar i Java och JavaScript - den har bara statiska metoder). Exempel: En Storage-klass för att serialisera och deserialisera data.
Avgränsning
Du behöver inte bygga ett grafiskt gränssnitt utan kan använda terminalen. (Om du mycket gärna vill kan du bygga ett enklare grafiskt gränssnitt, t.ex. webbaserat, men detta ger ingår inte i betygskriterierna.)

Tips! För användarinmatning kan du om du bygger ett terminalbaserat program för Java använda Scanner, för JavaScript/Node.js ett npm-bibliotek som promptly
Du ska använda ett språk som stödjer OOP och klasser. Om du väljer ett annat språk än Java eller JavaScript rådgör gärna med Thomas först.

Betygskriterier
G
Resultat ska vara rättvisande, dvs. ju närmare en persons åsikter överensstämmer med ett partis åsikter, desto högre procent för detta parti i resultatet.
Det ska finnas ett korrekt ritat UML-diagram.
UML-diagrammet ska följas när du skapar klasser och metoder.
Data ska serialiseras och deserialiseras korrekt till fil/filer.
För G räcker att en persons resultat ska kununa sparas, men för flera tillfällen personen gör kompassen.
Högst en rad kod får finnas utanför någon klassdeklaration.
Programmet ska inte kunna krascha av felaktig användarinmatning.

VG
Flera personers resultat ska kunna sparas, för flera tillfällen då personen genomför kompassen.
Frågorna och deras poäng för olika partier får inte på något sätt hårdkodas utan ska läsas/deserialiseras från fil.
Underlag/data
Frågorna och partiernas åsikt io frågorna
+2 = Instämmer helt, 1 = Instämmer delvis, -1 Delvis emot, -2 Helt emot

Anonyma vittnen ska tillåtas i domstolar. 
V -2, S -2, MP -2, C -2, L -1, KD +2, M +2, SD +2

Kvinnans aborträtt ska skrivas in i grundlagen. 
V +2, S +1, MP +2, C +2, L +2, KD +2, M +2

Företagens skatter ska sänkas. 
V -2, S -2, MP +1, C +2, L +2, KD +2, M +2, SD +2

Skogsägare ska få stärkt äganderätt. 
V -2, S +1, MP -1, C +2, L +1, KD +2, M +2, SD +2

En särskild miljonärsskatt ska införas. 
V +2, S +2, MP +2, C -2, L -2, KD -2, M -2, SD -2

En ny folkräkning ska genomföras. 
V -1, S -1, MP -1, C -1, L +2, KD +2, M +2, SD +2

Företagens regelbörda ska minska. 
V -1, S +1, MP +2, C +2, L +2, KD +2, M +2

Biståndet ska sänkas. 
V -2, S -2, MP -2, C -2, L -2, KD -2, M +2, SD +2

Tandvård ska subventioneras som sjukvård. 
V +2, S +2, MP +2, C +1, L +1, KD +1, M -1, SD +1

Fri hyressättning ska införas. 
V -2, S -2, MP -2, C +1, L +1, KD +1, M +1, SD -2

Mångkulturen berikar Sverige. 
V +2, S +1, MP +2, C +2, L +1, KD +1, M -1, SD -2

Färre företag ska vara momspliktiga. 
V -2, S -2, MP +2, C +2, L +2, KD +2, M +1, SD -1

Ränteavdraget för bostadslån ska trappas ned. 
V +2, S -2, MP +1, C -1, L -2, KD +1, M -2, SD -2

Kärnkraften ska byggas ut. 
V -2, S +1, MP -2, C -1, L +2, KD +2, M +2, SD +2

Föräldraförsäkringen ska delas lika mellan föräldrarna. 
V +2, S +2, MP +1, C -1, L -1, KD -2, M -1, SD -1

Sverige ska bli medlem av Nato. 
V -2, S +2, MP -2, C +2, L +2, KD +2, M +2, SD +2

En moderniserad arbetsrätt ska göra det lättare att säga upp viss personal. 
V -2, S -2, MP -2, C +2, L +2, KD +2, M +2, SD -1

Människor ska inte behöva sänka sin levnadsstandard för klimatets skull. 
V -1, S +2, MP +1, C +1, L +1, KD +1, M +2, SD +2

Gårdsförsäljning av vin och öl ska tillåtas. 
V -2, S -1, MP -1, C +2, L +1, KD +1, M +2, SD +2

Vinst i skolan ska förbjudas. 
V +2, S +2, MP +2, C -1, L -1, KD -1, M -1, SD -1

Tonåringar ska kunna dömas till fängelse. 
V -1, S +2, MP +1, C +1, L +2, KD +2, M +2, SD +2

Public service ska bantas. 
V -2, S -2, MP -2, C -2, L -2, KD +2, M +1, SD +2

Polisen ska kunna införa visitationszoner för att söka efter vapen. 
V -2, S -2, MP -2, C -2, L -2, KD +2, M +2, SD +2

Religiösa friskolor ska förbjudas. 
V +2, S +2, MP +2, C -1, L +2, KD -2, M +1, SD +1

Kostnaderna för att anställa ska minska. 
V -2, S -1, MP +2, C +2, L +2, KD +2, M +2, SD +1

Statliga museer ska ha gratis inträde. 
V +2, S +2, MP +2, C -1, L +1, KD -2, M -2, SD +1

Reduktionsplikten ska sänkas. 
V +2, S -1, MP -2, C -2, L +1, KD +2, M +2, SD +2

Språkkrav ska införas för den som söker permanent uppehållstillstånd i Sverige. 
V -2, S +2, MP -2, C -2, L +1, KD +2, M +2, SD +2

Fler jobbskatteavdrag ska införas. 
V -2, S -2, MP -2, C +2, L +2, KD +2, M +2, SD +1

Staten ska ta över ansvaret för sjukvården från regionerna. 
V -2, S -1, MP -2, C -1, L +1, KD +2, M -1, SD +1



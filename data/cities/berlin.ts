import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
// Berlin is listed by borough / Ortsteil, each with its own page.
export const BERLIN: State = {
  id: "berlin",
  name: "Berlin",
  cities: [
    {
      slug: "berlin-mitte",
      name: "Berlin-Mitte",
      metaTitle: "Goldankauf Berlin-Mitte – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Berlin-Mitte, Moabit und Wedding: Altgold, Schmuck, Münzen und Barren kostenlos per Post einsenden – bezahlt nach aktuellem Börsenkurs.",
      heroText:
        "Von Moabit bis Gesundbrunnen: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Berlin-Mitte bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Berlin-Mitte – ohne Weg durch den Trubel am Alex.",
        paragraphs: [
          "Mitte ist das Herz der Hauptstadt – voller Touristen, Baustellen und Termine. Für den Verkauf Ihres Goldes müssen Sie sich nicht durch die Innenstadt kämpfen: Bei Cash 4 Gold läuft alles per Versand.",
          "Sie fordern das kostenlose Versandpaket an, legen Ringe, Ketten, Münzen oder Zahngold hinein und geben die versicherte Sendung bei der nächsten Postfiliale ab – ob in Wedding, Moabit oder am Hackeschen Markt.",
          "Wir prüfen jedes Stück nach Gewicht und Feingehalt und rechnen zum Börsenkurs am Tag der Bewertung ab. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Mitte", "Moabit", "Wedding", "Gesundbrunnen", "Tiergarten", "Hansaviertel"],
      nearby: ["Prenzlauer Berg", "Friedrichshain", "Kreuzberg", "Charlottenburg", "Pankow", "Reinickendorf"],
      faqs: [
        {
          question: "Gibt es eine Annahmestelle in Berlin-Mitte?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Berlin. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie wird der Preis für mein Gold berechnet?",
          answer:
            "Wir bestimmen Gewicht und Feingehalt jedes Stücks und berechnen den reinen Goldanteil zum aktuellen Börsenkurs. Alle Werte stehen einzeln im Angebot.",
        },
      ],
    },
    {
      slug: "charlottenburg",
      name: "Charlottenburg",
      metaTitle: "Goldankauf Charlottenburg – Schmuck & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Charlottenburg und Wilmersdorf: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – transparent nach Tageskurs bewertet.",
      heroText:
        "Ob vom Savignyplatz, aus Westend oder Wilmersdorf: Senden Sie Ihr Gold aus Charlottenburg versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Charlottenburg – diskret und nachvollziehbar.",
        paragraphs: [
          "Zwischen Kurfürstendamm, Schloss Charlottenburg und den Altbauten rund um den Savignyplatz liegt in vielen Wohnungen hochwertiger Schmuck, der kaum noch getragen wird. Wer ihn verkaufen möchte, legt meist Wert auf Diskretion.",
          "Bei uns erfolgt der Verkauf ohne Schaufenster und ohne Publikum: Sie schicken Ihre Stücke im kostenlosen, versicherten Versandpaket ein und erhalten ein schriftliches Angebot.",
          "Bewertet wird nach Gewicht, Feingehalt und aktuellem Börsenkurs. Neben Gold kaufen wir auch Silber, Platin und Palladium an.",
        ],
      },
      districts: ["Westend", "Charlottenburg-Nord", "Wilmersdorf", "Halensee", "Grunewald", "Schmargendorf"],
      nearby: ["Spandau", "Tiergarten", "Schöneberg", "Steglitz", "Moabit", "Reinickendorf"],
      faqs: [
        {
          question: "Wie ist mein Paket abgesichert?",
          answer:
            "Die Sendung ist bis 2.500 € versichert, bei höheren Werten organisieren wir einen kostenlosen Werttransport.",
        },
        {
          question: "Kaufen Sie auch Platinschmuck an?",
          answer:
            "Ja. Neben Gold kaufen wir Silber, Platin und Palladium an. Alles wird nach dem aktuellen Kurs des jeweiligen Metalls bewertet.",
        },
      ],
    },
    {
      slug: "spandau",
      name: "Spandau",
      metaTitle: "Goldankauf Spandau – Altgold verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Spandau, Siemensstadt und Staaken: Schmuck, Münzen und Zahngold versichert einschicken und fair nach Tageskurs auszahlen lassen.",
      heroText:
        "Von der Altstadt bis Kladow: Verkaufen Sie Ihr Gold aus Spandau per Post – kostenlos, versichert und fair nach Tageskurs bewertet.",
      intro: {
        title: "Gold verkaufen in Spandau – ohne Fahrt in die Berliner Innenstadt.",
        paragraphs: [
          "Viele Spandauer sagen noch heute, sie fahren „nach Berlin“, wenn es in die Innenstadt geht. Für den Goldverkauf brauchen Sie diese Fahrt nicht: Das kostenlose Versandpaket kommt direkt zu Ihnen nach Hause.",
          "Ob alter Schmuck aus Hakenfelde, Münzen aus Siemensstadt oder Zahngold aus Staaken – wir prüfen jedes Stück einzeln und berechnen den Wert nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie erhalten ein schriftliches Angebot. Lehnen Sie ab, senden wir Ihre Stücke kostenlos und versichert zurück.",
        ],
      },
      districts: ["Altstadt Spandau", "Siemensstadt", "Staaken", "Haselhorst", "Kladow", "Hakenfelde"],
      nearby: ["Charlottenburg", "Reinickendorf", "Falkensee", "Dallgow-Döberitz", "Potsdam", "Hennigsdorf"],
      faqs: [
        {
          question: "Muss ich für den Verkauf in die Innenstadt fahren?",
          answer:
            "Nein. Der gesamte Ankauf läuft per Versand. Sie geben Ihr Paket einfach bei einer Postfiliale oder Paketannahmestelle in Spandau ab.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht gefällt?",
          answer:
            "Dann schicken wir Ihre Stücke kostenlos und versichert an Sie zurück. Für Sie entstehen keine Kosten.",
        },
      ],
    },
    {
      slug: "neukolln",
      name: "Neukölln",
      metaTitle: "Goldankauf Neukölln – Gold & Zahngold verkaufen",
      metaDescription:
        "Von Reuterkiez bis Britz: Altgold, Goldketten, Münzen und Zahngold aus Neukölln kostenlos per Versand verkaufen – transparent nach Börsenkurs bewertet.",
      heroText:
        "Ob aus dem Reuterkiez, Britz oder Rudow: Schicken Sie Ihr Gold aus Neukölln versichert ein und erhalten Sie ein klares Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Neukölln – ehrlicher Preis statt Verhandeln.",
        paragraphs: [
          "Auf der Sonnenallee und der Karl-Marx-Straße gibt es viele Läden, die Gold ankaufen – und oft wird verhandelt. Bei uns nicht: Der Preis ergibt sich allein aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Wir kaufen Ketten, Armreifen, Ringe, Münzen, Barren und Zahngold – auch 21- und 22-karätigen Schmuck. Jedes Stück wird einzeln gewogen und geprüft.",
          "Sie schicken alles mit unserem kostenlosen Versandpaket ein und bekommen ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Reuterkiez", "Schillerkiez", "Britz", "Buckow", "Rudow", "Gropiusstadt"],
      nearby: ["Kreuzberg", "Tempelhof", "Treptow", "Mariendorf", "Baumschulenweg", "Schönefeld"],
      faqs: [
        {
          question: "Kaufen Sie auch 21- oder 22-karätigen Goldschmuck an?",
          answer:
            "Ja. Hochkarätiger Schmuck, etwa aus der Türkei, dem Nahen Osten oder Indien, wird bei uns nach seinem tatsächlichen Feingehalt bewertet.",
        },
        {
          question: "Muss ich um den Preis verhandeln?",
          answer:
            "Nein. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
      ],
    },
    {
      slug: "tempelhof",
      name: "Tempelhof",
      metaTitle: "Goldankauf Tempelhof – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Tempelhof, Mariendorf und Lichtenrade: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden – bewertet zum Börsenkurs.",
      heroText:
        "Von Mariendorf bis Lichtenrade: Verkaufen Sie Ihr Gold aus Tempelhof per Post – mit kostenlosem Versandpaket und transparenter Bewertung.",
      intro: {
        title: "Gold verkaufen in Tempelhof – so weit und frei wie das Feld.",
        paragraphs: [
          "Das Tempelhofer Feld steht für Freiraum – und genau den bekommen Sie auch beim Goldverkauf. Ohne Termin und ohne Wartezeit am Tresen schicken Sie Ihre Stücke einfach per Post an uns.",
          "Ob Familienschmuck aus Mariendorf, Goldmünzen aus Lichtenrade oder Zahngold aus Marienfelde – wir bewerten jedes Teil nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Das Angebot erhalten Sie schriftlich. Sie entscheiden in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Neu-Tempelhof", "Mariendorf", "Marienfelde", "Lichtenrade", "Schöneberg", "Friedenau"],
      nearby: ["Neukölln", "Kreuzberg", "Steglitz", "Teltow", "Mahlow", "Großbeeren"],
      faqs: [
        {
          question: "Brauche ich einen Termin?",
          answer:
            "Nein. Sie fordern das Versandpaket online an und schicken Ihre Stücke ein, wann es Ihnen passt.",
        },
        {
          question: "Gibt es eine Mindestmenge?",
          answer:
            "Nein. Auch ein einzelner Ring oder eine einzelne Münze wird geprüft und bewertet.",
        },
      ],
    },
    {
      slug: "kreuzberg",
      name: "Kreuzberg",
      metaTitle: "Goldankauf Kreuzberg – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Kreuzberg: Altgold, Schmuck, Münzen und Zahngold per Post verkaufen – kostenloses Versandpaket, faire Bewertung nach Tageskurs.",
      heroText:
        "Aus dem Bergmannkiez, dem Graefekiez oder SO36: Senden Sie Ihr Gold aus Kreuzberg versichert ein und erhalten Sie ein Angebot nach aktuellem Goldkurs.",
      intro: {
        title: "Gold verkaufen in Kreuzberg – unkompliziert, wie der Kiez.",
        paragraphs: [
          "In Kreuzberg wird nicht lange herumgeredet. Genau so funktioniert auch unser Ankauf: Paket anfordern, Gold einpacken, abschicken – und ein klares Angebot erhalten.",
          "Ob einzelne Ohrringe, eine gerissene Kette, alte Münzen oder Zahngold: Wir kaufen auch beschädigte Stücke und Bruchgold. Entscheidend sind nur Gewicht und Feingehalt.",
          "Abgerechnet wird zum Börsenkurs am Tag der Prüfung. Versand und Rückversand sind kostenlos.",
        ],
      },
      districts: ["Bergmannkiez", "Graefekiez", "Wrangelkiez", "Chamissokiez", "Reichenberger Kiez", "Mehringplatz"],
      nearby: ["Mitte", "Friedrichshain", "Neukölln", "Tempelhof", "Treptow", "Schöneberg"],
      faqs: [
        {
          question: "Nehmen Sie auch kaputten Schmuck an?",
          answer:
            "Ja. Für den Goldwert ist der Zustand egal. Auch gerissene Ketten, einzelne Ohrringe und Bruchgold werden bewertet.",
        },
        {
          question: "Wo gebe ich das Paket in Kreuzberg ab?",
          answer:
            "Bei jeder Postfiliale oder Paketannahmestelle. Wir haben kein Geschäft vor Ort – der Ankauf läuft ausschließlich per Versand.",
        },
      ],
    },
    {
      slug: "lichtenberg",
      name: "Lichtenberg",
      metaTitle: "Goldankauf Lichtenberg – Gold verkaufen zum Börsenkurs",
      metaDescription:
        "Gold verkaufen in Lichtenberg und Hohenschönhausen: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – fair bewertet.",
      heroText:
        "Von Karlshorst bis Hohenschönhausen: Verkaufen Sie Ihr Gold aus Lichtenberg per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Goldankauf für Lichtenberg – vom Plattenbau bis zur Villa in Karlshorst.",
        paragraphs: [
          "Lichtenberg ist vielfältig: Plattenbausiedlungen in Hohenschönhausen, Villen in Karlshorst, neue Wohnungen an der Rummelsburger Bucht. In fast jedem Haushalt findet sich irgendwo Gold, das nicht mehr gebraucht wird.",
          "Ob DDR-Schmuck, Eheringe oder Goldmünzen – wir prüfen jedes Stück sorgfältig und bewerten es nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie schicken alles im kostenlosen, versicherten Versandpaket ein und erhalten danach Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Friedrichsfelde", "Karlshorst", "Alt-Hohenschönhausen", "Neu-Hohenschönhausen", "Rummelsburg", "Fennpfuhl"],
      nearby: ["Friedrichshain", "Marzahn", "Hellersdorf", "Treptow", "Köpenick", "Pankow"],
      faqs: [
        {
          question: "Kaufen Sie auch Schmuck aus DDR-Zeiten an?",
          answer:
            "Ja. Auch älterer Schmuck, etwa mit 333er- oder 585er-Stempel, wird nach seinem tatsächlichen Feingehalt bewertet.",
        },
        {
          question: "Wie lange dauert es bis zur Auszahlung?",
          answer:
            "Nach Ihrer Zusage veranlassen wir die Überweisung umgehend. Die Gutschrift erfolgt in der Regel innerhalb weniger Bankarbeitstage.",
        },
      ],
    },
    {
      slug: "marzahn",
      name: "Marzahn",
      metaTitle: "Goldankauf Marzahn – Altgold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Marzahn, Biesdorf und Kaulsdorf: Schmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert, nach Tageskurs bewertet.",
      heroText:
        "Aus Marzahn-Nord, Biesdorf oder Mahlsdorf: Schicken Sie Ihr Gold versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Marzahn – bequem von zu Hause.",
        paragraphs: [
          "Von Marzahn aus ist die Fahrt in die Berliner Innenstadt lang. Für den Goldverkauf brauchen Sie sie nicht: Sie fordern unser kostenloses Versandpaket an und verschicken Ihre Stücke ganz einfach von hier aus.",
          "Ob aus der Wohnung in Marzahn-Mitte oder dem Einfamilienhaus in Biesdorf – wir kaufen Goldschmuck, Münzen, Barren und Zahngold an und bewerten nach Gewicht, Feingehalt und aktuellem Kurs.",
          "Im schriftlichen Angebot sehen Sie jede Position einzeln. Der Versand ist bis 2.500 € versichert.",
        ],
      },
      districts: ["Marzahn-Nord", "Marzahn-Mitte", "Marzahn-Süd", "Biesdorf", "Kaulsdorf", "Mahlsdorf"],
      nearby: ["Hellersdorf", "Lichtenberg", "Hohenschönhausen", "Ahrensfelde", "Hoppegarten", "Köpenick"],
      faqs: [
        {
          question: "Woran erkenne ich, ob mein Schmuck aus Gold ist?",
          answer:
            "Oft hilft ein Stempel wie 333, 585 oder 750. Fehlt er, prüfen wir den Feingehalt für Sie – kostenlos und unverbindlich.",
        },
        {
          question: "Kostet mich der Verkauf etwas?",
          answer:
            "Nein. Versandpaket, versicherter Versand und – falls Sie ablehnen – der Rückversand sind kostenlos.",
        },
      ],
    },
    {
      slug: "hellersdorf",
      name: "Hellersdorf",
      metaTitle: "Goldankauf Hellersdorf – Gold & Münzen verkaufen",
      metaDescription:
        "Gold verkaufen in Hellersdorf: Altgold, Schmuck, Goldmünzen und Zahngold kostenlos einsenden und zum aktuellen Börsenkurs verkaufen.",
      heroText:
        "Von Hellersdorf-Nord bis Kaulsdorf-Nord: Verkaufen Sie Ihr Gold per Post – mit kostenlosem Versandpaket und Bewertung nach aktuellem Goldkurs.",
      intro: {
        title: "Goldankauf für Hellersdorf – am Stadtrand, aber ohne Umweg.",
        paragraphs: [
          "Hellersdorf liegt am östlichen Rand Berlins, mit den Gärten der Welt gleich nebenan. Wer hier Gold verkaufen möchte, muss nicht quer durch die Stadt fahren – bei uns läuft alles per Versand.",
          "Wir kaufen Anlagemünzen wie Krügerrand oder Maple Leaf, Goldschmuck, Barren und Zahngold. Jedes Stück wird gewogen, geprüft und zum Tageskurs bewertet.",
          "Erst wenn Sie dem Angebot zustimmen, gilt der Verkauf. Bis dahin bleiben Ihre Stücke Ihr Eigentum.",
        ],
      },
      districts: ["Hellersdorf-Nord", "Hellersdorf-Ost", "Hellersdorf-Süd", "Kaulsdorf-Nord", "Kaulsdorf", "Mahlsdorf"],
      nearby: ["Marzahn", "Hönow", "Hoppegarten", "Neuenhagen", "Köpenick", "Lichtenberg"],
      faqs: [
        {
          question: "Kaufen Sie Krügerrand und Maple Leaf an?",
          answer:
            "Ja. Gängige Anlagemünzen kaufen wir nach Gewicht, Feingehalt und aktuellem Börsenkurs an.",
        },
        {
          question: "Was passiert mit meinen Stücken bis zu meiner Entscheidung?",
          answer:
            "Sie werden sicher bei uns verwahrt. Lehnen Sie das Angebot ab, senden wir alles kostenlos zurück.",
        },
      ],
    },
    {
      slug: "reinickendorf",
      name: "Reinickendorf",
      metaTitle: "Goldankauf Reinickendorf – Gold verkaufen per Post",
      metaDescription:
        "Goldankauf für Reinickendorf, Tegel und Frohnau: Altgold, Schmuck, Münzen und Zahngold versichert einsenden – bewertet zum Tageskurs.",
      heroText:
        "Aus Tegel, Frohnau oder dem Märkischen Viertel: Senden Sie Ihr Gold aus Reinickendorf kostenlos ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Gold verkaufen in Reinickendorf – vom Tegeler See bis Frohnau.",
        paragraphs: [
          "Reinickendorf ist grün und weitläufig: Seen, Wälder, Villenviertel in Frohnau und Hermsdorf, dazu das Märkische Viertel. Egal wo Sie wohnen – Ihr Gold verkaufen Sie bei uns ohne Anfahrt.",
          "Sie schicken Ihre Stücke im kostenlosen Versandpaket ein. Wir prüfen Gewicht und Feingehalt und berechnen den Wert zum aktuellen Börsenkurs.",
          "Bei Werten über 2.500 € organisieren wir einen kostenlosen Werttransport. Das Angebot erhalten Sie schriftlich.",
        ],
      },
      districts: ["Tegel", "Wittenau", "Frohnau", "Hermsdorf", "Heiligensee", "Märkisches Viertel"],
      nearby: ["Spandau", "Pankow", "Wedding", "Hennigsdorf", "Glienicke/Nordbahn", "Oranienburg"],
      faqs: [
        {
          question: "Ich möchte eine größere Menge Gold verkaufen. Ist das sicher?",
          answer:
            "Ja. Unser Versandpaket ist bis 2.500 € versichert. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        },
        {
          question: "Kann ich in Reinickendorf persönlich vorbeikommen?",
          answer:
            "Nein. Wir kaufen ausschließlich per Versand an und haben kein Ladengeschäft in Berlin.",
        },
      ],
    },
    {
      slug: "steglitz",
      name: "Steglitz",
      metaTitle: "Goldankauf Steglitz – Schmuck & Altgold verkaufen",
      metaDescription:
        "Gold verkaufen in Steglitz und Lichterfelde: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – fair nach Börsenkurs bewertet.",
      heroText:
        "Von Lichterfelde bis Lankwitz: Verkaufen Sie Ihr Gold aus Steglitz per Post – transparent bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Goldankauf für Steglitz – statt Einkaufsbummel auf der Schloßstraße.",
        paragraphs: [
          "Auf der Schloßstraße wird eingekauft – verkaufen können Sie Ihr Gold dagegen ganz bequem von zu Hause. Bei Cash 4 Gold läuft der Ankauf vollständig per Versand.",
          "Ob Erbschmuck aus einer Altbauwohnung in Lichterfelde, eine Münzsammlung aus Lankwitz oder Zahngold – wir bewerten jedes Stück einzeln nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie erhalten ein schriftliches Angebot und entscheiden ohne Zeitdruck.",
        ],
      },
      districts: ["Lichterfelde", "Lankwitz", "Südende", "Dahlem", "Fichtenberg"],
      nearby: ["Zehlendorf", "Tempelhof", "Schöneberg", "Wilmersdorf", "Teltow", "Kleinmachnow"],
      faqs: [
        {
          question: "Ich habe Schmuck geerbt und weiß nicht, ob er echt ist. Was tun?",
          answer:
            "Schicken Sie ihn einfach ein. Wir prüfen Material und Feingehalt. Stücke ohne Edelmetallanteil senden wir kostenlos zurück.",
        },
        {
          question: "Muss ich mich sofort entscheiden?",
          answer:
            "Nein. Sie erhalten das Angebot schriftlich und können es in Ruhe prüfen, bevor Sie zusagen oder ablehnen.",
        },
      ],
    },
    {
      slug: "zehlendorf",
      name: "Zehlendorf",
      metaTitle: "Goldankauf Zehlendorf – Gold diskret verkaufen",
      metaDescription:
        "Goldankauf für Zehlendorf, Wannsee und Nikolassee: Schmuck, Münzen, Barren und Zahngold diskret per Versand verkaufen – zum Tageskurs.",
      heroText:
        "Aus Wannsee, Schlachtensee oder Nikolassee: Senden Sie Ihr Gold aus Zehlendorf diskret und versichert ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Zehlendorf – diskret zwischen Wannsee und Krummer Lanke.",
        paragraphs: [
          "Zehlendorf ist ruhig, grün und von Villen geprägt. Hier liegen häufig wertvolle Stücke im Safe: Goldbarren, Münzsammlungen oder hochwertiger Schmuck. Wer verkauft, möchte das meist ohne Aufsehen tun.",
          "Bei uns gelingt das ohne Ladenbesuch. Sie schicken Ihre Stücke versichert per Post ein – bei Werten über 2.500 € organisieren wir einen kostenlosen Werttransport.",
          "Bewertet wird nach Gewicht, Feingehalt und aktuellem Börsenkurs. Auch Silber, Platin und Palladium kaufen wir an.",
        ],
      },
      districts: ["Wannsee", "Nikolassee", "Schlachtensee", "Krumme Lanke", "Düppel", "Zehlendorf-Süd"],
      nearby: ["Steglitz", "Dahlem", "Kleinmachnow", "Potsdam", "Teltow", "Stahnsdorf"],
      faqs: [
        {
          question: "Wie verkaufe ich größere Mengen Gold sicher?",
          answer:
            "Bei Werten über 2.500 € organisieren wir einen kostenlosen Werttransport. So sind auch Barren und größere Sammlungen abgesichert.",
        },
        {
          question: "Kaufen Sie auch Goldbarren an?",
          answer:
            "Ja. Wir kaufen Goldbarren aller gängigen Größen – bewertet nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
        },
      ],
    },
    {
      slug: "kopenick",
      name: "Köpenick",
      metaTitle: "Goldankauf Köpenick – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Köpenick: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert per Post verkaufen – bewertet nach Börsenkurs.",
      heroText:
        "Von der Altstadt Köpenick bis Friedrichshagen: Verkaufen Sie Ihr Gold per Post – mit kostenlosem Versandpaket und fairer Bewertung.",
      intro: {
        title: "Goldankauf für Köpenick – ganz ohne Hauptmann.",
        paragraphs: [
          "Der Hauptmann von Köpenick hat einst die Stadtkasse mitgenommen. Bei uns läuft es umgekehrt und ganz ehrlich: Sie schicken Ihr Gold ein und bekommen einen nachvollziehbaren Preis dafür.",
          "Ob Schmuck aus Friedrichshagen, Münzen aus Grünau oder Zahngold aus Müggelheim – wir prüfen jedes Stück einzeln und bewerten es nach Gewicht, Feingehalt und Tageskurs.",
          "Der Versand ist kostenlos und versichert. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Altstadt Köpenick", "Friedrichshagen", "Müggelheim", "Grünau", "Rahnsdorf", "Wendenschloss"],
      nearby: ["Treptow", "Adlershof", "Lichtenberg", "Erkner", "Schöneiche", "Eichwalde"],
      faqs: [
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online an, und wir schicken es Ihnen kostenlos zu. Danach legen Sie Ihre Stücke hinein und geben das Paket bei der Post ab.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Der Betrag im Angebot ist der Betrag, den Sie erhalten. Versand und Prüfung sind kostenlos.",
        },
      ],
    },
    {
      slug: "treptow",
      name: "Treptow",
      metaTitle: "Goldankauf Treptow – Altgold & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Treptow, Adlershof und Johannisthal: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – transparent zum Tageskurs.",
      heroText:
        "Aus Alt-Treptow, Baumschulenweg oder Adlershof: Schicken Sie Ihr Gold versichert ein und erhalten Sie ein Angebot nach aktuellem Goldkurs.",
      intro: {
        title: "Gold verkaufen in Treptow – von der Spree direkt zu uns.",
        paragraphs: [
          "Zwischen Treptower Park, Plänterwald und dem Wissenschaftsstandort Adlershof wohnen alteingesessene Familien neben vielen Zugezogenen. Gold, das nicht mehr gebraucht wird, findet sich überall.",
          "Bei Cash 4 Gold verkaufen Sie es unkompliziert per Post. Wir bewerten Schmuck, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und Börsenkurs am Tag der Prüfung.",
          "Das Angebot erhalten Sie schriftlich mit allen Einzelwerten. Den aktuellen Goldpreis können Sie jederzeit auf unserer Website verfolgen.",
        ],
      },
      districts: ["Alt-Treptow", "Plänterwald", "Baumschulenweg", "Johannisthal", "Adlershof", "Niederschöneweide"],
      nearby: ["Neukölln", "Kreuzberg", "Friedrichshain", "Köpenick", "Lichtenberg", "Schönefeld"],
      faqs: [
        {
          question: "Wann ist der beste Zeitpunkt zum Verkaufen?",
          answer:
            "Bewertet wird zum Börsenkurs am Tag der Prüfung. Den aktuellen Goldpreis sehen Sie auf unserer Website – so entscheiden Sie selbst, wann Sie verkaufen.",
        },
        {
          question: "Kaufen Sie auch Silbermünzen an?",
          answer:
            "Ja. Neben Gold kaufen wir Silber, Platin und Palladium an – bewertet nach dem aktuellen Kurs des jeweiligen Metalls.",
        },
      ],
    },
    {
      slug: "pankow",
      name: "Pankow",
      metaTitle: "Goldankauf Pankow – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Pankow, Prenzlauer Berg und Weißensee: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden – zum Börsenkurs.",
      heroText:
        "Von Prenzlauer Berg bis Buch: Verkaufen Sie Ihr Gold aus Pankow per Post – kostenlos, versichert und nach Tageskurs bewertet.",
      intro: {
        title: "Goldankauf für Pankow – vom Kollwitzkiez bis an den Stadtrand.",
        paragraphs: [
          "Pankow ist Berlins einwohnerstärkster Bezirk und reicht von den Altbauten in Prenzlauer Berg bis zu den Einfamilienhäusern in Buch und Französisch Buchholz. Ihr Gold verkaufen Sie von überall gleich einfach – per Post.",
          "Wir kaufen Goldschmuck, Münzen, Barren und Zahngold, auch beschädigt oder ohne Stempel. Jedes Stück wird gewogen, auf Feingehalt geprüft und zum Börsenkurs bewertet.",
          "Sie erhalten ein schriftliches Angebot. Gefällt es Ihnen nicht, schicken wir Ihre Stücke kostenlos zurück.",
        ],
      },
      districts: ["Prenzlauer Berg", "Weißensee", "Niederschönhausen", "Buch", "Heinersdorf", "Französisch Buchholz"],
      nearby: ["Mitte", "Wedding", "Reinickendorf", "Lichtenberg", "Bernau", "Panketal"],
      faqs: [
        {
          question: "Kann ich auch Schmuck ohne Stempel verkaufen?",
          answer:
            "Ja. Auch ungestempelte Stücke prüfen wir auf ihren Feingehalt. Das Ergebnis sehen Sie im Angebot, bevor Sie sich entscheiden.",
        },
        {
          question: "Wo gebe ich mein Paket in Pankow ab?",
          answer:
            "Bei jeder Postfiliale oder Paketannahmestelle. Wir haben kein Geschäft in Berlin – der Ankauf läuft ausschließlich per Versand.",
        },
      ],
    },
  ],
};

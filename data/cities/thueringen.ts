import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const THUERINGEN: State = {
  id: "thueringen",
  name: "Thüringen",
  cities: [
    {
      slug: "erfurt",
      name: "Erfurt",
      metaTitle: "Goldankauf Erfurt – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Erfurt: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Altstadt bis Daberstedt: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Erfurt bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Erfurt – in der Stadt des Erfurter Schatzes.",
        paragraphs: [
          "1998 fand man in Erfurt bei Bauarbeiten den Erfurter Schatz: Münzen, Barren und Goldschmiedearbeiten, die im Mittelalter vergraben worden waren. Heute ist er in der Alten Synagoge zu sehen, nicht weit von Krämerbrücke und Domplatz.",
          "Ihr Gold muss nicht vergraben liegen. Wir bewerten jedes Stück nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung und weisen alle Werte einzeln aus.",
          "Statt durch die Stadt zu fahren, fordern Sie unser kostenloses Versandpaket an und geben die versicherte Sendung bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Altstadt", "Andreasvorstadt", "Brühlervorstadt", "Krämpfervorstadt", "Löbervorstadt", "Daberstedt"],
      nearby: ["Weimar", "Arnstadt", "Gotha", "Sömmerda", "Nohra", "Neudietendorf"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Erfurt?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Erfurt. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "jena",
      name: "Jena",
      metaTitle: "Goldankauf Jena – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Jena: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Lobeda, Winzerla oder Wenigenjena: Senden Sie Ihr Gold aus Jena versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Jena – mit optischer Präzision.",
        paragraphs: [
          "Carl Zeiss, Ernst Abbe und Otto Schott haben Jena zur Stadt der Optik gemacht. Was hier entwickelt wird, muss auf den Mikrometer genau stimmen.",
          "So genau arbeiten auch wir: Jedes Stück wird gewogen, der Feingehalt wird bestimmt, und wir rechnen den reinen Goldanteil zum aktuellen Kurs ab.",
          "Sie schicken Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden allein Sie.",
        ],
      },
      districts: ["Zentrum", "Jena-Nord", "Jena-Ost", "Wenigenjena", "Lobeda", "Winzerla"],
      nearby: ["Apolda", "Kahla", "Stadtroda", "Bürgel", "Dornburg-Camburg", "Bad Klosterlausnitz"],
      faqs: [
        {
          question: "Wie bestimmen Sie den Feingehalt meines Goldes?",
          answer:
            "Wir prüfen jedes Stück einzeln. Punzen wie 333, 585 oder 750 sind ein erster Hinweis, maßgeblich ist aber unsere Prüfung. Das Ergebnis steht für jedes Stück im Angebot.",
        },
        {
          question: "Was kostet mich der Versand aus Jena?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "gera",
      name: "Gera",
      metaTitle: "Goldankauf Gera – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Gera: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Untermhaus bis Lusan: Verkaufen Sie Ihr Gold aus Gera per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Gera – ans Tageslicht gebracht.",
        paragraphs: [
          "Unter der Altstadt von Gera liegen die Höhler, Hunderte alte Felsenkeller, in denen früher Bier gelagert wurde. Im Stadtteil Untermhaus wurde der Maler Otto Dix geboren.",
          "Was lange im Keller oder in der Schublade lag, kann bares Geld wert sein. Wir bewerten Ihr Gold nach Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie fordern das kostenlose Versandpaket an, legen Schmuck, Münzen oder Zahngold hinein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Innenstadt", "Untermhaus", "Debschwitz", "Bieblach", "Lusan", "Langenberg"],
      nearby: ["Bad Köstritz", "Ronneburg", "Weida", "Schmölln", "Zeulenroda-Triebes", "Meuselwitz"],
      faqs: [
        {
          question: "Kann ich mein Gold in Gera persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Gera. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
      ],
    },
    {
      slug: "weimar",
      name: "Weimar",
      metaTitle: "Goldankauf Weimar – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Weimar: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Altstadt, der Westvorstadt oder Schöndorf: Senden Sie Ihr Gold aus Weimar versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Weimar – klassisch fair.",
        paragraphs: [
          "Goethe und Schiller machten Weimar zum Zentrum der deutschen Klassik, und 1919 wurde hier das Bauhaus gegründet. Die Herzogin Anna Amalia Bibliothek gehört zu den schönsten Bibliotheken der Welt.",
          "Klassisch ist auch unser Prinzip: Ein fairer Preis ergibt sich aus Gewicht, Feingehalt und dem aktuellen Börsenkurs – für jedes Stück einzeln ausgewiesen.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots ganz in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Altstadt", "Westvorstadt", "Nordvorstadt", "Südstadt", "Oberweimar", "Schöndorf"],
      nearby: ["Erfurt", "Apolda", "Bad Berka", "Blankenhain", "Kromsdorf", "Mellingen"],
      faqs: [
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "gotha",
      name: "Gotha",
      metaTitle: "Goldankauf Gotha – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Gotha: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Innenstadt bis Siebleben: Verkaufen Sie Altgold, Schmuck und Münzen aus Gotha bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Gotha – mit dem Blick eines Münzkabinetts.",
        paragraphs: [
          "Über Gotha erhebt sich Schloss Friedenstein, einst Residenz der Herzöge von Sachsen-Gotha. Im Schloss bewahrt das Münzkabinett eine der bedeutendsten Münzsammlungen Deutschlands auf.",
          "Auch Ihre Münzen, Barren und Schmuckstücke prüfen wir einzeln: Wir wiegen sie, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Das kostenlose Versandpaket kommt zu Ihnen nach Hause. Sie geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Gotha-West", "Gotha-Ost", "Siebleben", "Sundhausen", "Uelleben"],
      nearby: ["Waltershausen", "Friedrichroda", "Ohrdruf", "Bad Langensalza", "Drei Gleichen", "Nessetal"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldmünzen an?",
          answer:
            "Ja. Wir kaufen Anlagemünzen wie Krügerrand oder Maple Leaf ebenso wie ältere Goldmünzen. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "eisenach",
      name: "Eisenach",
      metaTitle: "Goldankauf Eisenach – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Eisenach: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Innenstadt, der Südstadt oder Stockhausen: Senden Sie Ihr Gold aus Eisenach versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Eisenach – in klaren Worten.",
        paragraphs: [
          "Auf der Wartburg übersetzte Martin Luther das Neue Testament ins Deutsche, damit jeder es verstehen konnte. In Eisenach wurde außerdem Johann Sebastian Bach geboren.",
          "Verständlich soll auch Ihr Angebot sein: Für jedes Stück stehen Gewicht, Feingehalt und der Kurs, zu dem wir rechnen, klar und ohne Fachchinesisch darin.",
          "Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Innenstadt", "Nordstadt", "Südstadt", "Stockhausen", "Stedtfeld", "Hötzelsroda"],
      nearby: ["Wutha-Farnroda", "Hörselberg-Hainich", "Gerstungen", "Treffurt", "Werra-Suhl-Tal", "Ruhla"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Eisenach?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Eisenach. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
      ],
    },
    {
      slug: "nordhausen",
      name: "Nordhausen",
      metaTitle: "Goldankauf Nordhausen – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Nordhausen: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von der Innenstadt bis Salza: Verkaufen Sie Ihr Gold aus Nordhausen per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Nordhausen – unverfälscht wie ein guter Korn.",
        paragraphs: [
          "Nordhausen am Südrand des Harzes ist seit Jahrhunderten für seinen Korn bekannt. Von hier startet die Harzquerbahn, und am Rathaus steht der Roland als Zeichen städtischer Freiheit.",
          "Unverfälscht ist auch unsere Bewertung: Wir wiegen jedes Stück, bestimmen den Feingehalt und berechnen den reinen Goldanteil zum aktuellen Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Salza", "Niedersalza", "Krimderode", "Bielen", "Sundhausen"],
      nearby: ["Ellrich", "Harztor", "Werther", "Heringen", "Bleicherode", "Kelbra"],
      faqs: [
        {
          question: "Kann ich auch einzelne Ohrringe oder kaputte Ketten einsenden?",
          answer:
            "Ja. Einzelne Ohrringe, gerissene Ketten oder verbogene Ringe kaufen wir genauso an. Bewertet wird allein der Goldgehalt.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "muhlhausen",
      name: "Mühlhausen",
      metaTitle: "Goldankauf Mühlhausen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Mühlhausen/Thüringen: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Altstadt, Felchta oder Görmar: Senden Sie Ihr Gold aus Mühlhausen versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Mühlhausen – auf Augenhöhe.",
        paragraphs: [
          "Mühlhausen war Freie Reichsstadt, und die begehbare Stadtmauer umschließt bis heute eine Altstadt voller Kirchtürme. Im Bauernkrieg kämpfte Thomas Müntzer von hier aus für mehr Gerechtigkeit.",
          "Gerecht soll auch Ihr Goldverkauf sein: Sie sehen für jedes Stück Gewicht, Feingehalt und Kurs und entscheiden selbst, ob Sie das Angebot annehmen.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Altstadt", "Felchta", "Görmar", "Windeberg", "Grabe", "Seebach"],
      nearby: ["Bad Langensalza", "Unstruttal", "Anrode", "Schlotheim", "Vogtei", "Dünwald"],
      faqs: [
        {
          question: "Ist meine Sendung aus Mühlhausen versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Das Angebot ist unverbindlich. Lehnen Sie ab, senden wir Ihnen Ihre Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "suhl",
      name: "Suhl",
      metaTitle: "Goldankauf Suhl – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Suhl: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Suhl-Mitte bis Goldlauter: Verkaufen Sie Altgold, Schmuck und Münzen aus Suhl bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Suhl – wo sogar ein Ortsteil Gold im Namen trägt.",
        paragraphs: [
          "Suhl liegt mitten im Thüringer Wald und hat eine lange Tradition in der Metallverarbeitung. Bekannt wurde die Stadt durch ihr Büchsenmacherhandwerk und die Simson-Mopeds, und ein Ortsteil heißt sogar Goldlauter.",
          "Wer sich mit Metall auskennt, will genaue Zahlen. Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Suhl-Mitte", "Suhl-Nord", "Heinrichs", "Albrechts", "Goldlauter-Heidersbach", "Dietzhausen"],
      nearby: ["Zella-Mehlis", "Schleusingen", "Oberhof", "Schmiedefeld", "Kühndorf", "Rohr"],
      faqs: [
        {
          question: "Kann ich mein Gold in Suhl persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Suhl. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kaufen Sie auch Goldbarren an?",
          answer:
            "Ja. Wir kaufen Goldbarren in allen gängigen Größen an. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
      ],
    },
    {
      slug: "arnstadt",
      name: "Arnstadt",
      metaTitle: "Goldankauf Arnstadt – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Arnstadt: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Innenstadt, Rudisleben oder Angelhausen-Oberndorf: Senden Sie Ihr Gold aus Arnstadt versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Arnstadt – bis ins Kleinste genau.",
        paragraphs: [
          "Arnstadt wurde schon 704 erwähnt und gilt als älteste Stadt Thüringens. Hier trat der junge Bach seine erste Organistenstelle an, und im Schlossmuseum zeigt die Puppenstadt Mon plaisir das Hofleben bis ins kleinste Detail.",
          "Bis ins Kleinste genau prüfen auch wir: Gewicht und Feingehalt jedes Stücks werden bestimmt und zum aktuellen Börsenkurs abgerechnet.",
          "Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Innenstadt", "Rabenhold", "Rudisleben", "Angelhausen-Oberndorf", "Siegelbach", "Dosdorf"],
      nearby: ["Erfurt", "Ilmenau", "Stadtilm", "Plaue", "Amt Wachsenburg", "Elleben"],
      faqs: [
        {
          question: "Muss ich Edelsteine vorher entfernen?",
          answer:
            "Nein. Schmuck mit Steinen nehmen wir ebenfalls an. Bewertet wird der Goldanteil – die Steine berücksichtigen wir beim Gewicht entsprechend.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "ilmenau",
      name: "Ilmenau",
      metaTitle: "Goldankauf Ilmenau – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Ilmenau: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von der Innenstadt bis Manebach: Verkaufen Sie Ihr Gold aus Ilmenau per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Ilmenau – über allen Gipfeln ist Ruh.",
        paragraphs: [
          "Auf dem Kickelhahn bei Ilmenau schrieb Goethe die Zeilen „Über allen Gipfeln ist Ruh“ an die Wand einer Jagdhütte. Heute prägen die Technische Universität und der Thüringer Wald die Stadt.",
          "Ruhe finden Sie auch beim Goldverkauf: Kein Termin, kein Verhandeln. Das kostenlose Versandpaket kommt zu Ihnen, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot. Ohne Zeitdruck entscheiden Sie, ob Sie annehmen.",
        ],
      },
      districts: ["Innenstadt", "Unterpörlitz", "Roda", "Manebach", "Langewiesen", "Gehren"],
      nearby: ["Arnstadt", "Stützerbach", "Elgersburg", "Martinroda", "Geratal", "Großbreitenbach"],
      faqs: [
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
        {
          question: "Was kostet mich der Versand aus Ilmenau?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "rudolstadt",
      name: "Rudolstadt",
      metaTitle: "Goldankauf Rudolstadt – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Rudolstadt: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Volkstedt, Schwarza oder der Innenstadt: Senden Sie Ihr Gold aus Rudolstadt versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Rudolstadt – mit Sinn für Wertvolles.",
        paragraphs: [
          "Über Rudolstadt thront Schloss Heidecksburg, und im Stadtteil Volkstedt wird seit dem 18. Jahrhundert Porzellan gefertigt. 1788 begegneten sich hier Goethe und Schiller zum ersten Mal.",
          "Wer Wertvolles schätzt, will wissen, was es wert ist. Wir bewerten Ihr Gold nach Gewicht, Feingehalt und dem aktuellen Börsenkurs und weisen jeden Wert einzeln aus.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden Sie.",
        ],
      },
      districts: ["Innenstadt", "Volkstedt", "Schwarza", "Cumbach", "Mörla", "Pflanzwirbach"],
      nearby: ["Saalfeld", "Bad Blankenburg", "Uhlstädt-Kirchhasel", "Remda-Teichel", "Königsee", "Kahla"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Rudolstadt?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Rudolstadt. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
      ],
    },
    {
      slug: "sondershausen",
      name: "Sondershausen",
      metaTitle: "Goldankauf Sondershausen – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Sondershausen: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Innenstadt bis Jecha: Verkaufen Sie Altgold, Schmuck und Münzen aus Sondershausen bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Sondershausen – Schätze aus der Tiefe.",
        paragraphs: [
          "In Sondershausen wurde über hundert Jahre lang Kali abgebaut, und im Erlebnisbergwerk kann man heute hunderte Meter tief einfahren. Über der Stadt steht das Schloss der Fürsten von Schwarzburg-Sondershausen.",
          "Ihre Schätze müssen Sie nicht aus der Tiefe holen, ein Blick in die Schmuckschatulle genügt. Wir bewerten jedes Stück nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Jecha", "Stockhausen", "Großfurra", "Berka", "Bebra"],
      nearby: ["Greußen", "Ebeleben", "Bad Frankenhausen", "Kyffhäuserland", "Helbedündorf", "Nordhausen"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "meiningen",
      name: "Meiningen",
      metaTitle: "Goldankauf Meiningen – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Meiningen: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Innenstadt, Dreißigacker oder Welkershausen: Senden Sie Ihr Gold aus Meiningen versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Meiningen – ohne großes Theater.",
        paragraphs: [
          "Meiningen ist eine Theaterstadt: Unter Herzog Georg II. gingen die Meininger mit ihren Inszenierungen auf Gastspielreisen durch ganz Europa. Bis heute prägen Theater und Schloss Elisabethenburg die Stadt an der Werra.",
          "Beim Goldverkauf machen wir dagegen kein großes Theater: Gewicht, Feingehalt und Kurs ergeben Ihren Preis – für jedes Stück einzeln und schriftlich.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Innenstadt", "Jerusalem", "Dreißigacker", "Welkershausen", "Herpf", "Walldorf"],
      nearby: ["Wasungen", "Rhönblick", "Grabfeld", "Untermaßfeld", "Kühndorf", "Rohr"],
      faqs: [
        {
          question: "Kann ich mein Gold in Meiningen persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Meiningen. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "apolda",
      name: "Apolda",
      metaTitle: "Goldankauf Apolda – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Apolda: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von der Innenstadt bis Oberroßla: Verkaufen Sie Ihr Gold aus Apolda per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Apolda – ein Angebot, das gut klingt.",
        paragraphs: [
          "Apolda ist die Glockenstadt: Über Jahrhunderte wurden hier Glocken gegossen, die heute in Kirchen weit über Thüringen hinaus läuten. Außerdem züchtete Louis Dobermann hier die nach ihm benannte Hunderasse.",
          "Ein gutes Angebot muss stimmig klingen. Deshalb wiegen wir jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab. Nach der Prüfung erhalten Sie ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Herressen-Sulzbach", "Oberroßla", "Utenbach", "Schöten", "Zottelstedt"],
      nearby: ["Weimar", "Jena", "Bad Sulza", "Ilmtal-Weinstraße", "Kromsdorf", "Dornburg-Camburg"],
      faqs: [
        {
          question: "Ist meine Sendung aus Apolda versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
      ],
    },
  ],
};

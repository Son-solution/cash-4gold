import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const BRANDENBURG: State = {
  id: "brandenburg",
  name: "Brandenburg",
  cities: [
    {
      slug: "potsdam",
      name: "Potsdam",
      metaTitle: "Goldankauf Potsdam – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Potsdam: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Babelsberg bis Bornstedt: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Potsdam bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Potsdam – so gelassen wie ein Spaziergang durch Sanssouci.",
        paragraphs: [
          "In der Landeshauptstadt zwischen Schlössern, Seen und Filmstudios geht vieles in Ruhe. So soll es auch beim Goldverkauf sein: Sie fordern unser kostenloses Versandpaket an, packen Ihre Stücke ein und geben die versicherte Sendung bei der Post ab.",
          "Ob Erbschmuck aus einer Villa in der Berliner Vorstadt, Goldmünzen aus Babelsberg oder Zahngold aus Drewitz – wir bewerten jedes Stück einzeln nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie erhalten ein schriftliches Angebot und entscheiden ohne Druck. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Babelsberg", "Bornstedt", "Potsdam West", "Drewitz", "Golm", "Groß Glienicke"],
      nearby: ["Werder (Havel)", "Teltow", "Kleinmachnow", "Michendorf", "Beelitz", "Berlin-Zehlendorf"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Potsdam?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Potsdam. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kaufen Sie auch Silber, Platin und Palladium an?",
          answer:
            "Ja. Neben Gold kaufen wir auch Silber, Platin und Palladium an. Alles wird nach dem aktuellen Kurs des jeweiligen Metalls bewertet.",
        },
      ],
    },
    {
      slug: "cottbus",
      name: "Cottbus",
      metaTitle: "Goldankauf Cottbus – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Cottbus und die Lausitz: Altgold, Goldschmuck, Münzen und Zahngold per Versand verkaufen – transparent nach Tageskurs bewertet.",
      heroText:
        "Ob aus Sandow, Ströbitz oder Sachsendorf: Senden Sie Ihr Gold aus Cottbus versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Cottbus – fair bewertet, mitten in der Lausitz.",
        paragraphs: [
          "Cottbus ist das Zentrum der Lausitz und das Tor zum Spreewald. Hier wie überall in der Region gibt es Schmuck und Münzen, die lange aufbewahrt wurden – und deren Wert heute oft überrascht.",
          "Bei Cash 4 Gold finden Sie diesen Wert heraus, ohne einen Laden zu suchen. Sie schicken Ihre Stücke kostenlos per Post ein, wir prüfen Gewicht und Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Jede Position steht einzeln im Angebot. Lehnen Sie ab, senden wir alles kostenlos und versichert zurück.",
        ],
      },
      districts: ["Sandow", "Ströbitz", "Sachsendorf", "Schmellwitz", "Madlow", "Branitz"],
      nearby: ["Forst (Lausitz)", "Spremberg", "Guben", "Peitz", "Burg (Spreewald)", "Drebkau"],
      faqs: [
        {
          question: "Kaufen Sie auch Gold aus dem Spreewald und der ganzen Lausitz an?",
          answer:
            "Ja. Da wir ausschließlich per Versand ankaufen, ist es egal, ob Sie in Cottbus, Guben oder Burg wohnen – der Ablauf ist überall gleich.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht gefällt?",
          answer:
            "Dann schicken wir Ihre Stücke kostenlos und versichert an Sie zurück. Für Sie entstehen keine Kosten.",
        },
      ],
    },
    {
      slug: "brandenburg-an-der-havel",
      name: "Brandenburg an der Havel",
      metaTitle: "Goldankauf Brandenburg an der Havel – Gold verkaufen",
      metaDescription:
        "Gold verkaufen in Brandenburg an der Havel: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden und nach Börsenkurs bewerten lassen.",
      heroText:
        "Von der Dominsel bis Görden: Verkaufen Sie Ihr Gold aus Brandenburg an der Havel per Post – mit kostenlosem Versandpaket und transparenter Bewertung.",
      intro: {
        title: "Gold verkaufen in der Wiege der Mark – einfach per Post.",
        paragraphs: [
          "Brandenburg an der Havel ist die älteste Stadt der Mark und hat dem ganzen Land seinen Namen gegeben. Über Jahrhunderte gewachsener Familienbesitz findet sich hier in vielen Haushalten – darunter oft Gold, das niemand mehr trägt.",
          "Sie können es bei uns ohne Weg in die Innenstadt verkaufen. Das Versandpaket ist kostenlos, die Sendung bis 2.500 € versichert.",
          "Wir prüfen jedes Stück auf Gewicht und Feingehalt und bewerten zum Börsenkurs am Tag der Prüfung. Das Angebot erhalten Sie schriftlich.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Dominsel", "Hohenstücken", "Görden", "Plaue"],
      nearby: ["Premnitz", "Kloster Lehnin", "Werder (Havel)", "Wusterwitz", "Ziesar", "Rathenow"],
      faqs: [
        {
          question: "Wie sende ich mein Gold ein?",
          answer:
            "Sie fordern online ein kostenloses Versandpaket an, legen Ihre Stücke hinein und geben das Paket bei der Post ab. Die Sendung ist bis 2.500 € versichert.",
        },
        {
          question: "Kann ich auch Schmuck ohne Stempel verkaufen?",
          answer:
            "Ja. Auch ungestempelte Stücke prüfen wir auf ihren Feingehalt. Das Ergebnis sehen Sie im Angebot, bevor Sie sich entscheiden.",
        },
      ],
    },
    {
      slug: "frankfurt-oder",
      name: "Frankfurt (Oder)",
      metaTitle: "Goldankauf Frankfurt (Oder) – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Frankfurt (Oder): Altgold, Schmuck, Münzen und Zahngold per Post verkaufen – kostenloses Versandpaket, Bewertung nach Tageskurs.",
      heroText:
        "Aus dem Zentrum, Neuberesinchen oder Güldendorf: Schicken Sie Ihr Gold aus Frankfurt (Oder) versichert ein und erhalten Sie ein Angebot zum Börsenkurs.",
      intro: {
        title: "Goldankauf für Frankfurt an der Oder – transparent bis zur letzten Zahl.",
        paragraphs: [
          "Frankfurt (Oder) liegt direkt an der Grenze zu Polen und ist mit der Viadrina eine Universitätsstadt mit internationalem Flair. Für Sie zählt beim Goldverkauf aber vor allem eins: ein Preis, den Sie nachvollziehen können.",
          "Genau den bekommen Sie bei uns. Wir bewerten Ihre Stücke allein nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung – jede Position steht einzeln im Angebot.",
          "Sie schicken alles im kostenlosen, versicherten Versandpaket ein und entscheiden danach in Ruhe.",
        ],
      },
      districts: ["Zentrum", "Neuberesinchen", "Beresinchen", "Hansa Nord", "Westkreuz", "Güldendorf"],
      nearby: ["Lebus", "Müllrose", "Eisenhüttenstadt", "Fürstenwalde", "Briesen (Mark)", "Seelow"],
      faqs: [
        {
          question: "Wie wird der Preis für mein Gold berechnet?",
          answer:
            "Wir bestimmen Gewicht und Feingehalt jedes Stücks und berechnen den reinen Goldanteil zum aktuellen Börsenkurs. Alle Werte stehen im Angebot.",
        },
        {
          question: "Muss ich mich sofort entscheiden?",
          answer:
            "Nein. Sie erhalten das Angebot schriftlich und können es in Ruhe prüfen, bevor Sie zusagen oder ablehnen.",
        },
      ],
    },
    {
      slug: "oranienburg",
      name: "Oranienburg",
      metaTitle: "Goldankauf Oranienburg – Altgold verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Oranienburg: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden und nach aktuellem Börsenkurs transparent bewerten lassen.",
      heroText:
        "Von Lehnitz bis Friedrichsthal: Verkaufen Sie Ihr Gold aus Oranienburg per Post – kostenlos, versichert und fair nach Tageskurs bewertet.",
      intro: {
        title: "Gold verkaufen in Oranienburg – vom Schlossplatz direkt zu uns.",
        paragraphs: [
          "Oranienburg mit seinem Barockschloss an der Havel liegt nah an Berlin und doch im Grünen. Wer hier Gold verkaufen möchte, muss nicht in die Hauptstadt fahren – das Versandpaket kommt zu Ihnen nach Hause.",
          "Wir kaufen Goldschmuck, Münzen, Barren und Zahngold – auch beschädigt oder einzeln. Jedes Stück wird gewogen und auf Feingehalt geprüft.",
          "Abgerechnet wird zum Börsenkurs am Tag der Bewertung. Nach Ihrer Zusage überweisen wir den Betrag direkt auf Ihr Konto.",
        ],
      },
      districts: ["Innenstadt", "Sachsenhausen", "Lehnitz", "Friedrichsthal", "Germendorf", "Schmachtenhagen"],
      nearby: ["Hennigsdorf", "Velten", "Birkenwerder", "Hohen Neuendorf", "Liebenwalde", "Kremmen"],
      faqs: [
        {
          question: "Muss ich für den Verkauf nach Berlin fahren?",
          answer:
            "Nein. Wir kaufen ausschließlich per Versand an. Sie geben Ihr Paket bei einer Postfiliale in Oranienburg ab.",
        },
        {
          question: "Nehmen Sie auch kaputten Schmuck an?",
          answer:
            "Ja. Für den Goldwert ist der Zustand egal. Auch gerissene Ketten, einzelne Ohrringe und Bruchgold werden bewertet.",
        },
      ],
    },
    {
      slug: "falkensee",
      name: "Falkensee",
      metaTitle: "Goldankauf Falkensee – Gold & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Falkensee: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Finkenkrug, Seegefeld oder Falkenhagen: Senden Sie Ihr Gold aus Falkensee versichert ein und erhalten Sie ein klares Angebot.",
      intro: {
        title: "Goldankauf für Falkensee – passend zum Pendleralltag.",
        paragraphs: [
          "Falkensee ist eine der am schnellsten gewachsenen Städte Brandenburgs. Viele pendeln täglich nach Berlin – für einen Termin beim Goldankäufer bleibt da wenig Zeit.",
          "Bei uns brauchen Sie keinen. Sie fordern das kostenlose Versandpaket online an und geben es auf dem Weg zur Arbeit bei der Post ab.",
          "Wir prüfen Schmuck, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und aktuellem Börsenkurs und schicken Ihnen ein schriftliches Angebot.",
        ],
      },
      districts: ["Falkenhagen", "Seegefeld", "Finkenkrug", "Neufinkenkrug", "Falkenhöh"],
      nearby: ["Dallgow-Döberitz", "Schönwalde-Glien", "Nauen", "Brieselang", "Wustermark", "Berlin-Spandau"],
      faqs: [
        {
          question: "Brauche ich einen Termin?",
          answer:
            "Nein. Sie fordern das Versandpaket online an und schicken Ihre Stücke ein, wann es Ihnen passt.",
        },
        {
          question: "Kaufen Sie Krügerrand und andere Anlagemünzen an?",
          answer:
            "Ja. Gängige Anlagemünzen wie Krügerrand, Maple Leaf oder Philharmoniker kaufen wir zum aktuellen Goldkurs an.",
        },
      ],
    },
    {
      slug: "bernau",
      name: "Bernau",
      metaTitle: "Goldankauf Bernau – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Bernau bei Berlin: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Von der Altstadt bis Schönow: Verkaufen Sie Ihr Gold aus Bernau per Post – mit kostenlosem Versandpaket und Bewertung nach aktuellem Goldkurs.",
      intro: {
        title: "Gold verkaufen in Bernau – sicherer als hinter der Stadtmauer.",
        paragraphs: [
          "Bernaus mittelalterliche Stadtmauer hat einst Hab und Gut der Bürger geschützt. Heute schützt eine Versicherung Ihr Gold auf dem Weg zu uns – bis 2.500 € im Standardpaket, darüber per kostenlosem Werttransport.",
          "Ob Schmuck, Münzen, Barren oder Zahngold: Wir prüfen jedes Stück einzeln und bewerten es nach Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie erhalten ein schriftliches Angebot. Erst nach Ihrer Zusage gilt der Verkauf.",
        ],
      },
      districts: ["Altstadt", "Friedenstal", "Schönow", "Ladeburg", "Waldfrieden", "Lobetal"],
      nearby: ["Panketal", "Wandlitz", "Biesenthal", "Werneuchen", "Ahrensfelde", "Berlin-Pankow"],
      faqs: [
        {
          question: "Wie ist mein Paket abgesichert?",
          answer:
            "Unser Versandpaket ist bis 2.500 € versichert. Bei höheren Werten organisieren wir einen kostenlosen Werttransport.",
        },
        {
          question: "Gibt es eine Annahmestelle in Bernau?",
          answer:
            "Nein. Wir haben kein Geschäft vor Ort – der Ankauf läuft ausschließlich per Versand.",
        },
      ],
    },
    {
      slug: "eberswalde",
      name: "Eberswalde",
      metaTitle: "Goldankauf Eberswalde – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Eberswalde und den Barnim: Altgold, Schmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert, zum Tageskurs.",
      heroText:
        "Aus Finow, dem Westend oder dem Brandenburgischen Viertel: Schicken Sie Ihr Gold aus Eberswalde versichert ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Eberswalde – vom Finowkanal bis in den Barnim.",
        paragraphs: [
          "Eberswalde liegt am Finowkanal, umgeben von Wäldern und der Schorfheide. Viele Menschen in der Region wohnen weit verstreut – ein Ankäufer in der Nähe ist nicht selbstverständlich.",
          "Mit Cash 4 Gold spielt das keine Rolle. Sie bekommen das Versandpaket kostenlos zugeschickt, legen Ihre Stücke hinein und geben es bei der nächsten Postfiliale ab.",
          "Wir bewerten nach Gewicht, Feingehalt und Börsenkurs am Tag der Prüfung und listen jede Position einzeln im Angebot auf.",
        ],
      },
      districts: ["Westend", "Finow", "Brandenburgisches Viertel", "Nordend", "Clara-Zetkin-Siedlung", "Sommerfelde"],
      nearby: ["Chorin", "Bad Freienwalde", "Schorfheide", "Britz", "Biesenthal", "Angermünde"],
      faqs: [
        {
          question: "Ich wohne auf dem Land im Barnim – geht das trotzdem?",
          answer:
            "Ja. Da wir nur per Versand ankaufen, ist Ihr Wohnort egal. Sie brauchen nur eine Postfiliale oder Paketannahmestelle.",
        },
        {
          question: "Kostet mich der Verkauf etwas?",
          answer:
            "Nein. Versandpaket, versicherter Versand und – falls Sie ablehnen – der Rückversand sind kostenlos.",
        },
      ],
    },
    {
      slug: "neuruppin",
      name: "Neuruppin",
      metaTitle: "Goldankauf Neuruppin – Gold verkaufen zum Börsenkurs",
      metaDescription:
        "Gold verkaufen in Neuruppin: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden, nach Börsenkurs bewerten lassen und sicher verkaufen.",
      heroText:
        "Von der Altstadt bis Alt Ruppin: Verkaufen Sie Ihr Gold aus Neuruppin per Post – transparent bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in der Fontanestadt – ohne Wanderung durch die Mark.",
        paragraphs: [
          "Theodor Fontane, Neuruppins berühmtester Sohn, ist für seine Wanderungen durch die Mark Brandenburg bekannt. Für den Goldverkauf müssen Sie keinen Schritt vor die Tür machen, außer bis zur nächsten Postfiliale.",
          "Wir kaufen Ringe, Ketten, Münzen, Barren und Zahngold an. Jedes Stück wird einzeln gewogen, geprüft und zum aktuellen Börsenkurs bewertet.",
          "Das Angebot erhalten Sie schriftlich mit allen Einzelwerten. Gefällt es Ihnen nicht, schicken wir alles kostenlos zurück.",
        ],
      },
      districts: ["Altstadt", "Alt Ruppin", "Gildenhall", "Wuthenow", "Treskow", "Buskow"],
      nearby: ["Rheinsberg", "Fehrbellin", "Lindow", "Kyritz", "Wusterhausen/Dosse", "Wittstock"],
      faqs: [
        {
          question: "Gibt es eine Mindestmenge?",
          answer:
            "Nein. Auch ein einzelner Ring oder eine einzelne Münze wird geprüft und bewertet.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, veranlassen wir die Überweisung. Die Gutschrift erfolgt in der Regel innerhalb weniger Bankarbeitstage.",
        },
      ],
    },
    {
      slug: "konigs-wusterhausen",
      name: "Königs Wusterhausen",
      metaTitle: "Goldankauf Königs Wusterhausen – Gold verkaufen",
      metaDescription:
        "Goldankauf für Königs Wusterhausen: Altgold, Schmuck, Münzen und Zahngold versichert per Post verkaufen – bewertet zum aktuellen Tageskurs.",
      heroText:
        "Aus Zernsdorf, Niederlehme oder Senzig: Senden Sie Ihr Gold aus Königs Wusterhausen kostenlos ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Königs Wusterhausen – klare Signale statt Rauschen.",
        paragraphs: [
          "Vom Funkerberg in Königs Wusterhausen ging einst die erste Rundfunksendung Deutschlands in den Äther. Beim Goldverkauf setzen wir auf genauso klare Signale: einen Preis, der sich aus Gewicht, Feingehalt und Börsenkurs ergibt – ohne Verhandeln.",
          "Sie schicken Ihre Stücke im kostenlosen Versandpaket ein. Wir prüfen sie sorgfältig und führen jede Position einzeln im Angebot auf.",
          "Erst nach Ihrer Zusage überweisen wir den Betrag. Bis dahin bleiben Ihre Stücke Ihr Eigentum.",
        ],
      },
      districts: ["Zernsdorf", "Niederlehme", "Senzig", "Diepensee", "Wernsdorf", "Kablow"],
      nearby: ["Wildau", "Zeuthen", "Eichwalde", "Schönefeld", "Mittenwalde", "Bestensee"],
      faqs: [
        {
          question: "Muss ich um den Preis verhandeln?",
          answer:
            "Nein. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
        {
          question: "Was passiert mit meinen Stücken bis zu meiner Entscheidung?",
          answer:
            "Sie werden sicher bei uns verwahrt. Lehnen Sie das Angebot ab, senden wir alles kostenlos zurück.",
        },
      ],
    },
    {
      slug: "senftenberg",
      name: "Senftenberg",
      metaTitle: "Goldankauf Senftenberg – Altgold verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Senftenberg und im Lausitzer Seenland: Schmuck, Münzen und Zahngold kostenlos einsenden – fair nach Börsenkurs bewertet.",
      heroText:
        "Von der Altstadt bis Brieske: Verkaufen Sie Ihr Gold aus Senftenberg per Post – mit kostenlosem Versandpaket und zügiger Überweisung.",
      intro: {
        title: "Gold verkaufen in Senftenberg – aus der Bergbauregion ans Seenland.",
        paragraphs: [
          "Wo früher Braunkohle abgebaut wurde, liegt heute das Lausitzer Seenland mit dem Senftenberger See im Mittelpunkt. Gold aus der Erde holt hier niemand mehr – aber in vielen Schubladen liegt noch welches.",
          "Ob alte Eheringe, Ketten, Münzen oder Zahngold: Sie schicken alles kostenlos und versichert an uns. Wir prüfen Gewicht und Feingehalt und bewerten zum aktuellen Börsenkurs.",
          "Das Angebot kommt schriftlich. Sie entscheiden, ob Sie verkaufen.",
        ],
      },
      districts: ["Altstadt", "Brieske", "Hosena", "Großkoschen", "Sedlitz", "Peickwitz"],
      nearby: ["Lauchhammer", "Schwarzheide", "Großräschen", "Ruhland", "Spremberg", "Hoyerswerda"],
      faqs: [
        {
          question: "Woran erkenne ich, ob mein Schmuck aus Gold ist?",
          answer:
            "Oft hilft ein Stempel wie 333, 585 oder 750. Fehlt er, prüfen wir den Feingehalt für Sie – kostenlos und unverbindlich.",
        },
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online an, und wir schicken es Ihnen kostenlos zu. Danach legen Sie Ihre Stücke hinein und geben das Paket bei der Post ab.",
        },
      ],
    },
    {
      slug: "luckenwalde",
      name: "Luckenwalde",
      metaTitle: "Goldankauf Luckenwalde – Gold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Luckenwalde und den Fläming: Altgold, Schmuck, Münzen und Zahngold per Versand verkaufen – transparent nach Tageskurs bewertet.",
      heroText:
        "Aus der Innenstadt, Frankenfelde oder Kolzenburg: Schicken Sie Ihr Gold aus Luckenwalde versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Luckenwalde – solide Arbeit wie in der alten Hutfabrik.",
        paragraphs: [
          "Luckenwalde hat eine lange Industriegeschichte – von Tuchmachern bis zur berühmten Hutfabrik von Erich Mendelsohn. Ehrliche, sorgfältige Arbeit hat hier Tradition, und genau so prüfen wir Ihr Gold.",
          "Jedes Stück wird gewogen, auf Feingehalt geprüft und zum Börsenkurs am Tag der Bewertung berechnet. Im Angebot sehen Sie alle Werte im Detail.",
          "Der Versand ist kostenlos und bis 2.500 € versichert. Nach Ihrer Zusage erhalten Sie den Betrag per Überweisung.",
        ],
      },
      districts: ["Innenstadt", "Frankenfelde", "Kolzenburg"],
      nearby: ["Jüterbog", "Trebbin", "Nuthe-Urstromtal", "Ludwigsfelde", "Zossen", "Baruth/Mark"],
      faqs: [
        {
          question: "Ich habe Schmuck geerbt und weiß nicht, ob er echt ist. Was tun?",
          answer:
            "Schicken Sie ihn einfach ein. Wir prüfen Material und Feingehalt. Stücke ohne Edelmetallanteil senden wir kostenlos zurück.",
        },
        {
          question: "Kann ich in Luckenwalde persönlich vorbeikommen?",
          answer:
            "Nein. Wir kaufen ausschließlich per Versand an und haben kein Ladengeschäft vor Ort.",
        },
      ],
    },
    {
      slug: "furstenwalde",
      name: "Fürstenwalde",
      metaTitle: "Goldankauf Fürstenwalde – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Fürstenwalde/Spree: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Innenstadt bis Ketschendorf: Verkaufen Sie Ihr Gold aus Fürstenwalde per Post – kostenlos, versichert und nach Tageskurs bewertet.",
      intro: {
        title: "Gold verkaufen in Fürstenwalde – zwischen Spree und Dom.",
        paragraphs: [
          "Fürstenwalde an der Spree liegt zwischen Berlin und Frankfurt (Oder) – gut angebunden, aber für den Goldverkauf müssen Sie in keine der beiden Städte fahren. Bei uns läuft alles per Post.",
          "Wir kaufen Goldschmuck, Münzen, Barren und Zahngold, auch Bruchgold und Einzelstücke. Bewertet wird nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Sie bekommen ein schriftliches Angebot mit allen Einzelwerten und entscheiden in Ruhe.",
        ],
      },
      districts: ["Innenstadt", "Fürstenwalde Nord", "Fürstenwalde Süd", "Ketschendorf", "Trebus"],
      nearby: ["Bad Saarow", "Storkow", "Erkner", "Rauen", "Berkenbrück", "Frankfurt (Oder)"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldbarren an?",
          answer:
            "Ja. Wir kaufen Goldbarren aller gängigen Größen – bewertet nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Der Betrag im Angebot ist der Betrag, den Sie erhalten. Versand und Prüfung sind kostenlos.",
        },
      ],
    },
    {
      slug: "schwedt",
      name: "Schwedt",
      metaTitle: "Goldankauf Schwedt – Altgold & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Schwedt/Oder und die Uckermark: Altgold, Schmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert, zum Tageskurs.",
      heroText:
        "Aus der Innenstadt, Talsand oder Vierraden: Senden Sie Ihr Gold aus Schwedt versichert ein und erhalten Sie ein Angebot nach aktuellem Goldkurs.",
      intro: {
        title: "Goldankauf für Schwedt – am Rand der Uckermark, ohne lange Wege.",
        paragraphs: [
          "Schwedt an der Oder liegt im Nordosten Brandenburgs, mitten zwischen Nationalpark Unteres Odertal und Uckermark. Die Wege sind hier oft weit – zum Glück nicht für den Goldverkauf.",
          "Sie fordern unser kostenloses Versandpaket an und schicken Ihre Stücke versichert ein. Wir prüfen Schmuck, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und Börsenkurs.",
          "Das Angebot erhalten Sie schriftlich. Den aktuellen Goldpreis können Sie jederzeit auf unserer Website verfolgen.",
        ],
      },
      districts: ["Innenstadt", "Talsand", "Am Waldrand", "Kunow", "Criewen", "Vierraden"],
      nearby: ["Angermünde", "Gartz (Oder)", "Pinnow", "Casekow", "Mescherin", "Prenzlau"],
      faqs: [
        {
          question: "Wann ist der beste Zeitpunkt zum Verkaufen?",
          answer:
            "Bewertet wird zum Börsenkurs am Tag der Prüfung. Den aktuellen Goldpreis sehen Sie auf unserer Website – so entscheiden Sie selbst, wann Sie verkaufen.",
        },
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja. Zahngold enthält oft einen hohen Goldanteil. Sie können es auch mit Zahnresten einsenden – wir bewerten den Edelmetallanteil.",
        },
      ],
    },
    {
      slug: "rathenow",
      name: "Rathenow",
      metaTitle: "Goldankauf Rathenow – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Rathenow: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert per Post verkaufen – genau nach Börsenkurs bewertet.",
      heroText:
        "Von der Altstadt bis Göttlin: Verkaufen Sie Ihr Gold aus Rathenow per Post – mit kostenlosem Versandpaket und genauer Bewertung.",
      intro: {
        title: "Gold verkaufen in der Stadt der Optik – genau hingeschaut.",
        paragraphs: [
          "Rathenow gilt als Wiege der deutschen optischen Industrie. Präzises Hinsehen hat hier Tradition – und genau das tun wir auch bei Ihrem Gold: Jedes Stück wird gewogen und sein Feingehalt bestimmt.",
          "Bewertet wird zum Börsenkurs am Tag der Prüfung. Im schriftlichen Angebot sehen Sie jede Position einzeln und können alles nachvollziehen.",
          "Versand und eventueller Rückversand sind für Sie kostenlos. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Rathenow-Nord", "Rathenow-West", "Göttlin", "Semlin"],
      nearby: ["Premnitz", "Milower Land", "Friesack", "Rhinow", "Havelaue", "Brandenburg an der Havel"],
      faqs: [
        {
          question: "Wie wird der Feingehalt meines Goldes bestimmt?",
          answer:
            "Wir prüfen jedes Stück einzeln und bestimmen den tatsächlichen Goldanteil. Das Ergebnis wird im Angebot zusammen mit dem Gewicht aufgeführt.",
        },
        {
          question: "Kaufen Sie auch Silbermünzen an?",
          answer:
            "Ja. Neben Gold kaufen wir Silber, Platin und Palladium an – bewertet nach dem aktuellen Kurs des jeweiligen Metalls.",
        },
      ],
    },
  ],
};

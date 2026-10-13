import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const NORDRHEIN_WESTFALEN: State = {
  id: "nordrhein-westfalen",
  name: "Nordrhein-Westfalen",
  cities: [
    {
      slug: "koln",
      name: "Köln",
      metaTitle: "Goldankauf Köln – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Köln: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Ehrenfeld bis Deutz: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Köln bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Köln – et hätt noch immer jot jejange.",
        paragraphs: [
          "Köln lebt in seinen Veedeln, vom Belgischen Viertel bis Nippes. Über allem steht der Dom, an dem fast 600 Jahre gebaut wurde, und im Karneval steht die ganze Stadt Kopf.",
          "Gut gehen soll auch Ihr Goldverkauf, und dafür muss nichts dem Zufall überlassen bleiben: Ihr Angebot ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Sie fordern unser kostenloses Versandpaket an, geben Ihre Stücke versichert bei der Post ab und entscheiden nach Erhalt des schriftlichen Angebots.",
        ],
      },
      districts: ["Altstadt", "Ehrenfeld", "Nippes", "Deutz", "Sülz", "Rodenkirchen"],
      nearby: ["Leverkusen", "Bergisch Gladbach", "Hürth", "Frechen", "Pulheim", "Brühl"],
      faqs: [
        {
          question: "Gibt es eine Filiale von Cash 4 Gold in Köln?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Köln. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie wird der Preis berechnet?",
          answer:
            "Wir bestimmen Gewicht und Feingehalt jedes Stücks und berechnen den reinen Goldanteil zum aktuellen Börsenkurs. Alle Werte stehen einzeln im Angebot.",
        },
      ],
    },
    {
      slug: "dusseldorf",
      name: "Düsseldorf",
      metaTitle: "Goldankauf Düsseldorf – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Düsseldorf: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Oberkassel, Pempelfort oder Benrath: Senden Sie Ihr Gold aus Düsseldorf versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Düsseldorf – Kö-Niveau beim Service, Börsenkurs beim Preis.",
        paragraphs: [
          "Auf der Königsallee reihen sich Juweliere und Luxusboutiquen aneinander, nur ein paar Schritte weiter beginnt die Altstadt mit der „längsten Theke der Welt“. Dazwischen liegt die Landeshauptstadt am Rhein mit Rheinturm und Medienhafen.",
          "Glänzender Schmuck wird hier gern gekauft, aber irgendwann auch wieder verkauft. Wir bewerten ihn nach dem, was beim Goldankauf zählt: Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden Ihre Stücke im neutralen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots in Ruhe.",
        ],
      },
      districts: ["Altstadt", "Oberkassel", "Pempelfort", "Bilk", "Benrath", "Kaiserswerth"],
      nearby: ["Neuss", "Ratingen", "Meerbusch", "Hilden", "Erkrath", "Mettmann"],
      faqs: [
        {
          question: "Wird Markenschmuck höher bewertet?",
          answer:
            "Wir kaufen Gold nach seinem Materialwert an, also nach Gewicht und Feingehalt zum Börsenkurs. So bleibt der Preis für Sie jederzeit nachvollziehbar.",
        },
        {
          question: "Ist das Versandpaket neutral verpackt?",
          answer:
            "Ja. Von außen ist nicht zu erkennen, dass sich Gold in der Sendung befindet. Sie ist trotzdem vollständig versichert.",
        },
      ],
    },
    {
      slug: "dortmund",
      name: "Dortmund",
      metaTitle: "Goldankauf Dortmund – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Dortmund: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden, präzise prüfen lassen und nach Börsenkurs bezahlt werden.",
      heroText:
        "Von Hörde bis Brackel: Verkaufen Sie Ihr Gold aus Dortmund per Post – nachvollziehbar geprüft und nach Tageskurs abgerechnet.",
      intro: {
        title: "Gold verkaufen in Dortmund – echte Liebe zu ehrlichen Preisen.",
        paragraphs: [
          "Dortmund ist Fußball, Bier und Ruhrpott: Wenn im Westfalenstadion die Südtribüne bebt, hört man es in der halben Stadt. Wo früher Stahl gekocht wurde, liegt heute der Phoenix-See, und das Dortmunder U ist das Wahrzeichen der Innenstadt.",
          "Im Pott sagt man, was Sache ist. Bei uns heißt das: Ihr Preis ergibt sich aus Gewicht, Feingehalt und Börsenkurs – Zeile für Zeile im Angebot.",
          "Sie senden Ihre Stücke kostenlos und versichert ein. Gefällt Ihnen das Angebot nicht, bekommen Sie alles kostenlos zurück.",
        ],
      },
      districts: ["Innenstadt", "Kreuzviertel", "Hörde", "Hombruch", "Aplerbeck", "Brackel"],
      nearby: ["Lünen", "Schwerte", "Castrop-Rauxel", "Unna", "Witten", "Holzwickede"],
      faqs: [
        {
          question: "Muss ich um den Preis verhandeln?",
          answer:
            "Nein. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
        {
          question: "Was passiert, wenn ich das Angebot ablehne?",
          answer:
            "Dann schicken wir Ihre Stücke kostenlos und versichert an Sie zurück. Für Sie entstehen keine Kosten.",
        },
      ],
    },
    {
      slug: "essen",
      name: "Essen",
      metaTitle: "Goldankauf Essen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Essen: Altgold, Ketten, Ringe, Münzen und Zahngold versichert einsenden und nach aktuellem Goldkurs verkaufen.",
      heroText:
        "Ob aus Rüttenscheid, Werden oder Steele: Schicken Sie Ihr Gold aus Essen kostenlos ein und erhalten Sie ein Angebot nach Tageskurs.",
      intro: {
        title: "Goldankauf für Essen – vom schwarzen zum gelben Gold.",
        paragraphs: [
          "Auf der Zeche Zollverein wurde einst Kohle gefördert, das „schwarze Gold“ des Ruhrgebiets. Heute ist sie UNESCO-Welterbe, und Essen hat sich vom Bergbau zur grünen Großstadt mit Baldeneysee und Villa Hügel gewandelt.",
          "Wir kümmern uns um das gelbe Gold: Ringe, Ketten, Münzen und Zahngold bewerten wir nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots.",
        ],
      },
      districts: ["Rüttenscheid", "Werden", "Kettwig", "Steele", "Borbeck", "Kray"],
      nearby: ["Mülheim an der Ruhr", "Gelsenkirchen", "Bottrop", "Velbert", "Gladbeck", "Hattingen"],
      faqs: [
        {
          question: "Welche Goldstücke kann ich einsenden?",
          answer:
            "Altgold, Ketten, Ringe, Armbänder, Ohrringe, Münzen, Barren und Zahngold. Auch einzelne Ohrringe oder gerissene Ketten werden nach ihrem Goldgehalt bewertet.",
        },
        {
          question: "Wann bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, überweisen wir den Betrag auf Ihr Konto. Vorher wird nichts verkauft.",
        },
      ],
    },
    {
      slug: "duisburg",
      name: "Duisburg",
      metaTitle: "Goldankauf Duisburg – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Duisburg: Goldschmuck, Münzen, Barren und Zahngold kostenlos einsenden – geprüft nach Gewicht und Feingehalt, bezahlt nach Börsenkurs.",
      heroText:
        "Von Ruhrort bis Rheinhausen: Verkaufen Sie Ihr Gold aus Duisburg bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Duisburg – gut verschifft und sicher angekommen.",
        paragraphs: [
          "In Duisburg fließt die Ruhr in den Rhein, und hier liegt der größte Binnenhafen Europas. Im Landschaftspark Nord leuchtet nachts das alte Hüttenwerk, und der Innenhafen ist zum beliebten Treffpunkt geworden.",
          "Wo so viel Ware umgeschlagen wird, weiß man, wie wichtig ein sicherer Transport ist. Unser Versandpaket ist kostenlos und vom Abgeben bis zur Ankunft versichert.",
          "Wir prüfen jedes Stück nach Gewicht und Feingehalt und schicken Ihnen ein schriftliches Angebot zum Börsenkurs.",
        ],
      },
      districts: ["Altstadt", "Ruhrort", "Meiderich", "Hamborn", "Rheinhausen", "Homberg"],
      nearby: ["Moers", "Oberhausen", "Dinslaken", "Mülheim an der Ruhr", "Krefeld", "Rheinberg"],
      faqs: [
        {
          question: "Ist mein Gold auf dem Postweg versichert?",
          answer:
            "Ja. Unser Versandpaket ist kostenlos und versichert – vom Abgeben bei der Post bis zur Ankunft bei uns.",
        },
        {
          question: "Welche Legierungen kaufen Sie an?",
          answer:
            "Alle gängigen Legierungen von 333er bis 999er Gold. Wir bestimmen den Feingehalt jedes Stücks und rechnen entsprechend ab.",
        },
      ],
    },
    {
      slug: "bochum",
      name: "Bochum",
      metaTitle: "Goldankauf Bochum – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Bochum: Altgold, Schmuck, Münzen und Zahngold kostenlos per Post einsenden und nach Tageskurs verkaufen – versichert und transparent.",
      heroText:
        "Ob aus Wattenscheid, Langendreer oder Stiepel: Senden Sie Ihr Gold aus Bochum versichert ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Bochum – tief im Westen, klar im Preis.",
        paragraphs: [
          "Herbert Grönemeyer hat Bochum ein Denkmal gesungen. Das Deutsche Bergbau-Museum erinnert an die Zechenzeit, im Bermudadreieck wird gefeiert, und Starlight Express läuft hier seit über dreißig Jahren.",
          "Bochum ist eine Stadt ohne Schnörkel, und so arbeiten wir auch: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Das kostenlose, versicherte Versandpaket kommt zu Ihnen nach Hause. Erst wenn Sie dem Angebot zustimmen, überweisen wir den Betrag.",
        ],
      },
      districts: ["Innenstadt", "Wattenscheid", "Langendreer", "Linden", "Weitmar", "Stiepel"],
      nearby: ["Herne", "Witten", "Hattingen", "Gelsenkirchen", "Dortmund", "Essen"],
      faqs: [
        {
          question: "Ich weiß nicht, ob mein Schmuck echt ist. Was nun?",
          answer:
            "Senden Sie ihn trotzdem ein. Wir prüfen jedes Stück. Ist etwas nicht aus Edelmetall, sagen wir es Ihnen und schicken es kostenlos zurück.",
        },
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
      ],
    },
    {
      slug: "wuppertal",
      name: "Wuppertal",
      metaTitle: "Goldankauf Wuppertal – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Wuppertal: Goldschmuck, Münzen, Barren und Zahngold versichert einsenden – sorgfältig geprüft und nach Börsenkurs bezahlt.",
      heroText:
        "Von Elberfeld bis Ronsdorf: Verkaufen Sie Ihr Gold aus Wuppertal per Post – geprüft nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Wuppertal – ohne Treppen, ohne Schwebebahn.",
        paragraphs: [
          "Seit 1901 schwebt die Schwebebahn über der Wupper und verbindet Vohwinkel, Elberfeld und Barmen. Wer in Wuppertal wohnt, kennt außerdem die vielen Treppen, die die steilen Hänge hinaufführen. Friedrich Engels wurde hier geboren.",
          "Für den Goldverkauf müssen Sie weder Treppen steigen noch durch die Stadt fahren: Sie fordern unser kostenloses Versandpaket an und geben es bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs und schicken Ihnen ein schriftliches Angebot.",
        ],
      },
      districts: ["Elberfeld", "Barmen", "Vohwinkel", "Ronsdorf", "Cronenberg", "Oberbarmen"],
      nearby: ["Solingen", "Remscheid", "Velbert", "Haan", "Schwelm", "Sprockhövel"],
      faqs: [
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online bei uns an. Wir schicken es Ihnen kostenlos zu, und Sie geben die versicherte Sendung bei der Post ab.",
        },
        {
          question: "Kaufen Sie auch Silber an?",
          answer:
            "Ja. Neben Gold kaufen wir auch Silber, Platin und Palladium an – etwa Silberbesteck, Silbermünzen oder Barren. Alles kann im selben Paket mitgeschickt werden.",
        },
      ],
    },
    {
      slug: "bielefeld",
      name: "Bielefeld",
      metaTitle: "Goldankauf Bielefeld – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Bielefeld: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Tageskurs.",
      heroText:
        "Ob aus Schildesche, Brackwede oder Sennestadt: Senden Sie Ihr Gold aus Bielefeld kostenlos ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Bielefeld – uns gibt es wirklich.",
        paragraphs: [
          "Bielefeld gibt es nicht, behauptet ein alter Internetwitz. Wer unter der Sparrenburg wohnt, an der Universität studiert oder bei der Arminia mitfiebert, weiß es besser.",
          "Wir sind genauso real: Sie fordern unser kostenloses Versandpaket an, schicken Ihre Stücke versichert ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
          "Der Preis ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung. Erst nach Ihrer Zusage wird überwiesen.",
        ],
      },
      districts: ["Mitte", "Schildesche", "Brackwede", "Sennestadt", "Heepen", "Gadderbaum"],
      nearby: ["Gütersloh", "Herford", "Bad Salzuflen", "Halle (Westf.)", "Oerlinghausen", "Leopoldshöhe"],
      faqs: [
        {
          question: "Woran erkenne ich, dass der Ankauf seriös ist?",
          answer:
            "Sie erhalten vor dem Verkauf ein schriftliches Angebot mit Gewicht, Feingehalt und Kurs. Erst wenn Sie zustimmen, wird verkauft. Lehnen Sie ab, bekommen Sie alles kostenlos zurück.",
        },
        {
          question: "Brauche ich Belege oder Zertifikate?",
          answer:
            "Nein. Wir prüfen Ihre Stücke selbst. Belege sind nicht nötig, um Gold bei uns zu verkaufen.",
        },
      ],
    },
    {
      slug: "bonn",
      name: "Bonn",
      metaTitle: "Goldankauf Bonn – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Bonn: Goldschmuck, Münzen und Zahngold kostenlos per Post einsenden – nach Gewicht und Feingehalt geprüft, nach Börsenkurs bezahlt.",
      heroText:
        "Von Bad Godesberg bis Beuel: Verkaufen Sie Ihr Gold aus Bonn bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Bonn – im richtigen Takt.",
        paragraphs: [
          "In Bonn wurde Ludwig van Beethoven geboren, und jahrzehntelang war die Stadt am Rhein Bundeshauptstadt. Heute arbeiten auf dem UN-Campus Organisationen der Vereinten Nationen, und im Frühling blühen in der Altstadt die Kirschbäume.",
          "Ihren Goldverkauf bestimmen Sie im eigenen Takt: Paket anfordern, Stücke einsenden, Angebot prüfen. Niemand drängt Sie zu einer Entscheidung.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs. Lehnen Sie ab, schicken wir alles kostenlos zurück.",
        ],
      },
      districts: ["Zentrum", "Bad Godesberg", "Beuel", "Poppelsdorf", "Endenich", "Duisdorf"],
      nearby: ["Sankt Augustin", "Siegburg", "Königswinter", "Troisdorf", "Bornheim", "Meckenheim"],
      faqs: [
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Sie entscheiden frei. Lehnen Sie ab, schicken wir Ihre Stücke kostenlos und versichert zurück.",
        },
        {
          question: "Kaufen Sie auch Goldmünzen und Barren?",
          answer:
            "Ja. Barren und Münzen wie Krügerrand, Maple Leaf oder Philharmoniker bewerten wir nach Feingewicht zum aktuellen Kurs.",
        },
      ],
    },
    {
      slug: "munster",
      name: "Münster",
      metaTitle: "Goldankauf Münster – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Münster: Altgold, Goldschmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus dem Kreuzviertel, Hiltrup oder Gievenbeck: Senden Sie Ihr Gold aus Münster versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Münster – einfacher als eine Fahrt mit der Leeze.",
        paragraphs: [
          "In Münster fährt man Fahrrad, hier „Leeze“ genannt, und zwar bei jedem Wetter. Die Giebelhäuser am Prinzipalmarkt, der Dom und die Promenade rund um die Altstadt machen die Universitätsstadt unverwechselbar.",
          "Ihr Gold muss nicht auf den Gepäckträger: Sie geben es im kostenlosen, versicherten Versandpaket bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot zum Börsenkurs.",
        ],
      },
      districts: ["Altstadt", "Kreuzviertel", "Hiltrup", "Gievenbeck", "Wolbeck", "Kinderhaus"],
      nearby: ["Greven", "Telgte", "Senden", "Havixbeck", "Nottuln", "Drensteinfurt"],
      faqs: [
        {
          question: "Wo gebe ich das Paket ab?",
          answer:
            "In jeder Postfiliale oder Packstation. Die Sendung ist kostenlos und versichert, Sie zahlen kein Porto.",
        },
        {
          question: "Muss ich meinen Schmuck vorher reinigen oder sortieren?",
          answer:
            "Nein. Sie können alles so einsenden, wie es ist. Wir sortieren und prüfen jedes Stück selbst.",
        },
      ],
    },
    {
      slug: "aachen",
      name: "Aachen",
      metaTitle: "Goldankauf Aachen – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Aachen: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Burtscheid bis Brand: Verkaufen Sie Ihr Gold aus Aachen per Post – nachvollziehbar geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Aachen – mit kaiserlichem Anspruch.",
        paragraphs: [
          "Karl der Große machte Aachen zu seiner Lieblingspfalz. Der Dom war 1978 die erste deutsche Stätte auf der UNESCO-Welterbeliste, und im Domschatz glänzen Gold und Edelsteine aus über tausend Jahren.",
          "Ihr Schmuck muss kein Kaiserschatz sein, damit er sich verkaufen lässt. Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des Angebots.",
        ],
      },
      districts: ["Innenstadt", "Burtscheid", "Brand", "Laurensberg", "Eilendorf", "Richterich"],
      nearby: ["Herzogenrath", "Würselen", "Stolberg", "Eschweiler", "Roetgen", "Simmerath"],
      faqs: [
        {
          question: "Kaufen Sie auch geerbten Schmuck?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Kaufen Sie auch Schmuck mit Edelsteinen an?",
          answer:
            "Ja. Wir bewerten den Edelmetallanteil eines Schmuckstücks. Steine fließen nicht in den Goldpreis ein.",
        },
      ],
    },
    {
      slug: "gelsenkirchen",
      name: "Gelsenkirchen",
      metaTitle: "Goldankauf Gelsenkirchen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Gelsenkirchen: Altgold, Ketten, Ringe, Münzen und Zahngold versichert einsenden und nach aktuellem Goldkurs verkaufen.",
      heroText:
        "Ob aus Buer, Schalke oder Horst: Schicken Sie Ihr Gold aus Gelsenkirchen kostenlos ein und erhalten Sie ein Angebot nach Tageskurs.",
      intro: {
        title: "Goldankauf für Gelsenkirchen – blau-weiß und ehrlich.",
        paragraphs: [
          "Gelsenkirchen war einst die „Stadt der tausend Feuer“, weil über den Zechen und Kokereien nachts die Flammen leuchteten. Heute steht der Name vor allem für Schalke 04, und im Nordsternpark ist aus einer Zeche ein Park geworden.",
          "Wer hier aufgewachsen ist, schätzt klare Ansagen. Bei uns sind das Gewicht, Feingehalt und Börsenkurs – daraus ergibt sich Ihr Preis, sonst nichts.",
          "Sie senden alles im kostenlosen, versicherten Paket ein. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Altstadt", "Buer", "Schalke", "Horst", "Erle", "Ückendorf"],
      nearby: ["Essen", "Bochum", "Herten", "Gladbeck", "Bottrop", "Herne"],
      faqs: [
        {
          question: "Ist der Versand wirklich kostenlos?",
          answer:
            "Ja. Versandpaket, Porto und Versicherung übernehmen wir. Auch eine Rücksendung kostet Sie nichts.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "monchengladbach",
      name: "Mönchengladbach",
      metaTitle: "Goldankauf Mönchengladbach – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Mönchengladbach: Goldschmuck, Münzen, Barren und Zahngold kostenlos per Post einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Von Rheydt bis Wickrath: Verkaufen Sie Ihr Gold aus Mönchengladbach bequem per Post – geprüft nach Gewicht und Feingehalt.",
      intro: {
        title: "Gold verkaufen in Mönchengladbach – so gradlinig wie ein Fohlen-Konter.",
        paragraphs: [
          "Mönchengladbach ist die Stadt der Fohlen: Die Borussia hat hier Fußballgeschichte geschrieben. Früher war die Stadt ein Zentrum der Textilindustrie, heute ziehen das Museum Abteiberg und Schloss Rheydt Besucher an.",
          "Beim Goldverkauf geht es bei uns ohne Umwege: Paket anfordern, Stücke einsenden, Angebot prüfen. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs.",
          "Lehnen Sie ab, schicken wir Ihnen alles kostenlos und versichert zurück.",
        ],
      },
      districts: ["Gladbach", "Rheydt", "Wickrath", "Odenkirchen", "Neuwerk", "Giesenkirchen"],
      nearby: ["Viersen", "Korschenbroich", "Jüchen", "Willich", "Grevenbroich", "Erkelenz"],
      faqs: [
        {
          question: "Wie lange dauert der Verkauf?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
        {
          question: "Kaufen Sie auch alte Uhren mit Goldgehäuse?",
          answer:
            "Ja, Uhren mit Gehäuse oder Armband aus Gold bewerten wir nach ihrem Goldanteil. Das Uhrwerk selbst fließt nicht in den Preis ein.",
        },
      ],
    },
    {
      slug: "krefeld",
      name: "Krefeld",
      metaTitle: "Goldankauf Krefeld – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Krefeld: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – nach aktuellem Tageskurs bewertet.",
      heroText:
        "Ob aus Uerdingen, Bockum oder Fischeln: Senden Sie Ihr Gold aus Krefeld kostenlos ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Krefeld – fein wie Samt und Seide.",
        paragraphs: [
          "Krefeld ist die Samt- und Seidenstadt: Mit feinen Stoffen wurde die Stadt im 18. und 19. Jahrhundert reich. Die Burg Linn und die Villen Haus Lange und Haus Esters von Mies van der Rohe zeigen, wie vielfältig sie ist.",
          "So sorgfältig wie die Seidenweber arbeiten wir auch: Jedes Stück wird gewogen und auf seinen Feingehalt geprüft, bevor wir es zum Börsenkurs bewerten.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Uerdingen", "Linn", "Bockum", "Hüls", "Fischeln"],
      nearby: ["Meerbusch", "Willich", "Tönisvorst", "Moers", "Kempen", "Duisburg"],
      faqs: [
        {
          question: "Wie genau wird mein Gold gewogen?",
          answer:
            "Wir wiegen jedes Stück einzeln auf einer geeichten Waage. Das Gewicht steht für jede Position in Ihrem Angebot.",
        },
        {
          question: "Lohnt sich der Versand auch für wenige Stücke?",
          answer:
            "Ja. Versand und Versicherung sind kostenlos, egal ob Sie einen einzelnen Ring oder eine ganze Schmuckschatulle einsenden.",
        },
      ],
    },
    {
      slug: "oberhausen",
      name: "Oberhausen",
      metaTitle: "Goldankauf Oberhausen – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Oberhausen: Goldschmuck, Münzen und Zahngold versichert per Post einsenden – fair geprüft und nach Börsenkurs bezahlt.",
      heroText:
        "Von Sterkrade bis Osterfeld: Verkaufen Sie Ihr Gold aus Oberhausen per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Oberhausen – ganz ohne Einkaufstrubel.",
        paragraphs: [
          "Oberhausen gilt als Wiege der Ruhrindustrie: In der St.-Antony-Hütte wurde schon im 18. Jahrhundert Eisen gegossen. Heute stehen der Gasometer mit seinen Ausstellungen und das CentrO für die Stadt.",
          "Wer im CentrO einkauft, kennt den Trubel am Samstag. Ihren Goldverkauf erledigen Sie bei uns ganz in Ruhe von zu Hause: Paket anfordern, einpacken, bei der Post abgeben.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot zum Börsenkurs.",
        ],
      },
      districts: ["Alt-Oberhausen", "Sterkrade", "Osterfeld", "Schmachtendorf", "Holten", "Lirich"],
      nearby: ["Mülheim an der Ruhr", "Duisburg", "Bottrop", "Dinslaken", "Essen", "Gladbeck"],
      faqs: [
        {
          question: "Woran erkenne ich, wie viel Gold in einem Stück steckt?",
          answer:
            "Oft verrät es ein Stempel wie 333, 585 oder 750. Fehlt er, ist das kein Problem: Wir bestimmen den Feingehalt bei der Prüfung selbst.",
        },
        {
          question: "Wie schnell erhalte ich ein Angebot?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und senden Ihnen das Angebot zu.",
        },
      ],
    },
  ],
};

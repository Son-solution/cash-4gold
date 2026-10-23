import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const BAYERN: State = {
  id: "bayern",
  name: "Bayern",
  cities: [
    {
      slug: "munchen",
      name: "München",
      metaTitle: "Goldankauf München – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Von Schwabing bis Pasing: Altgold, Schmuck, Münzen und Barren aus München versichert per Post verkaufen – transparent bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Schwabing bis Giesing: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus München bequem per Post – bewertet nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
      intro: {
        title: "Gold verkaufen in München – ohne Termin, ohne Stau am Mittleren Ring.",
        paragraphs: [
          "In der Landeshauptstadt ist Zeit oft knapper als Parkplätze. Bei Cash 4 Gold verkaufen Sie Ihr Gold deshalb komplett per Versand: kostenloses Versandpaket anfordern, Stücke versichert einschicken, schriftliches Angebot erhalten.",
          "Ob die geerbte Goldkette aus Bogenhausen, Krügerrand-Münzen aus einer Sammlung in Pasing oder Zahngold, das seit Jahren in Sendling in der Schublade liegt – wir bewerten jedes Stück einzeln nach Gewicht, Feingehalt und Tageskurs.",
          "Erst wenn Sie dem Angebot zustimmen, überweisen wir den Betrag. Gefällt es Ihnen nicht, senden wir Ihre Stücke kostenlos und versichert zurück.",
        ],
      },
      districts: ["Schwabing", "Haidhausen", "Pasing", "Bogenhausen", "Sendling", "Giesing"],
      nearby: ["Freising", "Dachau", "Erding", "Fürstenfeldbruck", "Starnberg", "Garching"],
      faqs: [
        {
          question: "Gibt es eine Filiale in München, in der ich mein Gold abgeben kann?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein – ganz ohne Fahrt in die Innenstadt.",
        },
        {
          question: "Lohnt sich der Verkauf von Goldmünzen gerade jetzt?",
          answer:
            "Bewertet wird zum Börsenkurs am Tag der Prüfung. Den aktuellen Goldpreis sehen Sie jederzeit auf unserer Website – so können Sie selbst entscheiden, wann der richtige Moment für Sie ist.",
        },
      ],
    },
    {
      slug: "nurnberg",
      name: "Nürnberg",
      metaTitle: "Goldankauf Nürnberg – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Nürnberg: Altgold, Goldschmuck, Münzen und Zahngold per Versand verkaufen – transparent nach Tageskurs bewertet, kostenlos und versichert.",
      heroText:
        "Ob aus Gostenhof, St. Johannis oder Langwasser: Senden Sie Ihr Gold aus Nürnberg versichert ein und erhalten Sie ein transparentes Angebot nach aktuellem Börsenkurs.",
      intro: {
        title: "Goldankauf für Nürnberg – fair bewertet, sicher verschickt.",
        paragraphs: [
          "Nürnberg hat eine lange Tradition im Handwerk und Handel – und genau so nachvollziehbar sollte auch der Verkauf Ihres Goldes sein. Statt Angebote in der Altstadt zu vergleichen, schicken Sie Ihre Stücke einfach per Post an uns.",
          "Wir kaufen Ringe, Ketten, Armbänder, Münzen, Barren und Zahngold – auch defekt, verbogen oder einzeln. Entscheidend sind allein Gewicht, Feingehalt und der Börsenkurs am Tag der Bewertung.",
          "Der Versand ist für Sie kostenlos und bis 2.500 € versichert. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        ],
      },
      districts: ["Gostenhof", "St. Johannis", "Langwasser", "Maxfeld", "Eibach", "Wöhrd"],
      nearby: ["Fürth", "Erlangen", "Schwabach", "Lauf an der Pegnitz", "Stein", "Zirndorf"],
      faqs: [
        {
          question: "Kaufen Sie auch Gold aus der Metropolregion Nürnberg an?",
          answer:
            "Ja. Da wir nur per Versand ankaufen, spielt es keine Rolle, ob Sie in Nürnberg, Schwabach oder Lauf wohnen – der Ablauf ist überall in Deutschland gleich.",
        },
        {
          question: "Nehmen Sie auch einzelne Ohrringe oder kaputte Ketten?",
          answer:
            "Ja. Auch Einzelstücke und beschädigter Schmuck haben ihren Goldwert. Wir wiegen und prüfen jedes Teil und führen es einzeln im Angebot auf.",
        },
      ],
    },
    {
      slug: "augsburg",
      name: "Augsburg",
      metaTitle: "Goldankauf Augsburg – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Augsburg, Lechhausen und Haunstetten: Altgold, Ketten, Münzen und Zahngold kostenlos einsenden und zum Tageskurs verkaufen.",
      heroText:
        "Von Lechhausen bis Haunstetten: Verkaufen Sie Ihr Gold aus Augsburg per Post – mit kostenlosem Versandpaket, transparenter Bewertung und zügiger Überweisung.",
      intro: {
        title: "Gold verkaufen in der Fuggerstadt – einfach von zu Hause.",
        paragraphs: [
          "Augsburg war einst Sitz der Fugger, eines der reichsten Handelshäuser Europas. Heute geht der Goldverkauf deutlich unkomplizierter: Sie fordern unser kostenloses Versandpaket an und schicken Ihre Stücke versichert ein.",
          "Nach dem Eingang prüfen wir Gewicht und Feingehalt jedes Stücks – vom alten Ehering bis zum Goldbarren – und berechnen den Wert auf Basis des aktuellen Börsenkurses.",
          "Sie erhalten ein schriftliches, nachvollziehbares Angebot. Nach Ihrer Zusage wird der Betrag direkt auf Ihr Konto überwiesen.",
        ],
      },
      districts: ["Lechhausen", "Haunstetten", "Göggingen", "Oberhausen", "Pfersee", "Hochzoll"],
      nearby: ["Friedberg", "Neusäß", "Gersthofen", "Königsbrunn", "Stadtbergen", "Aichach"],
      faqs: [
        {
          question: "Wie sende ich mein Gold aus Augsburg ein?",
          answer:
            "Sie fordern online ein kostenloses Versandpaket an, legen Ihre Stücke hinein und geben das Paket bei der Post ab. Die Sendung ist bis 2.500 € versichert.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihre Stücke kostenlos und versichert an Sie zurück. Es entstehen Ihnen keine Kosten.",
        },
      ],
    },
    {
      slug: "regensburg",
      name: "Regensburg",
      metaTitle: "Goldankauf Regensburg – Gold & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Regensburg und die Oberpfalz: Altgold, Schmuck, Goldmünzen und Zahngold versichert per Post verkaufen – bewertet zum Tageskurs.",
      heroText:
        "Aus der Altstadt, Stadtamhof oder Burgweinting: Schicken Sie Ihr Gold aus Regensburg versichert ein und erhalten Sie ein Angebot zum aktuellen Börsenkurs.",
      intro: {
        title: "Goldankauf für Regensburg – so solide wie die Steinerne Brücke.",
        paragraphs: [
          "Regensburg verbindet über 2.000 Jahre Geschichte mit einer lebendigen Universitätsstadt. Viele Familien hier besitzen Schmuck und Münzen, die über Generationen weitergegeben wurden – und irgendwann stellt sich die Frage nach ihrem Wert.",
          "Bei Cash 4 Gold erfahren Sie diesen Wert, ohne einen Laden aufsuchen zu müssen. Sie schicken Ihre Stücke per Post ein, wir prüfen Gewicht und Feingehalt und rechnen zum aktuellen Goldkurs ab.",
          "Jede Position wird im Angebot einzeln aufgeführt. So sehen Sie genau, wie sich der Gesamtbetrag zusammensetzt.",
        ],
      },
      districts: ["Altstadt", "Stadtamhof", "Kumpfmühl", "Burgweinting", "Reinhausen", "Prüfening"],
      nearby: ["Neutraubling", "Lappersdorf", "Regenstauf", "Kelheim", "Pentling", "Straubing"],
      faqs: [
        {
          question: "Kaufen Sie auch historische Goldmünzen an?",
          answer:
            "Ja. Wir kaufen Anlage- und Sammlermünzen aus Gold an. Grundlage der Bewertung sind Gewicht und Feingehalt zum aktuellen Börsenkurs.",
        },
        {
          question: "Muss ich für den Verkauf in die Regensburger Altstadt fahren?",
          answer:
            "Nein. Wir haben kein Geschäft vor Ort – der gesamte Ankauf läuft per Versand. Sie geben Ihr Paket einfach bei der nächsten Postfiliale ab.",
        },
      ],
    },
    {
      slug: "ingolstadt",
      name: "Ingolstadt",
      metaTitle: "Goldankauf Ingolstadt – Altgold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Ingolstadt und an der Donau: Schmuck, Münzen und Zahngold versichert per Versand einschicken – Auszahlung nach aktuellem Goldkurs.",
      heroText:
        "Von der Altstadt bis Friedrichshofen: Verkaufen Sie Ihr Gold aus Ingolstadt per Post – kostenlos, versichert und transparent nach Tageskurs bewertet.",
      intro: {
        title: "Gold verkaufen in Ingolstadt – präzise geprüft, fair bezahlt.",
        paragraphs: [
          "In Ingolstadt weiß man, was Präzision bedeutet. Genau damit prüfen wir auch Ihr Gold: Jedes Stück wird gewogen, der Feingehalt bestimmt und der Wert zum aktuellen Börsenkurs berechnet.",
          "Der Weg zu uns ist denkbar einfach. Sie bestellen ein kostenloses Versandpaket, packen Ihre Ringe, Ketten, Münzen oder Ihr Zahngold ein und geben das Paket versichert bei der Post ab.",
          "Danach erhalten Sie ein schriftliches Angebot. Ob Sie es annehmen, entscheiden allein Sie.",
        ],
      },
      districts: ["Altstadt", "Friedrichshofen", "Gerolfing", "Oberhaunstadt", "Mailing", "Unsernherrn"],
      nearby: ["Gaimersheim", "Neuburg an der Donau", "Manching", "Eichstätt", "Pfaffenhofen an der Ilm", "Kösching"],
      faqs: [
        {
          question: "Wie wird der Preis für mein Gold berechnet?",
          answer:
            "Wir bestimmen Gewicht und Feingehalt jedes Stücks und multiplizieren den reinen Goldanteil mit dem Börsenkurs am Tag der Bewertung. Alle Werte stehen im Angebot.",
        },
        {
          question: "Kaufen Sie auch Gold mit eingefassten Steinen?",
          answer:
            "Ja. Schmuck mit Steinen nehmen wir ebenfalls an. Bewertet wird der Goldanteil – die Steine berücksichtigen wir beim Gewicht entsprechend.",
        },
      ],
    },
    {
      slug: "wurzburg",
      name: "Würzburg",
      metaTitle: "Goldankauf Würzburg – Gold verkaufen per Post",
      metaDescription:
        "Goldankauf für Würzburg und Mainfranken: Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – fair nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Sanderau, dem Frauenland oder Heidingsfeld: Senden Sie Ihr Gold aus Würzburg ein und erhalten Sie ein faires Angebot nach aktuellem Goldkurs.",
      intro: {
        title: "Gold verkaufen in Würzburg – von der Residenzstadt direkt zu uns.",
        paragraphs: [
          "Zwischen Residenz, Festung Marienberg und Weinbergen wird in Würzburg Tradition großgeschrieben. Oft gehört dazu auch Schmuck, der lange getragen wurde und heute nur noch in der Schatulle liegt.",
          "Statt ihn ungenutzt aufzubewahren, können Sie ihn bei Cash 4 Gold zum aktuellen Tageskurs verkaufen – komplett per Post. Das Versandpaket ist kostenlos, die Sendung bis 2.500 € versichert.",
          "Wir prüfen jedes Stück sorgfältig und schicken Ihnen ein transparentes Angebot. Nach Ihrer Zusage erfolgt die Auszahlung per Überweisung.",
        ],
      },
      districts: ["Altstadt", "Sanderau", "Frauenland", "Zellerau", "Heidingsfeld", "Grombühl"],
      nearby: ["Kitzingen", "Veitshöchheim", "Höchberg", "Ochsenfurt", "Marktheidenfeld", "Karlstadt"],
      faqs: [
        {
          question: "Kann ich auch Studenten- oder Erbschmuck ohne Stempel verkaufen?",
          answer:
            "Ja. Auch ungestempelte Stücke prüfen wir auf ihren Feingehalt. Das Ergebnis sehen Sie im Angebot, bevor Sie sich entscheiden.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, veranlassen wir die Überweisung. Die Gutschrift erfolgt in der Regel innerhalb weniger Bankarbeitstage.",
        },
      ],
    },
    {
      slug: "furth",
      name: "Fürth",
      metaTitle: "Goldankauf Fürth – Altgold & Zahngold verkaufen",
      metaDescription:
        "Gold verkaufen in Fürth: Altgold, Goldschmuck, Münzen und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Von der Südstadt bis Burgfarrnbach: Verkaufen Sie Ihr Gold aus Fürth bequem per Post – mit transparenter Bewertung nach aktuellem Börsenkurs.",
      intro: {
        title: "Goldankauf für Fürth – unkompliziert und nachvollziehbar.",
        paragraphs: [
          "Fürth liegt direkt neben Nürnberg, hat aber seinen ganz eigenen Charakter – mit Gründerzeitvierteln, der Kleeblattstadt-Tradition und vielen alteingesessenen Familien. Wer hier Schmuck oder Münzen geerbt hat, möchte meist vor allem eines: einen fairen Preis.",
          "Den bekommen Sie bei uns ohne Verhandeln. Wir bewerten Ihr Gold nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung – nicht nach Verhandlungsgeschick.",
          "Das Versandpaket ist kostenlos. Sie packen ein, geben bei der Post ab und erhalten anschließend Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Altstadt", "Südstadt", "Poppenreuth", "Stadeln", "Burgfarrnbach", "Vach"],
      nearby: ["Nürnberg", "Zirndorf", "Erlangen", "Oberasbach", "Stein", "Cadolzburg"],
      faqs: [
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja. Zahngold enthält oft einen hohen Goldanteil. Sie können es auch mit Zahnresten einsenden – wir trennen und bewerten den Edelmetallanteil.",
        },
        {
          question: "Muss ich verhandeln, um einen guten Preis zu bekommen?",
          answer:
            "Nein. Der Preis ergibt sich aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
      ],
    },
    {
      slug: "erlangen",
      name: "Erlangen",
      metaTitle: "Goldankauf Erlangen – Gold verkaufen zum Börsenkurs",
      metaDescription:
        "Goldankauf für Erlangen: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden, nach aktuellem Börsenkurs bewerten lassen und sicher verkaufen.",
      heroText:
        "Aus der Innenstadt, Bruck oder Büchenbach: Senden Sie Ihr Gold aus Erlangen versichert ein und erhalten Sie ein Angebot zum aktuellen Goldkurs.",
      intro: {
        title: "Gold verkaufen in Erlangen – geprüft mit wissenschaftlicher Genauigkeit.",
        paragraphs: [
          "Erlangen ist Universitäts- und Forschungsstadt – hier zählen Fakten. Genau so arbeiten wir: Wir messen Gewicht und Feingehalt jedes Stücks und rechnen ausschließlich zum aktuellen Börsenkurs ab.",
          "Ob Goldbarren als Wertanlage, alte Ringe oder einzelne Münzen – Sie schicken alles mit unserem kostenlosen Versandpaket ein. Die Sendung ist bis 2.500 € versichert.",
          "Im schriftlichen Angebot sehen Sie jede Messung im Detail. Sie entscheiden, ob Sie verkaufen möchten.",
        ],
      },
      districts: ["Innenstadt", "Bruck", "Büchenbach", "Tennenlohe", "Eltersdorf", "Sieglitzhof"],
      nearby: ["Herzogenaurach", "Fürth", "Nürnberg", "Baiersdorf", "Forchheim", "Uttenreuth"],
      faqs: [
        {
          question: "Wie wird der Feingehalt meines Goldes bestimmt?",
          answer:
            "Wir prüfen jedes Stück einzeln und bestimmen den tatsächlichen Goldanteil. Das Ergebnis wird im Angebot zusammen mit dem Gewicht aufgeführt.",
        },
        {
          question: "Kann ich auch Goldbarren verkaufen?",
          answer:
            "Ja. Wir kaufen Goldbarren aller gängigen Größen an – bewertet nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
        },
      ],
    },
    {
      slug: "bamberg",
      name: "Bamberg",
      metaTitle: "Goldankauf Bamberg – Erbschmuck & Altgold verkaufen",
      metaDescription:
        "Gold verkaufen in Bamberg: Erbschmuck, Altgold, Münzen und Zahngold per Post verkaufen – kostenloses Versandpaket, Bewertung nach Tageskurs.",
      heroText:
        "Von der Inselstadt bis Gaustadt: Verkaufen Sie Schmuck, Münzen und Zahngold aus Bamberg per Post – fair bewertet nach dem aktuellen Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Bamberg – Erbstücke fair bewertet.",
        paragraphs: [
          "Bambergs Altstadt ist Weltkulturerbe, und auch in vielen Familien hier werden Erbstücke über Generationen bewahrt. Wenn Sie sich von altem Goldschmuck trennen möchten, verdient er eine sorgfältige Bewertung.",
          "Bei Cash 4 Gold prüfen wir jedes Stück einzeln – Gewicht, Feingehalt, Goldkurs. Sie schicken Ihren Schmuck einfach mit dem kostenlosen, versicherten Versandpaket an uns.",
          "Das Angebot erhalten Sie schriftlich. Nehmen Sie es nicht an, bekommen Sie Ihre Stücke kostenlos zurück.",
        ],
      },
      districts: ["Inselstadt", "Gärtnerstadt", "Bergstadt", "Gaustadt", "Bug", "Wunderburg"],
      nearby: ["Hallstadt", "Hirschaid", "Memmelsdorf", "Forchheim", "Burgebrach", "Lichtenfels"],
      faqs: [
        {
          question: "Ich habe Schmuck geerbt und weiß nicht, ob er echt ist. Was tun?",
          answer:
            "Schicken Sie ihn einfach ein. Wir prüfen Material und Feingehalt. Stücke ohne Goldanteil senden wir Ihnen kostenlos zurück.",
        },
        {
          question: "Kann ich in Bamberg persönlich vorbeikommen?",
          answer:
            "Nein, wir kaufen ausschließlich per Versand an und haben keine Filiale in Bamberg. Das Paket geben Sie bei jeder Postfiliale ab.",
        },
      ],
    },
    {
      slug: "bayreuth",
      name: "Bayreuth",
      metaTitle: "Goldankauf Bayreuth – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Bayreuth und Oberfranken: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden – transparent bewertet nach Tageskurs.",
      heroText:
        "Ob aus St. Georgen, Saas oder der Innenstadt: Schicken Sie Ihr Gold aus Bayreuth versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Bayreuth – ganz ohne Festspielkarte und Warteliste.",
        paragraphs: [
          "Für die Festspiele auf dem Grünen Hügel wartet man in Bayreuth oft jahrelang. Für ein Angebot auf Ihr Gold nicht: Sie fordern das Versandpaket an und erhalten kurz nach Eingang Ihrer Sendung Ihre Bewertung.",
          "Wir kaufen Goldschmuck, Münzen, Barren und Zahngold an – egal ob gut erhalten oder beschädigt. Bewertet wird nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Versand und Rückversand sind für Sie kostenlos. Die Sendung ist bis 2.500 € versichert.",
        ],
      },
      districts: ["Innenstadt", "St. Georgen", "Kreuzstein", "Saas", "Laineck", "Oberkonnersreuth"],
      nearby: ["Kulmbach", "Pegnitz", "Bindlach", "Eckersdorf", "Weidenberg", "Hollfeld"],
      faqs: [
        {
          question: "Wie lange dauert es bis zum Angebot?",
          answer:
            "Sobald Ihr Paket bei uns eingetroffen ist, prüfen wir die Stücke zeitnah und senden Ihnen das schriftliche Angebot zu.",
        },
        {
          question: "Kostet mich der Verkauf etwas?",
          answer:
            "Nein. Versandpaket, versicherter Versand und – falls Sie ablehnen – der Rückversand sind kostenlos.",
        },
      ],
    },
    {
      slug: "aschaffenburg",
      name: "Aschaffenburg",
      metaTitle: "Goldankauf Aschaffenburg – Altgold verkaufen",
      metaDescription:
        "Gold verkaufen in Aschaffenburg: Schmuck, Münzen, Barren und Zahngold per Post verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Von Damm bis Schweinheim: Verkaufen Sie Ihr Gold aus Aschaffenburg per Post – mit kostenlosem Versandpaket und Bewertung nach aktuellem Goldkurs.",
      intro: {
        title: "Gold verkaufen in Aschaffenburg – am Main, aber ohne Umweg.",
        paragraphs: [
          "Aschaffenburg liegt am westlichsten Zipfel Bayerns, nah am Rhein-Main-Gebiet. Viele vergleichen hier Angebote zwischen Unterfranken und Hessen – bei uns geht es einfacher: Sie schicken Ihr Gold per Post und erhalten ein klares Angebot.",
          "Wir bewerten Ringe, Ketten, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung. Jedes Stück wird einzeln im Angebot aufgeführt.",
          "Erst nach Ihrer Zustimmung überweisen wir den Betrag. Bis dahin bleiben Ihre Stücke Ihr Eigentum.",
        ],
      },
      districts: ["Damm", "Schweinheim", "Nilkheim", "Leider", "Obernau", "Strietwald"],
      nearby: ["Alzenau", "Goldbach", "Großostheim", "Hösbach", "Miltenberg", "Hanau"],
      faqs: [
        {
          question: "Kaufen Sie auch aus dem hessischen Umland an?",
          answer:
            "Ja. Wir kaufen deutschlandweit per Versand an – ob aus Aschaffenburg, Hanau oder Alzenau, der Ablauf ist derselbe.",
        },
        {
          question: "Was passiert mit meinen Stücken bis zu meiner Entscheidung?",
          answer:
            "Sie werden sicher bei uns verwahrt. Erst wenn Sie das Angebot annehmen, gilt der Verkauf. Andernfalls senden wir alles kostenlos zurück.",
        },
      ],
    },
    {
      slug: "landshut",
      name: "Landshut",
      metaTitle: "Goldankauf Landshut – Gold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Landshut und Niederbayern: Altgold, Schmuck, Münzen und Zahngold versichert einsenden und zum Tageskurs verkaufen.",
      heroText:
        "Aus der Altstadt, Nikola oder Achdorf: Senden Sie Ihr Gold aus Landshut kostenlos ein und erhalten Sie ein Angebot nach aktuellem Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Landshut – wertvoll wie zur Landshuter Hochzeit.",
        paragraphs: [
          "Bei der Landshuter Hochzeit wird alle vier Jahre die Pracht des Mittelalters gefeiert – Gold und Schmuck gehören dazu. Wenn Ihre eigenen Goldstücke heute nur noch in der Schublade liegen, können Sie sie bei uns unkompliziert verkaufen.",
          "Sie fordern unser kostenloses Versandpaket an und schicken Ihre Stücke versichert ein. Wir prüfen Gewicht und Feingehalt und rechnen zum aktuellen Goldkurs ab.",
          "Das Angebot ist schriftlich und nachvollziehbar. Sie entscheiden ohne Zeitdruck.",
        ],
      },
      districts: ["Altstadt", "Nikola", "Achdorf", "Berg", "Schönbrunn", "West"],
      nearby: ["Ergolding", "Vilsbiburg", "Altdorf", "Dingolfing", "Essenbach", "Moosburg an der Isar"],
      faqs: [
        {
          question: "Kaufen Sie auch Silber oder nur Gold?",
          answer:
            "Neben Gold kaufen wir auch Silber, Platin und Palladium an – etwa Silberbesteck, Silbermünzen oder Platinschmuck. Alles wird nach aktuellem Kurs bewertet.",
        },
        {
          question: "Muss ich mich sofort entscheiden?",
          answer:
            "Nein. Sie erhalten das Angebot schriftlich und können es in Ruhe prüfen, bevor Sie zusagen oder ablehnen.",
        },
      ],
    },
    {
      slug: "kempten",
      name: "Kempten",
      metaTitle: "Goldankauf Kempten – Gold verkaufen im Allgäu",
      metaDescription:
        "Gold verkaufen in Kempten und im Allgäu: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert, zum Tageskurs.",
      heroText:
        "Von der Altstadt bis St. Mang: Verkaufen Sie Ihr Gold aus Kempten bequem per Post – auch aus den Dörfern im Oberallgäu ohne lange Anfahrt.",
      intro: {
        title: "Goldankauf für Kempten und das Allgäu – ohne Fahrt über Land.",
        paragraphs: [
          "Im Allgäu sind die Wege oft weit, besonders wenn man außerhalb der Stadt wohnt. Bei Cash 4 Gold brauchen Sie keinen Weg in die Stadt: Das kostenlose Versandpaket kommt zu Ihnen, und Sie geben es bei der nächsten Postfiliale ab.",
          "Wir kaufen Goldschmuck, Münzen, Barren und Zahngold – auch Trachtenschmuck mit Goldanteil. Bewertet wird nach Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie erhalten ein schriftliches Angebot und entscheiden in Ruhe. Die Auszahlung erfolgt per Überweisung.",
        ],
      },
      districts: ["Altstadt", "St. Mang", "Sankt Lorenz", "Thingers", "Lenzfried", "Heiligkreuz"],
      nearby: ["Kaufbeuren", "Sonthofen", "Immenstadt", "Memmingen", "Marktoberdorf", "Durach"],
      faqs: [
        {
          question: "Nehmen Sie auch Trachtenschmuck an?",
          answer:
            "Ja, sofern er Gold enthält. Wir prüfen den Feingehalt und bewerten den Goldanteil zum aktuellen Kurs.",
        },
        {
          question: "Ich wohne auf dem Land im Oberallgäu – geht das trotzdem?",
          answer:
            "Ja. Da wir nur per Versand ankaufen, ist Ihr Wohnort egal. Sie brauchen nur eine Postfiliale oder Paketannahmestelle.",
        },
      ],
    },
    {
      slug: "rosenheim",
      name: "Rosenheim",
      metaTitle: "Goldankauf Rosenheim – Altgold & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Rosenheim und das Chiemgau: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden und transparent zum Tageskurs verkaufen.",
      heroText:
        "Aus der Innenstadt, Aising oder Westerndorf: Schicken Sie Ihr Gold aus Rosenheim versichert ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Gold verkaufen in Rosenheim – zwischen Inn und Chiemsee.",
        paragraphs: [
          "Rosenheim ist das Zentrum der Region zwischen München, Salzburg und dem Chiemsee. Wer hier Gold verkaufen möchte, muss dafür nicht extra in die Großstadt fahren – der Verkauf bei Cash 4 Gold läuft komplett per Post.",
          "Ob Goldmünzen wie Wiener Philharmoniker, alte Eheringe oder Zahngold: Wir prüfen jedes Stück und berechnen den Wert auf Basis von Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Der Versand ist kostenlos und versichert. Für Werte über 2.500 € organisieren wir einen kostenlosen Werttransport.",
        ],
      },
      districts: ["Innenstadt", "Aising", "Fürstätt", "Happing", "Kastenau", "Westerndorf St. Peter"],
      nearby: ["Kolbermoor", "Bad Aibling", "Prien am Chiemsee", "Wasserburg am Inn", "Stephanskirchen", "Raubling"],
      faqs: [
        {
          question: "Kaufen Sie Wiener Philharmoniker und Krügerrand an?",
          answer:
            "Ja. Gängige Anlagemünzen wie Philharmoniker, Krügerrand oder Maple Leaf kaufen wir zum aktuellen Goldkurs an.",
        },
        {
          question: "Wie ist mein Paket abgesichert?",
          answer:
            "Unser Versandpaket ist bis 2.500 € versichert. Bei höheren Werten organisieren wir einen kostenlosen Werttransport.",
        },
      ],
    },
    {
      slug: "freising",
      name: "Freising",
      metaTitle: "Goldankauf Freising – Gold verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Freising: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Altstadt bis Lerchenfeld: Verkaufen Sie Ihr Gold aus Freising per Post – transparent bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Goldankauf für Freising – vom Domberg direkt ins Postfach.",
        paragraphs: [
          "Freising ist eine der ältesten Städte Bayerns – mit Domberg, Weihenstephan und dem Flughafen gleich nebenan. Wer hier lebt, ist oft viel unterwegs. Darum läuft der Goldverkauf bei uns ohne Termin: einfach per Post.",
          "Sie fordern das kostenlose Versandpaket an, packen Schmuck, Münzen oder Zahngold ein und geben die versicherte Sendung ab. Wir prüfen jedes Stück und berechnen den Wert zum Börsenkurs.",
          "Das Angebot kommt schriftlich. Nach Ihrer Zusage überweisen wir den Betrag auf Ihr Konto.",
        ],
      },
      districts: ["Altstadt", "Lerchenfeld", "Vötting", "Neustift", "Attaching", "Pulling"],
      nearby: ["Erding", "Moosburg an der Isar", "Hallbergmoos", "Eching", "Neufahrn", "Allershausen"],
      faqs: [
        {
          question: "Brauche ich einen Termin für den Goldverkauf?",
          answer:
            "Nein. Sie fordern das Versandpaket online an und schicken Ihre Stücke ein, wann es Ihnen passt.",
        },
        {
          question: "Kann ich auch nur ein einzelnes Schmuckstück verkaufen?",
          answer:
            "Ja. Es gibt keine Mindestmenge. Auch ein einzelner Ring oder eine Münze wird geprüft und bewertet.",
        },
      ],
    },
    {
      slug: "passau",
      name: "Passau",
      metaTitle: "Goldankauf Passau – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Passau: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenloses Versandpaket, faire Bewertung nach Börsenkurs.",
      heroText:
        "Aus der Altstadt, der Innstadt oder Hacklberg: Senden Sie Ihr Gold aus Passau versichert ein und erhalten Sie ein Angebot nach aktuellem Goldkurs.",
      intro: {
        title: "Gold verkaufen in der Dreiflüssestadt – sicher verschickt.",
        paragraphs: [
          "In Passau treffen Donau, Inn und Ilz zusammen – und viele Wege führen hier über Brücken und durch enge Altstadtgassen. Den Weg zu einem Ankäufer sparen Sie sich bei uns: Ihr Gold reist per Post.",
          "Wir kaufen Altgold, Ketten, Ringe, Münzen, Barren und Zahngold. Jedes Stück wird gewogen, auf Feingehalt geprüft und zum Börsenkurs am Tag der Bewertung berechnet.",
          "Versand und eventueller Rückversand sind kostenlos. Ihr Angebot erhalten Sie schriftlich mit allen Einzelwerten.",
        ],
      },
      districts: ["Altstadt", "Innstadt", "Ilzstadt", "Hacklberg", "Grubweg", "Heining"],
      nearby: ["Vilshofen", "Hauzenberg", "Tittling", "Fürstenzell", "Ruhstorf", "Pocking"],
      faqs: [
        {
          question: "Gibt es in Passau eine Annahmestelle?",
          answer:
            "Nein. Wir kaufen ausschließlich per Versand an und haben kein Geschäft in Passau. Ihr Paket geben Sie bei jeder Postfiliale oder Paketannahmestelle ab.",
        },
        {
          question: "Kann ich auch verbogenen oder zerbrochenen Schmuck einsenden?",
          answer:
            "Ja. Für den Goldwert ist der Zustand egal – entscheidend sind Gewicht und Feingehalt. Auch Einzelteile und Bruchgold werden bewertet.",
        },
      ],
    },
    {
      slug: "schweinfurt",
      name: "Schweinfurt",
      metaTitle: "Goldankauf Schweinfurt – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Schweinfurt: Altgold, Goldschmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert, nach Tageskurs bewertet.",
      heroText:
        "Von der Innenstadt bis zum Bergl: Verkaufen Sie Ihr Gold aus Schweinfurt per Post – mit kostenlosem Versandpaket und klarer Bewertung.",
      intro: {
        title: "Goldankauf für Schweinfurt – ehrlich gerechnet, ohne Umwege.",
        paragraphs: [
          "Schweinfurt ist eine Industriestadt mit bodenständigen Menschen – hier zählt, was am Ende herauskommt. Bei uns sehen Sie genau, wie sich der Preis für Ihr Gold zusammensetzt: Gewicht, Feingehalt und Börsenkurs, Stück für Stück.",
          "Sie schicken Ihren Schmuck, Ihre Münzen oder Ihr Zahngold mit unserem kostenlosen Versandpaket ein. Die Sendung ist bis 2.500 € versichert.",
          "Nach der Prüfung bekommen Sie ein schriftliches Angebot. Sagen Sie zu, überweisen wir den Betrag umgehend.",
        ],
      },
      districts: ["Innenstadt", "Bergl", "Deutschhof", "Gartenstadt", "Oberndorf", "Hochfeld"],
      nearby: ["Bad Kissingen", "Gochsheim", "Grafenrheinfeld", "Haßfurt", "Werneck", "Schwebheim"],
      faqs: [
        {
          question: "Woran erkenne ich, ob mein Schmuck aus Gold ist?",
          answer:
            "Oft hilft ein Stempel wie 333, 585 oder 750. Fehlt er, prüfen wir den Feingehalt für Sie – kostenlos und unverbindlich.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Der Betrag im Angebot ist der Betrag, den Sie erhalten. Versand und Prüfung sind kostenlos.",
        },
      ],
    },
    {
      slug: "straubing",
      name: "Straubing",
      metaTitle: "Goldankauf Straubing – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Straubing und den Gäuboden: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden und zum aktuellen Börsenkurs verkaufen.",
      heroText:
        "Aus der Altstadt, Ittling oder Alburg: Schicken Sie Ihr Gold aus Straubing versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Gold verkaufen in Straubing – das ganze Jahr, nicht nur zum Gäubodenfest.",
        paragraphs: [
          "Straubing ist vor allem für das Gäubodenvolksfest bekannt. Ihr Gold können Sie bei uns aber zu jeder Jahreszeit verkaufen – bequem per Post und ohne Fahrt in die Stadt.",
          "Wir prüfen Goldschmuck, Münzen, Barren und Zahngold sorgfältig und bewerten nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung. Jede Position steht einzeln im Angebot.",
          "Das Versandpaket ist kostenlos und versichert. Sie entscheiden in Ruhe, ob Sie verkaufen möchten.",
        ],
      },
      districts: ["Altstadt", "Ittling", "Alburg", "Kagers", "Lerchenhaid", "Ostenviertel"],
      nearby: ["Bogen", "Deggendorf", "Plattling", "Mallersdorf", "Geiselhöring", "Regensburg"],
      faqs: [
        {
          question: "Wie bekomme ich das Versandpaket nach Straubing?",
          answer:
            "Sie fordern es online an, und wir schicken es Ihnen kostenlos zu. Danach legen Sie Ihre Stücke hinein und geben das Paket bei der Post ab.",
        },
        {
          question: "Was ist, wenn der Goldkurs nach meinem Einsenden steigt?",
          answer:
            "Bewertet wird zum Börsenkurs am Tag der Prüfung. Das Angebot zeigt Ihnen den verwendeten Kurs, sodass alles nachvollziehbar bleibt.",
        },
      ],
    },
  ],
};

import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
// Hamburg is listed by Bezirk / Stadtteil, each with its own page. District lists don't
// repeat areas that have their own page (e.g. Barmbek is not listed under Hamburg-Nord).
export const HAMBURG: State = {
  id: "hamburg",
  name: "Hamburg",
  cities: [
    {
      slug: "hamburg-mitte",
      name: "Hamburg-Mitte",
      metaTitle: "Goldankauf Hamburg-Mitte – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Hamburg-Mitte: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der HafenCity bis St. Georg: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Hamburg-Mitte bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Hamburg-Mitte – hanseatisch, sachlich, fair.",
        paragraphs: [
          "Zwischen Rathaus, Speicherstadt und Elbphilharmonie schlägt das Herz der Hansestadt. Hier wurde schon immer mit Gold und Waren gehandelt – nach klaren Regeln. Genau so arbeiten wir: Ihr Preis ergibt sich aus Gewicht, Feingehalt und Börsenkurs.",
          "Für den Verkauf müssen Sie nicht durch die volle Innenstadt. Sie fordern unser kostenloses Versandpaket an, legen Ihre Stücke hinein und geben die versicherte Sendung bei der Post ab.",
          "Nach der Prüfung erhalten Sie ein schriftliches Angebot mit allen Einzelwerten. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "HafenCity", "St. Georg", "Hamm", "Rothenburgsort"],
      nearby: ["St. Pauli", "Wilhelmsburg", "Billstedt", "Eimsbüttel", "Barmbek", "Altona"],
      faqs: [
        {
          question: "Gibt es eine Filiale in der Hamburger Innenstadt?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Hamburg. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie wird der Preis für mein Gold berechnet?",
          answer:
            "Wir bestimmen Gewicht und Feingehalt jedes Stücks und berechnen den reinen Goldanteil zum aktuellen Börsenkurs. Alle Werte stehen einzeln im Angebot.",
        },
      ],
    },
    {
      slug: "altona",
      name: "Altona",
      metaTitle: "Goldankauf Altona – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Hamburg-Altona: Altgold, Goldschmuck, Münzen und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Ottensen, Bahrenfeld oder Othmarschen: Senden Sie Ihr Gold aus Altona versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Altona – so ehrlich wie der Fischmarkt am Sonntagmorgen.",
        paragraphs: [
          "Altona war einst eine eigenständige Stadt und hat sich bis heute seinen eigenen Charakter bewahrt – vom Fischmarkt an der Elbe über die Altbauten in Ottensen bis zu den Villen in Othmarschen.",
          "Beim Goldverkauf geht es bei uns aber nicht ums Marktschreien: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum Börsenkurs am Tag der Prüfung ab.",
          "Sie schicken alles im kostenlosen, versicherten Versandpaket ein und entscheiden nach Erhalt des schriftlichen Angebots in Ruhe.",
        ],
      },
      districts: ["Altona-Altstadt", "Ottensen", "Bahrenfeld", "Othmarschen", "Groß Flottbek", "Lurup"],
      nearby: ["Blankenese", "St. Pauli", "Eimsbüttel", "Schenefeld", "Halstenbek", "Wedel"],
      faqs: [
        {
          question: "Muss ich um den Preis verhandeln?",
          answer:
            "Nein. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht gefällt?",
          answer:
            "Dann schicken wir Ihre Stücke kostenlos und versichert an Sie zurück. Für Sie entstehen keine Kosten.",
        },
      ],
    },
    {
      slug: "eimsbuttel",
      name: "Eimsbüttel",
      metaTitle: "Goldankauf Eimsbüttel – Gold verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Hamburg-Eimsbüttel: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden, nach Börsenkurs bewerten lassen und sicher verkaufen.",
      heroText:
        "Von Rotherbaum bis Niendorf: Verkaufen Sie Ihr Gold aus Eimsbüttel per Post – mit kostenlosem Versandpaket und transparenter Bewertung.",
      intro: {
        title: "Gold verkaufen in Eimsbüttel – vom Altbau direkt zu uns.",
        paragraphs: [
          "Eimsbüttel ist einer der dichtesten und beliebtesten Bezirke Hamburgs – mit Universität in Rotherbaum, Altbauten an der Osterstraße und ruhigen Wohngebieten in Lokstedt und Niendorf.",
          "Wo Parkplätze knapp sind, ist ein Weg zum Goldankäufer lästig. Bei uns brauchen Sie keinen: Sie bestellen das kostenlose Versandpaket und geben es bei der nächsten Postfiliale ab.",
          "Wir bewerten Ringe, Ketten, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und aktuellem Börsenkurs und schicken Ihnen ein schriftliches Angebot.",
        ],
      },
      districts: ["Rotherbaum", "Harvestehude", "Hoheluft-West", "Stellingen", "Lokstedt", "Niendorf"],
      nearby: ["Altona", "Winterhude", "Hamburg-Mitte", "Norderstedt", "Halstenbek", "Schenefeld"],
      faqs: [
        {
          question: "Brauche ich einen Termin?",
          answer:
            "Nein. Sie fordern das Versandpaket online an und schicken Ihre Stücke ein, wann es Ihnen passt.",
        },
        {
          question: "Kann ich auch Schmuck ohne Stempel verkaufen?",
          answer:
            "Ja. Auch ungestempelte Stücke prüfen wir auf ihren Feingehalt. Das Ergebnis sehen Sie im Angebot, bevor Sie sich entscheiden.",
        },
      ],
    },
    {
      slug: "hamburg-nord",
      name: "Hamburg-Nord",
      metaTitle: "Goldankauf Hamburg-Nord – Gold & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Hamburg-Nord, Eppendorf und Uhlenhorst: Altgold, Schmuck, Münzen und Zahngold per Versand verkaufen – transparent zum Tageskurs.",
      heroText:
        "Aus Eppendorf, Uhlenhorst oder Fuhlsbüttel: Schicken Sie Ihr Gold aus Hamburg-Nord versichert ein und erhalten Sie ein Angebot zum Börsenkurs.",
      intro: {
        title: "Goldankauf für Hamburg-Nord – von der Alster bis zum Flughafen.",
        paragraphs: [
          "Hamburg-Nord reicht von den eleganten Straßen in Eppendorf und Uhlenhorst an der Alster bis nach Fuhlsbüttel mit dem Flughafen. Viele Bewohner haben wenig Zeit – darum läuft der Goldverkauf bei uns ganz ohne Termin.",
          "Ob Goldmünzen als Wertanlage, Erbschmuck oder Zahngold: Wir prüfen jedes Stück einzeln nach Gewicht und Feingehalt und bewerten es zum aktuellen Börsenkurs.",
          "Der Versand ist kostenlos und bis 2.500 € versichert. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        ],
      },
      districts: ["Eppendorf", "Hoheluft-Ost", "Uhlenhorst", "Alsterdorf", "Ohlsdorf", "Fuhlsbüttel"],
      nearby: ["Barmbek", "Winterhude", "Langenhorn", "Eimsbüttel", "Wandsbek", "Norderstedt"],
      faqs: [
        {
          question: "Kaufen Sie Krügerrand und andere Anlagemünzen an?",
          answer:
            "Ja. Gängige Anlagemünzen wie Krügerrand, Maple Leaf oder Philharmoniker kaufen wir zum aktuellen Goldkurs an.",
        },
        {
          question: "Wie ist mein Paket abgesichert?",
          answer:
            "Unser Versandpaket ist bis 2.500 € versichert. Bei höheren Werten organisieren wir einen kostenlosen Werttransport.",
        },
      ],
    },
    {
      slug: "wandsbek",
      name: "Wandsbek",
      metaTitle: "Goldankauf Wandsbek – Altgold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Hamburg-Wandsbek: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden und nach aktuellem Börsenkurs transparent bewerten lassen.",
      heroText:
        "Von Eilbek bis Volksdorf: Verkaufen Sie Ihr Gold aus Wandsbek per Post – kostenlos, versichert und fair nach Tageskurs bewertet.",
      intro: {
        title: "Gold verkaufen in Wandsbek – im größten Bezirk Hamburgs.",
        paragraphs: [
          "Wandsbek ist Hamburgs einwohnerstärkster Bezirk und reicht von den dichten Wohnstraßen in Eilbek bis zu den Walddörfern wie Volksdorf. So weit die Wege im Bezirk sind – zu uns ist es nur ein Paket.",
          "Sie fordern das kostenlose Versandpaket an und schicken Ihre Stücke versichert ein. Wir prüfen Schmuck, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und Börsenkurs.",
          "Das Angebot erhalten Sie schriftlich. Lehnen Sie ab, schicken wir alles kostenlos zurück.",
        ],
      },
      districts: ["Wandsbek", "Eilbek", "Marienthal", "Bramfeld", "Farmsen-Berne", "Volksdorf"],
      nearby: ["Rahlstedt", "Barmbek", "Billstedt", "Hamburg-Nord", "Ahrensburg", "Glinde"],
      faqs: [
        {
          question: "Muss ich für den Verkauf in die Innenstadt fahren?",
          answer:
            "Nein. Der gesamte Ankauf läuft per Versand. Sie geben Ihr Paket einfach bei einer Postfiliale oder Paketannahmestelle in Wandsbek ab.",
        },
        {
          question: "Nehmen Sie auch kaputten Schmuck an?",
          answer:
            "Ja. Für den Goldwert ist der Zustand egal. Auch gerissene Ketten, einzelne Ohrringe und Bruchgold werden bewertet.",
        },
      ],
    },
    {
      slug: "bergedorf",
      name: "Bergedorf",
      metaTitle: "Goldankauf Bergedorf – Gold verkaufen zum Börsenkurs",
      metaDescription:
        "Goldankauf für Hamburg-Bergedorf und die Vier- und Marschlande: Schmuck, Münzen, Barren und Zahngold per Post verkaufen – zum Tageskurs.",
      heroText:
        "Von Lohbrügge bis in die Vierlande: Senden Sie Ihr Gold aus Bergedorf kostenlos ein und erhalten Sie ein faires Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Bergedorf – vom Schloss bis in die Marschlande.",
        paragraphs: [
          "Bergedorf mit seinem Schloss und der historischen Altstadt fühlt sich fast wie eine eigene Kleinstadt an. Dazu kommen die ländlichen Vier- und Marschlande, wo der Weg in die Hamburger City besonders weit ist.",
          "Für den Goldverkauf brauchen Sie ihn nicht: Das kostenlose Versandpaket kommt zu Ihnen, und Sie geben es bei der nächsten Postfiliale ab.",
          "Wir bewerten nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung und schicken Ihnen ein schriftliches Angebot.",
        ],
      },
      districts: ["Bergedorf", "Lohbrügge", "Neuallermöhe", "Kirchwerder", "Curslack", "Altengamme"],
      nearby: ["Reinbek", "Wentorf", "Glinde", "Geesthacht", "Börnsen", "Billstedt"],
      faqs: [
        {
          question: "Ich wohne in den Vierlanden – geht das trotzdem?",
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
      slug: "harburg",
      name: "Harburg",
      metaTitle: "Goldankauf Harburg – Altgold & Zahngold verkaufen",
      metaDescription:
        "Gold verkaufen in Hamburg-Harburg: Altgold, Goldschmuck, Münzen und Zahngold per Versand verkaufen – kostenlos, versichert, nach Tageskurs bewertet.",
      heroText:
        "Aus Heimfeld, Eißendorf oder Neugraben: Schicken Sie Ihr Gold aus Harburg versichert ein und erhalten Sie ein Angebot nach aktuellem Goldkurs.",
      intro: {
        title: "Gold verkaufen in Harburg – südlich der Elbe, ohne Brücke.",
        paragraphs: [
          "Für viele Harburger beginnt Hamburg erst jenseits der Elbbrücken. Für den Goldverkauf müssen Sie die Elbe nicht überqueren – Ihr Gold reist per Post zu uns.",
          "Wir kaufen Ringe, Ketten, Münzen, Barren und Zahngold, auch beschädigt oder einzeln. Jedes Stück wird gewogen, auf Feingehalt geprüft und zum Börsenkurs bewertet.",
          "Im schriftlichen Angebot steht jede Position einzeln. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Harburg", "Heimfeld", "Eißendorf", "Wilstorf", "Marmstorf", "Neugraben-Fischbek"],
      nearby: ["Wilhelmsburg", "Seevetal", "Rosengarten", "Neu Wulmstorf", "Buxtehude", "Winsen (Luhe)"],
      faqs: [
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja. Zahngold enthält oft einen hohen Goldanteil. Sie können es auch mit Zahnresten einsenden – wir bewerten den Edelmetallanteil.",
        },
        {
          question: "Kaufen Sie auch Gold aus dem Landkreis Harburg an?",
          answer:
            "Ja. Wir kaufen deutschlandweit per Versand an – ob aus Harburg, Seevetal oder Buxtehude, der Ablauf ist derselbe.",
        },
      ],
    },
    {
      slug: "wilhelmsburg",
      name: "Wilhelmsburg",
      metaTitle: "Goldankauf Wilhelmsburg – Gold verkaufen per Post",
      metaDescription:
        "Goldankauf für Hamburg-Wilhelmsburg: Altgold, Schmuck, Münzen und Zahngold per Versand verkaufen – kostenloses Versandpaket, Bewertung nach Tageskurs.",
      heroText:
        "Vom Reiherstiegviertel bis Kirchdorf: Verkaufen Sie Ihr Gold aus Wilhelmsburg per Post – transparent bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Goldankauf für Wilhelmsburg – von Europas größter Flussinsel.",
        paragraphs: [
          "Wilhelmsburg ist Europas größte bewohnte Flussinsel und einer der vielfältigsten Stadtteile Hamburgs. Familien aus aller Welt leben hier – und mit ihnen Goldschmuck in vielen Stilen und Karatstufen.",
          "Wir bewerten jedes Stück nach seinem tatsächlichen Feingehalt, auch 21- oder 22-karätigen Schmuck. Grundlage ist immer der Börsenkurs am Tag der Prüfung – ohne Verhandeln.",
          "Sie schicken alles im kostenlosen Versandpaket ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Reiherstiegviertel", "Kirchdorf", "Kirchdorf-Süd", "Georgswerder", "Bahnhofsviertel"],
      nearby: ["Veddel", "Harburg", "HafenCity", "Rothenburgsort", "Moorwerder", "Seevetal"],
      faqs: [
        {
          question: "Kaufen Sie auch 21- oder 22-karätigen Goldschmuck an?",
          answer:
            "Ja. Hochkarätiger Schmuck, etwa aus der Türkei, dem Nahen Osten oder Indien, wird bei uns nach seinem tatsächlichen Feingehalt bewertet.",
        },
        {
          question: "Gibt es eine Annahmestelle in Wilhelmsburg?",
          answer:
            "Nein. Wir haben kein Geschäft vor Ort – der Ankauf läuft ausschließlich per Versand.",
        },
      ],
    },
    {
      slug: "barmbek",
      name: "Barmbek",
      metaTitle: "Goldankauf Barmbek – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Hamburg-Barmbek: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – fair nach Börsenkurs bewertet.",
      heroText:
        "Aus Barmbek-Nord, Barmbek-Süd oder Dulsberg: Verkaufen Sie Ihr Gold per Post – mit kostenlosem Versandpaket und klarer Bewertung.",
      intro: {
        title: "Gold verkaufen in Barmbek – ehrliche Arbeit hat hier Tradition.",
        paragraphs: [
          "Barmbek war lange ein Arbeiterviertel mit Fabriken und Backsteinbauten – das Museum der Arbeit erinnert bis heute daran. Ehrliche Arbeit und ein fairer Lohn waren hier immer wichtig. Für Ihr Gold soll es nicht anders sein.",
          "Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum Börsenkurs am Tag der Prüfung ab. Jede Position steht einzeln im Angebot.",
          "Das Versandpaket ist kostenlos. Nach Ihrer Zusage überweisen wir den Betrag direkt auf Ihr Konto.",
        ],
      },
      districts: ["Barmbek-Nord", "Barmbek-Süd", "Dulsberg"],
      nearby: ["Winterhude", "Uhlenhorst", "Eilbek", "Bramfeld", "Wandsbek", "Ohlsdorf"],
      faqs: [
        {
          question: "Woran erkenne ich, ob mein Schmuck aus Gold ist?",
          answer:
            "Oft hilft ein Stempel wie 333, 585 oder 750. Fehlt er, prüfen wir den Feingehalt für Sie – kostenlos und unverbindlich.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, veranlassen wir die Überweisung. Die Gutschrift erfolgt in der Regel innerhalb weniger Bankarbeitstage.",
        },
      ],
    },
    {
      slug: "winterhude",
      name: "Winterhude",
      metaTitle: "Goldankauf Winterhude – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Hamburg-Winterhude: Schmuck, Münzen, Barren und Zahngold per Post verkaufen – kostenlos, versichert und transparent zum Tageskurs.",
      heroText:
        "Vom Mühlenkamp bis zur Jarrestadt: Senden Sie Ihr Gold aus Winterhude versichert ein und erhalten Sie ein Angebot nach aktuellem Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Winterhude – entspannt wie ein Tag im Stadtpark.",
        paragraphs: [
          "Winterhude lebt zwischen Stadtpark, Alsterkanälen und den Cafés am Mühlenkamp. Hier verbringt man seine Zeit lieber draußen als in Warteschlangen – und genau dafür ist unser Versandankauf gemacht.",
          "Sie fordern das kostenlose Versandpaket an, packen Ihre Stücke ein und geben die Sendung bei der Post ab. Wir prüfen Gewicht und Feingehalt und bewerten zum aktuellen Börsenkurs.",
          "Das Angebot erhalten Sie schriftlich. Den aktuellen Goldpreis können Sie jederzeit auf unserer Website verfolgen.",
        ],
      },
      districts: ["Jarrestadt", "Mühlenkamp", "Winterhuder Fährhaus", "Stadtpark"],
      nearby: ["Eppendorf", "Barmbek", "Uhlenhorst", "Alsterdorf", "Hoheluft-Ost", "Ohlsdorf"],
      faqs: [
        {
          question: "Wann ist der beste Zeitpunkt zum Verkaufen?",
          answer:
            "Bewertet wird zum Börsenkurs am Tag der Prüfung. Den aktuellen Goldpreis sehen Sie auf unserer Website – so entscheiden Sie selbst, wann Sie verkaufen.",
        },
        {
          question: "Gibt es eine Mindestmenge?",
          answer:
            "Nein. Auch ein einzelner Ring oder eine einzelne Münze wird geprüft und bewertet.",
        },
      ],
    },
    {
      slug: "st-pauli",
      name: "St. Pauli",
      metaTitle: "Goldankauf St. Pauli – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Hamburg-St. Pauli: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert per Post verkaufen – nach Börsenkurs bewertet.",
      heroText:
        "Von der Reeperbahn bis zum Karoviertel: Verkaufen Sie Ihr Gold aus St. Pauli per Post – ehrlich bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Goldankauf für St. Pauli – ohne Kiez-Rabatt, mit klarem Preis.",
        paragraphs: [
          "St. Pauli ist laut, bunt und direkt – zwischen Reeperbahn, Hafenstraße und Millerntor. Klare Ansagen schätzt man hier, und die bekommen Sie auch von uns: einen Preis, der sich aus Gewicht, Feingehalt und Börsenkurs ergibt.",
          "Ob Goldkette, Siegelring, Münzen oder Zahngold: Wir kaufen auch beschädigte Stücke und Bruchgold. Jedes Teil wird einzeln geprüft.",
          "Sie schicken alles im kostenlosen, versicherten Versandpaket ein. Lehnen Sie das Angebot ab, kommen Ihre Stücke kostenlos zurück.",
        ],
      },
      districts: ["Reeperbahn", "Karolinenviertel", "Hafenstraße", "Landungsbrücken", "Heiligengeistfeld"],
      nearby: ["Sternschanze", "Altona", "Ottensen", "Hamburg-Mitte", "Eimsbüttel", "HafenCity"],
      faqs: [
        {
          question: "Wo gebe ich mein Paket in St. Pauli ab?",
          answer:
            "Bei jeder Postfiliale oder Paketannahmestelle. Wir haben kein Geschäft vor Ort – der Ankauf läuft ausschließlich per Versand.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Der Betrag im Angebot ist der Betrag, den Sie erhalten. Versand und Prüfung sind kostenlos.",
        },
      ],
    },
    {
      slug: "blankenese",
      name: "Blankenese",
      metaTitle: "Goldankauf Blankenese – Gold diskret verkaufen",
      metaDescription:
        "Goldankauf für Hamburg-Blankenese: hochwertigen Goldschmuck, Münzen, Barren und Zahngold diskret per Versand verkaufen – zum Tageskurs.",
      heroText:
        "Aus dem Treppenviertel, vom Süllberg oder aus Falkenstein: Senden Sie Ihr Gold aus Blankenese versichert ein und erhalten Sie ein Angebot zum Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Blankenese – diskret wie ein Kapitänshaus am Elbhang.",
        paragraphs: [
          "Blankenese mit seinem Treppenviertel und den alten Kapitänshäusern am Elbhang ist einer der exklusivsten Stadtteile Hamburgs. Hier liegen oft wertvolle Erbstücke, Münzsammlungen oder Barren im Safe.",
          "Wer solche Werte verkaufen möchte, tut das bei uns ohne Ladenbesuch. Sie schicken Ihre Stücke versichert per Post – bei Werten über 2.500 € organisieren wir einen kostenlosen Werttransport.",
          "Wir bewerten nach Gewicht, Feingehalt und Börsenkurs und kaufen neben Gold auch Silber, Platin und Palladium an.",
        ],
      },
      districts: ["Treppenviertel", "Süllberg", "Falkenstein", "Dockenhuden"],
      nearby: ["Rissen", "Sülldorf", "Nienstedten", "Iserbrook", "Othmarschen", "Wedel"],
      faqs: [
        {
          question: "Wie verkaufe ich größere Mengen Gold sicher?",
          answer:
            "Bei Werten über 2.500 € organisieren wir einen kostenlosen Werttransport. So sind auch Barren und größere Sammlungen abgesichert.",
        },
        {
          question: "Kaufen Sie auch Platinschmuck an?",
          answer:
            "Ja. Neben Gold kaufen wir Silber, Platin und Palladium an – bewertet nach dem aktuellen Kurs des jeweiligen Metalls.",
        },
      ],
    },
    {
      slug: "rahlstedt",
      name: "Rahlstedt",
      metaTitle: "Goldankauf Rahlstedt – Gold & Münzen verkaufen",
      metaDescription:
        "Gold verkaufen in Hamburg-Rahlstedt: Altgold, Schmuck, Goldmünzen und Zahngold kostenlos einsenden und zum aktuellen Börsenkurs verkaufen.",
      heroText:
        "Von Alt-Rahlstedt bis Meiendorf: Verkaufen Sie Ihr Gold aus Rahlstedt per Post – mit kostenlosem Versandpaket und Bewertung nach aktuellem Goldkurs.",
      intro: {
        title: "Goldankauf für Rahlstedt – Hamburgs größter Stadtteil, ein einfacher Weg.",
        paragraphs: [
          "Rahlstedt ist Hamburgs einwohnerstärkster Stadtteil, weit im Osten an der Grenze zu Schleswig-Holstein. Bis in die City ist es eine lange Fahrt – für den Goldverkauf reicht der Weg zur Post.",
          "Wir kaufen Goldschmuck, Münzen, Barren und Zahngold an. Jedes Stück wird einzeln gewogen, auf Feingehalt geprüft und zum Börsenkurs am Tag der Prüfung bewertet.",
          "Erst wenn Sie dem schriftlichen Angebot zustimmen, gilt der Verkauf. Bis dahin bleiben Ihre Stücke Ihr Eigentum.",
        ],
      },
      districts: ["Alt-Rahlstedt", "Neu-Rahlstedt", "Meiendorf", "Oldenfelde", "Großlohe", "Hohenhorst"],
      nearby: ["Farmsen-Berne", "Tonndorf", "Volksdorf", "Ahrensburg", "Stapelfeld", "Barsbüttel"],
      faqs: [
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online an, und wir schicken es Ihnen kostenlos zu. Danach legen Sie Ihre Stücke hinein und geben das Paket bei der Post ab.",
        },
        {
          question: "Was passiert mit meinen Stücken bis zu meiner Entscheidung?",
          answer:
            "Sie werden sicher bei uns verwahrt. Lehnen Sie das Angebot ab, senden wir alles kostenlos zurück.",
        },
      ],
    },
    {
      slug: "langenhorn",
      name: "Langenhorn",
      metaTitle: "Goldankauf Langenhorn – Altgold verkaufen per Post",
      metaDescription:
        "Goldankauf für Hamburg-Langenhorn: Altgold, Schmuck, Münzen und Zahngold per Versand verkaufen – kostenlos, versichert, nach Tageskurs bewertet.",
      heroText:
        "Aus der Fritz-Schumacher-Siedlung, Ochsenzoll oder vom Langenhorner Markt: Schicken Sie Ihr Gold versichert ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Gold verkaufen in Langenhorn – am nördlichen Stadtrand ganz nah dran.",
        paragraphs: [
          "Langenhorn liegt im Norden Hamburgs, direkt neben dem Flughafen und an der Grenze zu Norderstedt. Mit der Fritz-Schumacher-Siedlung hat der Stadtteil eine der schönsten Gartensiedlungen der Stadt.",
          "Für den Goldverkauf müssen Sie Langenhorn nicht verlassen. Sie fordern das kostenlose Versandpaket an und geben es bei der Post ab – die Sendung ist bis 2.500 € versichert.",
          "Wir bewerten nach Gewicht, Feingehalt und aktuellem Börsenkurs und listen jede Position einzeln im Angebot auf.",
        ],
      },
      districts: ["Fritz-Schumacher-Siedlung", "Ochsenzoll", "Langenhorn Markt"],
      nearby: ["Norderstedt", "Fuhlsbüttel", "Hummelsbüttel", "Niendorf", "Poppenbüttel", "Garstedt"],
      faqs: [
        {
          question: "Ich habe Schmuck geerbt und weiß nicht, ob er echt ist. Was tun?",
          answer:
            "Schicken Sie ihn einfach ein. Wir prüfen Material und Feingehalt. Stücke ohne Edelmetallanteil senden wir kostenlos zurück.",
        },
        {
          question: "Kaufen Sie auch Gold aus Norderstedt an?",
          answer:
            "Ja. Da wir ausschließlich per Versand ankaufen, ist es egal, ob Sie in Langenhorn oder Norderstedt wohnen – der Ablauf ist überall gleich.",
        },
      ],
    },
    {
      slug: "billstedt",
      name: "Billstedt",
      metaTitle: "Goldankauf Billstedt – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Hamburg-Billstedt: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – fair nach Börsenkurs bewertet.",
      heroText:
        "Von Mümmelmannsberg bis Öjendorf: Verkaufen Sie Ihr Gold aus Billstedt per Post – kostenlos, versichert und nach Tageskurs bewertet.",
      intro: {
        title: "Goldankauf für Billstedt – fairer Preis ohne Feilschen.",
        paragraphs: [
          "Billstedt im Hamburger Osten ist vielfältig: Hochhäuser in Mümmelmannsberg, ruhige Ecken am Öjendorfer See und Menschen aus vielen Ländern. Entsprechend vielfältig ist auch der Goldschmuck, der hier in den Schubladen liegt.",
          "Ob 8 Karat oder 22 Karat, Armreif oder Münze: Wir bestimmen bei jedem Stück den tatsächlichen Feingehalt und rechnen zum Börsenkurs am Tag der Prüfung ab – ohne Verhandeln.",
          "Sie schicken alles im kostenlosen Versandpaket ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Mümmelmannsberg", "Schiffbek", "Kirchsteinbek", "Öjendorf"],
      nearby: ["Horn", "Hamm", "Billbrook", "Glinde", "Barsbüttel", "Bergedorf"],
      faqs: [
        {
          question: "Wie wird der Feingehalt meines Goldes bestimmt?",
          answer:
            "Wir prüfen jedes Stück einzeln und bestimmen den tatsächlichen Goldanteil. Das Ergebnis wird im Angebot zusammen mit dem Gewicht aufgeführt.",
        },
        {
          question: "Kann ich in Billstedt persönlich vorbeikommen?",
          answer:
            "Nein. Wir kaufen ausschließlich per Versand an und haben kein Ladengeschäft in Hamburg.",
        },
      ],
    },
  ],
};

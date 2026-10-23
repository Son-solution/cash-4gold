import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const SCHLESWIG_HOLSTEIN: State = {
  id: "schleswig-holstein",
  name: "Schleswig-Holstein",
  cities: [
    {
      slug: "kiel",
      name: "Kiel",
      metaTitle: "Goldankauf Kiel – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Kiel, Düsternbrook und Gaarden: Altgold, Schmuck, Münzen und Barren kostenlos per Post verkaufen – bezahlt nach aktuellem Börsenkurs.",
      heroText:
        "Von Düsternbrook bis Schilksee: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Kiel bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Kiel – mit klarem Kurs.",
        paragraphs: [
          "In Kiel dreht sich vieles ums Wasser: Jedes Jahr im Juni kommen zur Kieler Woche Segler aus aller Welt an die Förde, und in Holtenau beginnt der Nord-Ostsee-Kanal. Hier weiß man, wie wichtig ein klarer Kurs ist.",
          "Den bekommen Sie auch bei uns: Ihr Angebot richtet sich nach dem Börsenkurs am Tag der Prüfung, nach Gewicht und Feingehalt. Alle Werte stehen für jedes Stück einzeln darin.",
          "Statt durch die Stadt zu fahren, fordern Sie unser kostenloses Versandpaket an und geben die versicherte Sendung bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Altstadt", "Düsternbrook", "Gaarden", "Wik", "Holtenau", "Schilksee"],
      nearby: ["Kronshagen", "Altenholz", "Heikendorf", "Schönkirchen", "Laboe", "Preetz"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Kiel?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Kiel. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "lubeck",
      name: "Lübeck",
      metaTitle: "Goldankauf Lübeck – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Lübeck, St. Gertrud und St. Lorenz: Goldschmuck, Münzen und Zahngold versichert einsenden – fair nach aktuellem Tageskurs bewertet.",
      heroText:
        "Ob aus der Altstadt, St. Gertrud oder Travemünde: Senden Sie Ihr Gold aus Lübeck versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Lübeck – mit dem Handschlag der Hanse.",
        paragraphs: [
          "Lübeck war die Königin der Hanse, und das Holstentor zeugt noch heute vom Reichtum der Kaufleute. In den Buddenbrooks hat Thomas Mann beschrieben, wie wichtig in Lübecker Familien ein ehrliches Geschäft war.",
          "Auf diese Ehrlichkeit können Sie bei uns zählen: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen offen zum aktuellen Börsenkurs ab.",
          "Sie schicken Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden allein Sie.",
        ],
      },
      districts: ["Innenstadt", "St. Gertrud", "St. Lorenz", "Moisling", "Kücknitz", "Travemünde"],
      nearby: ["Bad Schwartau", "Stockelsdorf", "Ratekau", "Timmendorfer Strand", "Groß Grönau", "Reinfeld"],
      faqs: [
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Was kostet mich der Versand aus Lübeck?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "flensburg",
      name: "Flensburg",
      metaTitle: "Goldankauf Flensburg – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Flensburg, Mürwik und Jürgensby: Altgold, Ringe, Ketten und Zahngold kostenlos per Versand einschicken – Auszahlung nach Goldkurs.",
      heroText:
        "Von Jürgensby bis Mürwik: Verkaufen Sie Ihr Gold aus Flensburg per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Flensburg – bei uns zählen keine Punkte, nur Gramm.",
        paragraphs: [
          "Flensburg kennt man in ganz Deutschland wegen der Punkte, doch die Stadt an der Förde hat mehr zu bieten: eine lange Tradition als Rumstadt, den historischen Hafen und Dänemark gleich um die Ecke.",
          "Bei uns zählen keine Punkte, sondern Gramm und Feingehalt. Wir wiegen jedes Stück genau und rechnen den reinen Goldanteil zum aktuellen Börsenkurs ab.",
          "Sie fordern das kostenlose Versandpaket an, legen Schmuck, Münzen oder Zahngold hinein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Altstadt", "Jürgensby", "Fruerlund", "Mürwik", "Engelsby", "Weiche"],
      nearby: ["Harrislee", "Glücksburg", "Handewitt", "Tarp", "Wanderup", "Padborg"],
      faqs: [
        {
          question: "Kann ich mein Gold in Flensburg persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Flensburg. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie bestimmen Sie den Feingehalt meines Goldes?",
          answer:
            "Wir prüfen jedes Stück einzeln. Punzen wie 333, 585 oder 750 sind ein erster Hinweis, maßgeblich ist aber unsere Prüfung. Das Ergebnis steht für jedes Stück im Angebot.",
        },
      ],
    },
    {
      slug: "neumunster",
      name: "Neumünster",
      metaTitle: "Goldankauf Neumünster – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Neumünster, Einfeld und Tungendorf: Schmuck, Münzen, Barren und Zahngold versichert per Post einsenden – nach Börsenkurs bezahlt.",
      heroText:
        "Ob aus Einfeld, Tungendorf oder der Innenstadt: Senden Sie Ihr Gold aus Neumünster versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Neumünster – mittendrin und doch ohne Weg.",
        paragraphs: [
          "Neumünster liegt im Herzen Schleswig-Holsteins und war lange eine Stadt der Tuchmacher. Heute kommen viele Menschen aus dem ganzen Land zu Messen und Veranstaltungen in die Holstenhallen.",
          "Für den Goldverkauf müssen Sie dagegen nirgendwo hin: Das kostenlose Versandpaket kommt zu Ihnen nach Hause, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Einfeld", "Tungendorf", "Faldera", "Wittorf", "Gadeland"],
      nearby: ["Bad Bramstedt", "Wasbek", "Boostedt", "Großenaspe", "Bordesholm", "Nortorf"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "norderstedt",
      name: "Norderstedt",
      metaTitle: "Goldankauf Norderstedt – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Norderstedt, Garstedt und Harksheide: Altgold, Goldschmuck und Münzen kostenlos einsenden – transparent nach aktuellem Tageskurs.",
      heroText:
        "Von Garstedt bis Friedrichsgabe: Verkaufen Sie Altgold, Schmuck und Münzen aus Norderstedt bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Norderstedt – modern und unkompliziert.",
        paragraphs: [
          "Norderstedt ist eine junge Stadt: Erst 1970 entstand sie aus vier Gemeinden direkt an der Hamburger Stadtgrenze. Heute ist sie die fünftgrößte Stadt Schleswig-Holsteins, mit einem großen Stadtpark als grünem Mittelpunkt.",
          "Modern und unkompliziert ist auch der Goldverkauf bei uns: Sie fordern das kostenlose Versandpaket online an und geben Ihre Stücke versichert bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und machen Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs.",
        ],
      },
      districts: ["Norderstedt-Mitte", "Garstedt", "Harksheide", "Friedrichsgabe", "Glashütte"],
      nearby: ["Hamburg", "Henstedt-Ulzburg", "Quickborn", "Tangstedt", "Ellerau", "Kaltenkirchen"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Norderstedt?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Norderstedt. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "elmshorn",
      name: "Elmshorn",
      metaTitle: "Goldankauf Elmshorn – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Elmshorn und Hainholz: Ringe, Ketten, Münzen und Zahngold versichert per Versand einschicken – fair nach aktuellem Goldkurs bezahlt.",
      heroText:
        "Ob aus Hainholz, Langelohe oder der Innenstadt: Senden Sie Ihr Gold aus Elmshorn versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Elmshorn – mit Kenneraugen geprüft.",
        paragraphs: [
          "Elmshorn an der Krückau ist die Heimat des Holsteiner Verbands, und Holsteiner Pferde gehören zu den erfolgreichsten Springpferden der Welt. Wer hier züchtet, schaut sehr genau hin.",
          "Genau hinschauen tun auch wir: Jedes Stück wird gewogen, der Feingehalt wird bestimmt, und wir rechnen zum aktuellen Börsenkurs ab.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Hainholz", "Langelohe", "Vormstegen", "Köhnholz", "Klostersande"],
      nearby: ["Barmstedt", "Uetersen", "Horst", "Kölln-Reisiek", "Klein Nordende", "Seester"],
      faqs: [
        {
          question: "Kann ich auch einzelne Ohrringe oder kaputte Ketten einsenden?",
          answer:
            "Ja. Einzelne Ohrringe, gerissene Ketten oder verbogene Ringe kaufen wir genauso an. Bewertet wird allein der Goldgehalt.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "pinneberg",
      name: "Pinneberg",
      metaTitle: "Goldankauf Pinneberg – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Pinneberg, Thesdorf und Waldenau: Altgold, Schmuck und Zahngold kostenlos per Post verkaufen – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Quellental bis Waldenau: Verkaufen Sie Ihr Gold aus Pinneberg per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Pinneberg – ohne Dornen.",
        paragraphs: [
          "Pinneberg nennt sich Rosenstadt, und rund um die Stadt liegt eines der größten Baumschulgebiete Europas. Im Zentrum erinnert die Drostei an die Zeit, als hier die dänischen Landdrosten residierten.",
          "Rosen haben Dornen, unser Angebot nicht: Für jedes Stück sehen Sie Gewicht, Feingehalt und Kurs, ohne versteckte Abzüge und ohne Kleingedrucktes.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Quellental", "Waldenau", "Thesdorf"],
      nearby: ["Rellingen", "Halstenbek", "Tornesch", "Prisdorf", "Kummerfeld", "Appen"],
      faqs: [
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
        {
          question: "Ist meine Sendung aus Pinneberg versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
      ],
    },
    {
      slug: "itzehoe",
      name: "Itzehoe",
      metaTitle: "Goldankauf Itzehoe – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Itzehoe und der Steinburger Region: Goldschmuck, Münzen und Zahngold versichert einsenden – Auszahlung nach aktuellem Tageskurs.",
      heroText:
        "Ob aus Tegelhörn, Edendorf oder der Innenstadt: Senden Sie Ihr Gold aus Itzehoe versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Itzehoe – Tradition trifft auf faire Zahlen.",
        paragraphs: [
          "Itzehoe an der Stör gilt als älteste Stadt Holsteins. Über Jahrhunderte war sie ein wichtiger Markt- und Handelsort zwischen Marsch und Geest.",
          "Ein guter Handel lebt von fairen Zahlen. Deshalb bewerten wir Ihr Gold nach Gewicht, Feingehalt und dem aktuellen Börsenkurs und weisen jeden Wert einzeln aus.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Innenstadt", "Tegelhörn", "Edendorf", "Wellenkamp", "Sude", "Klosterforst"],
      nearby: ["Heiligenstedten", "Breitenburg", "Kellinghusen", "Wilster", "Lägerdorf", "Glückstadt"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldmünzen an?",
          answer:
            "Ja. Wir kaufen Anlagemünzen wie Krügerrand oder Maple Leaf ebenso wie ältere Goldmünzen. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Das Angebot ist unverbindlich. Lehnen Sie ab, senden wir Ihnen Ihre Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "rendsburg",
      name: "Rendsburg",
      metaTitle: "Goldankauf Rendsburg – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Rendsburg und Büdelsdorf: Altgold, Ringe, Münzen und Barren kostenlos per Versand einschicken – fair nach aktuellem Goldkurs bezahlt.",
      heroText:
        "Von der Altstadt bis Neuwerk: Verkaufen Sie Altgold, Schmuck und Münzen aus Rendsburg bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Rendsburg – wir schlagen die Brücke.",
        paragraphs: [
          "Über den Nord-Ostsee-Kanal spannt sich in Rendsburg die Eisenbahnhochbrücke, an der eine Schwebefähre hängt. Seit über hundert Jahren bringt sie Fußgänger und Autos von einem Ufer zum anderen.",
          "Wir schlagen die Brücke zwischen Ihrem alten Schmuck und einem fairen Preis: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Das kostenlose Versandpaket kommt zu Ihnen nach Hause. Sie geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Altstadt", "Neuwerk", "Kronwerk", "Hoheluft", "Mastbrook", "Schleife"],
      nearby: ["Büdelsdorf", "Osterrönfeld", "Westerrönfeld", "Schacht-Audorf", "Fockbek", "Nübbel"],
      faqs: [
        {
          question: "Kann ich mein Gold in Rendsburg persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Rendsburg. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Muss ich Edelsteine vorher entfernen?",
          answer:
            "Nein. Schmuck mit Steinen nehmen wir ebenfalls an. Bewertet wird der Goldanteil – die Steine berücksichtigen wir beim Gewicht entsprechend.",
        },
      ],
    },
    {
      slug: "husum",
      name: "Husum",
      metaTitle: "Goldankauf Husum – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Husum und an der Nordseeküste: Schmuck, Münzen und Zahngold versichert per Post einsenden – transparent nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Innenstadt, Rödemis oder Schobüll: Senden Sie Ihr Gold aus Husum versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Husum – Farbe in die graue Stadt am Meer.",
        paragraphs: [
          "Theodor Storm nannte seine Heimatstadt die graue Stadt am Meer. Doch jeden Frühling blühen im Husumer Schlosspark Millionen Krokusse, und der Hafen mit seinen bunten Häusern ist alles andere als grau.",
          "Etwas Farbe bringt auch ein fairer Goldverkauf: Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und weisen alle Werte einzeln aus.",
          "Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab. Ob Sie das Angebot annehmen, entscheiden Sie.",
        ],
      },
      districts: ["Innenstadt", "Rödemis", "Dreimühlen", "Nordhusum", "Schobüll"],
      nearby: ["Mildstedt", "Schwesing", "Hattstedt", "Simonsberg", "Friedrichstadt", "Bredstedt"],
      faqs: [
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
      ],
    },
    {
      slug: "ahrensburg",
      name: "Ahrensburg",
      metaTitle: "Goldankauf Ahrensburg – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Ahrensburg und Großhansdorf: Altgold, Goldketten, Münzen und Zahngold kostenlos einsenden – bezahlt nach aktuellem Tageskurs.",
      heroText:
        "Von Gartenholz bis Wulfsdorf: Verkaufen Sie Ihr Gold aus Ahrensburg per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Ahrensburg – mit Stil und Diskretion.",
        paragraphs: [
          "Das weiße Renaissanceschloss ist das Wahrzeichen Ahrensburgs und eines der schönsten Herrenhäuser Schleswig-Holsteins. Die Stadt im Speckgürtel Hamburgs ist ruhig, grün und gepflegt.",
          "Diskretion ist beim Goldverkauf vielen wichtig. Bei uns brauchen Sie keinen Termin vor Ort: Sie senden Ihre Stücke im neutralen, versicherten Paket ein.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Innenstadt", "Gartenholz", "Hagen", "Wulfsdorf", "Ahrensfelde", "Bünningstedt"],
      nearby: ["Großhansdorf", "Bargteheide", "Ammersbek", "Delingsdorf", "Siek", "Hamburg"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Ahrensburg?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Ahrensburg. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
      ],
    },
    {
      slug: "wedel",
      name: "Wedel",
      metaTitle: "Goldankauf Wedel – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Wedel, Schulau und Spitzerdorf: Goldschmuck, Münzen und Barren versichert per Versand einschicken – fair nach aktuellem Goldkurs.",
      heroText:
        "Ob aus Schulau, Spitzerdorf oder der Innenstadt: Senden Sie Ihr Gold aus Wedel versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Wedel – Ihr Paket geht auf große Fahrt.",
        paragraphs: [
          "Am Willkomm-Höft in Wedel wird jedes große Schiff auf der Elbe mit seiner Nationalhymne begrüßt. Am Marktplatz wacht seit Jahrhunderten der steinerne Roland über die Stadt.",
          "Auch Ihr Paket geht auf Fahrt – kostenlos und versichert. Sie fordern das Versandpaket an, legen Ihre Stücke hinein und geben es bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Schulau", "Spitzerdorf"],
      nearby: ["Hamburg-Rissen", "Holm", "Hetlingen", "Haseldorf", "Appen", "Schenefeld"],
      faqs: [
        {
          question: "Was kostet mich der Versand aus Wedel?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "geesthacht",
      name: "Geesthacht",
      metaTitle: "Goldankauf Geesthacht – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Geesthacht, Düneberg und Tesperhude: Altgold, Ringe und Zahngold kostenlos per Post verkaufen – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Düneberg bis Tesperhude: Verkaufen Sie Altgold, Schmuck und Münzen aus Geesthacht bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Geesthacht – Schritt für Schritt geregelt.",
        paragraphs: [
          "In Geesthacht steht die einzige Staustufe der Elbe in Deutschland. Hier wird der Fluss in geordnete Bahnen gelenkt, und Schiffe werden Stufe für Stufe durch die Schleuse geführt.",
          "Genauso geordnet läuft der Goldverkauf bei uns: Versandpaket anfordern, Stücke versichert einsenden, schriftliches Angebot erhalten und in Ruhe entscheiden.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und dem aktuellen Börsenkurs. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Innenstadt", "Düneberg", "Grünhof", "Tesperhude", "Krümmel"],
      nearby: ["Hamburg-Bergedorf", "Börnsen", "Escheburg", "Hamwarde", "Lauenburg", "Tespe"],
      faqs: [
        {
          question: "Kann ich mein Gold in Geesthacht persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Geesthacht. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "bad-segeberg",
      name: "Bad Segeberg",
      metaTitle: "Goldankauf Bad Segeberg – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Bad Segeberg und Wahlstedt: Schmuck, Münzen und Zahngold versichert einsenden – nach Gewicht und Feingehalt zum Tageskurs bezahlt.",
      heroText:
        "Ob aus der Innenstadt, Christiansfelde oder Klein Niendorf: Senden Sie Ihr Gold aus Bad Segeberg versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Bad Segeberg – Ihr Schatz muss nicht im Silbersee liegen.",
        paragraphs: [
          "Jeden Sommer reiten Winnetou und Old Shatterhand bei den Karl-May-Spielen am Kalkberg, und oft geht es dabei um verborgene Schätze. Unter dem Kalkberg liegt außerdem die Segeberger Kalkberghöhle.",
          "Ihr Schatz liegt vielleicht nicht im Silbersee, sondern in der Schmuckschatulle. Wir bewerten jedes Stück nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Christiansfelde", "Klein Niendorf"],
      nearby: ["Wahlstedt", "Klein Rönnau", "Fahrenkrug", "Trappenkamp", "Bornhöved", "Bad Bramstedt"],
      faqs: [
        {
          question: "Ist meine Sendung aus Bad Segeberg versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
        {
          question: "Kann ich auch einzelne Ohrringe oder kaputte Ketten einsenden?",
          answer:
            "Ja. Einzelne Ohrringe, gerissene Ketten oder verbogene Ringe kaufen wir genauso an. Bewertet wird allein der Goldgehalt.",
        },
      ],
    },
    {
      slug: "eckernforde",
      name: "Eckernförde",
      metaTitle: "Goldankauf Eckernförde – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Eckernförde und Borby: Altgold, Goldschmuck, Münzen und Zahngold kostenlos per Versand einschicken – fair nach Goldkurs bezahlt.",
      heroText:
        "Von der Altstadt bis Borby: Verkaufen Sie Ihr Gold aus Eckernförde per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Eckernförde – so entspannt wie ein Tag an der Bucht.",
        paragraphs: [
          "Eckernförde liegt an einer der schönsten Buchten der Ostsee, mit Sandstrand direkt an der Altstadt. Bekannt ist das Ostseebad für seine Fischräuchereien, in denen die Kieler Sprotten seit jeher geräuchert werden.",
          "Genauso entspannt verkaufen Sie bei uns Ihr Gold: Das kostenlose Versandpaket kommt zu Ihnen, die versicherte Sendung geben Sie bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs. Ohne Zeitdruck entscheiden Sie, ob Sie annehmen.",
        ],
      },
      districts: ["Altstadt", "Borby", "Sandkrug"],
      nearby: ["Gettorf", "Altenhof", "Barkelsby", "Gammelby", "Windeby", "Fleckeby"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Eckernförde?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Eckernförde. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
  ],
};

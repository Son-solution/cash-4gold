import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const BADEN_WUERTTEMBERG: State = {
  id: "baden-wuerttemberg",
  name: "Baden-Württemberg",
  cities: [
    {
      slug: "stuttgart",
      name: "Stuttgart",
      metaTitle: "Goldankauf Stuttgart – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Stuttgart: Altgold, Schmuck, Münzen, Barren und Zahngold bequem per Versand – bewertet nach aktuellem Börsenkurs, versichert und kostenfrei.",
      heroText:
        "Von Bad Cannstatt bis Vaihingen: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Stuttgart bequem per Post – bewertet nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Stuttgart – ohne Parkplatzsuche im Kessel.",
        paragraphs: [
          "Wer in der Landeshauptstadt Gold verkaufen möchte, muss dafür nicht durch die Innenstadt fahren. Bei Cash 4 Gold läuft der Ankauf vollständig per Versand: Sie fordern Ihr kostenloses Versandpaket an, schicken Ihre Stücke versichert ein und erhalten nach der Prüfung ein schriftliches Angebot.",
          "Ob geerbter Familienschmuck aus Degerloch, Goldmünzen aus einer Sammlung in Feuerbach oder Zahngold aus der Schublade in Zuffenhausen – wir bewerten jedes Stück nach Gewicht, Feingehalt und dem Tageskurs. Jede Position ist im Angebot einzeln aufgeschlüsselt.",
          "Sie entscheiden in Ruhe. Erst nach Ihrer Zusage überweisen wir den Betrag auf Ihr Konto.",
        ],
      },
      districts: ["Bad Cannstatt", "Vaihingen", "Degerloch", "Feuerbach", "Zuffenhausen", "Möhringen"],
      nearby: ["Ludwigsburg", "Esslingen", "Böblingen", "Sindelfingen", "Fellbach", "Leonberg"],
      faqs: [
        {
          question: "Kann ich in Stuttgart persönlich vorbeikommen?",
          answer:
            "Nein. Wir kaufen ausschließlich online und per Post an und haben kein Ladengeschäft in Stuttgart. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein – bequem von zu Hause.",
        },
        {
          question: "Wie lange ist ein Paket aus Stuttgart unterwegs?",
          answer:
            "Versicherte Sendungen innerhalb Deutschlands sind in der Regel nach wenigen Werktagen bei uns. Sobald Ihr Paket eingetroffen und geprüft ist, erhalten Sie Ihr Angebot.",
        },
      ],
    },
    {
      slug: "mannheim",
      name: "Mannheim",
      metaTitle: "Goldankauf Mannheim – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Mannheim und die Rhein-Neckar-Region: Altgold, Goldschmuck, Münzen und Zahngold per Versand verkaufen – transparent nach Tageskurs bewertet.",
      heroText:
        "Ob aus den Quadraten, Neckarau oder Käfertal: Senden Sie Ihr Gold aus Mannheim versichert ein und erhalten Sie ein transparentes Angebot auf Basis des aktuellen Börsenkurses.",
      intro: {
        title: "Goldankauf für Mannheim – fair bewertet, sicher versendet.",
        paragraphs: [
          "In der Quadratestadt ist vieles gut geplant – auch der Verkauf Ihres Goldes sollte es sein. Statt mehrere Ankaufstellen abzuklappern, schicken Sie Ihre Stücke einfach per Post an uns und erhalten ein nachvollziehbares Angebot.",
          "Wir kaufen Altgold, Ketten, Ringe, Münzen, Barren und Zahngold – auch beschädigt oder unvollständig. Maßgeblich sind allein Gewicht, Feingehalt und der Börsenkurs am Tag der Bewertung.",
          "Der Versand ist für Sie kostenlos und bis 2.500 € versichert. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        ],
      },
      districts: ["Innenstadt/Quadrate", "Neckarau", "Käfertal", "Feudenheim", "Lindenhof", "Neckarstadt"],
      nearby: ["Ludwigshafen", "Heidelberg", "Weinheim", "Schwetzingen", "Viernheim", "Hockenheim"],
      faqs: [
        {
          question: "Kaufen Sie auch Gold aus der ganzen Rhein-Neckar-Region an?",
          answer:
            "Ja. Da wir ausschließlich per Versand ankaufen, ist es egal, ob Sie in Mannheim, Ludwigshafen oder Weinheim wohnen – der Ablauf ist überall in Deutschland gleich.",
        },
        {
          question: "Muss ich mein Gold vorher reinigen oder sortieren?",
          answer:
            "Nein. Sie können Ihre Stücke so einsenden, wie sie sind. Wir prüfen jedes Teil einzeln und listen Gewicht und Feingehalt im Angebot auf.",
        },
      ],
    },
    {
      slug: "karlsruhe",
      name: "Karlsruhe",
      metaTitle: "Goldankauf Karlsruhe – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Karlsruhe: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden, nach Börsenkurs bewerten lassen und schnell ausgezahlt bekommen.",
      heroText:
        "Von Durlach bis Neureut: Verkaufen Sie Ihr Gold aus Karlsruhe per Post – mit kostenlosem Versandpaket, transparenter Bewertung und zügiger Überweisung.",
      intro: {
        title: "Gold verkaufen in der Fächerstadt – einfach von zu Hause.",
        paragraphs: [
          "Viele Karlsruher haben Gold zu Hause, das seit Jahren ungenutzt liegt: einzelne Ohrringe, gerissene Ketten, alte Eheringe oder Münzen. Mit Cash 4 Gold machen Sie daraus ohne Aufwand Geld – ganz ohne Termin vor Ort.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein. Wir ermitteln Gewicht und Feingehalt und berechnen den Preis auf Grundlage des aktuellen Börsenkurses. Das Angebot ist unverbindlich.",
          "Vorab können Sie mit unserem Wertrechner selbst eine Schätzung erstellen – so wissen Sie schon vor dem Versand, in welcher Größenordnung Ihr Gold liegt.",
        ],
      },
      districts: ["Durlach", "Mühlburg", "Südweststadt", "Oststadt", "Neureut", "Grötzingen"],
      nearby: ["Ettlingen", "Bruchsal", "Rastatt", "Stutensee", "Rheinstetten", "Pfinztal"],
      faqs: [
        {
          question: "Wie kann ich den Wert meines Goldes vorab einschätzen?",
          answer:
            "Mit unserem Wertrechner auf dieser Seite: Metall, Feingehalt und Gewicht eingeben, und Sie sehen sofort eine unverbindliche Schätzung auf Basis des Tageskurses.",
        },
        {
          question: "Gibt es eine Mindestmenge für den Ankauf?",
          answer:
            "Nein. Auch einzelne Ringe oder ein einzelner Ohrring werden angekauft. Entscheidend sind Gewicht und Feingehalt.",
        },
      ],
    },
    {
      slug: "freiburg",
      name: "Freiburg",
      metaTitle: "Goldankauf Freiburg – Altgold verkaufen zum Tagespreis",
      metaDescription:
        "Goldankauf für Freiburg im Breisgau: Altgold, Schmuck, Münzen und Zahngold per Post verkaufen – versichert, kostenfrei und transparent nach Börsenkurs.",
      heroText:
        "Aus der Wiehre, aus Herdern oder aus dem Schwarzwald-Umland: Schicken Sie Ihr Gold aus Freiburg versichert ein und erhalten Sie ein faires Angebot zum Tageskurs.",
      intro: {
        title: "Goldankauf für Freiburg und den Breisgau.",
        paragraphs: [
          "Zwischen Schwarzwald und Rheinebene sind die Wege oft weit. Mit unserem Versandankauf verkaufen Sie Ihr Gold aus Freiburg und Umgebung, ohne dafür extra in die Stadt fahren zu müssen.",
          "Wir bewerten Goldschmuck, Münzen, Barren und Zahngold ebenso wie Silber, Platin und Palladium. Grundlage ist immer der aktuelle Börsenkurs – ohne versteckte Abzüge.",
          "Sie erhalten ein schriftliches, aufgeschlüsseltes Angebot. Erst wenn Sie zustimmen, überweisen wir den Betrag.",
        ],
      },
      districts: ["Wiehre", "Herdern", "Littenweiler", "Haslach", "Zähringen", "Vauban"],
      nearby: ["Emmendingen", "Breisach", "Kirchzarten", "Bad Krozingen", "Waldkirch", "Staufen"],
      faqs: [
        {
          question: "Kaufen Sie auch Silber und Platin aus Freiburg an?",
          answer:
            "Ja. Neben Gold kaufen wir auch Silber, Platin und Palladium an – etwa Silberbesteck, Silbermünzen oder Platinschmuck. Alles wird nach aktuellem Kurs bewertet.",
        },
        {
          question: "Ist mein Paket aus Freiburg versichert?",
          answer:
            "Ja. Mit unserem kostenlosen Versandpaket ist Ihre Sendung bis 2.500 € versichert. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        },
      ],
    },
    {
      slug: "heidelberg",
      name: "Heidelberg",
      metaTitle: "Goldankauf Heidelberg – Schmuck & Münzen verkaufen",
      metaDescription:
        "Gold verkaufen in Heidelberg: Goldschmuck, Münzen, Barren und Zahngold bequem per Versand einsenden – fair bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Ob Altstadt, Handschuhsheim oder Rohrbach: Verkaufen Sie Ihr Gold aus Heidelberg per Post und erhalten Sie ein transparentes Angebot nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Heidelberg – diskret und nachvollziehbar.",
        paragraphs: [
          "Ein Goldverkauf ist oft eine persönliche Angelegenheit – etwa nach einem Erbfall oder beim Aufräumen alter Schmuckkästchen. Mit dem Versandankauf erledigen Sie alles diskret von zu Hause aus, ohne Gespräch am Tresen.",
          "Wir prüfen jedes Stück fachgerecht und weisen Gewicht, Feingehalt und Kurs im Angebot einzeln aus. So können Sie jede Position nachrechnen.",
          "Auch Münzsammlungen und kleine Barren nehmen wir gerne an. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        ],
      },
      districts: ["Altstadt", "Handschuhsheim", "Neuenheim", "Rohrbach", "Kirchheim", "Bergheim"],
      nearby: ["Mannheim", "Leimen", "Wiesloch", "Eppelheim", "Dossenheim", "Schwetzingen"],
      faqs: [
        {
          question: "Ich habe Schmuck geerbt – kann ich ihn verkaufen?",
          answer:
            "Ja. Geerbter Schmuck macht einen großen Teil unserer Ankäufe aus. Sie senden die Stücke ein, wir bewerten sie, und Sie entscheiden anschließend in Ruhe über unser Angebot.",
        },
        {
          question: "Kaufen Sie auch Goldmünzen und Sammlungen an?",
          answer:
            "Ja. Goldmünzen wie Krügerrand, Maple Leaf oder Philharmoniker sowie ganze Sammlungen bewerten wir nach Feingewicht und aktuellem Kurs.",
        },
      ],
    },
    {
      slug: "heilbronn",
      name: "Heilbronn",
      metaTitle: "Goldankauf Heilbronn – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Heilbronn und Umgebung: Altgold, Schmuck, Zahngold und Münzen per Versand verkaufen – kostenloses Versandpaket, schnelle Auszahlung.",
      heroText:
        "Von Böckingen bis Sontheim: Senden Sie Ihr Altgold aus Heilbronn kostenlos und versichert ein – bewertet wird nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
      intro: {
        title: "Altgold verkaufen in Heilbronn – so einfach geht's.",
        paragraphs: [
          "Ob in der Käthchenstadt selbst oder in den Weinorten entlang des Neckars: Mit Cash 4 Gold verkaufen Sie Ihr Gold ganz ohne Fahrtweg. Sie bestellen das kostenlose Versandpaket, wir übernehmen den Rest.",
          "Nach dem Eingang Ihrer Sendung prüfen wir jedes Stück auf Feingehalt und Gewicht. Sie erhalten ein Angebot, in dem jede Position nachvollziehbar aufgeführt ist.",
          "Nach Ihrer Zusage überweisen wir zügig auf Ihr Konto – ohne Gebühren, ohne Abzüge für Versand oder Prüfung.",
        ],
      },
      districts: ["Böckingen", "Sontheim", "Neckargartach", "Frankenbach", "Biberach", "Klingenberg"],
      nearby: ["Neckarsulm", "Weinsberg", "Bad Friedrichshall", "Lauffen am Neckar", "Bad Rappenau", "Flein"],
      faqs: [
        {
          question: "Was kostet mich der Goldverkauf aus Heilbronn?",
          answer:
            "Nichts. Versandpaket, Versicherung, Prüfung und Angebot sind kostenfrei. Sie erhalten den im Angebot genannten Betrag ohne Abzüge.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Sobald Sie unserem Angebot zustimmen, veranlassen wir die Überweisung zügig. Die Gutschrift hängt dann nur noch von Ihrer Bank ab.",
        },
      ],
    },
    {
      slug: "ulm",
      name: "Ulm",
      metaTitle: "Goldankauf Ulm – Gold & Silber verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Ulm: Schmuck, Münzen, Barren, Zahngold und Silber per Versand einsenden – transparent nach Tageskurs bewertet, versichert bis 2.500 €.",
      heroText:
        "Ob Söflingen, Wiblingen oder auf der anderen Donauseite in Neu-Ulm: Verkaufen Sie Ihr Gold bequem per Post zum fairen Tagespreis.",
      intro: {
        title: "Goldankauf für Ulm – auf beiden Seiten der Donau.",
        paragraphs: [
          "Ulm liegt direkt an der Grenze zu Bayern – für unseren Versandankauf spielt das keine Rolle. Ob Sie in Ulm, Neu-Ulm oder im Alb-Donau-Kreis wohnen: Der Ablauf ist überall gleich einfach.",
          "Senden Sie uns Goldschmuck, Münzen, Barren oder Zahngold im versicherten Versandpaket. Wir bewerten nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Auch Silberbesteck, Silbermünzen und Platinschmuck kaufen wir an – alles in einem Paket, alles in einem Angebot.",
        ],
      },
      districts: ["Söflingen", "Wiblingen", "Böfingen", "Eselsberg", "Weststadt", "Oststadt"],
      nearby: ["Neu-Ulm", "Blaubeuren", "Ehingen", "Laupheim", "Senden", "Langenau"],
      faqs: [
        {
          question: "Kann ich Gold und Silber zusammen einsenden?",
          answer:
            "Ja. Sie können Gold, Silber, Platin und Palladium gemeinsam in einem Paket schicken. Im Angebot wird jede Position getrennt aufgeführt.",
        },
        {
          question: "Kaufen Sie auch aus Neu-Ulm und Bayern an?",
          answer:
            "Ja. Wir kaufen deutschlandweit per Versand an – der Ablauf ist für Ulm und Neu-Ulm identisch.",
        },
      ],
    },
    {
      slug: "pforzheim",
      name: "Pforzheim",
      metaTitle: "Goldankauf Pforzheim – Gold verkaufen in der Goldstadt",
      metaDescription:
        "Goldankauf für Pforzheim: Goldschmuck, Uhren-Gold, Münzen, Barren und Zahngold per Versand verkaufen – nach Feingehalt und Börsenkurs bewertet.",
      heroText:
        "In der Goldstadt liegt in vielen Haushalten Schmuck aus Jahrzehnten. Verkaufen Sie Ihr Gold aus Pforzheim bequem per Post – bewertet nach Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in der Goldstadt Pforzheim.",
        paragraphs: [
          "Pforzheim ist seit dem 18. Jahrhundert ein Zentrum der Schmuck- und Uhrenherstellung. Entsprechend viel Gold findet sich in den Schubladen der Stadt – vom klassischen 585er Ring bis zum 750er Collier.",
          "Gerade bei Schmuck mit unterschiedlichen Legierungen lohnt sich eine genaue Prüfung. Wir bestimmen den Feingehalt jedes Stücks und berechnen den Preis auf Basis des aktuellen Börsenkurses.",
          "Sie senden Ihre Stücke kostenlos und versichert ein und erhalten ein aufgeschlüsseltes Angebot – ganz ohne Termin.",
        ],
      },
      districts: ["Brötzingen", "Eutingen", "Dillweißenstein", "Büchenbronn", "Haidach", "Nordstadt"],
      nearby: ["Mühlacker", "Niefern-Öschelbronn", "Birkenfeld", "Remchingen", "Keltern", "Königsbach-Stein"],
      faqs: [
        {
          question: "Was bedeuten die Stempel 333, 585 und 750?",
          answer:
            "Die Zahl gibt den Goldanteil in Tausendstel an: 333 steht für 8 Karat (33,3 % Gold), 585 für 14 Karat und 750 für 18 Karat. Je höher der Wert, desto mehr ist das Stück wert.",
        },
        {
          question: "Kaufen Sie auch Schmuck ohne Stempel an?",
          answer:
            "Ja. Stücke ohne Punze prüfen wir fachgerecht auf ihren Feingehalt. Das Ergebnis finden Sie im Angebot.",
        },
      ],
    },
    {
      slug: "reutlingen",
      name: "Reutlingen",
      metaTitle: "Goldankauf Reutlingen – Altgold & Zahngold verkaufen",
      metaDescription:
        "Gold verkaufen in Reutlingen: Altgold, Schmuck, Münzen und Zahngold kostenlos per Versand einsenden – transparent bewertet, schnell ausgezahlt.",
      heroText:
        "Unter der Achalm und am Rand der Schwäbischen Alb: Verkaufen Sie Ihr Gold aus Reutlingen per Post – mit kostenlosem Versandpaket und fairer Bewertung.",
      intro: {
        title: "Goldankauf für Reutlingen und die Schwäbische Alb.",
        paragraphs: [
          "Ob in Betzingen, Orschel-Hagen oder in den Orten am Albtrauf: Mit unserem Versandankauf ist der Weg zum Goldverkauf so kurz wie der zum nächsten Briefkasten.",
          "Wir kaufen Altgold in jeder Form – auch Zahngold wie Kronen, Brücken und Inlays. Diese bewerten wir nach Legierung und Edelmetallanteil.",
          "Ihr Angebot ist unverbindlich. Erst nach Ihrer Zusage wird ausgezahlt.",
        ],
      },
      districts: ["Betzingen", "Orschel-Hagen", "Sondelfingen", "Rommelsbach", "Gönningen", "Ohmenhausen"],
      nearby: ["Metzingen", "Pfullingen", "Tübingen", "Eningen unter Achalm", "Bad Urach", "Lichtenstein"],
      faqs: [
        {
          question: "Wie wird Zahngold bewertet?",
          answer:
            "Zahngold besteht aus Legierungen mit Gold, oft auch Platin und Palladium. Wir bestimmen den Edelmetallanteil und berechnen den Preis nach den aktuellen Kursen.",
        },
        {
          question: "Muss ich Zahngold von Zahnresten befreien?",
          answer:
            "Nein. Sie können Zahngold so einsenden, wie Sie es erhalten haben. Nicht-metallische Anteile werden bei der Bewertung berücksichtigt.",
        },
      ],
    },
    {
      slug: "esslingen",
      name: "Esslingen",
      metaTitle: "Goldankauf Esslingen – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Esslingen am Neckar: Schmuck, Münzen, Barren und Zahngold per Post verkaufen – kostenloser Versand, transparente Bewertung.",
      heroText:
        "Ob Mettingen, Berkheim oder Zell: Senden Sie Ihr Gold aus Esslingen kostenlos ein und erhalten Sie ein Angebot nach Gewicht, Feingehalt und Börsenkurs.",
      intro: {
        title: "Gold verkaufen in Esslingen am Neckar.",
        paragraphs: [
          "Zwischen Fachwerk-Altstadt und Weinbergen wohnt man in Esslingen gerne – und muss für einen Goldverkauf nicht nach Stuttgart fahren. Unser Versandankauf kommt direkt zu Ihnen nach Hause.",
          "Sie fordern das kostenlose Versandpaket an, legen Ihre Stücke hinein und geben es versichert auf. Wir prüfen und melden uns mit einem schriftlichen Angebot.",
          "Jede Position ist mit Gewicht, Feingehalt und Kurs aufgeschlüsselt – so wissen Sie genau, wie der Preis zustande kommt.",
        ],
      },
      districts: ["Mettingen", "Berkheim", "Zell", "Oberesslingen", "Sirnau", "Weil"],
      nearby: ["Stuttgart", "Ostfildern", "Plochingen", "Denkendorf", "Wendlingen", "Altbach"],
      faqs: [
        {
          question: "Wie fordere ich das Versandpaket an?",
          answer:
            "Über das Kontaktformular auf dieser Seite oder telefonisch Mo–Fr von 8 bis 17 Uhr. Das Paket ist für Sie kostenlos.",
        },
        {
          question: "Ist das Angebot verbindlich für mich?",
          answer:
            "Nein. Unser Angebot ist unverbindlich. Sie entscheiden in Ruhe, ob Sie verkaufen möchten.",
        },
      ],
    },
    {
      slug: "tubingen",
      name: "Tübingen",
      metaTitle: "Goldankauf Tübingen – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Tübingen: Altgold, Goldschmuck, Münzen und Zahngold versichert einsenden – bewertet nach aktuellem Börsenkurs, ohne versteckte Kosten.",
      heroText:
        "Von der Neckarfront bis Waldhäuser-Ost: Verkaufen Sie Ihr Gold aus Tübingen bequem per Post – fair bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Goldankauf für die Universitätsstadt Tübingen.",
        paragraphs: [
          "In Tübingen sind die Gassen eng und die Parkplätze knapp. Für den Goldverkauf brauchen Sie beides nicht: Bei uns läuft alles per Post – vom Versandpaket bis zur Überweisung.",
          "Wir bewerten Goldschmuck, Münzen, Barren und Zahngold nach dem aktuellen Börsenkurs. Ihr Angebot zeigt jede Position einzeln, damit Sie alles nachvollziehen können.",
          "Unser Wertrechner gibt Ihnen schon vorab eine unverbindliche Einschätzung – ganz ohne Anmeldung.",
        ],
      },
      districts: ["Lustnau", "Derendingen", "Weilheim", "Hagelloch", "Unterjesingen", "Waldhäuser-Ost"],
      nearby: ["Rottenburg am Neckar", "Reutlingen", "Mössingen", "Kirchentellinsfurt", "Ammerbuch", "Dußlingen"],
      faqs: [
        {
          question: "Brauche ich ein Kundenkonto für den Verkauf?",
          answer:
            "Nein. Sie fordern einfach das Versandpaket an oder senden Ihre Stücke selbst versichert ein. Für die Auszahlung benötigen wir nur Ihre Kontodaten.",
        },
        {
          question: "Kann ich auch selbst ein Paket verschicken?",
          answer:
            "Ja. Alternativ zum kostenlosen Versandpaket können Sie Ihre Stücke auch selbst versichert an uns senden.",
        },
      ],
    },
    {
      slug: "ludwigsburg",
      name: "Ludwigsburg",
      metaTitle: "Goldankauf Ludwigsburg – Schmuck & Altgold verkaufen",
      metaDescription:
        "Goldankauf für Ludwigsburg: Goldschmuck, Altgold, Münzen und Zahngold per Versand verkaufen – kostenfrei, versichert und transparent nach Tageskurs.",
      heroText:
        "Ob Eglosheim, Hoheneck oder Oßweil: Senden Sie Ihr Gold aus Ludwigsburg versichert ein und erhalten Sie ein faires Angebot zum aktuellen Tageskurs.",
      intro: {
        title: "Gold verkaufen in der Barockstadt Ludwigsburg.",
        paragraphs: [
          "Ob Schmuck aus Großmutters Zeiten oder moderne Goldketten: In vielen Ludwigsburger Haushalten liegt Gold, das nicht mehr getragen wird. Mit Cash 4 Gold verkaufen Sie es einfach per Post.",
          "Wir prüfen Ihre Stücke fachgerecht und berechnen den Preis transparent nach Gewicht, Feingehalt und Börsenkurs. Versteckte Gebühren gibt es nicht.",
          "Nach Ihrer Zusage überweisen wir zügig. Lehnen Sie ab, bleibt das Angebot für Sie unverbindlich.",
        ],
      },
      districts: ["Eglosheim", "Hoheneck", "Oßweil", "Grünbühl", "Poppenweiler", "Neckarweihingen"],
      nearby: ["Kornwestheim", "Bietigheim-Bissingen", "Asperg", "Möglingen", "Remseck am Neckar", "Freiberg am Neckar"],
      faqs: [
        {
          question: "Kaufen Sie auch alten oder beschädigten Schmuck?",
          answer:
            "Ja. Defekte Ketten, verbogene Ringe oder einzelne Ohrringe kaufen wir genauso an. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was ist mit Edelsteinen im Schmuck?",
          answer:
            "Wir bewerten den Edelmetallanteil Ihres Schmucks. Sprechen Sie uns vorab an, wenn Ihnen der Wert von Steinen wichtig ist.",
        },
      ],
    },
    {
      slug: "konstanz",
      name: "Konstanz",
      metaTitle: "Goldankauf Konstanz – Gold verkaufen am Bodensee",
      metaDescription:
        "Gold verkaufen in Konstanz und am Bodensee: Schmuck, Münzen, Barren und Zahngold per Versand einsenden – fair nach Börsenkurs bewertet.",
      heroText:
        "Ob Altstadt, Petershausen oder Allmannsdorf: Verkaufen Sie Ihr Gold aus Konstanz per Post – versichert, kostenfrei und transparent bewertet.",
      intro: {
        title: "Goldankauf für Konstanz und den Bodensee.",
        paragraphs: [
          "Am Bodensee sind die Wege oft länger, als die Karte vermuten lässt. Mit unserem Versandankauf verkaufen Sie Ihr Gold direkt von zu Hause – egal ob in Konstanz, auf der Reichenau oder in Radolfzell.",
          "Wir kaufen Goldschmuck, Münzen, Barren und Zahngold sowie Silber, Platin und Palladium. Der Preis richtet sich nach dem Börsenkurs am Tag der Bewertung.",
          "Ihr Paket ist bis 2.500 € versichert. Bei höheren Werten organisieren wir einen kostenlosen Werttransport.",
        ],
      },
      districts: ["Altstadt", "Petershausen", "Paradies", "Allmannsdorf", "Wollmatingen", "Litzelstetten"],
      nearby: ["Singen", "Radolfzell", "Allensbach", "Reichenau", "Überlingen", "Meersburg"],
      faqs: [
        {
          question: "Was passiert bei Sendungen über 2.500 €?",
          answer:
            "Für Werte über 2.500 € organisieren wir einen kostenlosen Werttransport. Sprechen Sie uns dazu vorab telefonisch an.",
        },
        {
          question: "Kaufen Sie auch Goldbarren an?",
          answer:
            "Ja. Goldbarren aller gängigen Größen bewerten wir nach Feingewicht und aktuellem Börsenkurs.",
        },
      ],
    },
    {
      slug: "offenburg",
      name: "Offenburg",
      metaTitle: "Goldankauf Offenburg – Gold verkaufen in der Ortenau",
      metaDescription:
        "Goldankauf für Offenburg und die Ortenau: Altgold, Schmuck, Münzen und Zahngold per Post verkaufen – kostenlos versichert, fair bewertet.",
      heroText:
        "Vom Tor zum Schwarzwald direkt zu uns: Verkaufen Sie Ihr Gold aus Offenburg und der Ortenau per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Offenburg und der Ortenau.",
        paragraphs: [
          "Ob in Offenburg selbst, in Lahr oder in den Tälern des Schwarzwalds: Mit dem Versandankauf von Cash 4 Gold sparen Sie sich Fahrten und Wartezeiten.",
          "Sie schicken Ihre Stücke im kostenlosen Versandpaket ein. Wir prüfen Gewicht und Feingehalt und erstellen ein transparentes Angebot auf Basis des aktuellen Börsenkurses.",
          "Sie entscheiden ohne Druck – und erhalten nach Ihrer Zusage zügig Ihr Geld.",
        ],
      },
      districts: ["Bohlsbach", "Zell-Weierbach", "Windschläg", "Elgersweier", "Rammersweier", "Fessenbach"],
      nearby: ["Lahr", "Kehl", "Gengenbach", "Oberkirch", "Appenweier", "Achern"],
      faqs: [
        {
          question: "Wie läuft der Goldverkauf aus der Ortenau ab?",
          answer:
            "Versandpaket anfordern, Stücke einsenden, Angebot erhalten, zustimmen, Geld bekommen. Der Ablauf ist für ganz Deutschland gleich und für Sie kostenfrei.",
        },
        {
          question: "Woher kommt der Preis in Ihrem Angebot?",
          answer:
            "Grundlage ist der aktuelle Börsenkurs des jeweiligen Edelmetalls. Daraus und aus Gewicht und Feingehalt Ihrer Stücke berechnen wir den Ankaufspreis.",
        },
      ],
    },
    {
      slug: "villingen-schwenningen",
      name: "Villingen-Schwenningen",
      metaTitle: "Goldankauf Villingen-Schwenningen – Gold verkaufen",
      metaDescription:
        "Gold verkaufen in Villingen-Schwenningen: Schmuck, Münzen, Barren und Zahngold per Versand einsenden – nach Börsenkurs bewertet, schnell ausgezahlt.",
      heroText:
        "Ob in Villingen oder in Schwenningen: Verkaufen Sie Ihr Gold aus der Doppelstadt bequem per Post – transparent bewertet zum aktuellen Tageskurs.",
      intro: {
        title: "Goldankauf für die Doppelstadt Villingen-Schwenningen.",
        paragraphs: [
          "Die Doppelstadt zwischen Schwarzwald und Baar hat eine lange Tradition in der Uhrenindustrie – und in manchem Haushalt liegen noch alte Goldstücke aus dieser Zeit. Wir kaufen sie per Versand an.",
          "Ob Goldschmuck, Münzen, Barren oder Zahngold: Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs und schicken Ihnen ein aufgeschlüsseltes Angebot.",
          "Versand, Versicherung und Prüfung sind für Sie kostenlos.",
        ],
      },
      districts: ["Villingen", "Schwenningen", "Marbach", "Pfaffenweiler", "Obereschach", "Weilersbach"],
      nearby: ["Donaueschingen", "Bad Dürrheim", "Trossingen", "St. Georgen", "Rottweil", "Königsfeld"],
      faqs: [
        {
          question: "Kaufen Sie auch Golduhren an?",
          answer:
            "Wir bewerten den Goldanteil von Uhrgehäusen und Armbändern nach Gewicht und Feingehalt. Sprechen Sie uns vorab an, wenn es sich um eine Markenuhr handelt.",
        },
        {
          question: "Wie sicher ist der Versand?",
          answer:
            "Ihr Paket ist mit unserem kostenlosen Versandpaket bis 2.500 € versichert. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        },
      ],
    },
  ],
};

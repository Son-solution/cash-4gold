import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const SACHSEN: State = {
  id: "sachsen",
  name: "Sachsen",
  cities: [
    {
      slug: "leipzig",
      name: "Leipzig",
      metaTitle: "Goldankauf Leipzig – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Leipzig, von Gohlis bis Connewitz: Altgold, Schmuck, Münzen und Barren versichert per Post einsenden – bezahlt nach Börsenkurs.",
      heroText:
        "Von Gohlis bis Connewitz: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Leipzig bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Leipzig – in der Stadt des Handels.",
        paragraphs: [
          "Leipzig ist seit dem Mittelalter eine Messestadt, in der Kaufleute aus ganz Europa Waren und Preise verglichen. Wer hier verkauft, weiß, dass ein fairer Handel auf offenen Zahlen beruht.",
          "Genau so rechnen wir: Ihr Angebot ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung. Alle Werte stehen für jedes Stück einzeln darin.",
          "Statt durch die Stadt zu fahren, fordern Sie unser kostenloses Versandpaket an und geben die versicherte Sendung bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Zentrum", "Gohlis", "Connewitz", "Plagwitz", "Lindenau", "Reudnitz"],
      nearby: ["Markkleeberg", "Taucha", "Schkeuditz", "Markranstädt", "Borsdorf", "Delitzsch"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Leipzig?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Leipzig. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "dresden",
      name: "Dresden",
      metaTitle: "Goldankauf Dresden – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Dresden, Neustadt und Blasewitz: Goldschmuck, Münzen, Barren und Zahngold kostenlos per Versand verkaufen – bewertet nach Tageskurs.",
      heroText:
        "Ob aus der Neustadt, Blasewitz oder Loschwitz: Senden Sie Ihr Gold aus Dresden versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Dresden – Ihr eigenes kleines Grünes Gewölbe.",
        paragraphs: [
          "August der Starke ließ im Grünen Gewölbe eine der prächtigsten Schatzkammern Europas einrichten, voller Gold, Edelsteine und Kunsthandwerk. Dazu kommen Frauenkirche, Zwinger und Semperoper an der Elbe.",
          "Auch in vielen Dresdner Familien liegt ein kleiner Schatz: geerbter Schmuck, alte Münzen oder Zahngold. Wir bewerten jedes Stück nach Gewicht, Feingehalt und aktuellem Kurs.",
          "Sie schicken alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots ganz in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Blasewitz", "Striesen", "Loschwitz", "Pieschen"],
      nearby: ["Radebeul", "Freital", "Heidenau", "Pirna", "Radeberg", "Meißen"],
      faqs: [
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Was kostet mich der Versand aus Dresden?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "chemnitz",
      name: "Chemnitz",
      metaTitle: "Goldankauf Chemnitz – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Chemnitz, Kaßberg und Sonnenberg: Altgold, Ringe, Ketten und Zahngold versichert einschicken – fair nach aktuellem Goldkurs.",
      heroText:
        "Vom Kaßberg bis Rabenstein: Verkaufen Sie Ihr Gold aus Chemnitz per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Chemnitz – mit Ingenieursgenauigkeit.",
        paragraphs: [
          "Chemnitz war im 19. Jahrhundert eines der wichtigsten Industriezentren Deutschlands, man nannte es das sächsische Manchester. 2025 war die Stadt Kulturhauptstadt Europas.",
          "Mit derselben Genauigkeit, die den Maschinenbau hier groß gemacht hat, bewerten wir Ihr Gold: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Kurs ab.",
          "Sie fordern das kostenlose Versandpaket an, legen Schmuck, Münzen oder Zahngold hinein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Zentrum", "Kaßberg", "Sonnenberg", "Schloßchemnitz", "Bernsdorf", "Rabenstein"],
      nearby: ["Limbach-Oberfrohna", "Hohenstein-Ernstthal", "Flöha", "Frankenberg", "Burgstädt", "Stollberg"],
      faqs: [
        {
          question: "Kann ich mein Gold in Chemnitz persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Chemnitz. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie bestimmen Sie den Feingehalt meines Goldes?",
          answer:
            "Wir prüfen jedes Stück einzeln. Punzen wie 333, 585 oder 750 sind ein erster Hinweis, maßgeblich ist aber unsere Prüfung. Das Ergebnis steht für jedes Stück im Angebot.",
        },
      ],
    },
    {
      slug: "zwickau",
      name: "Zwickau",
      metaTitle: "Goldankauf Zwickau – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Zwickau, Planitz und Marienthal: Schmuck, Münzen und Zahngold kostenlos einsenden – nach Gewicht und Feingehalt zum Börsenkurs bezahlt.",
      heroText:
        "Ob aus Planitz, Marienthal oder der Innenstadt: Senden Sie Ihr Gold aus Zwickau versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Zwickau – zuverlässig wie gute Technik.",
        paragraphs: [
          "In Zwickau gründete August Horch seine Automobilwerke, hier entstanden Audi und später der Trabant. Und in der Stadt wurde Robert Schumann geboren, dessen Geburtshaus am Hauptmarkt steht.",
          "Zuverlässigkeit erwarten Sie auch beim Goldverkauf: Ihre Sendung ist versichert, und jedes Stück wird nach Gewicht, Feingehalt und Tageskurs bewertet.",
          "Sie senden Ihre Stücke im kostenlosen Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden allein Sie.",
        ],
      },
      districts: ["Innenstadt", "Marienthal", "Planitz", "Eckersbach", "Pölbitz", "Weißenborn"],
      nearby: ["Werdau", "Crimmitschau", "Wilkau-Haßlau", "Lichtenstein", "Reinsdorf", "Mülsen"],
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
      slug: "plauen",
      name: "Plauen",
      metaTitle: "Goldankauf Plauen – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Plauen und im Vogtland: Altgold, Goldschmuck, Münzen und Zahngold versichert per Post einsenden – transparent nach Tageskurs.",
      heroText:
        "Von Haselbrunn bis Chrieschwitz: Verkaufen Sie Altgold, Schmuck und Münzen aus Plauen bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Plauen – mit Blick fürs Detail.",
        paragraphs: [
          "Plauener Spitze ist weltweit bekannt: feinste Stickereien, bei denen jedes Detail zählt. Die Stadt im Vogtland hat aus diesem Handwerk ihren Ruf gemacht.",
          "Auf Details achten auch wir: Ihr Angebot nennt für jedes Stück Gewicht, Feingehalt und den Kurs, zu dem wir rechnen. Nichts wird pauschal geschätzt.",
          "Das kostenlose Versandpaket kommt zu Ihnen nach Hause. Sie geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Haselbrunn", "Preißelpöhl", "Chrieschwitz", "Reusa", "Neundorf"],
      nearby: ["Oelsnitz", "Reichenbach", "Treuen", "Netzschkau", "Auerbach", "Weischlitz"],
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
      slug: "gorlitz",
      name: "Görlitz",
      metaTitle: "Goldankauf Görlitz – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Görlitz, Altstadt und Königshufen: Altgold, Ringe, Münzen und Barren kostenlos per Versand verkaufen – fair nach Börsenkurs bezahlt.",
      heroText:
        "Ob aus der Altstadt, Königshufen oder Weinhübel: Senden Sie Ihr Gold aus Görlitz versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Görlitz – vom östlichsten Punkt ohne Umwege.",
        paragraphs: [
          "Görlitz ist die östlichste Stadt Deutschlands, direkt an der Neiße gegenüber dem polnischen Zgorzelec. Die fast unversehrte Altstadt ist so schön, dass Hollywood hier regelmäßig Filme dreht.",
          "Auch vom östlichsten Ende der Republik ist der Goldverkauf bei uns ganz einfach: Das kostenlose Versandpaket kommt zu Ihnen, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs.",
        ],
      },
      districts: ["Altstadt", "Innenstadt", "Südstadt", "Königshufen", "Rauschwalde", "Weinhübel"],
      nearby: ["Zgorzelec", "Markersdorf", "Reichenbach", "Kodersdorf", "Niesky", "Löbau"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Görlitz?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Görlitz. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "freiberg",
      name: "Freiberg",
      metaTitle: "Goldankauf Freiberg – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in der Bergstadt Freiberg: Schmuck, Münzen, Barren und Zahngold versichert einschicken – Auszahlung nach aktuellem Goldkurs.",
      heroText:
        "Von der Altstadt bis Friedeburg: Verkaufen Sie Ihr Gold aus Freiberg per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Freiberg – in der Stadt, die Edelmetall versteht.",
        paragraphs: [
          "Freiberg wurde durch den Silberbergbau reich, und 1765 gründete man hier die Bergakademie, die älteste noch bestehende montanwissenschaftliche Hochschule der Welt. In der terra mineralia glänzen Mineralien aus aller Welt.",
          "In einer Stadt, die so viel über Edelmetalle weiß, muss ein Angebot stimmen. Wir bestimmen Gewicht und Feingehalt jedes Stücks und rechnen zum aktuellen Börsenkurs ab.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot, das Sie Posten für Posten nachvollziehen können.",
        ],
      },
      districts: ["Altstadt", "Friedeburg", "Wasserberg", "Zug", "Kleinwaltersdorf", "Halsbach"],
      nearby: ["Brand-Erbisdorf", "Halsbrücke", "Oederan", "Großschirma", "Weißenborn", "Bobritzsch-Hilbersdorf"],
      faqs: [
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
        {
          question: "Kaufen Sie auch Goldmünzen an?",
          answer:
            "Ja. Wir kaufen Anlagemünzen wie Krügerrand oder Maple Leaf ebenso wie ältere Goldmünzen. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
      ],
    },
    {
      slug: "bautzen",
      name: "Bautzen",
      metaTitle: "Goldankauf Bautzen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Bautzen und die Oberlausitz: Altgold, Goldketten und Zahngold kostenlos per Post einsenden – bewertet nach aktuellem Tageskurs.",
      heroText:
        "Ob aus Gesundbrunnen, Seidau oder der Altstadt: Senden Sie Ihr Gold aus Bautzen versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Bautzen – ohne Umwege durch die Türme der Altstadt.",
        paragraphs: [
          "Bautzen, sorbisch Budyšin, ist die Stadt der Türme: Über der Spree erheben sich die Ortenburg, der Dom St. Petri und der schiefe Reichenturm. Und wer an Bautzen denkt, denkt meist auch an Senf.",
          "Für den Goldverkauf müssen Sie nicht durch die Gassen der Altstadt laufen. Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Altstadt", "Innenstadt", "Gesundbrunnen", "Seidau", "Kleinwelka", "Burk"],
      nearby: ["Bischofswerda", "Großpostwitz", "Kubschütz", "Göda", "Malschwitz", "Doberschau-Gaußig"],
      faqs: [
        {
          question: "Ist meine Sendung aus Bautzen versichert?",
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
      slug: "meissen",
      name: "Meißen",
      metaTitle: "Goldankauf Meißen – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Meißen, Cölln und Zscheila: Goldschmuck, Münzen und Zahngold versichert per Versand einsenden – fair nach Börsenkurs bezahlt.",
      heroText:
        "Von der Altstadt bis Cölln: Verkaufen Sie Altgold, Schmuck und Münzen aus Meißen bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Meißen – wo man einst Gold machen wollte.",
        paragraphs: [
          "August der Starke hielt den Alchemisten Johann Friedrich Böttger fest, damit er ihm Gold herstellt. Statt Gold entstand das erste europäische Hartporzellan, und seit 1710 wird in Meißen das weiße Gold gefertigt.",
          "Gold machen können wir auch nicht – aber wir bewerten Ihr echtes Gold genau: nach Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Altstadt", "Cölln", "Triebischtal", "Zscheila", "Lercha", "Bohnitzsch"],
      nearby: ["Coswig", "Radebeul", "Weinböhla", "Nossen", "Lommatzsch", "Diera-Zehren"],
      faqs: [
        {
          question: "Kann ich mein Gold in Meißen persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Meißen. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Muss ich Edelsteine vorher entfernen?",
          answer:
            "Nein. Schmuck mit Steinen nehmen wir ebenfalls an. Bewertet wird der Goldanteil – die Steine berücksichtigen wir beim Gewicht entsprechend.",
        },
      ],
    },
    {
      slug: "riesa",
      name: "Riesa",
      metaTitle: "Goldankauf Riesa – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Riesa, Gröba und Strehla: Altgold, Ringe, Münzen und Zahngold kostenlos einschicken und zum aktuellen Goldkurs verkaufen.",
      heroText:
        "Ob aus Gröba, Weida oder der Innenstadt: Senden Sie Ihr Gold aus Riesa versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Riesa – schnell und unkompliziert.",
        paragraphs: [
          "Riesa an der Elbe nennt sich gern Sportstadt und war Gastgeber vieler großer Wettkämpfe. Bekannt ist die Stadt außerdem für ihre Nudeln, die hier seit über hundert Jahren hergestellt werden.",
          "Unkompliziert ist auch der Goldverkauf: Sie fordern das kostenlose Versandpaket an, packen Ihre Stücke ein und geben die versicherte Sendung bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und machen Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs.",
        ],
      },
      districts: ["Innenstadt", "Gröba", "Weida", "Merzdorf", "Pausitz", "Canitz"],
      nearby: ["Strehla", "Zeithain", "Nünchritz", "Gröditz", "Großenhain", "Stauchitz"],
      faqs: [
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
        {
          question: "Was kostet mich der Versand aus Riesa?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "pirna",
      name: "Pirna",
      metaTitle: "Goldankauf Pirna – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Pirna, Copitz und der Sächsischen Schweiz: Schmuck, Münzen und Barren versichert per Post einsenden – transparent nach Tageskurs.",
      heroText:
        "Von Copitz bis Sonnenstein: Verkaufen Sie Ihr Gold aus Pirna per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Pirna – so klar wie ein Canaletto-Bild.",
        paragraphs: [
          "Pirna ist das Tor zur Sächsischen Schweiz. Der Maler Canaletto hat den Marktplatz im 18. Jahrhundert so detailgetreu gemalt, dass man ihn bis heute auf seinen Bildern wiedererkennt.",
          "Ein ebenso klares Bild bekommen Sie von uns: Ihr Angebot zeigt für jedes Stück Gewicht, Feingehalt und den Kurs, zu dem wir rechnen.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Altstadt", "Copitz", "Sonnenstein", "Neundorf", "Zatzschke", "Graupa"],
      nearby: ["Heidenau", "Dohna", "Königstein", "Stadt Wehlen", "Dürrröhrsdorf-Dittersbach", "Bad Gottleuba-Berggießhübel"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Pirna?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Pirna. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "hoyerswerda",
      name: "Hoyerswerda",
      metaTitle: "Goldankauf Hoyerswerda – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Hoyerswerda und das Lausitzer Seenland: Altgold, Goldschmuck und Zahngold kostenlos per Versand verkaufen – nach Börsenkurs bezahlt.",
      heroText:
        "Ob aus der Altstadt, der Neustadt oder Zeißig: Senden Sie Ihr Gold aus Hoyerswerda versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Hoyerswerda – logisch durchgerechnet.",
        paragraphs: [
          "In Hoyerswerda ging Konrad Zuse zur Schule, der Erfinder des ersten funktionsfähigen Computers. Heute liegt die Stadt mitten im Lausitzer Seenland, wo aus alten Tagebauen Seen geworden sind.",
          "Logisch und nachvollziehbar ist auch unser Angebot: Gewicht mal Feingehalt mal Börsenkurs – für jedes Stück einzeln ausgewiesen.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Kühnicht", "Dörgenhausen", "Zeißig", "Bröthen/Michalken"],
      nearby: ["Lauta", "Wittichenau", "Bernsdorf", "Lohsa", "Elsterheide", "Spreetal"],
      faqs: [
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "grimma",
      name: "Grimma",
      metaTitle: "Goldankauf Grimma – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Grimma und im Muldental: Ringe, Ketten, Münzen und Zahngold versichert einschicken – fair nach aktuellem Goldkurs ausgezahlt.",
      heroText:
        "Von der Innenstadt bis Nerchau: Verkaufen Sie Altgold, Schmuck und Münzen aus Grimma bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Grimma – bequem von der Mulde aus.",
        paragraphs: [
          "Grimma liegt malerisch an der Mulde, mit der Pöppelmannbrücke, dem Schloss und der traditionsreichen Fürstenschule St. Augustin. Nach dem Hochwasser 2002 wurde die Altstadt liebevoll wieder aufgebaut.",
          "Für den Goldverkauf müssen Sie die Stadt nicht verlassen: Das kostenlose Versandpaket kommt zu Ihnen nach Hause, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Hohnstädt", "Höfgen", "Großbothen", "Nerchau", "Mutzschen"],
      nearby: ["Naunhof", "Brandis", "Trebsen", "Colditz", "Wurzen", "Bad Lausick"],
      faqs: [
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "delitzsch",
      name: "Delitzsch",
      metaTitle: "Goldankauf Delitzsch – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Delitzsch und Eilenburg: Altgold, Schmuck, Münzen und Zahngold kostenlos per Post einsenden – bewertet nach aktuellem Tageskurs.",
      heroText:
        "Ob aus der Innenstadt, Benndorf oder Schenkenberg: Senden Sie Ihr Gold aus Delitzsch versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Delitzsch – fair für beide Seiten.",
        paragraphs: [
          "Hermann Schulze-Delitzsch, Sohn der Stadt, gründete im 19. Jahrhundert die ersten Genossenschaften und setzte sich für faire Geschäfte zum Nutzen aller ein. Über der Altstadt steht das Barockschloss.",
          "Fair soll auch Ihr Goldverkauf sein: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen offen zum aktuellen Börsenkurs ab.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Delitzsch-Nord", "Benndorf", "Schenkenberg", "Döbernitz", "Spröda"],
      nearby: ["Leipzig", "Eilenburg", "Schkeuditz", "Rackwitz", "Krostitz", "Wiedemar"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Ist meine Sendung aus Delitzsch versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
      ],
    },
    {
      slug: "annaberg",
      name: "Annaberg-Buchholz",
      metaTitle: "Goldankauf Annaberg-Buchholz – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Annaberg-Buchholz und im Erzgebirge: Goldschmuck, Münzen und Zahngold versichert per Versand einsenden – fair nach Börsenkurs.",
      heroText:
        "Von Annaberg bis Buchholz: Verkaufen Sie Ihr Gold aus dem Erzgebirge per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Annaberg-Buchholz – nach Adam Ries gerechnet.",
        paragraphs: [
          "Annaberg entstand um 1496 im Silberrausch des Erzgebirges, und mit dem Reichtum der Bergleute wurde die prächtige St. Annenkirche gebaut. Hier lebte auch Rechenmeister Adam Ries.",
          "Wenn etwas nach Adam Ries stimmen soll, dann ein Goldangebot. Bei uns sehen Sie für jedes Stück Gewicht, Feingehalt und Kurs – und können alles selbst nachrechnen.",
          "Sie fordern das kostenlose Versandpaket an, legen Ihre Stücke hinein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Annaberg", "Buchholz", "Cunersdorf", "Kleinrückerswalde", "Frohnau", "Geyersdorf"],
      nearby: ["Schlettau", "Thermalbad Wiesenbad", "Ehrenfriedersdorf", "Mildenau", "Bärenstein", "Oberwiesenthal"],
      faqs: [
        {
          question: "Kann ich mein Gold in Annaberg-Buchholz persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Annaberg-Buchholz. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
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

import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const HESSEN: State = {
  id: "hessen",
  name: "Hessen",
  cities: [
    {
      slug: "frankfurt",
      name: "Frankfurt am Main",
      metaTitle: "Goldankauf Frankfurt am Main – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Frankfurt am Main: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Sachsenhausen bis Bockenheim: Verkaufen Sie Altgold, Schmuck, Münzen und Barren aus Frankfurt bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Frankfurt – dort, wo Kurse gemacht werden.",
        paragraphs: [
          "In Frankfurt sitzen die Europäische Zentralbank und die Börse, und zwischen den Türmen der Skyline wird täglich über Preise entschieden. Wer hier Gold verkauft, weiß in der Regel genau, was ein fairer Kurs ist.",
          "Genau daran messen wir uns: Ihr Angebot ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung – ohne Pauschalen und ohne Verhandeln.",
          "Statt durch die Innenstadt zu fahren, fordern Sie unser kostenloses Versandpaket an und geben Ihre Stücke versichert bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Innenstadt", "Sachsenhausen", "Bornheim", "Nordend", "Bockenheim", "Höchst"],
      nearby: ["Offenbach", "Bad Homburg", "Oberursel", "Eschborn", "Bad Vilbel", "Neu-Isenburg"],
      faqs: [
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
        {
          question: "Kann ich mein Gold in Frankfurt persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Frankfurt. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
      ],
    },
    {
      slug: "wiesbaden",
      name: "Wiesbaden",
      metaTitle: "Goldankauf Wiesbaden – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Wiesbaden: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Biebrich, Sonnenberg oder der Innenstadt: Senden Sie Ihr Gold aus Wiesbaden versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Wiesbaden – mit der Ruhe einer Kurstadt.",
        paragraphs: [
          "Kurhaus, Wilhelmstraße und die heißen Quellen haben Wiesbaden zur eleganten Landeshauptstadt gemacht. In vielen Familien liegt hier noch Schmuck aus Zeiten, in denen man sich für den Abend im Kurhaus fein machte.",
          "Wenn Sie solche Stücke verkaufen möchten, bewerten wir sie nach ihrem Goldgehalt: Wir wiegen, bestimmen den Feingehalt und rechnen zum aktuellen Kurs ab.",
          "Sie schicken alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots ganz in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Biebrich", "Sonnenberg", "Bierstadt", "Dotzheim", "Mainz-Kastel"],
      nearby: ["Mainz", "Taunusstein", "Eltville", "Hochheim", "Hofheim", "Rüsselsheim"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was kostet mich der Versand aus Wiesbaden?",
          answer:
            "Nichts. Das Versandpaket und die Versicherung sind kostenlos. Auch eine Rücksendung, falls Sie das Angebot ablehnen, übernehmen wir.",
        },
      ],
    },
    {
      slug: "darmstadt",
      name: "Darmstadt",
      metaTitle: "Goldankauf Darmstadt – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Darmstadt: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden, präzise prüfen lassen und nach Börsenkurs bezahlt werden.",
      heroText:
        "Von Bessungen bis Kranichstein: Verkaufen Sie Ihr Gold aus Darmstadt per Post – nachvollziehbar geprüft und nach Tageskurs abgerechnet.",
      intro: {
        title: "Gold verkaufen in Darmstadt – nachgemessen statt geschätzt.",
        paragraphs: [
          "Darmstadt nennt sich Wissenschaftsstadt, und das zu Recht: TU, Forschungsinstitute und das Raumfahrtkontrollzentrum prägen die Stadt unter dem Hochzeitsturm auf der Mathildenhöhe.",
          "Zu einer Stadt, die gern genau hinschaut, passt unser Vorgehen: Jedes Stück wird gewogen und auf seinen Feingehalt geprüft. Daraus und aus dem Börsenkurs ergibt sich Ihr Preis – Zeile für Zeile im Angebot.",
          "Sie senden Ihre Stücke kostenlos und versichert ein. Gefällt Ihnen das Angebot nicht, bekommen Sie alles kostenlos zurück.",
        ],
      },
      districts: ["Innenstadt", "Bessungen", "Martinsviertel", "Eberstadt", "Arheilgen", "Kranichstein"],
      nearby: ["Griesheim", "Weiterstadt", "Pfungstadt", "Dieburg", "Ober-Ramstadt", "Mühltal"],
      faqs: [
        {
          question: "Wie stellen Sie den Feingehalt fest?",
          answer:
            "Wir prüfen jedes Stück einzeln, auch wenn kein Stempel vorhanden ist. Die gemessene Legierung steht zusammen mit dem Gewicht in Ihrem Angebot.",
        },
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Sie entscheiden frei. Lehnen Sie ab, schicken wir Ihre Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "offenbach",
      name: "Offenbach",
      metaTitle: "Goldankauf Offenbach – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Offenbach am Main: Altgold, Ketten, Ringe, Münzen und Zahngold versichert einsenden und nach aktuellem Goldkurs verkaufen.",
      heroText:
        "Ob aus Bürgel, Bieber oder Rumpenheim: Schicken Sie Ihr Gold aus Offenbach kostenlos ein und erhalten Sie ein Angebot nach Gewicht und Tageskurs.",
      intro: {
        title: "Goldankauf für Offenbach – ehrliches Handwerk statt großer Worte.",
        paragraphs: [
          "Offenbach war lange die Lederstadt Deutschlands, und das Ledermuseum erinnert bis heute an das Handwerk, das die Stadt am Main groß gemacht hat. Heute prägen Kreative der Hochschule für Gestaltung das Bild.",
          "Beim Goldverkauf zählt für uns ebenfalls gute Arbeit: Wir prüfen jedes Stück sorgfältig, bestimmen Gewicht und Feingehalt und rechnen zum Börsenkurs ab.",
          "Sie müssen dafür nicht nach Frankfurt hinüber. Das kostenlose Versandpaket kommt zu Ihnen, und die versicherte Sendung geben Sie bei der nächsten Postfiliale ab.",
        ],
      },
      districts: ["Innenstadt", "Bieber", "Bürgel", "Rumpenheim", "Tempelsee", "Lauterborn"],
      nearby: ["Frankfurt", "Mühlheim am Main", "Obertshausen", "Heusenstamm", "Dietzenbach", "Neu-Isenburg"],
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
      slug: "hanau",
      name: "Hanau",
      metaTitle: "Goldankauf Hanau – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Hanau: Goldschmuck, Münzen, Barren und Zahngold kostenlos einsenden – geprüft nach Gewicht und Feingehalt, bezahlt nach Börsenkurs.",
      heroText:
        "Von Steinheim bis Großauheim: Verkaufen Sie Ihr Gold aus Hanau bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Hanau – in einer Stadt mit Goldschmiede-Tradition.",
        paragraphs: [
          "Hanau ist nicht nur die Geburtsstadt der Brüder Grimm. Mit der Zeichenakademie und dem Deutschen Goldschmiedehaus am Altstädter Markt ist die Stadt seit Jahrhunderten ein Zentrum der Gold- und Silberschmiedekunst, und auch die Edelmetallindustrie ist hier zu Hause.",
          "Wer in Hanau Schmuck besitzt, hat oft ein gutes Gespür für Qualität. Wir bewerten Ihre Stücke nach dem, was beim Goldankauf zählt: Gewicht, Feingehalt und Börsenkurs.",
          "Senden Sie alles im kostenlosen, versicherten Versandpaket ein. Sie erhalten ein schriftliches Angebot und entscheiden selbst.",
        ],
      },
      districts: ["Innenstadt", "Steinheim", "Großauheim", "Klein-Auheim", "Kesselstadt", "Wolfgang"],
      nearby: ["Maintal", "Bruchköbel", "Erlensee", "Rodenbach", "Nidderau", "Seligenstadt"],
      faqs: [
        {
          question: "Wird die Handwerksarbeit an meinem Schmuck mitbezahlt?",
          answer:
            "Wir kaufen Gold nach seinem Materialwert an, also nach Gewicht und Feingehalt zum Börsenkurs. So bleibt der Preis für Sie jederzeit nachvollziehbar.",
        },
        {
          question: "Ist mein Gold auf dem Postweg versichert?",
          answer:
            "Ja. Unser Versandpaket ist kostenlos und versichert – vom Abgeben bei der Post bis zur Ankunft bei uns.",
        },
      ],
    },
    {
      slug: "fulda",
      name: "Fulda",
      metaTitle: "Goldankauf Fulda – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Fulda und Osthessen: Altgold, Schmuck, Münzen und Zahngold versichert per Post verkaufen – kostenlos und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Horas, Lehnerz oder der Barockstadt selbst: Senden Sie Ihr Gold aus Fulda kostenlos ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Fulda – Barockstadt, klare Preise.",
        paragraphs: [
          "Dom, Stadtschloss und Michaelskirche machen Fulda zur Barockstadt Osthessens. Seit Bonifatius hier begraben wurde, kommen Menschen in die Stadt am Rand der Rhön.",
          "Gerade in Osthessen ist der Weg zum nächsten Goldhändler oft weit. Bei uns entfällt er ganz: Sie fordern das kostenlose Versandpaket an und geben es bei der Post ab.",
          "Nach der Prüfung erhalten Sie ein Angebot, in dem Gewicht, Feingehalt und Kurs für jedes Stück einzeln stehen.",
        ],
      },
      districts: ["Innenstadt", "Horas", "Lehnerz", "Neuenberg", "Kohlhaus", "Edelzell"],
      nearby: ["Petersberg", "Künzell", "Eichenzell", "Hünfeld", "Gersfeld", "Neuhof"],
      faqs: [
        {
          question: "Lohnt sich der Versand auch für wenige Stücke?",
          answer:
            "Ja. Versand und Versicherung sind kostenlos, egal ob Sie einen einzelnen Ring oder eine ganze Schmuckschatulle einsenden.",
        },
        {
          question: "Wie lange dauert der Verkauf?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "giessen",
      name: "Gießen",
      metaTitle: "Goldankauf Gießen – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Gießen: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Wieseck bis Kleinlinden: Verkaufen Sie Ihr Gold aus Gießen per Post – nachvollziehbar geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Gießen – so nachvollziehbar wie ein Experiment.",
        paragraphs: [
          "In Gießen forschte Justus von Liebig, und im Mathematikum lässt sich Mathematik zum Anfassen erleben. Die Universitätsstadt an der Lahn mag es, wenn man Dinge selbst nachprüfen kann.",
          "So halten wir es auch beim Goldankauf: Ihr Angebot zeigt für jedes Stück Gewicht und Feingehalt sowie den Kurs, zu dem wir rechnen. Jeder Betrag lässt sich nachrechnen.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des Angebots.",
        ],
      },
      districts: ["Innenstadt", "Wieseck", "Kleinlinden", "Allendorf", "Lützellinden", "Rödgen"],
      nearby: ["Wetzlar", "Linden", "Pohlheim", "Lich", "Lollar", "Buseck"],
      faqs: [
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
      ],
    },
    {
      slug: "marburg",
      name: "Marburg",
      metaTitle: "Goldankauf Marburg – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Marburg an der Lahn: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Oberstadt, Cappel oder Wehrda: Senden Sie Ihr Gold aus Marburg versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Marburg – ohne Treppensteigen in die Oberstadt.",
        paragraphs: [
          "Wer in Marburg wohnt, kennt die steilen Gassen hinauf zum Landgrafenschloss. Unten an der Lahn steht die Elisabethkirche, und seit 1527 prägt die Philipps-Universität das Leben der Stadt.",
          "Für den Goldverkauf müssen Sie keinen Weg auf sich nehmen: Das kostenlose Versandpaket kommt zu Ihnen nach Hause, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und machen Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs.",
        ],
      },
      districts: ["Oberstadt", "Weidenhausen", "Ockershausen", "Cappel", "Marbach", "Wehrda"],
      nearby: ["Cölbe", "Lahntal", "Weimar (Lahn)", "Ebsdorfergrund", "Kirchhain", "Stadtallendorf"],
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
      slug: "bad-homburg",
      name: "Bad Homburg",
      metaTitle: "Goldankauf Bad Homburg – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Bad Homburg vor der Höhe: Goldschmuck, Münzen, Barren und Zahngold diskret per Post einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Von Kirdorf bis Gonzenheim: Verkaufen Sie Ihr Gold aus Bad Homburg diskret und versichert per Post – nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Bad Homburg – diskret und ohne Glücksspiel.",
        paragraphs: [
          "Die Spielbank im Kurpark gilt als „Mutter von Monte Carlo“, und Schloss und Kurhaus erinnern an die Zeit, als Kaiser und Könige zur Kur in den Taunus kamen.",
          "Beim Goldverkauf überlassen wir nichts dem Zufall: Ihr Preis ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Der Verkauf läuft diskret von zu Hause aus. Sie senden Ihre Stücke im neutralen, versicherten Paket ein und erhalten ein schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Kirdorf", "Gonzenheim", "Ober-Erlenbach", "Ober-Eschbach", "Dornholzhausen"],
      nearby: ["Oberursel", "Friedrichsdorf", "Frankfurt", "Kronberg", "Königstein", "Bad Vilbel"],
      faqs: [
        {
          question: "Ist das Versandpaket neutral verpackt?",
          answer:
            "Ja. Von außen ist nicht zu erkennen, dass sich Gold in der Sendung befindet. Sie ist trotzdem vollständig versichert.",
        },
        {
          question: "Kaufen Sie auch Goldbarren und Anlagemünzen?",
          answer:
            "Ja. Barren und Münzen wie Krügerrand, Maple Leaf oder Philharmoniker bewerten wir nach Feingewicht zum aktuellen Kurs.",
        },
      ],
    },
    {
      slug: "russelsheim",
      name: "Rüsselsheim",
      metaTitle: "Goldankauf Rüsselsheim – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Rüsselsheim am Main: Altgold, Schmuck, Münzen und Zahngold kostenlos per Post einsenden und nach Tageskurs verkaufen.",
      heroText:
        "Ob aus Königstädten, Bauschheim oder Haßloch: Schicken Sie Ihr Gold aus Rüsselsheim versichert ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Rüsselsheim – ehrlich wie gute Ingenieursarbeit.",
        paragraphs: [
          "Rüsselsheim ist untrennbar mit Opel verbunden. Seit über hundert Jahren werden hier am Main Autos gebaut, und die Festung in der Altstadt erzählt von noch älteren Zeiten.",
          "In vielen Rüsselsheimer Familien haben Generationen bei Opel gearbeitet, und oft sind über die Jahre Ringe, Ketten oder Münzen zusammengekommen. Wir bewerten sie sachlich nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden alles im kostenlosen, versicherten Paket ein. Erst wenn Sie dem Angebot zustimmen, überweisen wir den Betrag.",
        ],
      },
      districts: ["Innenstadt", "Königstädten", "Bauschheim", "Haßloch", "Dicker Busch", "Berliner Viertel"],
      nearby: ["Raunheim", "Flörsheim", "Groß-Gerau", "Bischofsheim", "Kelsterbach", "Mainz"],
      faqs: [
        {
          question: "Ich weiß nicht, ob mein Schmuck echt ist. Was nun?",
          answer:
            "Senden Sie ihn trotzdem ein. Wir prüfen jedes Stück. Ist etwas nicht aus Gold, sagen wir es Ihnen und schicken es kostenlos zurück.",
        },
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online bei uns an. Wir schicken es Ihnen kostenlos zu, und Sie geben die versicherte Sendung bei der Post ab.",
        },
      ],
    },
    {
      slug: "wetzlar",
      name: "Wetzlar",
      metaTitle: "Goldankauf Wetzlar – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Wetzlar: Goldschmuck, Münzen, Barren und Zahngold versichert einsenden – präzise geprüft und nach Börsenkurs bezahlt.",
      heroText:
        "Von der Altstadt bis Niedergirmes: Verkaufen Sie Ihr Gold aus Wetzlar per Post – genau geprüft und nach Tageskurs bewertet.",
      intro: {
        title: "Gold verkaufen in Wetzlar – mit dem genauen Blick der Optikstadt.",
        paragraphs: [
          "Wetzlar ist die Stadt der Optik: Hier entstanden Mikroskope und Kameras, die Präzision in die ganze Welt brachten. Goethe verliebte sich hier in Charlotte Buff und schrieb danach den „Werther“.",
          "Präzision ist auch beim Goldankauf das Wichtigste. Wir wiegen jedes Stück genau, bestimmen den Feingehalt und berechnen den Preis zum aktuellen Börsenkurs.",
          "Sie senden Ihre Stücke kostenlos und versichert ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Altstadt", "Niedergirmes", "Naunheim", "Dalheim", "Hermannstein", "Steindorf"],
      nearby: ["Gießen", "Solms", "Aßlar", "Lahnau", "Braunfels", "Hüttenberg"],
      faqs: [
        {
          question: "Wie genau wird mein Gold gewogen?",
          answer:
            "Wir wiegen jedes Stück einzeln auf einer geeichten Waage. Das Gewicht steht für jede Position in Ihrem Angebot.",
        },
        {
          question: "Kann ich mein Gold zurückbekommen?",
          answer:
            "Ja. Wenn Sie das Angebot ablehnen, senden wir Ihnen alle Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "limburg",
      name: "Limburg",
      metaTitle: "Goldankauf Limburg – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Limburg an der Lahn: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach Tageskurs.",
      heroText:
        "Ob aus der Altstadt, Blumenrod oder Lindenholzhausen: Senden Sie Ihr Gold aus Limburg kostenlos ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Limburg – so beständig wie der Dom über der Lahn.",
        paragraphs: [
          "Hoch auf dem Felsen über der Lahn thront der Limburger Dom, darunter drängen sich die Fachwerkhäuser der Altstadt. Seit Jahrhunderten liegt Limburg an wichtigen Handelswegen zwischen Frankfurt und Köln.",
          "Fairer Handel braucht klare Regeln. Bei uns sind das Gewicht, Feingehalt und der Börsenkurs – daraus ergibt sich Ihr Preis, sonst nichts.",
          "Sie fordern das kostenlose Versandpaket an, schicken Ihre Stücke versichert ein und entscheiden nach Erhalt des Angebots.",
        ],
      },
      districts: ["Altstadt", "Blumenrod", "Linter", "Lindenholzhausen", "Offheim", "Dietkirchen"],
      nearby: ["Diez", "Hadamar", "Runkel", "Elz", "Bad Camberg", "Hünfelden"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldmünzen aus Sammlungen?",
          answer:
            "Ja. Goldmünzen bewerten wir nach ihrem Feingewicht zum aktuellen Kurs. Senden Sie sie am besten in ihren Kapseln oder Etuis ein.",
        },
        {
          question: "Brauche ich Belege oder Zertifikate?",
          answer:
            "Nein. Wir prüfen Ihre Stücke selbst. Belege sind nicht nötig, um Gold bei uns zu verkaufen.",
        },
      ],
    },
    {
      slug: "geisenheim",
      name: "Geisenheim",
      metaTitle: "Goldankauf Geisenheim – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Geisenheim im Rheingau: Goldschmuck, Münzen und Zahngold kostenlos per Post einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Von Johannisberg bis Marienthal: Verkaufen Sie Ihr Gold aus Geisenheim bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Geisenheim – kein Umweg in die Großstadt nötig.",
        paragraphs: [
          "Geisenheim liegt mitten im Rheingau zwischen Reben und Rhein. Die Hochschule ist weltweit für Wein- und Gartenbau bekannt, und über der Stadt steht Schloss Johannisberg mit seinen berühmten Rieslinglagen.",
          "Wer hier Gold verkaufen möchte, muss nicht nach Wiesbaden oder Mainz fahren. Unser kostenloses Versandpaket bringt den Ankauf zu Ihnen nach Hause.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot. Erst nach Ihrer Zusage wird überwiesen.",
        ],
      },
      districts: ["Geisenheim", "Johannisberg", "Marienthal", "Stephanshausen"],
      nearby: ["Rüdesheim am Rhein", "Oestrich-Winkel", "Eltville", "Lorch", "Bingen", "Kiedrich"],
      faqs: [
        {
          question: "Wo gebe ich das Paket in Geisenheim ab?",
          answer:
            "In jeder Postfiliale oder Packstation. Die Sendung ist kostenlos und versichert, Sie zahlen kein Porto.",
        },
        {
          question: "Welche Legierungen kaufen Sie an?",
          answer:
            "Alle gängigen Legierungen von 333er bis 999er Gold. Wir bestimmen den Feingehalt jedes Stücks und rechnen entsprechend ab.",
        },
      ],
    },
    {
      slug: "bensheim",
      name: "Bensheim",
      metaTitle: "Goldankauf Bensheim – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Bensheim an der Bergstraße: Altgold, Schmuck, Münzen und Zahngold versichert einsenden und nach aktuellem Goldkurs verkaufen.",
      heroText:
        "Ob aus Auerbach, Schönberg oder der Innenstadt: Schicken Sie Ihr Gold aus Bensheim kostenlos ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Bensheim – entspannt wie ein Abend an der Bergstraße.",
        paragraphs: [
          "An der Bergstraße blüht der Frühling früher als anderswo, und beim Bergsträßer Winzerfest feiert Bensheim jedes Jahr seinen Wein. Über Auerbach wacht die Burgruine, unten liegt der Staatspark Fürstenlager.",
          "Den Goldverkauf erledigen Sie bei uns genauso entspannt: Paket anfordern, Stücke einpacken, versichert abschicken.",
          "Wir bewerten alles nach Gewicht, Feingehalt und Börsenkurs und schicken Ihnen ein Angebot, in dem jede Position einzeln steht.",
        ],
      },
      districts: ["Innenstadt", "Auerbach", "Schönberg", "Zell", "Gronau", "Fehlheim"],
      nearby: ["Heppenheim", "Zwingenberg", "Lorsch", "Lautertal", "Einhausen", "Weinheim"],
      faqs: [
        {
          question: "Muss ich meinen Schmuck vorher reinigen oder sortieren?",
          answer:
            "Nein. Sie können alles so einsenden, wie es ist. Wir sortieren und prüfen jedes Stück selbst.",
        },
        {
          question: "Woran erkenne ich, wie viel Gold in einem Stück steckt?",
          answer:
            "Oft verrät es ein Stempel wie 333, 585 oder 750. Fehlt er, ist das kein Problem: Wir bestimmen den Feingehalt bei der Prüfung selbst.",
        },
      ],
    },
    {
      slug: "oberursel",
      name: "Oberursel",
      metaTitle: "Goldankauf Oberursel – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Oberursel (Taunus): Goldschmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Von Bommersheim bis Oberstedten: Verkaufen Sie Ihr Gold aus Oberursel per Post – geprüft nach Gewicht und Feingehalt, bezahlt nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Oberursel – zwischen Altstadt und Feldberg.",
        paragraphs: [
          "Oberursel liegt am Fuß des Großen Feldbergs, und die Fachwerkhäuser rund um den Marktplatz und die St.-Ursula-Kirche geben der Altstadt ihren Charme. Frankfurt ist mit der U-Bahn nur eine halbe Stunde entfernt.",
          "Für den Goldverkauf brauchen Sie aber gar keine Fahrt in die Stadt. Unser kostenloses Versandpaket kommt zu Ihnen, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir prüfen jedes Stück und schicken Ihnen ein schriftliches Angebot zum Börsenkurs. Sie entscheiden in Ruhe.",
        ],
      },
      districts: ["Altstadt", "Bommersheim", "Stierstadt", "Weißkirchen", "Oberstedten", "Oberursel-Nord"],
      nearby: ["Bad Homburg", "Kronberg", "Steinbach", "Königstein", "Frankfurt", "Schmitten"],
      faqs: [
        {
          question: "Wie schnell erhalte ich ein Angebot?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und senden Ihnen das Angebot per E-Mail oder Post.",
        },
        {
          question: "Kann ich auch Silber mit einsenden?",
          answer:
            "Ja. Neben Gold kaufen wir auch Silber, Platin und Palladium an – etwa Silberbesteck, Silbermünzen oder Barren. Alles kann im selben Paket mitgeschickt werden.",
        },
      ],
    },
    {
      slug: "rudesheim",
      name: "Rüdesheim am Rhein",
      metaTitle: "Goldankauf Rüdesheim am Rhein – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Rüdesheim am Rhein: Altgold, Goldschmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Rüdesheim, Assmannshausen oder Aulhausen: Senden Sie Ihr Gold kostenlos ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Rüdesheim – fern vom Trubel der Drosselgasse.",
        paragraphs: [
          "Rüdesheim ist das Tor zum UNESCO-Welterbe Oberes Mittelrheintal. Besucher aus aller Welt schlendern durch die Drosselgasse und fahren mit der Seilbahn hinauf zum Niederwalddenkmal.",
          "Wenn Sie Gold verkaufen möchten, geht das bei uns ganz ohne Touristentrubel: Sie fordern das kostenlose Versandpaket an und erledigen alles von zu Hause aus.",
          "Wir bewerten Ihre Stücke nach Gewicht, Feingehalt und aktuellem Börsenkurs und überweisen erst, wenn Sie zugestimmt haben.",
        ],
      },
      districts: ["Rüdesheim", "Assmannshausen", "Aulhausen", "Presberg"],
      nearby: ["Geisenheim", "Lorch", "Bingen", "Oestrich-Winkel", "Eltville", "Bad Schwalbach"],
      faqs: [
        {
          question: "Kann ich Gold auch ohne Ladengeschäft sicher verkaufen?",
          answer:
            "Ja. Ihre Sendung ist vom Abgeben bis zur Ankunft bei uns versichert. Sie erhalten ein schriftliches Angebot und entscheiden danach.",
        },
        {
          question: "Kaufen Sie auch alte Uhren mit Goldgehäuse?",
          answer:
            "Ja, Uhren mit Gehäuse oder Armband aus Gold bewerten wir nach ihrem Goldanteil. Das Uhrwerk selbst fließt nicht in den Preis ein.",
        },
      ],
    },
  ],
};

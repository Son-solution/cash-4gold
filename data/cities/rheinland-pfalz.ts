import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const RHEINLAND_PFALZ: State = {
  id: "rheinland-pfalz",
  name: "Rheinland-Pfalz",
  cities: [
    {
      slug: "mainz",
      name: "Mainz",
      metaTitle: "Goldankauf Mainz – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Mainz, Gonsenheim und die Neustadt: Altgold, Schmuck, Münzen und Barren kostenlos per Post verkaufen – bewertet nach Börsenkurs.",
      heroText:
        "Von der Altstadt bis Gonsenheim: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Mainz bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Mainz – schwarz auf weiß, wie bei Gutenberg.",
        paragraphs: [
          "In Mainz erfand Johannes Gutenberg den Buchdruck mit beweglichen Lettern, und bis heute gilt in der Landeshauptstadt: Was gedruckt ist, gilt. Genau so verstehen wir ein gutes Angebot.",
          "Für jedes Stück, das Sie einsenden, steht im schriftlichen Angebot Gewicht, Feingehalt und der Börsenkurs am Tag der Prüfung. Pauschalen oder versteckte Abzüge gibt es nicht.",
          "Statt mit Ihrem Schmuck durch die Stadt zu fahren, fordern Sie unser kostenloses Versandpaket an und geben die versicherte Sendung bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Oberstadt", "Gonsenheim", "Bretzenheim", "Finthen"],
      nearby: ["Wiesbaden", "Ingelheim", "Budenheim", "Nieder-Olm", "Bodenheim", "Hochheim"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Mainz?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Mainz. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "ludwigshafen",
      name: "Ludwigshafen",
      metaTitle: "Goldankauf Ludwigshafen – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Ludwigshafen am Rhein: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Oggersheim, Friesenheim oder der Stadtmitte: Senden Sie Ihr Gold aus Ludwigshafen versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Ludwigshafen – mit der Genauigkeit eines Labors.",
        paragraphs: [
          "Ludwigshafen ist eine Stadt der Chemie: Seit über 150 Jahren wird hier auf der linken Rheinseite geforscht, gemessen und analysiert. Wer hier lebt, weiß, dass es auf genaue Werte ankommt.",
          "Bei Gold ist das nicht anders. Wir bestimmen den Feingehalt jedes Stücks, wiegen es und berechnen den reinen Goldanteil zum aktuellen Kurs – nachvollziehbar und ohne Schätzwerte.",
          "Sie schicken Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden allein Sie.",
        ],
      },
      districts: ["Mitte", "Friesenheim", "Oggersheim", "Mundenheim", "Rheingönheim", "Oppau"],
      nearby: ["Mannheim", "Frankenthal", "Limburgerhof", "Schifferstadt", "Bad Dürkheim", "Speyer"],
      faqs: [
        {
          question: "Wie bestimmen Sie den Feingehalt meines Goldes?",
          answer:
            "Wir prüfen jedes Stück einzeln. Punzen wie 333, 585 oder 750 sind ein erster Hinweis, maßgeblich ist aber unsere Prüfung. Das Ergebnis steht für jedes Stück im Angebot.",
        },
        {
          question: "Was kostet mich der Versand aus Ludwigshafen?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "koblenz",
      name: "Koblenz",
      metaTitle: "Goldankauf Koblenz – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Koblenz, Ehrenbreitstein und Lützel: Goldschmuck, Münzen und Zahngold versichert einsenden – fair nach aktuellem Tageskurs bezahlt.",
      heroText:
        "Von Ehrenbreitstein bis Güls: Verkaufen Sie Ihr Gold aus Koblenz per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Koblenz – wo zwei Flüsse und klare Zahlen zusammenkommen.",
        paragraphs: [
          "Am Deutschen Eck fließt die Mosel in den Rhein, und hoch über der Stadt wacht die Festung Ehrenbreitstein. Koblenz ist seit der Römerzeit ein Ort, an dem Wege zusammenführen.",
          "Bei uns führt der Weg zum fairen Preis über drei Werte: Gewicht, Feingehalt und Börsenkurs. Alle drei stehen für jedes Stück in Ihrem schriftlichen Angebot.",
          "Sie fordern das kostenlose Versandpaket an, legen Schmuck, Münzen oder Zahngold hinein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Altstadt", "Ehrenbreitstein", "Lützel", "Metternich", "Güls", "Pfaffendorf"],
      nearby: ["Lahnstein", "Vallendar", "Bendorf", "Neuwied", "Andernach", "Bad Ems"],
      faqs: [
        {
          question: "Kann ich mein Gold in Koblenz persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Koblenz. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "trier",
      name: "Trier",
      metaTitle: "Goldankauf Trier – Altgold & Goldmünzen verkaufen",
      metaDescription:
        "Goldankauf für Trier, Heiligkreuz und Olewig: Altgold, Ringe, Münzen und Zahngold kostenlos per Versand verkaufen – transparent nach Goldkurs.",
      heroText:
        "Ob aus Heiligkreuz, Ehrang oder rund um die Porta Nigra: Senden Sie Ihr Gold aus Trier versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Trier – in der Stadt des römischen Goldschatzes.",
        paragraphs: [
          "Trier gilt als älteste Stadt Deutschlands. Neben der Porta Nigra und den Kaiserthermen erinnert der Trierer Goldschatz an die Römerzeit: über 2.500 Goldmünzen, die 1993 bei Bauarbeiten gefunden wurden.",
          "Auch Ihre Münzen, Barren und Schmuckstücke haben einen klar bestimmbaren Wert. Wir wiegen jedes Stück, prüfen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Mitte", "Heiligkreuz", "Kürenz", "Olewig", "Ehrang", "Pfalzel"],
      nearby: ["Konz", "Schweich", "Saarburg", "Hermeskeil", "Bitburg", "Wittlich"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldmünzen an?",
          answer:
            "Ja. Wir kaufen Anlagemünzen wie Krügerrand oder Maple Leaf ebenso wie ältere Goldmünzen. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "kaiserslautern",
      name: "Kaiserslautern",
      metaTitle: "Goldankauf Kaiserslautern – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Kaiserslautern und am Betzenberg: Schmuck, Münzen, Barren und Zahngold versichert per Post einsenden – nach Börsenkurs bezahlt.",
      heroText:
        "Vom Betzenberg bis Hohenecken: Verkaufen Sie Altgold, Schmuck und Münzen aus Kaiserslautern bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Kaiserslautern – ehrlich und geradeheraus.",
        paragraphs: [
          "Kaiser Barbarossa ließ hier im 12. Jahrhundert seine Pfalz errichten, heute kennt man Kaiserslautern vor allem für den Betzenberg und den Pfälzerwald vor der Haustür. In der Westpfalz schätzt man klare Worte.",
          "Die bekommen Sie auch von uns: Ihr Angebot nennt für jedes Stück Gewicht, Feingehalt und den Kurs, zu dem wir rechnen. Ohne Verhandeln und ohne Kleingedrucktes.",
          "Das kostenlose Versandpaket kommt zu Ihnen nach Hause. Sie geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Betzenberg", "Hohenecken", "Dansenberg", "Erfenbach", "Siegelbach"],
      nearby: ["Landstuhl", "Ramstein-Miesenbach", "Otterberg", "Enkenbach-Alsenborn", "Weilerbach", "Kusel"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "worms",
      name: "Worms",
      metaTitle: "Goldankauf Worms – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Worms, Herrnsheim und Pfeddersheim: Altgold, Goldketten und Münzen kostenlos einschicken und zum aktuellen Tageskurs verkaufen.",
      heroText:
        "Ob aus Herrnsheim, Pfeddersheim oder der Innenstadt: Senden Sie Ihr Gold aus Worms versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Worms – Ihr Schatz gehört nicht in den Rhein.",
        paragraphs: [
          "Der Sage nach versenkte Hagen von Tronje den Nibelungenschatz bei Worms im Rhein, wo er bis heute verschollen ist. In der Nibelungenstadt liegt so manches Gold auch einfach in der Schublade.",
          "Wenn Sie alten Schmuck, Münzen oder Zahngold zu Geld machen möchten, bewerten wir jedes Stück nach Gewicht und Feingehalt zum aktuellen Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein. Nach der Prüfung erhalten Sie ein schriftliches Angebot und entscheiden selbst, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Herrnsheim", "Pfeddersheim", "Horchheim", "Hochheim", "Pfiffligheim"],
      nearby: ["Osthofen", "Alzey", "Frankenthal", "Monsheim", "Lampertheim", "Bürstadt"],
      faqs: [
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Ist meine Sendung aus Worms versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
      ],
    },
    {
      slug: "speyer",
      name: "Speyer",
      metaTitle: "Goldankauf Speyer – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Speyer und Schifferstadt: Goldschmuck, Münzen und Zahngold versichert per Versand einsenden – nach Gewicht und Goldkurs bewertet.",
      heroText:
        "Von der Altstadt bis Speyer-West: Verkaufen Sie Ihr Gold aus Speyer per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Speyer – mit Sorgfalt für das, was Bestand hat.",
        paragraphs: [
          "Seit fast tausend Jahren steht der Kaiserdom am Rhein, Grablege salischer Kaiser und heute Weltkulturerbe. In Speyer weiß man, was es heißt, Wertvolles über Generationen zu bewahren.",
          "Manchmal ist aber der richtige Zeitpunkt gekommen, alten Schmuck oder Münzen zu verkaufen. Dann bewerten wir jedes Stück sorgfältig nach Gewicht, Feingehalt und Tageskurs.",
          "Sie schicken alles im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot mit allen Einzelwerten. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Innenstadt", "Speyer-Nord", "Speyer-West", "Speyer-Süd", "Speyer-Ost"],
      nearby: ["Schifferstadt", "Dudenhofen", "Römerberg", "Ludwigshafen", "Hockenheim", "Limburgerhof"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Speyer?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Speyer. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Muss ich Edelsteine vorher entfernen?",
          answer:
            "Nein. Schmuck mit Steinen nehmen wir ebenfalls an. Bewertet wird der Goldanteil – die Steine berücksichtigen wir beim Gewicht entsprechend.",
        },
      ],
    },
    {
      slug: "bad-kreuznach",
      name: "Bad Kreuznach",
      metaTitle: "Goldankauf Bad Kreuznach – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Bad Kreuznach und das Nahetal: Altgold, Schmuck, Münzen und Zahngold kostenlos per Post verkaufen – fair nach Börsenkurs bezahlt.",
      heroText:
        "Ob aus der Neustadt, Planig oder Bad Münster am Stein: Senden Sie Ihr Gold aus Bad Kreuznach versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Bad Kreuznach – ganz in Ruhe von zu Hause.",
        paragraphs: [
          "An der Nahe stehen die Brückenhäuser auf der alten Brücke, im Salinental rieselt die Sole über die Gradierwerke. Bad Kreuznach ist eine Stadt zum Durchatmen.",
          "Mit derselben Ruhe können Sie bei uns Gold verkaufen: Sie fordern das kostenlose Versandpaket an, packen Ihre Stücke ein und geben die versicherte Sendung bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs. Ohne Zeitdruck entscheiden Sie, ob Sie annehmen.",
        ],
      },
      districts: ["Innenstadt", "Neustadt", "Bad Münster am Stein-Ebernburg", "Planig", "Bosenheim", "Winzenheim"],
      nearby: ["Bingen", "Bad Sobernheim", "Langenlonsheim", "Rüdesheim (Nahe)", "Stromberg", "Meisenheim"],
      faqs: [
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Das Angebot ist unverbindlich. Lehnen Sie ab, senden wir Ihnen Ihre Stücke kostenlos und versichert zurück.",
        },
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
      ],
    },
    {
      slug: "neustadt-an-der-weinstrasse",
      name: "Neustadt an der Weinstraße",
      metaTitle: "Goldankauf Neustadt an der Weinstraße – Gold verkaufen",
      metaDescription:
        "Gold verkaufen in Neustadt an der Weinstraße: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Von Hambach bis Gimmeldingen: Verkaufen Sie Altgold, Schmuck und Münzen aus Neustadt an der Weinstraße bequem per Post – bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Neustadt – so offen wie beim Hambacher Fest.",
        paragraphs: [
          "1832 zogen Tausende hinauf zum Hambacher Schloss und forderten Freiheit und Mitsprache. Heute ist Neustadt das Herz der Deutschen Weinstraße, und beim Weinlesefest wird die Deutsche Weinkönigin gekrönt.",
          "Mitsprache bekommen Sie auch bei uns: Sie sehen für jedes Stück Gewicht, Feingehalt und Kurs und entscheiden selbst, ob Sie das Angebot annehmen.",
          "Das kostenlose Versandpaket kommt zu Ihnen, die versicherte Sendung geben Sie bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Kernstadt", "Hambach", "Haardt", "Gimmeldingen", "Mußbach", "Lachen-Speyerdorf"],
      nearby: ["Bad Dürkheim", "Deidesheim", "Haßloch", "Lambrecht", "Maikammer", "Edenkoben"],
      faqs: [
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
        {
          question: "Kann ich auch einzelne Ohrringe oder kaputte Ketten einsenden?",
          answer:
            "Ja. Einzelne Ohrringe, gerissene Ketten oder verbogene Ringe kaufen wir genauso an. Bewertet wird allein der Goldgehalt.",
        },
      ],
    },
    {
      slug: "landau",
      name: "Landau",
      metaTitle: "Goldankauf Landau in der Pfalz – Altgold verkaufen",
      metaDescription:
        "Goldankauf für Landau in der Pfalz: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Godramstein, Nußdorf oder der Innenstadt: Senden Sie Ihr Gold aus Landau versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Landau – sicher wie eine Festung.",
        paragraphs: [
          "Landau war einst eine der stärksten Festungen am Oberrhein, von Vauban für den französischen König geplant. Heute prägen Weinberge der Südlichen Weinstraße und Studierende das Bild der Stadt.",
          "Sicher soll auch Ihr Goldverkauf sein: Ihre Sendung ist auf dem ganzen Weg versichert, und jedes Stück wird nach Gewicht und Feingehalt zum Tageskurs bewertet.",
          "Sie fordern das kostenlose Versandpaket an, geben es bei der Post ab und erhalten nach der Prüfung ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Godramstein", "Nußdorf", "Arzheim", "Queichheim", "Mörzheim"],
      nearby: ["Annweiler", "Bad Bergzabern", "Edenkoben", "Herxheim", "Offenbach an der Queich", "Klingenmünster"],
      faqs: [
        {
          question: "Ist meine Sendung aus Landau versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "pirmasens",
      name: "Pirmasens",
      metaTitle: "Goldankauf Pirmasens – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Pirmasens, Winzeln und Fehrbach: Ringe, Ketten, Münzen und Zahngold versichert einsenden – Auszahlung nach aktuellem Tageskurs.",
      heroText:
        "Von der Innenstadt bis Winzeln: Verkaufen Sie Ihr Gold aus Pirmasens per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Pirmasens – mit Handwerk, das man nachprüfen kann.",
        paragraphs: [
          "Pirmasens war über Generationen die deutsche Schuhmetropole. Wer aus der Stadt am Rand des Pfälzerwalds kommt, weiß gute Handarbeit und ehrliche Qualität zu schätzen.",
          "Auch beim Goldankauf zählt solides Handwerk: Wir prüfen den Feingehalt jedes Stücks, wiegen es genau und rechnen den reinen Goldanteil zum aktuellen Börsenkurs ab.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot, das Sie Posten für Posten nachvollziehen können.",
        ],
      },
      districts: ["Innenstadt", "Winzeln", "Fehrbach", "Erlenbrunn", "Niedersimten", "Gersbach"],
      nearby: ["Zweibrücken", "Rodalben", "Thaleischweiler-Fröschen", "Waldfischbach-Burgalben", "Hauenstein", "Dahn"],
      faqs: [
        {
          question: "Kann ich mein Gold in Pirmasens persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Pirmasens. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
      ],
    },
    {
      slug: "zweibrucken",
      name: "Zweibrücken",
      metaTitle: "Goldankauf Zweibrücken – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Zweibrücken, Ixheim und Bubenhausen: Altgold, Goldschmuck und Barren kostenlos per Versand verkaufen – bewertet nach Goldkurs.",
      heroText:
        "Ob aus Ixheim, Bubenhausen oder der Innenstadt: Senden Sie Ihr Gold aus Zweibrücken versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Zweibrücken – ohne Umwege, direkt per Post.",
        paragraphs: [
          "Zweibrücken war Residenz der Herzöge von Pfalz-Zweibrücken, und bis heute zeugen Herzogvorstadt und Rosengarten von dieser Zeit. Im Landgestüt werden seit über 250 Jahren Pferde gezüchtet.",
          "Für den Goldverkauf brauchen Sie keinen Termin und keine Fahrt: Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Innenstadt", "Ixheim", "Bubenhausen", "Niederauerbach", "Rimschweiler", "Mittelbach"],
      nearby: ["Homburg", "Contwig", "Blieskastel", "Hornbach", "Pirmasens", "Dellfeld"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldbarren an?",
          answer:
            "Ja. Wir kaufen Goldbarren in allen gängigen Größen an. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "andernach",
      name: "Andernach",
      metaTitle: "Goldankauf Andernach – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Andernach, Namedy und Eich: Schmuck, Münzen und Zahngold versichert per Post einschicken – transparent nach Börsenkurs bezahlt.",
      heroText:
        "Von Namedy bis Miesenheim: Verkaufen Sie Altgold, Schmuck und Münzen aus Andernach bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Andernach – ohne Überraschungen.",
        paragraphs: [
          "Auf der Halbinsel Namedy schießt der höchste Kaltwassergeysir der Welt bis zu 60 Meter in die Höhe. In der Stadt selbst wachsen Gemüse und Obst in öffentlichen Beeten, die jeder ernten darf.",
          "Überraschungen gibt es bei uns nur im Positiven: Ihr Angebot nennt für jedes Stück Gewicht, Feingehalt und Kurs, und versteckte Abzüge gibt es nicht.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Namedy", "Eich", "Kell", "Miesenheim"],
      nearby: ["Koblenz", "Neuwied", "Weißenthurm", "Plaidt", "Mendig", "Mayen"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Andernach?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Andernach. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "mayen",
      name: "Mayen",
      metaTitle: "Goldankauf Mayen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Mayen in der Eifel: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Hausen, Kürrenberg oder rund um die Genovevaburg: Senden Sie Ihr Gold aus Mayen versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Mayen – solide wie Eifeler Basalt.",
        paragraphs: [
          "Schon die Römer brachen bei Mayen Basaltlava und machten daraus Mühlsteine, die bis an die Nordsee gehandelt wurden. Über der Altstadt thront die Genovevaburg, im Herbst lockt der Lukasmarkt.",
          "Solide ist auch unsere Bewertung: Wir wiegen jedes Stück, bestimmen den Feingehalt und berechnen den reinen Goldanteil zum aktuellen Börsenkurs.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Hausen", "Kürrenberg", "Alzheim", "Betzing"],
      nearby: ["Mendig", "Polch", "Andernach", "Ettringen", "Kottenheim", "Ochtendung"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was kostet mich der Versand aus Mayen?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "bingen",
      name: "Bingen",
      metaTitle: "Goldankauf Bingen am Rhein – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Bingen am Rhein: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Bingerbrück bis Büdesheim: Verkaufen Sie Ihr Gold aus Bingen per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Bingen – am Tor zum Mittelrhein.",
        paragraphs: [
          "Bei Bingen beginnt das Obere Mittelrheintal, mitten im Fluss steht der Mäuseturm, und Hildegard von Bingen machte die Stadt schon im Mittelalter bekannt. Wer hier wohnt, lebt zwischen Weinbergen und Burgen.",
          "Wenn Sie Gold verkaufen möchten, müssen Sie dafür nirgendwo hinfahren. Das kostenlose Versandpaket kommt zu Ihnen, die versicherte Sendung geben Sie bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Innenstadt", "Bingerbrück", "Büdesheim", "Gaulsheim", "Kempten", "Dromersheim"],
      nearby: ["Rüdesheim", "Ingelheim", "Gau-Algesheim", "Münster-Sarmsheim", "Bad Kreuznach", "Trechtingshausen"],
      faqs: [
        {
          question: "Muss ich Edelsteine vorher entfernen?",
          answer:
            "Nein. Schmuck mit Steinen nehmen wir ebenfalls an. Bewertet wird der Goldanteil – die Steine berücksichtigen wir beim Gewicht entsprechend.",
        },
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Das Angebot ist unverbindlich. Lehnen Sie ab, senden wir Ihnen Ihre Stücke kostenlos und versichert zurück.",
        },
      ],
    },
  ],
};

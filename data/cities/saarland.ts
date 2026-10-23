import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const SAARLAND: State = {
  id: "saarland",
  name: "Saarland",
  cities: [
    {
      slug: "saarbrucken",
      name: "Saarbrücken",
      metaTitle: "Goldankauf Saarbrücken – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Saarbrücken, St. Johann und Malstatt: Altgold, Schmuck, Münzen und Barren kostenlos per Post verkaufen – bewertet nach Börsenkurs.",
      heroText:
        "Von St. Johann bis Dudweiler: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Saarbrücken bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Saarbrücken – mit klarer Linie wie die Ludwigskirche.",
        paragraphs: [
          "Barockbaumeister Friedrich Joachim Stengel gab Saarbrücken mit der Ludwigskirche und dem Schloss ihr Gesicht. Heute trifft man sich am St. Johanner Markt, und bis Frankreich sind es nur wenige Minuten.",
          "Klare Linien gelten auch bei unserem Angebot: Für jedes Stück stehen Gewicht, Feingehalt und der Börsenkurs am Tag der Prüfung schriftlich darin. Pauschalen oder versteckte Abzüge gibt es nicht.",
          "Statt mit Ihrem Schmuck in die Innenstadt zu fahren, fordern Sie unser kostenloses Versandpaket an und geben die versicherte Sendung bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["St. Johann", "Alt-Saarbrücken", "Malstatt", "Burbach", "Dudweiler", "Brebach-Fechingen"],
      nearby: ["Sulzbach", "Völklingen", "Püttlingen", "Riegelsberg", "Quierschied", "Kleinblittersdorf"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Saarbrücken?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Saarbrücken. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "neunkirchen",
      name: "Neunkirchen",
      metaTitle: "Goldankauf Neunkirchen – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Neunkirchen (Saar): Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Wiebelskirchen, Furpach oder der Innenstadt: Senden Sie Ihr Gold aus Neunkirchen versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Neunkirchen – ehrlich wie Hüttenarbeit.",
        paragraphs: [
          "Über 300 Jahre lang prägte das Eisenwerk Neunkirchen. Im Hüttenpark erinnern Hochöfen und Wassertürme daran, wie hier mit Metall und harter Arbeit Wohlstand entstand.",
          "Auch bei uns geht es um Metall und um ehrliche Arbeit: Wir wiegen jedes Stück, bestimmen den Feingehalt und berechnen den reinen Goldanteil zum aktuellen Kurs.",
          "Sie schicken Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden allein Sie.",
        ],
      },
      districts: ["Innenstadt", "Wiebelskirchen", "Furpach", "Kohlhof", "Wellesweiler", "Hangard"],
      nearby: ["Spiesen-Elversberg", "Ottweiler", "Bexbach", "Schiffweiler", "Illingen", "Merchweiler"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was kostet mich der Versand aus Neunkirchen?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "homburg",
      name: "Homburg",
      metaTitle: "Goldankauf Homburg (Saar) – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Homburg (Saar): Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Erbach bis Kirrberg: Verkaufen Sie Ihr Gold aus Homburg per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Homburg – ohne verborgene Gänge.",
        paragraphs: [
          "Unter dem Schlossberg liegen die Schlossberghöhlen, die größten Buntsandsteinhöhlen Europas, mit ihren verzweigten Gängen auf mehreren Etagen. Über der Stadt wird Homburg heute von Universitätsklinikum und Brauerei geprägt.",
          "Bei unserem Angebot gibt es keine verborgenen Gänge: Für jedes Stück sehen Sie Gewicht, Feingehalt und den Kurs, zu dem wir rechnen.",
          "Sie fordern das kostenlose Versandpaket an, legen Schmuck, Münzen oder Zahngold hinein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Innenstadt", "Erbach", "Beeden", "Bruchhof-Sanddorf", "Einöd", "Kirrberg"],
      nearby: ["Bexbach", "Kirkel", "Blieskastel", "Zweibrücken", "Bruchmühlbach-Miesau", "Waldmohr"],
      faqs: [
        {
          question: "Kann ich mein Gold in Homburg persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Homburg. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "volklingen",
      name: "Völklingen",
      metaTitle: "Goldankauf Völklingen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Völklingen, Wehrden und Ludweiler: Goldschmuck, Münzen und Zahngold versichert einsenden – fair nach aktuellem Tageskurs bezahlt.",
      heroText:
        "Ob aus Wehrden, Ludweiler oder der Innenstadt: Senden Sie Ihr Gold aus Völklingen versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Völklingen – wo Metall Weltkulturerbe ist.",
        paragraphs: [
          "Die Völklinger Hütte war 1994 das erste Industriedenkmal, das die UNESCO zum Weltkulturerbe erklärte. Wo früher Roheisen floss, zeigen heute Ausstellungen, welchen Wert Metall haben kann.",
          "Den Wert Ihres Goldes bestimmen wir genau: Wir wiegen jedes Stück, prüfen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Wehrden", "Fürstenhausen", "Ludweiler", "Lauterbach", "Heidstock"],
      nearby: ["Saarbrücken", "Püttlingen", "Großrosseln", "Wadgassen", "Bous", "Schwalbach"],
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
      slug: "saarlouis",
      name: "Saarlouis",
      metaTitle: "Goldankauf Saarlouis – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Saarlouis, Roden und Fraulautern: Altgold, Ringe, Ketten und Zahngold kostenlos per Versand einschicken – Auszahlung nach Goldkurs.",
      heroText:
        "Von Roden bis Lisdorf: Verkaufen Sie Altgold, Schmuck und Münzen aus Saarlouis bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Saarlouis – sicher wie hinter Festungsmauern.",
        paragraphs: [
          "Saarlouis wurde 1680 auf Befehl Ludwigs XIV. gegründet und von Vauban als sechseckige Festung geplant. Bis heute erkennt man den Grundriss in der Altstadt, und in den Kasematten wird gefeiert.",
          "Sicher ist auch Ihr Goldverkauf: Ihre Sendung ist auf dem ganzen Weg versichert, und jedes Stück wird nach Gewicht und Feingehalt zum Tageskurs bewertet.",
          "Das kostenlose Versandpaket kommt zu Ihnen nach Hause. Sie geben die Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Roden", "Fraulautern", "Lisdorf", "Beaumarais", "Picard"],
      nearby: ["Dillingen", "Wallerfangen", "Ensdorf", "Saarwellingen", "Überherrn", "Bous"],
      faqs: [
        {
          question: "Ist meine Sendung aus Saarlouis versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "merzig",
      name: "Merzig",
      metaTitle: "Goldankauf Merzig – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Merzig, Hilbringen und Brotdorf: Schmuck, Münzen, Barren und Zahngold versichert per Post einsenden – transparent nach Börsenkurs.",
      heroText:
        "Ob aus Hilbringen, Besseringen oder der Kernstadt: Senden Sie Ihr Gold aus Merzig versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Merzig – unkompliziert wie ein Glas Viez.",
        paragraphs: [
          "Merzig ist die Hauptstadt des Viez, des saarländischen Apfelweins, und feiert ihn jedes Jahr mit einem eigenen Fest. Nicht weit entfernt windet sich die Saar in der berühmten Saarschleife.",
          "Genauso unkompliziert ist der Goldverkauf bei uns: Sie fordern das kostenlose Versandpaket an, packen Ihre Stücke ein und geben die versicherte Sendung bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs. Ob Sie annehmen, entscheiden Sie.",
        ],
      },
      districts: ["Kernstadt", "Hilbringen", "Besseringen", "Brotdorf", "Mechern", "Schwemlingen"],
      nearby: ["Mettlach", "Losheim am See", "Beckingen", "Perl", "Wadern", "Dillingen"],
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
      slug: "st-wendel",
      name: "St. Wendel",
      metaTitle: "Goldankauf St. Wendel – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für St. Wendel und Bliesen: Altgold, Goldschmuck und Münzen kostenlos einsenden, nach Feingehalt prüfen und zum Tageskurs verkaufen.",
      heroText:
        "Von Bliesen bis Oberlinxweiler: Verkaufen Sie Ihr Gold aus St. Wendel per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in St. Wendel – mit Vertrauen von Anfang an.",
        paragraphs: [
          "Seit Jahrhunderten kommen Pilger zur Wendalinusbasilika, die mit ihren drei Türmen über der Altstadt steht. Rund um die Stadt führt die Straße der Skulpturen durch das St. Wendeler Land.",
          "Vertrauen ist auch beim Goldverkauf das Wichtigste. Deshalb steht in Ihrem Angebot für jedes Stück, wie viel es wiegt, welchen Feingehalt es hat und zu welchem Kurs wir rechnen.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Kernstadt", "Bliesen", "Oberlinxweiler", "Niederlinxweiler", "Urweiler", "Winterbach"],
      nearby: ["Ottweiler", "Oberthal", "Namborn", "Marpingen", "Tholey", "Freisen"],
      faqs: [
        {
          question: "Gibt es eine Filiale in St. Wendel?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in St. Wendel. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
      ],
    },
    {
      slug: "dillingen",
      name: "Dillingen",
      metaTitle: "Goldankauf Dillingen/Saar – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Dillingen/Saar: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Ob aus Pachten, Diefflen oder der Innenstadt: Senden Sie Ihr Gold aus Dillingen versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Dillingen – mit dem Blick für Metall.",
        paragraphs: [
          "In Dillingen an der Saar wird seit über 300 Jahren Stahl hergestellt, und die Dillinger Hütte prägt die Stadt bis heute. Im Stadtteil Pachten lag schon zur Römerzeit eine Siedlung.",
          "Wer hier lebt, hat einen Blick für Metall. Wir bewerten Ihr Gold genauso sachlich: nach Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie fordern das kostenlose Versandpaket an, geben Ihre Stücke versichert bei der Post ab und erhalten nach der Prüfung ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Pachten", "Diefflen"],
      nearby: ["Saarlouis", "Beckingen", "Rehlingen-Siersburg", "Nalbach", "Saarwellingen", "Merzig"],
      faqs: [
        {
          question: "Wie bestimmen Sie den Feingehalt meines Goldes?",
          answer:
            "Wir prüfen jedes Stück einzeln. Punzen wie 333, 585 oder 750 sind ein erster Hinweis, maßgeblich ist aber unsere Prüfung. Das Ergebnis steht für jedes Stück im Angebot.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "lebach",
      name: "Lebach",
      metaTitle: "Goldankauf Lebach – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Lebach, Landsweiler und Gresaubach: Ringe, Ketten und Zahngold versichert per Versand einschicken – fair nach Goldkurs bezahlt.",
      heroText:
        "Von Landsweiler bis Gresaubach: Verkaufen Sie Altgold, Schmuck und Münzen aus Lebach bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Lebach – damit Ihr Schatz nicht versteinert.",
        paragraphs: [
          "Lebach ist bekannt für die Lebacher Eier: Toneisenstein-Knollen, in denen Fossilien aus dem Erdaltertum eingeschlossen sind. Wer eines aufschlägt, findet manchmal einen kleinen Schatz.",
          "Ihr Schatz liegt vielleicht in der Schmuckschatulle. Ob alte Ringe, Ketten oder Münzen – wir bewerten jedes Stück nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Kernstadt", "Landsweiler", "Eidenborn", "Gresaubach", "Thalexweiler", "Steinbach"],
      nearby: ["Schmelz", "Eppelborn", "Saarwellingen", "Schwalbach", "Tholey", "Nalbach"],
      faqs: [
        {
          question: "Kann ich auch einzelne Ohrringe oder kaputte Ketten einsenden?",
          answer:
            "Ja. Einzelne Ohrringe, gerissene Ketten oder verbogene Ringe kaufen wir genauso an. Bewertet wird allein der Goldgehalt.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "puttlingen",
      name: "Püttlingen",
      metaTitle: "Goldankauf Püttlingen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Püttlingen und Köllerbach: Altgold, Schmuck, Münzen und Zahngold kostenlos per Post verkaufen – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Ob aus Köllerbach, Engelfangen oder Püttlingen selbst: Senden Sie Ihr Gold versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Püttlingen – bequem aus dem Köllertal.",
        paragraphs: [
          "Püttlingen liegt im Köllertal und war lange vom Bergbau geprägt. Heute ist die Stadt mit der Burg Bucherbach ein ruhiger Wohnort nah an Saarbrücken.",
          "Für den Goldverkauf müssen Sie das Tal nicht verlassen: Das kostenlose Versandpaket kommt zu Ihnen nach Hause, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und machen Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs.",
        ],
      },
      districts: ["Püttlingen", "Köllerbach", "Engelfangen", "Kölln", "Rittenhofen", "Herchenbach"],
      nearby: ["Völklingen", "Riegelsberg", "Heusweiler", "Saarbrücken", "Schwalbach", "Großrosseln"],
      faqs: [
        {
          question: "Kann ich mein Gold in Püttlingen persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Püttlingen. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kaufen Sie auch Goldmünzen an?",
          answer:
            "Ja. Wir kaufen Anlagemünzen wie Krügerrand oder Maple Leaf ebenso wie ältere Goldmünzen. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
      ],
    },
    {
      slug: "sulzbach",
      name: "Sulzbach",
      metaTitle: "Goldankauf Sulzbach/Saar – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Sulzbach/Saar: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Altenwald bis Neuweiler: Verkaufen Sie Ihr Gold aus Sulzbach per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Sulzbach – was früher Salz war, ist heute Gold.",
        paragraphs: [
          "In Sulzbach wurde früher Salz gesiedet, und das Salzbrunnenhaus erinnert bis heute daran. Salz war lange so wertvoll, dass man es das weiße Gold nannte.",
          "Bei uns geht es um echtes Gold: Wir wiegen jedes Stück, prüfen den Feingehalt und berechnen den reinen Goldanteil zum aktuellen Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Sulzbach-Mitte", "Altenwald", "Neuweiler", "Hühnerfeld", "Schnappach"],
      nearby: ["Saarbrücken", "Quierschied", "Friedrichsthal", "St. Ingbert", "Spiesen-Elversberg", "Dudweiler"],
      faqs: [
        {
          question: "Muss ich Edelsteine vorher entfernen?",
          answer:
            "Nein. Schmuck mit Steinen nehmen wir ebenfalls an. Bewertet wird der Goldanteil – die Steine berücksichtigen wir beim Gewicht entsprechend.",
        },
        {
          question: "Was kostet mich der Versand aus Sulzbach?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "bexbach",
      name: "Bexbach",
      metaTitle: "Goldankauf Bexbach – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Bexbach, Oberbexbach und Frankenholz: Goldschmuck, Münzen und Barren versichert einsenden – Auszahlung nach aktuellem Tageskurs.",
      heroText:
        "Ob aus Oberbexbach, Frankenholz oder Höchen: Senden Sie Ihr Gold aus Bexbach versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Bexbach – aus der Tiefe ans Licht.",
        paragraphs: [
          "Im Hindenburgturm im Blumengarten zeigt das Saarländische Bergbaumuseum, wie über Generationen Kohle aus der Tiefe geholt wurde. Bexbach ist stolz auf diese Geschichte.",
          "Manches Gold liegt ebenfalls lange verborgen, etwa in einer Schublade oder einem alten Schmuckkästchen. Wir bewerten es nach Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Bexbach", "Oberbexbach", "Niederbexbach", "Frankenholz", "Höchen", "Kleinottweiler"],
      nearby: ["Homburg", "Neunkirchen", "Kirkel", "Waldmohr", "Ottweiler", "Spiesen-Elversberg"],
      faqs: [
        {
          question: "Ich habe geerbten Schmuck. Kann ich ihn einfach einsenden?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Das Angebot ist unverbindlich. Lehnen Sie ab, senden wir Ihnen Ihre Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "blieskastel",
      name: "Blieskastel",
      metaTitle: "Goldankauf Blieskastel – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Blieskastel, Lautzkirchen und Webenheim: Altgold, Ringe und Zahngold kostenlos per Versand einschicken – fair nach Goldkurs bezahlt.",
      heroText:
        "Von Lautzkirchen bis Niederwürzbach: Verkaufen Sie Altgold, Schmuck und Münzen aus Blieskastel bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Blieskastel – mit Sinn für das Echte.",
        paragraphs: [
          "Die Barockstadt Blieskastel liegt mitten im Biosphärenreservat Bliesgau. Gräfin Marianne von der Leyen ließ hier im 18. Jahrhundert prächtige Bauten errichten, und auf dem Hügel steht der Gollenstein, Deutschlands größter Menhir.",
          "Echtheit zählt auch beim Goldankauf: Wir prüfen jedes Stück, bestimmen Gewicht und Feingehalt und rechnen den reinen Goldanteil zum aktuellen Börsenkurs ab.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots in Ruhe.",
        ],
      },
      districts: ["Innenstadt", "Lautzkirchen", "Webenheim", "Niederwürzbach", "Mimbach", "Biesingen"],
      nearby: ["Homburg", "Kirkel", "St. Ingbert", "Mandelbachtal", "Gersheim", "Zweibrücken"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Blieskastel?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Blieskastel. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
      ],
    },
    {
      slug: "wadgassen",
      name: "Wadgassen",
      metaTitle: "Goldankauf Wadgassen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Wadgassen, Hostenbach und Differten: Schmuck, Münzen und Zahngold versichert per Post einsenden – transparent nach Börsenkurs.",
      heroText:
        "Ob aus Hostenbach, Differten oder Schaffhausen: Senden Sie Ihr Gold aus Wadgassen versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Wadgassen – alles schriftlich, alles nachlesbar.",
        paragraphs: [
          "In den Gebäuden der früheren Abtei Wadgassen ist heute das Deutsche Zeitungsmuseum zu Hause. Hier lässt sich nachlesen, wie aus Nachrichten Gedrucktes wurde.",
          "Nachlesen können Sie auch unser Angebot: Für jedes Stück stehen Gewicht, Feingehalt und der Kurs, zu dem wir rechnen, schwarz auf weiß darin.",
          "Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Wadgassen", "Hostenbach", "Differten", "Friedrichweiler", "Schaffhausen", "Werbeln"],
      nearby: ["Völklingen", "Bous", "Saarlouis", "Überherrn", "Ensdorf", "Großrosseln"],
      faqs: [
        {
          question: "Ist meine Sendung aus Wadgassen versichert?",
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
    {
      slug: "wadern",
      name: "Wadern",
      metaTitle: "Goldankauf Wadern – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Wadern, Nunkirchen und Lockweiler: Altgold, Goldketten, Münzen und Zahngold kostenlos einsenden – bewertet nach aktuellem Tageskurs.",
      heroText:
        "Von Lockweiler bis Nunkirchen: Verkaufen Sie Ihr Gold aus Wadern per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Wadern – ohne lange Wege durch den Hochwald.",
        paragraphs: [
          "Wadern liegt im Schwarzwälder Hochwald im Norden des Saarlandes. Das Oettinger Schlösschen prägt die Innenstadt, und auf Schloss Dagstuhl treffen sich Informatiker aus aller Welt.",
          "Für den Goldverkauf brauchen Sie keine weiten Fahrten: Das kostenlose Versandpaket kommt zu Ihnen, und die versicherte Sendung geben Sie bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs und schicken Ihnen ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Kernstadt", "Lockweiler", "Nunkirchen", "Wadrill", "Morscholz", "Dagstuhl"],
      nearby: ["Losheim am See", "Weiskirchen", "Nonnweiler", "Merzig", "Lebach", "Hermeskeil"],
      faqs: [
        {
          question: "Kann ich mein Gold in Wadern persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Wadern. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
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

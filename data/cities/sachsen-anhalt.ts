import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const SACHSEN_ANHALT: State = {
  id: "sachsen-anhalt",
  name: "Sachsen-Anhalt",
  cities: [
    {
      slug: "magdeburg",
      name: "Magdeburg",
      metaTitle: "Goldankauf Magdeburg – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Magdeburg: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von Stadtfeld bis Buckau: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Magdeburg bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Magdeburg – wissenschaftlich sauber gerechnet.",
        paragraphs: [
          "Otto von Guericke bewies in Magdeburg mit seinen Halbkugeln, dass selbst Pferdegespanne gegen ein Vakuum nicht ankommen. Heute prägen Dom, Elbe und die Grüne Zitadelle die Landeshauptstadt.",
          "Auch beim Goldankauf zählen Messwerte statt Vermutungen: Ihr Angebot ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Statt durch die Stadt zu fahren, fordern Sie unser kostenloses Versandpaket an und geben die versicherte Sendung bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Altstadt", "Stadtfeld", "Sudenburg", "Buckau", "Neue Neustadt", "Werder"],
      nearby: ["Schönebeck", "Barleben", "Biederitz", "Wolmirstedt", "Burg", "Haldensleben"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Magdeburg?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Magdeburg. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "halle",
      name: "Halle (Saale)",
      metaTitle: "Goldankauf Halle (Saale) – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Halle (Saale): Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus dem Paulusviertel, Giebichenstein oder Kröllwitz: Senden Sie Ihr Gold aus Halle versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Halle – in der Stadt der Himmelsscheibe.",
        paragraphs: [
          "Im Landesmuseum für Vorgeschichte in Halle liegt die Himmelsscheibe von Nebra: eine über 3.600 Jahre alte Bronzescheibe mit Sonne, Mond und Sternen aus Gold. Schon damals wusste man, was Gold wert ist.",
          "Den Wert Ihres Goldes bestimmen wir genau: Wir wiegen jedes Stück, prüfen den Feingehalt und berechnen den reinen Goldanteil zum aktuellen Kurs.",
          "Sie schicken Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden allein Sie.",
        ],
      },
      districts: ["Altstadt", "Paulusviertel", "Giebichenstein", "Kröllwitz", "Südstadt", "Neustadt"],
      nearby: ["Merseburg", "Landsberg", "Teutschenthal", "Schkopau", "Kabelsketal", "Wettin-Löbejün"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was kostet mich der Versand aus Halle?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "dessau",
      name: "Dessau-Roßlau",
      metaTitle: "Goldankauf Dessau-Roßlau – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Dessau-Roßlau: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Ziebigk bis Roßlau: Verkaufen Sie Ihr Gold aus Dessau per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Dessau – klar und ohne Schnörkel wie das Bauhaus.",
        paragraphs: [
          "Mit dem Bauhaus wurde Dessau zum Zentrum der modernen Gestaltung: klare Formen, nichts Überflüssiges. Gleich daneben liegt das Gartenreich Dessau-Wörlitz, das wie das Bauhaus zum Welterbe gehört.",
          "Genauso schnörkellos ist unser Angebot: Gewicht, Feingehalt und Kurs für jedes Stück, ohne Pauschalen und ohne Kleingedrucktes.",
          "Sie fordern das kostenlose Versandpaket an, legen Schmuck, Münzen oder Zahngold hinein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Innenstadt", "Ziebigk", "Törten", "Alten", "Mildensee", "Roßlau"],
      nearby: ["Oranienbaum-Wörlitz", "Köthen", "Zerbst", "Raguhn-Jeßnitz", "Coswig (Anhalt)", "Bitterfeld-Wolfen"],
      faqs: [
        {
          question: "Kann ich mein Gold in Dessau persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Dessau-Roßlau. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
        },
      ],
    },
    {
      slug: "wittenberg",
      name: "Lutherstadt Wittenberg",
      metaTitle: "Goldankauf Wittenberg – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Lutherstadt Wittenberg: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Altstadt, Piesteritz oder Friedrichstadt: Senden Sie Ihr Gold aus Wittenberg versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Wittenberg – alles offen angeschlagen.",
        paragraphs: [
          "1517 machte Martin Luther in Wittenberg seine 95 Thesen öffentlich und stieß damit die Reformation an. Schlosskirche, Lutherhaus und die Werkstatt von Lucas Cranach erinnern bis heute daran.",
          "Offen und für jeden lesbar ist auch unser Angebot: Für jedes Stück stehen Gewicht, Feingehalt und der Kurs, zu dem wir rechnen, schwarz auf weiß darin.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des Angebots ganz in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Altstadt", "Friedrichstadt", "Piesteritz", "Apollensdorf", "Reinsdorf", "Pratau"],
      nearby: ["Coswig (Anhalt)", "Kemberg", "Zahna-Elster", "Gräfenhainichen", "Jessen", "Oranienbaum-Wörlitz"],
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
      slug: "halberstadt",
      name: "Halberstadt",
      metaTitle: "Goldankauf Halberstadt – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Halberstadt: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Innenstadt bis Wehrstedt: Verkaufen Sie Altgold, Schmuck und Münzen aus Halberstadt bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Halberstadt – mit Geduld und Sorgfalt.",
        paragraphs: [
          "Der Halberstädter Domschatz gehört zu den bedeutendsten Kirchenschätzen Europas, mit goldenen Kelchen und kostbaren Textilien. In der Burchardikirche spielt eine Orgel ein Stück von John Cage, das 639 Jahre dauern soll.",
          "So viel Zeit brauchen wir nicht. Aber wir nehmen uns die Zeit, jedes Stück sorgfältig zu wiegen, den Feingehalt zu bestimmen und zum aktuellen Börsenkurs abzurechnen.",
          "Das kostenlose Versandpaket kommt zu Ihnen nach Hause. Sie geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Wehrstedt", "Sargstedt", "Emersleben", "Langenstein", "Aspenstedt"],
      nearby: ["Wernigerode", "Quedlinburg", "Blankenburg", "Wegeleben", "Oschersleben", "Osterwieck"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldmünzen an?",
          answer:
            "Ja. Wir kaufen Anlagemünzen wie Krügerrand oder Maple Leaf ebenso wie ältere Goldmünzen. Bewertet wird nach Gewicht und Feingehalt zum aktuellen Kurs.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "stendal",
      name: "Stendal",
      metaTitle: "Goldankauf Stendal – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Stendal: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Altstadt, Stadtsee oder Röxe: Senden Sie Ihr Gold aus Stendal versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Stendal – hanseatisch solide.",
        paragraphs: [
          "Stendal war Mitglied der Hanse, und das Uenglinger Tor gilt als eines der schönsten Backsteintore Norddeutschlands. Als größte Stadt der Altmark ist Stendal bis heute ein Ort des Handels.",
          "Hanseatisch solide rechnen auch wir: Ihr Preis ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs – ohne Verhandeln und ohne versteckte Abzüge.",
          "Sie fordern das kostenlose Versandpaket an, packen Ihre Stücke ein und geben die versicherte Sendung bei der Post ab. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Altstadt", "Stadtsee", "Röxe", "Wahrburg", "Borstel", "Uenglingen"],
      nearby: ["Tangermünde", "Osterburg", "Bismark", "Tangerhütte", "Arneburg", "Havelberg"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Stendal?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Stendal. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
      ],
    },
    {
      slug: "merseburg",
      name: "Merseburg",
      metaTitle: "Goldankauf Merseburg – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Merseburg: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von der Innenstadt bis Meuschau: Verkaufen Sie Ihr Gold aus Merseburg per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Merseburg – ganz ohne Zauberei.",
        paragraphs: [
          "Im Merseburger Domstift wurden die Merseburger Zaubersprüche gefunden, die ältesten Zeugnisse deutscher Dichtung. Am Schloss hält man bis heute einen Raben im Käfig, der Sage vom diebischen Vogel zuliebe.",
          "Bei uns braucht es keine Zaubersprüche: Ihr Angebot ergibt sich nachvollziehbar aus Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Innenstadt", "Merseburg-Süd", "Merseburg-West", "Merseburg-Nord", "Meuschau", "Beuna"],
      nearby: ["Halle", "Leuna", "Schkopau", "Bad Dürrenberg", "Braunsbedra", "Mücheln"],
      faqs: [
        {
          question: "Kann ich auch einzelne Ohrringe oder kaputte Ketten einsenden?",
          answer:
            "Ja. Einzelne Ohrringe, gerissene Ketten oder verbogene Ringe kaufen wir genauso an. Bewertet wird allein der Goldgehalt.",
        },
        {
          question: "Ist meine Sendung aus Merseburg versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
      ],
    },
    {
      slug: "weissenfels",
      name: "Weißenfels",
      metaTitle: "Goldankauf Weißenfels – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Weißenfels: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Altstadt, der Neustadt oder Langendorf: Senden Sie Ihr Gold aus Weißenfels versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Weißenfels – mit Liebe zum Handwerk.",
        paragraphs: [
          "Über Weißenfels thront Schloss Neu-Augustusburg, einst Residenz der Herzöge von Sachsen-Weißenfels. Später machte die Schuhindustrie die Stadt an der Saale weithin bekannt.",
          "Wer gutes Handwerk kennt, schätzt eine genaue Prüfung. Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen den reinen Goldanteil zum aktuellen Kurs ab.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Borau", "Langendorf", "Markwerben", "Tagewerben"],
      nearby: ["Naumburg", "Hohenmölsen", "Lützen", "Teuchern", "Bad Dürrenberg", "Goseck"],
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
    {
      slug: "zeitz",
      name: "Zeitz",
      metaTitle: "Goldankauf Zeitz – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Zeitz: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Innenstadt bis Rasberg: Verkaufen Sie Altgold, Schmuck und Münzen aus Zeitz bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Zeitz – ans Licht geholt.",
        paragraphs: [
          "Unter der Altstadt von Zeitz liegt ein Labyrinth aus Gängen und Kellern, das man bei Führungen durch das Unterirdische Zeitz erkunden kann. Darüber thront Schloss Moritzburg an der Weißen Elster.",
          "Manches Gold liegt ebenfalls lange im Verborgenen, in Schubladen oder alten Schatullen. Wir bewerten es nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots, ob Sie verkaufen.",
        ],
      },
      districts: ["Innenstadt", "Zeitz-Ost", "Aue", "Rasberg", "Theißen"],
      nearby: ["Elsteraue", "Hohenmölsen", "Meuselwitz", "Gutenborn", "Osterfeld", "Teuchern"],
      faqs: [
        {
          question: "Kann ich mein Gold in Zeitz persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Zeitz. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
      ],
    },
    {
      slug: "bernburg",
      name: "Bernburg",
      metaTitle: "Goldankauf Bernburg – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Bernburg (Saale): Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Talstadt, der Bergstadt oder Dröbel: Senden Sie Ihr Gold aus Bernburg versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Bernburg – ein Angebot, auf das man bauen kann.",
        paragraphs: [
          "Schloss Bernburg thront hoch über der Saale und wird die Krone Anhalts genannt. Im Eulenspiegelturm soll der berühmte Schalk einst als Turmbläser gedient haben.",
          "Für Späße ist beim Goldverkauf kein Platz: Wir bewerten jedes Stück nach Gewicht, Feingehalt und dem aktuellen Börsenkurs und weisen alles einzeln aus.",
          "Sie fordern das kostenlose Versandpaket an und geben Ihre Stücke versichert bei der Post ab. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Talstadt", "Bergstadt", "Altstadt", "Dröbel", "Aderstedt", "Baalberge"],
      nearby: ["Könnern", "Nienburg", "Alsleben", "Güsten", "Staßfurt", "Aschersleben"],
      faqs: [
        {
          question: "Kaufen Sie auch altmodischen oder beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück aus der Mode gekommen, verbogen oder gerissen ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was kostet mich der Versand aus Bernburg?",
          answer:
            "Nichts. Versandpaket und Versicherung sind kostenlos. Lehnen Sie das Angebot ab, senden wir Ihre Stücke ebenfalls kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "kothen",
      name: "Köthen",
      metaTitle: "Goldankauf Köthen – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Köthen (Anhalt): Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von der Innenstadt bis Rüsternbreite: Verkaufen Sie Ihr Gold aus Köthen per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Köthen – stimmig bis ins Detail.",
        paragraphs: [
          "Johann Sebastian Bach war von 1717 bis 1723 Hofkapellmeister in Köthen, und hier entstanden einige seiner bekanntesten Werke. Später wirkte Samuel Hahnemann, der Begründer der Homöopathie, in der Stadt.",
          "Stimmig muss auch ein Goldangebot sein. Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab – nachvollziehbar bis ins Detail.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Ob Sie verkaufen, entscheiden Sie.",
        ],
      },
      districts: ["Innenstadt", "Rüsternbreite", "Baasdorf", "Merzien", "Dohndorf", "Elsdorf"],
      nearby: ["Dessau-Roßlau", "Aken", "Bernburg", "Zörbig", "Osternienburger Land", "Südliches Anhalt"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Köthen?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Köthen. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie bestimmen Sie den Feingehalt meines Goldes?",
          answer:
            "Wir prüfen jedes Stück einzeln. Punzen wie 333, 585 oder 750 sind ein erster Hinweis, maßgeblich ist aber unsere Prüfung. Das Ergebnis steht für jedes Stück im Angebot.",
        },
      ],
    },
    {
      slug: "sangerhausen",
      name: "Sangerhausen",
      metaTitle: "Goldankauf Sangerhausen – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Sangerhausen: Schmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Innenstadt, Oberröblingen oder Wippra: Senden Sie Ihr Gold aus Sangerhausen versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Sangerhausen – wo man Metall aus der Erde holte.",
        paragraphs: [
          "Über Jahrhunderte wurde rund um Sangerhausen Kupferschiefer abgebaut, und im Röhrigschacht kann man noch heute in die Tiefe einfahren. Über der Erde blühen im Europa-Rosarium tausende Rosensorten.",
          "Wer weiß, wie mühsam Metall gewonnen wird, will einen fairen Preis dafür. Wir bewerten Ihr Gold nach Gewicht, Feingehalt und dem aktuellen Börsenkurs.",
          "Sie fordern das kostenlose Versandpaket an, geben die versicherte Sendung bei der Post ab und erhalten nach der Prüfung Ihr schriftliches Angebot.",
        ],
      },
      districts: ["Innenstadt", "Oberröblingen", "Riestedt", "Lengefeld", "Großleinungen", "Wippra"],
      nearby: ["Allstedt", "Lutherstadt Eisleben", "Mansfeld", "Kelbra", "Südharz", "Artern"],
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
      slug: "quedlinburg",
      name: "Quedlinburg",
      metaTitle: "Goldankauf Quedlinburg – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Quedlinburg: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der Altstadt bis Gernrode: Verkaufen Sie Altgold, Schmuck und Münzen aus Quedlinburg bequem per Post – fair bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Quedlinburg – Schätze sicher auf dem Weg.",
        paragraphs: [
          "Quedlinburg mit seinen über 2.000 Fachwerkhäusern gehört zum UNESCO-Welterbe. Der Domschatz auf dem Stiftsberg zeigt goldene Reliquiare, die nach dem Zweiten Weltkrieg verschwunden waren und erst Jahrzehnte später zurückkehrten.",
          "Ihre Wertsachen sollen nicht verloren gehen: Deshalb ist Ihre Sendung zu uns auf dem gesamten Weg versichert. Wir bewerten jedes Stück nach Gewicht, Feingehalt und Tageskurs.",
          "Sie fordern das kostenlose Versandpaket an und erhalten nach der Prüfung ein schriftliches Angebot. Erst nach Ihrer Zusage überweisen wir.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Münzenberg", "Süderstadt", "Gernrode", "Bad Suderode"],
      nearby: ["Thale", "Halberstadt", "Ballenstedt", "Blankenburg", "Wegeleben", "Harzgerode"],
      faqs: [
        {
          question: "Ist meine Sendung aus Quedlinburg versichert?",
          answer:
            "Ja. Ihr Paket ist auf dem gesamten Weg zu uns versichert. Die Kosten für Versand und Versicherung übernehmen wir.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "aschersleben",
      name: "Aschersleben",
      metaTitle: "Goldankauf Aschersleben – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Aschersleben: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Innenstadt, Mehringen oder Winningen: Senden Sie Ihr Gold aus Aschersleben versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Aschersleben – Erfahrung, die zählt.",
        paragraphs: [
          "Aschersleben wurde schon im Jahr 753 erstmals erwähnt und gilt als älteste Stadt Sachsen-Anhalts. Am Rand des Harzes verbinden sich hier alte Stadtmauern mit dem modernen Bestehornpark.",
          "Ihr Gold hat oft ebenfalls eine lange Geschichte. Wir bewerten jedes Stück nach Gewicht, Feingehalt und dem aktuellen Börsenkurs – gleichgültig, wie alt es ist.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots ganz in Ruhe.",
        ],
      },
      districts: ["Innenstadt", "Mehringen", "Winningen", "Wilsleben", "Drohndorf", "Klein Schierstedt"],
      nearby: ["Seeland", "Hecklingen", "Staßfurt", "Falkenstein/Harz", "Bernburg", "Quedlinburg"],
      faqs: [
        {
          question: "Kann ich mein Gold in Aschersleben persönlich abgeben?",
          answer:
            "Nein. Cash 4 Gold arbeitet ausschließlich online und per Post und hat kein Ladengeschäft in Aschersleben. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht zusagt?",
          answer:
            "Dann senden wir Ihnen Ihre Stücke kostenlos und versichert zurück. Sie gehen kein Risiko ein und sind zu nichts verpflichtet.",
        },
      ],
    },
    {
      slug: "bitterfeld",
      name: "Bitterfeld-Wolfen",
      metaTitle: "Goldankauf Bitterfeld-Wolfen – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Bitterfeld-Wolfen: Altgold, Goldschmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von Bitterfeld bis Wolfen: Verkaufen Sie Ihr Gold per Post – sorgfältig geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Bitterfeld-Wolfen – nach Gold statt nach Bernstein.",
        paragraphs: [
          "Wo früher Braunkohle abgebaut wurde, liegt heute der Goitzschesee mit seinem markanten Pegelturm. Beim Tagebau fand man hier auch Bitterfelder Bernstein, und in Wolfen erzählt das Industrie- und Filmmuseum von der Filmfabrik.",
          "Bernstein kaufen wir nicht – Gold dafür umso lieber. Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot. Das Geld überweisen wir erst nach Ihrer Zusage.",
        ],
      },
      districts: ["Bitterfeld", "Wolfen", "Greppin", "Holzweißig", "Thalheim", "Bobbau"],
      nearby: ["Sandersdorf-Brehna", "Zörbig", "Raguhn-Jeßnitz", "Muldestausee", "Delitzsch", "Dessau-Roßlau"],
      faqs: [
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks selbst nachvollziehen.",
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

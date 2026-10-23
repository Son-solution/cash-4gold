import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const MECKLENBURG_VORPOMMERN: State = {
  id: "mecklenburg-vorpommern",
  name: "Mecklenburg-Vorpommern",
  cities: [
    {
      slug: "rostock",
      name: "Rostock",
      metaTitle: "Goldankauf Rostock – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Rostock, von der Südstadt bis Lütten Klein: Altgold, Schmuck, Münzen und Barren versichert einsenden – bezahlt nach Börsenkurs.",
      heroText:
        "Von der Kröpeliner Straße bis Warnemünde: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Rostock bequem per Post – bewertet nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Rostock – mit hanseatischer Verlässlichkeit.",
        paragraphs: [
          "Als Hansestadt hat Rostock jahrhundertelang Handel über die Ostsee getrieben. Die Universität von 1419 gehört zu den ältesten Nordeuropas, und in der Marienkirche zeigt die astronomische Uhr seit über 550 Jahren die Zeit.",
          "Hanseatische Kaufleute setzten auf klare Abmachungen. So halten wir es auch: Ihr Angebot ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Sie fordern unser kostenloses Versandpaket an, schicken Ihre Stücke versichert ein und entscheiden nach Erhalt des schriftlichen Angebots.",
        ],
      },
      districts: ["Stadtmitte", "Kröpeliner-Tor-Vorstadt", "Südstadt", "Lütten Klein", "Gehlsdorf", "Warnemünde"],
      nearby: ["Bad Doberan", "Kühlungsborn", "Graal-Müritz", "Sanitz", "Kritzmow", "Dummerstorf"],
      faqs: [
        {
          question: "Gibt es eine Ankaufstelle von Cash 4 Gold in Rostock?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Rostock. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie wird der Preis berechnet?",
          answer:
            "Wir bestimmen Gewicht und Feingehalt jedes Stücks und berechnen den reinen Goldanteil zum aktuellen Börsenkurs. Alle Werte stehen einzeln im Angebot.",
        },
      ],
    },
    {
      slug: "schwerin",
      name: "Schwerin",
      metaTitle: "Goldankauf Schwerin – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Schwerin, Schelfstadt und Lankow: Goldschmuck, Münzen und Zahngold kostenlos per Post verkaufen – transparent nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Schelfstadt, Lankow oder Zippendorf: Senden Sie Ihr Gold aus Schwerin versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Schwerin – ohne Märchenpreise.",
        paragraphs: [
          "Das Schloss auf seiner Insel im Schweriner See sieht aus wie aus einem Märchen. Rund um die Landeshauptstadt liegen sieben Seen, und die Altstadt mit Dom und Schelfstadt lädt zum Bummeln ein.",
          "Beim Goldankauf halten wir uns an nüchterne Zahlen: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum Börsenkurs ab. So wissen Sie genau, wie Ihr Preis zustande kommt.",
          "Das Versandpaket ist kostenlos und versichert. Sie geben es bei der Post ab und warten in Ruhe auf unser schriftliches Angebot.",
        ],
      },
      districts: ["Altstadt", "Schelfstadt", "Paulsstadt", "Lankow", "Weststadt", "Zippendorf"],
      nearby: ["Crivitz", "Gadebusch", "Ludwigslust", "Pampow", "Leezen", "Lübstorf"],
      faqs: [
        {
          question: "Was kann ich alles einsenden?",
          answer:
            "Altgold, Ringe, Ketten, Armbänder, Münzen, Barren und Zahngold. Auch kaputte oder einzelne Stücke werden nach ihrem Goldgehalt bewertet.",
        },
        {
          question: "Was passiert, wenn ich das Angebot ablehne?",
          answer:
            "Dann schicken wir Ihre Stücke kostenlos und versichert an Sie zurück. Für Sie entstehen keine Kosten.",
        },
      ],
    },
    {
      slug: "neubrandenburg",
      name: "Neubrandenburg",
      metaTitle: "Goldankauf Neubrandenburg – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Neubrandenburg: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden und nach aktuellem Börsenkurs bezahlt werden.",
      heroText:
        "Von der Innenstadt bis zum Datzeberg: Verkaufen Sie Ihr Gold aus Neubrandenburg per Post – geprüft nach Gewicht und Feingehalt.",
      intro: {
        title: "Gold verkaufen in Neubrandenburg – Ihr fünftes Tor zum fairen Preis.",
        paragraphs: [
          "Neubrandenburg ist die Stadt der vier Tore. Die mittelalterliche Stadtmauer umschließt die Innenstadt bis heute fast vollständig, und am Tollensesee beginnt gleich die Natur.",
          "Für den Goldverkauf brauchen Sie kein Tor zu durchqueren: Wir schicken Ihnen ein kostenloses Versandpaket, und die versicherte Sendung geben Sie bei der Post ab.",
          "Nach der Prüfung erhalten Sie ein Angebot mit Gewicht, Feingehalt und Kurs für jedes Stück. Erst nach Ihrer Zusage wird überwiesen.",
        ],
      },
      districts: ["Innenstadt", "Datzeberg", "Oststadt", "Katharinenviertel", "Reitbahnviertel", "Broda"],
      nearby: ["Burg Stargard", "Neustrelitz", "Friedland", "Penzlin", "Altentreptow", "Woldegk"],
      faqs: [
        {
          question: "Ist der Versand wirklich kostenlos?",
          answer:
            "Ja. Versandpaket, Porto und Versicherung übernehmen wir. Auch eine Rücksendung kostet Sie nichts.",
        },
        {
          question: "Muss ich um den Preis verhandeln?",
          answer:
            "Nein. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
      ],
    },
    {
      slug: "stralsund",
      name: "Stralsund",
      metaTitle: "Goldankauf Stralsund – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Stralsund und auf Rügen: Altgold, Ketten, Ringe und Zahngold versichert per Versand einsenden – Auszahlung nach aktuellem Goldkurs.",
      heroText:
        "Ob aus der Altstadt, Knieper oder Grünhufe: Schicken Sie Ihr Gold aus Stralsund kostenlos ein und erhalten Sie ein Angebot nach Tageskurs.",
      intro: {
        title: "Goldankauf für Stralsund – am Tor zur Insel Rügen.",
        paragraphs: [
          "Die Altstadt von Stralsund gehört seit 2002 zum UNESCO-Welterbe. Backsteingotik, das Ozeaneum am Hafen und die Gorch Fock zeigen, wie sehr die Stadt am Strelasund vom Meer lebt.",
          "Schätze gibt es aber nicht nur im Museum: In vielen Schubladen liegen alte Ringe, Ketten oder Münzen. Wir bewerten sie nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und erhalten ein schriftliches Angebot, das Sie in Ruhe prüfen können.",
        ],
      },
      districts: ["Altstadt", "Knieper", "Tribseer Vorstadt", "Frankenvorstadt", "Grünhufe", "Devin"],
      nearby: ["Bergen auf Rügen", "Altefähr", "Grimmen", "Barth", "Prohn", "Richtenberg"],
      faqs: [
        {
          question: "Kann ich auch von Rügen aus einsenden?",
          answer:
            "Ja. Das Versandpaket funktioniert von überall in Deutschland, auch von der Insel. Sie geben es einfach bei der nächsten Postfiliale ab.",
        },
        {
          question: "Wann bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, überweisen wir den Betrag auf Ihr Konto. Vorher wird nichts verkauft.",
        },
      ],
    },
    {
      slug: "greifswald",
      name: "Greifswald",
      metaTitle: "Goldankauf Greifswald – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Greifswald und Schönwalde: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden – nach Gewicht und Feingehalt fair bezahlt.",
      heroText:
        "Von Wieck bis Schönwalde: Verkaufen Sie Ihr Gold aus Greifswald bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Greifswald – klar wie ein Bild von Caspar David Friedrich.",
        paragraphs: [
          "Greifswald ist die Heimatstadt von Caspar David Friedrich. Die Klosterruine Eldena und der Hafen in Wieck mit seiner hölzernen Klappbrücke kennt man aus seinen Gemälden, und seit 1456 prägt die Universität die Stadt.",
          "Klare Linien schätzen wir auch beim Goldankauf: Ihr Angebot zeigt für jedes Stück Gewicht, Feingehalt und den Kurs, zu dem wir rechnen.",
          "Sie senden Ihre Stücke kostenlos und versichert ein. Lehnen Sie ab, erhalten Sie alles kostenlos zurück.",
        ],
      },
      districts: ["Innenstadt", "Fleischervorstadt", "Schönwalde", "Ostseeviertel", "Eldena", "Wieck"],
      nearby: ["Wolgast", "Lubmin", "Gützkow", "Loitz", "Anklam", "Usedom"],
      faqs: [
        {
          question: "Kann ich den Preis selbst nachrechnen?",
          answer:
            "Ja. Im Angebot stehen Gewicht, Feingehalt und der verwendete Kurs. Damit lässt sich der Wert jedes Stücks nachvollziehen.",
        },
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja, Zahngold können Sie auch mit Resten von Zähnen oder Keramik einsenden. Wir bewerten nur den Edelmetallanteil.",
        },
      ],
    },
    {
      slug: "wismar",
      name: "Wismar",
      metaTitle: "Goldankauf Wismar – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Wismar und auf der Insel Poel: Altgold, Goldschmuck und Münzen versichert per Post einschicken – bewertet nach Börsenkurs.",
      heroText:
        "Ob aus der Altstadt, Wendorf oder Friedenshof: Senden Sie Ihr Gold aus Wismar versichert ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Wismar – mit Blick auf den Alten Hafen.",
        paragraphs: [
          "Wismar war über 150 Jahre schwedisch. Die Schwedenköpfe am Alten Hafen und die Wasserkunst auf dem großen Marktplatz erinnern daran, und wie Stralsund gehört die Altstadt zum UNESCO-Welterbe.",
          "Wer hier altes Gold besitzt, kann es bei uns ohne Umwege verkaufen. Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum aktuellen Börsenkurs ab.",
          "Das kostenlose, versicherte Versandpaket kommt zu Ihnen nach Hause. Erst wenn Sie unserem Angebot zustimmen, überweisen wir den Betrag.",
        ],
      },
      districts: ["Altstadt", "Wendorf", "Friedenshof", "Kagenmarkt", "Redentin", "Dargetzow"],
      nearby: ["Insel Poel", "Grevesmühlen", "Neukloster", "Neubukow", "Bad Kleinen", "Dorf Mecklenburg"],
      faqs: [
        {
          question: "Ich weiß nicht, ob mein Schmuck echt ist. Was nun?",
          answer:
            "Senden Sie ihn trotzdem ein. Wir prüfen jedes Stück. Ist etwas nicht aus Edelmetall, sagen wir es Ihnen und schicken es kostenlos zurück.",
        },
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online bei uns an. Wir schicken es Ihnen kostenlos zu, und Sie geben die versicherte Sendung bei der Post ab.",
        },
      ],
    },
    {
      slug: "gustrow",
      name: "Güstrow",
      metaTitle: "Goldankauf Güstrow – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Güstrow und Umgebung: Altgold, Ringe, Ketten und Zahngold kostenlos per Versand verkaufen – fair nach aktuellem Tageskurs bezahlt.",
      heroText:
        "Von der Altstadt bis zur Südstadt: Verkaufen Sie Ihr Gold aus Güstrow per Post – geprüft nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Güstrow – mit Sinn für Handwerk und Material.",
        paragraphs: [
          "Güstrow nennt sich Barlachstadt: Ernst Barlach lebte und arbeitete hier, und sein „Schwebender“ hängt im Dom. Dazu kommt das Renaissanceschloss, eines der schönsten in Norddeutschland.",
          "Barlach wusste, was in einem Material steckt. Beim Goldankauf geht es uns genauso: Wir bestimmen den Feingehalt jedes Stücks und berechnen den Wert des reinen Goldes zum Börsenkurs.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots.",
        ],
      },
      districts: ["Altstadt", "Südstadt", "Distelberg", "Heidberg", "Primerburg", "Klueß"],
      nearby: ["Bützow", "Krakow am See", "Laage", "Teterow", "Lalendorf", "Schwaan"],
      faqs: [
        {
          question: "Kaufen Sie auch geerbten Schmuck?",
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
      slug: "waren",
      name: "Waren (Müritz)",
      metaTitle: "Goldankauf Waren (Müritz) – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Waren (Müritz) und an der Seenplatte: Schmuck, Münzen und Zahngold versichert einsenden – transparent nach Börsenkurs bewertet.",
      heroText:
        "Ob aus der Altstadt, Papenberg oder Ecktannen: Senden Sie Ihr Gold aus Waren kostenlos ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Waren – so entspannt wie ein Tag an der Müritz.",
        paragraphs: [
          "Waren liegt am Nordufer der Müritz, dem größten See, der vollständig in Deutschland liegt. Das Müritzeum und der Müritz-Nationalpark locken jedes Jahr viele Besucher in die Stadt.",
          "Wer hier wohnt, fährt für den Goldverkauf nicht gern bis nach Rostock oder Neubrandenburg. Das müssen Sie auch nicht: Unser kostenloses Versandpaket bringt den Ankauf zu Ihnen.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein schriftliches Angebot. Sie entscheiden in Ruhe.",
        ],
      },
      districts: ["Altstadt", "Papenberg", "Ecktannen", "Warenshof", "Eldenburg"],
      nearby: ["Malchow", "Röbel", "Penzlin", "Malchin", "Neustrelitz", "Klink"],
      faqs: [
        {
          question: "Lohnt sich der Versand auch für wenige Stücke?",
          answer:
            "Ja. Versand und Versicherung sind kostenlos, egal ob Sie einen einzelnen Ring oder eine ganze Schmuckschatulle einsenden.",
        },
        {
          question: "Wo gebe ich das Paket ab?",
          answer:
            "In jeder Postfiliale oder Packstation. Die Sendung ist kostenlos und versichert, Sie zahlen kein Porto.",
        },
      ],
    },
    {
      slug: "pasewalk",
      name: "Pasewalk",
      metaTitle: "Goldankauf Pasewalk – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Pasewalk, Torgelow und Ueckermünde: Altgold, Goldschmuck und Zahngold kostenlos per Post einschicken – Auszahlung nach Tageskurs.",
      heroText:
        "Aus Pasewalk und der Uecker-Randow-Region: Verkaufen Sie Ihr Gold bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Pasewalk – ohne weite Wege durch Vorpommern.",
        paragraphs: [
          "Pasewalk liegt an der Uecker im Südosten Vorpommerns, nicht weit von der polnischen Grenze. Das Prenzlauer Tor und der Pulverturm „Kiek in de Mark“ erinnern an die alte Stadtbefestigung.",
          "Bis zum nächsten größeren Goldhändler ist es von hier oft weit. Bei uns entfällt der Weg: Sie fordern das kostenlose Versandpaket an und geben es bei der Post ab.",
          "Nach der Prüfung erhalten Sie ein Angebot mit Gewicht, Feingehalt und Kurs für jedes Stück. Erst nach Ihrer Zusage wird überwiesen.",
        ],
      },
      districts: ["Altstadt", "Oststadt", "Friedrichshof"],
      nearby: ["Torgelow", "Strasburg", "Löcknitz", "Ueckermünde", "Prenzlau", "Brüssow"],
      faqs: [
        {
          question: "Welche Legierungen kaufen Sie an?",
          answer:
            "Alle gängigen Legierungen von 333er bis 999er Gold. Wir bestimmen den Feingehalt jedes Stücks und rechnen entsprechend ab.",
        },
        {
          question: "Ist mein Gold auf dem Postweg versichert?",
          answer:
            "Ja. Unser Versandpaket ist kostenlos und versichert – vom Abgeben bei der Post bis zur Ankunft bei uns.",
        },
      ],
    },
    {
      slug: "ribnitz-damgarten",
      name: "Ribnitz-Damgarten",
      metaTitle: "Goldankauf Ribnitz-Damgarten – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Ribnitz-Damgarten und auf dem Fischland: Schmuck, Münzen und Zahngold versichert einsenden – fair nach aktuellem Goldkurs bezahlt.",
      heroText:
        "Ob aus Ribnitz, Damgarten oder Klockenhagen: Senden Sie Ihr Gold versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Ribnitz-Damgarten – aus der Bernsteinstadt.",
        paragraphs: [
          "Ribnitz-Damgarten ist die Bernsteinstadt: Im ehemaligen Klarissenkloster zeigt das Deutsche Bernsteinmuseum das „Gold der Ostsee“. Die Stadt liegt am Saaler Bodden, direkt am Übergang zum Fischland.",
          "Bernstein ist schön, beim Goldankauf zählt aber echtes Gold. Wir bewerten Ihre Ringe, Ketten und Münzen nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots.",
        ],
      },
      districts: ["Ribnitz", "Damgarten", "Klockenhagen", "Körkwitz", "Pütnitz"],
      nearby: ["Graal-Müritz", "Dierhagen", "Ahrenshoop", "Marlow", "Bad Sülze", "Barth"],
      faqs: [
        {
          question: "Kaufen Sie auch Schmuck mit Bernstein an?",
          answer:
            "Wir bewerten den Edelmetallanteil eines Schmuckstücks. Bernstein und andere Steine fließen nicht in den Preis ein.",
        },
        {
          question: "Wie schnell erhalte ich ein Angebot?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und senden Ihnen das Angebot zu.",
        },
      ],
    },
    {
      slug: "demmin",
      name: "Demmin",
      metaTitle: "Goldankauf Demmin – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Demmin, Loitz und Dargun: Altgold, Ringe, Münzen und Zahngold kostenlos per Versand verkaufen – nach Gewicht und Tageskurs bewertet.",
      heroText:
        "Aus der Hansestadt Demmin und dem Umland: Verkaufen Sie Ihr Gold per Post – nachvollziehbar geprüft und nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Demmin – dort, wo drei Flüsse zusammenkommen.",
        paragraphs: [
          "Demmin liegt dort, wo Peene, Tollense und Trebel zusammenfließen. Als alte Hansestadt hat sie mit dem Luisentor und der Kirche St. Bartholomaei Zeugnisse ihrer langen Geschichte bewahrt.",
          "Für den Goldverkauf müssen Sie nicht bis nach Greifswald oder Neubrandenburg fahren. Unser kostenloses Versandpaket kommt zu Ihnen nach Hause.",
          "Wir wiegen jedes Stück, bestimmen den Feingehalt und schicken Ihnen ein schriftliches Angebot zum Börsenkurs.",
        ],
      },
      districts: ["Altstadt", "Seedorf", "Vorwerk", "Randow"],
      nearby: ["Loitz", "Dargun", "Jarmen", "Altentreptow", "Stavenhagen", "Malchin"],
      faqs: [
        {
          question: "Brauche ich Belege oder Zertifikate?",
          answer:
            "Nein. Wir prüfen Ihre Stücke selbst. Belege sind nicht nötig, um Gold bei uns zu verkaufen.",
        },
        {
          question: "Kann ich mein Gold zurückbekommen?",
          answer:
            "Ja. Wenn Sie das Angebot ablehnen, senden wir Ihnen alle Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "anklam",
      name: "Anklam",
      metaTitle: "Goldankauf Anklam – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Anklam und Richtung Usedom: Goldschmuck, Münzen, Barren und Zahngold versichert per Post einsenden – bezahlt nach Börsenkurs.",
      heroText:
        "Ob aus Anklam, Gellendin oder Pelsin: Schicken Sie Ihr Gold kostenlos ein und erhalten Sie ein Angebot nach Gewicht und Tageskurs.",
      intro: {
        title: "Goldankauf für Anklam – der Weg ist kürzer als ein Lilienthal-Flug.",
        paragraphs: [
          "In Anklam wurde Otto Lilienthal geboren, der Pionier des Menschenflugs. Das Otto-Lilienthal-Museum erzählt seine Geschichte, und die Hansestadt an der Peene ist zugleich das Tor zur Insel Usedom.",
          "Ihr Gold muss nicht fliegen, um bei uns anzukommen: Sie geben es im kostenlosen, versicherten Versandpaket bei der Post ab.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs und überweisen erst, wenn Sie dem Angebot zugestimmt haben.",
        ],
      },
      districts: ["Altstadt", "Südstadt", "Gellendin", "Pelsin", "Stretense"],
      nearby: ["Usedom", "Wolgast", "Ducherow", "Spantekow", "Jarmen", "Lassan"],
      faqs: [
        {
          question: "Muss ich meinen Schmuck vorher reinigen oder sortieren?",
          answer:
            "Nein. Sie können alles so einsenden, wie es ist. Wir sortieren und prüfen jedes Stück selbst.",
        },
        {
          question: "Kaufen Sie auch Silber an?",
          answer:
            "Ja. Neben Gold kaufen wir auch Silber, Platin und Palladium an. Alles kann im selben Paket mitgeschickt werden.",
        },
      ],
    },
    {
      slug: "teterow",
      name: "Teterow",
      metaTitle: "Goldankauf Teterow – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Goldankauf für Teterow, Malchin und Gnoien: Altgold, Ketten und Zahngold kostenlos einsenden, prüfen lassen und zum aktuellen Goldkurs verkaufen.",
      heroText:
        "Aus Teterow und der Mecklenburgischen Schweiz: Verkaufen Sie Ihr Gold bequem per Post – geprüft nach Gewicht und Feingehalt.",
      intro: {
        title: "Gold verkaufen in Teterow – ganz ohne Schildbürgerstreich.",
        paragraphs: [
          "Teterow ist für den Bergring bekannt, eine der berühmtesten Grasbahnen Europas. Und die Legende vom Teterower Hecht, dem die Bürger eine Glocke umbanden, um ihn später wiederzufinden, kennt im Land fast jeder.",
          "Bei uns müssen Sie Ihr Gold nicht markieren, um den Überblick zu behalten: Im Angebot stehen Gewicht, Feingehalt und Wert jedes einzelnen Stücks.",
          "Sie senden alles kostenlos und versichert ein. Gefällt Ihnen das Angebot nicht, schicken wir alles kostenlos zurück.",
        ],
      },
      districts: ["Altstadt", "Teschow"],
      nearby: ["Güstrow", "Malchin", "Laage", "Gnoien", "Dargun", "Lalendorf"],
      faqs: [
        {
          question: "Woran erkenne ich, wie viel Gold in einem Stück steckt?",
          answer:
            "Oft verrät es ein Stempel wie 333, 585 oder 750. Fehlt er, ist das kein Problem: Wir bestimmen den Feingehalt bei der Prüfung selbst.",
        },
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Sie entscheiden frei. Lehnen Sie ab, schicken wir Ihre Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "parchim",
      name: "Parchim",
      metaTitle: "Goldankauf Parchim – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Parchim, Lübz und Goldberg: Schmuck, Münzen und Zahngold versichert per Versand einschicken – transparent nach Tageskurs bewertet.",
      heroText:
        "Ob aus der Altstadt, der Weststadt oder Slate: Senden Sie Ihr Gold aus Parchim kostenlos ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Parchim – gut geplant wie bei Moltke.",
        paragraphs: [
          "Parchim an der Elde gehört zu den ältesten Städten Mecklenburgs. Hier wurde Generalfeldmarschall Helmuth von Moltke geboren, und Fachwerk und Backsteinkirchen prägen bis heute die Altstadt.",
          "Ein Goldverkauf braucht keinen großen Plan: Paket anfordern, Stücke einpacken, versichert abschicken. Den Rest erledigen wir.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und schicken Ihnen ein Angebot zum aktuellen Börsenkurs. Erst nach Ihrer Zusage wird überwiesen.",
        ],
      },
      districts: ["Altstadt", "Neustadt", "Weststadt", "Slate", "Möderitz"],
      nearby: ["Lübz", "Crivitz", "Ludwigslust", "Goldberg", "Spornitz", "Plau am See"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldmünzen und Barren?",
          answer:
            "Ja. Barren und Münzen wie Krügerrand, Maple Leaf oder Philharmoniker bewerten wir nach Feingewicht zum aktuellen Kurs.",
        },
        {
          question: "Was kostet mich der Versand?",
          answer:
            "Nichts. Das Versandpaket und die Versicherung sind kostenlos. Auch eine Rücksendung, falls Sie das Angebot ablehnen, übernehmen wir.",
        },
      ],
    },
    {
      slug: "malchin",
      name: "Malchin",
      metaTitle: "Goldankauf Malchin – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Malchin und Stavenhagen: Altgold, Goldschmuck, Münzen und Zahngold kostenlos per Post verkaufen – fair nach Börsenkurs bezahlt.",
      heroText:
        "Aus Malchin zwischen Malchiner und Kummerower See: Verkaufen Sie Ihr Gold per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Malchin – zwischen zwei Seen und ohne Umwege.",
        paragraphs: [
          "Malchin liegt zwischen dem Malchiner und dem Kummerower See am Rand der Mecklenburgischen Schweiz. Steintor, Kalensches Tor und die Johanniskirche erzählen von der Geschichte der kleinen Stadt.",
          "Für den Goldverkauf müssen Sie nicht in eine größere Stadt fahren. Unser kostenloses, versichertes Versandpaket kommt direkt zu Ihnen.",
          "Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs und schicken Ihnen ein schriftliches Angebot, das Sie in Ruhe prüfen.",
        ],
      },
      districts: ["Altstadt", "Remplin", "Pisede"],
      nearby: ["Teterow", "Stavenhagen", "Demmin", "Neukalen", "Dargun", "Waren (Müritz)"],
      faqs: [
        {
          question: "Kaufen Sie auch alte Uhren mit Goldgehäuse?",
          answer:
            "Ja, Uhren mit Gehäuse oder Armband aus Gold bewerten wir nach ihrem Goldanteil. Das Uhrwerk selbst fließt nicht in den Preis ein.",
        },
        {
          question: "Wann bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, überweisen wir den Betrag auf Ihr Konto. Vorher wird nichts verkauft.",
        },
      ],
    },
  ],
};

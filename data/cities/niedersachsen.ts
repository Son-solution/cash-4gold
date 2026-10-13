import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
export const NIEDERSACHSEN: State = {
  id: "niedersachsen",
  name: "Niedersachsen",
  cities: [
    {
      slug: "hannover",
      name: "Hannover",
      metaTitle: "Goldankauf Hannover – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Hannover: Altgold, Schmuck, Münzen, Barren und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Von der List bis Linden: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Hannover bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Hannover – so sachlich wie eine Messe-Bilanz.",
        paragraphs: [
          "Hannover ist Landeshauptstadt und Messestadt: Jedes Jahr kommen Aussteller aus aller Welt, um hier Geschäfte abzuschließen. Zwischen Neuem Rathaus, Maschsee und den Herrenhäuser Gärten geht es dabei erstaunlich bodenständig zu.",
          "Bodenständig ist auch unser Ankauf: Ihr Preis ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung. Keine Pauschalen, kein Verhandeln.",
          "Sie fordern unser kostenloses Versandpaket an, geben Ihre Stücke versichert bei der Post ab und entscheiden nach Erhalt des schriftlichen Angebots.",
        ],
      },
      districts: ["Mitte", "List", "Linden", "Südstadt", "Döhren", "Kirchrode"],
      nearby: ["Langenhagen", "Garbsen", "Laatzen", "Hemmingen", "Lehrte", "Burgdorf"],
      faqs: [
        {
          question: "Gibt es eine Filiale von Cash 4 Gold in Hannover?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Hannover. Sie senden Ihre Stücke im kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Welcher Goldkurs gilt für mein Angebot?",
          answer:
            "Maßgeblich ist der Börsenkurs am Tag, an dem wir Ihre Sendung prüfen. Im Angebot sehen Sie den Kurs sowie Gewicht und Feingehalt jedes einzelnen Stücks.",
        },
      ],
    },
    {
      slug: "braunschweig",
      name: "Braunschweig",
      metaTitle: "Goldankauf Braunschweig – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Braunschweig: Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus dem Östlichen Ringgebiet, der Weststadt oder Querum: Senden Sie Ihr Gold aus Braunschweig versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Braunschweig – mit dem Mut des Löwen.",
        paragraphs: [
          "Heinrich der Löwe machte Braunschweig im 12. Jahrhundert zu seiner Residenz. Der Burglöwe vor der Burg Dankwarderode und der Dom erinnern bis heute daran, und die TU ist eine der ältesten technischen Hochschulen Deutschlands.",
          "Etwas Mut braucht es manchmal, alten Schmuck aus der Schublade zu holen. Der Rest ist einfach: Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden alles im kostenlosen, versicherten Paket ein. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Innenstadt", "Östliches Ringgebiet", "Westliches Ringgebiet", "Weststadt", "Riddagshausen", "Querum"],
      nearby: ["Wolfenbüttel", "Peine", "Salzgitter", "Wolfsburg", "Cremlingen", "Vechelde"],
      faqs: [
        {
          question: "Kaufen Sie auch beschädigten Schmuck?",
          answer:
            "Ja. Für den Goldwert spielt es keine Rolle, ob ein Stück verbogen, gerissen oder unvollständig ist. Entscheidend sind Gewicht und Feingehalt.",
        },
        {
          question: "Was passiert, wenn ich das Angebot ablehne?",
          answer:
            "Dann schicken wir Ihre Stücke kostenlos und versichert an Sie zurück. Für Sie entstehen keine Kosten.",
        },
      ],
    },
    {
      slug: "oldenburg",
      name: "Oldenburg",
      metaTitle: "Goldankauf Oldenburg – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Oldenburg: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden, präzise prüfen lassen und nach Börsenkurs bezahlt werden.",
      heroText:
        "Von Eversten bis Donnerschwee: Verkaufen Sie Ihr Gold aus Oldenburg per Post – nachvollziehbar geprüft und nach Tageskurs abgerechnet.",
      intro: {
        title: "Gold verkaufen in Oldenburg – ehrlich wie ein Teller Grünkohl.",
        paragraphs: [
          "Oldenburg ist die heimliche Hauptstadt des Grünkohls. Rund um Schloss und Lappan liegt eine lebendige Innenstadt, und die Universität bringt viele junge Leute in die Stadt an der Hunte.",
          "Ehrlich und ohne Schnickschnack läuft auch unser Ankauf: Jedes Stück wird gewogen und auf seinen Feingehalt geprüft. Daraus und aus dem Börsenkurs ergibt sich Ihr Preis.",
          "Sie senden Ihre Stücke kostenlos und versichert ein. Gefällt Ihnen das Angebot nicht, bekommen Sie alles kostenlos zurück.",
        ],
      },
      districts: ["Innenstadt", "Eversten", "Bürgerfelde", "Donnerschwee", "Osternburg", "Kreyenbrück"],
      nearby: ["Bad Zwischenahn", "Rastede", "Edewecht", "Wardenburg", "Hude", "Hatten"],
      faqs: [
        {
          question: "Wie stellen Sie den Feingehalt fest?",
          answer:
            "Wir prüfen jedes Stück einzeln, auch wenn kein Stempel vorhanden ist. Die gemessene Legierung steht zusammen mit dem Gewicht in Ihrem Angebot.",
        },
        {
          question: "Ist der Versand wirklich kostenlos?",
          answer:
            "Ja. Versandpaket, Porto und Versicherung übernehmen wir. Auch eine Rücksendung kostet Sie nichts.",
        },
      ],
    },
    {
      slug: "osnabruck",
      name: "Osnabrück",
      metaTitle: "Goldankauf Osnabrück – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Osnabrück: Altgold, Ketten, Ringe, Münzen und Zahngold versichert einsenden und nach aktuellem Goldkurs verkaufen.",
      heroText:
        "Ob aus dem Westerberg, der Wüste oder Schinkel: Schicken Sie Ihr Gold aus Osnabrück kostenlos ein und erhalten Sie ein Angebot nach Tageskurs.",
      intro: {
        title: "Goldankauf für Osnabrück – ein Geschäft, mit dem alle Frieden schließen können.",
        paragraphs: [
          "Im Friedenssaal des Osnabrücker Rathauses wurde 1648 ein Teil des Westfälischen Friedens verhandelt. Seitdem versteht sich Osnabrück als Friedensstadt, und Erich Maria Remarque und Felix Nussbaum stammen von hier.",
          "Ein guter Handel ist einer, bei dem beide Seiten zufrieden sind. Deshalb legen wir offen, wie Ihr Preis entsteht: Gewicht, Feingehalt und Börsenkurs, Stück für Stück.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots in Ruhe.",
        ],
      },
      districts: ["Innenstadt", "Westerberg", "Wüste", "Schinkel", "Haste", "Sonnenhügel"],
      nearby: ["Georgsmarienhütte", "Bramsche", "Belm", "Wallenhorst", "Bissendorf", "Hasbergen"],
      faqs: [
        {
          question: "Welche Goldstücke kann ich einsenden?",
          answer:
            "Altgold, Ketten, Ringe, Armbänder, Ohrringe, Münzen, Barren und Zahngold. Auch einzelne Ohrringe oder gerissene Ketten werden nach ihrem Goldgehalt bewertet.",
        },
        {
          question: "Muss ich um den Preis verhandeln?",
          answer:
            "Nein. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
      ],
    },
    {
      slug: "wolfsburg",
      name: "Wolfsburg",
      metaTitle: "Goldankauf Wolfsburg – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Wolfsburg: Goldschmuck, Münzen, Barren und Zahngold kostenlos einsenden – geprüft nach Gewicht und Feingehalt, bezahlt nach Börsenkurs.",
      heroText:
        "Von Fallersleben bis Vorsfelde: Verkaufen Sie Ihr Gold aus Wolfsburg bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Wolfsburg – präzise wie am Band.",
        paragraphs: [
          "Wolfsburg wurde 1938 gegründet und ist seitdem mit Volkswagen gewachsen. Heute ziehen die Autostadt, das phaeno und das Kunstmuseum Besucher an, und in Fallersleben wurde Hoffmann von Fallersleben geboren.",
          "In einer Stadt, in der Abläufe genau getaktet sind, schätzt man klare Prozesse. Bei uns sieht das so aus: Paket anfordern, Stücke einsenden, Angebot prüfen, Geld erhalten.",
          "Jedes Stück wird gewogen und auf seinen Feingehalt geprüft. Der Preis folgt dem Börsenkurs am Tag der Prüfung.",
        ],
      },
      districts: ["Stadtmitte", "Fallersleben", "Vorsfelde", "Detmerode", "Westhagen", "Hehlingen"],
      nearby: ["Gifhorn", "Braunschweig", "Helmstedt", "Königslutter", "Velpke", "Weyhausen"],
      faqs: [
        {
          question: "Wie lange dauert der Ablauf?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und schicken Ihnen das Angebot. Nach Ihrer Zusage überweisen wir den Betrag.",
        },
        {
          question: "Ist mein Gold auf dem Postweg versichert?",
          answer:
            "Ja. Unser Versandpaket ist kostenlos und versichert – vom Abgeben bei der Post bis zur Ankunft bei uns.",
        },
      ],
    },
    {
      slug: "gottingen",
      name: "Göttingen",
      metaTitle: "Goldankauf Göttingen – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Göttingen: Altgold, Schmuck, Münzen und Zahngold kostenlos per Post einsenden und nach Tageskurs verkaufen – versichert und transparent.",
      heroText:
        "Ob aus der Innenstadt, Weende oder Geismar: Senden Sie Ihr Gold aus Göttingen versichert ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Göttingen – wissenschaftlich genau.",
        paragraphs: [
          "Göttingen ist eine Stadt, die Wissen schafft: Über 40 Nobelpreisträger haben hier studiert, gelehrt oder geforscht. Wer an der Universität promoviert, küsst traditionell das Gänseliesel auf dem Marktplatz.",
          "Mit derselben Genauigkeit gehen wir an Ihr Gold heran: Wir messen Gewicht und Feingehalt und berechnen den Wert zum aktuellen Börsenkurs. Alle Werte stehen im Angebot.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden danach frei.",
        ],
      },
      districts: ["Innenstadt", "Ostviertel", "Weende", "Geismar", "Grone", "Nikolausberg"],
      nearby: ["Rosdorf", "Bovenden", "Gleichen", "Northeim", "Duderstadt", "Hann. Münden"],
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
      slug: "hildesheim",
      name: "Hildesheim",
      metaTitle: "Goldankauf Hildesheim – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Hildesheim: Goldschmuck, Münzen, Barren und Zahngold versichert einsenden – sorgfältig geprüft und nach Börsenkurs bezahlt.",
      heroText:
        "Vom Moritzberg bis Ochtersum: Verkaufen Sie Ihr Gold aus Hildesheim per Post – geprüft nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Hildesheim – eine Stadt, die Schätze kennt.",
        paragraphs: [
          "Dom und Michaeliskirche gehören zum UNESCO-Welterbe, und am Dom blüht der tausendjährige Rosenstock. Berühmt ist Hildesheim auch für den Silberfund, einen römischen Schatz, der 1868 am Galgenberg entdeckt wurde.",
          "Nicht jeder Schatz liegt im Museum. Oft sind es Ringe, Ketten oder Münzen aus dem Familienbesitz. Wir bewerten sie nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden alles kostenlos und versichert ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Altstadt", "Moritzberg", "Oststadt", "Ochtersum", "Himmelsthür", "Drispenstedt"],
      nearby: ["Sarstedt", "Alfeld", "Bad Salzdetfurth", "Harsum", "Algermissen", "Diekholzen"],
      faqs: [
        {
          question: "Kaufen Sie auch Silber an?",
          answer:
            "Ja. Neben Gold kaufen wir auch Silber, Platin und Palladium an – etwa Silberbesteck, Silbermünzen oder Barren. Alles kann im selben Paket mitgeschickt werden.",
        },
        {
          question: "Kaufen Sie auch geerbten Schmuck?",
          answer:
            "Ja. Viele unserer Kunden verkaufen Erbstücke. Sie schicken alles gemeinsam ein, und wir bewerten jedes Stück einzeln nach seinem Goldgehalt.",
        },
      ],
    },
    {
      slug: "salzgitter",
      name: "Salzgitter",
      metaTitle: "Goldankauf Salzgitter – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Salzgitter: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Tageskurs.",
      heroText:
        "Ob aus Lebenstedt, Salzgitter-Bad oder Thiede: Senden Sie Ihr Gold kostenlos ein und erhalten Sie ein Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Salzgitter – Metall bewerten wir mit Sachverstand.",
        paragraphs: [
          "Salzgitter ist eine Stadt aus Stahl: Das Hüttenwerk prägt die Stadt seit den 1930er-Jahren. Dabei besteht Salzgitter aus über dreißig Ortsteilen, von Lebenstedt bis zum alten Kurort Salzgitter-Bad mit seiner Sole.",
          "Wo man sich mit Metall auskennt, weiß man: Entscheidend ist, was drinsteckt. Deshalb bestimmen wir bei jedem Stück den Feingehalt und rechnen den reinen Goldanteil zum Börsenkurs ab.",
          "Sie senden alles im kostenlosen, versicherten Paket ein. Lehnen Sie das Angebot ab, kommt alles kostenlos zurück.",
        ],
      },
      districts: ["Lebenstedt", "Salzgitter-Bad", "Thiede", "Gebhardshagen", "Salder", "Lichtenberg"],
      nearby: ["Wolfenbüttel", "Braunschweig", "Goslar", "Baddeckenstedt", "Lengede", "Liebenburg"],
      faqs: [
        {
          question: "Welche Legierungen kaufen Sie an?",
          answer:
            "Alle gängigen Legierungen von 333er bis 999er Gold. Wir bestimmen den Feingehalt jedes Stücks und rechnen entsprechend ab.",
        },
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online bei uns an. Wir schicken es Ihnen kostenlos zu, und Sie geben die versicherte Sendung bei der Post ab.",
        },
      ],
    },
    {
      slug: "wilhelmshaven",
      name: "Wilhelmshaven",
      metaTitle: "Goldankauf Wilhelmshaven – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Wilhelmshaven: Goldschmuck, Münzen und Zahngold kostenlos per Post einsenden – nach Gewicht und Feingehalt geprüft, nach Börsenkurs bezahlt.",
      heroText:
        "Vom Südstrand bis Voslapp: Verkaufen Sie Ihr Gold aus Wilhelmshaven bequem per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Wilhelmshaven – mit klarem Kurs.",
        paragraphs: [
          "Wilhelmshaven ist die Stadt am Jadebusen: Marinestützpunkt, Deutsches Marinemuseum und der Tiefwasserhafen JadeWeserPort prägen das Bild. Am Südstrand kann man sogar mitten in der Stadt baden.",
          "Wer zur See fährt, braucht einen klaren Kurs. Unserer heißt Börsenkurs: Ihr Angebot ergibt sich aus Gewicht, Feingehalt und dem Goldpreis am Tag der Prüfung.",
          "Sie senden Ihre Stücke kostenlos und versichert ein und erhalten ein schriftliches Angebot, das Sie in Ruhe prüfen können.",
        ],
      },
      districts: ["Innenstadt", "Heppens", "Bant", "Fedderwardergroden", "Altengroden", "Voslapp"],
      nearby: ["Schortens", "Jever", "Sande", "Varel", "Wangerland", "Friedeburg"],
      faqs: [
        {
          question: "Kaufen Sie auch Goldmünzen und Barren?",
          answer:
            "Ja. Barren und Münzen wie Krügerrand, Maple Leaf oder Philharmoniker bewerten wir nach Feingewicht zum aktuellen Kurs.",
        },
        {
          question: "Wann bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, überweisen wir den Betrag auf Ihr Konto. Vorher wird nichts verkauft.",
        },
      ],
    },
    {
      slug: "delmenhorst",
      name: "Delmenhorst",
      metaTitle: "Goldankauf Delmenhorst – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Delmenhorst: Altgold, Goldschmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert und nach Tageskurs bewertet.",
      heroText:
        "Ob aus Deichhorst, Düsternort oder der Stadtmitte: Senden Sie Ihr Gold aus Delmenhorst versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Delmenhorst – fair gewogen statt grob geschätzt.",
        paragraphs: [
          "Delmenhorst war einst eine bedeutende Industriestadt: Die Nordwolle war eine der größten Wollwäschereien Europas, und auch Linoleum aus Delmenhorst war weltweit gefragt. Heute ist das Gelände ein Museum, und der Wasserturm ist das Wahrzeichen der Stadt.",
          "Bei uns zählt beim Goldverkauf jedes Gramm: Wir wiegen jedes Stück einzeln, bestimmen den Feingehalt und rechnen zum Börsenkurs ab.",
          "Sie senden alles im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des Angebots.",
        ],
      },
      districts: ["Stadtmitte", "Deichhorst", "Düsternort", "Bungerhof", "Hasport", "Adelheide"],
      nearby: ["Bremen", "Ganderkesee", "Stuhr", "Hude", "Harpstedt", "Lemwerder"],
      faqs: [
        {
          question: "Wie genau wird mein Gold gewogen?",
          answer:
            "Wir wiegen jedes Stück einzeln auf einer geeichten Waage. Das Gewicht steht für jede Position in Ihrem Angebot.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Versand, Versicherung und Prüfung sind kostenlos. Der Betrag im Angebot ist der Betrag, den Sie erhalten.",
        },
      ],
    },
    {
      slug: "luneburg",
      name: "Lüneburg",
      metaTitle: "Goldankauf Lüneburg – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Lüneburg: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – bewertet nach aktuellem Goldkurs.",
      heroText:
        "Von der Altstadt bis Kaltenmoor: Verkaufen Sie Ihr Gold aus Lüneburg per Post – nachvollziehbar geprüft und fair nach Tageskurs bezahlt.",
      intro: {
        title: "Gold verkaufen in Lüneburg – der Stadt des weißen Goldes.",
        paragraphs: [
          "Lüneburg wurde mit Salz reich, dem „weißen Gold“ des Mittelalters. Die Hansestadt verkaufte es bis an die Ostsee, und die prächtigen Giebelhäuser Am Sande und am Stintmarkt zeugen noch heute vom Wohlstand.",
          "Beim gelben Gold sind wir Ihr Ansprechpartner: Wir bewerten Ringe, Ketten, Münzen und Zahngold nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden Ihre Stücke im kostenlosen, versicherten Paket ein und entscheiden nach Erhalt des schriftlichen Angebots.",
        ],
      },
      districts: ["Altstadt", "Kaltenmoor", "Rotes Feld", "Oedeme", "Ebensberg", "Kreideberg"],
      nearby: ["Adendorf", "Reppenstedt", "Bardowick", "Bad Bevensen", "Winsen (Luhe)", "Scharnebeck"],
      faqs: [
        {
          question: "Ich weiß nicht, ob mein Schmuck echt ist. Was nun?",
          answer:
            "Senden Sie ihn trotzdem ein. Wir prüfen jedes Stück. Ist etwas nicht aus Edelmetall, sagen wir es Ihnen und schicken es kostenlos zurück.",
        },
        {
          question: "Brauche ich Belege oder Zertifikate?",
          answer:
            "Nein. Wir prüfen Ihre Stücke selbst. Belege sind nicht nötig, um Gold bei uns zu verkaufen.",
        },
      ],
    },
    {
      slug: "celle",
      name: "Celle",
      metaTitle: "Goldankauf Celle – Altgold & Goldschmuck verkaufen",
      metaDescription:
        "Goldankauf für Celle: Altgold, Ketten, Ringe, Münzen und Zahngold versichert einsenden und nach aktuellem Goldkurs verkaufen.",
      heroText:
        "Ob aus der Altstadt, Altencelle oder Westercelle: Schicken Sie Ihr Gold aus Celle kostenlos ein und erhalten Sie ein Angebot nach Tageskurs.",
      intro: {
        title: "Goldankauf für Celle – mit Respekt vor alten Schätzen.",
        paragraphs: [
          "Rund 400 Fachwerkhäuser machen die Altstadt von Celle zu einer der schönsten in Deutschland. Das Schloss war Residenz der Herzöge von Braunschweig-Lüneburg, und das Landgestüt ist weit über die Stadt hinaus bekannt.",
          "In einer Stadt, die ihr Erbe so gut pflegt, liegen oft auch in den Familien alte Schmuckstücke. Wenn Sie sie verkaufen möchten, bewerten wir sie nach Gewicht, Feingehalt und Börsenkurs.",
          "Das kostenlose, versicherte Versandpaket kommt zu Ihnen nach Hause. Sie entscheiden nach Erhalt des Angebots.",
        ],
      },
      districts: ["Altstadt", "Altencelle", "Westercelle", "Neuenhäusen", "Wietzenbruch", "Blumlage"],
      nearby: ["Wietze", "Winsen (Aller)", "Hambühren", "Lachendorf", "Eschede", "Bergen"],
      faqs: [
        {
          question: "Kaufen Sie auch alte Uhren mit Goldgehäuse?",
          answer:
            "Ja, Uhren mit Gehäuse oder Armband aus Gold bewerten wir nach ihrem Goldanteil. Das Uhrwerk selbst fließt nicht in den Preis ein.",
        },
        {
          question: "Muss ich das Angebot annehmen?",
          answer:
            "Nein. Sie entscheiden frei. Lehnen Sie ab, schicken wir Ihre Stücke kostenlos und versichert zurück.",
        },
      ],
    },
    {
      slug: "hameln",
      name: "Hameln",
      metaTitle: "Goldankauf Hameln – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Gold verkaufen in Hameln: Goldschmuck, Münzen, Barren und Zahngold kostenlos per Post einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Aus Hameln und dem Weserbergland: Verkaufen Sie Ihr Gold bequem per Post – geprüft nach Gewicht und Feingehalt, bezahlt nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Hameln – ohne leere Versprechen.",
        paragraphs: [
          "Hameln kennt die ganze Welt durch den Rattenfänger, der 1284 die Kinder aus der Stadt gelockt haben soll – weil man ihm seinen Lohn nicht zahlte. Die Altstadt an der Weser ist ein Glanzstück der Weserrenaissance.",
          "Bei uns wird gezahlt, was vereinbart ist: Sie erhalten ein schriftliches Angebot nach Gewicht, Feingehalt und Börsenkurs, und nach Ihrer Zusage überweisen wir genau diesen Betrag.",
          "Sie senden Ihre Stücke kostenlos und versichert ein. Gefällt Ihnen das Angebot nicht, bekommen Sie alles kostenlos zurück.",
        ],
      },
      districts: ["Altstadt", "Afferde", "Klein Berkel", "Rohrsen", "Tündern", "Hastenbeck"],
      nearby: ["Bad Pyrmont", "Aerzen", "Emmerthal", "Coppenbrügge", "Hessisch Oldendorf", "Bad Münder"],
      faqs: [
        {
          question: "Ändert sich der Betrag nach meiner Zusage noch?",
          answer:
            "Nein. Der Betrag im Angebot ist verbindlich. Nach Ihrer Zusage überweisen wir genau diese Summe.",
        },
        {
          question: "Lohnt sich der Versand auch für wenige Stücke?",
          answer:
            "Ja. Versand und Versicherung sind kostenlos, egal ob Sie einen einzelnen Ring oder eine ganze Schmuckschatulle einsenden.",
        },
      ],
    },
    {
      slug: "stade",
      name: "Stade",
      metaTitle: "Goldankauf Stade – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Stade: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – nach aktuellem Tageskurs bewertet.",
      heroText:
        "Ob aus der Altstadt, Campe oder Bützfleth: Senden Sie Ihr Gold aus Stade kostenlos ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Stade – reif für einen fairen Preis.",
        paragraphs: [
          "Stade ist eine der ältesten Hansestädte. Am alten Hansehafen stehen Fachwerkhäuser und der Schwedenspeicher, und direkt vor der Stadt beginnt das Alte Land, das größte Obstanbaugebiet Nordeuropas.",
          "Wenn alter Schmuck nur noch in der Schublade liegt, ist vielleicht die Zeit reif für einen Verkauf. Wir bewerten jedes Stück nach Gewicht, Feingehalt und Börsenkurs.",
          "Sie senden alles im kostenlosen, versicherten Paket ein. Erst wenn Sie dem Angebot zustimmen, überweisen wir den Betrag.",
        ],
      },
      districts: ["Altstadt", "Campe", "Hahle", "Bützfleth", "Haddorf", "Riensförde"],
      nearby: ["Buxtehude", "Jork", "Himmelpforten", "Drochtersen", "Harsefeld", "Fredenbeck"],
      faqs: [
        {
          question: "Muss ich meinen Schmuck vorher reinigen oder sortieren?",
          answer:
            "Nein. Sie können alles so einsenden, wie es ist. Wir sortieren und prüfen jedes Stück selbst.",
        },
        {
          question: "Wo gebe ich das Paket ab?",
          answer:
            "In jeder Postfiliale oder Packstation. Die Sendung ist kostenlos und versichert, Sie zahlen kein Porto.",
        },
      ],
    },
    {
      slug: "cuxhaven",
      name: "Cuxhaven",
      metaTitle: "Goldankauf Cuxhaven – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Cuxhaven: Goldschmuck, Münzen und Zahngold versichert per Post einsenden – fair geprüft und nach Börsenkurs bezahlt.",
      heroText:
        "Von Döse bis Sahlenburg: Verkaufen Sie Ihr Gold aus Cuxhaven per Post – mit transparentem Angebot nach Tageskurs.",
      intro: {
        title: "Gold verkaufen in Cuxhaven – mit der Kugelbake als Wegweiser.",
        paragraphs: [
          "Die Kugelbake markiert die Stelle, an der die Elbe in die Nordsee übergeht. Cuxhaven ist Nordseeheilbad, und an der Alten Liebe schauen Besucher den großen Schiffen auf dem Weg nach Hamburg zu.",
          "Für den Goldverkauf müssen Sie nicht in die Großstadt. Unser kostenloses, versichertes Versandpaket kommt zu Ihnen, ob nach Duhnen oder Altenwalde.",
          "Wir wiegen jedes Stück, bestimmen den Feingehalt und schicken Ihnen ein schriftliches Angebot zum aktuellen Börsenkurs.",
        ],
      },
      districts: ["Döse", "Duhnen", "Sahlenburg", "Altenwalde", "Groden", "Lüdingworth"],
      nearby: ["Otterndorf", "Wurster Nordseeküste", "Geestland", "Hemmoor", "Cadenberge", "Bremerhaven"],
      faqs: [
        {
          question: "Woran erkenne ich, wie viel Gold in einem Stück steckt?",
          answer:
            "Oft verrät es ein Stempel wie 333, 585 oder 750. Fehlt er, ist das kein Problem: Wir bestimmen den Feingehalt bei der Prüfung selbst.",
        },
        {
          question: "Wie schnell erhalte ich ein Angebot?",
          answer:
            "Nach Eingang Ihrer Sendung prüfen wir die Stücke zeitnah und senden Ihnen das Angebot zu.",
        },
      ],
    },
  ],
};

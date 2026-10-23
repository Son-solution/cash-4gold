import type { State } from "@/types/city";

// Business is online/mail-in only: texts never suggest a local shop or office in the city.
// Bremen is listed as the two cities plus Bremen's Stadtteile, each with its own page.
export const BREMEN: State = {
  id: "bremen",
  name: "Bremen",
  cities: [
    {
      slug: "bremen",
      name: "Bremen",
      metaTitle: "Goldankauf Bremen – Gold verkaufen zum Tageskurs",
      metaDescription:
        "Vom Schnoor bis zur Überseestadt: Altgold, Schmuck, Münzen und Barren aus Bremen kostenlos und versichert einsenden – bewertet nach aktuellem Börsenkurs.",
      heroText:
        "Vom Viertel bis Oberneuland: Verkaufen Sie Altgold, Schmuck, Münzen und Zahngold aus Bremen bequem per Post – bewertet nach Gewicht, Feingehalt und Tageskurs.",
      intro: {
        title: "Gold verkaufen in Bremen – hanseatisch ehrlich gerechnet.",
        paragraphs: [
          "Bremer Kaufleute haben über Jahrhunderte mit Handschlag und klaren Zahlen gehandelt. So halten wir es auch beim Goldankauf: Ihr Preis ergibt sich aus Gewicht, Feingehalt und dem Börsenkurs – ohne Verhandeln, ohne versteckte Abzüge.",
          "Sie müssen dafür nicht am Roland vorbei in die Innenstadt. Sie fordern unser kostenloses Versandpaket an, legen Schmuck, Münzen, Barren oder Zahngold hinein und geben die versicherte Sendung bei der Post ab.",
          "Nach der Prüfung erhalten Sie ein schriftliches Angebot mit allen Einzelwerten. Erst nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Altstadt", "Schnoor", "Ostertor/Steintor", "Überseestadt", "Horn-Lehe", "Oberneuland"],
      nearby: ["Delmenhorst", "Achim", "Stuhr", "Lilienthal", "Weyhe", "Oyten"],
      faqs: [
        {
          question: "Gibt es eine Filiale in Bremen?",
          answer:
            "Nein. Cash 4 Gold kauft ausschließlich online und per Post an und hat kein Ladengeschäft in Bremen. Sie senden Ihre Stücke mit unserem kostenlosen, versicherten Versandpaket ein.",
        },
        {
          question: "Wie wird der Preis für mein Gold berechnet?",
          answer:
            "Wir bestimmen Gewicht und Feingehalt jedes Stücks und berechnen den reinen Goldanteil zum aktuellen Börsenkurs. Alle Werte stehen einzeln im Angebot.",
        },
      ],
    },
    {
      slug: "bremerhaven",
      name: "Bremerhaven",
      metaTitle: "Goldankauf Bremerhaven – Altgold & Schmuck verkaufen",
      metaDescription:
        "Goldankauf für Bremerhaven, Lehe und Geestemünde: Altgold, Goldschmuck und Zahngold per Post verkaufen – versichert, kostenlos, fair nach Goldkurs.",
      heroText:
        "Ob aus Lehe, Geestemünde oder Leherheide: Senden Sie Ihr Gold aus Bremerhaven versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für die Seestadt – Ihr Gold geht auf sichere Reise.",
        paragraphs: [
          "Von Bremerhaven aus sind einst Millionen Auswanderer in die Neue Welt aufgebrochen. Ihr Gold hat eine deutlich kürzere Reise vor sich: im kostenlosen, versicherten Versandpaket direkt zu uns.",
          "Ob Seemannsring, Familienschmuck oder Goldmünzen – wir prüfen jedes Stück einzeln nach Gewicht und Feingehalt und bewerten es zum Börsenkurs am Tag der Prüfung.",
          "Sie erhalten ein schriftliches Angebot. Lehnen Sie ab, schicken wir Ihre Stücke kostenlos zurück.",
        ],
      },
      districts: ["Mitte", "Lehe", "Geestemünde", "Leherheide", "Wulsdorf", "Surheide"],
      nearby: ["Geestland", "Loxstedt", "Schiffdorf", "Beverstedt", "Nordenham", "Cuxhaven"],
      faqs: [
        {
          question: "Kaufen Sie auch Gold aus dem Umland von Bremerhaven an?",
          answer:
            "Ja. Da wir ausschließlich per Versand ankaufen, ist es egal, ob Sie in Bremerhaven, Loxstedt oder Cuxhaven wohnen – der Ablauf ist überall gleich.",
        },
        {
          question: "Was passiert, wenn mir das Angebot nicht gefällt?",
          answer:
            "Dann schicken wir Ihre Stücke kostenlos und versichert an Sie zurück. Für Sie entstehen keine Kosten.",
        },
      ],
    },
    {
      slug: "vegesack",
      name: "Vegesack",
      metaTitle: "Goldankauf Vegesack – Gold verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Bremen-Vegesack: Schmuck, Münzen, Barren und Zahngold kostenlos einsenden, nach Börsenkurs bewerten lassen und sicher verkaufen.",
      heroText:
        "Von Grohn bis Aumund: Verkaufen Sie Ihr Gold aus Vegesack per Post – mit kostenlosem Versandpaket und transparenter Bewertung.",
      intro: {
        title: "Gold verkaufen in Vegesack – ohne Fahrt in die Bremer Innenstadt.",
        paragraphs: [
          "Vegesack mit seinem alten Hafen und der Weserpromenade liegt ganz im Norden Bremens. Bis in die Innenstadt ist es ein gutes Stück – für den Goldverkauf brauchen Sie den Weg nicht.",
          "Sie fordern das kostenlose Versandpaket an, packen Ihre Stücke ein und geben die Sendung bei der Post in Vegesack ab. Bis 2.500 € ist sie versichert.",
          "Wir bewerten Ringe, Ketten, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und aktuellem Börsenkurs und schicken Ihnen ein schriftliches Angebot.",
        ],
      },
      districts: ["Vegesack", "Grohn", "Schönebeck", "Aumund-Hammersbeck", "Fähr-Lobbendorf"],
      nearby: ["Blumenthal", "Burglesum", "Schwanewede", "Ritterhude", "Lemwerder", "Berne"],
      faqs: [
        {
          question: "Muss ich für den Verkauf in die Innenstadt fahren?",
          answer:
            "Nein. Der gesamte Ankauf läuft per Versand. Sie geben Ihr Paket einfach bei einer Postfiliale oder Paketannahmestelle in Vegesack ab.",
        },
        {
          question: "Gibt es eine Mindestmenge?",
          answer:
            "Nein. Auch ein einzelner Ring oder eine einzelne Münze wird geprüft und bewertet.",
        },
      ],
    },
    {
      slug: "blumenthal",
      name: "Blumenthal",
      metaTitle: "Goldankauf Blumenthal – Altgold verkaufen",
      metaDescription:
        "Goldankauf für Bremen-Blumenthal: Altgold, Schmuck, Münzen und Zahngold per Versand verkaufen – kostenloses Versandpaket, Bewertung nach Tageskurs.",
      heroText:
        "Aus Rönnebeck, Farge oder Lüssum-Bockhorn: Schicken Sie Ihr Gold aus Blumenthal versichert ein und erhalten Sie ein Angebot zum Börsenkurs.",
      intro: {
        title: "Goldankauf für Blumenthal – am nördlichsten Zipfel Bremens.",
        paragraphs: [
          "Blumenthal war lange von der Bremer Woll-Kämmerei geprägt, heute wohnen hier viele Familien mit langer Geschichte im Stadtteil. Oft liegt in den Schubladen Schmuck, den niemand mehr trägt.",
          "Bei Cash 4 Gold verkaufen Sie ihn ohne Fahrt in die Stadt. Sie bekommen das Versandpaket kostenlos zugeschickt und geben es bei der nächsten Postfiliale ab.",
          "Wir prüfen Gewicht und Feingehalt jedes Stücks und rechnen zum aktuellen Börsenkurs ab. Das Angebot erhalten Sie schriftlich.",
        ],
      },
      districts: ["Blumenthal", "Rönnebeck", "Lüssum-Bockhorn", "Farge", "Rekum"],
      nearby: ["Vegesack", "Schwanewede", "Lemwerder", "Berne", "Brake", "Ritterhude"],
      faqs: [
        {
          question: "Wie bekomme ich das Versandpaket?",
          answer:
            "Sie fordern es online an, und wir schicken es Ihnen kostenlos zu. Danach legen Sie Ihre Stücke hinein und geben das Paket bei der Post ab.",
        },
        {
          question: "Nehmen Sie auch kaputten Schmuck an?",
          answer:
            "Ja. Für den Goldwert ist der Zustand egal. Auch gerissene Ketten, einzelne Ohrringe und Bruchgold werden bewertet.",
        },
      ],
    },
    {
      slug: "hemelingen",
      name: "Hemelingen",
      metaTitle: "Goldankauf Hemelingen – Gold & Münzen verkaufen",
      metaDescription:
        "Gold verkaufen in Bremen-Hemelingen: Altgold, Schmuck, Goldmünzen und Zahngold kostenlos und versichert einsenden – fair nach Börsenkurs bewertet.",
      heroText:
        "Von Mahndorf bis Sebaldsbrück: Verkaufen Sie Ihr Gold aus Hemelingen per Post – kostenlos, versichert und nach Tageskurs bewertet.",
      intro: {
        title: "Gold verkaufen in Hemelingen – solide gerechnet wie im Bremer Osten üblich.",
        paragraphs: [
          "Hemelingen ist ein Stadtteil mit Industriegeschichte – Fabriken, Werke, viele Arbeitsplätze. Hier wird nicht lange geredet, sondern gerechnet. Genau das tun wir auch mit Ihrem Gold.",
          "Jedes Stück wird gewogen und auf Feingehalt geprüft, dann rechnen wir zum Börsenkurs am Tag der Bewertung ab. Im Angebot sehen Sie jede Position einzeln.",
          "Das Versandpaket ist kostenlos. Nach Ihrer Zusage überweisen wir den Betrag direkt auf Ihr Konto.",
        ],
      },
      districts: ["Hemelingen", "Arbergen", "Mahndorf", "Sebaldsbrück", "Hastedt"],
      nearby: ["Achim", "Oyten", "Osterholz", "Obervieland", "Östliche Vorstadt", "Weyhe"],
      faqs: [
        {
          question: "Kaufen Sie Krügerrand und andere Anlagemünzen an?",
          answer:
            "Ja. Gängige Anlagemünzen wie Krügerrand, Maple Leaf oder Philharmoniker kaufen wir zum aktuellen Goldkurs an.",
        },
        {
          question: "Muss ich um den Preis verhandeln?",
          answer:
            "Nein. Der Preis folgt aus Gewicht, Feingehalt und Börsenkurs. Jede Position steht offen im Angebot.",
        },
      ],
    },
    {
      slug: "huchting",
      name: "Huchting",
      metaTitle: "Goldankauf Huchting – Gold verkaufen per Versand",
      metaDescription:
        "Goldankauf für Bremen-Huchting: Schmuck, Münzen, Barren und Zahngold per Post verkaufen – kostenlos, versichert und transparent zum Tageskurs.",
      heroText:
        "Aus Kirchhuchting, Sodenmatt oder Grolland: Senden Sie Ihr Gold aus Huchting kostenlos ein und erhalten Sie ein faires Angebot.",
      intro: {
        title: "Goldankauf für Huchting – vom Park links der Weser direkt zu uns.",
        paragraphs: [
          "Huchting liegt im Südwesten Bremens, direkt an der Grenze zu Delmenhorst und mit dem Park links der Weser vor der Tür. Viele Huchtinger erledigen ihre Wege lieber im Stadtteil als in der City.",
          "Den Goldverkauf können Sie komplett von hier aus erledigen: Paket anfordern, Stücke einpacken, bei der Post abgeben. Bis 2.500 € ist die Sendung versichert.",
          "Wir bewerten Schmuck, Münzen, Barren und Zahngold nach Gewicht, Feingehalt und Börsenkurs und schicken Ihnen ein schriftliches Angebot.",
        ],
      },
      districts: ["Mittelshuchting", "Kirchhuchting", "Sodenmatt", "Grolland"],
      nearby: ["Delmenhorst", "Stuhr", "Woltmershausen", "Obervieland", "Ganderkesee", "Bremen-Neustadt"],
      faqs: [
        {
          question: "Kaufen Sie auch Zahngold an?",
          answer:
            "Ja. Zahngold enthält oft einen hohen Goldanteil. Sie können es auch mit Zahnresten einsenden – wir bewerten den Edelmetallanteil.",
        },
        {
          question: "Gibt es eine Annahmestelle in Huchting?",
          answer:
            "Nein. Wir haben kein Geschäft vor Ort – der Ankauf läuft ausschließlich per Versand.",
        },
      ],
    },
    {
      slug: "obervieland",
      name: "Obervieland",
      metaTitle: "Goldankauf Obervieland – Altgold & Schmuck verkaufen",
      metaDescription:
        "Gold verkaufen in Obervieland, Kattenturm und Habenhausen: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden – bewertet nach Börsenkurs.",
      heroText:
        "Von Kattenturm bis Habenhausen: Verkaufen Sie Ihr Gold aus Obervieland per Post – mit kostenlosem Versandpaket und klarer Bewertung.",
      intro: {
        title: "Gold verkaufen in Obervieland – zwischen Werdersee und Arsten.",
        paragraphs: [
          "Obervieland vereint Hochhäuser in Kattenturm, Einfamilienhäuser in Arsten und Habenhausen und den Werdersee als Naherholungsgebiet. So unterschiedlich die Wohnorte, so unterschiedlich sind auch die Schätze in den Schubladen.",
          "Ob alte Eheringe, eine Münzsammlung oder Zahngold – wir prüfen jedes Stück einzeln nach Gewicht und Feingehalt und bewerten es zum aktuellen Börsenkurs.",
          "Versand und eventueller Rückversand sind kostenlos. Sie entscheiden in Ruhe, ob Sie verkaufen.",
        ],
      },
      districts: ["Kattenturm", "Kattenesch", "Arsten", "Habenhausen"],
      nearby: ["Bremen-Neustadt", "Huchting", "Hemelingen", "Woltmershausen", "Stuhr", "Weyhe"],
      faqs: [
        {
          question: "Woran erkenne ich, ob mein Schmuck aus Gold ist?",
          answer:
            "Oft hilft ein Stempel wie 333, 585 oder 750. Fehlt er, prüfen wir den Feingehalt für Sie – kostenlos und unverbindlich.",
        },
        {
          question: "Kostet mich der Verkauf etwas?",
          answer:
            "Nein. Versandpaket, versicherter Versand und – falls Sie ablehnen – der Rückversand sind kostenlos.",
        },
      ],
    },
    {
      slug: "osterholz",
      name: "Osterholz",
      metaTitle: "Goldankauf Bremen-Osterholz – Gold verkaufen",
      metaDescription:
        "Goldankauf für Bremen-Osterholz, Tenever und Blockdiek: Altgold, Schmuck, Münzen und Zahngold per Versand verkaufen – zum Tageskurs.",
      heroText:
        "Aus Tenever, Blockdiek oder dem Ellener Feld: Schicken Sie Ihr Gold aus Osterholz versichert ein und erhalten Sie ein transparentes Angebot.",
      intro: {
        title: "Goldankauf für Osterholz – im Bremer Osten zu Hause.",
        paragraphs: [
          "Der Stadtteil Osterholz im Bremer Osten reicht von den Hochhäusern in Tenever bis zu den ruhigen Straßen in Ellenerbrok-Schevemoor. Hier wohnen Menschen aus aller Welt – und mit ihnen Goldschmuck in allen Karatstufen.",
          "Wir bewerten jedes Stück nach seinem tatsächlichen Feingehalt, auch 21- oder 22-karätigen Schmuck. Grundlage ist immer der Börsenkurs am Tag der Prüfung.",
          "Sie schicken alles im kostenlosen, versicherten Versandpaket ein und erhalten ein schriftliches Angebot mit allen Einzelwerten.",
        ],
      },
      districts: ["Tenever", "Ellener Feld", "Blockdiek", "Ellenerbrok-Schevemoor", "Osterholz"],
      nearby: ["Hemelingen", "Vahr", "Oberneuland", "Oyten", "Achim", "Lilienthal"],
      faqs: [
        {
          question: "Kaufen Sie auch 21- oder 22-karätigen Goldschmuck an?",
          answer:
            "Ja. Hochkarätiger Schmuck, etwa aus der Türkei, dem Nahen Osten oder Indien, wird bei uns nach seinem tatsächlichen Feingehalt bewertet.",
        },
        {
          question: "Muss ich mich sofort entscheiden?",
          answer:
            "Nein. Sie erhalten das Angebot schriftlich und können es in Ruhe prüfen, bevor Sie zusagen oder ablehnen.",
        },
      ],
    },
    {
      slug: "vahr",
      name: "Vahr",
      metaTitle: "Goldankauf Vahr – Gold verkaufen zum Börsenkurs",
      metaDescription:
        "Gold verkaufen in der Bremer Vahr: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert per Post verkaufen – nach Tageskurs bewertet.",
      heroText:
        "Von der Gartenstadt Vahr bis zur Neuen Vahr: Verkaufen Sie Ihr Gold per Post – bewertet nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
      intro: {
        title: "Gold verkaufen in der Vahr – klar strukturiert wie der Stadtteil.",
        paragraphs: [
          "Die Neue Vahr war in den 1950er- und 60er-Jahren eines der größten Wohnbauprojekte Deutschlands – geplant, geordnet, durchdacht. Genauso klar läuft bei uns der Goldverkauf ab.",
          "Schritt eins: kostenloses Versandpaket anfordern. Schritt zwei: Stücke einpacken und bei der Post abgeben. Schritt drei: schriftliches Angebot erhalten, das Sie annehmen oder ablehnen.",
          "Bewertet wird nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung. Nach Ihrer Zusage überweisen wir den Betrag.",
        ],
      },
      districts: ["Gartenstadt Vahr", "Neue Vahr Nord", "Neue Vahr Südwest", "Neue Vahr Südost"],
      nearby: ["Schwachhausen", "Horn-Lehe", "Osterholz", "Hemelingen", "Östliche Vorstadt", "Oberneuland"],
      faqs: [
        {
          question: "Brauche ich einen Termin?",
          answer:
            "Nein. Sie fordern das Versandpaket online an und schicken Ihre Stücke ein, wann es Ihnen passt.",
        },
        {
          question: "Wie schnell bekomme ich mein Geld?",
          answer:
            "Sobald Sie unser Angebot annehmen, veranlassen wir die Überweisung. Die Gutschrift erfolgt in der Regel innerhalb weniger Bankarbeitstage.",
        },
      ],
    },
    {
      slug: "borgfeld",
      name: "Borgfeld",
      metaTitle: "Goldankauf Borgfeld – Gold diskret verkaufen",
      metaDescription:
        "Goldankauf für Bremen-Borgfeld: Schmuck, Münzen, Barren und Zahngold diskret per Versand verkaufen – kostenlos, versichert, zum Tageskurs.",
      heroText:
        "Aus Borgfeld an der Wümme: Senden Sie Ihr Gold versichert ein und erhalten Sie ein Angebot nach aktuellem Goldkurs – ganz ohne Fahrt in die Stadt.",
      intro: {
        title: "Gold verkaufen in Borgfeld – ländlich wohnen, bequem verkaufen.",
        paragraphs: [
          "Borgfeld an der Wümme ist Bremens grünster Stadtteil – mit Wiesen, Deichen und viel Ruhe. Für den Goldverkauf müssen Sie diese Ruhe nicht verlassen: Das kostenlose Versandpaket kommt zu Ihnen.",
          "Wir kaufen Goldschmuck, Münzen und Barren ebenso wie Silber, Platin und Palladium. Jedes Stück wird gewogen, geprüft und zum aktuellen Kurs bewertet.",
          "Bei Werten über 2.500 € organisieren wir einen kostenlosen Werttransport. Das Angebot erhalten Sie schriftlich.",
        ],
      },
      districts: ["Borgfeld"],
      nearby: ["Lilienthal", "Horn-Lehe", "Oberneuland", "Fischerhude", "Grasberg", "Worpswede"],
      faqs: [
        {
          question: "Ich möchte eine größere Menge Gold verkaufen. Ist das sicher?",
          answer:
            "Ja. Unser Versandpaket ist bis 2.500 € versichert. Für höhere Werte organisieren wir einen kostenlosen Werttransport.",
        },
        {
          question: "Kaufen Sie auch Silber und Platin an?",
          answer:
            "Ja. Neben Gold kaufen wir Silber, Platin und Palladium an – bewertet nach dem aktuellen Kurs des jeweiligen Metalls.",
        },
      ],
    },
    {
      slug: "gropelingen",
      name: "Gröpelingen",
      metaTitle: "Goldankauf Gröpelingen – Altgold verkaufen per Post",
      metaDescription:
        "Gold verkaufen in Bremen-Gröpelingen: Altgold, Schmuck, Münzen und Zahngold kostenlos einsenden und nach Börsenkurs transparent bewerten lassen.",
      heroText:
        "Von Oslebshausen bis Lindenhof: Verkaufen Sie Ihr Gold aus Gröpelingen per Post – kostenlos, versichert und fair nach Tageskurs bewertet.",
      intro: {
        title: "Goldankauf für Gröpelingen – ehrlich wie die Werftarbeit.",
        paragraphs: [
          "Gröpelingen war jahrzehntelang von der Werft AG Weser geprägt. Ehrliche Arbeit und klare Absprachen gehörten hier immer dazu – genau so gehen wir mit Ihrem Gold um.",
          "Ob Ketten, Armreifen, Ringe, Münzen oder Zahngold: Wir wiegen jedes Stück, bestimmen den Feingehalt und rechnen zum Börsenkurs am Tag der Prüfung ab. Auch hochkarätiger Schmuck wird nach seinem tatsächlichen Goldanteil bewertet.",
          "Sie schicken alles im kostenlosen Versandpaket ein und bekommen ein schriftliches Angebot.",
        ],
      },
      districts: ["Gröpelingen", "Lindenhof", "Ohlenhof", "Oslebshausen", "In den Wischen"],
      nearby: ["Walle", "Findorff", "Burglesum", "Vegesack", "Ritterhude", "Woltmershausen"],
      faqs: [
        {
          question: "Kann ich in Gröpelingen persönlich vorbeikommen?",
          answer:
            "Nein. Wir kaufen ausschließlich per Versand an und haben kein Ladengeschäft in Bremen.",
        },
        {
          question: "Gibt es versteckte Gebühren?",
          answer:
            "Nein. Der Betrag im Angebot ist der Betrag, den Sie erhalten. Versand und Prüfung sind kostenlos.",
        },
      ],
    },
    {
      slug: "bremen-neustadt",
      name: "Bremen-Neustadt",
      metaTitle: "Goldankauf Bremen-Neustadt – Gold verkaufen",
      metaDescription:
        "Goldankauf für die Bremer Neustadt: Altgold, Schmuck, Münzen und Zahngold per Versand verkaufen – kostenloses Versandpaket, Bewertung nach Tageskurs.",
      heroText:
        "Aus der Alten Neustadt, dem Buntentor oder Huckelriede: Schicken Sie Ihr Gold versichert ein und erhalten Sie ein Angebot nach aktuellem Börsenkurs.",
      intro: {
        title: "Gold verkaufen in der Bremer Neustadt – links der Weser, rechts gerechnet.",
        paragraphs: [
          "Die Neustadt liegt gegenüber der Altstadt auf der linken Weserseite – mit Hochschule, Altbauten am Buntentor und dem Werder als grüner Insel. Den Weg über die Brücke in die City können Sie sich beim Goldverkauf sparen.",
          "Sie fordern das kostenlose Versandpaket an und schicken Ihre Stücke versichert ein. Wir bewerten nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Im schriftlichen Angebot steht jede Position einzeln. Den aktuellen Goldpreis können Sie jederzeit auf unserer Website verfolgen.",
        ],
      },
      districts: ["Alte Neustadt", "Hohentor", "Buntentor", "Südervorstadt", "Huckelriede", "Neuenland"],
      nearby: ["Bremen-Mitte", "Obervieland", "Huchting", "Woltmershausen", "Östliche Vorstadt", "Stuhr"],
      faqs: [
        {
          question: "Wann ist der beste Zeitpunkt zum Verkaufen?",
          answer:
            "Bewertet wird zum Börsenkurs am Tag der Prüfung. Den aktuellen Goldpreis sehen Sie auf unserer Website – so entscheiden Sie selbst, wann Sie verkaufen.",
        },
        {
          question: "Wo gebe ich mein Paket ab?",
          answer:
            "Bei jeder Postfiliale oder Paketannahmestelle in der Neustadt. Wir haben kein Geschäft vor Ort – der Ankauf läuft ausschließlich per Versand.",
        },
      ],
    },
    {
      slug: "schwachhausen",
      name: "Schwachhausen",
      metaTitle: "Goldankauf Schwachhausen – Schmuck & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Bremen-Schwachhausen: hochwertigen Goldschmuck, Münzen, Barren und Zahngold per Versand verkaufen – transparent zum Tageskurs.",
      heroText:
        "Vom Bürgerpark bis Riensberg: Senden Sie Ihr Gold aus Schwachhausen versichert ein und erhalten Sie ein transparentes Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Schwachhausen – diskret aus dem Bremer Haus.",
        paragraphs: [
          "In Schwachhausen prägen klassische Bremer Häuser und Villen am Bürgerpark das Bild. Hier finden sich oft wertvolle Erbstücke: Goldschmuck aus mehreren Generationen, Münzsammlungen oder Barren.",
          "Bei uns verkaufen Sie diese ohne Ladenbesuch. Sie schicken Ihre Stücke versichert per Post ein, bei Werten über 2.500 € organisieren wir einen kostenlosen Werttransport.",
          "Wir bewerten nach Gewicht, Feingehalt und Börsenkurs und listen jede Position einzeln im Angebot auf.",
        ],
      },
      districts: ["Bürgerpark", "Barkhof", "Riensberg", "Gete", "Neu-Schwachhausen", "Schwachhausen"],
      nearby: ["Findorff", "Vahr", "Horn-Lehe", "Östliche Vorstadt", "Bremen-Mitte", "Oberneuland"],
      faqs: [
        {
          question: "Ich habe Schmuck geerbt und weiß nicht, ob er echt ist. Was tun?",
          answer:
            "Schicken Sie ihn einfach ein. Wir prüfen Material und Feingehalt. Stücke ohne Edelmetallanteil senden wir kostenlos zurück.",
        },
        {
          question: "Kaufen Sie auch Goldbarren an?",
          answer:
            "Ja. Wir kaufen Goldbarren aller gängigen Größen – bewertet nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
        },
      ],
    },
    {
      slug: "walle",
      name: "Walle",
      metaTitle: "Goldankauf Walle – Gold verkaufen per Versand",
      metaDescription:
        "Gold verkaufen in Bremen-Walle: Altgold, Schmuck, Münzen und Zahngold kostenlos und versichert einsenden – fair nach Börsenkurs bewertet.",
      heroText:
        "Aus Utbremen, dem Westend oder der Überseestadt: Verkaufen Sie Ihr Gold aus Walle per Post – mit kostenlosem Versandpaket und zügiger Überweisung.",
      intro: {
        title: "Gold verkaufen in Walle – vom alten Hafen in die Gegenwart.",
        paragraphs: [
          "Walle ist eng mit den Bremer Häfen verbunden. Wo früher Schiffe entladen wurden, entsteht heute die Überseestadt, während in Utbremen und am Steffensweg die alten Arbeiterhäuser stehen.",
          "Egal ob Sie in einem neuen Loft oder einem klassischen Bremer Haus wohnen: Ihr Gold verkaufen Sie bei uns per Post. Wir prüfen jedes Stück und bewerten es nach Gewicht, Feingehalt und aktuellem Börsenkurs.",
          "Das Versandpaket ist kostenlos. Lehnen Sie das Angebot ab, schicken wir alles kostenlos zurück.",
        ],
      },
      districts: ["Utbremen", "Steffensweg", "Westend", "Walle", "Osterfeuerberg", "Hohweg"],
      nearby: ["Findorff", "Gröpelingen", "Bremen-Mitte", "Überseestadt", "Woltmershausen", "Burglesum"],
      faqs: [
        {
          question: "Was passiert mit meinen Stücken bis zu meiner Entscheidung?",
          answer:
            "Sie werden sicher bei uns verwahrt. Lehnen Sie das Angebot ab, senden wir alles kostenlos zurück.",
        },
        {
          question: "Kann ich auch Schmuck ohne Stempel verkaufen?",
          answer:
            "Ja. Auch ungestempelte Stücke prüfen wir auf ihren Feingehalt. Das Ergebnis sehen Sie im Angebot, bevor Sie sich entscheiden.",
        },
      ],
    },
    {
      slug: "findorff",
      name: "Findorff",
      metaTitle: "Goldankauf Findorff – Altgold & Münzen verkaufen",
      metaDescription:
        "Goldankauf für Bremen-Findorff: Altgold, Schmuck, Münzen und Zahngold per Post verkaufen – kostenlos, versichert, nach Tageskurs bewertet.",
      heroText:
        "Von der Bürgerweide bis In den Hufen: Schicken Sie Ihr Gold aus Findorff versichert ein und erhalten Sie ein faires Angebot nach Börsenkurs.",
      intro: {
        title: "Goldankauf für Findorff – gleich hinterm Bahnhof, aber ohne Weg dorthin.",
        paragraphs: [
          "Findorff liegt direkt hinter dem Hauptbahnhof, zwischen Bürgerweide, Torfkanal und dem Findorffmarkt. Trotz der zentralen Lage sparen Sie sich beim Goldverkauf jeden Weg: Das Versandpaket kommt zu Ihnen.",
          "Wir kaufen Ringe, Ketten, Münzen, Barren und Zahngold und bewerten jedes Stück nach Gewicht, Feingehalt und dem Börsenkurs am Tag der Prüfung.",
          "Sie erhalten ein schriftliches Angebot. Erst nach Ihrer Zusage überweisen wir den Betrag auf Ihr Konto.",
        ],
      },
      districts: ["Regensburger Straße", "Findorff-Bürgerweide", "Weidedamm", "In den Hufen"],
      nearby: ["Schwachhausen", "Walle", "Bremen-Mitte", "Gröpelingen", "Burglesum", "Horn-Lehe"],
      faqs: [
        {
          question: "Wie wird der Feingehalt meines Goldes bestimmt?",
          answer:
            "Wir prüfen jedes Stück einzeln und bestimmen den tatsächlichen Goldanteil. Das Ergebnis wird im Angebot zusammen mit dem Gewicht aufgeführt.",
        },
        {
          question: "Wie ist mein Paket abgesichert?",
          answer:
            "Unser Versandpaket ist bis 2.500 € versichert. Bei höheren Werten organisieren wir einen kostenlosen Werttransport.",
        },
      ],
    },
  ],
};

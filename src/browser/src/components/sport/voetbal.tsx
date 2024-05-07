import React from "react";
import {SportMenu} from "./sportMenu";
import {HashLink as Link} from 'react-router-hash-link';

export function Voetbal() {

    return (
        <>
            <div className="hcContentContainer">
                <div className="hcBasicSideMargin hcMarginBottom1">
                    <h1>Voetbal</h1>
                </div>
                <div className="hcLayoutFacet-Result hcBasicSideMargin">
                    <div className="hcLayoutFacets">
                        <SportMenu/>
                    </div>
                    <div className="hcLayoutResults">
                        <h2>Voetbal</h2>


                        <div>
                            <div>
                                <div><Link to="#neut">De neutrale voetbalorganisatie</Link></div>
                                <div><Link to="#kath">De katholieke voetbalorganisatie</Link></div>
                                <div><Link to="#chris">De christelijke voetbalorganisatie</Link></div>
                                <div><Link to="#soc">De socialistische voetbalorganisatie</Link></div>


                                <h4 id="neut">De neutrale voetbalorganisatie</h4>

                                <p>Het is niet duidelijk wanneer voor het eerst voetbal in Nederland is gespeeld. In
                                    1862 zouden Engelse textielarbeiders in Enschede het spel beoefend
                                    hebben.<sup>1</sup> Ook wordt beweerd dat er rond 1870 een wedstrijd
                                    op de Maliebaan in Den Haag zou zijn geweest tussen Engelse textielarbeiders en
                                    leden van de Britse ambassade. Het lijkt erop dat voetbal voor het eerst
                                    gespeeld werd door cricketverenigingen als nevenactiviteit buiten het
                                    zomerseizoen. Cricket was in de jaren zeventig al een behoorlijke sport in ons
                                    land. Op 30 september 1883 werd de Nederlandsche Cricket Bond
                                    opgericht.<sup>2</sup> Deze organiseerde in de zomermaanden een
                                    competitie, waarna er in de overige maanden kon worden gevoetbald.</p>
                                <p>Op 1 september 1879 werd H.F.C. (thans Koninklijke HFC) opgericht in Haarlem door
                                    toedoen van W.J.H. Mulier (1865-1954), ook bekend als Pim Mulier. Deze vereniging
                                    geldt tegenwoordig als de oudste voetbalclub, maar de oprichtingsdatum is onzeker.
                                    Bovendien speelden de leden aanvankelijk rugby, totdat zij in 1883 overgingen op het
                                    minder ruwe voetbal, met name om bezorgde ouders tegemoet te
                                    komen.<sup>3</sup> Andere
                                    vroege voetbalclubs zijn de Utrechtsche Cricket en Voetbal Vereeniging Hercules
                                    (22 april 1882), de Leeuwarder Athletische Club Frisia (25 april 1883), de
                                    Dordrechtsche Cricket en Football Club (16 augustus 1883), de Haagsche Voetbal
                                    Vereeniging (september 1883), de Enschedesche Football Club Wilhelmina (31
                                    augustus 1885), Delftsche Cricket en Voetbalclub Concordia (15 oktober 1885),
                                    Groninger Cricket en Voetbalclub Be Quick (opgericht 10 april 1887), de
                                    Wageningsche Cricket en Football Club Go Ahead (4 december 1886). Deze clubs
                                    speelden enkel op afspraak wedstrijden tegen elkaar, waarbij zij ook
                                    overeenstemming moesten bereiken over de spelregels, want die waren niet
                                    uniform.<sup>4</sup></p>

                                <p>Voetbal was in de jaren tachtig van de negentiende eeuw nog z&#243; nieuw, dat
                                    de <em>Nederlandsche Sport</em> van 8 oktober 1887 een uitleg van Engelse termen gaf
                                    om de verslagen van de V.V. Amsterdam te kunnen begrijpen, zoals goal, goal keeper,
                                    goal post, kick, free kick en dergelijke. Twee weken later gaf het blad een tekening
                                    van een voetbalveld met de namen van de spelers: goal keeper, back, half back, right
                                    wing, centre en left wing.<sup>5</sup></p>
                                <p>Op 19 november 1887 nam de <em>Nederlandsche Sport</em> een brief op die Pim Mulier
                                    een dag eerder te Haarlem had opgesteld:</p>

                                <p>Ondergetekende, een einde wenschende te maken aan de voor het spel zoo hinderlijke,
                                    tallooze questies in zake Assocation-rules, heeft zich met de secretaris der
                                    Haagsche F.C., den &#160;heer H.B. Semmelink, Hugo de Grootstraat 6, &#8217;s-Hage,
                                    in correspondentie gesteld en zou gaarne vernemen naar welke regels de Amsterd. F.
                                    Vereeniging en de Rotterd. C &amp; F.C. Concordia gewoon zijn te spelen. Men zou
                                    eene combinatie der verschillende systemen kunnen vormen en dit reglement voor alle
                                    Nederlandsche wedstrijden verplichtend stellen.<sup>6</sup></p>

                                <p>In juli 1888 publiceerden D.C. Noppen en M. Weinthal, respectievelijk captains
                                    (aanvoerders) van de V.V. Amsterdam en de Rotterdamsche Voetbalclub Concordia, een
                                    ontwerp voor een Nederlandsche Voetbal Bond met een bijbehorend reglement van
                                    veertien artikelen en een reglement voor bonds-matches van dertien
                                    artikelen.<sup>7</sup> De eerste drie artikelen van het bondsreglement
                                    waren:</p>

                                <p>1. De bond zal genoemd worden de &#8220;Nederlandsche Voetbal-Bond&#8221;. Het doel
                                    van den Bond is: het bevorderen en algemeen maken van het Voetbal-Spel in
                                    Nederland.</p>
                                <p>2. Alle Nederlandsche Clubs, die volgens de regels van den Bond spelen, kunnen er lid
                                    van worden, door goedkeuring van het Bestuur. De Algemeene Vergadering te houden de
                                    laatste week in augustus.</p>
                                <p>3. De contributie van iedere club zal bedragen f 15.- per jaar, te betalen de eerste
                                    week in december. Een club die op 1 januari hare contributie nog niet betaald heeft,
                                    zal ophouden lid van den Bond te zijn.</p>

                                <p>Zij deden bij deze publicatie de oproep om hen nadere berichten en amendementen toe
                                    te zenden. Dit leverde echter nauwelijks iets op, zoals Weinthal in een brief
                                    gepubliceerd in de <em>Nederlandsche Sport</em> van 15 december 1888 liet weten:</p>

                                <p>Een ontwerp reglement had ik reeds opgesteld, en met een paar veranderingen zonden
                                    wij dit aan de verschillende clubs. Nu heeft een Nederlandsche Voetbalbond mijns
                                    inziens alleen raison d&#8217;&#234;tre als alle Nederlandsche clubs (er zijn er
                                    waarlijk niet veel) zich daarbij aansluiten. Wij kregen bericht, dat de
                                    Amsterdamsche Voetbal Vereeniging, de Enschedesche Footballclub en de Rotterdamsche
                                    Cricket en Voetbalclub Concordia genegen waren zich aan te sluiten. De anderen clubs
                                    lieten of niets van zich horen, of vonden een Bond volstrekt overbodig. Daarom sprak
                                    het van zelf dat deze zaak geen voortgang kon hebben. Mocht soms iemand genegen zijn
                                    het plan weder op te vatten, volgaarne wil ik hem behulpzaam zijn het te helpen
                                    uitvoeren.<sup>8</sup></p>

                                <div><img
                                    title="Willem (Pim) Mulier (1865-1954) speelde een belangrijke rol bij de introductie en groei van het voetbal in Nederland. Bron: Cees Zevenbergen, Rotterdams Voetbalglorie 1886-1986. Kroniek van een eeuw stedelijke Voetbalhistorie (Rijswijk 1986), p. 10."
                                    alt="Willem (Pim) Mulier (1865-1954) speelde een belangrijke rol bij de introductie en groei van het voetbal in Nederland. Bron: Cees Zevenbergen, Rotterdams Voetbalglorie 1886-1986. Kroniek van een eeuw stedelijke Voetbalhistorie (Rijswijk 1986), p. 10."
                                    src="http://www.historici.nl/media/verenigingsleven_sport/jpg/klein/Mulier.jpg"/>
                                    <div className="picSubScript">Willem (Pim) Mulier (1865-1954) speelde een belangrijke rol bij de introductie en groei van het voetbal in Nederland. Bron: Cees Zevenbergen, Rotterdams Voetbalglorie 1886-1986. Kroniek van een eeuw stedelijke Voetbalhistorie (Rijswijk 1986), p. 10.</div>
                                </div>

                                <p>Voor Mulier was dit aanleiding een nieuw plan op te stellen voor de oprichting van
                                    een landelijke voetbalbond. Hij nodigde tal van verenigingen uit voor een
                                    vergadering op zondag 17 november 1889 in caf&#233; Neuf te Haarlem.<sup>9</sup> Op
                                    deze bijeenkomst werd een ontwerp-reglement van de Nederlandsche Voetbal- en
                                    Athletische Bond opgesteld en de regels van het voetbalspel. Tevens werd een
                                    nieuwe vergadering afgesproken.<sup>10</sup></p>
                                <p>Op zondag 8 december 1889 werd de Nederlandsche Voetbal- en Athletische Bond
                                    definitief opgericht in het Caf&#233; Central te Den Haag.<sup>11</sup> Aanwezig
                                    waren afgevaardigden van Haarlemsche F.C., Delftsche F.C., Rotterdamsche C. en
                                    F.C. Concordia, V.V. Rotterdam, Haarlemsche F.C. Excelsior, Haagsche Voetbal
                                    Vereeniging, R.C. en F.C. Olympia, Amsterdamsche F.C. R.A.P. en V.V. Amsterdam.
                                    Deze clubs waren de voorgaande vergadering ook vertegenwoordigd; alleen de
                                    Amsterdamsch Sportclub ontbrak ditmaal. De Wageningsche FC Go Ahead had geen van
                                    beide bijeenkomsten bezocht, maar zij had wel bericht gezonden dat zij zich bij
                                    de Bond aansloot.</p>
                                <p>De koppeling van voetbal met atletiek bleek in de praktijk geen succes te zijn. Op 29
                                    september 1895 besloot de algemene ledenvergadering om de Bond te veranderen in de
                                    Nederlandsche Voetbalbond.</p>
                                <p><br/> Tijdens de Eerste Wereldoorlog maakten tal van soldaten op hun kazernes kennis
                                    met het voetbalspel. De N.V.B. zette in samenwerking met de militaire staf
                                    competities voor soldaten op en leverde ook het nodige materiaal. Deze maatregelen
                                    leidden ertoe dat veel jongemannen na be&#235;indiging van hun diensttijd in hun
                                    woonplaats voetbalclubs zouden gaan oprichten.</p>
                                <p>De N.V.B. verloor in dezelfde tijd wel de greep op het voetbal in den lande, omdat er
                                    aparte katholieke voetbalbonden ontstonden in de diocesen Breda, Den Bosch,
                                    Roermond, Utrecht en later ook Haarlem (zie hieronder). Zij sloot een contract af
                                    met de R.K.F., de R.K. Federatie van R.K. Voetbalbonden, waarbij zij afspraken
                                    maakten over de overname van royementen en schorsingen van clubs en spelers en de
                                    registratie van clubnamen. In 1924 kwam het echter tot een volledige breuk tussen de
                                    N.V.B. en de R.K.F.</p>
                                <p>In het begin van de jaren twintig kreeg de N.V.B. te maken met de opkomst van het
                                    zaterdagmiddag-voetbal door protestantse clubs en door diverse bedrijfsploegen en
                                    kantoorclubs. De Bond deed een poging om een aparte competitie voor clubs op
                                    zaterdagmiddag te organiseren en voor clubs van tram- en treinbedrijven, maar dit
                                    werd geen succes. Zij liet de organisatie van het zaterdagmiddag-voetbal nadien over
                                    aan de gewestelijke bonden. Dit kon niet voorkomen dat er ook aparte landelijke
                                    bonden kwamen voor socialistische en protestantse clubs (respectievelijk de N.A.S.B.
                                    en de C.N.V.B.) en nog meer regionale bonden en kantoorvoetbalbonden. De meeste van
                                    deze bonden waren zogenaamde &#8220;wilde bonden&#8221;, omdat zij nooit erkenning
                                    zochten van de N.V.B.</p>
                                <p>In 1929 kreeg de N.V.B. het predikaat &#8220;Koninklijk&#8221; bij gelegenheid van
                                    het veertigjarig bestaan. De K.N.V.B. bleef in de jaren dertig veruit de grootste
                                    sportbond van Nederland, maar had in Noord-Brabant en Limburg serieuze concurrentie
                                    van de katholieke voetbalbonden.</p>
                                <p>Na de Duitse inval bestond er onder sportbestuurders de vrees dat hun bonden zouden
                                    worden overgenomen door N.S.B.-ers. Dit leidde in de voetbalwereld tot besprekingen
                                    over fusie, die al gauw succes opleverden. Op 31 juli 1940 ging de K.N.V.B. met de
                                    R.K.F., de C.N.V.B., de N.A.S.B. afdeling voetbal en de diverse kantoorvoetbalbonden
                                    op in de Nederlandsche Voetbalbond (N.V.B.).</p>

                                <p><em>De erkende bonden</em></p>

                                <p>Vanaf 1894 kwamen er gewestelijke en plaatselijke bonden die in hun regio of stad het
                                    voetbal gingen organiseren. Deze ontstonden met name uit de behoefte om voor lagere
                                    elftallen van clubs uit de N.V.B.-competitie en minder rijke clubs een competitie te
                                    kunnen aanbieden. De N.V.B. sloot met sommige bonden contracten af, waardoor deze
                                    lokale bonden &#8220;erkende bonden&#8221; werden. In het contract werd onder meer
                                    vastgelegd dat de lokale bond de N.V.B. als het leidend lichaam van het voetbal in
                                    Nederland erkende. Tevens werd het rechtsgebied van de lokale bond vastgelegd en de
                                    regelgeving met betrekking tot clubnamen van nieuwe clubs.</p>
                                <p>Op 4 april 1908 werd de Federatie van Erkende Voetbalbonden opgericht. Deze
                                    organisatie was bedoeld om onderlinge geschillen tussen de aangesloten bonden op te
                                    lossen, zoals de afbakening van de grenzen van de rechtsgebieden. Ook werd de
                                    Federatie ingezet om gezamenlijke standpunten te ontwikkelen en te verdedigen
                                    tegenover de N.V.B., bijvoorbeeld op het gebied van promotie van clubs vanuit de
                                    regionale bonden naar de N.V.B.</p>

                                <p>In het seizoen 1939-1940 waren er twintig bonden die door de K.N.V.B. waren
                                    erkend: <sup>12</sup></p>

                                <p>De Amsterdamsche Voetbalbond (opgericht 27 september 1894; officieel 17 oktober
                                    1894).</p>
                                <p>Gebied: Amsterdam en omgeving.</p>

                                <p>De Haagsche Voetbalbond (1 oktober 1894).</p>
                                <p>Gebied: Den Haag en omstreken, begrensd door denkbeeldige lijn lopende van de
                                    Wassenaarschen Slag, dan ten zuiden van Voorschoten tot Boskoop, naar het zuiden
                                    ombuigend langs Berkel naar de Nieuwe Waterweg, uitkomende even ten westen van
                                    Maassluis en verder naar Hoek van Holland.<sup>13</sup></p>

                                <p>De Rotterdamsche Voetbalbond (21 november 1894).</p>
                                <p>Gebied: Rotterdam en de Zuid-Hollandse eilanden, uitgezonderd a) het oostelijk stuk
                                    van Oud-Beyerland begrensd door de plaatsen Strijenas, Strijen, Maasdam, inclusief
                                    b) Zwijndrecht en Hendrik Ido Ambacht op IJselmonde, c) het eiland Dordrecht. Verder
                                    het gebied begrensd door de lijn Maassluis-Maasland, Bleiswijk, Capelle aan den
                                    IJssel, Krimpen aan den IJssel, Nieuwe Maas.</p>

                                <p>De Geldersche Voetbalbond (7 november 1896).</p>
                                <p>Gebied: provincie Gelderland en de regio Deventer, uitgezonderd de gedeelten
                                    toebehorend aan de U.P.V.B., de N.C.V.B., de Arnhemsche en Nijmeegsche
                                    Voetbalbonden.</p>

                                <p>De Haarlemsche Voetbalbond (23 oktober 1899).</p>
                                <p>Gebied: Haarlem, Wijk aan Zee, Beverwijk, Halfweg, Haarlemmermeer, Hillegom naar de
                                    kust.</p>

                                <p>De Twentsche Voetbalbond (20 november 1899).</p>
                                <p>Gebied: landschap Twente.</p>

                                <p>De Brabantsche Voetbalbond (17 december 1899).</p>
                                <p>Gebied: provincie Noord-Brabant, de Betuwe en Tholen.</p>

                                <p>De Utrechtsche Provinciale Voetbalbond (5 juli 1901).</p>
                                <p>Gebied: provincie Utrecht met a) een gdeelte van de Veluwe ten westen van de lijn
                                    Hulshorst, Stroe, Ede, Veenendaal (exclusief Ede) en b) het Gooi tot Muiderberg en
                                    Weesp en c) Vianen.</p>

                                <p>De Noord-Hollandsche Voetbalbond (14 september 1902).</p>
                                <p>Gebied: provincie Noord-Holland boven het IJ met inbegrip van Texel, zuidelijk
                                    begrensd door een lijn boven Wijk aan Zee, boven Beverwijk naar Ransdorp, Assendelft
                                    en de gehele Zaanstreek, benevens Durgerdam.</p>

                                <p>De Leidsche Voetbalbond (31 oktober 1903).</p>
                                <p>Gebied: Leiden en omstreken.</p>

                                <p>De Friesche Voetbalbond (18 december 1904).</p>
                                <p>Gebied: provincie Friesland.</p>

                                <p>De Goudsche Voetbalbond (12 augustus 1905).</p>
                                <p>Gebied: Gouda en omstreken, ten noorden begrensd door de grens van Noord- en
                                    Zuid-Holland, ten zuiden door de Lek, ten oosten door de grens van de provincie
                                    Utrecht.</p>

                                <p>De Noord-Centrale Voetbalbond (6 oktober 1905).</p>
                                <p>Gebied: noordelijk en westelijk Overijssel, zuidelijk Drenthe en een deel van
                                    Gelderland.</p>

                                <p>De Groninger Voetbalbond (1 september 1907).</p>
                                <p>Gebied: provincie Groningen.</p>

                                <p>De Limburgsche Voetbalbond (8 maart 1908).</p>
                                <p>Gebied: provincie Limburg.</p>

                                <p>De Arnhemsche Voetbalbond (11 september 1908).</p>
                                <p>Gebied: Ellecom, Rheden, Velp, Arnhem, Westervoort, Zevenaar, Lobith, Elden, Driel,
                                    Oosterbeek, Renkum, Wageningen, Rhenen, Bennekom, Ede en Lunteren.</p>

                                <p>De Nijmeegsche Voetbalbond (19 september 1909).</p>
                                <p>Gebied: Duitse grens Millingen-Gennep langs de Maas tot en met Alphen, rechte lijn
                                    naar het noorden, spoorlijn Kesteren-Rheden, langs de Rijn tot Millingen.</p>

                                <p>De Dordrechtsche Voetbalbond (21 januari 1911).</p>
                                <p>Gebied: Dordrecht en omstreken.</p>

                                <p>De Zeeuwsche Voetbalbond (1 augustus 1921).</p>
                                <p>Gebied: provincie Zeeland uitgezonderd Tholen en Sint Philipsland (die bij B.V.B.
                                    horen).</p>

                                <p>De Drentsche Voetbalbond (3 januari 1926).</p>
                                <p>Gebied: de provincie Drenthe, behalve Zuid-West Drenthe (Meppel, Hoogeveen) en een
                                    klein deel van Noord-Drenthe.</p>

                                <p>Sommige bonden waren al eens eerder opgericht, zoals bijvoorbeeld de Haarlemsche, de
                                    Dordrechtsche en de Zeeuwsche Voetbalbond, maar die waren na korte tijd weer
                                    uiteengevallen. Het staat vast dat bepaalde bonden een minimum aantal werkende leden
                                    als toelatingseis hanteerden, zoals de Amsterdamsche en de Haagsche Voetbalbonden.
                                    Dit moest voorkomen dat er clubs werden toegelaten die z&#243; klein waren dat zij
                                    in mum van tijd weer werden opgeheven.<sup>14</sup> Andere
                                    bonden stonden in principe slechts &#233;&#233;n club per plaats toe om
                                    onderlinge concurrentie te voorkomen, zoals de Drentsche Voetbalbond.<sup>15</sup>
                                </p>
                                <p>Diverse bonden kregen in hun rechtsgebied te maken met &#8220;wilde bonden&#8221;,
                                    wat zij soms deels zelf veroorzaakten. De Amsterdamsche en Rotterdamsche
                                    Voetbalbonden namen rond 1900 geen nieuwe clubs aan teneinde hun aangesloten clubs
                                    te beschermen en te laten groeien.<sup>16</sup> Of zij op die
                                    manier spelers uit bepaalde maatschappelijke standen wilden uitsluiten, is niet
                                    bewijsbaar. Deze opstelling leidde wel tot de oprichting van de Amsterdamsche
                                    Volksvoetbalbond en de Zuid-Hollandsche Voetbalbond. De Groninger Voetbalbond
                                    werd geconfronteerd met een afscheiding van kleine clubs in het het noord-westen
                                    nadat zij een minimum aantal leden voor toelating had ingesteld.<sup>17</sup> Verder
                                    kregen de Friesche en
                                    de Zeeuwsche Voetbalbond te maken met aparte bonden, die veelal in afgelegen
                                    en ge&#239;soleerde delen van hun provincies werden opgericht.</p>
                                <p>Alle erkende bonden werkten hun competities op zondag af, maar zij begonnen in de
                                    jaren twintig of dertig vaak ook een zaterdagmiddag-competitie om kantoorelftallen
                                    of protestants-christelijke verenigingen op te kunnen vangen. Ook zondagclubs hadden
                                    wel elftallen die op zaterdag speelden. Deze zaterdagmiddag-competities stonden
                                    geheel los van de competitie op zondag; er was geen onderlinge promotie of
                                    degradatie.</p>
                                <p>In augustus 1940 werden de twintig erkende voetbalbonden formeel opgeheven
                                    en &#8220;gedegradeerd&#8221; tot Onderafdeelingen van de N.V.B., vanaf 1941 kortweg
                                    Afdeelingen. De Noord-Centrale Voetbalbond kreeg een nieuwe naam met Onderafdeeling
                                    Zwolle.</p>
                                <p><em><br/></em></p>
                                <p><em>Competitie</em></p>

                                <p>In 1888 publiceerden Noppen en Weinthal hun ontwerp van het reglement van de
                                    Nederlandsche Voetbal Bond. Zij hadden voor de strijd om het landskampioenschap een
                                    knock-out systeem voor ogen, afgaande op het zevende artikel van het <em>Reglement
                                        voor de Bonds-matches</em>:</p>

                                <p>De verschillende clubs uit een stad zullen eerst met elkaar matchen. De winnaars van
                                    deze matches in een provincie, zullen dan tegen elkaar matchen, om uit te maken
                                    welke club de beste is in hare provincie, en deze winnaars zullen spelen op de
                                    Hoofdwedstrijden, ten einde uit te maken welke club de beste is uit het Land. Deze
                                    ontvangt de cup of de medaille. Wanneer meer dan 2 clubs uit een stad mededingen,
                                    zal het Bestuur loten welke 2 clubs het eerst met elkaar zullen spelen, en
                                    vervolgens met de overblijvende club; ook op wiens grond gespeeld zal worden.
                                    Evenzoo om de beste club uit de provincie uit te maken. Er wordt door het Bestuur
                                    bepaald waar de Hoofd-Bondswedstrijden, en de wedstrijden om de beste clubs uit de
                                    provincie uit te maken, zullen plaats vinden. In deze wedstrijden benoemt het
                                    bestuur de umpires en referee.<sup>18</sup></p>

                                <p>De N.V. en A.B. (later N.V.B.) heeft deze opzet niet overgenomen maar gekozen voor
                                    het league-systeem, dat inmiddels door het Engelse profvoetbal werd gehanteerd. Bij
                                    deze opzet worden clubs in een poule ingedeeld en spelen zij een volledige
                                    competitie met thuis- en uitwedstrijden. Er bestond in de jaren 1889-1896 enkel een
                                    eerste klasse in het Westen, waardoor de winnaar van deze klasse als kampioen van
                                    Nederland werd beschouwd. In 1896 werd er ook een eerste klasse in het Oosten
                                    ingesteld. De kampioen van het Westen en het Oosten streden vanaf dat moment in
                                    maximaal drie wedstrijden om de landstitel.</p>
                                <p>In het Noorden en Zuiden had de N.V.B. enkel een tweede klasse ingesteld, omdat de
                                    kwaliteit van de deelnemende clubs nog niet hoog werd ingeschat. In 1913 kwam er een
                                    eerste klasse in het Zuiden, waarvan de winnaar ook mee mocht doen in de
                                    nacompetitie om de landstitel. In 1916 werd in het Noorden een eerste klasse
                                    ingevoerd, zodat ook de winnaar van de noordelijke eerste klasse deel kon nemen aan
                                    de strijd om het landskampioenschap. In 1917 werd de westelijke eerste klasse
                                    gesplitst in twee aparte afdelingen West I en West II. Vanaf seizoen 1917-1918
                                    speelden voortaan de kampioenen van de afdelingen West I, West II, Noorden, Oosten
                                    en Zuiden in een hele competitie van acht wedstrijden om het kampioenschap van
                                    Nederland. Ook werden er in de diverse afdelingen derde en vierde klassen ingevoerd
                                    om het groeiende aantal clubs onder te brengen.</p>

                                <p>Aanvankelijk kon het bestuur van de N.V.B. naar eigen inzicht clubs in de competities
                                    opnemen. Nieuwe verenigingen moesten minstens elf leden hebben en een vast,
                                    nauwkeurig omschreven clubtenue. Sommige clubs waren echter te klein en te zwak
                                    georganiseerd en verdwenen in de loop van het seizoen alweer van het toneel.
                                    Bovendien wilden de regionale en plaatselijke bonden dat er betere, vastere
                                    regelingen voor de promotie van hun clubs kwamen. Het bestuur van de N.V.B. stelde
                                    op 14 april 1917 de volgende toelatingseisen vast:</p>

                                <p>1. een club moet a) minstens 2 seizoenen gespeeld hebben in een erkende bond en b) in
                                    seizoen v&#243;&#243;r aanvraag eerste in de hoogste klasse van die bond zijn.</p>
                                <p>2. een club kan behoudens bijzondere gevallen, alleen tot de N.V.B. worden toegelaten
                                    onder overlegging van een vooraf verkregen bewilliging van de erkende bond.</p>
                                <p>3. een club gevestigd in een plaats, niet behorend tot het gebied van een erkende
                                    bond, kan tot de N.V.B. worden toegelaten zonder bewilliging zoals genoemd in 2.
                                    Dergelijke aanvragen worden afzonderlijk beoordeeld.</p>

                                <p>Voorts waren er criteria over de accommodatie en het leveren van een waarborgsom en
                                    de bepaling, dat wanneer alle voorwaarden minstens 2 weken voor begin competitie
                                    niet vervuld waren, de club eerstvolgende twee jaar geen nieuwe toelating mocht
                                    vragen.</p>

                                <p>Deze richtlijnen leidden ertoe dat in principe enkel de kampioenen van de eerste
                                    klassen van de regionale bonden in aanmerking kwamen voor promotie naar de N.V.B.
                                    Bij de invoering van de derde en vierde klassen mochten echter ook andere clubs uit
                                    de eerste klassen van de onderbonden promoveren naar deze nieuw gevormde landelijke
                                    klassen, mits zij ook voldeden aan de andere criteria.</p>

                                <div><img
                                    title="Elftalfoto van de Leidse voetbalvereniging De Sportman met hun kleedhok op de achtergrond, ongedateerd. Bron: Peter de Bruijn, Jaap Jacobs e.a., Ajax Sportman Combinatie 1892-1992 (z.p. 1992), p. 15."
                                    alt="Elftalfoto van de Leidse voetbalvereniging De Sportman met hun kleedhok op de achtergrond, ongedateerd. Bron: Peter de Bruijn, Jaap Jacobs e.a., Ajax Sportman Combinatie 1892-1992 (z.p. 1992), p. 15."
                                    src="http://www.historici.nl/media/verenigingsleven_sport/jpg/klein/elftal_Sportman.jpg"/>
                                    <div className="picSubScript">Elftalfoto van de Leidse voetbalvereniging De Sportman met hun kleedhok op de achtergrond, ongedateerd. Bron: Peter de Bruijn, Jaap Jacobs e.a., Ajax Sportman Combinatie 1892-1992 (z.p. 1992), p. 15.</div>
                                </div>

                                <p>In 1923 werd voor alle afdelingen de verhouding van de eerste, tweede, derde en
                                    vierde klassen vastgelegd. Dit gebeurde volgens het piramide-systeem met
                                    idealiter &#233;&#233;n eerste klasse, twee tweede klassen, vier derde klassen en
                                    acht vierde klassen. Deze verhouding is niet in alle afdelingen ingevoerd, want het
                                    aantal derde en vierde klassen wisselde per afdeling doordat het aantal ingeschreven
                                    ploegen verschilde. Voor de indeling van gepromoveerde clubs uit de onderbonden
                                    waren in de afdelingen I en II geen vaste regels, maar in het algemeen gold het
                                    onderstaande schema:</p>

                                <table className="voetbalTabel" cellSpacing="0" cellPadding="0">
                                    <tr>
                                        <td width="20%" valign="top">
                                            <p>Afd. I</p>
                                            <p>(West I)</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Afd. II</p>
                                            <p>(West II)</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Afd. III (Oosten)</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Afd. IV (Zuiden)</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Afd. V (Noorden)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="20%" valign="top">
                                            <p>Eerste klasse</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Eerste klasse</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Eerste klasse</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Eerste klasse</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Eerste klasse</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="20%" valign="top">
                                            <p>2 A-B</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>2 A-B</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>2 A-B</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>2 A-B</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>2 A-B</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="20%" valign="top">
                                            <p>3 A-D</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>3 A-D</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>3 A-D</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>3 A-D</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>3 A-D</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="20%" valign="top">
                                            <p>4 A-H</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>4 A-G</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>4 A-F</p>
                                        </td>
                                        <td width="20%" valign="top">

                                        </td>
                                        <td width="20%" valign="top">

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="20%" valign="top">
                                            <p>A.V.B.</p>
                                            <p>Hrl. V.B.</p>
                                            <p>U.P.V.B.</p>
                                            <p>Nrd. Hol. V.B.</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Haagsche V.B.</p>
                                            <p>Rot. V.B.</p>
                                            <p>Leidsche V.B.</p>
                                            <p>Goudsche V.B.</p>
                                            <p>Dord. V.B.</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Tw. V.B.</p>
                                            <p>Gld. V.B.</p>
                                            <p>Arnh. V.B.</p>
                                            <p>Nijm. V.B.</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Brab. V.B.</p>
                                            <p>Limb. V.B.</p>
                                            <p>Zeeuwsche V.B.</p>
                                        </td>
                                        <td width="20%" valign="top">
                                            <p>Gron. V.B.</p>
                                            <p>Friesche V.B.</p>
                                            <p>N.C.V.B.</p>
                                            <p>Drentsche V.B.</p>
                                        </td>
                                    </tr>
                                </table>

                                <p>Tijdens de eerste seizoenen was het mogelijk dat tweede en andere lagere elftallen
                                    van een club in de competitie van de N.V.B. tegen eerste elftallen van andere
                                    verenigingen speelden. Er werden gaandeweg echter in de meeste afdelingen aparte
                                    competities voor reserveploegen ingesteld. Alleen in de zuidelijke afdeling bleven
                                    eerste en lagere elftallen gemengd, omdat hier te weinig clubs waren door de
                                    concurrentie van de katholieke voetbalbonden.</p>
                                <p>Binnen de N.V.B. en de diverse onderbonden bestond er regelmatig discussie of er
                                    automatische promotie en degradatie tussen de klassen moest zijn of dat er
                                    promotie-degradatiewedstrijden moesten worden gespeeld. Beide systemen zijn
                                    v&#243;&#243;r 1940 afwisselend toegepast.</p>

                                <p><em>Registratie van clubnamen</em></p>

                                <p>Aanvankelijk waren er geen beperkingen bij het kiezen van clubnamen bij oprichting
                                    van voetbalverenigingen. Wanneer er enige moeilijkheden waren, dan werd dit opgelost
                                    door de clubnaam te verbinden aan de plaatsnaam, zoals Quick Amersfoort, Quick Den
                                    Haag en Quick Nijmegen. Naarmate er meer onderbonden en meer clubs kwamen begonnen
                                    er echter steeds meer clubs te komen met dezelfde naam in &#233;&#233;n en dezelfde
                                    onderbond. In het <em>Voetbal Jaarboekje 1937-1938</em> worden de gevolgen van deze
                                    ontwikkeling geschetst:</p>

                                <p>Het kwam voor dat in dezelfde stad 4 of 5 vereenigingen waren, welke precies
                                    denzelfden naam droegen, met al de gevolgen van dien. Niet alleen vergissingen, die
                                    bij de administratie voorkwamen, doch men noemde zelfs gevallen, waarbij een elftal
                                    een vergeefsche reis had gemaakt, doordat het zich begeven had naar het terrein van
                                    een vereeniging, welke denzelfden naam droeg en in dezelfde stad gevestigd was. Ook
                                    bij het afsluiten van wedstrijden met buitenlandsche vereenigingen, waren
                                    onaangename misverstanden wel eens het gevolg.<sup>19</sup>
                                </p>

                                <p>Het bestuur van de N.V.B. besloot in november 1904 dat voortaan geen clubs meer
                                    aangenomen zouden worden in zijn competitie, wier namen of initialen niet voldoende
                                    verschilden van clubs die reeds in de N.V.B. speelden.<sup>20</sup> Het
                                    wilde deze maatregel ook doorvoeren met betrekking tot de clubs die
                                    tot &#233;&#233;n van de regionale en plaatselijke bonden wilden toetreden. De
                                    Federatie van Erkende Bonden verzocht in 1909 om deze maatregel niet strikt vast
                                    te houden, omdat &#8220;de clubs, behoorende tot plaatselijke of gewestelijke
                                    Bonden zoo goed als niet in aanraking komen met den N.V.B. en mocht dit al eens
                                    het geval zijn, dan kan nog steeds door middel van een plaatsnaam verschil
                                    worden gemaakt. Gaat later een zoodanige vereeniging over tot den N.V.B. dan is
                                    het altijd nog tijd genoeg, haar van naam te doen veranderen.&#8221;<sup>21</sup>
                                </p>
                                <p>Het was inderdaad niet waarschijnlijk dat een club uit de ene onderbond regelmatig
                                    zou spelen tegen een gelijknamige club uit een andere onderbond. Dit kon hooguit een
                                    keer in het toernooi om de N.V.B-beker gebeuren. Maar er bestond wel gevaar dat
                                    clubs steeds meer moeite zouden hebben van naam te veranderen als zij die al langere
                                    tijd zouden hebben gevoerd.</p>
                                <p>In januari 1911 kondigde het bestuur van de N.V.B. aan dat er een register van
                                    clubnamen zou komen:</p>

                                <p>De namen van toegetreden vereenigingen worden van Bondswege ingeschreven. De erkende
                                    Bonden zijn gehouden, de namen van al hun toegetreden vereenigingen te doen
                                    inschrijven voor 1 Maart 1911. Bij gelijkluidendheid van namen van vereenigingen,
                                    toegetreden tot den N.V.B. en van vereenigingen, toegetreden tot erkende Bonden,
                                    zullen de laatste gehouden zijn, haar naam ten genoege van het Bestuur te
                                    veranderen, tenzij de datum van toetreding tot den erkenden Bond van voor 1 Juli
                                    1904 (datum van het contract met de erkende Bonden) dateert. Bij gelijkluidendheid
                                    van namen van vereenigingen van erkende Bonden onderling, zal de vereeniging, die
                                    wat den datum betreft het laatst tot den erkenden Bond toetrad, gehouden zijn, van
                                    naam te veranderen. Bij weigering hiervan zal het Bestuur van den N.V.B. die
                                    maatregelen nemen, noodig tot uitvoering van het besluit.<sup>22</sup>
                                </p>

                                <p>Op 8 augustus 1911 werden in de <em>Officieele Mededeelingen</em> de eerste officieel
                                    erkende clubnamen gepubliceerd.<sup>23</sup> Het bestuur van
                                    de N.V.B. constateerde dat er al zoveel &#8220;dubbele clubnamen&#8221; waren,
                                    dat het besloot nadere regels voor de registratie op te stellen. Deze acht
                                    bepalingen, afgekondigd in de <em>Officieele Mededeelingen</em> van 5 februari
                                    1912, zijn voor de gehele periode van het onderhavige project van kracht
                                    gebleven, zodat die hier in extenso volgen:</p>

                                <p>1. Iedere vereeniging, welke toetreedt tot den N.V.B. of een zijner erkende bonden of
                                    op een andere wijze onder de rechtsbevoegdheid van den N.V.B., is verplicht haar
                                    naam te doen registreeren. De N.V.B. verplicht zich zorg te dragen dat geen andere
                                    vereeniging, toegetreden tot den N.V.B. of een zijner erkende bonden, een reeds
                                    geregistreerde naam voert.</p>
                                <p>2. Indien een naam, opgegeven ter registratie volgens het oordeel van het Bestuur
                                    niet voldoende afwijkt van een reeds geregistreerden naam of van goedgekeurde
                                    gebruikelijke initialen, is de vereeniging van dien naam gehouden, verandering aan
                                    te brengen ten genoege van het Bestuur.</p>
                                <p>3. Indien meerdere gelijkluidende namen gelijktijdig ter registratie worden
                                    opgegeven, heeft de vereeniging, welke voor het eerst tot den N.V.B. of een zijner
                                    erkende bonden is toegetreden, recht van voorkeur. Heeft ook deze toetreding
                                    gelijktijdig plaats gevonden, zoo wordt de voorrang toegekend aan de vereeniging,
                                    welke het eerst opgericht is; anders beslist het lot.</p>
                                <p>4. Vereenigingen, welke weigerachtig zijn, haar naam &#8211; bij gelijkluidendheid
                                    met een reeds geregistreerden &#8211; te veranderen, worden niet tot de competities
                                    van den N.V.B. of van zijn erkende bonden toegelaten. Mocht de vereeniging reeds aan
                                    een competitie deelnemen of de gelijkluidendheid eerst later blijken, dan heeft het
                                    bestuur van den N.V.B. resp. erkende bond, het recht, om bij weigering tot
                                    naamsverandering de oudere deelname aan de competitie te ontzeggen.</p>
                                <p>5. De namen van vereenigingen, welke zijn ontbonden of geroyeerd, worden in het
                                    naamregister geschrapt.</p>
                                <p>6. Vereenigingen, welke ophouden lid te zijn van den N.V.B. of een zijner erkende
                                    bonden kunnen het recht op haar naam behouden, indien ze binnen een maand na dit
                                    bedanken aan het Bestuur van den N.V.B. hebben kennis gegeven, dat zij van dit recht
                                    wenschen gebruik te maken.</p>
                                <p>7. Vereenigingen, welke zich met andere combineeren onder een nieuwen naam en
                                    vereenigingen, welke haar naam wenschen te veranderen, zijn gehouden, den nieuwen
                                    naam te doen registreeren, waarbij de bovengenoemde artikels van toepassing
                                    blijven.</p>
                                <p>8. Vereenigingen, niet toegetreden tot den N.V.B. of een zijner erkende bonden,
                                    kunnen ook hare namen laten registreeren. Bij gelijktijdige opgave van
                                    gelijkluidende namen genieten echter de vereenigingen, toegetreden tot den N.V.B. of
                                    eener zijner erkende bonden, de voorrang.<sup>24</sup></p>

                                <p>Aangezien er talloze clubnamen werden geregistreerd, moest er een administratieve
                                    ordening komen werd om een naam snel terug te kunnen vinden. Elke geregistreerde
                                    club kreeg een code in de vorm van bijvoorbeeld 34 &#8211; 1917, wat betekende dat
                                    de naam was geregisteerd in het 34<sup>ste</sup> nummer van de <em>Officieele
                                        Mededeelingen</em> jaargang 1917. Wanneer een club om welke reden dan ook was
                                    verdwenen, werd in dit de <em>Officieele Mededeelingen</em> bekend gemaakt, zodat
                                    andere clubs de vrijgekomen naam konden overnemen. In principe kwam elke naam
                                    maar &#233;&#233;n keer voor in het bestand geregistreerde clubs, maar dit voorkwam
                                    niet dat er nog altijd clubs met gelijke namen in Nederland voetbalden. Nieuwe clubs
                                    lieten niet altijd hun clubnaam registreren. Dit gold met name voor verenigingen
                                    aangesloten bij de confessionele en wilde bonden. Bovendien liep de administratie
                                    van de N.V.B. wel eens achter; het duurde soms maanden en soms zelfs jaren dat er
                                    officieel bekend werd gemaakt dat een clubnaam was vrijgekomen. Bij de registratie
                                    werd niet gemeld of de desbetreffende club op zaterdag of zondag speelde.</p>

                                <p>Het bestuur van de N.V.B. overwoog in 1923 om het registreren van buitenlandse namen
                                    voor Nederlandse clubs zoveel mogelijk tegen te gaan, maar dit lijkt niet strikt
                                    toegepast te zijn.<sup>25</sup> Op 25 augustus
                                    1929 besloot de Bondsvergadering met algemene stemmen dat &#8220;ingaande heden,
                                    geen vereenigingen meer tot den NVB worden toegelaten, welke den naam dragen van
                                    of haar naam ontleenen aan een onderneming, die in het Handelsregister als
                                    zoodanig ingeschreven is&#8221;.<sup>26</sup> Voor reeds
                                    erkende clubnamen van fabriekselftallen, zoals bijvoorbeeld P.S.V. en
                                    Verkade, werd een uitzondering gemaakt; zij hoefden niet van naam te
                                    veranderen. Andere voetbalclubs, verbonden met bedrijven, hebben hun naam
                                    evenmin veranderd, maar kozen een sportieve afkorting van de bedrijfsnaam
                                    (bijvoorbeeld A.E.G. en S.H.E.L.L.).</p>

                                <div><img
                                    title="Voorbeeld van de rubriek &#8220;Registratie van clubnamen&#8221; met de opgaven van de nieuwe en verdwenen namen van voetbalclubs. Bron: Sportkroniek 19 aug. 1935, p. 967."
                                    alt="Voorbeeld van de rubriek &#8220;Registratie van clubnamen&#8221; met de opgaven van de nieuwe en verdwenen namen van voetbalclubs. Bron: Sportkroniek 19 aug. 1935, p. 967."
                                    src="http://www.historici.nl/media/verenigingsleven_sport/jpg/klein/registratieclubnamen_aug_1935.jpg"/>
                                    <div className="picSubScript">Voorbeeld van de rubriek &#8220;Registratie van clubnamen&#8221; met de opgaven van de nieuwe en verdwenen namen van voetbalclubs. Bron: Sportkroniek 19 aug. 1935, p. 967.</div>
                                </div>

                                <p>In juni 1940 kwam door de fusie van de verschillende voetbalbonden de registratie van
                                    de namen van alle Nederlandse clubs weer bij de N.V.B. terecht. Wanneer katholieke
                                    of protestantse clubs dezelfde naam hadden als een club in de N.V.B., dan werd dit
                                    opgelost door de confessionele clubs te voorzien van R.K. of C. voor hun naam of
                                    door de beginletter van de plaatsnaam of het jaar van oprichting achter hun naam te
                                    zetten. Ook voor de voetbalclubs afkomstig uit de N.A.S.B. werden desnoods nieuwe
                                    namen ingevoerd.</p>

                                <p><em>Officieel orgaan</em></p>

                                <p>De N.V. en A.B. en later de (K.) N.V.B. heeft als officieel orgaan gebruikt:<em> Het
                                    Sportblad </em>(februari &#8211; december 1890); de <em>Nederlandsche
                                    Sport</em> (december 1890 &#8211; september 1900); <em>Het Sportblad</em> (oktober
                                    1900 &#8211; oktober 1908); <em>Offici&#235;ele mededeelingen van den N.V.B. </em>(oktober
                                    1908 &#8211; maart 1919) en (<em>De</em>) <em>Sportkroniek </em>vanaf maart 1919.
                                </p>
                                <p>De (K.) N.V.B. gaf elk seizoen een Adresboek of Adreslijst uit met een alfabetische
                                    opgave van alle clubs in zijn competitie met hun bestuur, clubtenue en terrein.
                                    Vanaf seizoen 1921-1922 werden ook de oprichtingsdata van deze verenigingen
                                    vermeld.</p>


                                <h4 id="kath">De katholieke voetbalorganisatie</h4>

                                <p>Katholieke verenigingen konden eerst moeiteloos toetreden tot de N.V.B. en erkende
                                    Bonden als de Brabantsche en Limburgsche Voetbalbonden. Dit veranderde in 1910 naar
                                    aanleiding van het verzoek van Achilles (later Olivio geheten) en Leonidas om lid te
                                    worden van respectievelijk de Amsterdamsche en Rotterdamsche Voetbalbond. Sommige
                                    leden van deze Bonden wilden deze katholieke clubs niet toelaten, omdat zij niet
                                    openstonden voor niet-katholieken.<sup>27</sup> Het bestuur
                                    van de N.V.B. oordeelde dat dergelijke clubs toegelaten konden worden. Leonidas
                                    zou ook naderhand in de N.V.B. uitkomen, evenals de R.K.S.V. Graaf Willem II uit
                                    Den Haag.</p>
                                <p>Naar aanleiding van deze discussie werden er plannen opgezet om een R.K. Voetbalbond
                                    voor geheel Nederland op te richten, maar dit ging vooralsnog niet door. Het bracht
                                    het vraagstuk van katholieken en sportbeoefening wel naar de voorgrond. Geestelijken
                                    gingen zich afvragen of katholieken wel moesten deelnemen aan sporten met en tegen
                                    niet-katholieken en of deelname aan sport geen bedreiging vormde voor het vervullen
                                    van godsdienstige plichten als het bijwonen van de mis. Deze kwestie kreeg meer
                                    urgentie toen er meer katholieke voetbalclubs werden opgericht en de mobilisatie van
                                    1914 jongemannen van allerlei gezindten bijeenbracht in de kazernes, die vervolgens
                                    gezamenlijk gingen sporten.</p>
                                <p>W.J.C. Binck (1882-1971) was &#233;&#233;n van de eersten onder de katholieke
                                    geestelijkheid die het belang van voetbal voor de katholieke jeugd
                                    onderkende.<sup>28</sup> Als kapelaan in Breda was hij nauw betrokken
                                    bij het plaatselijke katholieke jeugdwerk. Op 27 november 1914 richtte hij
                                    tezamen met zeven jongens Bredania op, een R.K. voetbalclub.<sup>29</sup> Hij
                                    nam het initiatief tot de oprichting op 19 september 1915 van de R.K.V.B.
                                    Noord-Brabant Westelijke deel en hij was naderhand ook betrokken bij de
                                    oprichting van de overige katholieke voetbalorganisaties.</p>
                                <div><img
                                    title="W.J.C. Binck (1882-1971) speelde een belangrijke rol in de opkomst van de katholieke voetbalbonden. Bron: Marjet Derks en Marc Budel, Sportief en katholiek. Geschiedenis van de katholieke sportbeweging in Nederland in de twintigste eeuw (Nijmegen 1990), p. 30."
                                    alt="W.J.C. Binck (1882-1971) speelde een belangrijke rol in de opkomst van de katholieke voetbalbonden. Bron: Marjet Derks en Marc Budel, Sportief en katholiek. Geschiedenis van de katholieke sportbeweging in Nederland in de twintigste eeuw (Nijmegen 1990), p. 30."
                                    src="http://www.historici.nl/media/verenigingsleven_sport/jpg/klein/wjc_binck.jpg"/>
                                    <div className="picSubScript">W.J.C. Binck (1882-1971) speelde een belangrijke rol in de opkomst van de katholieke voetbalbonden. Bron: Marjet Derks en Marc Budel, Sportief en katholiek. Geschiedenis van de katholieke sportbeweging in Nederland in de twintigste eeuw (Nijmegen 1990), p. 30.</div>
                                </div>

                                <p>In november 1915 publiceerde Binck &#8220;Het leeren gevaar&#8221; in het katholieke
                                    dagblad <em>De Maasbode</em>.<sup>30</sup> Hij verklaarde in
                                    dit artikel dat deelname van katholieken aan het ongeorganiseerde en
                                    georganiseerde neutrale voetbal een ernstig gevaar vormde voor de jeugdige
                                    katholieke voetballers. Het zou hen niet alleen hinderen bij het bezoeken van de
                                    mis, maar hen ook geleidelijk kunnen vervreemden van de katholieke gewoonten.
                                    Hij zag in het voetbal een uitdaging voor de katholieke gemeenschap: men moest
                                    het voetballen niet verbieden, zoals tal van andere geestelijken hadden bepleit,
                                    maar het juist organiseren onder toezicht van de geestelijkheid in katholieke
                                    bonden en clubs. Dat moest snel gebeuren, want Binck voorzag dat de jongemannen
                                    zouden blijven voetballen, als de mobilisatie eenmaal voorbij zou zijn.</p>

                                <p>In de periode 1915-1919 werden in alle vijf diocesen in Nederland aparte katholieke
                                    voetbalbonden opgericht:</p>
                                <p>De R.K. Voetbalbond Noord-Brabant Westelijk deel, later R.K.V.B. Breda; opgericht 19
                                    september 1915.</p>
                                <p>De R.K. Voetbalbond bisdom Den Bosch (R.K.V.B. Den Bosch); opgericht 10 december
                                    1915.</p>
                                <p>De R.K.V.B. in het aartsbisdom Utrecht (R.K.U.V.B.); opgericht 23 juni 1916.
                                    Aanvankelijk waren de R.K. clubs uit Amsterdam hier ook bij aangesloten, totdat zij
                                    op 27 februari 1919 hun eigen R.K. Amsterdamsche Voetbalbond stichtten.&#160;</p>
                                <p>De R.K. Limburgsche Voetbalbond (R.K.L.V.B.); opgericht op 24 juli 1917 als R.K.
                                    Zuid-Limburgschen Voetbalbond; werd vanaf 1 juli 1919 ook erkend in
                                    Noord-Limburg.</p>
                                <p>De Diocesane Haarlemsche Voetbalbond (D.H.V.B.); opgericht 7 september 1919. De R.K.
                                    Amsterdamsche Voetbalbond werd een district van deze nieuwe bond voor het gehele
                                    bisdom Haarlem.</p>

                                <p>Afgevaardigden van de R.K.V.B. Breda en de R.K.V.B. Den Bosch richtten op 27 december
                                    1916 de Roomsch-Katholieke Federatie van Roomsch-Katholieke Voetbalbonden in
                                    Nederland (verder R.K.F.) op.<sup>31</sup> Deze organisatie
                                    werd aanvankelijk ook wel de R.K.N.V.B. genoemd, aangezien zij als de katholieke
                                    tegenhanger van de N.V.B. werd beschouwd. Vanaf 1921 werd enkel de benaming
                                    R.K.F. gebruikt, omdat een machtige landelijke bond niet gewenst werd en de
                                    zelfstandigheid van elke diocesane bond benadrukt moest worden.</p>
                                <p>Op 4 juli 1917 sloten R.K.F. en de N.V.B. een contract, waarbij zij elkaars
                                    standpunten eerbiedigden en elkaars schorsingen en royementen overnamen. Ook
                                    beloofde de R.K.F. de leidinggevende rol van de N.V.B. te erkennen en de namen van
                                    haar clubs te laten registeren door de N.V.B. In 1924 kwam het tot een breuk tussen
                                    beide bonden. Er werden naderhand wel onderhandelingen gevoerd, maar er werd geen
                                    nieuw contract meer afgesloten.</p>

                                <p>In 1923 besloot de R.K.V.B. Breda uit de R.K.F. te stappen, aangezien zij zich niet
                                    kon verenigen met de bestaande katholieke voetbalorganisatie.<sup>32</sup> Alle
                                    aangesloten clubs traden toe de Brabantsche Voetbalbond, waarbij zij
                                    een &#8220;Belangenbond&#8221; instelden ter verdediging van hun belangen in de
                                    neutrale bond. Onder katholieke sportbestuurders wekte deze overstap veel
                                    beroering, want het verbrak de eenheid in het katholieke voetbal en het gaf een
                                    slecht voorbeeld aan de andere clubs, die ook wel ge&#239;nteresseerd waren in
                                    deelname aan de neutrale voetbalcompetitie. De neutrale voetbalwereld was
                                    evenmin gelukkig met deze ontwikkeling, want men vreesde dat het neutrale
                                    karakter van de&#160; Brabantsche Voetbalbond zou worden verzwakt. Na langdurig
                                    overleg besloten tal van katholieke clubs rondom Geertruidenberg in mei 1929
                                    terug te keren naar de R.K.V.B. Den Bosch als &#8220;district West
                                    Brabant&#8221;. Op 23 augustus 1930 werd de nieuwe R.K.V.B. Breda opgericht, die
                                    zich weer aansloot bij de R.K.F. en ook weer zelf competities ging organiseren.
                                </p>

                                <p>In augustus 1934 stelde de R.K.F. uniforme voorwaarden vast voor het aannemen van
                                    nieuwe verenigingen door de aangesloten bonden.<sup>33</sup> Het
                                    ging om de volgende regels:</p>
                                <p>1. de vereniging zal minstens 20 leden tellen;</p>
                                <p>2. zij zal over een eigen speelveld moeten kunnen beschikken;</p>
                                <p>3. zij zal een kleedgelegenheid moeten hebben op het terrein;</p>
                                <p>4. in plaatsen waar slechts een parochie is, wordt slechts een vereniging
                                    toegelaten.</p>
                                <p>Het bondsbestuur zal van deze bepalingen in bijzondere gevallen dispensatie kunnen
                                    verlenen. Waar op dergelijke plaatsen reeds meer dan een club bestaat, zal het
                                    bondsbestuur er naar streven dat deze clubs combineren.</p>

                                <p>Op 31 juli 1940 ging de R.K.F. op in de N.V.B., waarbij ook de vijf diocesane bonden
                                    werden opgeheven.</p>

                                <p><em>Competitie</em></p>

                                <p>Alle vijf diocesane Bonden organiseerden hun eigen competities, maar er ontstond al
                                    gauw behoefte aan een bovenregionale competitie en een landskampioenschap. In
                                    1916-1917 werden er twee Zuidelijke tweede klassen ingesteld met de sterkste clubs
                                    van de R.K.V.B. Breda en Den Bosch. Bredania (winnaar West) en Sparta Gestel
                                    (winnaar Oost) speelden na afloop van de competitie om de landstitel.</p>
                                <p>In 1918-1919 werden er zes tweede klassen geformeerd, nadat ook de beste teams van de
                                    R.K.U.V.B. in de Federatieve competitie waren toegelaten. De zes winnaars streden in
                                    een afvalsysteem om de landstitel. In 1920-1921 werd een aparte Overgangsklasse in
                                    het Zuiden ingesteld, waarvan de winnaar als landskampioen werd beschouwd. In
                                    1921-1922 bestond de competitie van de R.K.F. uit twee Overgangsklassen, zes tweede
                                    klassen en drie derde klassen. Vanaf 1925-1926 waren er drie Overgangsklassen (voor
                                    clubs uit de diocesen Utrecht en Haarlem) en twee eerste klassen (voor clubs uit de
                                    diocesen Den Bosch en Roermond). De winnaars van deze vijf poules streden om de
                                    landstitel. Onder deze klassen werden een aantal tweede klassen geformeerd. Later
                                    verviel de aanduiding Overgangsklassen en werd enkel gesproken over eerste klassen.
                                    In 1929 werd er ook een derde klasse ingesteld voor clubs uit Eindhoven en
                                    omstreken.</p>
                                <p>Tal van clubs hadden bezwaren tegen deze opzet, omdat de Bonden bepaalden welke
                                    ploegen voor promotie vanuit de diocesane naar de Federatieve competitie in
                                    aanmerking kwamen.<sup>34</sup> Zij hadden
                                    regelmatig kritiek op de indeling en het speelschema, dat niet altijd goed werd
                                    afgestemd met het wedstrijdprogramma van de diocesane competities. De clubs
                                    wilden graag een sterke landelijke bond &#224; la de K.N.V.B., maar de diocesane
                                    bonden wilden vasthouden aan hun macht en zelfstandigheid, waarbij zij gesteund
                                    werden door de kerkelijke instanties.</p>
                                <p>Op 24 april 1932 werd de Interdiocesane Voetbal-Competitie-Bond (I.V.C.B.) opgericht.
                                    Deze Bond kreeg als taak &#8220;de regeling en verzorging van de interdiocesane
                                    voetbalcompetities&#8221;, ofwel de landelijke competitie en de strijd om de
                                    landstitel. De I.V.C.B. had na enige hervormingen vijf afdelingen: Zuid I (Limburg),
                                    Zuid II (Noord-Brabant), Oost (Overijssel en Gelderland) en West I en II (Noord- en
                                    Zuid-Holland). Alle afdelingen hadden een eerste klasse en een tweede klasse en Zuid
                                    II vanaf 1934-1935 ook een derde klasse. De vijf kampioenen van de eerste klassen
                                    streden aan het einde van de competitie in een hele competitie om de landstitel.</p>
                                <p>Clubs konden niet zomaar toegelaten worden tot de I.V.C.B., want een tweedeklasser
                                    moest minimaal 25 leden hebben en een eersteklasser minimaal 35 leden. Ook mochten
                                    clubs &#8220;die voldoen aan de omschrijving bedrijfs-, fabrieks- en
                                    ondernemingsvereeniging&#8221; niet toetreden.</p>

                                <p>In 1940 werden de clubs van de I.V.C.B. merendeels ondergebracht in de tweede, derde
                                    en vierde klassen van de competitie van de N.V.B. De verenigingen uit de diocesane
                                    bonden werden verdeeld over de onderafdelingen, waarin zij gelegen waren.</p>

                                <p><em>Registratie van clubnamen</em></p>

                                <p>Volgens het contract met de N.V.B. liet de R.K.F. de registratie van clubnamen vanaf
                                    1917 over aan de N.V.B. Dit zal ongetwijfeld bij tal van katholieke clubs tot wrevel
                                    hebben geleid, want zij moesten hun oude vertrouwde clubnaam vervangen omdat die
                                    allang aan een neutrale club was vergeven. In de offici&#235;le bondsberichten en
                                    wedstrijdverslagen werden de oude en nieuwe namen ook wel naast elkaar gebruikt.</p>
                                <p>Na de breuk met de N.V.B. besloot het bestuur van de R.K.F. op 20 december 1925 de
                                    registratie van clubnamen zelf ter hand te nemen.<sup>35</sup> Alle
                                    clubs van de diocesen Utrecht, Haarlem, Den Bosch en Roermond werden in 1926
                                    geregistreerd door middel van publicatie in de <em>Sport illustratie</em>. Tal
                                    van katholieke clubs gingen bij deze nieuwe registratie terug naar de clubnamen
                                    die zij v&#243;&#243;r de registratie van de N.V.B. hadden
                                    bezeten.<sup>36</sup> Deze nieuwe, katholieke
                                    registratie werd echter niet volgehouden, zodat er naar verloop van tijd
                                    toch weer tal van clubs met dezelfde namen in de competities opdoken. De
                                    R.K.F. besloot in 1933 de registratie te hervatten, maar deze kwam door
                                    geringe medewerking van de diocesane bonden traag op gang.<sup>37</sup>
                                </p>
                                <p>In 1936 werd door de algemene vergadering van de R.K.F. de volgende regels over de
                                    registratie van clubnamen aangenomen:</p>

                                <p>Art. 27 a. De bonden verplichten zich de namen der bij hen aangesloten vereenigingen
                                    door de R.K.F. te doen registreeren. De R.K.F. registreert slechts eenmaal een en
                                    dezelfden naam.</p>
                                <p>(Art. 27 b. Over inzending clubnaam en administratie.).</p>
                                <p>Art. 27 c. Ingeval van naamwijziging of vervallenverklaring van het lidmaatschap
                                    wordt het registratieformulier door den betrokken bond aan de R.K.F. geretourneerd,
                                    met aanteekening van de reden, welke tot afvoering van den geregistreerde naam
                                    aanleiding geeft. De annuleering der registratie van den betreffenden naam wordt
                                    onder het officieel nieuws van de R.K.F. gepubliceerd.</p>
                                <p>Art. 27 d. Indien zich twee vereenigingen aanmelden met denzelfden naam, zal de naam
                                    van die vereeniging geregistreerd worden, welke het langst de koninklijke
                                    goedkeuring heeft verkregen. Ontbreekt die, dan beslist het bestuur der R.K.F.</p>
                                <p>Overgangsbepalingen:</p>
                                <ol>
                                    <li>De registratie, welke reeds door de R.K.F. plaats gevonden heeft, blijft
                                        onveranderd van kracht.
                                    </li>
                                    <li>De bonden dragen zorg, dat de namen der nog niet geregistreerde vereenigingen
                                        binnen &#233;&#233;n maand na het in werking treden van vorenstaande
                                        reglementsbepalingen ter registratie zijn ingezonden.
                                    </li>
                                </ol>
                                <p>De registratie geschiedt aan de hand van den datum van oprichting. Is deze niet
                                    bekend, dan wordt de datum van toetreding tot den bond als datum van oprichting
                                    beschouwd. Het recht van voorrang gaat verloren, indien de inzending niet is
                                    geschied binnen den termijn onder 2 genoemd.</p>

                                <p>In de zomer van 1937 werden de eerste lijsten van erkende clubnamen in de <em>Sport
                                    illustratie</em> gepubliceerd. Vanaf dat moment werden de nieuwe en afgevallen
                                    clubnamen wel officieel bijgehouden en bekend gemaakt. Alleen de R.K.U.V.B. bleef
                                    slecht meewerken, omdat deze bond wenste te volstaan met een eigen administratie van
                                    clubnamen.</p>

                                <p><em>Officieel orgaan</em></p>

                                <p>Van oktober 1914 tot en met december 1920 publiceerde de R.K.F. en de diocesane
                                    bonden hun mededelingen in <em>Ons Sportblad</em>. Vanaf januari 1921 heette dit
                                    orgaan de <em>Sport illustratie</em>. Het bevatte hoofdzakelijk artikelen over
                                    voetbal, maar af en toe werden ook berichten over katholieke gymnastiek- en
                                    korfbalclubs opgenomen. Vanaf oktober 1935 bestond er een noordelijke en een
                                    zuidelijke editie van <em>Sport illustratie</em> om de hoeveelheid nieuws beter te
                                    kunnen verwerken.<sup>38</sup> Beide edities
                                    hadden een gemeenschappelijke gedeelte met algemene voetbalberichten en het
                                    overzicht van de I.V.C.B.-competitie, maar in de noordelijke editie stonden
                                    enkel de offici&#235;le mededelingen van de R.K.U.V.B. en de D.H.V.B. en in de
                                    zuidelijke editie die van de R.K.V.B. Breda en Den Bosch en de R.K.L.V.B. De
                                    aparte delen werden aangeduid met een N of Z achter het paginanummer.</p>


                                <h4 id="chris">De christelijke voetbalorganisatie</h4>

                                <p>Onder protestanten stond voetbal niet hoog aangeschreven, want velen onderschreven de
                                    stelling: wie sport, gaat niet naar de kerk, en wie naar de kerk gaat, sport niet.
                                    Men had ernstige bezwaren tegen het voetballen op zondag en ook tegen de aandacht
                                    voor wedstrijden en individuele prestaties van voetballers in de pers, die als
                                    overdreven en als persoonsverheerlijking werd afgewezen. Toch ontstonden er
                                    christelijke voetbalclubs.</p>
                                <p>In juni 1919 werd de Nederlandsch Christelijke Voetbalbond in Amsterdam opgericht.
                                    Deze organisatie telde ondanks haar benaming hoofdzakelijk clubs uit Amsterdam,
                                    Hilversum en Zaandam. Zij organiseerde enige jaren een competitie, totdat er te
                                    weinig clubs over waren. Dit leidde ertoe dat de Bond op 10 juli 1922 formeel werd
                                    opgeheven.</p>
                                <p>Sommige christelijke voetbalclubs speelden noodgedwongen mee in een regionale
                                    neutrale voetbalbond of een kantoorvoetbalbond. Alleen in Groningen, Amsterdam en
                                    Rotterdam bestonden er in 1925 aparte christelijke voetbalbonden.</p>
                                <p>In 1925 begon <em>Lichaamsoefening</em>, het sportblad voor christelijke sport, een
                                    actie om een landelijke voetbalbond op te richten, resulterend in de instelling van
                                    een speciaal comit&#233;. Dit comit&#233; besloot tijdens een vergadering te Utrecht
                                    op 6 maart 1926 tot de oprichting van een Nederlandsche Christelijke Voetbalbond. De
                                    Bond zou een federatief karakter moeten krijgen en had als doel het voetbal op
                                    werkdagen bevorderen. Het was de bedoeling dat er tenminste acht districten zouden
                                    komen met Amsterdam, Arnhem, Dordrecht, Den Haag, Groningen, Leiden, Rotterdam en
                                    Utrecht. Ook ditmaal bloedde het initiatief dood, maar er bleef alom de wens bestaan
                                    het christelijke voetbal apart te organiseren.</p>

                                <p>Op 26 januari 1929 werd de Nederlandsche Zaterdagmiddag Voetbal-Bond (N.Z.V.B.)
                                    opgericht op een bijeenkomst in het C.J.M.V.-gebouw in Utrecht. Deze naam geeft aan
                                    dat de bond ook open zou staan voor niet-christelijke voetbalclubs. Na een nieuwe
                                    enqu&#234;te onder de belangstellende verenigingen werd besloten de bond toch op
                                    christelijke grondslag te vestigen. In het najaar van 1929 werd de naam dan ook
                                    veranderd in Christelijke Nederlandsche Voetbalbond (verder C.N.V.B.),
                                    waarschijnlijk naar voorbeeld van de C.K.B. (de Christelijke Korfbalbond) en om
                                    verwarring met de neutrale onderbond N.C.V.B. te vermijden. Er werd in 1929-1930 al
                                    met een competitie begonnen in de districten Utrecht en Zwolle. Tevens werden er
                                    onderhandelingen gevoerd met de Rotterdamsche Christelijke Voetbalbond, maar het
                                    duurde tot 1934 voordat deze bond onder bepaalde voorwaarden zou
                                    toetreden.<sup>39</sup></p>
                                <p>De C.N.V.B. bereikte in de jaren 1934-1936 de grootste omvang en telde toen 15
                                    afdelingen:</p>
                                <p>Afdeeling I: Utrecht; II: Zwolle; III Twente-West; IV Noord-Holland (later
                                    West-Friesland); V Amsterdam; VI Drenthe; VII Friesland; VIII Twente-Oost, IX
                                    Noord-Brabant; X Apeldoorn; XI Veluwe West; XII Gelderland Zuid; XIII Zeeland; XIV
                                    Arnhem en XV Gelderland Oost en district Rotterdam. In de praktijk heeft Afdeeling
                                    IX enkel in 1933-1934 bestaan, maar de telling werd nadien niet aangepast.</p>
                                <p>In 1936 verdween de Afdeeling Veluwe West en in 1937-1938 werden Twente West en Oost
                                    gecombineerd tot Afdeeling Twente. Vanaf 1938-1939 werd de nummering losgelaten en
                                    bestonden enkel nog de Afdeeling Utrecht; Zwolle; Amsterdam; Friesland; Twente;
                                    Apeldoorn; Zuid-Gelderland; Groningen en Rotterdam.</p>
                                <p>Tal van christelijke clubs hebben zich nooit bij de C.N.V.B. aangesloten, omdat zij
                                    liever in de zaterdagmiddag-competities van hun plaatselijke neutrale bond bleven
                                    spelen. Dit gold met name voor de regio Den Haag en Leiden. Voor zover bekend heeft
                                    de C.N.V.B. nooit een offici&#235;le registratie van clubnamen gehad.</p>

                                <div><img
                                    title="Voetbal op lager niveau. Een spelmoment uit de Schiedamse derby Pro Patria &#8211; Velocitas zonder doelnetten en publiek. De wedstrijd werd in januari 1930 gespeeld voor de eerste klasse van de Rotterdamsche Christelijke Voetbalbond. Bron: Lichaamsoefening 23 jan. 1930, p. 43."
                                    alt="Voetbal op lager niveau. Een spelmoment uit de Schiedamse derby Pro Patria &#8211; Velocitas zonder doelnetten en publiek. De wedstrijd werd in januari 1930 gespeeld voor de eerste klasse van de Rotterdamsche Christelijke Voetbalbond. Bron: Lichaamsoefening 23 jan. 1930, p. 43."
                                    src="http://www.historici.nl/media/verenigingsleven_sport/jpg/klein/wedstrijdProPatria_Velocitas.jpg"/>
                                    <div className="picSubScript">Voetbal op lager niveau. Een spelmoment uit de Schiedamse derby Pro Patria &#8211; Velocitas zonder doelnetten en publiek. De wedstrijd werd in januari 1930 gespeeld voor de eerste klasse van de Rotterdamsche Christelijke Voetbalbond. Bron: Lichaamsoefening 23 jan. 1930, p. 43.</div>
                                    <img
                                    title="Voetbal in volle glorie. Een foto van de Rotterdamse derby Sparta &#8211; Feyenoord voor &#8220;een slordige 20.000 menschen&#8221; op Spangen in oktober 1936. Bron: Sport in beeld/Revue der sporten 12 okt. 1936, p. 1 (foto) en 8 (toelichting)."
                                    alt="Voetbal in volle glorie. Een foto van de Rotterdamse derby Sparta &#8211; Feyenoord voor &#8220;een slordige 20.000 menschen&#8221; op Spangen in oktober 1936. Bron: Sport in beeld/Revue der sporten 12 okt. 1936, p. 1 (foto) en 8 (toelichting)."
                                    src="http://www.historici.nl/media/verenigingsleven_sport/jpg/klein/wedstrijdfeyenoord1936.jpg"/>
                                    <div className="picSubScript">Voetbal in volle glorie. Een foto van de Rotterdamse derby Sparta &#8211; Feyenoord voor &#8220;een slordige 20.000 menschen&#8221; op Spangen in oktober 1936. Bron: Sport in beeld/Revue der sporten 12 okt. 1936, p. 1 (foto) en 8 (toelichting).</div>
                                </div>

                                <p>Op 31 juli 1940 ging de C.N.V.B. op in de N.V.B. De algemene ledenvergadering van de
                                    C.N.V.B. keurde op 10 augustus 1940 de fusie goed, maar met een
                                    voorbehoud: &#8220;De fusie is voorlopig voor een jaar aangegaan. In dat jaar moet
                                    de verdere uitwerking en voltooiing plaats vinden, en de N.V.B. heeft in dit eerste
                                    jaar te bewijzen, dat het haar ernst is met de regelingen, die zij voor het
                                    bijzondere voetbal in het leven geroepen heeft.&#8221;<sup>40</sup> De
                                    C.N.V.B. is echter nooit meer heropgericht; er werd op 5 oktober 1940 enkel de
                                    Vereeniging van Christelijke Voetbalclubs, een belangenvereniging voor
                                    christelijke voetbalclubs, in het leven geroepen.<sup>41</sup>
                                </p>

                                <p><em>Competitie</em></p>

                                <p>De C.N.V.B. organiseerde een competitie in alle afdelingen zonder dat er aan een
                                    landskampioenschap werd gedacht. Het bondsbestuur liet op de jaarvergadering van 6
                                    augustus 1932 weten &#8220;dat men niet te vinden was voor wedstrijden om het
                                    landskampioenschap, zulks omdat men wil accentueeren, dat de voetbalwedstrijden
                                    eenvoudig moeten blijven en niet mogen worden uitgetild boven hun eigenlijke
                                    beteekenis. Willen twee nabijgelegen districten eens de krachten meten, dan is
                                    daartegen geen overwegend bezwaar.&#8221;<sup>42</sup></p>
                                <p>Het lukte niet om aan deze opstelling vast te houden. Vanaf 1933-1934 werd er wel om
                                    het landskampioenschap gespeeld volgens een knockout-systeem tussen de
                                    afdelingskampioenen met &#233;&#233;n thuis- en uitwedstrijd. Het bondsbestuur
                                    stelde dat deelname aan het titeltoernooi niet verplicht was en dat clubs zich
                                    desgewenst konden beperken tot &#233;&#233;n wedstrijd op neutraal
                                    terrein.<sup>43</sup> D.E.S. Nijverdal werd in augustus 1934 de
                                    eerste kampioen van de C.N.V.B. door een 5-3 overwinning op D.V.V.
                                    Utrecht.<sup>44</sup></p>

                                <p>Naast de competitie organiseerde de C.N.V.B. vanaf 1932 op Tweede Pinksterdag de
                                    Bondsdag, een groot eendaags toernooi, naar voorbeeld van de C.K.B.<sup>45</sup> In
                                    de laatste jaren werden er aparte Bondsdagen voor het westen en het oosten
                                    gehouden, omdat het aantal deelnemers te groot was geworden voor &#233;&#233;n
                                    toernooi.</p>

                                <p><em>Officieel orgaan</em></p>

                                <p>De C.N.V.B. gebruikte van januari 1929 tot en met juli 1937 <em>Lichaamsoefening.
                                    Uitgave van de Christelijke organisaties voor lichamelijke oefening</em> als
                                    officieel orgaan. De Bond deelde dit blad met het N.C.G.V. en de C.K.B. Zij begon in
                                    oktober 1937 met een eigen orgaan met <em>De CNVB&#8217;er. Officieel orgaan van den
                                        Christelijke Nederlandsche Voetbalbond</em>. Dit blad verscheen op 23 oktober
                                    1940 voor het laatst, omdat de Bond inmiddels was opgegaan in de N.V.B.</p>


                                <h4 id="soc">De socialistische voetbalorganisatie</h4>

                                <p>In 1922 benoemde het Nederlandsch Vakverbond een commissie voor onderzoek naar het
                                    maatschappelijk werk. Deze commissie besteedde ook aandacht aan het oprichten van
                                    een eigen centrale sportbond, maar zij achtte dit meer een zaak van de A.J.C.
                                    (Arbeiders Jeugd Centrale), &#8220;aangezien de sport vooral door de jongere
                                    arbeiders (-sters) beoefend wordt.&#8221; In 1925 werd een Comit&#233; voor de
                                    Arbeiderssport opgericht, dat zich inzette om een arbeiderssportbond op te richten,
                                    zoals elders in het buitenland al gebeurd was. Dit resulteerde op 19 december 1926
                                    in de oprichting van de Nederlandse Arbeiders Sportbond (verder N.A.S.B.) in een
                                    bovenzaal van caf&#233; De Pool op het Damrak te Amsterdam.<sup>46</sup> Deze
                                    bond bestond uit plaatselijke afdelingen, die allerlei sporten aan hun
                                    socialistische achterban konden aanbieden, zoals ondermeer gymnastiek, voetbal,
                                    korfbal en handbal.</p>
                                <p>Vanaf 1927 werd in de afdeling Amsterdam al gevoetbald, maar de groei van de
                                    voetbaltak ging langzaam door de grote afstanden tussen de afdelingen. Wanneer er in
                                    een afdeling veel voetballers kwamen, kon het afdelingsbestuur meerdere clubs laten
                                    instellen. Minstens vijf afdelingen konden een district vormen, waarna zij een
                                    gezamenlijke competitie konden beginnen voor hun clubs. De belangrijkste districten
                                    waren Groningen en Drenthe, Overijssel, Gelderland, Noord-Holland en Zuid-Holland,
                                    maar het aantal deelnemende clubs bleef altijd bescheiden. Voor voetballers uit
                                    socialistische kring waren neutrale clubs al gauw een goed alternatief, omdat die
                                    lage contributies en tegenstanders in de naaste omgeving boden.<sup>47</sup> De
                                    afdeling Assen speelde vanaf de oprichting in 1927 onder de naam Upward mee in
                                    de Drentsche Voetbalbond, maar ging in 1929 alsnog over naar de socialistische
                                    bondscompetitie.</p>
                                <p>Op 31 juli 1940 ging de voetbaltak van de N.A.S.B. op in de N.V.B., waarna de
                                    resterende clubs in de diverse Onderafdeelingen werden ingedeeld.<sup>48</sup>
                                </p>

                                <p><em>Competitie</em></p>

                                <p>In 1929-1930 waren er voetbalcompetities in district 1 (Groningen en Drenthe),
                                    district 2 (Overijssel), district 3 (Gelderland), district 8 (Zuid-Holland) en
                                    district 9 (Noord-Holland). In 1934-1936 bereikte de afdeling voetbal van de
                                    N.A.S.B. zijn grootste omvang met competities in district 1 (Groningen en Drenthe),
                                    2 (Overijssel), 3 (Gelderland), 4 (Limburg), 5 en 9 (Noord-Holland), 6 en 8
                                    (Zuid-Holland), 7 (Utrecht), 9 (Hoorn en omstreken), 10 (Friesland) en 11
                                    (Overijssel). Na 1936 liep het aantal districten echter steeds meer terug. In
                                    1939-1940 waren er enkel nog competities in Noord-Holland en Zuid-Holland. Vanaf
                                    1933-1934 werd er elk seizoen gespeeld om het bondskampioenschap, waarbij alle
                                    winnaars van de eerste klassen van de diverse districten mochten deelnemen.</p>

                                <p><em>Officieel orgaan</em></p>

                                <p>Vanaf 1 mei 1928 gaf de N.A.S.B. een eigen orgaan uit genaamd <em>Arbeiderssport</em>.
                                    Dit verscheen vanaf maart 1929 eenmaal in de veertien dagen en vanaf oktober 1929
                                    wekelijks. In dit blad stonden alle offici&#235;le mededelingen van alle takken van
                                    sport binnen de bond en berichten uit de verschillende afdelingen. Het laatste
                                    nummer verscheen op 10 mei 1940.</p>


                                <hr className="dividerline"/>
                                <h4>Noten:</h4>
                                <div className="notenLijst">
                                    <div>
                                        1) Cohen, <em>Geschiedenis Voetbal</em>, p. 124. Bos, <em>Twentse ros</em>, p.
                                        11-12. Beiden geven geen bronvermeldingen.
                                    </div>
                                    <div>
                                        2) <em>Nederlandsche Sport</em> 8 sep. 1883, p. 4 (aankondiging) en Idem 6 okt.
                                        1883, p. 3 (verslag oprichtingsvergadering in Utrecht).
                                    </div>
                                    <div>
                                        3) Voor een biografie van Mulier: <em>BWN </em>I, p. 411-412. Voor een kritische
                                        beschouwing over Mulier en HFC als eerste voetballers: Nico van Horn, &#8216;125
                                        jaar voetbal in Nederland?&#8217;, in: <em>De Sportwereld</em> 35 (2004), p.
                                        8-14.
                                    </div>
                                    <div>
                                        4) Zie bijvoorbeeld <em>Het Sportblad </em>26 sep. 1889, p. 20.
                                    </div>
                                    <div>
                                        5) <em>Nederlandsche Sport</em> 8 okt. 1887, p. 9 en Idem 22 okt. 1887, p. 10.
                                    </div>
                                    <div>
                                        6) <em>Nederlandsche Sport</em> 19 nov. 1887, p. 7.
                                    </div>
                                    <div>
                                        7) <em>Nederlandsche Sport</em> 7 juli 1888, p. 14. Noppen stelde later dat hij
                                        het
                                        ontwerp een jaar eerder (dus in 1887) had opgesteld; <em>Nederlandsche
                                        Sport </em>15
                                        dec. 1888, p. 8.
                                    </div>
                                    <div>
                                        8) <em>Nederlandsche Sport</em> 15 dec. 1888, p. 8.
                                    </div>
                                    <div>
                                        9) <em>Nederlandsche Sport</em> 19 okt. 1889, p. 12 (aankondiging) en Idem 9
                                        nov.
                                        1889, p. 11 (uitnodiging).
                                    </div>
                                    <div>
                                        10) <em>Nederlandsche Sport</em> 23 nov. 1889, p. 10-12.
                                    </div>
                                    <div>
                                        11) <em>Nederlandsche Sport</em> 14 dec. 1889, p. 10.
                                    </div>
                                    <div>
                                        12) De rechtsgebieden worden beschreven in <em>Voetbal Jaarboekje 1936-1937</em>,
                                        p.
                                        287-310. De Geldersche Voetbalbond ontbreekt hier merkwaardig genoeg.
                                    </div>
                                    <div>
                                        13) <em>Nederlandsche Sport</em> 15 dec. 1888, p. 8.
                                    </div>
                                    <div>
                                        14) <em>Sportkroniek</em> 28 sep. 1921, p. 186 (Amsterdam). <em>Haagsche
                                        Voetbalbond. Jubileumboek bij het veertigjarig bestaan (1894-1934)</em>, p. 39.
                                        De
                                        minimumeis van de H.V.B. van 50 leden werd in 1937 ook geldig voor
                                        Delft; <em>Sportkroniek </em>15 mrt. 1937, p. 339.
                                    </div>
                                    <div>
                                        15) <em>Sportkroniek </em>17 aug. 1933, p. 875.
                                    </div>
                                    <div>
                                        16) <em>Het Sportblad </em>28 juni 1906, p. 20; Idem 19 juli 1906, p. 2 en Idem
                                        1
                                        okt. 1908, p. 17 (Amsterdam). <em>Het Sportblad </em>6 juli 1906, p. 6
                                        (Rotterdam).
                                    </div>
                                    <div>
                                        17) <em>Sportkroniek </em>16 juli 1925, p. 781.
                                    </div>
                                    <div>
                                        18) <em>Nederlandsche Sport </em>7 juli 1888, p 14.
                                    </div>
                                    <div>
                                        19) <em>Voetbal Jaarboekje 1937-1938</em>, p. 171-175, citaat op 173.
                                    </div>
                                    <div>
                                        20) <em>Het Sportblad </em>11 nov. 1904, p. 7 en Idem 25 nov. 1904, p.
                                        9. <em>Sportkroniek </em>17 nov. 1904, p. 286.
                                    </div>
                                    <div>
                                        21) <em>O.M. van den N.V.B.</em> 16 aug. 1909, p. 4-5.
                                    </div>
                                    <div>
                                        22) <em>O.M. van den N.V.B.</em> 24 jan. 1911, p. 2.
                                    </div>
                                    <div>
                                        23) <em>O.M. van den N.V.B.</em> 8 aug. 1911, p. 2-3.
                                    </div>
                                    <div>
                                        24) <em>O.M. van den N.V.B.</em> 5 feb. 1912, p. 4, gedrukt in <em>Voetbal
                                        Jaarboekje 1937-1938</em>, p. 175.
                                    </div>
                                    <div>
                                        25) <em>Sportkroniek </em>4 okt. 1923, p. 1420.
                                    </div>
                                    <div>
                                        26) <em>Sportkroniek </em>26 aug. 1929, p. 1079.
                                    </div>
                                    <div>
                                        27) <em>Het Sportblad </em>13 okt. 1910, p. 5 (Amsterdam). Idem 20 okt. 1910, p.
                                        8-9
                                        (Rotterdam).
                                    </div>
                                    <div>
                                        28) Derks en Budel, <em>Sportief en katholiek</em>, p. 37-42.
                                    </div>
                                    <div>
                                        29) Binck verklaarde later dat hij met zeven jongens van het Bredania op 27 nov.
                                        1914 de voetbalclub Bredania had opgericht; <em>Jaarboekje R.K.F. 1918-1919</em>,
                                        p.
                                        11. Derks en Budel, <em>Sportief en katholiek</em>, p. 39 zeggen dat Bredania
                                        een
                                        omvorming van de bestaande club Vitesse was.
                                    </div>
                                    <div>
                                        30) <em>De Maasbode </em>26 nov. 1915, p. 27-28, besproken in Derks en
                                        Budel, <em>Sportief
                                        en katholiek</em>, p. 38-39. Zij suggereren dat de oprichting van de Bond na de
                                        publicatie in <em>De Maasbode </em>plaats vond.
                                    </div>
                                    <div>
                                        31) Derks en Budel, <em>Sportief en katholiek</em>, p. 44.
                                    </div>
                                    <div>
                                        32) Derks en Budel, <em>Sportief en katholiek</em>, p. 51-56.
                                    </div>
                                    <div>
                                        33) <em>Sport illustratie </em>21 aug. 1934, p. 958.
                                    </div>
                                    <div>
                                        34) <em>Sport illustratie </em>19 mei 1925, p. 316.
                                    </div>
                                    <div>
                                        35) <em>Sport illustratie </em>22 dec. 1925, p. 808.
                                    </div>
                                    <div>
                                        36) <em>Sport illustratie </em>27 apr. 1926, p. 269 (Haarlem); Idem 4 mei 1926,
                                        p.
                                        284 (Roermond); Idem 11 mei 1926, p. 301 en 5 okt. 1926, p. 644 (Utrecht) en
                                        Idem 9
                                        nov. 1926, p. 824 (Den Bosch).
                                    </div>
                                    <div>
                                        37) Jaarverslag R.K.F. over 1933-1934, gepubliceerd in <em>Sport
                                        illustratie</em> 7
                                        aug. 1934, p.<em> </em>904.
                                    </div>
                                    <div>
                                        38) <em>Sport illustratie </em>29 okt. 1935 is het eerste nummer met de N en Z
                                        pagina&#8217;s.
                                    </div>
                                    <div>
                                        39) Bericht over de fusie C.N.V.B. en R.C.V.B. in <em>Lichaamsoefening </em>30
                                        mrt.
                                        1933, p. 161-162. De R.C.V.B. bleef financieel onafhankelijk en regelde
                                        zelfstandig
                                        contributies en competities; <em>Lichaamsoefening </em>24 aug. 1933, p. 383 en
                                        Idem
                                        30 aug. 1934, p. 440.
                                    </div>
                                    <div>
                                        40) <em>De C.N.V.B&#8217;er </em>21 aug. 1940, p. 1-2 en 3 (citaat).
                                    </div>
                                    <div>
                                        41) <em>De C.N.V.B&#8217;er </em>9 okt. 1940, p. 2-3.
                                    </div>
                                    <div>
                                        42) <em>Lichaamsoefening </em>11 aug. 1932, p. 371-372, citaat op 372.
                                    </div>
                                    <div>
                                        43) <em>Lichaamsoefening </em>14 dec. 1933, p. 576.
                                    </div>
                                    <div>
                                        44) <em>Lichaamsoefening </em>30 aug. 1934, p. 437.
                                    </div>
                                    <div>
                                        45) <em>Lichaamsoefening </em>19 mei 1932, p. 248-251 (verslag eerste Bondsdag).
                                    </div>
                                    <div>
                                        46) Dona, <em>Sport en socialisme</em>, p. 17, 24-25.
                                    </div>
                                    <div>
                                        47) Dona, <em>Sport en socialisme</em>, p. 106-109 en 161-162.
                                    </div>
                                    <div>
                                        48) Dona, <em>Sport en socialisme</em>, p. 246-247.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
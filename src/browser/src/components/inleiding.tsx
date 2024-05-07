import React from "react";
import {useNavigate} from "react-router-dom";
import colijn from '../assets/img/colijn.jpg';
import voetbalplaatjes from '../assets/img/voetbalplaatjes.jpg';

export function Inleiding() {
    const nav = useNavigate();

    return (
        <div className="hcContentContainer hcMarginTop5 hcMarginBottom5">
            <div className="hcBasicSideMargin">
                <h1>Inleiding</h1>
                <p>Sport is niet meer uit de moderne samenleving weg te denken. Tallozen trekken naar sporthallen en
                    sportvelden om zelf te sporten of om anderen te zien sporten. Dat is opmerkelijk, want zo lang
                    bestaat de moderne sportbeoefening niet. De meeste sporten werden pas tussen circa 1860 en 1910 voor
                    het eerst in Nederland beoefend. Zij kregen ook in dit tijdvak hun neutrale landelijke bond en
                    competities. De meeste beoefenaars kwamen uit de hogere standen van de samenleving, want die hadden
                    als enigen tijd en geld om aan sport te doen.</p>
                <p>Tijdens de Eerste Wereldoorlog beleefde de sport de grote doorbraak naar de lagere maatschappelijke
                    standen. Tal van jongemannen maakten toen tijdens hun mobilisatie kennis met sport. Zij gingen na
                    afloop van hun diensttijd vaak sportclubs oprichten in hun woonplaats. In de periode 1910-1929 werd
                    de sport ook ingekapseld in de &#8220;verzuiling&#8221; door de komst van protestantse, katholieke
                    en socialistische sportbonden. De meeste sportbonden vertegenwoordigden &#233;&#233;n tak van sport
                    of soms voor langere tijd twee sporten (voetbal en atletiek; hockey en bandy). Alleen de N.A.S.B.
                    vormde een uitzondering, want deze socialistische sportbond vertegenwoordigde meerdere takken van
                    sport, vari&#235;rend van voetbal, korfbal, handbal, tot kanosport, schaken en zweefvliegen.</p>
                <p>De landelijke overheid had nog niet veel belangstelling voor de sport, want zij zag af van geldelijke
                    ondersteuning voor de Olympische Spelen in Amsterdam. Diverse grote gemeenten zagen wel een
                    maatschappelijk belang in sport, resulterend in de aanleg van tal van sportaccommodaties. Ook in de
                    landelijke en regionale pers werd steeds meer aandacht aan sport besteed. Er verschenen zelfs
                    periodieken die zich geheel en al op &#233;&#233;n of meerdere takken van sport richtten. Dit alles
                    leidde ertoe dat sport steeds meer geaccepteerd werd in de samenleving. Het is in dit verband ook
                    tekenend dat de belangrijkste neutrale sportbonden tussen 1929 en 1940 het
                    predikaat &#8220;Koninklijk&#8221; verkregen.</p>
                <p><img
                    title="Z.Exc. H. Colijn gaf den aftrap bij de voetbaldemonstratie op den landdag van den Geref. Jeugdraad, onlangs gehouden.  Bron: Lichaamsoefening 3 juli 1930, p. 355."
                    alt="Z.Exc. H. Colijn gaf den aftrap bij de voetbaldemonstratie op den landdag van den Geref. Jeugdraad, onlangs gehouden.  Bron: Lichaamsoefening 3 juli 1930, p. 355."
                    height="530"
                    src={colijn}
                    width="400"/>
                    <div className="picSubScript">Z.Exc. H. Colijn gaf den aftrap bij de voetbaldemonstratie op den landdag van den Geref. Jeugdraad, onlangs gehouden.  Bron: Lichaamsoefening 3 juli 1930, p. 355.</div>
                </p>
                <p>De groei van de sportbeoefening in Nederland ging overigens niet zonder horten of stoten. Tal van
                    regionale bonden en clubs werden opgericht &#233;n ontbonden of verdwenen door fusies. Alleen is de
                    opkomst en de ondergang van deze bonden en clubs nooit goed in beeld gebracht, doordat ook bij de
                    bestudering van de sport altijd de meeste aandacht is besteed aan de winnaars.</p>

                <p>In 2006 verscheen het <em>Bibliografisch apparaat voor de Nederlandse sportgeschiedenis</em>. Dit
                    werk geeft 7656 titels over sportieve onderwerpen, veelal biografie&#235;n van bekende sporters en
                    jubileumboeken van sportclubs. Deze zijn veelal geschreven door professionele sportjournalisten en
                    enthousiaste clubleden.</p>
                <p>Historici blijken zich nog weinig verdiept te hebben in de opkomst van de sport in Nederland. Als zij
                    over sportbonden schreven, dan besteedden zij vooral aandacht aan de ideologische aspecten en
                    nauwelijks aan de aangesloten clubs. Dat is merkwaardig, want bepaalde historische ontwikkelingen
                    sinds circa 1850 zijn met behulp van voorbeelden uit de sport goed te illustreren. Denk in dit
                    verband aan de opkomst van de arbeidersbeweging, de verzuiling van de samenleving, de emancipatie
                    van de vrouw, de invulling van de vrije tijd, de verhouding tussen landelijke en lokale politiek en
                    sportbonden en sportclubs (subsidies voor de aanleg van sportaccommodaties) en de nauwe banden
                    tussen het bedrijfsleven en de sport (bedrijfssportverenigingen, reclame via sporthelden).</p>

                <p>Bij de bestudering van de ontwikkeling van de sport in Nederland is het belangrijk om &#8220;harde
                    feiten&#8221; te bezitten. Wanneer werden sportbonden en sportclubs opgericht en waar waren zij
                    gevestigd? Hoeveel bonden en clubs waren op neutrale basis of op confessionele grondslag gevestigd?
                    Hoeveel beoefenaars telden de afzonderlijke sporten? Waren het elite-sporten of echte volkssporten?
                    In de bestaande literatuur worden zulke vragen niet of nauwelijks beantwoord.</p>

                <p>Het Huygens Instituut voor Nederlandse Geschiedenis levert met de databank <em>Sportbonden,
                    sportclubs en sportperiodieken in Nederland tot en met 1940</em> dergelijke &#8220;harde
                    feiten&#8221; voor de volgende zes sporten:</p>
                <div className="sportList">
                    <div className="sportListItem" onClick={() => {
                        nav('/gymnastiek')
                    }}>Gymnastiek
                    </div>
                    <div className="sportListItem" onClick={() => {
                        nav('/hockey')
                    }}>Hockey
                    </div>
                    <div className="sportListItem" onClick={() => {
                        nav('/korfbal')
                    }}>Korfbal
                    </div>
                    <div className="sportListItem" onClick={() => {
                        nav('/schaken')
                    }}>Schaken
                    </div>
                    <div className="sportListItem" onClick={() => {
                        nav('/tennis')
                    }}>Tennis
                    </div>
                    <div className="sportListItem" onClick={() => {
                        nav('/voetbal')
                    }}>Voetbal
                    </div>
                </div>
                <p>In de databank zijn gegevens opgenomen over de landelijke en plaatselijke bonden van deze sporten en
                    hun bondsbladen &#233;n zoveel mogelijk clubs die de zes sporten beoefenden. Voor alle zes sporten
                    is een aparte inleiding, waarin de ontwikkeling van de sport tot 1940 kort wordt aangegeven. Hier
                    kan de gebruiker lezen wanneer de landelijke bonden werden opgericht en waar hun offici&#235;le
                    mededelingen (wedstrijdprogramma, toetreding van nieuwe clubs, ledenlijsten etc.) werden
                    gepubliceerd. Ook worden de onderbonden genoemd die in 1940 bestonden.</p>

                <p>Als einddatum voor het onderzoek is gekozen voor de fusie van alle aparte voetbalbonden
                    tot &#233;&#233;n landelijke Nederlandsche Voetbalbond op 1 augustus 1940. Dit is beslist een
                    breekpunt in de sportgeschiedenis: voetbal was altijd de meest populaire sport in Nederland en deze
                    fusie bleek het einde voor voetbalbonden op confessionele en socialistische grondslag. Ook voor de
                    andere sporten is 1940 een bruikbaar eindpunt, aangezien de confessionele bonden tijdens de Duitse
                    bezetting niet langer zelfstandig meer mochten optreden.</p>
                <p>Voor de oprichting van clubs is gemakshalve als einddatum 31 december 1940 aangehouden. Dit gaf de
                    mogelijkheid om de gebruiker alle deelnemers van de competities van 1940-1941 en hun nieuwe
                    afdelingen te presenteren.</p>

                <h4>Verantwoording voor de keuze van de sporten</h4>

                <p>Het was bij de start van het project duidelijk dat de databank meerdere sporten moest bevatten en
                    over een langere periode moest gaan. Dit geeft immers de mogelijkheid om vergelijkingen tussen
                    takken van sport te maken en om ontwikkelingen in de tijd te achterhalen. De keuze voor gymnastiek,
                    hockey, korfbal, schaken, tennis en voetbal is beslist niet willekeurig. Het gaat in de eerste
                    plaats om sporten die vandaag de dag nog altijd veel beoefenaars hebben. Bovendien bieden zij
                    meerdere interessante onderlinge tegenstellingen. Het betreft sporten die door de elite werden
                    beoefend of door &#8220;het gehele volk&#8221;, om sporten apart beoefend door mannen of vrouwen of
                    gemengde sporten, om sporten die &#233;&#233;n landelijke bond hadden of sporten met meerdere
                    landelijke bonden (neutraal, katholiek en protestants-christelijk). Verder zijn het alle sporten
                    waarvan de neutrale landelijke bond v&#243;&#243;r 1940 het
                    predikaat &#8220;Koninklijk&#8221; kreeg. Deze onderscheidingen geven aan dat deze sporten algemeen
                    maatschappelijke waardering hadden gekregen.</p>

                <p><img
                    title="Een goed voorbeeld van de symbiose tussen sport en commercie. Advertentie van een album met 156 plaatjes van alle eerste en tweede klasse elftallen in de competitie 1930/31 van de K.N.V.B. verpakt bij de Miss Blanche sigaretten. Bron: Sportkroniek 26 jan. 1931, p. 129."
                    alt="Een goed voorbeeld van de symbiose tussen sport en commercie. Advertentie van een album met 156 plaatjes van alle eerste en tweede klasse elftallen in de competitie 1930/31 van de K.N.V.B. verpakt bij de Miss Blanche sigaretten. Bron: Sportkroniek 26 jan. 1931, p. 129."
                    src={voetbalplaatjes}/>
                    <div className="picSubScript">Een goed voorbeeld van de symbiose tussen sport en commercie. Advertentie van een album met 156 plaatjes van alle eerste en tweede klasse elftallen in de competitie 1930/31 van de K.N.V.B. verpakt bij de Miss Blanche sigaretten. Bron: Sportkroniek 26 jan. 1931, p. 129.</div>
                </p>


                <h4>Mogelijkheden</h4>

                <p>De databank <em>Sportbonden, sportclubs en sportperiodieken in Nederland tot en met 1940 </em>moet
                    een inspiratiebron en een hulpmiddel worden voor al het onderzoek op het gebied van de
                    sporthistorie. Gebruikers kunnen gegevens opvragen per sport, per bond en/of onderbond, per
                    provincie en per plaats, per jaar en periode. Hoeveel clubs waren er in een bepaalde provincie of
                    plaats? Waren deze clubs aangesloten bij een neutrale of confessionele bond? Waar werden de
                    offici&#235;le mededelingen van een landelijke of regionale bond gepubliceerd v&#243;&#243;r 1940?
                    Welke clubnamen waren wanneer en bij welke sport het meest populair? Maar er zijn meer
                    mogelijkheden.</p>

                <p>De databank verwijst volop naar adresboeken van bonden waar namen van bestuursleden en de opgave van
                    het clubkostuum en het speelterrein zijn opgenomen. In de offici&#235;le mededelingen van de bonden
                    staan de uitslagen en eindstanden van de competities, waaruit de prestaties van clubs kunnen worden
                    vastgesteld. Bovendien bieden deze mededelingen ledenlijsten en teamopstellingen en opgaven van
                    geroyeerde clubs met de namen van hun leden (en soms ook adressen). De gebruiker kan aan de hand van
                    dergelijke lijsten het bestuur en het ledenbestand van een club van seizoen tot seizoen
                    reconstrueren. Dit biedt weer de mogelijkheid om nader onderzoek te doen naar de maatschappelijke
                    positie van de sportclubs en hun leden. Wat valt er te zeggen van de financi&#235;n van een club en
                    de leeftijd van actieve sporters? Woonden leden dichtbij het speelveld of juist verder weg? Kwam de
                    club voort uit een school, een gezellenvereniging of een speeltuinvereniging of iets dergelijks?
                    Welke kleuren waren populair bij clubkostuums? Dergelijke onderzoeksvragen kunnen niet meteen met
                    deze databank beantwoord worden, maar er wordt wel in ruime mate verwezen naar de relevante
                    bronnen.</p>

                <p>Kortom, deze databank kan een groot aantal belangstellenden op weg helpen, niet alleen bij
                    onderwerpen uit de sportgeschiedenis, maar ook bij onderzoek op het gebied van de verzuiling of
                    andere maatschappelijke ontwikkelingen.</p>

            </div>
        </div>
    )
}
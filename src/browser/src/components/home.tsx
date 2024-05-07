import React from "react";
import {useNavigate} from "react-router-dom";
import hfc from '../assets/img/HFC_1887.jpg';

export function Home() {
    const nav = useNavigate();
    return (
        <div className="hcContentContainer hcMarginTop5 hcMarginBottom5">
            <div className="hcBasicSideMargin">
                <h1>Sportbonden, sportclubs en sportperiodieken in Nederland tot 1940</h1>
                <p>Sport is wel een de belangrijkste bijzaak van het leven genoemd, maar het is moeilijk om informatie over de ontwikkeling van de sport in Nederland terug te vinden in naslagwerken op sporthistorisch gebied of op internet.</p>
                <div className="centerImage"><img src={hfc}/> </div>
                <p>De databank <em>Sportbonden, sportclubs en sportperiodieken in Nederland tot en met 1940</em> bevat gegevens over zes &#8220;grote&#8221; sporten:</p>
                <div className="sportList">
                    <div className="sportListItem" onClick={() => {nav('/gymnastiek')}}>Gymnastiek</div>
                    <div className="sportListItem" onClick={() => {nav('/hockey')}}>Hockey</div>
                    <div className="sportListItem" onClick={() => {nav('/korfbal')}}>Korfbal</div>
                    <div className="sportListItem" onClick={() => {nav('/schaken')}}>Schaken</div>
                    <div className="sportListItem" onClick={() => {nav('/tennis')}}>Tennis</div>
                    <div className="sportListItem" onClick={() => {nav('/voetbal')}}>Voetbal</div>
                </div>
                <p>De databank bevat de namen van alle bonden en clubs van deze takken van sport, die v&#243;&#243;r 31 december 1940 werden opgericht. Tevens is voor alle bonden zoveel mogelijk aangegeven in welke bladen alle offici&#235;le mededelingen werden gepubliceerd. Dit maakt het mogelijk allerlei artikelen terug te vinden over onder meer de organisatie van de sportbond, de ideologische standpunten van de bond, maar ook informatie over de competities en speltechnische ontwikkelingen. Bovendien zijn in deze bladen de teamsamenstelling van de deelnemende clubs opgenomen, waardoor het mogelijk is het ledenbestand van deze verenigingen te reconstrueren.</p>
                <p>De zes sporten zijn in eerste instantie uitgekozen omdat zij v&#243;&#243;r 1940 de meeste beoefenaars hadden en omdat zij een omvangrijke en diverse organisatie hadden. Voetbal was een &#8220;mannensport&#8221;, maar de overige sporten werden door mannen en vrouwen beoefend. Voetbal, gymnastiek en korfbal werden tussen 1920 en 1940 volkssporten; hockey, tennis en schaken bleven altijd meer elite-sporten. Alle zes sporten hadden landelijke en regionale bonden (onderbonden of districten). Verder hadden voetbal, gymnastiek en korfbal naast een neutrale bond ook confessionele en socialistische bonden. Hockey, tennis en schaken hadden geen aparte bonden die gebaseerd waren op een bepaalde levensbeschouwing.</p>
                <p>Op 1 augustus 1940 fuseerden alle voetbalbonden tot &#233;&#233;n organisatie, waarmee alle voetbalbonden op ideologische grondslag verdwenen. Deze ingrijpende verandering is gekozen als eindpunt van de databank.</p>
                <p>De databank is bedoeld voor professionele historici en alle andere belangstellenden die de opkomst en groei van sport in Nederland willen onderzoeken, op landelijk en lokaal niveau. Ook allerlei aspecten van de verzuiling in Nederland of de emancipatie van de maatschappelijke groeperingen kunnen met behulp van deze databank nader onderzocht worden.</p>
                <p>Momenteel wordt gewerkt aan een nieuwe versie van de databank, waarbij onder meer alle clubs van de betrokken sporten zijn opgenomen, die na 1940 opgericht werden.</p>
        </div>
        </div>
    )
}
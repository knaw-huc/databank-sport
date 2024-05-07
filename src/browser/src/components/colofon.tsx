import React from "react";
import {useNavigate} from "react-router-dom";


export function Colofon() {
    const nav = useNavigate();
    return (
        <>
            <div className="hcContentContainer hcMarginTop5 hcMarginBottom5">
                <div className="hcBasicSideMargin">
                    <h1>Colofon</h1>
                    <div><p>Dit project werd in de jaren 2006 tot 2011 uitgevoerd door Michel van Gent. Bij het invoeren
                        van gegevens werd hij bijgestaan door assistente Joke van Leeuwen. De illustraties werden
                        verzorgd door Milo van de Pol en de webapplicatie werd ontwikkeld door Bram van Dam.</p>
                        <p>
                            In 2023 is er een nieuwe versie van de webapplicatie ontwikkeld door de afdeling Digitale Infrastructuur van het KNAW Humanities Cluster (HuC).
                        </p>
                        <p>Het Huygens Instituut voor Nederlandse Geschiedenis wil de volgende personen en organisaties
                            bedanken voor hun medewerking (in alfabetische volgorde): Robbert Benen, het Internationaal
                            Instituut voor Sociale Geschiedenis Amsterdam, het Katholiek Documentatie Centrum Nijmegen,
                            de Koninklijke Bibliotheek Den Haag, het Koninklijk Nederlands Gymnastiek Verbond, de
                            Koninklijke Nederlandse Hockey Bond, het Koninklijk Nederlands Korfbal Verbond, de
                            Koninklijke Nederlandse Lawn Tennis Bond, de Koninklijke Nederlandse Schaakbond, de
                            Koninklijke Nederlandse Voetbal Bond, het Nationaal Archief Den Haag, de Nederlandse
                            Katholieke Sportbond, Ton Lensvelt, R. Peperkamp, Laszlo Scheltens, Stichting De Sportwereld
                            en Renske Wind-Blokker.</p>
                    </div>
                    <div className="hcClickable" onClick={() => {nav(-1)}}>Terug naar vorige pagina </div>
                </div>

            </div>
        </>
    )
}
import React from "react";
import {IDetail} from "../misc/interfaces";
import {useNavigate} from 'react-router-dom';

export function Detail({data}: {data: IDetail[]}) {
    const nav = useNavigate();



    return (
    <>
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <div className="justify hcMarginBottom1">
                    <h2>{data[0].value}</h2>
                    <div className="detailItemTable">
                    {data.map((item, index) => {
                        return (
                            <div className="detailItemRow" key={index}>
                                <div className="detailItemLabel">{item.label}:</div>
                                <div className="detailItemValue">{item.value.split('\n').map(str => <div>{str}</div>)}</div>
                            </div>
                        )
                    })}
                    </div>
                    <div className="hcClickable" onClick={() => {nav(-1)}}>Terug naar vorige pagina </div>
                </div>
            </div>
        </div>
    </>)
}
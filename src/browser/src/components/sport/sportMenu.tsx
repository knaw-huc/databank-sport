import React from "react";
import {Link} from "react-router-dom";

export function SportMenu() {
    return (
        <div>
            <div className="sportMenuItem"><Link to='/gymnastiek'>Gymnastiek</Link></div>
            <div className="sportMenuItem"><Link to='/hockey'>Hockey</Link></div>
            <div className="sportMenuItem"><Link to='/korfbal'>Korfbal</Link></div>
            <div className="sportMenuItem"><Link to='/schaken'>Schaken</Link></div>
            <div className="sportMenuItem"><Link to='/tennis'>Tennis</Link></div>
            <div className="sportMenuItem"><Link to='/voetbal'>Voetbal</Link></div>
        </div>
    )
}
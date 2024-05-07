import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {IProvincie, IResultItem, ISport} from '../misc/interfaces';


export default function ListItem({item}: { item: IResultItem }) {
    function sports(lst: ISport[]) {
        let lijst = "";
        lst.map((item) => {
            if (lijst === "") {
                lijst = lijst + item.sport;
            } else {
                lijst = lijst + ", " + item.sport;
            }
        })
        if (lijst === "") {
            return "";
        } else {
            return " - " + lijst;
        }
    }

    function strItem(str: string) {
        if (str === null || str === "") {
            return "";
        } else {
            return " - " + str;
        }
    }

    function jaar(jr: string|null, label: string) {
        if (jr === null || jr === "") {
            return "";
        } else {
            return " - " + label + jr;
        }
    }

    function splitProvince(provincie: IProvincie[]) {
        let retVal = '';
        provincie.map((item, index) => {
            if (index > 0) {
                retVal = retVal + ', ';
            }
            retVal = retVal + item.provincie;
        })
        return retVal
    }

    return (
        <div className="hcResultListDetail">
            <h2><Link to={'/detail/' + item.id}>{item.naam}</Link></h2>
            <div>{item.plaats} - {splitProvince(item.provincie)}{sports(item.sports)}{jaar(item.beginjaar, 'vanaf: ')}{jaar(item.eindjaar, 'Tot: ')}{strItem(item.levensbeschouwing)}</div>
        </div>
    );
}
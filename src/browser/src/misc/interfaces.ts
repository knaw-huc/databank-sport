import * as queryString from "querystring";

export interface IFacetCandidate {
    facet: string,
    field: string,
    candidate: string
}

export interface ISendCandidate {
    (data: IFacetCandidate):void
}

export interface IResultItem {
    id: number,
    naam: string,
    plaats: string,
    beginjaar: string,
    eindjaar: string,
    provincie: IProvincie[],
    levensbeschouwing: string
    sports: ISport[]
}

export interface ISport {
    sport: string
}

export interface IProvincie {
    provincie: string
}

export interface IDetail {
    field: string,
    value: string,
    label: string;
}



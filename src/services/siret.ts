import {Query, SpecialCase, URL, Auth} from "../config/environement";


export const getSiretQuery = (query: Query): string => {
    let url = URL + '?'
    if (query.fields.length > 0) {
        url += 'q='
        for (const [index, field] of toEntries(query.fields)) {
            let fieldURL = field.period ? 'period(<<field>>)' : '<<field>>';
            switch (field.type) {
                case SpecialCase.approx:
                    fieldURL = fieldURL.replace('<<field>>', field.field + ':' + '"' + field.value + '"' + '~');
                    break;
                case SpecialCase.exact:
                    fieldURL = fieldURL.replace('<<field>>', field.field + ':' + '"' + field.value + '"');
                    break;
                case SpecialCase.startWith:
                    fieldURL = fieldURL.replace('<<field>>', field.field + ':' + '"' + field.value + '"' + '*');
                    break;
                default:
                    fieldURL = fieldURL.replace('<<field>>', field.field + ':' + field.value);
                    break;
            }
            if (index < query.fields.length - 1) {
                fieldURL += ' AND '
            }
            url += fieldURL;
        }
        url += '&';
    }
    if (query.requiredFields.length > 0) {
        url += 'champs=';
        for (const [index, field] of toEntries(query.requiredFields)) {
            url += field;
            if (index < query.requiredFields.length - 1) {
                url += ',';
            }
        }
    }
    if (query.start) {
        url += '&debut=' + query.start
    }
    return url
}

export const sendQuery = async (query: string) => {
    const headers = getHeaders("application/json", Auth, "INSEE=rd4o00000000000000000000ffff0ac34809o80; pdapimgateway=rd4o00000000000000000000ffff0ac348aco8280");
    const requestOptions = {method: 'GET', headers};
    const result = await fetch(query, requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => error);
    console.log(result);
}

const getHeaders = (accept: string, auth: string, cookie: string): Headers => {
    const headers = new Headers();
    headers.append("Accept", accept);
    headers.append('Authorization', auth);
    headers.append("Cookie", cookie);
    return headers;
}


function toEntries<T>(a: T[]) {
    return a.map((value, index) => [index, value] as const);
}
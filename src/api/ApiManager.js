import { baseURL, sessionKey  } from '../util/Helper';
import { Storage } from '../util/Storage';

const ApiManager = async (metode, params, url) => {
    const sesi = Storage.GetAsObject(sessionKey);

    let headers = {
        'Client-Service': 'gmedia-recruitment',
        'Auth-Key': 'demo-admin',
        'Content-Type': 'application/json',
    };

    if (sesi != null || sesi != undefined){
        headers['Token'] = sesi.token;
        headers['User-id'] = sesi.uid;
    }
    
    console.log('sesi', sesi);

    const dataRes = await fetch(`${baseURL}${url}`, {
        method: metode,
        headers: headers,
        body: JSON.stringify(params)
    });

    // console.log(dataRes, 'datares');
    return dataRes.json().then( data => data).catch(err => err);
}

export { ApiManager };
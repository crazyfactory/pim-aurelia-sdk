/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/11/2016 12:05:24
*/

import {BaseApi} from './pim-api-core';
import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';

export class CountriesApi extends BaseApi {
    public Create(data: ICountryData):Promise<ICountryData> {
        return this._put(`api/countries`, data);
    }

    public Delete(key:string):Promise<boolean> {
        return this._delete(`api/countries`, key);
    }

    public Get(key:string):Promise<ICountryData> {
        return this._get(`api/countries/${key}`);
    }

    public GetAll():Promise<ICountryData[]> {
        return this._get(`api/countries`);
    }

    public Update(data:ICountryData):Promise<ICountryData> {
        return this._patch(`api/countries`, data);
    }
}

export class CurrenciesApi extends BaseApi {
    public Create(data:ICurrencyData):Promise<ICurrencyData> {
        return this._put(`api/currencies`, data);
    }

    public Delete(key:string):Promise<boolean> {
        return this._delete(`api/currencies`, key);
    }

    public Get(key:string):Promise<ICurrencyData> {
        return this._get(`api/currencies/${key}`);
    }

    public GetAll():Promise<ICurrencyData[]> {
        return this._get(`api/currencies`);
    }

    public GetRate(key:string, date:string):Promise<ICurrencyExchangeRateData> {
        return this._get(`api/currencies/${key}/rates/${date}`);
    }

    public Update(data:ICurrencyData):Promise<ICurrencyData> {
        return this._patch(`api/currencies`, data);
    }
}

/* End of file */
/*
   The contents of this file are automatically generated

   Origin:  pim
   Version: 1.0.0-dev
   Date:    4/15/2016 13:46:09
*/

import {BaseApi} from './pim-api-core';
import {ApiPromise} from 'pim-core';
import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IVoid, IPieceAttributeValueUsageData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';

export class CountriesApi extends BaseApi {
    public create(data: ICountryData): ApiPromise<ICountryData> {
        return this._put(`api/countries`, data);
    }

    public delete(key: string): ApiPromise<boolean> {
        return this._delete(`api/countries`, key);
    }

    public get(key: string): ApiPromise<ICountryData> {
        return this._get(`api/countries/${key}`);
    }

    public getAll(): ApiPromise<ICountryData[]> {
        return this._get(`api/countries`);
    }

    public update(data: ICountryData): ApiPromise<ICountryData> {
        return this._patch(`api/countries`, data);
    }
}

export class CurrenciesApi extends BaseApi {
    public create(data: ICurrencyData): ApiPromise<ICurrencyData> {
        return this._put(`api/currencies`, data);
    }

    public delete(key: string): ApiPromise<boolean> {
        return this._delete(`api/currencies`, key);
    }

    public get(key: string): ApiPromise<ICurrencyData> {
        return this._get(`api/currencies/${key}`);
    }

    public getAll(): ApiPromise<ICurrencyData[]> {
        return this._get(`api/currencies`);
    }

    public getRate(key: string, date: string): ApiPromise<ICurrencyExchangeRateData> {
        return this._get(`api/currencies/${key}/rates/${date}`);
    }

    public update(data: ICurrencyData): ApiPromise<ICurrencyData> {
        return this._patch(`api/currencies`, data);
    }
}

export class PieceAttributesApi extends BaseApi {
    public addValue(key: string, value: string): ApiPromise<string> {
        return this._put(`api/pieceattributes/${key}/values`, value);
    }

    public create(key: string): ApiPromise<IPieceAttributeData> {
        return this._get(`api/pieceattributes/create/${key}`);
    }

    public deleteValue(key: string, value: string): ApiPromise<IVoid> {
        return this._delete(`api/pieceattributes/${key}/values`, value);
    }

    public get(key: string): ApiPromise<IPieceAttributeData> {
        return this._get(`api/pieceattributes/${key}`);
    }

    public getAll(): ApiPromise<IPieceAttributeData[]> {
        return this._get(`api/pieceattributes`);
    }

    public update(key: string, data: IPieceAttributeData): ApiPromise<IPieceAttributeData> {
        return this._patch(`api/pieceattributes/${key}`, data);
    }
}

export class PieceAttributeValuesApi extends BaseApi {
    public getUsage(key: string, value: string): ApiPromise<IPieceAttributeValueUsageData> {
        return this._get(`api/pieceattributevalues/${key}/${value}/usage`);
    }
}

export class PieceGroupsApi extends BaseApi {
    public create(data: IPieceGroupData): ApiPromise<IPieceGroupData> {
        return this._put(`api/piecegroups`, data);
    }

    public delete(id: number): ApiPromise<boolean> {
        return this._delete(`api/piecegroups`, null);
    }

    public get(id: number): ApiPromise<IPieceGroupData> {
        return this._get(`api/piecegroups/${id}`);
    }

    public getAll(): ApiPromise<IPieceGroupData[]> {
        return this._get(`api/piecegroups`);
    }

    public getByCode(code: string): ApiPromise<IPieceGroupData> {
        return this._get(`api/piecegroups/by-code/${code}`);
    }

    public update(data: IPieceGroupData): ApiPromise<IPieceGroupData> {
        return this._patch(`api/piecegroups`, data);
    }
}

export class PieceGroupTypesApi extends BaseApi {
    public create(data: IPieceGroupTypeData): ApiPromise<IPieceGroupTypeData> {
        return this._put(`api/piecegrouptypes`, data);
    }

    public delete(id: number): ApiPromise<boolean> {
        return this._delete(`api/piecegrouptypes`, id);
    }

    public get(id: number): ApiPromise<IPieceGroupTypeData> {
        return this._get(`api/piecegrouptypes/${id}`);
    }

    public getList(): ApiPromise<IPieceGroupTypeData[]> {
        return this._get(`api/piecegrouptypes`);
    }

    public update(data: IPieceGroupTypeData): ApiPromise<IPieceGroupTypeData> {
        return this._patch(`api/piecegrouptypes`, data);
    }
}

export class PiecesApi extends BaseApi {
    public count(data: IPieceSelectorData): ApiPromise<number> {
        return this._post(`api/pieces`, data);
    }

    public create(data: IPieceData): ApiPromise<IPieceData> {
        return this._put(`api/pieces`, data);
    }

    public delete(id: number): ApiPromise<IPieceData> {
        return this._delete(`api/pieces`, id);
    }

    public find(data: IPieceSelectorData): ApiPromise<IPagedResultData<IPieceData>> {
        return this._post(`api/pieces`, data);
    }

    public get(id: number): ApiPromise<IPieceData> {
        return this._get(`api/pieces/${id}`);
    }

    public getByCode(code: string): ApiPromise<IPieceData> {
        return this._get(`api/pieces/by-code/${code}`);
    }

    public update(data: IPieceData): ApiPromise<IPieceData> {
        return this._patch(`api/pieces`, data);
    }
}


/* End of file */
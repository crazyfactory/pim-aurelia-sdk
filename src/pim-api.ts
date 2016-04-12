/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/12/2016 11:06:51
*/

import {BaseApi} from './pim-api-core';
import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';

export class CountriesApi extends BaseApi {
    public create(data: ICountryData): Promise<ICountryData> {
        return this._put(`api/countries`, data);
    }

    public delete(key: string): Promise<boolean> {
        return this._delete(`api/countries`, key);
    }

    public get(key: string): Promise<ICountryData> {
        return this._get(`api/countries/${key}`);
    }

    public getAll(): Promise<ICountryData[]> {
        return this._get(`api/countries`);
    }

    public update(data: ICountryData): Promise<ICountryData> {
        return this._patch(`api/countries`, data);
    }
}

export class CurrenciesApi extends BaseApi {
    public create(data: ICurrencyData): Promise<ICurrencyData> {
        return this._put(`api/currencies`, data);
    }

    public delete(key: string): Promise<boolean> {
        return this._delete(`api/currencies`, key);
    }

    public get(key: string): Promise<ICurrencyData> {
        return this._get(`api/currencies/${key}`);
    }

    public getAll(): Promise<ICurrencyData[]> {
        return this._get(`api/currencies`);
    }

    public getRate(key: string, date: string): Promise<ICurrencyExchangeRateData> {
        return this._get(`api/currencies/${key}/rates/${date}`);
    }

    public update(data: ICurrencyData): Promise<ICurrencyData> {
        return this._patch(`api/currencies`, data);
    }
}

export class PieceAttributesApi extends BaseApi {
    public addValue(key: string, value: string): Promise<IPieceAttributeData> {
        return this._put(`api/pieceattributes/${key}/values`, value);
    }

    public deleteValue(key: string, value: string): Promise<boolean> {
        return this._delete(`api/pieceattributes/${key}/values`, value);
    }

    public get(key: string): Promise<IPieceAttributeData> {
        return this._get(`api/pieceattributes/${key}`);
    }

    public getAll(): Promise<IPieceAttributeData[]> {
        return this._get(`api/pieceattributes`);
    }

    public update(key: string, data: IPieceAttributeData): Promise<IPieceAttributeData> {
        return this._patch(`api/pieceattributes/${key}`, data);
    }
}

export class PieceGroupsApi extends BaseApi {
    public create(data: IPieceGroupData): Promise<IPieceGroupData> {
        return this._put(`api/piecegroups`, data);
    }

    public delete(id: number): Promise<boolean> {
        return this._delete(`api/piecegroups`, null);
    }

    public get(id: number): Promise<IPieceGroupData> {
        return this._get(`api/piecegroups/${id}`);
    }

    public getAll(): Promise<IPieceGroupData[]> {
        return this._get(`api/piecegroups`);
    }

    public getByCode(code: string): Promise<IPieceGroupData> {
        return this._get(`api/piecegroups/by-code/${code}`);
    }

    public update(data: IPieceGroupData): Promise<IPieceGroupData> {
        return this._patch(`api/piecegroups`, data);
    }
}

export class PieceGroupTypesApi extends BaseApi {
    public create(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData> {
        return this._put(`api/piecegrouptypes`, data);
    }

    public delete(id: number): Promise<boolean> {
        return this._delete(`api/piecegrouptypes`, id);
    }

    public get(id: number): Promise<IPieceGroupTypeData> {
        return this._get(`api/piecegrouptypes/${id}`);
    }

    public getList(): Promise<IPieceGroupTypeData[]> {
        return this._get(`api/piecegrouptypes`);
    }

    public update(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData> {
        return this._patch(`api/piecegrouptypes`, data);
    }
}

export class PiecesApi extends BaseApi {
    public create(data: IPieceData): Promise<IPieceData> {
        return this._put(`api/pieces`, data);
    }

    public delete(id: number): Promise<IPieceData> {
        return this._delete(`api/pieces`, id);
    }

    public find(data: IPieceSelectorData): Promise<IPagedResultData<IPieceData>> {
        return this._post(`api/pieces`, data);
    }

    public get(id: number): Promise<IPieceData> {
        return this._get(`api/pieces/${id}`);
    }

    public getByCode(code: string): Promise<IPieceData> {
        return this._get(`api/pieces/by-code/${code}`);
    }

    public update(data: IPieceData): Promise<IPieceData> {
        return this._patch(`api/pieces`, data);
    }
}


/* End of file */
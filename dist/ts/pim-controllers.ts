/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/11/2016 12:05:24
*/

import {ApiController} from 'pim-base';
import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';

export class CountriesController extends ApiController {
    public static Create(data: ICountryData): Promise<ICountryData> {
        return this.put(`api/countries`, data);
    }

    public static Delete(key: string): Promise<boolean> {
        return this.delete(`api/countries`, key);
    }

    public static Get(key: string): Promise<ICountryData> {
        return this.get(`api/countries/${key}`);
    }

    public static GetAll(): Promise<ICountryData[]> {
        return this.get(`api/countries`);
    }

    public static Update(data: ICountryData): Promise<ICountryData> {
        return this.patch(`api/countries`, data);
    }
}

export class CurrenciesController extends ApiController {
    public static Create(data: ICurrencyData): Promise<ICurrencyData> {
        return this.put(`api/currencies`, data);
    }

    public static Delete(key: string): Promise<boolean> {
        return this.delete(`api/currencies`, key);
    }

    public static Get(key: string): Promise<ICurrencyData> {
        return this.get(`api/currencies/${key}`);
    }

    public static GetAll(): Promise<ICurrencyData[]> {
        return this.get(`api/currencies`);
    }

    public static GetRate(key: string, date: string): Promise<ICurrencyExchangeRateData> {
        return this.get(`api/currencies/${key}/rates/${date}`);
    }

    public static Update(data: ICurrencyData): Promise<ICurrencyData> {
        return this.patch(`api/currencies`, data);
    }
}

export class PieceAttributesController extends ApiController {
    public static AddValue(key: string, value: string): Promise<IPieceAttributeData> {
        return this.put(`api/pieceattributes/${key}/values`, value);
    }

    public static DeleteValue(key: string, value: string): Promise<boolean> {
        return this.delete(`api/pieceattributes/${key}/values`, value);
    }

    public static Get(key: string): Promise<IPieceAttributeData> {
        return this.get(`api/pieceattributes/${key}`);
    }

    public static GetAll(): Promise<IPieceAttributeData[]> {
        return this.get(`api/pieceattributes`);
    }

    public static Update(key: string, data: IPieceAttributeData): Promise<IPieceAttributeData> {
        return this.patch(`api/pieceattributes/${key}`, data);
    }
}

export class PieceGroupsController extends ApiController {
    public static Create(data: IPieceGroupData): Promise<IPieceGroupData> {
        return this.put(`api/piecegroups`, data);
    }

    public static Delete(id: number): Promise<boolean> {
        return this.delete(`api/piecegroups`, null);
    }

    public static Get(id: number): Promise<IPieceGroupData> {
        return this.get(`api/piecegroups/${id}`);
    }

    public static GetAll(): Promise<IPieceGroupData[]> {
        return this.get(`api/piecegroups`);
    }

    public static GetByCode(code: string): Promise<IPieceGroupData> {
        return this.get(`api/piecegroups/by-code/${code}`);
    }

    public static Update(data: IPieceGroupData): Promise<IPieceGroupData> {
        return this.patch(`api/piecegroups`, data);
    }
}

export class PieceGroupTypesController extends ApiController {
    public static Create(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData> {
        return this.put(`api/piecegrouptypes`, data);
    }

    public static Delete(id: number): Promise<boolean> {
        return this.delete(`api/piecegrouptypes`, id);
    }

    public static Get(id: number): Promise<IPieceGroupTypeData> {
        return this.get(`api/piecegrouptypes/${id}`);
    }

    public static GetList(): Promise<IPieceGroupTypeData[]> {
        return this.get(`api/piecegrouptypes`);
    }

    public static Update(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData> {
        return this.patch(`api/piecegrouptypes`, data);
    }
}

export class PiecesController extends ApiController {
    public static Count(data: IPieceSelectorData): Promise<number> {
        return this.head(`api/pieces`, data);
    }

    public static Create(data: IPieceData): Promise<IPieceData> {
        return this.put(`api/pieces`, data);
    }

    public static Delete(id: number): Promise<IPieceData> {
        return this.delete(`api/pieces`, id);
    }

    public static Find(data: IPieceSelectorData): Promise<IPagedResultData<IPieceData>> {
        return this.post(`api/pieces`, data);
    }

    public static Get(id: number): Promise<IPieceData> {
        return this.get(`api/pieces/${id}`);
    }

    public static GetByCode(code: string): Promise<IPieceData> {
        return this.get(`api/pieces/by-code/${code}`);
    }

    public static Update(data: IPieceData): Promise<IPieceData> {
        return this.patch(`api/pieces`, data);
    }
}


/* End of file */
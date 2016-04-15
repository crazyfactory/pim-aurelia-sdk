/*
   The contents of this file are automatically generated

   Origin:  pim
   Version: 1.0.0-dev
   Date:    4/15/2016 13:46:09
*/

declare module 'pim-api' {
    import {IApiConfiguration, ApiPromise} from 'pim-core';
    import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IVoid, IPieceAttributeValueUsageData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';

    export class CountriesApi {
        constructor(config?: IApiConfiguration);
        create(data: ICountryData): ApiPromise<ICountryData>;

        delete(key: string): ApiPromise<boolean>;

        get(key: string): ApiPromise<ICountryData>;

        getAll(): ApiPromise<ICountryData[]>;

        update(data: ICountryData): ApiPromise<ICountryData>;
    }

    export class CurrenciesApi {
        constructor(config?: IApiConfiguration);
        create(data: ICurrencyData): ApiPromise<ICurrencyData>;

        delete(key: string): ApiPromise<boolean>;

        get(key: string): ApiPromise<ICurrencyData>;

        getAll(): ApiPromise<ICurrencyData[]>;

        getRate(key: string, date: string): ApiPromise<ICurrencyExchangeRateData>;

        update(data: ICurrencyData): ApiPromise<ICurrencyData>;
    }

    export class PieceAttributesApi {
        constructor(config?: IApiConfiguration);
        addValue(key: string, value: string): ApiPromise<string>;

        create(key: string): ApiPromise<IPieceAttributeData>;

        deleteValue(key: string, value: string): ApiPromise<IVoid>;

        get(key: string): ApiPromise<IPieceAttributeData>;

        getAll(): ApiPromise<IPieceAttributeData[]>;

        update(key: string, data: IPieceAttributeData): ApiPromise<IPieceAttributeData>;
    }

    export class PieceAttributeValuesApi {
        constructor(config?: IApiConfiguration);
        getUsage(key: string, value: string): ApiPromise<IPieceAttributeValueUsageData>;
    }

    export class PieceGroupsApi {
        constructor(config?: IApiConfiguration);
        create(data: IPieceGroupData): ApiPromise<IPieceGroupData>;

        delete(id: number): ApiPromise<boolean>;

        get(id: number): ApiPromise<IPieceGroupData>;

        getAll(): ApiPromise<IPieceGroupData[]>;

        getByCode(code: string): ApiPromise<IPieceGroupData>;

        update(data: IPieceGroupData): ApiPromise<IPieceGroupData>;
    }

    export class PieceGroupTypesApi {
        constructor(config?: IApiConfiguration);
        create(data: IPieceGroupTypeData): ApiPromise<IPieceGroupTypeData>;

        delete(id: number): ApiPromise<boolean>;

        get(id: number): ApiPromise<IPieceGroupTypeData>;

        getList(): ApiPromise<IPieceGroupTypeData[]>;

        update(data: IPieceGroupTypeData): ApiPromise<IPieceGroupTypeData>;
    }

    export class PiecesApi {
        constructor(config?: IApiConfiguration);
        count(data: IPieceSelectorData): ApiPromise<number>;

        create(data: IPieceData): ApiPromise<IPieceData>;

        delete(id: number): ApiPromise<IPieceData>;

        find(data: IPieceSelectorData): ApiPromise<IPagedResultData<IPieceData>>;

        get(id: number): ApiPromise<IPieceData>;

        getByCode(code: string): ApiPromise<IPieceData>;

        update(data: IPieceData): ApiPromise<IPieceData>;
    }


}
/* End of file */
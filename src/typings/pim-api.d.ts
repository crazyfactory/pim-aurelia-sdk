/*
   The contents of this file are automatically generated

   Application:  pim
   Version:      0.1.1
   Date:         2016-04-25T09:29:40Z
*/

declare module 'pim-api' {
    import {IApiConfiguration} from 'pim-core';
    import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IVoid, IPieceAttributeValueUsageData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData, IRuntimeData} from 'pim-data';

    export class Configuration {
        static setDefault: (config: IApiConfiguration) => void;
        static getDefault: () => IApiConfiguration;
        static getMetadata: () => { Application: string; Configuration: string; Version: string; };
    }

    export class CountriesApi {
        constructor(config?: IApiConfiguration);
        create(data: ICountryData): Promise<ICountryData>;

        delete(key: string): Promise<boolean>;

        get(key: string): Promise<ICountryData>;

        getAll(): Promise<ICountryData[]>;

        update(data: ICountryData): Promise<ICountryData>;
    }

    export class CurrenciesApi {
        constructor(config?: IApiConfiguration);
        create(data: ICurrencyData): Promise<ICurrencyData>;

        delete(key: string): Promise<boolean>;

        get(key: string): Promise<ICurrencyData>;

        getAll(): Promise<ICurrencyData[]>;

        getRate(key: string, date: string): Promise<ICurrencyExchangeRateData>;

        update(data: ICurrencyData): Promise<ICurrencyData>;
    }

    export class PieceAttributesApi {
        constructor(config?: IApiConfiguration);
        addValue(key: string, value: string): Promise<string>;

        deleteValue(key: string, value: string): Promise<IVoid>;

        get(key: string): Promise<IPieceAttributeData>;

        getAll(): Promise<IPieceAttributeData[]>;

        update(key: string, data: IPieceAttributeData): Promise<IPieceAttributeData>;
    }

    export class PieceAttributeValuesApi {
        constructor(config?: IApiConfiguration);
        getUsage(key: string, value: string): Promise<IPieceAttributeValueUsageData>;
    }

    export class PieceGroupsApi {
        constructor(config?: IApiConfiguration);
        create(data: IPieceGroupData): Promise<IPieceGroupData>;

        delete(id: number): Promise<boolean>;

        get(id: number): Promise<IPieceGroupData>;

        getAll(): Promise<IPieceGroupData[]>;

        getByCode(code: string): Promise<IPieceGroupData>;

        update(data: IPieceGroupData): Promise<IPieceGroupData>;
    }

    export class PieceGroupTypesApi {
        constructor(config?: IApiConfiguration);
        create(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData>;

        delete(id: number): Promise<IVoid>;

        get(id: number): Promise<IPieceGroupTypeData>;

        getAll(): Promise<IPieceGroupTypeData[]>;

        update(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData>;
    }

    export class PiecesApi {
        constructor(config?: IApiConfiguration);
        count(data: IPieceSelectorData): Promise<number>;

        create(data: IPieceData): Promise<IPieceData>;

        delete(id: number): Promise<IPieceData>;

        find(data: IPieceSelectorData): Promise<IPagedResultData<IPieceData>>;

        get(id: number): Promise<IPieceData>;

        getByCode(code: string): Promise<IPieceData>;

        update(data: IPieceData): Promise<IPieceData>;
    }

    export class RuntimeApi {
        constructor(config?: IApiConfiguration);
        get(): Promise<IRuntimeData>;
    }

    export class VersionApi {
        constructor(config?: IApiConfiguration);
        get(): Promise<string>;
    }

}
/* End of file */
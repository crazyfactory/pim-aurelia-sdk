/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/11/2016 11:04:13
*/

declare module 'pim-data' {
    export interface ICountryData
        {
        Key?: string;
        Name?: string;
        Currencies?: string[];
        }

    export interface ICurrencyData
        {
        Key?: string;
        Name?: string;
        Countries?: string[];
        Rate?: number;
        IsSystemDefault?: boolean;
        }

    export interface ICurrencyExchangeRateData
        {
        Id?: number;
        Value?: number;
        Date?: string;
        Source?: string;
        CurrencyId?: number;
        Currency?: ICurrencyData;
        IsToday?: boolean;
        }

    export interface IPieceAttributeData
        {
        Id?: number;
        Name?: string;
        Description?: string;
        Unit?: string;
        Values?: string[];
        }

    export interface IPieceData
        {
        Id?: number;
        Code?: string;
        PieceGroupId?: number;
        PieceGroup?: IPieceGroupSimpleData;
        SupplierPieces?: ISupplierPieceSimpleData[];
        Attributes?: {[key: string]: string};
        }

    export interface IPieceGroupData
        {
        Id?: number;
        Name?: string;
        Description?: string;
        Code?: string;
        TypeId?: number;
        Type?: IPieceGroupTypeData;
        SupplierPieceGroups?: ISupplierPieceGroupData[];
        }

    export interface IPieceGroupSimpleData
        {
        Id?: number;
        Name?: string;
        Description?: string;
        Code?: string;
        }

    export interface IPieceGroupTypeData
        {
        Id?: number;
        Name?: string;
        Description?: string;
        Attributes?: {[key: string]: string[]};
        }

    export interface IPieceSelectorData
        {
        }

    export interface ISupplierPieceGroupData
        {
        Id?: number;
        Name?: string;
        Description?: string;
        Code?: string;
        TypeId?: number;
        Type?: IPieceGroupTypeData;
        PieceGroupId?: number;
        PieceGroup?: IPieceGroupData;
        }

    export interface ISupplierPieceSimpleData
        {
        Id?: number;
        Code?: string;
        SupplierPieceGroupId?: number;
        PieceId?: number;
        Attributes?: {[key: string]: string};
        }

    export interface IPagedResultData<T>
        {
        Skip?: number;
        Take?: number;
        Items?: T[];
        }

}
/* End of file */

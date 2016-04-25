/*
   The contents of this file are automatically generated

   Application:  pim
   Version:      0.1.0
   Date:         2016-04-25T09:08:55Z
*/

declare module 'pim-data' {
    export interface IRuntimeData
    {
        Application?: string;
        Version?: string;
        Configuration?: string;
    }

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
        Key?: string;
        Description?: string;
        Unit?: string;
        IsAcceptingCustomValue?: boolean;
        IsAcceptingNullValue?: boolean;
        IsGlobalRequired?: boolean;
        Values?: string[];
    }

    export interface IPieceAttributeValueUsageData
    {
        Key?: string;
        Value?: string;
        PieceGroupTypeCount?: number;
        PieceGroupWithDefaultValueCount?: number;
        PieceGroupCount?: number;
        SupplierPieceGroupCount?: number;
        SupplierPieceGroupWithDefaultValueCount?: number;
        PieceCount?: number;
        SupplierPieceCount?: number;
        IsUsed?: boolean;
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

    export interface IVoid
    {
    }

    export interface IPagedResultData<T>
    {
        Skip?: number;
        Take?: number;
        Items?: T[];
    }

}
/* End of file */
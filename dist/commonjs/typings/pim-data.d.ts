/*
   The contents of this file are automatically generated

   Application:  pim
   Version:      0.2.1
   Date:         2016-05-09T08:25:30Z
*/

declare module 'pim-data' {
    export interface IRuntimeData
    {
        Application?: string;
        Configuration?: string;
        Version?: string;
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
        Type?: string;
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

    export interface ISessionData
    {
        IsElevated?: boolean;
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

    export interface IUserData
    {
        Id?: number;
        Login?: string;
        Password?: string;
        UserProfile?: IUserProfileData;
        Permissions?: string[];
    }

    export interface IUserGroupData
    {
        Id?: number;
        DisplayName?: string;
        ParentId?: number;
    }

    export interface IUserGroupPermissionData
    {
        Key?: string;
        InheritedValue?: boolean;
        ExplicitValue?: boolean;
        IsInherited?: boolean;
        IsExplicit?: boolean;
        Value?: boolean;
    }

    export interface IUserPermissionData
    {
        Key?: string;
        Value?: boolean;
        InheritedValue?: boolean;
        ExplicitValue?: boolean;
        IsInherited?: boolean;
        IsExplicit?: boolean;
    }

    export interface IUserProfileData
    {
        DisplayName?: string;
        FirstName?: string;
        LastName?: string;
        DisplayHandle?: string;
        UserId?: number;
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
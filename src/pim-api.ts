/*
   The contents of this file are automatically generated

   Application:  pim
   Version:      0.2.1
   Date:         2016-05-09T08:25:30Z
*/

import {BaseApi, BaseConfiguration} from './core';
import {BuildApplication, BuildVersion, BuildConfiguration} from './metadata';
import {IApiConfiguration} from 'pim-core';
import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IVoid, IPieceAttributeValueUsageData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData, IRuntimeData, ISessionData, IUserData, IUserPermissionData, IUserGroupData, IUserGroupPermissionData, IUserProfileData} from 'pim-data';

export class Configuration {
    public static getDefault() { 
        return BaseConfiguration.getDefault();
    }
    public static setDefault(config: IApiConfiguration) {
        return BaseConfiguration.setDefault(config);
    }
    public static getMetadata() {
        return { Application: BuildApplication, Configuration: BuildConfiguration, Version: BuildVersion };
    }
    public static storeToken(token: string) {
        return BaseConfiguration.storeToken(token);
    }
    public static retrieveToken() {
        return BaseConfiguration.retrieveToken();
    }
}

export class IdentityApi extends BaseApi {
    public getPermissions(): Promise<string[]> {
        return this._get(`api/identity/permissions`);
    }
}

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
    public addValue(key: string, value: string): Promise<string> {
        return this._put(`api/pieceattributes/${key}/values`, value);
    }

    public deleteValue(key: string, value: string): Promise<IVoid> {
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

export class PieceAttributeValuesApi extends BaseApi {
    public getUsage(key: string, value: string): Promise<IPieceAttributeValueUsageData> {
        return this._get(`api/pieceattributevalues/${key}/${value}/usage`);
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

    public delete(id: number): Promise<IVoid> {
        return this._delete(`api/piecegrouptypes/${id}`, null);
    }

    public get(id: number): Promise<IPieceGroupTypeData> {
        return this._get(`api/piecegrouptypes/${id}`);
    }

    public getAll(): Promise<IPieceGroupTypeData[]> {
        return this._get(`api/piecegrouptypes`);
    }

    public update(data: IPieceGroupTypeData): Promise<IPieceGroupTypeData> {
        return this._patch(`api/piecegrouptypes`, data);
    }
}

export class PiecesApi extends BaseApi {
    public count(data: IPieceSelectorData): Promise<number> {
        return this._post(`api/pieces`, data);
    }

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

export class RuntimeApi extends BaseApi {
    public get(): Promise<IRuntimeData> {
        return this._get(`api/runtime`);
    }
}

export class SessionsApi extends BaseApi {
    public get(): Promise<ISessionData> {
        return this._get(`api/sessions`);
    }

    public getPermissions(): Promise<IUserPermissionData[]> {
        return this._get(`api/sessions/permissions`);
    }

    public getUser(): Promise<IUserData> {
        return this._get(`api/sessions/user`);
    }
}

export class UserGroupsApi extends BaseApi {
    public addUser(userGroupId: number, userId: number): Promise<boolean> {
        return this._put(`api/usergroups/${userGroupId}/users`, userId);
    }

    public addUsers(userGroupId: number, userIds: number[]): Promise<number[]> {
        return this._put(`api/usergroups/${userGroupId}/users`, userIds);
    }

    public create(data: IUserGroupData): Promise<IUserGroupData> {
        return this._put(`api/usergroups`, null);
    }

    public delete(id: number): Promise<IVoid> {
        return this._delete(`api/usergroups/${id}`, null);
    }

    public get(id: number): Promise<IUserGroupData> {
        return this._get(`api/usergroups/${id}`);
    }

    public getAll(): Promise<IUserGroupData[]> {
        return this._get(`api/usergroups`);
    }

    public getAllRootNodes(): Promise<IUserGroupData[]> {
        return this._get(`api/usergroups/rootnodes`);
    }

    public getChildren(userGroupId: number): Promise<IUserGroupData[]> {
        return this._get(`api/usergroups/${userGroupId}/children`);
    }

    public getParent(userGroupId: number): Promise<IUserGroupData> {
        return this._get(`api/usergroups/${userGroupId}/parent`);
    }

    public getPermission(userGroupId: number, permissionKey: string): Promise<IUserGroupPermissionData> {
        return this._get(`api/usergroups/${userGroupId}/permissions/${permissionKey}`);
    }

    public getPermissions(userGroupId: number): Promise<IUserGroupPermissionData[]> {
        return this._get(`api/usergroups/${userGroupId}/permissions`);
    }

    public getUsers(userGroupId: number): Promise<IUserData[]> {
        return this._get(`api/usergroups/${userGroupId}/users`);
    }

    public removeUser(userGroupId: number, userId: number): Promise<boolean> {
        return this._delete(`api/usergroups/${userGroupId}/users`, userId);
    }

    public removeUsers(userGroupId: number, userIds: number[]): Promise<number[]> {
        return this._delete(`api/usergroups/${userGroupId}/users`, userIds);
    }

    public setParent(userGroupId: number, parentGroupId: number): Promise<IVoid> {
        return this._patch(`api/usergroups/${userGroupId}/parent`, parentGroupId);
    }

    public setPermission(userGroupId: number, permissionKey: string, explicitValue: boolean): Promise<IUserGroupPermissionData> {
        return this._patch(`api/usergroups/${userGroupId}/permissions/${permissionKey}`, explicitValue);
    }

    public setPermissions(userGroupId: number, keyValueDic: {[key: string]: boolean}): Promise<string[]> {
        return this._patch(`api/usergroups/${userGroupId}/permissions`, keyValueDic);
    }

    public update(data: IUserGroupData): Promise<IUserGroupData> {
        return this._patch(`api/usergroups`, null);
    }
}

export class UserPermissionsApi extends BaseApi {
    public getAll(): Promise<string[]> {
        return this._get(`api/userpermissions`);
    }
}

export class UserProfilesApi extends BaseApi {
    public get(userId: number): Promise<IUserProfileData> {
        return this._get(`api/userprofiles/${userId}`);
    }

    public update(data: IUserProfileData): Promise<IUserProfileData> {
        return this._patch(`api/userprofiles`, data);
    }
}

export class UsersApi extends BaseApi {
    public create(data: IUserData): Promise<IUserData> {
        return this._put(`api/users`, data);
    }

    public delete(userId: number): Promise<IVoid> {
        return this._delete(`api/users/${userId}`, null);
    }

    public get(id: number): Promise<IUserData> {
        return this._get(`api/users/${id}`);
    }

    public getAll(): Promise<IUserData[]> {
        return this._get(`api/users`);
    }

    public getPermission(userId: number, permissionKey: string): Promise<IUserPermissionData> {
        return this._get(`api/users/${userId}/permissions/${permissionKey}`);
    }

    public getPermissions(userId: number): Promise<IUserPermissionData[]> {
        return this._get(`api/users/${userId}/permissions`);
    }

    public setPermission(userId: number, permissionKey: string, explicitValue: boolean): Promise<IUserPermissionData> {
        return this._patch(`api/users/${userId}/permissions/${permissionKey}`, explicitValue);
    }

    public setPermissions(userId: number, keyValueDic: {[key: string]: boolean}): Promise<string[]> {
        return this._patch(`api/users/${userId}/permissions`, keyValueDic);
    }

    public update(data: IUserData): Promise<IUserData> {
        return this._patch(`api/users`, data);
    }
}

export class VersionApi extends BaseApi {
    public get(): Promise<string> {
        return this._get(`api/version`);
    }

    public getLock(): Promise<string> {
        return this._get(`api/version/lock`);
    }
}

/* End of file */
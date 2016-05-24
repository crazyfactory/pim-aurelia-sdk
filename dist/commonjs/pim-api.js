"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('./core');
var metadata_1 = require('./metadata');
var Configuration = (function () {
    function Configuration() {
    }
    Configuration.getDefault = function () {
        return core_1.BaseConfiguration.getDefault();
    };
    Configuration.setDefault = function (config) {
        return core_1.BaseConfiguration.setDefault(config);
    };
    Configuration.getMetadata = function () {
        return { Application: metadata_1.BuildApplication, Configuration: metadata_1.BuildConfiguration, Version: metadata_1.BuildVersion };
    };
    Configuration.storeToken = function (token) {
        return core_1.BaseConfiguration.storeToken(token);
    };
    Configuration.retrieveToken = function () {
        return core_1.BaseConfiguration.retrieveToken();
    };
    return Configuration;
}());
exports.Configuration = Configuration;
var IdentityApi = (function (_super) {
    __extends(IdentityApi, _super);
    function IdentityApi() {
        _super.apply(this, arguments);
    }
    IdentityApi.prototype.getPermissions = function () {
        return this._get("api/identity/permissions");
    };
    return IdentityApi;
}(core_1.BaseApi));
exports.IdentityApi = IdentityApi;
var CountriesApi = (function (_super) {
    __extends(CountriesApi, _super);
    function CountriesApi() {
        _super.apply(this, arguments);
    }
    CountriesApi.prototype.create = function (data) {
        return this._put("api/countries", data);
    };
    CountriesApi.prototype.delete = function (key) {
        return this._delete("api/countries", key);
    };
    CountriesApi.prototype.get = function (key) {
        return this._get("api/countries/" + key);
    };
    CountriesApi.prototype.getAll = function () {
        return this._get("api/countries");
    };
    CountriesApi.prototype.update = function (data) {
        return this._patch("api/countries", data);
    };
    return CountriesApi;
}(core_1.BaseApi));
exports.CountriesApi = CountriesApi;
var CurrenciesApi = (function (_super) {
    __extends(CurrenciesApi, _super);
    function CurrenciesApi() {
        _super.apply(this, arguments);
    }
    CurrenciesApi.prototype.create = function (data) {
        return this._put("api/currencies", data);
    };
    CurrenciesApi.prototype.delete = function (key) {
        return this._delete("api/currencies", key);
    };
    CurrenciesApi.prototype.get = function (key) {
        return this._get("api/currencies/" + key);
    };
    CurrenciesApi.prototype.getAll = function () {
        return this._get("api/currencies");
    };
    CurrenciesApi.prototype.getRate = function (key, date) {
        return this._get("api/currencies/" + key + "/rates/" + date);
    };
    CurrenciesApi.prototype.update = function (data) {
        return this._patch("api/currencies", data);
    };
    return CurrenciesApi;
}(core_1.BaseApi));
exports.CurrenciesApi = CurrenciesApi;
var PieceAttributesApi = (function (_super) {
    __extends(PieceAttributesApi, _super);
    function PieceAttributesApi() {
        _super.apply(this, arguments);
    }
    PieceAttributesApi.prototype.addValue = function (key, value) {
        return this._put("api/pieceattributes/" + key + "/values", value);
    };
    PieceAttributesApi.prototype.deleteValue = function (key, value) {
        return this._delete("api/pieceattributes/" + key + "/values", value);
    };
    PieceAttributesApi.prototype.get = function (key) {
        return this._get("api/pieceattributes/" + key);
    };
    PieceAttributesApi.prototype.getAll = function () {
        return this._get("api/pieceattributes");
    };
    PieceAttributesApi.prototype.update = function (key, data) {
        return this._patch("api/pieceattributes/" + key, data);
    };
    return PieceAttributesApi;
}(core_1.BaseApi));
exports.PieceAttributesApi = PieceAttributesApi;
var PieceAttributeValuesApi = (function (_super) {
    __extends(PieceAttributeValuesApi, _super);
    function PieceAttributeValuesApi() {
        _super.apply(this, arguments);
    }
    PieceAttributeValuesApi.prototype.getUsage = function (key, value) {
        return this._get("api/pieceattributevalues/" + key + "/" + value + "/usage");
    };
    return PieceAttributeValuesApi;
}(core_1.BaseApi));
exports.PieceAttributeValuesApi = PieceAttributeValuesApi;
var PieceGroupsApi = (function (_super) {
    __extends(PieceGroupsApi, _super);
    function PieceGroupsApi() {
        _super.apply(this, arguments);
    }
    PieceGroupsApi.prototype.create = function (data) {
        return this._put("api/piecegroups", data);
    };
    PieceGroupsApi.prototype.delete = function (id) {
        return this._delete("api/piecegroups", null);
    };
    PieceGroupsApi.prototype.get = function (id) {
        return this._get("api/piecegroups/" + id);
    };
    PieceGroupsApi.prototype.getAll = function () {
        return this._get("api/piecegroups");
    };
    PieceGroupsApi.prototype.getByCode = function (code) {
        return this._get("api/piecegroups/by-code/" + code);
    };
    PieceGroupsApi.prototype.update = function (data) {
        return this._patch("api/piecegroups", data);
    };
    return PieceGroupsApi;
}(core_1.BaseApi));
exports.PieceGroupsApi = PieceGroupsApi;
var PieceGroupTypesApi = (function (_super) {
    __extends(PieceGroupTypesApi, _super);
    function PieceGroupTypesApi() {
        _super.apply(this, arguments);
    }
    PieceGroupTypesApi.prototype.create = function (data) {
        return this._put("api/piecegrouptypes", data);
    };
    PieceGroupTypesApi.prototype.delete = function (id) {
        return this._delete("api/piecegrouptypes/" + id, null);
    };
    PieceGroupTypesApi.prototype.get = function (id) {
        return this._get("api/piecegrouptypes/" + id);
    };
    PieceGroupTypesApi.prototype.getAll = function () {
        return this._get("api/piecegrouptypes");
    };
    PieceGroupTypesApi.prototype.update = function (data) {
        return this._patch("api/piecegrouptypes", data);
    };
    return PieceGroupTypesApi;
}(core_1.BaseApi));
exports.PieceGroupTypesApi = PieceGroupTypesApi;
var PiecesApi = (function (_super) {
    __extends(PiecesApi, _super);
    function PiecesApi() {
        _super.apply(this, arguments);
    }
    PiecesApi.prototype.count = function (data) {
        return this._post("api/pieces", data);
    };
    PiecesApi.prototype.create = function (data) {
        return this._put("api/pieces", data);
    };
    PiecesApi.prototype.delete = function (id) {
        return this._delete("api/pieces", id);
    };
    PiecesApi.prototype.find = function (data) {
        return this._post("api/pieces", data);
    };
    PiecesApi.prototype.get = function (id) {
        return this._get("api/pieces/" + id);
    };
    PiecesApi.prototype.getByCode = function (code) {
        return this._get("api/pieces/by-code/" + code);
    };
    PiecesApi.prototype.update = function (data) {
        return this._patch("api/pieces", data);
    };
    return PiecesApi;
}(core_1.BaseApi));
exports.PiecesApi = PiecesApi;
var RuntimeApi = (function (_super) {
    __extends(RuntimeApi, _super);
    function RuntimeApi() {
        _super.apply(this, arguments);
    }
    RuntimeApi.prototype.get = function () {
        return this._get("api/runtime");
    };
    return RuntimeApi;
}(core_1.BaseApi));
exports.RuntimeApi = RuntimeApi;
var SessionsApi = (function (_super) {
    __extends(SessionsApi, _super);
    function SessionsApi() {
        _super.apply(this, arguments);
    }
    SessionsApi.prototype.get = function () {
        return this._get("api/sessions");
    };
    SessionsApi.prototype.getPermissions = function () {
        return this._get("api/sessions/permissions");
    };
    SessionsApi.prototype.getUser = function () {
        return this._get("api/sessions/user");
    };
    return SessionsApi;
}(core_1.BaseApi));
exports.SessionsApi = SessionsApi;
var UserGroupsApi = (function (_super) {
    __extends(UserGroupsApi, _super);
    function UserGroupsApi() {
        _super.apply(this, arguments);
    }
    UserGroupsApi.prototype.addUser = function (userGroupId, userId) {
        return this._put("api/usergroups/" + userGroupId + "/users", userId);
    };
    UserGroupsApi.prototype.addUsers = function (userGroupId, userIds) {
        return this._put("api/usergroups/" + userGroupId + "/users", userIds);
    };
    UserGroupsApi.prototype.create = function (data) {
        return this._put("api/usergroups", null);
    };
    UserGroupsApi.prototype.delete = function (id) {
        return this._delete("api/usergroups/" + id, null);
    };
    UserGroupsApi.prototype.get = function (id) {
        return this._get("api/usergroups/" + id);
    };
    UserGroupsApi.prototype.getAll = function () {
        return this._get("api/usergroups");
    };
    UserGroupsApi.prototype.getAllRootNodes = function () {
        return this._get("api/usergroups/rootnodes");
    };
    UserGroupsApi.prototype.getChildren = function (userGroupId) {
        return this._get("api/usergroups/" + userGroupId + "/children");
    };
    UserGroupsApi.prototype.getParent = function (userGroupId) {
        return this._get("api/usergroups/" + userGroupId + "/parent");
    };
    UserGroupsApi.prototype.getPermission = function (userGroupId, permissionKey) {
        return this._get("api/usergroups/" + userGroupId + "/permissions/" + permissionKey);
    };
    UserGroupsApi.prototype.getPermissions = function (userGroupId) {
        return this._get("api/usergroups/" + userGroupId + "/permissions");
    };
    UserGroupsApi.prototype.getUsers = function (userGroupId) {
        return this._get("api/usergroups/" + userGroupId + "/users");
    };
    UserGroupsApi.prototype.removeUser = function (userGroupId, userId) {
        return this._delete("api/usergroups/" + userGroupId + "/users", userId);
    };
    UserGroupsApi.prototype.removeUsers = function (userGroupId, userIds) {
        return this._delete("api/usergroups/" + userGroupId + "/users", userIds);
    };
    UserGroupsApi.prototype.setParent = function (userGroupId, parentGroupId) {
        return this._patch("api/usergroups/" + userGroupId + "/parent", parentGroupId);
    };
    UserGroupsApi.prototype.setPermission = function (userGroupId, permissionKey, explicitValue) {
        return this._patch("api/usergroups/" + userGroupId + "/permissions/" + permissionKey, explicitValue);
    };
    UserGroupsApi.prototype.setPermissions = function (userGroupId, keyValueDic) {
        return this._patch("api/usergroups/" + userGroupId + "/permissions", keyValueDic);
    };
    UserGroupsApi.prototype.update = function (data) {
        return this._patch("api/usergroups", null);
    };
    return UserGroupsApi;
}(core_1.BaseApi));
exports.UserGroupsApi = UserGroupsApi;
var UserPermissionsApi = (function (_super) {
    __extends(UserPermissionsApi, _super);
    function UserPermissionsApi() {
        _super.apply(this, arguments);
    }
    UserPermissionsApi.prototype.getAll = function () {
        return this._get("api/userpermissions");
    };
    return UserPermissionsApi;
}(core_1.BaseApi));
exports.UserPermissionsApi = UserPermissionsApi;
var UserProfilesApi = (function (_super) {
    __extends(UserProfilesApi, _super);
    function UserProfilesApi() {
        _super.apply(this, arguments);
    }
    UserProfilesApi.prototype.get = function (userId) {
        return this._get("api/userprofiles/" + userId);
    };
    UserProfilesApi.prototype.update = function (data) {
        return this._patch("api/userprofiles", data);
    };
    return UserProfilesApi;
}(core_1.BaseApi));
exports.UserProfilesApi = UserProfilesApi;
var UsersApi = (function (_super) {
    __extends(UsersApi, _super);
    function UsersApi() {
        _super.apply(this, arguments);
    }
    UsersApi.prototype.create = function (data) {
        return this._put("api/users", data);
    };
    UsersApi.prototype.delete = function (userId) {
        return this._delete("api/users/" + userId, null);
    };
    UsersApi.prototype.get = function (id) {
        return this._get("api/users/" + id);
    };
    UsersApi.prototype.getAll = function () {
        return this._get("api/users");
    };
    UsersApi.prototype.getPermission = function (userId, permissionKey) {
        return this._get("api/users/" + userId + "/permissions/" + permissionKey);
    };
    UsersApi.prototype.getPermissions = function (userId) {
        return this._get("api/users/" + userId + "/permissions");
    };
    UsersApi.prototype.setPermission = function (userId, permissionKey, explicitValue) {
        return this._patch("api/users/" + userId + "/permissions/" + permissionKey, explicitValue);
    };
    UsersApi.prototype.setPermissions = function (userId, keyValueDic) {
        return this._patch("api/users/" + userId + "/permissions", keyValueDic);
    };
    UsersApi.prototype.update = function (data) {
        return this._patch("api/users", data);
    };
    return UsersApi;
}(core_1.BaseApi));
exports.UsersApi = UsersApi;
var VersionApi = (function (_super) {
    __extends(VersionApi, _super);
    function VersionApi() {
        _super.apply(this, arguments);
    }
    VersionApi.prototype.get = function () {
        return this._get("api/version");
    };
    VersionApi.prototype.getLock = function () {
        return this._get("api/version/lock");
    };
    return VersionApi;
}(core_1.BaseApi));
exports.VersionApi = VersionApi;

//# sourceMappingURL=data:application/json;base64,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QUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxpQ0FBYyxHQUFyQixVQUFzQixNQUFjLEVBQUUsV0FBcUM7UUFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBYSxNQUFNLGlCQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLHlCQUFNLEdBQWIsVUFBYyxJQUFlO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBcENBLEFBb0NDLENBcEM2QixjQUFPLEdBb0NwQztBQXBDWSxnQkFBUSxXQW9DcEIsQ0FBQTtBQUVEO0lBQWdDLDhCQUFPO0lBQXZDO1FBQWdDLDhCQUFPO0lBUXZDLENBQUM7SUFQVSx3QkFBRyxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxpQkFBQztBQUFELENBUkEsQUFRQyxDQVIrQixjQUFPLEdBUXRDO0FBUlksa0JBQVUsYUFRdEIsQ0FBQSIsImZpbGUiOiJwaW0tYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXG5cbiAgIEFwcGxpY2F0aW9uOiAgcGltXG4gICBWZXJzaW9uOiAgICAgIDAuMi4xXG4gICBEYXRlOiAgICAgICAgIDIwMTYtMDUtMDlUMDg6MjU6MzBaXG4qL1xuXG5pbXBvcnQge0Jhc2VBcGksIEJhc2VDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtCdWlsZEFwcGxpY2F0aW9uLCBCdWlsZFZlcnNpb24sIEJ1aWxkQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQge0lBcGlDb25maWd1cmF0aW9ufSBmcm9tICdwaW0tY29yZSc7XG5pbXBvcnQge0lDb3VudHJ5RGF0YSwgSUN1cnJlbmN5RGF0YSwgSUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YSwgSVBpZWNlQXR0cmlidXRlRGF0YSwgSVZvaWQsIElQaWVjZUF0dHJpYnV0ZVZhbHVlVXNhZ2VEYXRhLCBJUGllY2VHcm91cERhdGEsIElQaWVjZUdyb3VwVHlwZURhdGEsIElQYWdlZFJlc3VsdERhdGEsIElQaWVjZURhdGEsIElQaWVjZVNlbGVjdG9yRGF0YSwgSVJ1bnRpbWVEYXRhLCBJU2Vzc2lvbkRhdGEsIElVc2VyRGF0YSwgSVVzZXJQZXJtaXNzaW9uRGF0YSwgSVVzZXJHcm91cERhdGEsIElVc2VyR3JvdXBQZXJtaXNzaW9uRGF0YSwgSVVzZXJQcm9maWxlRGF0YX0gZnJvbSAncGltLWRhdGEnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgcHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCkgeyBcbiAgICAgICAgcmV0dXJuIEJhc2VDb25maWd1cmF0aW9uLmdldERlZmF1bHQoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBzZXREZWZhdWx0KGNvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIEJhc2VDb25maWd1cmF0aW9uLnNldERlZmF1bHQoY29uZmlnKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRNZXRhZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHsgQXBwbGljYXRpb246IEJ1aWxkQXBwbGljYXRpb24sIENvbmZpZ3VyYXRpb246IEJ1aWxkQ29uZmlndXJhdGlvbiwgVmVyc2lvbjogQnVpbGRWZXJzaW9uIH07XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgc3RvcmVUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBCYXNlQ29uZmlndXJhdGlvbi5zdG9yZVRva2VuKHRva2VuKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyByZXRyaWV2ZVRva2VuKCkge1xuICAgICAgICByZXR1cm4gQmFzZUNvbmZpZ3VyYXRpb24ucmV0cmlldmVUb2tlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aXR5QXBpIGV4dGVuZHMgQmFzZUFwaSB7XG4gICAgcHVibGljIGdldFBlcm1pc3Npb25zKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2lkZW50aXR5L3Blcm1pc3Npb25zYCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ291bnRyaWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJQ291bnRyeURhdGEpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShrZXk6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvY291bnRyaWVzYCwga2V5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJQ291bnRyeURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2NvdW50cmllcy8ke2tleX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SUNvdW50cnlEYXRhW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2NvdW50cmllc2ApO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSUNvdW50cnlEYXRhKTogUHJvbWlzZTxJQ291bnRyeURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc0FwaSBleHRlbmRzIEJhc2VBcGkge1xuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSUN1cnJlbmN5RGF0YSk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL2N1cnJlbmNpZXNgLCBrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9YCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElDdXJyZW5jeURhdGFbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY3VycmVuY2llc2ApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSYXRlKGtleTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeUV4Y2hhbmdlUmF0ZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9L3JhdGVzLyR7ZGF0ZX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElDdXJyZW5jeURhdGEpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBpZWNlQXR0cmlidXRlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xuICAgIHB1YmxpYyBhZGRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9L3ZhbHVlc2AsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPElWb2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9L3ZhbHVlc2AsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9YCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGFbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzYCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShrZXk6IHN0cmluZywgZGF0YTogSVBpZWNlQXR0cmlidXRlRGF0YSk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9YCwgZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGllY2VBdHRyaWJ1dGVWYWx1ZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcbiAgICBwdWJsaWMgZ2V0VXNhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZVZhbHVlVXNhZ2VEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXZhbHVlcy8ke2tleX0vJHt2YWx1ZX0vdXNhZ2VgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaWVjZUdyb3Vwc0FwaSBleHRlbmRzIEJhc2VBcGkge1xuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSVBpZWNlR3JvdXBEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZWdyb3Vwc2AsIG51bGwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3Vwcy8ke2lkfWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGFbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2Vncm91cHNgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QnlDb2RlKGNvZGU6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3Vwcy9ieS1jb2RlLyR7Y29kZX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElQaWVjZUdyb3VwRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGllY2VHcm91cFR5cGVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJUGllY2VHcm91cFR5cGVEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPElWb2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZWdyb3VwdHlwZXMvJHtpZH1gLCBudWxsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXB0eXBlcy8ke2lkfWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXB0eXBlc2ApO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaWVjZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcbiAgICBwdWJsaWMgY291bnQoZGF0YTogSVBpZWNlU2VsZWN0b3JEYXRhKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3QoYGFwaS9waWVjZXNgLCBkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElQaWVjZURhdGEpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3BpZWNlc2AsIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvcGllY2VzYCwgaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kKGRhdGE6IElQaWVjZVNlbGVjdG9yRGF0YSk6IFByb21pc2U8SVBhZ2VkUmVzdWx0RGF0YTxJUGllY2VEYXRhPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdChgYXBpL3BpZWNlc2AsIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VzLyR7aWR9YCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlcy9ieS1jb2RlLyR7Y29kZX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElQaWVjZURhdGEpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvcGllY2VzYCwgZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUnVudGltZUFwaSBleHRlbmRzIEJhc2VBcGkge1xuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxJUnVudGltZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3J1bnRpbWVgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uc0FwaSBleHRlbmRzIEJhc2VBcGkge1xuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxJU2Vzc2lvbkRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3Nlc3Npb25zYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBlcm1pc3Npb25zKCk6IFByb21pc2U8SVVzZXJQZXJtaXNzaW9uRGF0YVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9zZXNzaW9ucy9wZXJtaXNzaW9uc2ApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyKCk6IFByb21pc2U8SVVzZXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9zZXNzaW9ucy91c2VyYCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXNlckdyb3Vwc0FwaSBleHRlbmRzIEJhc2VBcGkge1xuICAgIHB1YmxpYyBhZGRVc2VyKHVzZXJHcm91cElkOiBudW1iZXIsIHVzZXJJZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3VzZXJzYCwgdXNlcklkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVXNlcnModXNlckdyb3VwSWQ6IG51bWJlciwgdXNlcklkczogbnVtYmVyW10pOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3VzZXJzYCwgdXNlcklkcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJVXNlckdyb3VwRGF0YSk6IFByb21pc2U8SVVzZXJHcm91cERhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3VzZXJncm91cHNgLCBudWxsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPElWb2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS91c2VyZ3JvdXBzLyR7aWR9YCwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJVXNlckdyb3VwRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcmdyb3Vwcy8ke2lkfWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJVXNlckdyb3VwRGF0YVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VyZ3JvdXBzYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbFJvb3ROb2RlcygpOiBQcm9taXNlPElVc2VyR3JvdXBEYXRhW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJncm91cHMvcm9vdG5vZGVzYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENoaWxkcmVuKHVzZXJHcm91cElkOiBudW1iZXIpOiBQcm9taXNlPElVc2VyR3JvdXBEYXRhW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJncm91cHMvJHt1c2VyR3JvdXBJZH0vY2hpbGRyZW5gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGFyZW50KHVzZXJHcm91cElkOiBudW1iZXIpOiBQcm9taXNlPElVc2VyR3JvdXBEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3BhcmVudGApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQZXJtaXNzaW9uKHVzZXJHcm91cElkOiBudW1iZXIsIHBlcm1pc3Npb25LZXk6IHN0cmluZyk6IFByb21pc2U8SVVzZXJHcm91cFBlcm1pc3Npb25EYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3Blcm1pc3Npb25zLyR7cGVybWlzc2lvbktleX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGVybWlzc2lvbnModXNlckdyb3VwSWQ6IG51bWJlcik6IFByb21pc2U8SVVzZXJHcm91cFBlcm1pc3Npb25EYXRhW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJncm91cHMvJHt1c2VyR3JvdXBJZH0vcGVybWlzc2lvbnNgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNlcnModXNlckdyb3VwSWQ6IG51bWJlcik6IFByb21pc2U8SVVzZXJEYXRhW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJncm91cHMvJHt1c2VyR3JvdXBJZH0vdXNlcnNgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlVXNlcih1c2VyR3JvdXBJZDogbnVtYmVyLCB1c2VySWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvdXNlcmdyb3Vwcy8ke3VzZXJHcm91cElkfS91c2Vyc2AsIHVzZXJJZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZVVzZXJzKHVzZXJHcm91cElkOiBudW1iZXIsIHVzZXJJZHM6IG51bWJlcltdKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvdXNlcmdyb3Vwcy8ke3VzZXJHcm91cElkfS91c2Vyc2AsIHVzZXJJZHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYXJlbnQodXNlckdyb3VwSWQ6IG51bWJlciwgcGFyZW50R3JvdXBJZDogbnVtYmVyKTogUHJvbWlzZTxJVm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3BhcmVudGAsIHBhcmVudEdyb3VwSWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQZXJtaXNzaW9uKHVzZXJHcm91cElkOiBudW1iZXIsIHBlcm1pc3Npb25LZXk6IHN0cmluZywgZXhwbGljaXRWYWx1ZTogYm9vbGVhbik6IFByb21pc2U8SVVzZXJHcm91cFBlcm1pc3Npb25EYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3VzZXJncm91cHMvJHt1c2VyR3JvdXBJZH0vcGVybWlzc2lvbnMvJHtwZXJtaXNzaW9uS2V5fWAsIGV4cGxpY2l0VmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQZXJtaXNzaW9ucyh1c2VyR3JvdXBJZDogbnVtYmVyLCBrZXlWYWx1ZURpYzoge1trZXk6IHN0cmluZ106IGJvb2xlYW59KTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3Blcm1pc3Npb25zYCwga2V5VmFsdWVEaWMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSVVzZXJHcm91cERhdGEpOiBQcm9taXNlPElVc2VyR3JvdXBEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3VzZXJncm91cHNgLCBudWxsKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbnNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJwZXJtaXNzaW9uc2ApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xuICAgIHB1YmxpYyBnZXQodXNlcklkOiBudW1iZXIpOiBQcm9taXNlPElVc2VyUHJvZmlsZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJwcm9maWxlcy8ke3VzZXJJZH1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElVc2VyUHJvZmlsZURhdGEpOiBQcm9taXNlPElVc2VyUHJvZmlsZURhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvdXNlcnByb2ZpbGVzYCwgZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXNlcnNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElVc2VyRGF0YSk6IFByb21pc2U8SVVzZXJEYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS91c2Vyc2AsIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUodXNlcklkOiBudW1iZXIpOiBQcm9taXNlPElWb2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS91c2Vycy8ke3VzZXJJZH1gLCBudWxsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElVc2VyRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcnMvJHtpZH1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SVVzZXJEYXRhW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJzYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBlcm1pc3Npb24odXNlcklkOiBudW1iZXIsIHBlcm1pc3Npb25LZXk6IHN0cmluZyk6IFByb21pc2U8SVVzZXJQZXJtaXNzaW9uRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcnMvJHt1c2VySWR9L3Blcm1pc3Npb25zLyR7cGVybWlzc2lvbktleX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGVybWlzc2lvbnModXNlcklkOiBudW1iZXIpOiBQcm9taXNlPElVc2VyUGVybWlzc2lvbkRhdGFbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcnMvJHt1c2VySWR9L3Blcm1pc3Npb25zYCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBlcm1pc3Npb24odXNlcklkOiBudW1iZXIsIHBlcm1pc3Npb25LZXk6IHN0cmluZywgZXhwbGljaXRWYWx1ZTogYm9vbGVhbik6IFByb21pc2U8SVVzZXJQZXJtaXNzaW9uRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS91c2Vycy8ke3VzZXJJZH0vcGVybWlzc2lvbnMvJHtwZXJtaXNzaW9uS2V5fWAsIGV4cGxpY2l0VmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQZXJtaXNzaW9ucyh1c2VySWQ6IG51bWJlciwga2V5VmFsdWVEaWM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvdXNlcnMvJHt1c2VySWR9L3Blcm1pc3Npb25zYCwga2V5VmFsdWVEaWMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSVVzZXJEYXRhKTogUHJvbWlzZTxJVXNlckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvdXNlcnNgLCBkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWZXJzaW9uQXBpIGV4dGVuZHMgQmFzZUFwaSB7XG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdmVyc2lvbmApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NrKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS92ZXJzaW9uL2xvY2tgKTtcbiAgICB9XG59XG5cbi8qIEVuZCBvZiBmaWxlICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

//# sourceMappingURL=data:application/json;base64,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LFVBQWMsSUFBZTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXBDQSxBQW9DQyxDQXBDNkIsY0FBTyxHQW9DcEM7QUFwQ1ksZ0JBQVEsV0FvQ3BCLENBQUE7QUFFRDtJQUFnQyw4QkFBTztJQUF2QztRQUFnQyw4QkFBTztJQVF2QyxDQUFDO0lBUFUsd0JBQUcsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSK0IsY0FBTyxHQVF0QztBQVJZLGtCQUFVLGFBUXRCLENBQUEiLCJmaWxlIjoicGltLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXHJcblxyXG4gICBBcHBsaWNhdGlvbjogIHBpbVxyXG4gICBWZXJzaW9uOiAgICAgIDAuMi4xXHJcbiAgIERhdGU6ICAgICAgICAgMjAxNi0wNS0wNlQwNjoyNDozMFpcclxuKi9cclxuXHJcbmltcG9ydCB7QmFzZUFwaSwgQmFzZUNvbmZpZ3VyYXRpb259IGZyb20gJy4vY29yZSc7XHJcbmltcG9ydCB7QnVpbGRBcHBsaWNhdGlvbiwgQnVpbGRWZXJzaW9uLCBCdWlsZENvbmZpZ3VyYXRpb259IGZyb20gJy4vbWV0YWRhdGEnO1xyXG5pbXBvcnQge0lBcGlDb25maWd1cmF0aW9ufSBmcm9tICdwaW0tY29yZSc7XHJcbmltcG9ydCB7SUNvdW50cnlEYXRhLCBJQ3VycmVuY3lEYXRhLCBJQ3VycmVuY3lFeGNoYW5nZVJhdGVEYXRhLCBJUGllY2VBdHRyaWJ1dGVEYXRhLCBJVm9pZCwgSVBpZWNlQXR0cmlidXRlVmFsdWVVc2FnZURhdGEsIElQaWVjZUdyb3VwRGF0YSwgSVBpZWNlR3JvdXBUeXBlRGF0YSwgSVBhZ2VkUmVzdWx0RGF0YSwgSVBpZWNlRGF0YSwgSVBpZWNlU2VsZWN0b3JEYXRhLCBJUnVudGltZURhdGEsIElTZXNzaW9uRGF0YSwgSVVzZXJEYXRhLCBJVXNlclBlcm1pc3Npb25EYXRhLCBJVXNlckdyb3VwRGF0YSwgSVVzZXJHcm91cFBlcm1pc3Npb25EYXRhLCBJVXNlclByb2ZpbGVEYXRhfSBmcm9tICdwaW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKSB7IFxyXG4gICAgICAgIHJldHVybiBCYXNlQ29uZmlndXJhdGlvbi5nZXREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERlZmF1bHQoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBCYXNlQ29uZmlndXJhdGlvbi5zZXREZWZhdWx0KGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE1ldGFkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7IEFwcGxpY2F0aW9uOiBCdWlsZEFwcGxpY2F0aW9uLCBDb25maWd1cmF0aW9uOiBCdWlsZENvbmZpZ3VyYXRpb24sIFZlcnNpb246IEJ1aWxkVmVyc2lvbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBnZXRQZXJtaXNzaW9ucygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2lkZW50aXR5L3Blcm1pc3Npb25zYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSUNvdW50cnlEYXRhKTogUHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShrZXk6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9jb3VudHJpZXNgLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9jb3VudHJpZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElDb3VudHJ5RGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2NvdW50cmllc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSUNvdW50cnlEYXRhKTogUHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9jb3VudHJpZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSUN1cnJlbmN5RGF0YSk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9jdXJyZW5jaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShrZXk6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9jdXJyZW5jaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElDdXJyZW5jeURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9jdXJyZW5jaWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJhdGUoa2V5OiBzdHJpbmcsIGRhdGU6IHN0cmluZyk6IFByb21pc2U8SUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fS9yYXRlcy8ke2RhdGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJQ3VycmVuY3lEYXRhKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VBdHRyaWJ1dGVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgYWRkVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9L3ZhbHVlc2AsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPElWb2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX0vdmFsdWVzYCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShrZXk6IHN0cmluZywgZGF0YTogSVBpZWNlQXR0cmlidXRlRGF0YSk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX1gLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlQXR0cmlidXRlVmFsdWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgZ2V0VXNhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZVZhbHVlVXNhZ2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlYXR0cmlidXRldmFsdWVzLyR7a2V5fS8ke3ZhbHVlfS91c2FnZWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VHcm91cHNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSVBpZWNlR3JvdXBEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvcGllY2Vncm91cHNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvcGllY2Vncm91cHNgLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3Vwcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3Vwc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCeUNvZGUoY29kZTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2Vncm91cHMvYnktY29kZS8ke2NvZGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJUGllY2VHcm91cERhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUdyb3VwVHlwZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPElWb2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL3BpZWNlZ3JvdXB0eXBlcy8ke2lkfWAsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3VwdHlwZXMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXB0eXBlc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlZ3JvdXB0eXBlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY291bnQoZGF0YTogSVBpZWNlU2VsZWN0b3JEYXRhKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSVBpZWNlRGF0YSk6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvcGllY2VzYCwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kKGRhdGE6IElQaWVjZVNlbGVjdG9yRGF0YSk6IFByb21pc2U8SVBhZ2VkUmVzdWx0RGF0YTxJUGllY2VEYXRhPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0KGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCeUNvZGUoY29kZTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlcy9ieS1jb2RlLyR7Y29kZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElQaWVjZURhdGEpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bnRpbWVBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxJUnVudGltZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcnVudGltZWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvbnNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxJU2Vzc2lvbkRhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvc2Vzc2lvbnNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGVybWlzc2lvbnMoKTogUHJvbWlzZTxJVXNlclBlcm1pc3Npb25EYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvc2Vzc2lvbnMvcGVybWlzc2lvbnNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXNlcigpOiBQcm9taXNlPElVc2VyRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9zZXNzaW9ucy91c2VyYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyR3JvdXBzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgYWRkVXNlcih1c2VyR3JvdXBJZDogbnVtYmVyLCB1c2VySWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3VzZXJzYCwgdXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVXNlcnModXNlckdyb3VwSWQ6IG51bWJlciwgdXNlcklkczogbnVtYmVyW10pOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3VzZXJncm91cHMvJHt1c2VyR3JvdXBJZH0vdXNlcnNgLCB1c2VySWRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElVc2VyR3JvdXBEYXRhKTogUHJvbWlzZTxJVXNlckdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS91c2VyZ3JvdXBzYCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxJVm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS91c2VyZ3JvdXBzLyR7aWR9YCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJVXNlckdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VyZ3JvdXBzLyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElVc2VyR3JvdXBEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcmdyb3Vwc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGxSb290Tm9kZXMoKTogUHJvbWlzZTxJVXNlckdyb3VwRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJncm91cHMvcm9vdG5vZGVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENoaWxkcmVuKHVzZXJHcm91cElkOiBudW1iZXIpOiBQcm9taXNlPElVc2VyR3JvdXBEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcmdyb3Vwcy8ke3VzZXJHcm91cElkfS9jaGlsZHJlbmApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYXJlbnQodXNlckdyb3VwSWQ6IG51bWJlcik6IFByb21pc2U8SVVzZXJHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcmdyb3Vwcy8ke3VzZXJHcm91cElkfS9wYXJlbnRgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGVybWlzc2lvbih1c2VyR3JvdXBJZDogbnVtYmVyLCBwZXJtaXNzaW9uS2V5OiBzdHJpbmcpOiBQcm9taXNlPElVc2VyR3JvdXBQZXJtaXNzaW9uRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3Blcm1pc3Npb25zLyR7cGVybWlzc2lvbktleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGVybWlzc2lvbnModXNlckdyb3VwSWQ6IG51bWJlcik6IFByb21pc2U8SVVzZXJHcm91cFBlcm1pc3Npb25EYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdXNlcmdyb3Vwcy8ke3VzZXJHcm91cElkfS9wZXJtaXNzaW9uc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVc2Vycyh1c2VyR3JvdXBJZDogbnVtYmVyKTogUHJvbWlzZTxJVXNlckRhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3VzZXJzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVVzZXIodXNlckdyb3VwSWQ6IG51bWJlciwgdXNlcklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvdXNlcmdyb3Vwcy8ke3VzZXJHcm91cElkfS91c2Vyc2AsIHVzZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVVzZXJzKHVzZXJHcm91cElkOiBudW1iZXIsIHVzZXJJZHM6IG51bWJlcltdKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS91c2VyZ3JvdXBzLyR7dXNlckdyb3VwSWR9L3VzZXJzYCwgdXNlcklkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBhcmVudCh1c2VyR3JvdXBJZDogbnVtYmVyLCBwYXJlbnRHcm91cElkOiBudW1iZXIpOiBQcm9taXNlPElWb2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvdXNlcmdyb3Vwcy8ke3VzZXJHcm91cElkfS9wYXJlbnRgLCBwYXJlbnRHcm91cElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGVybWlzc2lvbih1c2VyR3JvdXBJZDogbnVtYmVyLCBwZXJtaXNzaW9uS2V5OiBzdHJpbmcsIGV4cGxpY2l0VmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPElVc2VyR3JvdXBQZXJtaXNzaW9uRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3VzZXJncm91cHMvJHt1c2VyR3JvdXBJZH0vcGVybWlzc2lvbnMvJHtwZXJtaXNzaW9uS2V5fWAsIGV4cGxpY2l0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQZXJtaXNzaW9ucyh1c2VyR3JvdXBJZDogbnVtYmVyLCBrZXlWYWx1ZURpYzoge1trZXk6IHN0cmluZ106IGJvb2xlYW59KTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3VzZXJncm91cHMvJHt1c2VyR3JvdXBJZH0vcGVybWlzc2lvbnNgLCBrZXlWYWx1ZURpYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJVXNlckdyb3VwRGF0YSk6IFByb21pc2U8SVVzZXJHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS91c2VyZ3JvdXBzYCwgbnVsbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbnNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VycGVybWlzc2lvbnNgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGdldCh1c2VySWQ6IG51bWJlcik6IFByb21pc2U8SVVzZXJQcm9maWxlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2VycHJvZmlsZXMvJHt1c2VySWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJVXNlclByb2ZpbGVEYXRhKTogUHJvbWlzZTxJVXNlclByb2ZpbGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvdXNlcnByb2ZpbGVzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJVXNlckRhdGEpOiBQcm9taXNlPElVc2VyRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS91c2Vyc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUodXNlcklkOiBudW1iZXIpOiBQcm9taXNlPElWb2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL3VzZXJzLyR7dXNlcklkfWAsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVVzZXJEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJzLyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElVc2VyRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBlcm1pc3Npb24odXNlcklkOiBudW1iZXIsIHBlcm1pc3Npb25LZXk6IHN0cmluZyk6IFByb21pc2U8SVVzZXJQZXJtaXNzaW9uRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS91c2Vycy8ke3VzZXJJZH0vcGVybWlzc2lvbnMvJHtwZXJtaXNzaW9uS2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQZXJtaXNzaW9ucyh1c2VySWQ6IG51bWJlcik6IFByb21pc2U8SVVzZXJQZXJtaXNzaW9uRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3VzZXJzLyR7dXNlcklkfS9wZXJtaXNzaW9uc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQZXJtaXNzaW9uKHVzZXJJZDogbnVtYmVyLCBwZXJtaXNzaW9uS2V5OiBzdHJpbmcsIGV4cGxpY2l0VmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPElVc2VyUGVybWlzc2lvbkRhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS91c2Vycy8ke3VzZXJJZH0vcGVybWlzc2lvbnMvJHtwZXJtaXNzaW9uS2V5fWAsIGV4cGxpY2l0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQZXJtaXNzaW9ucyh1c2VySWQ6IG51bWJlciwga2V5VmFsdWVEaWM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS91c2Vycy8ke3VzZXJJZH0vcGVybWlzc2lvbnNgLCBrZXlWYWx1ZURpYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJVXNlckRhdGEpOiBQcm9taXNlPElVc2VyRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3VzZXJzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJzaW9uQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3ZlcnNpb25gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9jaygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS92ZXJzaW9uL2xvY2tgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogRW5kIG9mIGZpbGUgKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

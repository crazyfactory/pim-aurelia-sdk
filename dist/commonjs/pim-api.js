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
var VersionApi = (function (_super) {
    __extends(VersionApi, _super);
    function VersionApi() {
        _super.apply(this, arguments);
    }
    VersionApi.prototype.get = function () {
        return this._get("api/version");
    };
    return VersionApi;
}(core_1.BaseApi));
exports.VersionApi = VersionApi;

//# sourceMappingURL=data:application/json;base64,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TSw2QkFBUyxHQUFoQixVQUFpQixJQUFZO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUFzQixJQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sMEJBQU0sR0FBYixVQUFjLElBQWdCO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxDQTVCOEIsY0FBTyxHQTRCckM7QUE1QlksaUJBQVMsWUE0QnJCLENBQUE7QUFFRDtJQUFnQyw4QkFBTztJQUF2QztRQUFnQyw4QkFBTztJQUl2QyxDQUFDO0lBSFUsd0JBQUcsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCxpQkFBQztBQUFELENBSkEsQUFJQyxDQUorQixjQUFPLEdBSXRDO0FBSlksa0JBQVUsYUFJdEIsQ0FBQTtBQUVEO0lBQWdDLDhCQUFPO0lBQXZDO1FBQWdDLDhCQUFPO0lBSXZDLENBQUM7SUFIVSx3QkFBRyxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSitCLGNBQU8sR0FJdEM7QUFKWSxrQkFBVSxhQUl0QixDQUFBIiwiZmlsZSI6InBpbS1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgQXBwbGljYXRpb246ICBwaW1cclxuICAgVmVyc2lvbjogICAgICAwLjEuMVxyXG4gICBEYXRlOiAgICAgICAgIDIwMTYtMDQtMjVUMDk6Mjk6NDBaXHJcbiovXHJcblxyXG5pbXBvcnQge0Jhc2VBcGksIEJhc2VDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvcmUnO1xyXG5pbXBvcnQge0J1aWxkQXBwbGljYXRpb24sIEJ1aWxkVmVyc2lvbiwgQnVpbGRDb25maWd1cmF0aW9ufSBmcm9tICcuL21ldGFkYXRhJztcclxuaW1wb3J0IHtJQXBpQ29uZmlndXJhdGlvbn0gZnJvbSAncGltLWNvcmUnO1xyXG5pbXBvcnQge0lDb3VudHJ5RGF0YSwgSUN1cnJlbmN5RGF0YSwgSUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YSwgSVBpZWNlQXR0cmlidXRlRGF0YSwgSVZvaWQsIElQaWVjZUF0dHJpYnV0ZVZhbHVlVXNhZ2VEYXRhLCBJUGllY2VHcm91cERhdGEsIElQaWVjZUdyb3VwVHlwZURhdGEsIElQYWdlZFJlc3VsdERhdGEsIElQaWVjZURhdGEsIElQaWVjZVNlbGVjdG9yRGF0YSwgSVJ1bnRpbWVEYXRhfSBmcm9tICdwaW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKSB7IFxyXG4gICAgICAgIHJldHVybiBCYXNlQ29uZmlndXJhdGlvbi5nZXREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERlZmF1bHQoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBCYXNlQ29uZmlndXJhdGlvbi5zZXREZWZhdWx0KGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE1ldGFkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7IEFwcGxpY2F0aW9uOiBCdWlsZEFwcGxpY2F0aW9uLCBDb25maWd1cmF0aW9uOiBCdWlsZENvbmZpZ3VyYXRpb24sIFZlcnNpb246IEJ1aWxkVmVyc2lvbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ291bnRyaWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElDb3VudHJ5RGF0YSk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL2NvdW50cmllc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvY291bnRyaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY291bnRyaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJQ291bnRyeURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9jb3VudHJpZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElDb3VudHJ5RGF0YSk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElDdXJyZW5jeURhdGEpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvY3VycmVuY2llc2AsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY3VycmVuY2llc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYXRlKGtleTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeUV4Y2hhbmdlUmF0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY3VycmVuY2llcy8ke2tleX0vcmF0ZXMvJHtkYXRlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSUN1cnJlbmN5RGF0YSk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL2N1cnJlbmNpZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlQXR0cmlidXRlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGFkZFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fS92YWx1ZXNgLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxJVm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9L3ZhbHVlc2AsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlYXR0cmlidXRlc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoa2V5OiBzdHJpbmcsIGRhdGE6IElQaWVjZUF0dHJpYnV0ZURhdGEpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9YCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUF0dHJpYnV0ZVZhbHVlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGdldFVzYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVWYWx1ZVVzYWdlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXZhbHVlcy8ke2tleX0vJHt2YWx1ZX0vdXNhZ2VgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlR3JvdXBzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElQaWVjZUdyb3VwRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL3BpZWNlZ3JvdXBzYCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2Vncm91cHMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2Vncm91cHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QnlDb2RlKGNvZGU6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXBzL2J5LWNvZGUvJHtjb2RlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSVBpZWNlR3JvdXBEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9waWVjZWdyb3Vwc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VHcm91cFR5cGVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElQaWVjZUdyb3VwVHlwZURhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvcGllY2Vncm91cHR5cGVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxJVm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZWdyb3VwdHlwZXMvJHtpZH1gLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2Vncm91cHR5cGVzLyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3VwdHlwZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElQaWVjZUdyb3VwVHlwZURhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwVHlwZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGNvdW50KGRhdGE6IElQaWVjZVNlbGVjdG9yRGF0YSk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3QoYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElQaWVjZURhdGEpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL3BpZWNlc2AsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZChkYXRhOiBJUGllY2VTZWxlY3RvckRhdGEpOiBQcm9taXNlPElQYWdlZFJlc3VsdERhdGE8SVBpZWNlRGF0YT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZXMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QnlDb2RlKGNvZGU6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZXMvYnktY29kZS8ke2NvZGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJUGllY2VEYXRhKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSdW50aW1lQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8SVJ1bnRpbWVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3J1bnRpbWVgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnNpb25BcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvdmVyc2lvbmApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

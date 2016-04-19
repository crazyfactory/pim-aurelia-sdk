"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_api_core_1 = require('./pim-api-core');
var Configuration = (function () {
    function Configuration() {
    }
    Configuration.getDefault = function () {
        return pim_api_core_1.BaseConfiguration.getDefault();
    };
    Configuration.setDefault = function (config) {
        return pim_api_core_1.BaseConfiguration.setDefault(config);
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
}(pim_api_core_1.BaseApi));
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
}(pim_api_core_1.BaseApi));
exports.CurrenciesApi = CurrenciesApi;
var PieceAttributesApi = (function (_super) {
    __extends(PieceAttributesApi, _super);
    function PieceAttributesApi() {
        _super.apply(this, arguments);
    }
    PieceAttributesApi.prototype.addValue = function (key, value) {
        return this._put("api/pieceattributes/" + key + "/values", value);
    };
    PieceAttributesApi.prototype.create = function (key) {
        return this._get("api/pieceattributes/create/" + key);
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
}(pim_api_core_1.BaseApi));
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
}(pim_api_core_1.BaseApi));
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
}(pim_api_core_1.BaseApi));
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
        return this._delete("api/piecegrouptypes", id);
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
}(pim_api_core_1.BaseApi));
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
}(pim_api_core_1.BaseApi));
exports.PiecesApi = PiecesApi;

//# sourceMappingURL=data:application/json;base64,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QUMsSUFBSSxDQUFDLHdCQUFzQixJQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sMEJBQU0sR0FBYixVQUFjLElBQWdCO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxDQTVCOEIsc0JBQU8sR0E0QnJDO0FBNUJZLGlCQUFTLFlBNEJyQixDQUFBIiwiZmlsZSI6InBpbS1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgT3JpZ2luOiAgcGltXHJcbiAgIFZlcnNpb246IDEuMC4wLWRldlxyXG4gICBEYXRlOiAgICA0LzE5LzIwMTYgMDk6NTc6MzBcclxuKi9cclxuXHJcbmltcG9ydCB7QmFzZUFwaSwgQmFzZUNvbmZpZ3VyYXRpb259IGZyb20gJy4vcGltLWFwaS1jb3JlJztcclxuaW1wb3J0IHtJQ291bnRyeURhdGEsIElDdXJyZW5jeURhdGEsIElDdXJyZW5jeUV4Y2hhbmdlUmF0ZURhdGEsIElQaWVjZUF0dHJpYnV0ZURhdGEsIElWb2lkLCBJUGllY2VBdHRyaWJ1dGVWYWx1ZVVzYWdlRGF0YSwgSVBpZWNlR3JvdXBEYXRhLCBJUGllY2VHcm91cFR5cGVEYXRhLCBJUGFnZWRSZXN1bHREYXRhLCBJUGllY2VEYXRhLCBJUGllY2VTZWxlY3RvckRhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuaW1wb3J0IHtJQXBpQ29uZmlndXJhdGlvbn0gZnJvbSBcInBpbS1jb3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJhc2VDb25maWd1cmF0aW9uLmdldERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0RGVmYXVsdChjb25maWc6IElBcGlDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIEJhc2VDb25maWd1cmF0aW9uLnNldERlZmF1bHQoY29uZmlnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvdW50cmllc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJQ291bnRyeURhdGEpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9jb3VudHJpZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGtleTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL2NvdW50cmllc2AsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2NvdW50cmllcy8ke2tleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SUNvdW50cnlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY291bnRyaWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJQ291bnRyeURhdGEpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL2NvdW50cmllc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJQ3VycmVuY3lEYXRhKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL2N1cnJlbmNpZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGtleTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL2N1cnJlbmNpZXNgLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY3VycmVuY2llcy8ke2tleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SUN1cnJlbmN5RGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2N1cnJlbmNpZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmF0ZShrZXk6IHN0cmluZywgZGF0ZTogc3RyaW5nKTogUHJvbWlzZTxJQ3VycmVuY3lFeGNoYW5nZVJhdGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9L3JhdGVzLyR7ZGF0ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElDdXJyZW5jeURhdGEpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9jdXJyZW5jaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUF0dHJpYnV0ZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBhZGRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX0vdmFsdWVzYCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzL2NyZWF0ZS8ke2tleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPElWb2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX0vdmFsdWVzYCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShrZXk6IHN0cmluZywgZGF0YTogSVBpZWNlQXR0cmlidXRlRGF0YSk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlYXR0cmlidXRlcy8ke2tleX1gLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlQXR0cmlidXRlVmFsdWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgZ2V0VXNhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZVZhbHVlVXNhZ2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlYXR0cmlidXRldmFsdWVzLyR7a2V5fS8ke3ZhbHVlfS91c2FnZWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VHcm91cHNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSVBpZWNlR3JvdXBEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvcGllY2Vncm91cHNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvcGllY2Vncm91cHNgLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3Vwcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3Vwc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCeUNvZGUoY29kZTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2Vncm91cHMvYnktY29kZS8ke2NvZGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJUGllY2VHcm91cERhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUdyb3VwVHlwZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvcGllY2Vncm91cHR5cGVzYCwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3VwdHlwZXMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXB0eXBlc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSVBpZWNlR3JvdXBUeXBlRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBUeXBlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlZ3JvdXB0eXBlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY291bnQoZGF0YTogSVBpZWNlU2VsZWN0b3JEYXRhKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoZGF0YTogSVBpZWNlRGF0YSk6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvcGllY2VzYCwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kKGRhdGE6IElQaWVjZVNlbGVjdG9yRGF0YSk6IFByb21pc2U8SVBhZ2VkUmVzdWx0RGF0YTxJUGllY2VEYXRhPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0KGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCeUNvZGUoY29kZTogc3RyaW5nKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlcy9ieS1jb2RlLyR7Y29kZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElQaWVjZURhdGEpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2goYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_api_core_1 = require('./pim-api-core');
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

//# sourceMappingURL=data:application/json;base64,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InNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXHJcblxyXG4gICBPcmlnaW46ICBwaW1cclxuICAgVmVyc2lvbjogMS4wLjAtZGV2XHJcbiAgIERhdGU6ICAgIDQvMTgvMjAxNiAxNjozNjowOFxyXG4qL1xyXG5cclxuaW1wb3J0IHtCYXNlQXBpfSBmcm9tICcuL3BpbS1hcGktY29yZSc7XHJcbmltcG9ydCB7SUNvdW50cnlEYXRhLCBJQ3VycmVuY3lEYXRhLCBJQ3VycmVuY3lFeGNoYW5nZVJhdGVEYXRhLCBJUGllY2VBdHRyaWJ1dGVEYXRhLCBJVm9pZCwgSVBpZWNlQXR0cmlidXRlVmFsdWVVc2FnZURhdGEsIElQaWVjZUdyb3VwRGF0YSwgSVBpZWNlR3JvdXBUeXBlRGF0YSwgSVBhZ2VkUmVzdWx0RGF0YSwgSVBpZWNlRGF0YSwgSVBpZWNlU2VsZWN0b3JEYXRhfSBmcm9tICdwaW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ291bnRyaWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElDb3VudHJ5RGF0YSk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL2NvdW50cmllc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvY291bnRyaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY291bnRyaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJQ291bnRyeURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9jb3VudHJpZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElDb3VudHJ5RGF0YSk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IElDdXJyZW5jeURhdGEpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvY3VycmVuY2llc2AsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY3VycmVuY2llc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYXRlKGtleTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeUV4Y2hhbmdlUmF0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvY3VycmVuY2llcy8ke2tleX0vcmF0ZXMvJHtkYXRlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSUN1cnJlbmN5RGF0YSk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL2N1cnJlbmNpZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlQXR0cmlidXRlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGFkZFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHV0KGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fS92YWx1ZXNgLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZShrZXk6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXMvY3JlYXRlLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8SVZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlKGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fS92YWx1ZXNgLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElQaWVjZUF0dHJpYnV0ZURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWF0dHJpYnV0ZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGtleTogc3RyaW5nLCBkYXRhOiBJUGllY2VBdHRyaWJ1dGVEYXRhKTogUHJvbWlzZTxJUGllY2VBdHRyaWJ1dGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvcGllY2VhdHRyaWJ1dGVzLyR7a2V5fWAsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VBdHRyaWJ1dGVWYWx1ZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBnZXRVc2FnZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlQXR0cmlidXRlVmFsdWVVc2FnZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VhdHRyaWJ1dGV2YWx1ZXMvJHtrZXl9LyR7dmFsdWV9L3VzYWdlYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZUdyb3Vwc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJUGllY2VHcm91cERhdGEpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdXQoYGFwaS9waWVjZWdyb3Vwc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZWdyb3Vwc2AsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXBzLyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXBzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZUdyb3VwRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXQoYGFwaS9waWVjZWdyb3Vwcy9ieS1jb2RlLyR7Y29kZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IElQaWVjZUdyb3VwRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvcGllY2Vncm91cHNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlR3JvdXBUeXBlc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJUGllY2VHcm91cFR5cGVEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3BpZWNlZ3JvdXB0eXBlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZWdyb3VwdHlwZXNgLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChgYXBpL3BpZWNlZ3JvdXB0eXBlcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2Vncm91cHR5cGVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBJUGllY2VHcm91cFR5cGVEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cFR5cGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoKGBhcGkvcGllY2Vncm91cHR5cGVzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBjb3VudChkYXRhOiBJUGllY2VTZWxlY3RvckRhdGEpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0KGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBJUGllY2VEYXRhKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUoYGFwaS9waWVjZXNgLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmQoZGF0YTogSVBpZWNlU2VsZWN0b3JEYXRhKTogUHJvbWlzZTxJUGFnZWRSZXN1bHREYXRhPElQaWVjZURhdGE+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3QoYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VzLyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KGBhcGkvcGllY2VzL2J5LWNvZGUvJHtjb2RlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogSVBpZWNlRGF0YSk6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogRW5kIG9mIGZpbGUgKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_api_1 = require('pim-base-api');
var CountriesApi = (function (_super) {
    __extends(CountriesApi, _super);
    function CountriesApi() {
        _super.apply(this, arguments);
    }
    CountriesApi.prototype.Create = function (data) {
        return this.put("api/countries", data);
    };
    CountriesApi.prototype.Delete = function (key) {
        return this.delete("api/countries", key);
    };
    CountriesApi.prototype.Get = function (key) {
        return this.get("api/countries/" + key);
    };
    CountriesApi.prototype.GetAll = function () {
        return this.get("api/countries");
    };
    CountriesApi.prototype.Update = function (data) {
        return this.patch("api/countries", data);
    };
    return CountriesApi;
}(pim_base_api_1.BaseApi));
exports.CountriesApi = CountriesApi;
var CurrenciesApi = (function (_super) {
    __extends(CurrenciesApi, _super);
    function CurrenciesApi() {
        _super.apply(this, arguments);
    }
    CurrenciesApi.prototype.Create = function (data) {
        return this.put("api/currencies", data);
    };
    CurrenciesApi.prototype.Delete = function (key) {
        return this.delete("api/currencies", key);
    };
    CurrenciesApi.prototype.Get = function (key) {
        return this.get("api/currencies/" + key);
    };
    CurrenciesApi.prototype.GetAll = function () {
        return this.get("api/currencies");
    };
    CurrenciesApi.prototype.GetRate = function (key, date) {
        return this.get("api/currencies/" + key + "/rates/" + date);
    };
    CurrenciesApi.prototype.Update = function (data) {
        return this.patch("api/currencies", data);
    };
    return CurrenciesApi;
}(pim_base_api_1.BaseApi));
exports.CurrenciesApi = CurrenciesApi;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EsNkJBQXNCLGNBQWMsQ0FBQyxDQUFBO0FBR3JDO0lBQWtDLGdDQUFPO0lBQXpDO1FBQWtDLDhCQUFPO0lBb0J6QyxDQUFDO0lBbkJVLDZCQUFNLEdBQWIsVUFBYyxJQUFpQjtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxHQUFVO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sMEJBQUcsR0FBVixVQUFXLEdBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQWlCLEdBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxJQUFpQjtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FwQkEsQUFvQkMsQ0FwQmlDLHNCQUFPLEdBb0J4QztBQXBCWSxvQkFBWSxlQW9CeEIsQ0FBQTtBQUVEO0lBQW1DLGlDQUFPO0lBQTFDO1FBQW1DLDhCQUFPO0lBd0IxQyxDQUFDO0lBdkJVLDhCQUFNLEdBQWIsVUFBYyxJQUFrQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sOEJBQU0sR0FBYixVQUFjLEdBQVU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLDJCQUFHLEdBQVYsVUFBVyxHQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFrQixHQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLCtCQUFPLEdBQWQsVUFBZSxHQUFVLEVBQUUsSUFBVztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsR0FBRyxlQUFVLElBQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsSUFBa0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F4QkEsQUF3QkMsQ0F4QmtDLHNCQUFPLEdBd0J6QztBQXhCWSxxQkFBYSxnQkF3QnpCLENBQUEiLCJmaWxlIjoicGltLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXHJcblxyXG4gICBWZXJzaW9uOiBERVZcclxuICAgRGF0ZTogICAgNC8xMS8yMDE2IDEyOjA1OjI0XHJcbiovXHJcblxyXG5pbXBvcnQge0Jhc2VBcGl9IGZyb20gJ3BpbS1iYXNlLWFwaSc7XHJcbmltcG9ydCB7SUNvdW50cnlEYXRhLCBJQ3VycmVuY3lEYXRhLCBJQ3VycmVuY3lFeGNoYW5nZVJhdGVEYXRhLCBJUGllY2VBdHRyaWJ1dGVEYXRhLCBJUGllY2VHcm91cERhdGEsIElQaWVjZUdyb3VwVHlwZURhdGEsIElQYWdlZFJlc3VsdERhdGEsIElQaWVjZURhdGEsIElQaWVjZVNlbGVjdG9yRGF0YX0gZnJvbSAncGltLWRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvdW50cmllc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIENyZWF0ZShkYXRhOklDb3VudHJ5RGF0YSk6UHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoYGFwaS9jb3VudHJpZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRGVsZXRlKGtleTpzdHJpbmcpOlByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL2NvdW50cmllc2AsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldChrZXk6c3RyaW5nKTpQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2NvdW50cmllcy8ke2tleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0QWxsKCk6UHJvbWlzZTxJQ291bnRyeURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2NvdW50cmllc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGUoZGF0YTpJQ291bnRyeURhdGEpOlByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2goYGFwaS9jb3VudHJpZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBDcmVhdGUoZGF0YTpJQ3VycmVuY3lEYXRhKTpQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoYGFwaS9jdXJyZW5jaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERlbGV0ZShrZXk6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoYGFwaS9jdXJyZW5jaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0KGtleTpzdHJpbmcpOlByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEFsbCgpOlByb21pc2U8SUN1cnJlbmN5RGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY3VycmVuY2llc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRSYXRlKGtleTpzdHJpbmcsIGRhdGU6c3RyaW5nKTpQcm9taXNlPElDdXJyZW5jeUV4Y2hhbmdlUmF0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fS9yYXRlcy8ke2RhdGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZShkYXRhOklDdXJyZW5jeURhdGEpOlByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

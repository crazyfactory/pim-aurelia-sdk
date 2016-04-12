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
}(pim_api_core_1.BaseApi));
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
}(pim_api_core_1.BaseApi));
exports.CurrenciesApi = CurrenciesApi;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EsNkJBQXNCLGdCQUFnQixDQUFDLENBQUE7QUFHdkM7SUFBa0MsZ0NBQU87SUFBekM7UUFBa0MsOEJBQU87SUFvQnpDLENBQUM7SUFuQlUsNkJBQU0sR0FBYixVQUFjLElBQWtCO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLEdBQVU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSwwQkFBRyxHQUFWLFVBQVcsR0FBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsR0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLElBQWlCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCaUMsc0JBQU8sR0FvQnhDO0FBcEJZLG9CQUFZLGVBb0J4QixDQUFBO0FBRUQ7SUFBbUMsaUNBQU87SUFBMUM7UUFBbUMsOEJBQU87SUF3QjFDLENBQUM7SUF2QlUsOEJBQU0sR0FBYixVQUFjLElBQWtCO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsR0FBVTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLEdBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQWtCLEdBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLEdBQVUsRUFBRSxJQUFXO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFrQixHQUFHLGVBQVUsSUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxJQUFrQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxDQXhCa0Msc0JBQU8sR0F3QnpDO0FBeEJZLHFCQUFhLGdCQXdCekIsQ0FBQSIsImZpbGUiOiJwaW0tYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWRcclxuXHJcbiAgIFZlcnNpb246IERFVlxyXG4gICBEYXRlOiAgICA0LzExLzIwMTYgMTI6MDU6MjRcclxuKi9cclxuXHJcbmltcG9ydCB7QmFzZUFwaX0gZnJvbSAnLi9waW0tYXBpLWNvcmUnO1xyXG5pbXBvcnQge0lDb3VudHJ5RGF0YSwgSUN1cnJlbmN5RGF0YSwgSUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YSwgSVBpZWNlQXR0cmlidXRlRGF0YSwgSVBpZWNlR3JvdXBEYXRhLCBJUGllY2VHcm91cFR5cGVEYXRhLCBJUGFnZWRSZXN1bHREYXRhLCBJUGllY2VEYXRhLCBJUGllY2VTZWxlY3RvckRhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBDcmVhdGUoZGF0YTogSUNvdW50cnlEYXRhKTpQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dChgYXBpL2NvdW50cmllc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEZWxldGUoa2V5OnN0cmluZyk6UHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvY291bnRyaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0KGtleTpzdHJpbmcpOlByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY291bnRyaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRBbGwoKTpQcm9taXNlPElDb3VudHJ5RGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY291bnRyaWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZShkYXRhOklDb3VudHJ5RGF0YSk6UHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRjaChgYXBpL2NvdW50cmllc2AsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc0FwaSBleHRlbmRzIEJhc2VBcGkge1xyXG4gICAgcHVibGljIENyZWF0ZShkYXRhOklDdXJyZW5jeURhdGEpOlByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dChgYXBpL2N1cnJlbmNpZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRGVsZXRlKGtleTpzdHJpbmcpOlByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL2N1cnJlbmNpZXNgLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXQoa2V5OnN0cmluZyk6UHJvbWlzZTxJQ3VycmVuY3lEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY3VycmVuY2llcy8ke2tleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0QWxsKCk6UHJvbWlzZTxJQ3VycmVuY3lEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFJhdGUoa2V5OnN0cmluZywgZGF0ZTpzdHJpbmcpOlByb21pc2U8SUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9L3JhdGVzLyR7ZGF0ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlKGRhdGE6SUN1cnJlbmN5RGF0YSk6UHJvbWlzZTxJQ3VycmVuY3lEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2goYGFwaS9jdXJyZW5jaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

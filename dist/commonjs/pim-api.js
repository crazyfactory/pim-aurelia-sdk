"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_api_1 = require('./pim-base-api');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EsNkJBQXNCLGdCQUFnQixDQUFDLENBQUE7QUFHdkM7SUFBa0MsZ0NBQU87SUFBekM7UUFBa0MsOEJBQU87SUFvQnpDLENBQUM7SUFuQlUsNkJBQU0sR0FBYixVQUFjLElBQWlCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLEdBQVU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSwwQkFBRyxHQUFWLFVBQVcsR0FBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsR0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLElBQWlCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCaUMsc0JBQU8sR0FvQnhDO0FBcEJZLG9CQUFZLGVBb0J4QixDQUFBO0FBRUQ7SUFBbUMsaUNBQU87SUFBMUM7UUFBbUMsOEJBQU87SUF3QjFDLENBQUM7SUF2QlUsOEJBQU0sR0FBYixVQUFjLElBQWtCO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsR0FBVTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLEdBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQWtCLEdBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLEdBQVUsRUFBRSxJQUFXO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFrQixHQUFHLGVBQVUsSUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxJQUFrQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxDQXhCa0Msc0JBQU8sR0F3QnpDO0FBeEJZLHFCQUFhLGdCQXdCekIsQ0FBQSIsImZpbGUiOiJwaW0tYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWRcclxuXHJcbiAgIFZlcnNpb246IERFVlxyXG4gICBEYXRlOiAgICA0LzExLzIwMTYgMTI6MDU6MjRcclxuKi9cclxuXHJcbmltcG9ydCB7QmFzZUFwaX0gZnJvbSAnLi9waW0tYmFzZS1hcGknO1xyXG5pbXBvcnQge0lDb3VudHJ5RGF0YSwgSUN1cnJlbmN5RGF0YSwgSUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YSwgSVBpZWNlQXR0cmlidXRlRGF0YSwgSVBpZWNlR3JvdXBEYXRhLCBJUGllY2VHcm91cFR5cGVEYXRhLCBJUGFnZWRSZXN1bHREYXRhLCBJUGllY2VEYXRhLCBJUGllY2VTZWxlY3RvckRhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNBcGkgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICAgIHB1YmxpYyBDcmVhdGUoZGF0YTpJQ291bnRyeURhdGEpOlByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERlbGV0ZShrZXk6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoYGFwaS9jb3VudHJpZXNgLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXQoa2V5OnN0cmluZyk6UHJvbWlzZTxJQ291bnRyeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jb3VudHJpZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEFsbCgpOlByb21pc2U8SUNvdW50cnlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jb3VudHJpZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlKGRhdGE6SUNvdW50cnlEYXRhKTpQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzQXBpIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgICBwdWJsaWMgQ3JlYXRlKGRhdGE6SUN1cnJlbmN5RGF0YSk6UHJvbWlzZTxJQ3VycmVuY3lEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEZWxldGUoa2V5OnN0cmluZyk6UHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvY3VycmVuY2llc2AsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldChrZXk6c3RyaW5nKTpQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRBbGwoKTpQcm9taXNlPElDdXJyZW5jeURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2N1cnJlbmNpZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0UmF0ZShrZXk6c3RyaW5nLCBkYXRlOnN0cmluZyk6UHJvbWlzZTxJQ3VycmVuY3lFeGNoYW5nZVJhdGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY3VycmVuY2llcy8ke2tleX0vcmF0ZXMvJHtkYXRlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGUoZGF0YTpJQ3VycmVuY3lEYXRhKTpQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRjaChgYXBpL2N1cnJlbmNpZXNgLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogRW5kIG9mIGZpbGUgKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

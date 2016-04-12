"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
var BaseApi = (function () {
    function BaseApi(config) {
        if (config === void 0) { config = null; }
        config = config || {};
    }
    Object.defineProperty(BaseApi.prototype, "http", {
        get: function () {
            var _this = this;
            if (!this._http) {
                this._http = new aurelia_fetch_client_1.HttpClient();
                this._http.configure(function (config) {
                    return config
                        .useStandardConfiguration()
                        .withBaseUrl(_this._config.baseUrl);
                });
            }
            return this._http;
        },
        enumerable: true,
        configurable: true
    });
    BaseApi.prototype.fetch = function (method, url, data) {
        if (data === void 0) { data = undefined; }
        return this.http
            .fetch(url, {
            method: method,
            body: aurelia_fetch_client_1.json(data)
        })
            .then(function (response) { return response.json(); });
    };
    BaseApi.prototype.get = function (url) {
        return this.fetch("get", url);
    };
    BaseApi.prototype.post = function (url, data) {
        return this.fetch("post", url, data);
    };
    BaseApi.prototype.patch = function (url, data) {
        return this.fetch("patch", url, data);
    };
    BaseApi.prototype.delete = function (url, data) {
        return this.fetch("delete", url, data);
    };
    BaseApi.prototype.put = function (url, data) {
        return this.fetch("put", url, data);
    };
    BaseApi.prototype.head = function (url, data) {
        return this.fetch("head", url, data);
    };
    BaseApi._defaultConfig = {
        baseUrl: 'http://localhost:5000/api/'
    };
    return BaseApi;
}());
exports.BaseApi = BaseApi;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1hcGktY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFDdEQsUUFBTyxPQUFPLENBQUMsQ0FBQTtBQUdmO0lBTUMsaUJBQVksTUFBZ0M7UUFBaEMsc0JBQWdDLEdBQWhDLGFBQWdDO1FBRTNDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBSXZCLENBQUM7SUFNRCxzQkFBYyx5QkFBSTthQUFsQjtZQUFBLGlCQVVDO1lBVEEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlDQUFVLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO29CQUMxQixPQUFBLE1BQU07eUJBQ0osd0JBQXdCLEVBQUU7eUJBQzFCLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFGbkMsQ0FFbUMsQ0FDbkMsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVTLHVCQUFLLEdBQWYsVUFBZ0IsTUFBYSxFQUFFLEdBQVUsRUFBRSxJQUFvQjtRQUFwQixvQkFBb0IsR0FBcEIsZ0JBQW9CO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSwyQkFBSSxDQUFDLElBQUksQ0FBQztTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFUyxxQkFBRyxHQUFiLFVBQWMsR0FBVTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLHNCQUFJLEdBQWQsVUFBZSxHQUFVLEVBQUUsSUFBUTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyx1QkFBSyxHQUFmLFVBQWdCLEdBQVUsRUFBRSxJQUFRO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVTLHdCQUFNLEdBQWhCLFVBQWlCLEdBQVUsRUFBRSxJQUFRO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVTLHFCQUFHLEdBQWIsVUFBYyxHQUFVLEVBQUUsSUFBUTtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFUyxzQkFBSSxHQUFkLFVBQWUsR0FBVSxFQUFFLElBQVE7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBM0RnQixzQkFBYyxHQUFzQjtRQUNwRCxPQUFPLEVBQUUsNEJBQTRCO0tBQ3JDLENBQUM7SUEwREgsY0FBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFksZUFBTyxVQThEbkIsQ0FBQSIsImZpbGUiOiJwaW0tYXBpLWNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0ICdmZXRjaCc7XHJcbmltcG9ydCB7SUFwaUNvbmZpZ3VyYXRpb259IGZyb20gJ3BpbS1jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQXBpIHtcclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBfZGVmYXVsdENvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24gPSB7XHJcblx0XHRiYXNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS8nXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbiA9IG51bGwpIHtcclxuXHRcdC8vIFJlc2V0IHRvIGVtcHR5IGlmIGZhbHN5XHJcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG5cdFx0Ly8gTWVyZ2Ugd2l0aCBkZWZhdWx0IHNldGluZ3NcclxuXHRcdC8vdGhpcy5fY29uZmlnID0gJC5leHRlbmQoQmFzZUFwaS5fZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQ7XHJcblxyXG5cdHByaXZhdGUgX2NvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb247XHJcblxyXG5cdHByb3RlY3RlZCBnZXQgaHR0cCgpOkh0dHBDbGllbnQge1xyXG5cdFx0aWYgKCF0aGlzLl9odHRwKSB7XHJcblx0XHRcdHRoaXMuX2h0dHAgPSBuZXcgSHR0cENsaWVudCgpO1xyXG5cdFx0XHR0aGlzLl9odHRwLmNvbmZpZ3VyZShjb25maWcgPT5cclxuXHRcdFx0XHRjb25maWdcclxuXHRcdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG5cdFx0XHRcdFx0LndpdGhCYXNlVXJsKHRoaXMuX2NvbmZpZy5iYXNlVXJsKVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHA7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZmV0Y2gobWV0aG9kOnN0cmluZywgdXJsOnN0cmluZywgZGF0YTphbnkgPSB1bmRlZmluZWQpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5mZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0XHRib2R5OiBqc29uKGRhdGEpXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0KHVybDpzdHJpbmcpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImdldFwiLCB1cmwpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHBvc3QodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBwYXRjaCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwicGF0Y2hcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBkZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImRlbGV0ZVwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHB1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaGVhZCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwiaGVhZFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

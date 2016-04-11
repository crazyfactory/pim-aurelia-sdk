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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1iYXNlLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFDdEQsUUFBTyxPQUFPLENBQUMsQ0FBQTtBQUdmO0lBTUMsaUJBQVksTUFBZ0M7UUFBaEMsc0JBQWdDLEdBQWhDLGFBQWdDO1FBRTNDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBSXZCLENBQUM7SUFNRCxzQkFBYyx5QkFBSTthQUFsQjtZQUFBLGlCQVVDO1lBVEEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlDQUFVLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO29CQUMxQixPQUFBLE1BQU07eUJBQ0osd0JBQXdCLEVBQUU7eUJBQzFCLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFGbkMsQ0FFbUMsQ0FDbkMsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVTLHVCQUFLLEdBQWYsVUFBZ0IsTUFBYSxFQUFFLEdBQVUsRUFBRSxJQUFvQjtRQUFwQixvQkFBb0IsR0FBcEIsZ0JBQW9CO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSwyQkFBSSxDQUFDLElBQUksQ0FBQztTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFUyxxQkFBRyxHQUFiLFVBQWMsR0FBVTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLHNCQUFJLEdBQWQsVUFBZSxHQUFVLEVBQUUsSUFBUTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyx1QkFBSyxHQUFmLFVBQWdCLEdBQVUsRUFBRSxJQUFRO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVTLHdCQUFNLEdBQWhCLFVBQWlCLEdBQVUsRUFBRSxJQUFRO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVTLHFCQUFHLEdBQWIsVUFBYyxHQUFVLEVBQUUsSUFBUTtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFUyxzQkFBSSxHQUFkLFVBQWUsR0FBVSxFQUFFLElBQVE7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBM0RnQixzQkFBYyxHQUFzQjtRQUNwRCxPQUFPLEVBQUUsNEJBQTRCO0tBQ3JDLENBQUM7SUEwREgsY0FBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFksZUFBTyxVQThEbkIsQ0FBQSIsImZpbGUiOiJwaW0tYmFzZS1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0ICdmZXRjaCc7XHJcbmltcG9ydCB7SUFwaUNvbmZpZ3VyYXRpb259IGZyb20gJ3BpbS1hcGktY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUFwaSB7XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgX2RlZmF1bHRDb25maWc6IElBcGlDb25maWd1cmF0aW9uID0ge1xyXG5cdFx0YmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvJ1xyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24gPSBudWxsKSB7XHJcblx0XHQvLyBSZXNldCB0byBlbXB0eSBpZiBmYWxzeVxyXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuXHRcdC8vIE1lcmdlIHdpdGggZGVmYXVsdCBzZXRpbmdzXHJcblx0XHQvL3RoaXMuX2NvbmZpZyA9ICQuZXh0ZW5kKEJhc2VBcGkuX2RlZmF1bHRDb25maWcsIGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50O1xyXG5cclxuXHRwcml2YXRlIF9jb25maWc6IElBcGlDb25maWd1cmF0aW9uO1xyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0IGh0dHAoKTpIdHRwQ2xpZW50IHtcclxuXHRcdGlmICghdGhpcy5faHR0cCkge1xyXG5cdFx0XHR0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQoKTtcclxuXHRcdFx0dGhpcy5faHR0cC5jb25maWd1cmUoY29uZmlnID0+XHJcblx0XHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdFx0XHRcdC53aXRoQmFzZVVybCh0aGlzLl9jb25maWcuYmFzZVVybClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9odHRwO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZmV0Y2godXJsLCB7XHJcblx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0Ym9keToganNvbihkYXRhKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldCh1cmw6c3RyaW5nKTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJnZXRcIiwgdXJsKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcGF0Y2godXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBhdGNoXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZGVsZXRlKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJkZWxldGVcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBwdXQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGhlYWQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImhlYWRcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

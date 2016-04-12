"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
var BaseApi = (function () {
    function BaseApi(config) {
        this._config = {};
        config = config || {};
        this._config = BaseApi.getDefaultConfig();
        this._config.baseUrl = config.baseUrl || this._config.baseUrl;
        this._config.token = config.token || this._config.token;
    }
    BaseApi.getDefaultConfig = function () {
        return {
            baseUrl: 'http://localhost:5000/',
            token: null
        };
    };
    ;
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
    BaseApi.prototype._fetch = function (method, url, data) {
        if (data === void 0) { data = undefined; }
        return this.http
            .fetch(url, {
            method: method,
            body: aurelia_fetch_client_1.json(data)
        })
            .then(function (response) { return response.json(); });
    };
    BaseApi.prototype._get = function (url) {
        return this._fetch("get", url);
    };
    BaseApi.prototype._post = function (url, data) {
        return this._fetch("post", url, data);
    };
    BaseApi.prototype._patch = function (url, data) {
        return this._fetch("patch", url, data);
    };
    BaseApi.prototype._delete = function (url, data) {
        return this._fetch("delete", url, data);
    };
    BaseApi.prototype._put = function (url, data) {
        return this._fetch("put", url, data);
    };
    BaseApi.prototype._head = function (url, data) {
        return this._fetch("head", url, data);
    };
    return BaseApi;
}());
exports.BaseApi = BaseApi;

//# sourceMappingURL=data:application/json;base64,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TSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0YsY0FBQztBQUFELENBckVBLEFBcUVDLElBQUE7QUFyRVksZUFBTyxVQXFFbkIsQ0FBQSIsImZpbGUiOiJwaW0tYXBpLWNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0ICdmZXRjaCc7XHJcbmltcG9ydCB7SUFwaUNvbmZpZ3VyYXRpb259IGZyb20gJ3BpbS1jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQXBpIHtcclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXREZWZhdWx0Q29uZmlnKCk6IElBcGlDb25maWd1cmF0aW9uIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyxcclxuXHRcdFx0dG9rZW46IG51bGxcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnPzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcclxuXHRcdC8vIFJlc2V0IHRvIGVtcHR5IGlmIGZhbHN5XHJcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG5cdFx0Ly8gR2V0IERlZmF1bHQgQ29uZmlnIGluaXRpYWxseVxyXG5cdFx0dGhpcy5fY29uZmlnID0gQmFzZUFwaS5nZXREZWZhdWx0Q29uZmlnKCk7XHJcblxyXG5cdFx0Ly8gTWVyZ2UgaW4gbmV3IFZhbHVlc1xyXG5cdFx0dGhpcy5fY29uZmlnLmJhc2VVcmwgPSBjb25maWcuYmFzZVVybCB8fCB0aGlzLl9jb25maWcuYmFzZVVybDtcclxuXHRcdHRoaXMuX2NvbmZpZy50b2tlbiA9IGNvbmZpZy50b2tlbiB8fCB0aGlzLl9jb25maWcudG9rZW47XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50O1xyXG5cclxuXHRwcml2YXRlIF9jb25maWc6IElBcGlDb25maWd1cmF0aW9uID0ge307XHJcblxyXG5cdHByaXZhdGUgZ2V0IGh0dHAoKTpIdHRwQ2xpZW50IHtcclxuXHRcdGlmICghdGhpcy5faHR0cCkge1xyXG5cdFx0XHR0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQoKTtcclxuXHRcdFx0dGhpcy5faHR0cC5jb25maWd1cmUoY29uZmlnID0+XHJcblx0XHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdFx0XHRcdC53aXRoQmFzZVVybCh0aGlzLl9jb25maWcuYmFzZVVybClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9odHRwO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9mZXRjaChtZXRob2Q6c3RyaW5nLCB1cmw6c3RyaW5nLCBkYXRhOmFueSA9IHVuZGVmaW5lZCk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmZldGNoKHVybCwge1xyXG5cdFx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRcdGJvZHk6IGpzb24oZGF0YSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZ2V0KHVybDpzdHJpbmcpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJnZXRcIiwgdXJsKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcG9zdCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcGF0Y2godXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwYXRjaFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9kZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJkZWxldGVcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2hlYWQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJoZWFkXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

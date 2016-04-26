"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
var metadata_1 = require('./metadata');
var BaseConfiguration = (function () {
    function BaseConfiguration() {
    }
    Object.defineProperty(BaseConfiguration, "standardConfiguration", {
        get: function () {
            return {
                baseUrl: 'http://localhost:5000/',
                token: null
            };
        },
        enumerable: true,
        configurable: true
    });
    BaseConfiguration.setDefault = function (config) {
        config = config || {};
        this._default = Object.assign({}, this._default, config);
    };
    BaseConfiguration.getDefault = function () {
        return Object.assign({}, this.standardConfiguration, this._default);
    };
    ;
    BaseConfiguration._default = {};
    return BaseConfiguration;
}());
exports.BaseConfiguration = BaseConfiguration;
var BaseApi = (function () {
    function BaseApi(config) {
        this._config = {};
        this._config = config || {};
    }
    BaseApi.prototype._getConfiguration = function () {
        return Object.assign({}, BaseConfiguration.getDefault(), this._config);
    };
    BaseApi.prototype._getHttpClient = function (config) {
        if (config === void 0) { config = {}; }
        return new aurelia_fetch_client_1.HttpClient().configure(function (config) {
            return config
                .useStandardConfiguration();
        });
    };
    BaseApi.prototype._fetch = function (method, url, data) {
        if (data === void 0) { data = undefined; }
        var config = this._getConfiguration();
        url = url.indexOf("://") >= 0
            ? url
            : config.baseUrl + url;
        var body = data !== undefined
            ? metadata_1.BuildConfiguration == "debug"
                ? JSON.stringify(data)
                : aurelia_fetch_client_1.json(data)
            : undefined;
        return this._getHttpClient(config)
            .fetch(url, {
            method: method,
            body: body,
            headers: metadata_1.BuildConfiguration != "debug"
                ? undefined
                : {
                    'Content-Type': 'application/json'
                }
        })
            .then(function (response) {
            var ct = response.headers.get("Content-Type");
            if (response.ok) {
                if (!ct) {
                    return null;
                }
                if (ct.indexOf("application/json") >= 0) {
                    return response.json();
                }
                else if (ct.indexOf("text/plain") >= 0) {
                    return response.text();
                }
                throw new Error("Unhandled Content-Type '" + ct + "' \r\n  Url: " + response.url);
            }
            throw response;
        });
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
    BaseApi.prototype._head = function (url) {
        return this._fetch("head", url);
    };
    return BaseApi;
}());
exports.BaseApi = BaseApi;

//# sourceMappingURL=data:application/json;base64,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QUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFUyxzQkFBSSxHQUFkLFVBQWUsR0FBVSxFQUFFLElBQVE7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsdUJBQUssR0FBZixVQUFnQixHQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0YsY0FBQztBQUFELENBakhBLEFBaUhDLElBQUE7QUFqSFksZUFBTyxVQWlIbkIsQ0FBQSIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5pbXBvcnQge0lBcGlDb25maWd1cmF0aW9uLCBJQXBpRXhjZXB0aW9ufSBmcm9tICdwaW0tY29yZSc7XHJcbmltcG9ydCB7QnVpbGRDb25maWd1cmF0aW9ufSBmcm9tICcuL21ldGFkYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlndXJhdGlvbiB7XHJcblxyXG5cdC8qIFNUQVRJQyAqL1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBnZXQgc3RhbmRhcmRDb25maWd1cmF0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nLFxyXG5cdFx0XHR0b2tlbjogbnVsbFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIF9kZWZhdWx0OiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHNldERlZmF1bHQoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG5cclxuXHRcdC8vIEZpeCBudWxsIHZhbHVlc1xyXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuXHRcdC8vIE1lcmdlIG5ldyBjb25maWcgdmFsdWVzIGludG8gY3VzdG9tIHZhbHVlcy5cclxuXHRcdHRoaXMuX2RlZmF1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0LCBjb25maWcpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCk6IElBcGlDb25maWd1cmF0aW9uIHtcclxuXHRcdC8vIE1lcmdlIHN0YW5kYXJkIHZhbHVlcyBhbmQgY3VzdG9tIHZhbHVlcy5cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YW5kYXJkQ29uZmlndXJhdGlvbiwgdGhpcy5fZGVmYXVsdCk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VBcGkge1xyXG5cclxuXHQvKiBJTlNUQU5DRSAqL1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb25maWc/OiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG5cclxuXHRcdC8vIFNldCBpbnN0YW5jZSBjb25maWd1cmF0aW9uXHJcblx0XHR0aGlzLl9jb25maWcgPSBjb25maWcgfHwge307XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9jb25maWc6IElBcGlDb25maWd1cmF0aW9uID0ge307XHJcblxyXG5cdHByaXZhdGUgX2dldENvbmZpZ3VyYXRpb24oKTogSUFwaUNvbmZpZ3VyYXRpb24ge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEJhc2VDb25maWd1cmF0aW9uLmdldERlZmF1bHQoKSwgdGhpcy5fY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2dldEh0dHBDbGllbnQoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9KTpIdHRwQ2xpZW50IHtcclxuXHRcdHJldHVybiBuZXcgSHR0cENsaWVudCgpLmNvbmZpZ3VyZShjb25maWcgPT5cclxuXHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9mZXRjaChtZXRob2Q6c3RyaW5nLCB1cmw6c3RyaW5nLCBkYXRhOmFueSA9IHVuZGVmaW5lZCk6IFByb21pc2U8YW55PiB7XHJcblxyXG5cdFx0Ly8gR2V0IGZyZXNoIGNvbmZpZ3VyYXRpb25cclxuXHRcdGxldCBjb25maWcgPSB0aGlzLl9nZXRDb25maWd1cmF0aW9uKCk7XHJcblxyXG5cdFx0Ly8gQ29tYmluZSBVUkwgaWYgbm8gcHJvdG9jb2wgaXMgcHJlc2VudFxyXG5cdFx0dXJsID0gdXJsLmluZGV4T2YoXCI6Ly9cIikgPj0gMFxyXG5cdFx0XHQ/IHVybFxyXG5cdFx0XHQ6IGNvbmZpZy5iYXNlVXJsICsgdXJsO1xyXG5cclxuXHRcdC8vIERhdGFcclxuXHRcdGxldCBib2R5OiBzdHJpbmcgfCBCbG9iID1cclxuXHRcdFx0ZGF0YSAhPT0gdW5kZWZpbmVkXHJcblx0XHRcdFx0PyBCdWlsZENvbmZpZ3VyYXRpb24gPT0gXCJkZWJ1Z1wiXHJcblx0XHRcdFx0XHQ/IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcblx0XHRcdFx0XHQ6IGpzb24oZGF0YSlcclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLyBNYWtlIFJlcXVlc3QgYW5kIHJldHVybiBQcm9taXNlXHJcblx0XHRyZXR1cm4gdGhpcy5fZ2V0SHR0cENsaWVudChjb25maWcpXHJcblx0XHRcdC5mZXRjaCh1cmwsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0XHRib2R5OiBib2R5LFxyXG5cdFx0XHRcdFx0aGVhZGVyczogQnVpbGRDb25maWd1cmF0aW9uICE9IFwiZGVidWdcIlxyXG5cdFx0XHRcdFx0XHQ/IHVuZGVmaW5lZFxyXG5cdFx0XHRcdFx0XHQ6IHtcclxuXHRcdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0bGV0IGN0ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7XHJcblxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJVcmxcIiwgcmVzcG9uc2UudXJsKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiQ29udGVudC1UeXBlXCIsIGN0KTtcclxuXHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gTm8gQ29udGVudC1UeXBlICgyeHggQ29kZSwgbWF5YmUgTm9Db250ZW50IGV0Yy4pXHJcblx0XHRcdFx0XHRpZiAoIWN0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFJlYWwganNvbiBvYmplY3RzXHJcblx0XHRcdFx0XHRpZiAoY3QuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIEpzb24gU3RyaW5nIHJlc3VsdCBhbmQgb3RoZXIgdGV4dHNcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN0LmluZGV4T2YoXCJ0ZXh0L3BsYWluXCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBGaWxlcy9CbG9icz9cclxuXHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHQvL1xyXG5cclxuXHRcdFx0XHRcdC8vIFVua25vd24gQ29udGVudCBUeXBlIVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5oYW5kbGVkIENvbnRlbnQtVHlwZSAnXCIgKyBjdCArIFwiJyBcXHJcXG4gIFVybDogXCIgKyByZXNwb25zZS51cmwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gUmVzcG9uc2UgaXMgbm90IG9rLCBidXQgc29tZWhvdyBkaWRuJ3QgdGhyb3cgdXAgZWFybGllcj8gVGhyb3cgaXQgbm93IVxyXG5cdFx0XHRcdHRocm93IHJlc3BvbnNlO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZ2V0KHVybDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZ2V0XCIsIHVybCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3Bvc3QodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicG9zdFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wYXRjaCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwYXRjaFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9kZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZGVsZXRlXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3B1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwdXRcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfaGVhZCh1cmw6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImhlYWRcIiwgdXJsKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

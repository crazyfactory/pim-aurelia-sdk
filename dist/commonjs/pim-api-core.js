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
            body: data !== undefined ? aurelia_fetch_client_1.json(data) : undefined
        })
            .then(function (response) {
            var ct = response.headers.get("Content-Type");
            if (ct.indexOf("application/json") >= 0) {
                return response.json();
            }
            else if (ct.indexOf("text/plain") >= 0) {
                return response.text();
            }
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

//# sourceMappingURL=data:application/json;base64,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QUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVTLHlCQUFPLEdBQWpCLFVBQWtCLEdBQVUsRUFBRSxJQUFRO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVTLHNCQUFJLEdBQWQsVUFBZSxHQUFVLEVBQUUsSUFBUTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyx1QkFBSyxHQUFmLFVBQWdCLEdBQVU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRixjQUFDO0FBQUQsQ0ExRkEsQUEwRkMsSUFBQTtBQTFGWSxlQUFPLFVBMEZuQixDQUFBIiwiZmlsZSI6InBpbS1hcGktY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudCwganNvbn0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQgJ2ZldGNoJztcclxuaW1wb3J0IHtJQXBpQ29uZmlndXJhdGlvbiwgQXBpUHJvbWlzZX0gZnJvbSAncGltLWNvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VBcGkge1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldERlZmF1bHRDb25maWcoKTogSUFwaUNvbmZpZ3VyYXRpb24ge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nLFxyXG5cdFx0XHR0b2tlbjogbnVsbFxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb25maWc/OiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG5cdFx0Ly8gUmVzZXQgdG8gZW1wdHkgaWYgZmFsc3lcclxuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcblx0XHQvLyBHZXQgRGVmYXVsdCBDb25maWcgaW5pdGlhbGx5XHJcblx0XHR0aGlzLl9jb25maWcgPSBCYXNlQXBpLmdldERlZmF1bHRDb25maWcoKTtcclxuXHJcblx0XHQvLyBNZXJnZSBpbiBuZXcgVmFsdWVzXHJcblx0XHR0aGlzLl9jb25maWcuYmFzZVVybCA9IGNvbmZpZy5iYXNlVXJsIHx8IHRoaXMuX2NvbmZpZy5iYXNlVXJsO1xyXG5cdFx0dGhpcy5fY29uZmlnLnRva2VuID0gY29uZmlnLnRva2VuIHx8IHRoaXMuX2NvbmZpZy50b2tlbjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQ7XHJcblxyXG5cdHByaXZhdGUgX2NvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fTtcclxuXHJcblx0cHJpdmF0ZSBnZXQgaHR0cCgpOkh0dHBDbGllbnQge1xyXG5cdFx0aWYgKCF0aGlzLl9odHRwKSB7XHJcblx0XHRcdHRoaXMuX2h0dHAgPSBuZXcgSHR0cENsaWVudCgpO1xyXG5cdFx0XHR0aGlzLl9odHRwLmNvbmZpZ3VyZShjb25maWcgPT5cclxuXHRcdFx0XHRjb25maWdcclxuXHRcdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG5cdFx0XHRcdFx0LndpdGhCYXNlVXJsKHRoaXMuX2NvbmZpZy5iYXNlVXJsKVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHA7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2ZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTpBcGlQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIDxhbnk+IHRoaXMuaHR0cFxyXG5cdFx0XHQuZmV0Y2godXJsLCB7XHJcblx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0Ym9keTogZGF0YSAhPT0gdW5kZWZpbmVkID8ganNvbihkYXRhKSA6IHVuZGVmaW5lZFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHR2YXIgY3QgPSByZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiVXJsXCIsIHJlc3BvbnNlLnVybCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkNvbnRlbnQtVHlwZVwiLCBjdCk7XHJcblxyXG5cdFx0XHRcdC8vIFJlYWwganNvbiBvYmplY3RzXHJcblx0XHRcdFx0aWYgKGN0LmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpID49IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0XHQvKnJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbiAoanNvbikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkpTT04gUmVzdWx0XCIsIGpzb24pO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4ganNvbjtcclxuXHRcdFx0XHRcdH0pOyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIEpzb24gU3RyaW5nIHJlc3VsdCBhbmQgb3RoZXIgdGV4dHNcclxuXHRcdFx0XHRlbHNlIGlmIChjdC5pbmRleE9mKFwidGV4dC9wbGFpblwiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG5cdFx0XHRcdFx0LypyZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4oZnVuY3Rpb24gKHRleHQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJURVhUIFJlc3VsdFwiLCB0ZXh0KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRleHQ7XHJcblx0XHRcdFx0XHR9KTsqL1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2dldCh1cmw6c3RyaW5nKTpBcGlQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZ2V0XCIsIHVybCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3Bvc3QodXJsOnN0cmluZywgZGF0YTphbnkpOkFwaVByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3BhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTpBcGlQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicGF0Y2hcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZGVsZXRlKHVybDpzdHJpbmcsIGRhdGE6YW55KTpBcGlQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZGVsZXRlXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3B1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6QXBpUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9oZWFkKHVybDpzdHJpbmcpOkFwaVByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJoZWFkXCIsIHVybCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

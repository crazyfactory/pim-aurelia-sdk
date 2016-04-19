"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
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
    BaseApi.prototype._getHttpClient = function () {
        var config = this._getConfiguration();
        return new aurelia_fetch_client_1.HttpClient().configure(function (config) {
            return config
                .useStandardConfiguration()
                .withBaseUrl(config.baseUrl);
        });
    };
    BaseApi.prototype._fetch = function (method, url, data) {
        if (data === void 0) { data = undefined; }
        return this._getHttpClient()
            .fetch(url, {
            method: method,
            body: data !== undefined ? aurelia_fetch_client_1.json(data) : undefined
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

//# sourceMappingURL=data:application/json;base64,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OiJwaW0tYXBpLWNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0ICdmZXRjaCc7XHJcbmltcG9ydCB7SUFwaUNvbmZpZ3VyYXRpb24sIElBcGlFeGNlcHRpb259IGZyb20gJ3BpbS1jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlndXJhdGlvbiB7XHJcblxyXG5cdC8qIFNUQVRJQyAqL1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBnZXQgc3RhbmRhcmRDb25maWd1cmF0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nLFxyXG5cdFx0XHR0b2tlbjogbnVsbFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIF9kZWZhdWx0OiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHNldERlZmF1bHQoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG5cclxuXHRcdC8vIEZpeCBudWxsIHZhbHVlc1xyXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuXHRcdC8vIE1lcmdlIG5ldyBjb25maWcgdmFsdWVzIGludG8gY3VzdG9tIHZhbHVlcy5cclxuXHRcdHRoaXMuX2RlZmF1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0LCBjb25maWcpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCk6IElBcGlDb25maWd1cmF0aW9uIHtcclxuXHRcdC8vIE1lcmdlIHN0YW5kYXJkIHZhbHVlcyBhbmQgY3VzdG9tIHZhbHVlcy5cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YW5kYXJkQ29uZmlndXJhdGlvbiwgdGhpcy5fZGVmYXVsdCk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VBcGkge1xyXG5cclxuXHQvKiBJTlNUQU5DRSAqL1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb25maWc/OiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG5cclxuXHRcdC8vIFNldCBpbnN0YW5jZSBjb25maWd1cmF0aW9uXHJcblx0XHR0aGlzLl9jb25maWcgPSBjb25maWcgfHwge307XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9jb25maWc6IElBcGlDb25maWd1cmF0aW9uID0ge307XHJcblxyXG5cdHByaXZhdGUgX2dldENvbmZpZ3VyYXRpb24oKTogSUFwaUNvbmZpZ3VyYXRpb24ge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEJhc2VDb25maWd1cmF0aW9uLmdldERlZmF1bHQoKSwgdGhpcy5fY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2dldEh0dHBDbGllbnQoKTpIdHRwQ2xpZW50IHtcclxuXHRcdGxldCBjb25maWcgPSB0aGlzLl9nZXRDb25maWd1cmF0aW9uKCk7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBIdHRwQ2xpZW50KCkuY29uZmlndXJlKGNvbmZpZyA9PlxyXG5cdFx0XHRjb25maWdcclxuXHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdFx0XHQud2l0aEJhc2VVcmwoY29uZmlnLmJhc2VVcmwpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9mZXRjaChtZXRob2Q6c3RyaW5nLCB1cmw6c3RyaW5nLCBkYXRhOmFueSA9IHVuZGVmaW5lZCk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ2V0SHR0cENsaWVudCgpXHJcblx0XHRcdC5mZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0XHRib2R5OiBkYXRhICE9PSB1bmRlZmluZWQgPyBqc29uKGRhdGEpIDogdW5kZWZpbmVkXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGxldCBjdCA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xyXG5cclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiVXJsXCIsIHJlc3BvbnNlLnVybCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkNvbnRlbnQtVHlwZVwiLCBjdCk7XHJcblxyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xyXG5cclxuXHRcdFx0XHRcdC8vIE5vIENvbnRlbnQtVHlwZSAoMnh4IENvZGUsIG1heWJlIE5vQ29udGVudCBldGMuKVxyXG5cdFx0XHRcdFx0aWYgKCFjdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBSZWFsIGpzb24gb2JqZWN0c1xyXG5cdFx0XHRcdFx0aWYgKGN0LmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBKc29uIFN0cmluZyByZXN1bHQgYW5kIG90aGVyIHRleHRzXHJcblx0XHRcdFx0XHRlbHNlIGlmIChjdC5pbmRleE9mKFwidGV4dC9wbGFpblwiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gRmlsZXMvQmxvYnM/XHJcblx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0Ly9cclxuXHJcblx0XHRcdFx0XHQvLyBVbmtub3duIENvbnRlbnQgVHlwZSFcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBDb250ZW50LVR5cGUgJ1wiICsgY3QgKyBcIicgXFxyXFxuICBVcmw6IFwiICsgcmVzcG9uc2UudXJsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFJlc3BvbnNlIGlzIG5vdCBvaywgYnV0IHNvbWVob3cgZGlkbid0IHRocm93IHVwIGVhcmxpZXI/IFRocm93IGl0IG5vdyFcclxuXHRcdFx0XHR0aHJvdyByZXNwb25zZTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2dldCh1cmw6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImdldFwiLCB1cmwpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcGF0Y2godXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicGF0Y2hcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZGVsZXRlKHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImRlbGV0ZVwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wdXQodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2hlYWQodXJsOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJoZWFkXCIsIHVybCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

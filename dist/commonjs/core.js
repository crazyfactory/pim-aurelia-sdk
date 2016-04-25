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
        return this._getHttpClient(config)
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

//# sourceMappingURL=data:application/json;base64,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TSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0YsY0FBQztBQUFELENBbEdBLEFBa0dDLElBQUE7QUFsR1ksZUFBTyxVQWtHbkIsQ0FBQSIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5pbXBvcnQge0lBcGlDb25maWd1cmF0aW9uLCBJQXBpRXhjZXB0aW9ufSBmcm9tICdwaW0tY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbmZpZ3VyYXRpb24ge1xyXG5cclxuXHQvKiBTVEFUSUMgKi9cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0IHN0YW5kYXJkQ29uZmlndXJhdGlvbigpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyxcclxuXHRcdFx0dG9rZW46IG51bGxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdDogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBzZXREZWZhdWx0KGNvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcclxuXHJcblx0XHQvLyBGaXggbnVsbCB2YWx1ZXNcclxuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcblx0XHQvLyBNZXJnZSBuZXcgY29uZmlnIHZhbHVlcyBpbnRvIGN1c3RvbSB2YWx1ZXMuXHJcblx0XHR0aGlzLl9kZWZhdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdCwgY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdCgpOiBJQXBpQ29uZmlndXJhdGlvbiB7XHJcblx0XHQvLyBNZXJnZSBzdGFuZGFyZCB2YWx1ZXMgYW5kIGN1c3RvbSB2YWx1ZXMuXHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGFuZGFyZENvbmZpZ3VyYXRpb24sIHRoaXMuX2RlZmF1bHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQXBpIHtcclxuXHJcblx0LyogSU5TVEFOQ0UgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnPzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcclxuXHJcblx0XHQvLyBTZXQgaW5zdGFuY2UgY29uZmlndXJhdGlvblxyXG5cdFx0dGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xyXG5cclxuXHRwcml2YXRlIF9nZXRDb25maWd1cmF0aW9uKCk6IElBcGlDb25maWd1cmF0aW9uIHtcclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBCYXNlQ29uZmlndXJhdGlvbi5nZXREZWZhdWx0KCksIHRoaXMuX2NvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9nZXRIdHRwQ2xpZW50KGNvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fSk6SHR0cENsaWVudCB7XHJcblx0XHRyZXR1cm4gbmV3IEh0dHBDbGllbnQoKS5jb25maWd1cmUoY29uZmlnID0+XHJcblx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZmV0Y2gobWV0aG9kOnN0cmluZywgdXJsOnN0cmluZywgZGF0YTphbnkgPSB1bmRlZmluZWQpOiBQcm9taXNlPGFueT4ge1xyXG5cclxuXHRcdC8vIEdldCBmcmVzaCBjb25maWd1cmF0aW9uXHJcblx0XHRsZXQgY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlndXJhdGlvbigpO1xyXG5cclxuXHRcdC8vIENvbWJpbmUgVVJMIGlmIG5vIHByb3RvY29sIGlzIHByZXNlbnRcclxuXHRcdHVybCA9IHVybC5pbmRleE9mKFwiOi8vXCIpID49IDBcclxuXHRcdFx0PyB1cmxcclxuXHRcdFx0OiBjb25maWcuYmFzZVVybCArIHVybDtcclxuXHJcblx0XHQvLyBNYWtlIFJlcXVlc3QgYW5kIHJldHVybiBQcm9taXNlXHJcblx0XHRyZXR1cm4gdGhpcy5fZ2V0SHR0cENsaWVudChjb25maWcpXHJcblx0XHRcdC5mZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0XHRib2R5OiBkYXRhICE9PSB1bmRlZmluZWQgPyBqc29uKGRhdGEpIDogdW5kZWZpbmVkXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGxldCBjdCA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xyXG5cclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiVXJsXCIsIHJlc3BvbnNlLnVybCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkNvbnRlbnQtVHlwZVwiLCBjdCk7XHJcblxyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xyXG5cclxuXHRcdFx0XHRcdC8vIE5vIENvbnRlbnQtVHlwZSAoMnh4IENvZGUsIG1heWJlIE5vQ29udGVudCBldGMuKVxyXG5cdFx0XHRcdFx0aWYgKCFjdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBSZWFsIGpzb24gb2JqZWN0c1xyXG5cdFx0XHRcdFx0aWYgKGN0LmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBKc29uIFN0cmluZyByZXN1bHQgYW5kIG90aGVyIHRleHRzXHJcblx0XHRcdFx0XHRlbHNlIGlmIChjdC5pbmRleE9mKFwidGV4dC9wbGFpblwiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gRmlsZXMvQmxvYnM/XHJcblx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0Ly9cclxuXHJcblx0XHRcdFx0XHQvLyBVbmtub3duIENvbnRlbnQgVHlwZSFcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBDb250ZW50LVR5cGUgJ1wiICsgY3QgKyBcIicgXFxyXFxuICBVcmw6IFwiICsgcmVzcG9uc2UudXJsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFJlc3BvbnNlIGlzIG5vdCBvaywgYnV0IHNvbWVob3cgZGlkbid0IHRocm93IHVwIGVhcmxpZXI/IFRocm93IGl0IG5vdyFcclxuXHRcdFx0XHR0aHJvdyByZXNwb25zZTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2dldCh1cmw6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImdldFwiLCB1cmwpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcGF0Y2godXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicGF0Y2hcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZGVsZXRlKHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImRlbGV0ZVwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wdXQodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2hlYWQodXJsOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJoZWFkXCIsIHVybCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

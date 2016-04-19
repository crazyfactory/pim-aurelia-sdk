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

//# sourceMappingURL=data:application/json;base64,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Q0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FsR0EsQUFrR0MsSUFBQTtBQWxHWSxlQUFPLFVBa0duQixDQUFBIiwiZmlsZSI6InBpbS1hcGktY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudCwganNvbn0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQgJ2ZldGNoJztcclxuaW1wb3J0IHtJQXBpQ29uZmlndXJhdGlvbiwgSUFwaUV4Y2VwdGlvbn0gZnJvbSAncGltLWNvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDb25maWd1cmF0aW9uIHtcclxuXHJcblx0LyogU1RBVElDICovXHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGdldCBzdGFuZGFyZENvbmZpZ3VyYXRpb24oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRiYXNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycsXHJcblx0XHRcdHRva2VuOiBudWxsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHQ6IElBcGlDb25maWd1cmF0aW9uID0ge307XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc2V0RGVmYXVsdChjb25maWc6IElBcGlDb25maWd1cmF0aW9uKSB7XHJcblxyXG5cdFx0Ly8gRml4IG51bGwgdmFsdWVzXHJcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG5cdFx0Ly8gTWVyZ2UgbmV3IGNvbmZpZyB2YWx1ZXMgaW50byBjdXN0b20gdmFsdWVzLlxyXG5cdFx0dGhpcy5fZGVmYXVsdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHQsIGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKTogSUFwaUNvbmZpZ3VyYXRpb24ge1xyXG5cdFx0Ly8gTWVyZ2Ugc3RhbmRhcmQgdmFsdWVzIGFuZCBjdXN0b20gdmFsdWVzLlxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhbmRhcmRDb25maWd1cmF0aW9uLCB0aGlzLl9kZWZhdWx0KTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUFwaSB7XHJcblxyXG5cdC8qIElOU1RBTkNFICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZz86IElBcGlDb25maWd1cmF0aW9uKSB7XHJcblxyXG5cdFx0Ly8gU2V0IGluc3RhbmNlIGNvbmZpZ3VyYXRpb25cclxuXHRcdHRoaXMuX2NvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2NvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fTtcclxuXHJcblx0cHJpdmF0ZSBfZ2V0Q29uZmlndXJhdGlvbigpOiBJQXBpQ29uZmlndXJhdGlvbiB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgQmFzZUNvbmZpZ3VyYXRpb24uZ2V0RGVmYXVsdCgpLCB0aGlzLl9jb25maWcpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZ2V0SHR0cENsaWVudChjb25maWc6IElBcGlDb25maWd1cmF0aW9uID0ge30pOkh0dHBDbGllbnQge1xyXG5cdFx0cmV0dXJuIG5ldyBIdHRwQ2xpZW50KCkuY29uZmlndXJlKGNvbmZpZyA9PlxyXG5cdFx0XHRjb25maWdcclxuXHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2ZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTogUHJvbWlzZTxhbnk+IHtcclxuXHJcblx0XHQvLyBHZXQgZnJlc2ggY29uZmlndXJhdGlvblxyXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMuX2dldENvbmZpZ3VyYXRpb24oKTtcclxuXHJcblx0XHQvLyBDb21iaW5lIFVSTCBpZiBubyBwcm90b2NvbCBpcyBwcmVzZW50XHJcblx0XHR1cmwgPSB1cmwuaW5kZXhPZihcIjovL1wiKSA+PSAwXHJcblx0XHRcdD8gdXJsXHJcblx0XHRcdDogY29uZmlnLmJhc2VVcmwgKyB1cmw7XHJcblxyXG5cdFx0Ly8gTWFrZSBSZXF1ZXN0IGFuZCByZXR1cm4gUHJvbWlzZVxyXG5cdFx0cmV0dXJuIHRoaXMuX2dldEh0dHBDbGllbnQoY29uZmlnKVxyXG5cdFx0XHQuZmV0Y2godXJsLCB7XHJcblx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0Ym9keTogZGF0YSAhPT0gdW5kZWZpbmVkID8ganNvbihkYXRhKSA6IHVuZGVmaW5lZFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRsZXQgY3QgPSByZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTtcclxuXHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIlVybFwiLCByZXNwb25zZS51cmwpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJDb250ZW50LVR5cGVcIiwgY3QpO1xyXG5cclxuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcclxuXHJcblx0XHRcdFx0XHQvLyBObyBDb250ZW50LVR5cGUgKDJ4eCBDb2RlLCBtYXliZSBOb0NvbnRlbnQgZXRjLilcclxuXHRcdFx0XHRcdGlmICghY3QpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVhbCBqc29uIG9iamVjdHNcclxuXHRcdFx0XHRcdGlmIChjdC5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gSnNvbiBTdHJpbmcgcmVzdWx0IGFuZCBvdGhlciB0ZXh0c1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY3QuaW5kZXhPZihcInRleHQvcGxhaW5cIikgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIEZpbGVzL0Jsb2JzP1xyXG5cdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0Ly8gVW5rbm93biBDb250ZW50IFR5cGUhXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgQ29udGVudC1UeXBlICdcIiArIGN0ICsgXCInIFxcclxcbiAgVXJsOiBcIiArIHJlc3BvbnNlLnVybCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBSZXNwb25zZSBpcyBub3Qgb2ssIGJ1dCBzb21laG93IGRpZG4ndCB0aHJvdyB1cCBlYXJsaWVyPyBUaHJvdyBpdCBub3chXHJcblx0XHRcdFx0dGhyb3cgcmVzcG9uc2U7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9nZXQodXJsOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJnZXRcIiwgdXJsKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcG9zdCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3BhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInBhdGNoXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2RlbGV0ZSh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJkZWxldGVcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9oZWFkKHVybDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiaGVhZFwiLCB1cmwpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

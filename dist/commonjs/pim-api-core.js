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
    BaseApi.prototype._head = function (url) {
        return this._fetch("head", url);
    };
    return BaseApi;
}());
exports.BaseApi = BaseApi;

//# sourceMappingURL=data:application/json;base64,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VUFBZ0IsR0FBVTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBO0FBckVZLGVBQU8sVUFxRW5CLENBQUEiLCJmaWxlIjoicGltLWFwaS1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5pbXBvcnQge0lBcGlDb25maWd1cmF0aW9ufSBmcm9tICdwaW0tY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUFwaSB7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdENvbmZpZygpOiBJQXBpQ29uZmlndXJhdGlvbiB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRiYXNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycsXHJcblx0XHRcdHRva2VuOiBudWxsXHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZz86IElBcGlDb25maWd1cmF0aW9uKSB7XHJcblx0XHQvLyBSZXNldCB0byBlbXB0eSBpZiBmYWxzeVxyXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuXHRcdC8vIEdldCBEZWZhdWx0IENvbmZpZyBpbml0aWFsbHlcclxuXHRcdHRoaXMuX2NvbmZpZyA9IEJhc2VBcGkuZ2V0RGVmYXVsdENvbmZpZygpO1xyXG5cclxuXHRcdC8vIE1lcmdlIGluIG5ldyBWYWx1ZXNcclxuXHRcdHRoaXMuX2NvbmZpZy5iYXNlVXJsID0gY29uZmlnLmJhc2VVcmwgfHwgdGhpcy5fY29uZmlnLmJhc2VVcmw7XHJcblx0XHR0aGlzLl9jb25maWcudG9rZW4gPSBjb25maWcudG9rZW4gfHwgdGhpcy5fY29uZmlnLnRva2VuO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudDtcclxuXHJcblx0cHJpdmF0ZSBfY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xyXG5cclxuXHRwcml2YXRlIGdldCBodHRwKCk6SHR0cENsaWVudCB7XHJcblx0XHRpZiAoIXRoaXMuX2h0dHApIHtcclxuXHRcdFx0dGhpcy5faHR0cCA9IG5ldyBIdHRwQ2xpZW50KCk7XHJcblx0XHRcdHRoaXMuX2h0dHAuY29uZmlndXJlKGNvbmZpZyA9PlxyXG5cdFx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdFx0LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcblx0XHRcdFx0XHQud2l0aEJhc2VVcmwodGhpcy5fY29uZmlnLmJhc2VVcmwpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZmV0Y2gobWV0aG9kOnN0cmluZywgdXJsOnN0cmluZywgZGF0YTphbnkgPSB1bmRlZmluZWQpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5mZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0XHRib2R5OiBkYXRhICE9PSB1bmRlZmluZWQgPyBqc29uKGRhdGEpIDogdW5kZWZpbmVkXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2dldCh1cmw6c3RyaW5nKTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZ2V0XCIsIHVybCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3Bvc3QodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3BhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicGF0Y2hcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZGVsZXRlKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZGVsZXRlXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3B1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9oZWFkKHVybDpzdHJpbmcpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJoZWFkXCIsIHVybCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

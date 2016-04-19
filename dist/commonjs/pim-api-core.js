"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
var BaseApi = (function () {
    function BaseApi(config) {
        this._config = {};
        this._config = config || {};
    }
    Object.defineProperty(BaseApi, "standardConfiguration", {
        get: function () {
            return {
                baseUrl: 'http://localhost:5000/',
                token: null
            };
        },
        enumerable: true,
        configurable: true
    });
    BaseApi.setDefaultConfig = function (config) {
        config = config || {};
        this._defaultConfiguration = Object.assign({}, this._defaultConfiguration, config);
    };
    BaseApi.getDefaultConfig = function () {
        return Object.assign({}, this.standardConfiguration, this._defaultConfiguration);
    };
    ;
    BaseApi.prototype._getHttpClient = function () {
        var _this = this;
        return new aurelia_fetch_client_1.HttpClient().configure(function (config) {
            return config
                .useStandardConfiguration()
                .withBaseUrl(_this._config.baseUrl);
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
    BaseApi._defaultConfiguration = {};
    return BaseApi;
}());
exports.BaseApi = BaseApi;

//# sourceMappingURL=data:application/json;base64,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QUNoQyxDQUFDO0lBRVMsdUJBQUssR0FBZixVQUFnQixHQUFVLEVBQUUsSUFBUTtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFUyx3QkFBTSxHQUFoQixVQUFpQixHQUFVLEVBQUUsSUFBUTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFUyx5QkFBTyxHQUFqQixVQUFrQixHQUFVLEVBQUUsSUFBUTtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFUyxzQkFBSSxHQUFkLFVBQWUsR0FBVSxFQUFFLElBQVE7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsdUJBQUssR0FBZixVQUFnQixHQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBbEdjLDZCQUFxQixHQUFzQixFQUFFLENBQUM7SUFtRzlELGNBQUM7QUFBRCxDQTlHQSxBQThHQyxJQUFBO0FBOUdZLGVBQU8sVUE4R25CLENBQUEiLCJmaWxlIjoicGltLWFwaS1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5pbXBvcnQge0lBcGlDb25maWd1cmF0aW9uLCBJQXBpRXhjZXB0aW9ufSBmcm9tICdwaW0tY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUFwaSB7XHJcblxyXG5cdC8qIFNUQVRJQyAqL1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBzdGFuZGFyZENvbmZpZ3VyYXRpb24oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRiYXNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycsXHJcblx0XHRcdHRva2VuOiBudWxsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRDb25maWd1cmF0aW9uOiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHNldERlZmF1bHRDb25maWcoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbikge1xyXG5cclxuXHRcdC8vIEZpeCBudWxsIHZhbHVlc1xyXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuXHRcdC8vIE1lcmdlIG5ldyBjb25maWcgdmFsdWVzIGludG8gY3VzdG9tIHZhbHVlcy5cclxuXHRcdHRoaXMuX2RlZmF1bHRDb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdENvbmZpZ3VyYXRpb24sIGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldERlZmF1bHRDb25maWcoKTogSUFwaUNvbmZpZ3VyYXRpb24ge1xyXG5cdFx0Ly8gTWVyZ2Ugc3RhbmRhcmQgdmFsdWVzIGFuZCBjdXN0b20gdmFsdWVzLlxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhbmRhcmRDb25maWd1cmF0aW9uLCB0aGlzLl9kZWZhdWx0Q29uZmlndXJhdGlvbik7XHJcblx0fTtcclxuXHJcblx0LyogSU5TVEFOQ0UgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnPzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcclxuXHJcblx0XHQvLyBTZXQgaW5zdGFuY2UgY29uZmlndXJhdGlvblxyXG5cdFx0dGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xyXG5cclxuXHRwcml2YXRlIF9nZXRIdHRwQ2xpZW50KCk6SHR0cENsaWVudCB7XHJcblx0XHRyZXR1cm4gbmV3IEh0dHBDbGllbnQoKS5jb25maWd1cmUoY29uZmlnID0+XHJcblx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG5cdFx0XHRcdC53aXRoQmFzZVVybCh0aGlzLl9jb25maWcuYmFzZVVybClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2ZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9nZXRIdHRwQ2xpZW50KClcclxuXHRcdFx0LmZldGNoKHVybCwge1xyXG5cdFx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRcdGJvZHk6IGRhdGEgIT09IHVuZGVmaW5lZCA/IGpzb24oZGF0YSkgOiB1bmRlZmluZWRcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0bGV0IGN0ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7XHJcblxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJVcmxcIiwgcmVzcG9uc2UudXJsKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiQ29udGVudC1UeXBlXCIsIGN0KTtcclxuXHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gTm8gQ29udGVudC1UeXBlICgyeHggQ29kZSwgbWF5YmUgTm9Db250ZW50IGV0Yy4pXHJcblx0XHRcdFx0XHRpZiAoIWN0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFJlYWwganNvbiBvYmplY3RzXHJcblx0XHRcdFx0XHRpZiAoY3QuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIEpzb24gU3RyaW5nIHJlc3VsdCBhbmQgb3RoZXIgdGV4dHNcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN0LmluZGV4T2YoXCJ0ZXh0L3BsYWluXCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBGaWxlcy9CbG9icz9cclxuXHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHQvL1xyXG5cclxuXHRcdFx0XHRcdC8vIFVua25vd24gQ29udGVudCBUeXBlIVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5oYW5kbGVkIENvbnRlbnQtVHlwZSAnXCIgKyBjdCArIFwiJyBcXHJcXG4gIFVybDogXCIgKyByZXNwb25zZS51cmwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gUmVzcG9uc2UgaXMgbm90IG9rLCBidXQgc29tZWhvdyBkaWRuJ3QgdGhyb3cgdXAgZWFybGllcj8gVGhyb3cgaXQgbm93IVxyXG5cdFx0XHRcdHRocm93IHJlc3BvbnNlO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZ2V0KHVybDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZ2V0XCIsIHVybCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3Bvc3QodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicG9zdFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wYXRjaCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwYXRjaFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9kZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiZGVsZXRlXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3B1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwdXRcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfaGVhZCh1cmw6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImhlYWRcIiwgdXJsKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

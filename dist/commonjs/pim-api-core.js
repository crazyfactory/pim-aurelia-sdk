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

//# sourceMappingURL=data:application/json;base64,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QU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRVMsdUJBQUssR0FBZixVQUFnQixHQUFVLEVBQUUsSUFBUTtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFUyx3QkFBTSxHQUFoQixVQUFpQixHQUFVLEVBQUUsSUFBUTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFUyx5QkFBTyxHQUFqQixVQUFrQixHQUFVLEVBQUUsSUFBUTtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFUyxzQkFBSSxHQUFkLFVBQWUsR0FBVSxFQUFFLElBQVE7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsdUJBQUssR0FBZixVQUFnQixHQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0YsY0FBQztBQUFELENBdEdBLEFBc0dDLElBQUE7QUF0R1ksZUFBTyxVQXNHbkIsQ0FBQSIsImZpbGUiOiJwaW0tYXBpLWNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0ICdmZXRjaCc7XHJcbmltcG9ydCB7SUFwaUNvbmZpZ3VyYXRpb24sIElBcGlFeGNlcHRpb259IGZyb20gJ3BpbS1jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQXBpIHtcclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXREZWZhdWx0Q29uZmlnKCk6IElBcGlDb25maWd1cmF0aW9uIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyxcclxuXHRcdFx0dG9rZW46IG51bGxcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnPzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcclxuXHRcdC8vIFJlc2V0IHRvIGVtcHR5IGlmIGZhbHN5XHJcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG5cdFx0Ly8gR2V0IERlZmF1bHQgQ29uZmlnIGluaXRpYWxseVxyXG5cdFx0dGhpcy5fY29uZmlnID0gQmFzZUFwaS5nZXREZWZhdWx0Q29uZmlnKCk7XHJcblxyXG5cdFx0Ly8gTWVyZ2UgaW4gbmV3IFZhbHVlc1xyXG5cdFx0dGhpcy5fY29uZmlnLmJhc2VVcmwgPSBjb25maWcuYmFzZVVybCB8fCB0aGlzLl9jb25maWcuYmFzZVVybDtcclxuXHRcdHRoaXMuX2NvbmZpZy50b2tlbiA9IGNvbmZpZy50b2tlbiB8fCB0aGlzLl9jb25maWcudG9rZW47XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50O1xyXG5cclxuXHRwcml2YXRlIF9jb25maWc6IElBcGlDb25maWd1cmF0aW9uID0ge307XHJcblxyXG5cdHByaXZhdGUgZ2V0IGh0dHAoKTpIdHRwQ2xpZW50IHtcclxuXHRcdGlmICghdGhpcy5faHR0cCkge1xyXG5cdFx0XHR0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQoKTtcclxuXHRcdFx0dGhpcy5faHR0cC5jb25maWd1cmUoY29uZmlnID0+XHJcblx0XHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdFx0XHRcdC53aXRoQmFzZVVybCh0aGlzLl9jb25maWcuYmFzZVVybClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9odHRwO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9mZXRjaChtZXRob2Q6c3RyaW5nLCB1cmw6c3RyaW5nLCBkYXRhOmFueSA9IHVuZGVmaW5lZCk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gPGFueT4gdGhpcy5odHRwXHJcblx0XHRcdC5mZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0XHRib2R5OiBkYXRhICE9PSB1bmRlZmluZWQgPyBqc29uKGRhdGEpIDogdW5kZWZpbmVkXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGxldCBjdCA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xyXG5cclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiVXJsXCIsIHJlc3BvbnNlLnVybCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkNvbnRlbnQtVHlwZVwiLCBjdCk7XHJcblxyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xyXG5cclxuXHRcdFx0XHRcdC8vIE5vIENvbnRlbnQtVHlwZSAoMnh4IENvZGUsIG1heWJlIE5vQ29udGVudCBldGMuKVxyXG5cdFx0XHRcdFx0aWYgKCFjdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBSZWFsIGpzb24gb2JqZWN0c1xyXG5cdFx0XHRcdFx0aWYgKGN0LmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBKc29uIFN0cmluZyByZXN1bHQgYW5kIG90aGVyIHRleHRzXHJcblx0XHRcdFx0XHRlbHNlIGlmIChjdC5pbmRleE9mKFwidGV4dC9wbGFpblwiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gRmlsZXMvQmxvYnM/XHJcblx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0Ly9cclxuXHJcblx0XHRcdFx0XHQvLyBVbmtub3duIENvbnRlbnQgVHlwZSFcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBDb250ZW50LVR5cGUgJ1wiICsgY3QgKyBcIicgXFxyXFxuICBVcmw6IFwiICsgcmVzcG9uc2UudXJsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFJlc3BvbnNlIGlzIG5vdCBvaywgYnV0IHNvbWVob3cgZGlkbid0IHRocm93IHVwIGVhcmxpZXI/IFRocm93IGl0IG5vdyFcclxuXHRcdFx0XHR0aHJvdyByZXNwb25zZTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2dldCh1cmw6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImdldFwiLCB1cmwpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcGF0Y2godXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicGF0Y2hcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZGVsZXRlKHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImRlbGV0ZVwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9wdXQodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2hlYWQodXJsOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJoZWFkXCIsIHVybCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

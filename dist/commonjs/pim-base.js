"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
var PimBase;
(function (PimBase) {
    var ApiController = (function () {
        function ApiController() {
        }
        Object.defineProperty(ApiController, "baseUrl", {
            get: function () {
                return this._baseUrl;
            },
            set: function (value) {
                this._baseUrl = value;
                this._http = null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiController, "http", {
            get: function () {
                if (!this._http) {
                    this._http = new aurelia_fetch_client_1.HttpClient();
                    this._http.configure(function (config) {
                        return config
                            .useStandardConfiguration()
                            .withBaseUrl(ApiController._baseUrl);
                    });
                }
                return this._http;
            },
            enumerable: true,
            configurable: true
        });
        ApiController.fetch = function (method, url, data) {
            if (data === void 0) { data = undefined; }
            return this.http
                .fetch(url, {
                method: method,
                body: aurelia_fetch_client_1.json(data)
            })
                .then(function (response) { return response.json(); });
        };
        ApiController.get = function (url) {
            return this.fetch("get", url);
        };
        ApiController.post = function (url, data) {
            return this.fetch("post", url, data);
        };
        ApiController.patch = function (url, data) {
            return this.fetch("patch", url, data);
        };
        ApiController.delete = function (url, data) {
            return this.fetch("delete", url, data);
        };
        ApiController.put = function (url, data) {
            return this.fetch("put", url, data);
        };
        ApiController.head = function (url, data) {
            return this.fetch("head", url, data);
        };
        ApiController._baseUrl = 'http://localhost:5000/api/';
        return ApiController;
    }());
    PimBase.ApiController = ApiController;
})(PimBase = exports.PimBase || (exports.PimBase = {}));

//# sourceMappingURL=data:application/json;base64,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LEVBN0RhLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQTZEcEIiLCJmaWxlIjoicGltLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5cclxuXHJcbmV4cG9ydCBtb2R1bGUgUGltQmFzZSB7XHJcblx0ZXhwb3J0IGNsYXNzIEFwaUNvbnRyb2xsZXIge1xyXG5cclxuXHRcdHByaXZhdGUgc3RhdGljIF9odHRwOkh0dHBDbGllbnQ7XHJcblxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgX2Jhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyc7XHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgYmFzZVVybCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX2Jhc2VVcmw7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyBzZXQgYmFzZVVybCh2YWx1ZTogc3RyaW5nKSB7XHJcblx0XHRcdHRoaXMuX2Jhc2VVcmwgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5faHR0cCA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBnZXQgaHR0cCgpOkh0dHBDbGllbnQge1xyXG5cdFx0XHRpZiAoIXRoaXMuX2h0dHApIHtcclxuXHRcdFx0XHR0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQoKTtcclxuXHRcdFx0XHR0aGlzLl9odHRwLmNvbmZpZ3VyZShjb25maWcgPT5cclxuXHRcdFx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdFx0XHRcdFx0LndpdGhCYXNlVXJsKEFwaUNvbnRyb2xsZXIuX2Jhc2VVcmwpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cDtcclxuXHRcdH1cclxuXHJcblx0XHRwcm90ZWN0ZWQgc3RhdGljIGZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmZldGNoKHVybCwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0XHRib2R5OiBqc29uKGRhdGEpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByb3RlY3RlZCBzdGF0aWMgZ2V0KHVybDpzdHJpbmcpOlByb21pc2U8YW55PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZldGNoKFwiZ2V0XCIsIHVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcm90ZWN0ZWQgc3RhdGljIHBhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBhdGNoXCIsIHVybCwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBkZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZldGNoKFwiZGVsZXRlXCIsIHVybCwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBwdXQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBoZWFkKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImhlYWRcIiwgdXJsLCBkYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

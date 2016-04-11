System.register(['aurelia-fetch-client', 'fetch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_fetch_client_1;
    var PimBase;
    return {
        setters:[
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (_1) {}],
        execute: function() {
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
            })(PimBase = PimBase || (PimBase = {}));
            exports_1("PimBase", PimBase);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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TyxRQTZEcEI7MENBQUEiLCJmaWxlIjoicGltLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5cclxuXHJcbmV4cG9ydCBtb2R1bGUgUGltQmFzZSB7XHJcblx0ZXhwb3J0IGNsYXNzIEFwaUNvbnRyb2xsZXIge1xyXG5cclxuXHRcdHByaXZhdGUgc3RhdGljIF9odHRwOkh0dHBDbGllbnQ7XHJcblxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgX2Jhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyc7XHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgYmFzZVVybCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX2Jhc2VVcmw7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyBzZXQgYmFzZVVybCh2YWx1ZTogc3RyaW5nKSB7XHJcblx0XHRcdHRoaXMuX2Jhc2VVcmwgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5faHR0cCA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBnZXQgaHR0cCgpOkh0dHBDbGllbnQge1xyXG5cdFx0XHRpZiAoIXRoaXMuX2h0dHApIHtcclxuXHRcdFx0XHR0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQoKTtcclxuXHRcdFx0XHR0aGlzLl9odHRwLmNvbmZpZ3VyZShjb25maWcgPT5cclxuXHRcdFx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdFx0XHRcdFx0LndpdGhCYXNlVXJsKEFwaUNvbnRyb2xsZXIuX2Jhc2VVcmwpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cDtcclxuXHRcdH1cclxuXHJcblx0XHRwcm90ZWN0ZWQgc3RhdGljIGZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmZldGNoKHVybCwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0XHRib2R5OiBqc29uKGRhdGEpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByb3RlY3RlZCBzdGF0aWMgZ2V0KHVybDpzdHJpbmcpOlByb21pc2U8YW55PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZldGNoKFwiZ2V0XCIsIHVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcm90ZWN0ZWQgc3RhdGljIHBhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBhdGNoXCIsIHVybCwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBkZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZldGNoKFwiZGVsZXRlXCIsIHVybCwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBwdXQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJvdGVjdGVkIHN0YXRpYyBoZWFkKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImhlYWRcIiwgdXJsLCBkYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

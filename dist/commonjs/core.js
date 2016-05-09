"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
var metadata_1 = require('./metadata');
var BaseConfiguration = (function () {
    function BaseConfiguration() {
    }
    BaseConfiguration.storeToken = function (token) {
        window.localStorage.setItem(metadata_1.BuildApplication + "_access_token", token);
    };
    BaseConfiguration.retrieveToken = function () {
        return window.localStorage.getItem(metadata_1.BuildApplication + "_access_token");
    };
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
        var headers = {};
        if (metadata_1.BuildConfiguration != "debug") {
            headers['Content-Type'] = 'application/json';
        }
        if (config.token) {
            headers['Authorization'] = 'Bearer ' + config.token;
        }
        return this._getHttpClient(config)
            .fetch(url, {
            method: method,
            body: body,
            headers: headers
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

//# sourceMappingURL=data:application/json;base64,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R0FBVTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVTLHVCQUFLLEdBQWYsVUFBZ0IsR0FBVSxFQUFFLElBQVE7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRVMsd0JBQU0sR0FBaEIsVUFBaUIsR0FBVSxFQUFFLElBQVE7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMseUJBQU8sR0FBakIsVUFBa0IsR0FBVSxFQUFFLElBQVE7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRVMsc0JBQUksR0FBZCxVQUFlLEdBQVUsRUFBRSxJQUFRO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVTLHVCQUFLLEdBQWYsVUFBZ0IsR0FBVTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQXRIQSxBQXNIQyxJQUFBO0FBdEhZLGVBQU8sVUFzSG5CLENBQUEiLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudCwganNvbn0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQgJ2ZldGNoJztcclxuaW1wb3J0IHtJQXBpQ29uZmlndXJhdGlvbiwgSUFwaUV4Y2VwdGlvbn0gZnJvbSAncGltLWNvcmUnO1xyXG5pbXBvcnQge0J1aWxkQ29uZmlndXJhdGlvbiwgQnVpbGRBcHBsaWNhdGlvbn0gZnJvbSAnLi9tZXRhZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbmZpZ3VyYXRpb24ge1xyXG5cclxuXHQvKiBTVEFUSUMgKi9cclxuXHJcblx0cHVibGljIHN0YXRpYyBzdG9yZVRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShCdWlsZEFwcGxpY2F0aW9uICsgXCJfYWNjZXNzX3Rva2VuXCIsIHRva2VuKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmV0cmlldmVUb2tlbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShCdWlsZEFwcGxpY2F0aW9uICsgXCJfYWNjZXNzX3Rva2VuXCIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0IHN0YW5kYXJkQ29uZmlndXJhdGlvbigpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyxcclxuXHRcdFx0dG9rZW46IG51bGxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdDogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBzZXREZWZhdWx0KGNvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcclxuXHJcblx0XHQvLyBGaXggbnVsbCB2YWx1ZXNcclxuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcblx0XHQvLyBNZXJnZSBuZXcgY29uZmlnIHZhbHVlcyBpbnRvIGN1c3RvbSB2YWx1ZXMuXHJcblx0XHR0aGlzLl9kZWZhdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdCwgY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdCgpOiBJQXBpQ29uZmlndXJhdGlvbiB7XHJcblx0XHQvLyBNZXJnZSBzdGFuZGFyZCB2YWx1ZXMgYW5kIGN1c3RvbSB2YWx1ZXMuXHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGFuZGFyZENvbmZpZ3VyYXRpb24sIHRoaXMuX2RlZmF1bHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQXBpIHtcclxuXHJcblx0LyogSU5TVEFOQ0UgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnPzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcclxuXHJcblx0XHQvLyBTZXQgaW5zdGFuY2UgY29uZmlndXJhdGlvblxyXG5cdFx0dGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xyXG5cclxuXHRwcml2YXRlIF9nZXRDb25maWd1cmF0aW9uKCk6IElBcGlDb25maWd1cmF0aW9uIHtcclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBCYXNlQ29uZmlndXJhdGlvbi5nZXREZWZhdWx0KCksIHRoaXMuX2NvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9nZXRIdHRwQ2xpZW50KGNvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fSk6SHR0cENsaWVudCB7XHJcblx0XHRyZXR1cm4gbmV3IEh0dHBDbGllbnQoKS5jb25maWd1cmUoY29uZmlnID0+XHJcblx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfZmV0Y2gobWV0aG9kOnN0cmluZywgdXJsOnN0cmluZywgZGF0YTphbnkgPSB1bmRlZmluZWQpOiBQcm9taXNlPGFueT4ge1xyXG5cclxuXHRcdC8vIEdldCBmcmVzaCBjb25maWd1cmF0aW9uXHJcblx0XHRsZXQgY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlndXJhdGlvbigpO1xyXG5cclxuXHRcdC8vIENvbWJpbmUgVVJMIGlmIG5vIHByb3RvY29sIGlzIHByZXNlbnRcclxuXHRcdHVybCA9IHVybC5pbmRleE9mKFwiOi8vXCIpID49IDBcclxuXHRcdFx0PyB1cmxcclxuXHRcdFx0OiBjb25maWcuYmFzZVVybCArIHVybDtcclxuXHJcblx0XHQvLyBEYXRhXHJcblx0XHRsZXQgYm9keTogc3RyaW5nIHwgQmxvYiA9XHJcblx0XHRcdGRhdGEgIT09IHVuZGVmaW5lZFxyXG5cdFx0XHRcdD8gQnVpbGRDb25maWd1cmF0aW9uID09IFwiZGVidWdcIlxyXG5cdFx0XHRcdFx0PyBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdFx0XHRcdFx0OiBqc29uKGRhdGEpXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8gSGVhZGVyc1xyXG5cdFx0bGV0IGhlYWRlcnMgPSB7fTtcclxuXHRcdGlmIChCdWlsZENvbmZpZ3VyYXRpb24gIT0gXCJkZWJ1Z1wiKSB7XHJcblx0XHRcdGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNvbmZpZy50b2tlbikge1xyXG5cdFx0XHRoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcrIGNvbmZpZy50b2tlbjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBNYWtlIFJlcXVlc3QgYW5kIHJldHVybiBQcm9taXNlXHJcblx0XHRyZXR1cm4gdGhpcy5fZ2V0SHR0cENsaWVudChjb25maWcpXHJcblx0XHRcdC5mZXRjaCh1cmwsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0XHRib2R5OiBib2R5LFxyXG5cdFx0XHRcdFx0aGVhZGVyczogaGVhZGVyc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRsZXQgY3QgPSByZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTtcclxuXHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIlVybFwiLCByZXNwb25zZS51cmwpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJDb250ZW50LVR5cGVcIiwgY3QpO1xyXG5cclxuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcclxuXHJcblx0XHRcdFx0XHQvLyBObyBDb250ZW50LVR5cGUgKDJ4eCBDb2RlLCBtYXliZSBOb0NvbnRlbnQgZXRjLilcclxuXHRcdFx0XHRcdGlmICghY3QpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVhbCBqc29uIG9iamVjdHNcclxuXHRcdFx0XHRcdGlmIChjdC5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gSnNvbiBTdHJpbmcgcmVzdWx0IGFuZCBvdGhlciB0ZXh0c1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY3QuaW5kZXhPZihcInRleHQvcGxhaW5cIikgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIEZpbGVzL0Jsb2JzP1xyXG5cdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0Ly8gVW5rbm93biBDb250ZW50IFR5cGUhXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgQ29udGVudC1UeXBlICdcIiArIGN0ICsgXCInIFxcclxcbiAgVXJsOiBcIiArIHJlc3BvbnNlLnVybCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBSZXNwb25zZSBpcyBub3Qgb2ssIGJ1dCBzb21laG93IGRpZG4ndCB0aHJvdyB1cCBlYXJsaWVyPyBUaHJvdyBpdCBub3chXHJcblx0XHRcdFx0dGhyb3cgcmVzcG9uc2U7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9nZXQodXJsOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJnZXRcIiwgdXJsKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcG9zdCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3BhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInBhdGNoXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2RlbGV0ZSh1cmw6c3RyaW5nLCBkYXRhOmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJkZWxldGVcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9oZWFkKHVybDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZldGNoKFwiaGVhZFwiLCB1cmwpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

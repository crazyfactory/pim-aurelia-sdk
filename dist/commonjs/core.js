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
        if (metadata_1.BuildConfiguration == "debug") {
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

//# sourceMappingURL=data:application/json;base64,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R0FBVTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVTLHVCQUFLLEdBQWYsVUFBZ0IsR0FBVSxFQUFFLElBQVE7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRVMsd0JBQU0sR0FBaEIsVUFBaUIsR0FBVSxFQUFFLElBQVE7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMseUJBQU8sR0FBakIsVUFBa0IsR0FBVSxFQUFFLElBQVE7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRVMsc0JBQUksR0FBZCxVQUFlLEdBQVUsRUFBRSxJQUFRO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVTLHVCQUFLLEdBQWYsVUFBZ0IsR0FBVTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQXRIQSxBQXNIQyxJQUFBO0FBdEhZLGVBQU8sVUFzSG5CLENBQUEiLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudCwganNvbn0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0ICdmZXRjaCc7XG5pbXBvcnQge0lBcGlDb25maWd1cmF0aW9uLCBJQXBpRXhjZXB0aW9ufSBmcm9tICdwaW0tY29yZSc7XG5pbXBvcnQge0J1aWxkQ29uZmlndXJhdGlvbiwgQnVpbGRBcHBsaWNhdGlvbn0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlndXJhdGlvbiB7XG5cblx0LyogU1RBVElDICovXG5cblx0cHVibGljIHN0YXRpYyBzdG9yZVRva2VuKHRva2VuOiBzdHJpbmcpIHtcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oQnVpbGRBcHBsaWNhdGlvbiArIFwiX2FjY2Vzc190b2tlblwiLCB0b2tlbik7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHJldHJpZXZlVG9rZW4oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKEJ1aWxkQXBwbGljYXRpb24gKyBcIl9hY2Nlc3NfdG9rZW5cIik7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBnZXQgc3RhbmRhcmRDb25maWd1cmF0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRiYXNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycsXG5cdFx0XHR0b2tlbjogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdDogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fTtcblxuXHRwdWJsaWMgc3RhdGljIHNldERlZmF1bHQoY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbikge1xuXG5cdFx0Ly8gRml4IG51bGwgdmFsdWVzXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG5cdFx0Ly8gTWVyZ2UgbmV3IGNvbmZpZyB2YWx1ZXMgaW50byBjdXN0b20gdmFsdWVzLlxuXHRcdHRoaXMuX2RlZmF1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0LCBjb25maWcpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCk6IElBcGlDb25maWd1cmF0aW9uIHtcblx0XHQvLyBNZXJnZSBzdGFuZGFyZCB2YWx1ZXMgYW5kIGN1c3RvbSB2YWx1ZXMuXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhbmRhcmRDb25maWd1cmF0aW9uLCB0aGlzLl9kZWZhdWx0KTtcblx0fTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VBcGkge1xuXG5cdC8qIElOU1RBTkNFICovXG5cblx0Y29uc3RydWN0b3IoY29uZmlnPzogSUFwaUNvbmZpZ3VyYXRpb24pIHtcblxuXHRcdC8vIFNldCBpbnN0YW5jZSBjb25maWd1cmF0aW9uXG5cdFx0dGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHR9XG5cblx0cHJpdmF0ZSBfY29uZmlnOiBJQXBpQ29uZmlndXJhdGlvbiA9IHt9O1xuXG5cdHByaXZhdGUgX2dldENvbmZpZ3VyYXRpb24oKTogSUFwaUNvbmZpZ3VyYXRpb24ge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBCYXNlQ29uZmlndXJhdGlvbi5nZXREZWZhdWx0KCksIHRoaXMuX2NvbmZpZyk7XG5cdH1cblxuXHRwcml2YXRlIF9nZXRIdHRwQ2xpZW50KGNvbmZpZzogSUFwaUNvbmZpZ3VyYXRpb24gPSB7fSk6SHR0cENsaWVudCB7XG5cdFx0cmV0dXJuIG5ldyBIdHRwQ2xpZW50KCkuY29uZmlndXJlKGNvbmZpZyA9PlxuXHRcdFx0Y29uZmlnXG5cdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgX2ZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTogUHJvbWlzZTxhbnk+IHtcblxuXHRcdC8vIEdldCBmcmVzaCBjb25maWd1cmF0aW9uXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMuX2dldENvbmZpZ3VyYXRpb24oKTtcblxuXHRcdC8vIENvbWJpbmUgVVJMIGlmIG5vIHByb3RvY29sIGlzIHByZXNlbnRcblx0XHR1cmwgPSB1cmwuaW5kZXhPZihcIjovL1wiKSA+PSAwXG5cdFx0XHQ/IHVybFxuXHRcdFx0OiBjb25maWcuYmFzZVVybCArIHVybDtcblxuXHRcdC8vIERhdGFcblx0XHRsZXQgYm9keTogc3RyaW5nIHwgQmxvYiA9XG5cdFx0XHRkYXRhICE9PSB1bmRlZmluZWRcblx0XHRcdFx0PyBCdWlsZENvbmZpZ3VyYXRpb24gPT0gXCJkZWJ1Z1wiXG5cdFx0XHRcdFx0PyBKU09OLnN0cmluZ2lmeShkYXRhKVxuXHRcdFx0XHRcdDoganNvbihkYXRhKVxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcblxuXHRcdC8vIEhlYWRlcnNcblx0XHRsZXQgaGVhZGVycyA9IHt9O1xuXHRcdGlmIChCdWlsZENvbmZpZ3VyYXRpb24gPT0gXCJkZWJ1Z1wiKSB7XG5cdFx0XHRoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblx0XHR9XG5cdFx0aWYgKGNvbmZpZy50b2tlbikge1xuXHRcdFx0aGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnKyBjb25maWcudG9rZW47XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBSZXF1ZXN0IGFuZCByZXR1cm4gUHJvbWlzZVxuXHRcdHJldHVybiB0aGlzLl9nZXRIdHRwQ2xpZW50KGNvbmZpZylcblx0XHRcdC5mZXRjaCh1cmwsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRtZXRob2Q6IG1ldGhvZCxcblx0XHRcdFx0XHRib2R5OiBib2R5LFxuXHRcdFx0XHRcdGhlYWRlcnM6IGhlYWRlcnNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGxldCBjdCA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xuXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJVcmxcIiwgcmVzcG9uc2UudXJsKTtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkNvbnRlbnQtVHlwZVwiLCBjdCk7XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cblx0XHRcdFx0XHQvLyBObyBDb250ZW50LVR5cGUgKDJ4eCBDb2RlLCBtYXliZSBOb0NvbnRlbnQgZXRjLilcblx0XHRcdFx0XHRpZiAoIWN0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBSZWFsIGpzb24gb2JqZWN0c1xuXHRcdFx0XHRcdGlmIChjdC5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSA+PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEpzb24gU3RyaW5nIHJlc3VsdCBhbmQgb3RoZXIgdGV4dHNcblx0XHRcdFx0XHRlbHNlIGlmIChjdC5pbmRleE9mKFwidGV4dC9wbGFpblwiKSA+PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZpbGVzL0Jsb2JzP1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly9cblxuXHRcdFx0XHRcdC8vIFVua25vd24gQ29udGVudCBUeXBlIVxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBDb250ZW50LVR5cGUgJ1wiICsgY3QgKyBcIicgXFxyXFxuICBVcmw6IFwiICsgcmVzcG9uc2UudXJsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlc3BvbnNlIGlzIG5vdCBvaywgYnV0IHNvbWVob3cgZGlkbid0IHRocm93IHVwIGVhcmxpZXI/IFRocm93IGl0IG5vdyFcblx0XHRcdFx0dGhyb3cgcmVzcG9uc2U7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBfZ2V0KHVybDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImdldFwiLCB1cmwpO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9wb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgX3BhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5fZmV0Y2goXCJwYXRjaFwiLCB1cmwsIGRhdGEpO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9kZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImRlbGV0ZVwiLCB1cmwsIGRhdGEpO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9wdXQodXJsOnN0cmluZywgZGF0YTphbnkpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9oZWFkKHVybDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9mZXRjaChcImhlYWRcIiwgdXJsKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

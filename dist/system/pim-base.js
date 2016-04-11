System.register(['aurelia-fetch-client', 'fetch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_fetch_client_1;
    var ApiController;
    return {
        setters:[
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (_1) {}],
        execute: function() {
            ApiController = (function () {
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
            exports_1("ApiController", ApiController);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQTJEQSxDQUFDO2dCQXJEQSxzQkFBa0Isd0JBQU87eUJBQXpCO3dCQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN0QixDQUFDO3lCQUVELFVBQTBCLEtBQWE7d0JBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbkIsQ0FBQzs7O21CQUxBO2dCQU9ELHNCQUFxQixxQkFBSTt5QkFBekI7d0JBQ0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlDQUFVLEVBQUUsQ0FBQzs0QkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dDQUMxQixPQUFBLE1BQU07cUNBQ0osd0JBQXdCLEVBQUU7cUNBQzFCLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzRCQUZyQyxDQUVxQyxDQUNyQyxDQUFDO3dCQUNILENBQUM7d0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ25CLENBQUM7OzttQkFBQTtnQkFFZ0IsbUJBQUssR0FBdEIsVUFBdUIsTUFBYSxFQUFFLEdBQVUsRUFBRSxJQUFvQjtvQkFBcEIsb0JBQW9CLEdBQXBCLGdCQUFvQjtvQkFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO3lCQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQ1gsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLDJCQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNoQixDQUFDO3lCQUNELElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFZ0IsaUJBQUcsR0FBcEIsVUFBcUIsR0FBVTtvQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVnQixrQkFBSSxHQUFyQixVQUFzQixHQUFVLEVBQUUsSUFBUTtvQkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFZ0IsbUJBQUssR0FBdEIsVUFBdUIsR0FBVSxFQUFFLElBQVE7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRWdCLG9CQUFNLEdBQXZCLFVBQXdCLEdBQVUsRUFBRSxJQUFRO29CQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVnQixpQkFBRyxHQUFwQixVQUFxQixHQUFVLEVBQUUsSUFBUTtvQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFZ0Isa0JBQUksR0FBckIsVUFBc0IsR0FBVSxFQUFFLElBQVE7b0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBdERjLHNCQUFRLEdBQVcsNEJBQTRCLENBQUM7Z0JBdURoRSxvQkFBQztZQUFELENBM0RBLEFBMkRDLElBQUE7WUEzREQseUNBMkRDLENBQUEiLCJmaWxlIjoicGltLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaUNvbnRyb2xsZXIge1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBfaHR0cDogSHR0cENsaWVudDtcclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgX2Jhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyc7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGJhc2VVcmwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmFzZVVybDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc2V0IGJhc2VVcmwodmFsdWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fYmFzZVVybCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5faHR0cCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIGdldCBodHRwKCk6SHR0cENsaWVudCB7XHJcblx0XHRpZiAoIXRoaXMuX2h0dHApIHtcclxuXHRcdFx0dGhpcy5faHR0cCA9IG5ldyBIdHRwQ2xpZW50KCk7XHJcblx0XHRcdHRoaXMuX2h0dHAuY29uZmlndXJlKGNvbmZpZyA9PlxyXG5cdFx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdFx0LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcblx0XHRcdFx0XHQud2l0aEJhc2VVcmwoQXBpQ29udHJvbGxlci5fYmFzZVVybClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9odHRwO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBmZXRjaChtZXRob2Q6c3RyaW5nLCB1cmw6c3RyaW5nLCBkYXRhOmFueSA9IHVuZGVmaW5lZCk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmZldGNoKHVybCwge1xyXG5cdFx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRcdGJvZHk6IGpzb24oZGF0YSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgZ2V0KHVybDpzdHJpbmcpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImdldFwiLCB1cmwpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJwb3N0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIHBhdGNoKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJwYXRjaFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBkZWxldGUodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImRlbGV0ZVwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBwdXQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInB1dFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBoZWFkKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJoZWFkXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

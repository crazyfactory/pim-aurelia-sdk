define(["require", "exports", 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
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
    exports.ApiController = ApiController;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBSUE7UUFBQTtRQTJEQSxDQUFDO1FBckRBLHNCQUFrQix3QkFBTztpQkFBekI7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEIsQ0FBQztpQkFFRCxVQUEwQixLQUFhO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQzs7O1dBTEE7UUFPRCxzQkFBcUIscUJBQUk7aUJBQXpCO2dCQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTt3QkFDMUIsT0FBQSxNQUFNOzZCQUNKLHdCQUF3QixFQUFFOzZCQUMxQixXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztvQkFGckMsQ0FFcUMsQ0FDckMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7OztXQUFBO1FBRWdCLG1CQUFLLEdBQXRCLFVBQXVCLE1BQWEsRUFBRSxHQUFVLEVBQUUsSUFBb0I7WUFBcEIsb0JBQW9CLEdBQXBCLGdCQUFvQjtZQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQ2QsS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsMkJBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEIsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVnQixpQkFBRyxHQUFwQixVQUFxQixHQUFVO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRWdCLGtCQUFJLEdBQXJCLFVBQXNCLEdBQVUsRUFBRSxJQUFRO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVnQixtQkFBSyxHQUF0QixVQUF1QixHQUFVLEVBQUUsSUFBUTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFZ0Isb0JBQU0sR0FBdkIsVUFBd0IsR0FBVSxFQUFFLElBQVE7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRWdCLGlCQUFHLEdBQXBCLFVBQXFCLEdBQVUsRUFBRSxJQUFRO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVnQixrQkFBSSxHQUFyQixVQUFzQixHQUFVLEVBQUUsSUFBUTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUF0RGMsc0JBQVEsR0FBVyw0QkFBNEIsQ0FBQztRQXVEaEUsb0JBQUM7SUFBRCxDQTNEQSxBQTJEQyxJQUFBO0lBM0RZLHFCQUFhLGdCQTJEekIsQ0FBQSIsImZpbGUiOiJwaW0tYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0ICdmZXRjaCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpQ29udHJvbGxlciB7XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIF9odHRwOiBIdHRwQ2xpZW50O1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBfYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvJztcclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXQgYmFzZVVybCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9iYXNlVXJsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBzZXQgYmFzZVVybCh2YWx1ZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9iYXNlVXJsID0gdmFsdWU7XHJcblx0XHR0aGlzLl9odHRwID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgZ2V0IGh0dHAoKTpIdHRwQ2xpZW50IHtcclxuXHRcdGlmICghdGhpcy5faHR0cCkge1xyXG5cdFx0XHR0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQoKTtcclxuXHRcdFx0dGhpcy5faHR0cC5jb25maWd1cmUoY29uZmlnID0+XHJcblx0XHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuXHRcdFx0XHRcdC53aXRoQmFzZVVybChBcGlDb250cm9sbGVyLl9iYXNlVXJsKVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHA7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIGZldGNoKG1ldGhvZDpzdHJpbmcsIHVybDpzdHJpbmcsIGRhdGE6YW55ID0gdW5kZWZpbmVkKTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZmV0Y2godXJsLCB7XHJcblx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0Ym9keToganNvbihkYXRhKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBnZXQodXJsOnN0cmluZyk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwiZ2V0XCIsIHVybCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIHBvc3QodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBvc3RcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgcGF0Y2godXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcInBhdGNoXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIGRlbGV0ZSh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwiZGVsZXRlXCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIHB1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwicHV0XCIsIHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIGhlYWQodXJsOnN0cmluZywgZGF0YTphbnkpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChcImhlYWRcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

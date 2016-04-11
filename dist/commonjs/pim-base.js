"use strict";
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
require('fetch');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCxRQUFPLE9BQU8sQ0FBQyxDQUFBO0FBRWY7SUFBQTtJQTJEQSxDQUFDO0lBckRBLHNCQUFrQix3QkFBTzthQUF6QjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUEwQixLQUFhO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7OztPQUxBO0lBT0Qsc0JBQXFCLHFCQUFJO2FBQXpCO1lBQ0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlDQUFVLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO29CQUMxQixPQUFBLE1BQU07eUJBQ0osd0JBQXdCLEVBQUU7eUJBQzFCLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUZyQyxDQUVxQyxDQUNyQyxDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRWdCLG1CQUFLLEdBQXRCLFVBQXVCLE1BQWEsRUFBRSxHQUFVLEVBQUUsSUFBb0I7UUFBcEIsb0JBQW9CLEdBQXBCLGdCQUFvQjtRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ1gsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsMkJBQUksQ0FBQyxJQUFJLENBQUM7U0FDaEIsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRWdCLGlCQUFHLEdBQXBCLFVBQXFCLEdBQVU7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFZ0Isa0JBQUksR0FBckIsVUFBc0IsR0FBVSxFQUFFLElBQVE7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRWdCLG1CQUFLLEdBQXRCLFVBQXVCLEdBQVUsRUFBRSxJQUFRO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVnQixvQkFBTSxHQUF2QixVQUF3QixHQUFVLEVBQUUsSUFBUTtRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFZ0IsaUJBQUcsR0FBcEIsVUFBcUIsR0FBVSxFQUFFLElBQVE7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRWdCLGtCQUFJLEdBQXJCLFVBQXNCLEdBQVUsRUFBRSxJQUFRO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXREYyxzQkFBUSxHQUFXLDRCQUE0QixDQUFDO0lBdURoRSxvQkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRFkscUJBQWEsZ0JBMkR6QixDQUFBIiwiZmlsZSI6InBpbS1iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwganNvbn0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQgJ2ZldGNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlDb250cm9sbGVyIHtcclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgX2h0dHA6IEh0dHBDbGllbnQ7XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIF9iYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS8nO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBiYXNlVXJsKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Jhc2VVcmw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHNldCBiYXNlVXJsKHZhbHVlOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX2Jhc2VVcmwgPSB2YWx1ZTtcclxuXHRcdHRoaXMuX2h0dHAgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBnZXQgaHR0cCgpOkh0dHBDbGllbnQge1xyXG5cdFx0aWYgKCF0aGlzLl9odHRwKSB7XHJcblx0XHRcdHRoaXMuX2h0dHAgPSBuZXcgSHR0cENsaWVudCgpO1xyXG5cdFx0XHR0aGlzLl9odHRwLmNvbmZpZ3VyZShjb25maWcgPT5cclxuXHRcdFx0XHRjb25maWdcclxuXHRcdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG5cdFx0XHRcdFx0LndpdGhCYXNlVXJsKEFwaUNvbnRyb2xsZXIuX2Jhc2VVcmwpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgZmV0Y2gobWV0aG9kOnN0cmluZywgdXJsOnN0cmluZywgZGF0YTphbnkgPSB1bmRlZmluZWQpOlByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5mZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0XHRib2R5OiBqc29uKGRhdGEpXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgc3RhdGljIGdldCh1cmw6c3RyaW5nKTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJnZXRcIiwgdXJsKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgcG9zdCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwicG9zdFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHN0YXRpYyBwYXRjaCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwicGF0Y2hcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgZGVsZXRlKHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJkZWxldGVcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55KTpQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goXCJwdXRcIiwgdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBzdGF0aWMgaGVhZCh1cmw6c3RyaW5nLCBkYXRhOmFueSk6UHJvbWlzZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKFwiaGVhZFwiLCB1cmwsIGRhdGEpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

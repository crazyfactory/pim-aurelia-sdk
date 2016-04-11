System.register(['../pim-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var pim_base_1;
    var CountriesController;
    return {
        setters:[
            function (pim_base_1_1) {
                pim_base_1 = pim_base_1_1;
            }],
        execute: function() {
            CountriesController = (function (_super) {
                __extends(CountriesController, _super);
                function CountriesController() {
                    _super.apply(this, arguments);
                }
                CountriesController.Create = function (data) {
                    return this.put("api/countries", data);
                };
                CountriesController.Delete = function (key) {
                    return this.delete("api/countries", key);
                };
                CountriesController.Get = function (key) {
                    return this.get("api/countries/" + key);
                };
                CountriesController.GetAll = function () {
                    return this.get("api/countries");
                };
                CountriesController.Update = function (data) {
                    return this.patch("api/countries", data);
                };
                return CountriesController;
            }(pim_base_1.ApiController));
            exports_1("CountriesController", CountriesController);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NvdW50cmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQXlDLHVDQUFhO2dCQUF0RDtvQkFBeUMsOEJBQWE7Z0JBcUJ0RCxDQUFDO2dCQXBCaUIsMEJBQU0sR0FBcEIsVUFBcUIsSUFBa0I7b0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFFYSwwQkFBTSxHQUFwQixVQUFxQixHQUFXO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRWEsdUJBQUcsR0FBakIsVUFBa0IsR0FBVztvQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQWlCLEdBQUssQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVhLDBCQUFNLEdBQXBCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVhLDBCQUFNLEdBQXBCLFVBQXFCLElBQWtCO29CQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUwsMEJBQUM7WUFBRCxDQXJCQSxBQXFCQyxDQXJCd0Msd0JBQWEsR0FxQnJEO1lBckJELHFEQXFCQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2NvdW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXHJcblxyXG4gICBWZXJzaW9uOiBERVZcclxuICAgRGF0ZTogICAgNC8xMS8yMDE2IDExOjA0OjEzXHJcbiovXHJcblxyXG5pbXBvcnQge0FwaUNvbnRyb2xsZXJ9IGZyb20gJy4uL3BpbS1iYXNlJztcclxuaW1wb3J0IHtJQ291bnRyeURhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNDb250cm9sbGVyIGV4dGVuZHMgQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJQ291bnRyeURhdGEpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dChgYXBpL2NvdW50cmllc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKGtleTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvY291bnRyaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY291bnRyaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QWxsKCk6IFByb21pc2U8SUNvdW50cnlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jb3VudHJpZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVwZGF0ZShkYXRhOiBJQ291bnRyeURhdGEpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

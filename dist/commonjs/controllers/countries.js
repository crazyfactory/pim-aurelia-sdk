"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_1 = require('../pim-base');
var CountriesController = (function (_super) {
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
exports.CountriesController = CountriesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NvdW50cmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFPQSx5QkFBNEIsYUFBYSxDQUFDLENBQUE7QUFHMUM7SUFBeUMsdUNBQWE7SUFBdEQ7UUFBeUMsOEJBQWE7SUFxQnRELENBQUM7SUFwQmlCLDBCQUFNLEdBQXBCLFVBQXFCLElBQWtCO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRWEsMEJBQU0sR0FBcEIsVUFBcUIsR0FBVztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVhLHVCQUFHLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQWlCLEdBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFYSwwQkFBTSxHQUFwQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFYSwwQkFBTSxHQUFwQixVQUFxQixJQUFrQjtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVMLDBCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQndDLHdCQUFhLEdBcUJyRDtBQXJCWSwyQkFBbUIsc0JBcUIvQixDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2NvdW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXHJcblxyXG4gICBWZXJzaW9uOiBERVZcclxuICAgRGF0ZTogICAgNC8xMS8yMDE2IDExOjA0OjEzXHJcbiovXHJcblxyXG5pbXBvcnQge0FwaUNvbnRyb2xsZXJ9IGZyb20gJy4uL3BpbS1iYXNlJztcclxuaW1wb3J0IHtJQ291bnRyeURhdGF9IGZyb20gJ3BpbS1kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNDb250cm9sbGVyIGV4dGVuZHMgQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJQ291bnRyeURhdGEpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dChgYXBpL2NvdW50cmllc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKGtleTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvY291bnRyaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SUNvdW50cnlEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY291bnRyaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QWxsKCk6IFByb21pc2U8SUNvdW50cnlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jb3VudHJpZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVwZGF0ZShkYXRhOiBJQ291bnRyeURhdGEpOiBQcm9taXNlPElDb3VudHJ5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvY291bnRyaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

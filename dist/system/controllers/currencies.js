System.register(['../pim-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var pim_base_1;
    var CurrenciesController;
    return {
        setters:[
            function (pim_base_1_1) {
                pim_base_1 = pim_base_1_1;
            }],
        execute: function() {
            CurrenciesController = (function (_super) {
                __extends(CurrenciesController, _super);
                function CurrenciesController() {
                    _super.apply(this, arguments);
                }
                CurrenciesController.Create = function (data) {
                    return this.put("api/currencies", data);
                };
                CurrenciesController.Delete = function (key) {
                    return this.delete("api/currencies", key);
                };
                CurrenciesController.Get = function (key) {
                    return this.get("api/currencies/" + key);
                };
                CurrenciesController.GetAll = function () {
                    return this.get("api/currencies");
                };
                CurrenciesController.GetRate = function (key, date) {
                    return this.get("api/currencies/" + key + "/rates/" + date);
                };
                CurrenciesController.Update = function (data) {
                    return this.patch("api/currencies", data);
                };
                return CurrenciesController;
            }(pim_base_1.PimBase.ApiController));
            exports_1("CurrenciesController", CurrenciesController);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2N1cnJlbmNpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUEwQyx3Q0FBcUI7Z0JBQS9EO29CQUEwQyw4QkFBcUI7Z0JBeUIvRCxDQUFDO2dCQXhCaUIsMkJBQU0sR0FBcEIsVUFBcUIsSUFBbUI7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVhLDJCQUFNLEdBQXBCLFVBQXFCLEdBQVc7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUVhLHdCQUFHLEdBQWpCLFVBQWtCLEdBQVc7b0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFrQixHQUFLLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFYSwyQkFBTSxHQUFwQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVhLDRCQUFPLEdBQXJCLFVBQXNCLEdBQVcsRUFBRSxJQUFZO29CQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsR0FBRyxlQUFVLElBQU0sQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUVhLDJCQUFNLEdBQXBCLFVBQXFCLElBQW1CO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFTCwyQkFBQztZQUFELENBekJBLEFBeUJDLENBekJ5QyxrQkFBTyxDQUFDLGFBQWEsR0F5QjlEO1lBekJELHVEQXlCQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2N1cnJlbmNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgNC84LzIwMTYgMTQ6MjU6MzNcclxuKi9cclxuXHJcbi8qIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLiAqL1xyXG5cclxuaW1wb3J0IHtQaW1CYXNlfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SUN1cnJlbmN5RGF0YSwgSUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YX0gZnJvbSAnLi4vcGltLWRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNDb250cm9sbGVyIGV4dGVuZHMgUGltQmFzZS5BcGlDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IElDdXJyZW5jeURhdGEpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoYGFwaS9jdXJyZW5jaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoYGFwaS9jdXJyZW5jaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRBbGwoKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYXRlKGtleTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeUV4Y2hhbmdlUmF0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fS9yYXRlcy8ke2RhdGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSUN1cnJlbmN5RGF0YSk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

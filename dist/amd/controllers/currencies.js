var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../pim-base'], function (require, exports, pim_base_1) {
    "use strict";
    var CurrenciesController = (function (_super) {
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
    exports.CurrenciesController = CurrenciesController;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2N1cnJlbmNpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQVlBO1FBQTBDLHdDQUFxQjtRQUEvRDtZQUEwQyw4QkFBcUI7UUF5Qi9ELENBQUM7UUF4QmlCLDJCQUFNLEdBQXBCLFVBQXFCLElBQW1CO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFYSwyQkFBTSxHQUFwQixVQUFxQixHQUFXO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFYSx3QkFBRyxHQUFqQixVQUFrQixHQUFXO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFrQixHQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRWEsMkJBQU0sR0FBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFYSw0QkFBTyxHQUFyQixVQUFzQixHQUFXLEVBQUUsSUFBWTtZQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsR0FBRyxlQUFVLElBQU0sQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFYSwyQkFBTSxHQUFwQixVQUFxQixJQUFtQjtZQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRUwsMkJBQUM7SUFBRCxDQXpCQSxBQXlCQyxDQXpCeUMsa0JBQU8sQ0FBQyxhQUFhLEdBeUI5RDtJQXpCWSw0QkFBb0IsdUJBeUJoQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2N1cnJlbmNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgNC84LzIwMTYgMTQ6MjU6MzNcclxuKi9cclxuXHJcbi8qIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLiAqL1xyXG5cclxuaW1wb3J0IHtQaW1CYXNlfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SUN1cnJlbmN5RGF0YSwgSUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YX0gZnJvbSAnLi4vcGltLWRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNDb250cm9sbGVyIGV4dGVuZHMgUGltQmFzZS5BcGlDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IElDdXJyZW5jeURhdGEpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoYGFwaS9jdXJyZW5jaWVzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoYGFwaS9jdXJyZW5jaWVzYCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChrZXk6IHN0cmluZyk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChgYXBpL2N1cnJlbmNpZXMvJHtrZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRBbGwoKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYXRlKGtleTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeUV4Y2hhbmdlUmF0ZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fS9yYXRlcy8ke2RhdGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSUN1cnJlbmN5RGF0YSk6IFByb21pc2U8SUN1cnJlbmN5RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

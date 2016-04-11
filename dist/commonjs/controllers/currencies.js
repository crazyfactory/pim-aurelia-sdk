"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_1 = require('../pim-base');
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
}(pim_base_1.ApiController));
exports.CurrenciesController = CurrenciesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2N1cnJlbmNpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EseUJBQTRCLGFBQWEsQ0FBQyxDQUFBO0FBRzFDO0lBQTBDLHdDQUFhO0lBQXZEO1FBQTBDLDhCQUFhO0lBeUJ2RCxDQUFDO0lBeEJpQiwyQkFBTSxHQUFwQixVQUFxQixJQUFtQjtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRWEsMkJBQU0sR0FBcEIsVUFBcUIsR0FBVztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRWEsd0JBQUcsR0FBakIsVUFBa0IsR0FBVztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsR0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVhLDJCQUFNLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRWEsNEJBQU8sR0FBckIsVUFBc0IsR0FBVyxFQUFFLElBQVk7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQWtCLEdBQUcsZUFBVSxJQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRWEsMkJBQU0sR0FBcEIsVUFBcUIsSUFBbUI7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QnlDLHdCQUFhLEdBeUJ0RDtBQXpCWSw0QkFBb0IsdUJBeUJoQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2N1cnJlbmNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgIDQvMTEvMjAxNiAxMTowNDoxM1xyXG4qL1xyXG5cclxuaW1wb3J0IHtBcGlDb250cm9sbGVyfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SUN1cnJlbmN5RGF0YSwgSUN1cnJlbmN5RXhjaGFuZ2VSYXRlRGF0YX0gZnJvbSAncGltLWRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNDb250cm9sbGVyIGV4dGVuZHMgQXBpQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJQ3VycmVuY3lEYXRhKTogUHJvbWlzZTxJQ3VycmVuY3lEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvY3VycmVuY2llc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKGtleTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvY3VycmVuY2llc2AsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9jdXJyZW5jaWVzLyR7a2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QWxsKCk6IFByb21pc2U8SUN1cnJlbmN5RGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY3VycmVuY2llc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmF0ZShrZXk6IHN0cmluZywgZGF0ZTogc3RyaW5nKTogUHJvbWlzZTxJQ3VycmVuY3lFeGNoYW5nZVJhdGVEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvY3VycmVuY2llcy8ke2tleX0vcmF0ZXMvJHtkYXRlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBkYXRlKGRhdGE6IElDdXJyZW5jeURhdGEpOiBQcm9taXNlPElDdXJyZW5jeURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRjaChgYXBpL2N1cnJlbmNpZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
